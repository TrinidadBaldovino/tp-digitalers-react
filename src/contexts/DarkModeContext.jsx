import { createContext, useState } from "react"

const DarkModeContext  = createContext()

const DarkModeContextProvider = ({ children })=> {
    const [DarkMode, setDarkMode] = useState(false)
    const values = {DarkMode, setDarkMode}

    const HandleMode = () => {
        if(DarkMode === false) {
            setdark(true)
        } else {
            setdark(false)
        }
    }

    return (
        <DarkModeContext.Provider values={values}>
            {children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContextProvider}

export default DarkModeContext