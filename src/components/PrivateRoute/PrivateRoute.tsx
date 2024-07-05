import { useNavigate } from "react-router-dom";

import { ReactNode } from "react";

function PrivateRoute({ children }: { children: ReactNode }) {
    const user = localStorage.getItem('user')
    const navigate = useNavigate()
    if (!user) {
        navigate('/')
    } else {
        return (
            children
        )
    }
}

export default PrivateRoute;