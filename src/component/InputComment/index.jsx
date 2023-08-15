export default function InputComment({ label, id }) {
  return (
    <div>
      <label style={{ marginTop: "2rem" }} htmlFor={id}>
        {label}
      </label>
      <textarea
        style={{ display: "flex", marginTop: "1rem" }}
        name={id}
        id={id}
        cols="66"
        rows="10"></textarea>
    </div>
  );
}
