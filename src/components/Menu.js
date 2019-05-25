import React, {Component} from 'react';
import AddItem from './AddItem';

class Menu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         // DECIDE IF I NEED TO KEEP STATE
      }
   }

   toggleShowItem(e) {
      const category = e.target.parentNode.firstChild.nodeValue;
      let inputField = document.getElementById(category);

      if (inputField.classList.contains("hide_input")) {
         inputField.classList.remove("hide_input");
      } else {
         inputField.classList.add("hide_input");
      }
   }
   render() {

      const {drinks, mains, sides, desserts} = this.props.menu;

      return (
         <section id="menu">

            <h1>MENU</h1>
            <h4>drinks<span onClick={e => this.toggleShowItem(e)}>+</span></h4>
            <AddItem id="drinks" />
               { drinks
                  ? drinks.map((item, index) => {
                     return (
                        <p className="drinks" key={index} onClick={e => this.props.moveItem(e)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
            <h4>mains<span onClick={e => this.toggleShowItem(e)}>+</span></h4>
            <AddItem id="mains" />
               { mains
                  ? mains.map((item, index) => {
                     return (
                        <p className="mains" key={index} onClick={e => this.props.moveItem(e)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
            <h4>sides<span onClick={e => this.toggleShowItem(e)}>+</span></h4>
            <AddItem id="sides" />
               { sides
                  ? sides.map((item, index) => {
                     return (
                        <p className="sides" key={index} onClick={e => this.props.moveItem(e)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
            <h4>desserts<span onClick={e => this.toggleShowItem(e)}>+</span></h4>
            <AddItem id="desserts" />
               { desserts
                  ? desserts.map((item, index) => {
                     return (
                        <p className="desserts" key={index} onClick={e => this.props.moveItem(e)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
         </section>
      )
   }
}

export default Menu;