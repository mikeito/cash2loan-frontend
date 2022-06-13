import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/authSlice";

export const isAuth = () => {
    const userExist = false;
    const token = useSelector(selectCurrentToken)

    token ? userExist = true : userExist = false

    return userExist;
}