import { Link } from "react-router-dom"

const Data = [
    {id:'p1',tile:"Product1"},
    {id:'p2',tile:"Product2"},
    {id:'p3',tile:"Product3"},
]

const ProductList = () => {


  return (
    <div>
       <h1> ProductList</h1>

{
    Data.map(prod=>{
        return(
            <li key={prod.id}>
                {/*Pag relative gamit lahat tanggalin maliban lang sa id you know that /*/}
                <Link to={`${prod.id}`}>{prod.tile}</Link>
            </li>
        )
    })
}

    </div>
  )
}

export default ProductList