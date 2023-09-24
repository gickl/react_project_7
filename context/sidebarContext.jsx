import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import PropTypes from 'prop-types';

const initialState = {
    isSidebarOpen: false
}

export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }) => {
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" })
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <SidebarContext.Provider value={{
            ...state,
            toggleSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

SidebarProvider.propTypes = {
    children: PropTypes.node
}