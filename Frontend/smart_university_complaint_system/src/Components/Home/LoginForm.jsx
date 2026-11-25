import { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = ({
  title = "Log in",
  onSubmit,
  loading = false,
  error = "",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.({ email, password });
  }

  const navigate = useNavigate();
  const navigateToRegistration = () => {
    navigate("/register");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[400px] flex-col gap-4 rounded-xl bg-[#f2f2f2]/80 p-6 text-black shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
    >
      <h2 className="m-0 text-[28px]">{title}</h2>

      {error && (
        <p className="m-0 rounded-md bg-red-100 px-3 py-2.5 text-sm text-red-800">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md border border-gray-300 px-3 py-2.5 text-base"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@university.edu"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md border border-gray-300 px-3 py-2.5 text-base"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="flex w-full items-center justify-between gap-3">
        <button
          className="flex-1 cursor-pointer rounded-md bg-blue-800 p-3 text-base font-semibold text-white hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>

        <button
          className="flex-1 cursor-pointer rounded-md bg-rose-800 p-3 text-base font-semibold text-white hover:bg-rose-900 disabled:cursor-not-allowed disabled:opacity-60"
          type="button"
          disabled={loading}
          onClick={navigateToRegistration}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
