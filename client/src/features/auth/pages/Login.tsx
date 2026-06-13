import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue to your workspace"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;