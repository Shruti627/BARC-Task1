import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectRoute({ allowedRole, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    // If role is missing or not allowed, redirect to landing page
    if (!role || role !== allowedRole) {
      navigate("/");
    }
  }, [allowedRole, navigate]);

  return children;
}
