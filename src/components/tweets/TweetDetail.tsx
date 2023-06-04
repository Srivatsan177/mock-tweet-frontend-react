import { useState } from "react";
import Tweet from "./Tweet";
import { useParams } from "react-router";
import { TextField, Box, Toolbar } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { get, post } from "../../utils/api";
import useSWR from "swr";

export default function TweetDetail() {
  const { tweet_id }: { tweet_id: string } = useParams();

  const [comment, setComment] = useState("");
  const {
    data: tweetDetail,
    isLoading,
    mutate: mutateComment,
  } = useSWR(`/tweet/${tweet_id}`, get);
  if (isLoading) return <>Loading</>;

  function addComment() {
    (async () => {
      await post(`/comment-tweet/${tweet_id}`, { tweet: comment });
      setComment("");
      mutateComment();
    })();
  }
  return (
    <Box sx={{ padding: "1em" }}>
      <Tweet
        id={tweet_id}
        username={tweetDetail.tweet.username}
        tweet={tweetDetail.tweet.tweet}
      />
      <hr />
      <TextField
        fullWidth
        multiline
        value={comment}
        label="Comment"
        onChange={(e) => setComment(e.target.value)}
        InputProps={{
          endAdornment: <PlayArrow color="primary" sx={{cursor: "pointer"}} onClick={addComment} />,
        }}
      />
      <div>
        {tweetDetail.tweet_comments.map((tweetComment) => (
          <Tweet
            key={tweetComment.id}
            id={tweetComment.id}
            username={tweetComment.username}
            tweet={tweetComment.tweet}
          />
        ))}
      </div>
    </Box>
  );
}
