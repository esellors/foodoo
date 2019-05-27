import React from 'react';
import axios from 'axios';

function MealsSelect(props) {
   function sendToUpdateMealsHandler(e) {
      e.preventDefault();
      let mealHeaderNextSibling = document.getElementById('meal_header').nextElementSibling;
      let tgtMeal = e.target.previousSibling.value;
 
      if (tgtMeal === '') {
         alert('Please select a meal');
      } else {
         if (mealHeaderNextSibling === null) {
            alert('Please add items to your meal')
         } else {
            let mealsListsMealTitle = document.getElementById(`${tgtMeal}_list`).firstChild;

            mealsListsMealTitle.style.color = "#61cc76";
            axios
            .put(`/api/meals/${tgtMeal}`)
            .then(res => {
               props.updateMealsHandler(res)
            })
            .catch(error => console.log(error))
         }
      }
   }
   return (
      <form id="add_to_meals_form">
         <select name="mealsList">
            <option></option>
            <option value="breakfast">breakfast</option>
            <option value="lunch">lunch</option>
            <option value="dinner">dinner</option>
         </select>
         <input type="button" value="+" onClick={e => sendToUpdateMealsHandler(e)} />
      </form>
   );
}

export default MealsSelect;