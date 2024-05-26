import auth from "../services/authentication.js";

const checkForAuthenticationCookie = (cookieName) => {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }
    try {
      const userPayload = auth.validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {
      console.log(error);
    }
    return next();
  };
};

export default checkForAuthenticationCookie;
