const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const userRouter = require('./routes/v1/users.router');



app.use(cors());
app.use(express.json());
// app.use(express.text()); // for sent to text

// app.use('/user', userRouter);
app.use('/api/v1/users', userRouter);


app.listen(port, () => {
    console.log(` listening to port ${port}`,);
})