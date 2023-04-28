import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { mFetch } from "../../utils/mFetch"

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams()
    // [] = useState()
    // [] = useEffect()
    useEffect(() => {
        mFetch(pid)
            .then(resp => setProducto(resp))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))

    }, [])

    return (
        <div>
            <h1>ItemDetailContainer</h1>

            {isLoading ?
                <h2>Cargando...</h2>
                :
                <>
                    <div>
                        <ItemDetail producto={producto} />
                    </div>
                </>  
            }

        </div>
    )
} 
