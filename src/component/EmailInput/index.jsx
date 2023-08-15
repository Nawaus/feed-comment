export default function EmailInput({ label, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label> <br />
      <input
        type="text"
        id={id}
        style={{ width: "30rem", height: "2rem", marginTop: "0.8rem" }}
      />
    </>
  );
}
