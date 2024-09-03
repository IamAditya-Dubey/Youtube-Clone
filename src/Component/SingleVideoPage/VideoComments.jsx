import CommentTemplate from "./CommentTemplate";

export default function VideoComments() {
  return (
    <>
    <h2 className="font-semibold text-2xl">1,123 Comments</h2>
    <div id="allComments" className="my-4">
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
      <CommentTemplate />
    </div>
    </>
  )
}