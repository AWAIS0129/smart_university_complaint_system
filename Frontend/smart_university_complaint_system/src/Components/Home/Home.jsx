// Home.jsx
import { useState } from "react";
import LoginForm from "./LoginForm";
import SidePanel from "./SidePanel";
import UniversityImage from "../../assets/Home/University.jpg";
import { login } from "../../services/authApi";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(credentials) {
    setLoading(true);
    setError("");
    try {
      const data = await login(credentials);
      console.log("Logged in:", data);
      // save the token and navigate to the dashboard here
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="flex min-h-screen bg-white/50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${UniversityImage})` }}
    >
      <div className="absolute inset-0 bg-white/30">
        <div className="flex-[2]">
          <SidePanel>
            <h1 className="text-5xl text-rose-700">
              Smart University Complaint System
            </h1>
            <p className="text-2xl text-rose-600">
              Submit and track your complaints in one place.
            </p>
          </SidePanel>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default Home;
