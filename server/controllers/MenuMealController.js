let menuMeal = {
   menu: {
      drinks: ["whiskey", "beer", "coke", "ginger ale", "water"],
      mains: ["steak", "chili", "fish", "tacos"],
      sides: ["green beans", "corn", "corn bread"],
      desserts: ["pie", "ice cream", "whiskey pops"]
   },
   meal: {
      drinks: ["lemonade"],
      mains: ["chicken"],
      sides: ["asparagus", "salad"],
      desserts: ["cake"]
   }
};

let getItems = (req, res) => {
   res.json(menuMeal);
};

let moveItems = (req, res) => {
   const {section, category, item, destinationSection} = req.params;
   let index = menuMeal[section][category].findIndex(arrayItem => arrayItem === item);
   let tgtItem = menuMeal[section][category].splice(index, 1).toString();
   
   console.log(tgtItem)

   menuMeal[destinationSection][category].push(tgtItem);
   res.json(menuMeal);

}

let deleteItem = (req, res) => {
   const {category, item} = req.params;
   let index = menuMeal.menu[category].findIndex(arrayItem => arrayItem === item);
   menuMeal.menu[category].splice([index], 1);
   res.json(menuMeal);
};







module.exports = {
   getItems,
   moveItems,
   deleteItem
};