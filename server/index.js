const express = require('express');
const app = express();
const mmc = require('./controllers/MenuMealController');
const SERVER_PORT = 8080;

app.use((req, res, next) => {
   console.log('...API request received');
   next();
});

app.use(express.json());

app.get("/api/menumeal", mmc.getItems);
app.put("/api/menumeal/:section/:category/:item/:destinationSection", mmc.moveItems);
app.delete("/api/menumeal/:category/:item", mmc.deleteItems);

// app.post








app.listen(SERVER_PORT, () => {
   console.log(`Chilling to Lo-fi ${8080} fm`);
})