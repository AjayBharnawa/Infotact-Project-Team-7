import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");

  const handleRegister = () => {
    setError("");

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

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

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match"
      );
      return;
    }

    navigate("/login");
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
          Name
        </label>

        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />
      </div>

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
          placeholder="Create password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Confirm Password
        </label>

        <Input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />
      </div>

      <Button onClick={handleRegister}>
        Create Account
      </Button>

      <p className="text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-400 hover:text-indigo-300"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;