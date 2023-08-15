import EmailInput from "../EmailInput";
import InputComment from "../InputComment";

export default function FeedForm() {
  return (
    <form style={{ padding: "4rem" }}>
      <h1>Comments Section</h1>
      <EmailInput label="Email" id="email" />
      <InputComment label="Comment" id="comment" />
      <button
        style={{
          width: "30.5rem",
          height: "3em",
          marginTop: "2em",
          cursor: "pointer",
          border: "none",
          borderRadius: "0.4rem",
          fontWeight: "400",
        }}>
        Submit Comment
      </button>
      <hr style={{ marginTop: "2rem" }} />
    </form>
  );
}
