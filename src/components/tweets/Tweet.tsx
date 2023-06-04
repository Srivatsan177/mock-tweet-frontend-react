import { Box, CardContent, Typography, Card, CardActions, Button, ButtonBase } from "@mui/material"
import { AccountCircleOutlined, FavoriteBorderOutlined, Share, ChatBubbleOutlineOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router"
export default function Tweet({ id, username, tweet }: { id: string, username: string, tweet: string }) {
    const navigate = useNavigate()
    return (
        <Box sx={{
            display: "block",
            marginBottom: "1em",
            marginTop: "1em",
            padding: "0.1em",
            backgroundColor: "#abc",
            borderRadius: "1em"
        }}>
            <Card
                variant="outlined"
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: "1em",
                }}
                // onClick={() => navigate(`tweet/${id}`)}
            >
                <CardContent sx={{cursor: "pointer"}} onClick={() => navigate(`/tweet/${id}`)}>
                    <Typography variant="h5">
                        <AccountCircleOutlined />
                        {username}
                    </Typography>
                    <hr />
                    <Typography component="pre" variant="h6">
                        {tweet}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button><FavoriteBorderOutlined color="error" /></Button>
                    <Button color="success"><Share /></Button>
                    <Button color="inherit"><ChatBubbleOutlineOutlined /></Button>
                </CardActions>
            </Card>
        </Box>
    )
}
