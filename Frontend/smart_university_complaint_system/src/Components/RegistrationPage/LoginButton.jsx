import { useNavigate } from "react-router";

const LoginButton = ({ description }) => {
  const navigate = useNavigate();
  return (
    <>
      <p className="m-0 text-center text-sm">
        {description}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="cursor-pointer font-semibold text-blue-800 hover:underline"
        >
          Log in
        </button>
      </p>
    </>
  );
};

export default LoginButton;
