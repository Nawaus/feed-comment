import { useState } from "react";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 100000),
      author: author,
      content: content,
      createdAt: new Date(),
    };

    setComments((state) => [newComment, ...state]);
    setAuthor("");
    setContent("");
  };

  return (
    <div id="app">
      <form action="">
        <h2>Comment section</h2>
        <label htmlFor="email">Email</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          id="email"
          required
        />
        <label htmlFor="content">Comment</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          id="content"
          cols="30"
          rows="6"></textarea>
        <button type="button" onClick={handleSubmit}>
          Submit Comment
        </button>
      </form>
      <hr />
      <section>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>At {comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>be the first to comment</p>
        )}
      </section>
    </div>
  );
}

export default App;
