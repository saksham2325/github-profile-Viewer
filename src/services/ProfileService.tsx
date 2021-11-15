import axios, { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";

import { API_URL } from "constants/urls/url";
import { APP_ERRORS } from "constants/errors/error";
import { ERRORS } from "constants/constant";
import {UserState} from "constants/typesdefine/interfaces";

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

// const ProfileService = (username: string) => {

//   const [userData, setUserData] = useState([]);
  // if user does not enter username then this will throw error.
  // if (!username.length) throw new Error(APP_ERRORS.SEARCH_ERROR_BLANK);

  // make url of get user (concatenate given "username" with url to get complete url).
  

  

  // const solve = () => {
  //   const url = API_URL.SEARCH_USER + `/${username}`;
  //   axios.get(url).then((res) => {
  //     console.log(res.data);
  //   })
  // }

  // useEffect(() => {
  //   console.log("saksham");
  // },[username]);

  // return (
  //   <div>
  //     <p>Hi How are you</p>
  //     <button onClick = {() => username="saksham"}>button</button>
  //   </div>
  // );
    // return data1.then((res) => {
    //   (res.data);
    // })
  // return (
  //   <h2>Hi</h2>
  //   // userData
  // );
  // axios.get(url).then((res) => {
  //   console.log(res.data);
  // }).catch((err) => {
  //   // console.log(err);
  //   if(err.status===ERRORS.USER_NOT_FOUND){
  //     console.log("User Not Found");
  //   }else {
  //     console.log("other error");
  //   }
  // });
  // const [userData,setUserData] = useState([]);

  // const solve = () => {
    // axios.get(url).then((response) => {
    //   setUserData(response.data);
    // })
  // }

  // useEffect(() => {
  //   solve();
  // } ,[]);

  // return userData;

  // const [userData, setUserData] = useState<UserState[]>([]);
  // console.log(userData);
  // useEffect(() => {
  //   axios
  //     .get<UserState[]>(url)
  //     .then((response: AxiosResponse) => {
  //       setUserData(response.data);
  //     });
  // }, []);
  // console.log(username);
  // return (
  //   <h1>Hi</h1>
  // );
// };

// export default ProfileService;
