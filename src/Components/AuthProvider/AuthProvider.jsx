import { createContext, useRef } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const scrollAbout = useRef();
    const scrollProject = useRef();
    const scrollContact = useRef();
    
    const handleScrollProject = () => {
        scrollProject.current?.scrollIntoView({
            behavior: "smooth"
        })
        console.log(scrollProject.current);
    }
    const handleScrollContact = () => {
        scrollContact.current?.scrollIntoView({
            behavior: "smooth"
        });
    }
    const handleScrollAbout = () => {
        scrollAbout.current?.scrollIntoView({
            behavior: "smooth"
        });
    }

    const authInfo = {
        handleScrollAbout,
        handleScrollProject,
        handleScrollContact,
        scrollAbout,
        scrollProject,
        scrollContact
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;