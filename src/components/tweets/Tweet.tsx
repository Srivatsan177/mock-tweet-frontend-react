import {
  Box,
  CardContent,
  Typography,
  Card,
  CardActions,
  Button,
  ButtonBase,
} from "@mui/material";
import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  Favorite,
  Share,
  ChatBubbleOutlineOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import TweetAction from "./TweetAction";
import { post } from "../../utils/api";
export default function Tweet({
  id,
  username,
  tweet,
  like,
  liked_by_user,
  mutate,
}: {
  id: string;
  username: string;
  tweet: string;
  like: Number;
  liked_by_user: Boolean;
}) {
    const handleLike = async (id: string) => {
        await post(`/like-tweet/${id}`)
        mutate()
    }
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "block",
        marginBottom: "1em",
        marginTop: "1em",
        padding: "0.1em",
        backgroundColor: "#abc",
        borderRadius: "1em",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "1em",
        }}
      >
        <CardContent
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/tweet/${id}`)}
        >
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
          <TweetAction
            handleClick={() => handleLike(id)}
            icon={
              liked_by_user ? (
                <Favorite color="error" />
              ) : (
                <FavoriteBorderOutlined color="error" />
              )
            }
            count={like}
          />
          <Button color="success">
            <Share />
          </Button>
          <Button color="inherit" onClick={() => navigate(`/tweet/${id}`, { state: { autofocus: true } })}>
            <ChatBubbleOutlineOutlined />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
