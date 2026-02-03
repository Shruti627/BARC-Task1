import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email: form.email,
          password: form.password
        });
        const role = res.data.role;

        
        localStorage.setItem("role", role);

        navigate(`/${role}`);
      } else {
        await axios.post("http://localhost:5000/api/auth/register", form);
        alert("Account created! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>

      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p style={styles.subtitle}>
            {isLogin
              ? "Enter your details to access your dashboard"
              : "Join our community today"}
          </p>
        </div>

        <div style={styles.formGroup}>
          {!isLogin && (
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Full Name</label>
              <input
                name="name"
                placeholder="full name"
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          )}

          <div style={styles.inputWrapper}>
            <label style={styles.label}>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputWrapper}>
            <label style={styles.label}>Password</label>
            <input
              name="password"
              type="password"
              placeholder="•••••••"
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {!isLogin && (
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Assign Role</label>
              <select name="role" onChange={handleChange} style={styles.input}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                {/* <option value="superadmin">SuperAdmin</option> */}
              </select>
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
        >
          {loading ? "Processing..." : isLogin ? "Sign In" : "Register"}
        </button>

        <p style={styles.footerText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)} style={styles.toggleLink}>
            {isLogin ? "Sign up free" : "Log in here"}
          </span>
        </p>
      </div>
    </div>
  );
}

// ... styles remain unchanged

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily: "'Inter', sans-serif",


    position: "relative",
    overflow: "hidden"
  },
  
  blob1: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    borderRadius: "50%",
 filter: "blur(80px)",
    opacity: "0.15",
    top: "-100px",
    left: "-100px",
    zIndex: 0
  },
  blob2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)",
    borderRadius: "50%",
    filter: "blur(80px)",
    opacity: "0.15",
    bottom: "-100px",
    right: "-100px",
    zIndex: 0
  },
  card: {
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "24px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    zIndex: 1,
    border: "1px solid rgba(255, 255, 255, 0.5)"
  },
  header: {
    textAlign: "center",
    marginBottom: "32px"
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 8px 0"
  },
  subtitle: {
    fontSize: "14px",
    color: "#64748b",
    margin: 0
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569",
    marginLeft: "4px"
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    backgroundColor: "#fff"
  },
  button: {
    width: "100%",
    padding: "14px",
    marginTop: "30px",
    background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.4)",
    transition: "transform 0.2s, opacity 0.2s"
  },
  buttonDisabled: {
    opacity: 0.7,
    cursor: "not-allowed"
  },
  footerText: {
    textAlign: "center",
    marginTop: "24px",
    fontSize: "14px",
    color: "#64748b"
  },
  toggleLink: {
    color: "#4f46e5",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "underline"
  }
};