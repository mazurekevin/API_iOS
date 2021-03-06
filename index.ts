import router from "./routes/user";
import routerChanel from "./routes/chanel";
import routerComment from "./routes/comment";
import routerLike from "./routes/like";
import routerFavoris from "./routes/favorite";
import routerUserChanel from "./routes/userChanel";
import routerFavorite from "./routes/favorite";

const express = require('express');

const app = express();

app.use(express.json());

app.use('/user',router);

app.use('/chanel',routerChanel);

app.use('/comment',routerComment);

app.use('/like',routerLike);

app.use('/favorite',routerFavorite);

app.use('/userChanel',routerUserChanel);

app.listen(process.env.PORT || '3000',()=>{
    console.log(`Server listening on port: ${process.env.PORT || '3000'}`)
});