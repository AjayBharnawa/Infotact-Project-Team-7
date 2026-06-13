import { Link, useNavigate } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Name
        </label>

        <Input
          type="text"
          placeholder="Enter your name"
        />
      </div>

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
          placeholder="Create password"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Confirm Password
        </label>

        <Input
          type="password"
          placeholder="Confirm password"
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