import router from "./routes/user";
import routerChanel from "./routes/chanel";
import routerComment from "./routes/comment";
import routerLike from "./routes/like";
import routerFavoris from "./routes/favoris";

const express = require('express');

const app = express();

app.use(express.json());

app.use('/api',router);

app.use('/chanel',routerChanel);

app.use('/comment',routerComment);

app.use('/like',routerLike);

app.use('/favoris',routerFavoris);

app.listen(process.env.PORT || '3000',()=>{
    console.log(`Server listening on port: ${process.env.PORT || '3000'}`)
});