import CommentTemplate from "./CommentTemplate";
import { valueConverter } from "../../Store/store";
import { useEffect, useState } from "react";
import {API_KEY} from "../../../secret"

export default function VideoComments({commentCount, singleVideoId}) {

  const [allComments, setAllComments] = useState();

  const getComments = async() => {
    await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${singleVideoId}&key=${API_KEY}`)
    .then(res=> res.json())
    .then(data => setAllComments(data.items))
  }

  useEffect(() => {
    getComments();
  }, [])

  return (
    <>
    <h2 className="font-semibold text-2xl">{commentCount? valueConverter(commentCount) : "23"} Comments</h2>
    <div id="allComments" className="my-4">
      {allComments ? allComments.map(comment => <CommentTemplate key={comment.id} commentContent={comment.snippet.topLevelComment.snippet} />) : <CommentTemplate />}
    </div>
    </>
  )
}