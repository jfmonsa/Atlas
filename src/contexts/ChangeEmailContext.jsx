import { createContext, useContext, useState } from "react";
import { GetChangeEmail} from "../api/apiChangeEmail";


const ChangeEmailContext = createContext();

export const UseChangeEmail = () => {
    const context = useContext(ChangeEmailContext);

    if (!context) {
        throw new Error("ChangePass must be used within an ChangePassProvider");
    }

    return context;
}

export const ChangeEmailProvider = ({ children }) => {

    const [changeEmail, setChangeEmail] = useState([]);

    const createChangeEmail = async (emails) => {
        
        const res = GetChangeEmail(emails);
    }
    return (
        <ChangeEmailContext.Provider value={{changeEmail, createChangeEmail}}>
            {children}
        </ChangeEmailContext.Provider>
    );
}