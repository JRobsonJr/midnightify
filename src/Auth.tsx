import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const { hash } = useLocation();

  const navigate = useNavigate();

  const token = hash.match("[#&]access_token=([^&]*)")?.[1];

  useEffect(() => {
    if (token) {
      localStorage.setItem("spotifyToken", token);
      navigate("/generate");
    }
  }, [token]);

  console.log(hash);

  return null;
};

export default Auth;
