import { useNavigate } from "react-router-dom";

import { ReactNode, useEffect } from "react";

function PrivateRoute({ children }: { children: ReactNode }) {
    const navigate = useNavigate()
    useEffect(() => {
        const user = localStorage.getItem('user')

        if (!user) {

            navigate('/')
        }
    }, []
    )



    return (
        children
    )

}

export default PrivateRoute;