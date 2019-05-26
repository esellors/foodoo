let menuMeal = {
   menu: {
      drinks: [],
      mains: [],
      sides: [],
      desserts: []
   },
   meal: {
      drinks: [],
      mains: [],
      sides: [],
      desserts: []
   }
};

const getItems = (req, res) => {
   res.json(menuMeal);
};

const addItem = (req, res) => {
   const {category, item} = req.body;
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