import jwtDecode from "jwt-decode";
import { authActions } from "../store/auth-slicer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useToken = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserInfo = (response) => {
    const userInfo = jwtDecode(response.credential);
    console.log(userInfo);
    dispatch(authActions.login({ token: userInfo.jti, expire: userInfo.exp }));
    dispatch(
      authActions.setUserInfo({ name: userInfo.name, image: userInfo.picture })
    );
    navigate(-1);
  };
  return { getUserInfo };
};

export default useToken;
