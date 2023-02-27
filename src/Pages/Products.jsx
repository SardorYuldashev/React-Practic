import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  let [productList, setProductList] = useState([])
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData () {
      setLoading(true)
      let { data } = await axios.get("https://fakestoreapi.com/products")
      setProductList(data)
      setLoading(false)
    }

    getData()
  }, [])

  console.log(productList);

  return loading ? <h1>Идет загрузка данных</h1> :
  (
    <div>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
