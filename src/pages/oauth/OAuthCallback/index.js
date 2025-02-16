import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OAuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const isNewUser = params.get("isNewUser");

    if (isNewUser === "true") {
      navigate("/oauth/add");
    } else {
      navigate("/studies/main");
    }
  }, [navigate, location]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return <div />;
}

export default OAuthCallback;
