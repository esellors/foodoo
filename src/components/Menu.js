import React from 'react';
import AddItem from './AddItem';

function Menu(props) {
   function toggleShowForm(e) {
      const category = e.target.parentNode.firstChild.nodeValue;
      const clickedForm = document.getElementById(category);
      const targetInputForm = clickedForm.firstChild;
      const menuInputForms = document.getElementsByClassName('add_item_form');

      Array.from(menuInputForms).forEach(el => {
         el.firstChild.value = '';
         el.classList.add("hide_input")
      })

      clickedForm.classList.remove("hide_input");
      targetInputForm.focus();
   }
   function addItemRelay(tgtCategory, newItem) {
      const newItemPackage = 
      {
         category: tgtCategory,
         item: newItem
      };
      props.addItem(newItemPackage);
   }
   const {drinks, mains, sides, desserts} = props.menu;
   return (
      <section id="menu">

         <h1>MENU</h1>
         <h4>drinks<span onClick={e => toggleShowForm(e)}>+</span></h4>
         <AddItem id="drinks" addItemRelay={addItemRelay} />
            { drinks
               ? drinks.map((item, index) => {
                  return (
                     <p className="drinks" key={index} onClick={e => props.moveItem(e)}>{item}<span onClick={e => props.deleteMenuItem(e)}>x</span></p>
                  )})
               : null
            }
         <h4>mains<span onClick={e => toggleShowForm(e)}>+</span></h4>
         <AddItem id="mains" addItemRelay={addItemRelay} />
            { mains
               ? mains.map((item, index) => {
                  return (
                     <p className="mains" key={index} onClick={e => props.moveItem(e)}>{item}<span onClick={e => props.deleteMenuItem(e)}>x</span></p>
                  )})
               : null
            }
         <h4>sides<span onClick={e => toggleShowForm(e)}>+</span></h4>
         <AddItem id="sides" addItemRelay={addItemRelay} />
            { sides
               ? sides.map((item, index) => {
                  return (
                     <p className="sides" key={index} onClick={e => props.moveItem(e)}>{item}<span onClick={e => props.deleteMenuItem(e)}>x</span></p>
                  )})
               : null
            }
         <h4>desserts<span onClick={e => toggleShowForm(e)}>+</span></h4>
         <AddItem id="desserts" addItemRelay={addItemRelay} />
            { desserts
               ? desserts.map((item, index) => {
                  return (
                     <p className="desserts" key={index} onClick={e => props.moveItem(e)}>{item}<span onClick={e => props.deleteMenuItem(e)}>x</span></p>
                  )})
               : null
            }
      </section>
   )
}

export default Menu;