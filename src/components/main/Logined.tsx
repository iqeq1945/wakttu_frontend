import React, { useEffect } from "react";

interface Props {
    isLogined: boolean;
}

const LoginedMain: React.FC<Props> = ({ isLogined }) => {
    useEffect(() => {
        if (!isLogined) return;
        
        
    }, [isLogined]);

    return (
        <div></div>
    )
}

export default LoginedMain