import { useState } from "react";
import "./PostInput.css";

type PostInputProps = {
  user: string; // logged-in username
  onPost: (data: { text: string; category: string; audience: string; user: string }) => void;
};

const PostInput = ({ user, onPost }: PostInputProps) => {
  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [audience, setAudience] = useState<string>("");

  const handlePost = () => {
    if (!category || !audience) {
      alert("Please select both categories.");
      return;
    }

    if (!text.trim()) {
      alert("Please write something.");
      return;
    }

    onPost({ text, category, audience, user }); // include username

    // reset inputs
    setText("");
    setCategory("");
    setAudience("");
  };

  return (
    <div className="post-container">
      <textarea
        placeholder="Write here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-area"
        rows={3}
      />

      <div className="dropdown-container">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Inventory">Inventory</option>
          <option value="Music">Music</option>
          <option value="Place">Place</option>
          <option value="Reminder">Reminder</option>
          <option value="Task">Task</option>
          <option value="Event">Event</option>
        </select>

        <select value={audience} onChange={(e) => setAudience(e.target.value)}>
          <option value="">Select Audience</option>
          <option value="Everyone">Everyone</option>
          <option value="Private">Private</option>
        </select>
      </div>

      <button onClick={handlePost} className="post-button">
        Post
      </button>
    </div>
  );
};

export default PostInput;
