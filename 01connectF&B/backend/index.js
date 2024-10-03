import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Server is ready')
})

// data
// somewhat standard url
app.get('/api/data', (req, res) => {
  const products = [
    {
      id: 101,
      name: 'Laptop',
      category: 'Electronics',
      price: 999.99,
      stock: 15,
    },
    {
      id: 102,
      name: 'Smartphone',
      category: 'Electronics',
      price: 499.99,
      stock: 50,
    },
    {
      id: 103,
      name: 'Coffee Maker',
      category: 'Home Appliances',
      price: 79.99,
      stock: 25,
    },
  ]
  res.send(products)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})
