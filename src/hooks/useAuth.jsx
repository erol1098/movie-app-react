import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slicer";
import axios from "axios";
const useAuth = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = (mail, password, url) => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.post(url, {
          mail,
          password,
          returnSecureToken: true,
        });
        setIsLoading(false);
        dispatch(
          authActions.login(response.data.idToken, response.data.expiresIn)
        );
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    })();
  };

  return { login, error, isLoading };
};

export default useAuth;
