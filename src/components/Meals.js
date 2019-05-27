import React from 'react';
import axios from 'axios';

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
      
      tgtTag.style.color = 'red';

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
               {  breakfast
                  ? breakfast.map((item, index) => {
                     return <li key={`breakfast-${index}`}>{item}</li>
                  })
                  : null
               }
            </ul>
            <input className="meals_delete_btns" type="button" value="delete" onClick={e => deleteMealOfDay(e)} />
         </div>
         
         <div id="lunch_list" className="meals_lists">
            <h4>lunch</h4>
            <ul>
               {  lunch 
                  ? lunch.map((item, index) => {
                     return <li key={`lunch-${index}`}>{item}</li>
                  })
                  : null
               }
            </ul>
            <input className="meals_delete_btns" type="button" value="delete" onClick={e => deleteMealOfDay(e)} />
         </div>
         
         <div id="dinner_list" className="meals_lists">
            <h4>dinner</h4>
            <ul>
               {  dinner 
                  ? dinner.map((item, index) => {
                     return <li key={`dinner-${index}`}>{item}</li>
                  })
                  : null
               }
            </ul>
            <input className="meals_delete_btns" type="button" value="delete" onClick={e => deleteMealOfDay(e)} />
         </div>

         <div id="everything_list">
            <h4 onClick={() => toggleShowMealsDetails()}>view/hide meals</h4>
         </div>
         
      </section>
   );
}

export default Meals;