import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slicer";
import axios from "axios";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = (email, password, url) => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.post(url, {
          email,
          password,
          returnSecureToken: true,
        });
        setIsLoading(false);
        dispatch(
          authActions.login({
            token: response.data.idToken,
            expire: response.data.expiresIn,
          })
        );
        navigate("/");
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    })();
  };

  // const setUser = (first, last, url) => {
  //   // console.log(first, last, url);
  //   console.log(token);
  //   (async () => {
  //     try {
  //       const response = await axios.post(url, {
  //         idToken: token,
  //         displayName: "Adem Maden",
  //         photoUrl: "",
  //         returnSecureToken: false,
  //       });
  //       console.log(response.displayName);
  //       dispatch(
  //         authActions.setUserInfo({
  //           name: response.displayName,
  //           image: response.photoUrl,
  //         })
  //       );
  //     } catch (error) {
  //       console.log(error.response.data.error.message);
  //     }
  //   })();
  // };

  return { login, error, isLoading };
};

export default useAuth;
