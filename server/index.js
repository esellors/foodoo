const express = require('express');
const app = express();
const mmc = require('./controllers/MenuMealController');
const SERVER_PORT = 8080;

app.use((req, res, next) => {
   console.log('...API request received');
   next();
});

app.get("/api/menumeal", mmc.getItems); 








app.listen(SERVER_PORT, () => {
   console.log(`Chilling to Lo-fi ${8080} fm`);
})