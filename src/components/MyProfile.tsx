import { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { APP_URL } from "constants/urls/url";
import { selectUser } from "slices/AuthSlice";
import SocialCard from "components/SocialCard";

const MyProfile = () => {
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) history.push(APP_URL.HOME);
  }, [user]);

  return <div>{user && <SocialCard username={user.login} />}</div>;
};

export default MyProfile;
