import { useAuth } from "../hooks/useAuth";

export const withAuth = (Component) => (props) => {

    const {user} = useAuth();
    if (!user) return <p>You are not authorized to view this page</p> 

    return <Component {...props} />;
} 