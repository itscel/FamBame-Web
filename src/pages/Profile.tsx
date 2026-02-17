type ProfileProps = {
  username: string;
};

const Profile = ({ username }: ProfileProps) => {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>Profile Page</h1>
      <p>Welcome, {username} 👋</p>
    </div>
  );
};

export default Profile;
