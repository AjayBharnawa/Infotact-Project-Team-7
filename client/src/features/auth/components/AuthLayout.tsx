interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthLayout = ({
  title,
  subtitle,
  children,
}: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="mb-2 text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mb-8 text-slate-400">
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;