import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import SocialCard from "./SocialCard";
import { selectUser } from "../slices/AuthSlice";


const MyProfile = () => {

    const history = useHistory();
    const user = useSelector(selectUser);
    // console.log(user);

    useEffect(() => {
        // console.log(user);
        if (!user) history.push("/login");
    }, [user]);

    return (
        <div>
            {
                user && <SocialCard username={user.login} />
            }
        </div>
    );
}

export default MyProfile;
