const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Anh Nhân đẹp trai số 1 Việt Nam! heheheheeheheehehehe')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})