import { useState } from "react"



export const useForm = ( estadoInicial = {}) => {
    
    const [values, setvalues] = useState(estadoInicial)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setvalues({
            ...values,
            [name]: Number(value)
        })
    }
 
    return [values, handleInputChange]
}