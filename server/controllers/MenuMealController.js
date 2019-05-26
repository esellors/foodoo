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

const getItems = (req, res) => {
   res.json(menuMeal);
};

const addItem = (req, res) => {
   const {category, item} = req.body;
   console.log(category)
   menuMeal.menu[category].unshift(item);
   res.json(menuMeal);
}

const moveItems = (req, res) => {
   const {section, category, item, destinationSection} = req.params;
   let index = menuMeal[section][category].findIndex(arrayItem => arrayItem === item);
   let tgtItem = menuMeal[section][category].splice(index, 1).toString();

   menuMeal[destinationSection][category].unshift(tgtItem);
   res.json(menuMeal);
}

const deleteItem = (req, res) => {
   const {category, item} = req.params;
   let index = menuMeal.menu[category].findIndex(arrayItem => arrayItem === item);
   menuMeal.menu[category].splice([index], 1);
   res.json(menuMeal);
};







module.exports = {
   getItems,
   addItem,
   moveItems,
   deleteItem
};