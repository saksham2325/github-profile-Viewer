import { API_URL } from "constants/urls/url";
import { APP_ERRORS } from "constants/errors/error";
import { ERRORS } from "constants/constant";

const ProfileService = async (username: string) => {
  // if user does not enter username then this will throw error.
  if (!username.length) throw new Error(APP_ERRORS.SEARCH_ERROR_BLANK);

  // make url of get user (concatenate given "username" with url to get complete url).
  const url = API_URL.SEARCH_USER + `/${username}`;

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    if (response.status === ERRORS.USER_NOT_FOUND)
      throw new Error(APP_ERRORS.SEARCH_ERROR_404);
    throw new Error(APP_ERRORS.SEARCH_ERROR_OTHER);
  }
  const data = await response.json();
  return data;
};

export default ProfileService;
