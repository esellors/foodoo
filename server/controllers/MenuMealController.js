let menuMeal = {
   menu: {
      drinks: ["whiskey", "coke"],
      mains: ["steak"],
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








module.exports = {
   getItems
};