import { useEffect, useState } from "react"

import { ContainerProducts, CardProduct, PageNumber} from './style'

import { BsCartFill } from 'react-icons/all'

function ListProducts() {
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)

    const handlePage = nextPage => {
        setPage(nextPage)
        getListProducts()
        window.scrollTo(0, 0)
    }

    const getListProducts = () => {
        fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
            .then(response => response.json())
            .then(response => setData(response))
    }

    useEffect(() => {
        getListProducts()
    }, [])

    return (
        <>
            <ContainerProducts>
                {data?.products?.map(product => (
                    <CardProduct key={product.id}>
                        <img src={product.image} alt="" />
                        <div className="product-info">
                            <span className="product-name">{product.name}</span>
                            <span className="product-price">
                                R${(product.installments.value)}
                            </span>
                        </div>
                        <button>
                            <BsCartFill color="#fff" size={20} />
                            <span>Add to card +</span>  
                        </button>
                    </CardProduct>
                ))}
            </ContainerProducts>
            <PageNumber>
                <button onClick={() => handlePage(Math.max(page-1, 1))}>previous</button>
                <button onClick={() => handlePage(page+1)}>next</button>
            </PageNumber>
        </>
    )
}

export default ListProducts 