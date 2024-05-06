import { useState, useEffect } from "react"

import LoginedMain from "@/components/main/Logined";

import { useSelector } from "react-redux";
import { selectUserId } from "@/redux/user/userSlice";

const Main = () => {
    const userId = useSelector(selectUserId);
    const [isLogined, setIsLogined] = useState(false);

    useEffect(() => {
        if (userId) setIsLogined(true);
    }, [userId])
    return (
        <div>
            {isLogined ? (
                <LoginedMain isLogined={isLogined} />
            ) : (
                <h1>로그인 전</h1>
            )}
        </div>
    )
}

export default Main