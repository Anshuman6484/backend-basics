import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('/api/data')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <h1>Full Stack with Axios</h1>
      <p>Products : {products.length}</p>

      {products.map((products) => (
        <div key={products.id}>
          <h2>{products.id + '. ' + products.name}</h2>
          <h4>{'Category : ' + products.category}</h4>
          <p>{'Price : ' + products.price}</p>
          <p>{'Stock : ' + products.stock}</p>
        </div>
      ))}
    </>
  )
}

export default App
