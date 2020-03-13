let menuMeal = {
   menu: { drinks: ['orange juice'], mains: ['eggs'], sides: ['hash browns'], desserts: ['cake'] },
   meal: { drinks: [], mains: [], sides: [], desserts: [] },
   meals: { breakfast: [], lunch: [], dinner: [] }
};

const addMealToMeals = (req, res) => {
   const { mealOfDay } = req.params;
   let mealOfDayDrinks = menuMeal.meal.drinks.splice(0);
   let mealOfDayMains = menuMeal.meal.mains.splice(0);
   let mealOfDaySides = menuMeal.meal.sides.splice(0);
   let mealOfDayDesserts = menuMeal.meal.desserts.splice(0);

   menuMeal.meals[mealOfDay] = [...mealOfDayDrinks, ...mealOfDayMains, ...mealOfDaySides, ...mealOfDayDesserts];

   res.json(menuMeal);
}

const deleteMealFromMeals = (req, res) => {
   const { mealOfDay } = req.params;

   menuMeal.meals[mealOfDay] = [];
   res.json(menuMeal.meals);
}

const getItems = (req, res) => {
   res.json(menuMeal);
};

const addItem = (req, res) => {
   const { category, item } = req.body;
   menuMeal.menu[category].unshift(item);
   res.json(menuMeal);
}

const moveItems = (req, res) => {
   const { section, category, item, destinationSection } = req.params;
   let index = menuMeal[section][category].findIndex(arrayItem => arrayItem === item);
   let tgtItem = menuMeal[section][category].splice(index, 1).toString();

   menuMeal[destinationSection][category].unshift(tgtItem);
   res.json(menuMeal);
}

const deleteItem = (req, res) => {
   const { category, item } = req.params;
   console.log(req.params);
   let index = menuMeal.menu[category].findIndex(arrayItem => arrayItem === item);
   menuMeal.menu[category].splice([index], 1);
   res.json(menuMeal);
};

module.exports = {
   getItems,
   addItem,
   moveItems,
   deleteItem,
   addMealToMeals,
   deleteMealFromMeals
};