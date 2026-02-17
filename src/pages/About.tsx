import { useState } from "react";

type AboutProps = {
  username: string;
};

const About = ({ username }: AboutProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    alert(`Your message has been sent: "${message}"`);
    setMessage("");
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome, {username} 👋</h1>

      <p>
        I am <strong>Ceril Heyrosa</strong>, the creator of FamBam Web. 
        This is a simple personal website designed for family members to post messages 
        either publicly or to selected members, and to stay updated on the inventory at our family headquarters (Lola's house).
      </p>

      <p>
        Feel free to send me your messages, suggestions, or feedback using the box below:
      </p>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ flex: 1, padding: "8px", fontSize: "16px" }}
        />
        <button onClick={handleSend} style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}>
          Send
        </button>
      </div>

      <div>
        <h3>Socials:</h3>
        <p>Facebook: <a href="#" target="_blank">Placeholder</a></p>
        <p>Instagram: <a href="#" target="_blank">Placeholder</a></p>
      </div>
    </div>
  );
};

export default About;
