import React from 'react';
import axios from 'axios';
import RenderMeals from './RenderMeals';

function Meals(props) {
   function toggleShowMealsDetails() {
      let mealsListsCSS = document.getElementById("meals_lists").style
      if (mealsListsCSS.height === '100%') {
         mealsListsCSS.height = '60px';
      } else {
         mealsListsCSS.height = '100%';
      }
   }
   function deleteMealOfDay(e) {
      const tgtTag = e.target.parentNode.firstChild;
      const tgtMeal = tgtTag.innerText;
      
      tgtTag.style.color = '#000';

      axios
         .delete(`/api/meals/${tgtMeal}`)
         .then(res => {
            props.deleteMealOfDayHandler(res);
         })
   }

   const {breakfast, lunch, dinner} = props.meals;

   return (
      <section id="meals_lists">

         <div id="breakfast_list" className="meals_lists">
            <h4>breakfast</h4>
            <ul>
               <RenderMeals mealName={breakfast} />
            </ul>
            <input className="meals_delete_btns" type="button" value="x" onClick={e => deleteMealOfDay(e)} />
         </div>
         
         <div id="lunch_list" className="meals_lists">
            <h4>lunch</h4>
            <ul>
            <RenderMeals mealName={lunch} />
            </ul>
            <input className="meals_delete_btns" type="button" value="x" onClick={e => deleteMealOfDay(e)} />
         </div>
         
         <div id="dinner_list" className="meals_lists">
            <h4>dinner</h4>
            <ul>
               <RenderMeals mealName={dinner} />
            </ul>
            <input className="meals_delete_btns" type="button" value="x" onClick={e => deleteMealOfDay(e)} />
         </div>

         <div id="everything_list">
            <h4 id="view_hide_meals" onClick={() => toggleShowMealsDetails()}>▲toggle▼</h4>
         </div>
         
      </section>
   );
}

export default Meals;