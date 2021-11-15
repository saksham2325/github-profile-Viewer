import { API_URL } from "constants/urls/url";
import { APP_ERRORS } from "constants/errors/error";
import { ERRORS } from "constants/constant";

const LoginService = async (username: string, password: string) => {
  if (!username.length && !password.length)
    throw new Error(APP_ERRORS.LOGIN_ERROR_BLANK_BOTH);
  if (!username.length) throw new Error(APP_ERRORS.LOGIN_ERROR_BLANK_USERNAME);
  if (!password.length) throw new Error(APP_ERRORS.LOGIN_ERROR_BLANK_PASSWORD);

  const headers = new Headers();
  const url = API_URL.FETCH_USER;

  headers.set("Authorization", "Basic " + btoa(username + ":" + password));
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  if (!response.ok) {
    if (response.status === ERRORS.INVALID_CREDENTIAL) throw new Error(APP_ERRORS.LOGIN_ERROR_401);
    throw new Error(APP_ERRORS.LOGIN_ERROR_OTHER);
  }
  const data = await response.json();
  return data;
};

export default LoginService;
