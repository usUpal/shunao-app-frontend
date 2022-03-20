import jwt_decode from "jwt-decode";

export const isLoggedIn = () => {
  const token = localStorage.getItem("idToken");

  if (!token) {
    return false;
  }

  const decodedToken = jwt_decode(token);
  // console.log(decodedToken);
  const currentTime = new Date().getTime() / 1000;
  return decodedToken.exp > currentTime;
};
