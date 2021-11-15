import { API_URL } from "constants/urls/url";
import { APP_ERRORS } from "constants/errors/error";
import { ERRORS } from "constants/constant";
import axios from "axios";

const SuggestionsService = async (since: number) => {
  const url = `${API_URL.SEARCH_USER}?since=${since}&per_page=3`;

  const response = await fetch(url, {
    method: "GET",
  });
  if (!response.ok) {
    if (response.status === ERRORS.USER_NOT_FOUND)
      throw new Error(APP_ERRORS.SEARCH_ERROR_404);
    else throw new Error(APP_ERRORS.SEARCH_ERROR_OTHER);
  }

  const data = await response.json();
  return data;
};

export default SuggestionsService;
