import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const LoginForm = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (
      !/\S+@\S+\.\S+/.test(email)
    ) {
      setError(
        "Please enter a valid email"
      );
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters"
      );
      return;
    }

    login(
      {
        id: "1",
        name: "Ajay",
        email,
      },
      "fake-jwt-token"
    );

    navigate("/workspace/dashboard");
  };

  return (
    <div className="space-y-5">
      {error && (
        <div className="rounded-lg border border-red-500 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Email
        </label>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Password
        </label>

        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </div>

      <Button onClick={handleLogin}>
        Sign In
      </Button>

      <p className="text-center text-sm text-slate-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-400 hover:text-indigo-300"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;