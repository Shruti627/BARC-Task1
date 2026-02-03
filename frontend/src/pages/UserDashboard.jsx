import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UserDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "user") navigate("/");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>User Dashboard</h1>
        <p style={styles.text}>Welcome! You are logged in.</p>
        <button style={styles.button} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}




const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
    minWidth: "320px",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    marginBottom: "20px",
    color: "#666",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#ef4444",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.2s",
  },
};
