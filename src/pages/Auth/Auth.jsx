
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const accounts = JSON.parse(
      localStorage.getItem("pabricaAccounts") || "[]"
    );

    if (isLogin) {
      const account = accounts.find(
        (user) =>
          user.email.toLowerCase() === formData.email.trim().toLowerCase() &&
          user.phone === formData.phone.trim()
      );

      if (!account) {
        setError("Account not found. Please check your email and phone number.");
        return;
      }

      localStorage.setItem("pabricaUser", JSON.stringify(account));
    } else {
      const existingAccount = accounts.find(
        (user) =>
          user.email.toLowerCase() === formData.email.trim().toLowerCase()
      );

      if (existingAccount) {
        setError("This email is already registered. Please sign in.");
        return;
      }

      const newAccount = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      };

      accounts.push(newAccount);

      localStorage.setItem("pabricaAccounts", JSON.stringify(accounts));
      localStorage.setItem("pabricaUser", JSON.stringify(newAccount));
    }

    navigate("/checkout");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <span>pabrica</span>
        </div>

        <h1>{isLogin ? "Welcome Back" : "Create Your Account"}</h1>

        <p className="auth-subtitle">
          {isLogin
            ? "Sign in to continue your purchase."
            : "Create an account to continue your purchase."}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="auth-field">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="auth-field">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit-btn">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setFormData({ name: "", email: "", phone: "" });
            }}
          >
            {isLogin ? "Create Account" : "Sign In"}
          </button>
        </div>

        <p className="auth-terms">
          By continuing, you agree to our Terms and Conditions.
        </p>
      </div>
    </main>
  );
}
