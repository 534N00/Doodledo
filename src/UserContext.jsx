import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);

    useEffect(() => {
        const fetchUserAndSession = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            const { data: { session } } = await supabase.auth.getSession();
            setUser(user);
            setSession(session);
        };

        fetchUserAndSession();

        // Listen for auth changes (sign in, sign out, etc.) and update state
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
                    console.log("Token in");
                    setUser(session.user);
                    setSession(session);
                } else if (event === "SIGNED_OUT") {
                    console.log("Signed out :)");
                    setUser(null);
                    setSession(null);
                }
            }
        );
        // Unsubscribe from the auth listener when the component unmounts
        return () => { authListener.subscription.unsubscribe(); };
    }, []);

    return (
        // Passed in values are now accessable by using useContext(UserContext), which gets the stuff from the context defined above
        <UserContext.Provider value={{ supabase, user, session }}>
            {children}
        </UserContext.Provider>
    );
};

// Export the result of useContext(), i.e. the global states+supabase defined here
// so that we don't have to reimport the UseContext modules in other components.
const useUser = () => { return useContext(UserContext); }
export { useUser };