import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const LoginForm = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login(
      {
        id: "1",
        name: "Ajay",
        email: "ajay@example.com",
      },
      "fake-jwt-token"
    );

    navigate("/workspace/dashboard");
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Email
        </label>

        <Input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Password
        </label>

        <Input
          type="password"
          placeholder="Enter your password"
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