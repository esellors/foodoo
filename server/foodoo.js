require('dotenv').config();
const express = require('express');
const app = express();
const mmc = require('./controllers/MenuMealController');

const { SERVER_PORT } = process.env;

app.use(express.static(`${__dirname}/../build`));

app.use((req, res, next) => {
   console.log('...API request received');
   next();
});

app.use(express.json());

app.get("/api/menumeal", mmc.getItems);
app.post("/api/menumeal", mmc.addItem);
app.put("/api/menumeal/:section/:category/:item/:destinationSection", mmc.moveItems);
app.delete("/api/menumeal/:category/:item", mmc.deleteItem);

app.put("/api/meals/:mealOfDay", mmc.addMealToMeals)
app.delete("/api/meals/:mealOfDay", mmc.deleteMealFromMeals)

app.listen(SERVER_PORT, () => {
   console.log(`Chilling to Lo-fi ${8080} fm`);
})