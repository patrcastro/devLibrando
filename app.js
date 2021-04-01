import app from './src/routes'
require('dotenv').config()

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`My app listening at ${port}`)
})
