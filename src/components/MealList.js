import React, {Component} from 'react';

class MealList extends Component {
   render() {

      const {drinks, mains, sides, desserts} = this.props.meal;

      return (
         <section id="meal">

         <h1>MEAL</h1>
            { drinks
               ? drinks.map((item, index) => {
                  return (
                     <p className="drinks" key={index} data-key={index} onClick={evt => this.props.moveItem(evt)}>{item}</p>
                  )})
               : null
            }

            { mains
               ? mains.map((item, index) => {
                  return (
                     <p className="mains" key={index} data-key={index} onClick={evt => this.props.moveItem(evt)}>{item}</p>
                  )})
               : null
            }

            { sides
               ? sides.map((item, index) => {
                  return (
                     <p className="sides" key={index} data-key={index} onClick={evt => this.props.moveItem(evt)}>{item}</p>
                  )})
               : null
            }

            { desserts
               ? desserts.map((item, index) => {
                  return (
                     <p className="desserts" key={index} data-key={index} onClick={evt => this.props.moveItem(evt)}>{item}</p>
                  )})
               : null
            }

      </section>
      )
   }
}

export default MealList;