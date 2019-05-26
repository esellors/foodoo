import React, {Component} from 'react';
import AddItem from './AddItem';

class Menu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tgtCategory: '',
         newItem: ''
      }
      this.addItemRelay = this.addItemRelay.bind(this);
   }
   toggleShowItem(e) {
      const category = e.target.parentNode.firstChild.nodeValue;
      let form = document.getElementById(category);

      if (form.classList.contains("hide_input")) {
         form.classList.remove("hide_input");
      } else {
         form.classList.add("hide_input");
      }
   }
   addItemRelay(tgtCategory, newItem) {
      const newItemPackage = 
      {
         category: tgtCategory,
         item: newItem
      };
      this.props.addItem(newItemPackage);
   }
   render() {
      const {drinks, mains, sides, desserts} = this.props.menu;
      return (
         <section id="menu">

            <h1>MENU</h1>
            <h4>drinks<span onClick={e => this.toggleShowItem(e)}>+</span></h4>
            <AddItem id="drinks" addItemRelay={this.addItemRelay} />
               { drinks
                  ? drinks.map((item, index) => {
                     return (
                        <p className="drinks" key={index} onClick={e => this.props.moveItem(e)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
            <h4>mains<span onClick={e => this.toggleShowItem(e)}>+</span></h4>
            <AddItem id="mains" addItemRelay={this.addItemRelay} />
               { mains
                  ? mains.map((item, index) => {
                     return (
                        <p className="mains" key={index} onClick={e => this.props.moveItem(e)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
            <h4>sides<span onClick={e => this.toggleShowItem(e)}>+</span></h4>
            <AddItem id="sides" addItemRelay={this.addItemRelay} />
               { sides
                  ? sides.map((item, index) => {
                     return (
                        <p className="sides" key={index} onClick={e => this.props.moveItem(e)}>{item}<span onClick={e => this.props.deleteMenuItem(e)}>x</span></p>
                     )})
                  : null
               }
            <h4>desserts<span onClick={e => this.toggleShowItem(e)}>+</span></h4>
            <AddItem id="desserts" addItemRelay={this.addItemRelay} />
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