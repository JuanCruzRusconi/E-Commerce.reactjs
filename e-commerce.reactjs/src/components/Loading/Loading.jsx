import { useEffect } from "react"

export const Loading = () => {

    useEffect(() =>{
        console.log("loading")
        return(() =>{
            console.log("terminado")
        }
        )
    })

    return(

        <h2>Cargando ...</h2>

    )

}