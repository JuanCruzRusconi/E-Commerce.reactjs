import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

    const {pid} = useParams()
  // [] = useState()
  // [] = useEffect()

    return (
        <div>
            <h1>ItemDetailContainer</h1>
            <ItemDetail 
               
            />
        </div>
    )
} 