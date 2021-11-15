import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { APP_URL } from "constants/urls/url";
import { LoginUser, selectUser } from "slices/AuthSlice";
import { selectLoginError } from "slices/ErrorSlice";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const error = useSelector(selectLoginError);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const onFormSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    await dispatch(LoginUser(details.username, details.password));
    setLoading(false);
  };

  useEffect(() => {
    if (user) history.push(APP_URL.MY_PROFILE);
  }, [user]);

  return (
    <div>
      {!user && (
        <div className="login-container">
          <h2>Login</h2>
          <label>
            {" "}
            Username
            <input
              type="text"
              value={details.username}
              placeholder="Enter username"
              onChange={(e: any) =>
                setDetails({ ...details, username: e.target.value })
              }
            />
          </label>
          <label>
            {" "}
            Password
            <input
              type="password"
              value={details.password}
              placeholder="Enter password"
              onChange={(e: any) =>
                setDetails({ ...details, password: e.target.value })
              }
            />
          </label>
          <button type="submit" onClick={onFormSubmit}>
            {" "}
            Login{" "}
          </button>
          <h3>{error}</h3>
          {loading && <h3>Loading...</h3>}
        </div>
      )}
    </div>
  );
};

export default Login;
