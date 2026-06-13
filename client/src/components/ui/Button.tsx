interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-500"
    >
      {children}
    </button>
  );
};

export default Button;