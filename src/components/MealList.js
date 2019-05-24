import React, {Component} from 'react';

class MealList extends Component {
   render() {
      // console.log('MealList props:')
      // console.log(this.props)
      const {drinks, mains, sides, desserts} = this.props.meal;

      return (
         <section id="mealList">

         <h1>MEAL</h1>
            { drinks
               ? drinks.map((item, index) => {
                  return (
                     <p key={index}>{item}</p>
                  )})
               : null
            }

            { mains
               ? mains.map((item, index) => {
                  return (
                     <p key={index}>{item}</p>
                  )})
               : null
            }

            { sides
               ? sides.map((item, index) => {
                  return (
                     <p key={index}>{item}</p>
                  )})
               : null
            }

            { desserts
               ? desserts.map((item, index) => {
                  return (
                     <p key={index}>{item}</p>
                  )})
               : null
            }

      </section>
      )
   }
}

export default MealList;