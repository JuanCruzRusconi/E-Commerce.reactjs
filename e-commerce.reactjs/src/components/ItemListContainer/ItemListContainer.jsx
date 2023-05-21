import { useEffect, useState } from "react"
import { Title } from "../Title/Title"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()

    // Traer todos los productos de Firebase //

    useEffect(() => {
        
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, "productos")
        const queryCollectionFiltered = !cid ? queryCollection : query(
            queryCollection, where("categoria", "==", cid)
        )

        getDocs(queryCollectionFiltered)
            .then(res => setProducts(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [cid])
 
    return(
        
        <section className="contenedorItemListContainer">
            <Title titulo="Soy ItemListContainer!" subtitulo="Estos son los productos en stock" /> 
            {loading ?
                <Loading />
                :
                <ItemList productos={products} />
            }    
        </section>

    )
}