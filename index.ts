import router from "./routes/user";

const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/user',router);

app.listen(process.env.PORT || '3000',()=>{
    console.log(`Server listening on port: ${process.env.PORT || '3000'}`)
});