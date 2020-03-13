import React from 'react';
import MealsSelect from './MealsSelect';

function Meal(props) {
   const { drinks, mains, sides, desserts } = props.meal;
   return (
      <section id="meal">
         <div id="meal_header">
            <h1>MEAL</h1>
            <MealsSelect updateMealsHandler={props.updateMealsHandler} />
         </div>
         {drinks
            ? drinks.map((item, index) => {
               return (
                  <p className="drinks" key={index} onClick={e => props.moveItem(e)}>{item}<span>&#40;-&#41;</span></p>
               )
            })
            : null
         }
         {mains
            ? mains.map((item, index) => {
               return (
                  <p className="mains" key={index} onClick={e => props.moveItem(e)}>{item}<span>&#40;-&#41;</span></p>
               )
            })
            : null
         }
         {sides
            ? sides.map((item, index) => {
               return (
                  <p className="sides" key={index} onClick={e => props.moveItem(e)}>{item}<span>&#40;-&#41;</span></p>
               )
            })
            : null
         }
         {desserts
            ? desserts.map((item, index) => {
               return (
                  <p className="desserts" key={index} onClick={e => props.moveItem(e)}>{item}<span>&#40;-&#41;</span></p>
               )
            })
            : null
         }
      </section>
   )
}

export default Meal;