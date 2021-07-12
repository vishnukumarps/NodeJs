const express = require('express')
const app = express()
const userRouter=require('./routers/user');
const taskRouter=require('./routers/task');
const port = 3000

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))