import { Modal, Box, Typography, FormControl, TextField, Button } from "@mui/material";
import { useState } from "react";
import { post } from "../../utils/api";

const style = {
    position: "absolute",
    textAlign: "center",
    left: "40%",
    width: "20%",
    top: "40%",
    padding: "1em",
    backgroundColor: "#fff",
}

export default function AddTweet({ open, handleClose }) {
    const [tweet, setTweet] = useState("");
    async function handleSubmit(e) {
        e.preventDefault()
        await post("/tweet", { tweet })
        setTweet("")
        handleClose(false)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box
                sx={style}
            >
                <Typography variant="h6">Post a Tweet</Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <TextField multiline required sx={{ marginBottom: "1em" }} value={tweet} rows="4" onChange={(e) => setTweet(e.target.value)} label="Tweet"></TextField>
                        <Button color="primary" type="submit" variant="outlined">Tweet</Button>
                    </FormControl>
                </form>
            </Box>
        </Modal>
    )
}
