const express = require('express')
const bodyParser = require('body-parser');
const database = require('./database');

const app = express()
const port = 3000


app.use(bodyParser.json());

//database를 통하여 데이터를 가져옮으로 
// get method 안에서 async를 사용하고 
// await keyword를 사용하여 비동기 처리한다.
app.get('/api/memos', async (req, res) => {
   const result = await database.run("SELECT * FROM memos");
  res.send(result)
})

app.post('/api/memos', async(req, res) => {
  await database.run(`INSERT INTO memos (content) VALUES (?)`, [req.body.content] );
  const result = await database.run("SELECT * FROM memos");
  res.send(result)
})

app.put('/api/memos/:id', async(req, res) => {
  await database.run(`UPDATE memos SET content = ? WHERE id = ?`, [req.body.content, req.params.id]);
  const result = await database.run("SELECT * FROM memos");
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

