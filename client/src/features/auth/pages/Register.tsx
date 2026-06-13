import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start collaborating with your team"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;