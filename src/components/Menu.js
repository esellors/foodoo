import React, {Component} from 'react';
// import DisplayMenu from "./DisplayMenu";


class Menu extends Component {
   render() {

      const {drinks, mains, sides, desserts} = this.props.menu;

      return (
         <section id="menu">

            <h1>MENU</h1>
            <h4>drinks<span>+</span></h4>
               { drinks
                  ? drinks.map((item, index) => {
                     return (
                        <p className="drinks" key={index} data-key={index} onClick={evt => this.props.moveItem(evt)}>{item}<span onClick={evt => this.props.deleteMenuItem(evt)}>x</span></p>
                     )})
                  : null
               }
            <h4>mains<span>+</span></h4>
               { mains
                  ? mains.map((item, index) => {
                     return (
                        <p className="mains" key={index} data-key={index} onClick={evt => this.props.moveItem(evt)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
            <h4>sides<span>+</span></h4>
               { sides
                  ? sides.map((item, index) => {
                     return (
                        <p className="sides" key={index} data-key={index} onClick={evt => this.props.moveItem(evt)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
            <h4>desserts<span>+</span></h4>
               { desserts
                  ? desserts.map((item, index) => {
                     return (
                        <p className="desserts" key={index} data-key={index} onClick={evt => this.props.moveItem(evt)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
         </section>
      )
   }
}

export default Menu;