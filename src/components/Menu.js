import React from 'react';
import AddItem from './AddItem';

function Menu(props) {
   function toggleShowItem(e) {
      const category = e.target.parentNode.firstChild.nodeValue;
      let form = document.getElementById(category);

      if (form.classList.contains("hide_input")) {
         form.classList.remove("hide_input");
      } else {
         form.classList.add("hide_input");
      }
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
         <h4>drinks<span onClick={e => toggleShowItem(e)}>+</span></h4>
         <AddItem id="drinks" addItemRelay={addItemRelay} />
            { drinks
               ? drinks.map((item, index) => {
                  return (
                     <p className="drinks" key={index} onClick={e => props.moveItem(e)}>{item}<span onClick={e => props.deleteMenuItem(e)}>x</span></p>
                  )})
               : null
            }
         <h4>mains<span onClick={e => toggleShowItem(e)}>+</span></h4>
         <AddItem id="mains" addItemRelay={addItemRelay} />
            { mains
               ? mains.map((item, index) => {
                  return (
                     <p className="mains" key={index} onClick={e => props.moveItem(e)}>{item}<span onClick={e => props.deleteMenuItem(e)}>x</span></p>
                  )})
               : null
            }
         <h4>sides<span onClick={e => toggleShowItem(e)}>+</span></h4>
         <AddItem id="sides" addItemRelay={addItemRelay} />
            { sides
               ? sides.map((item, index) => {
                  return (
                     <p className="sides" key={index} onClick={e => props.moveItem(e)}>{item}<span onClick={e => props.deleteMenuItem(e)}>x</span></p>
                  )})
               : null
            }
         <h4>desserts<span onClick={e => toggleShowItem(e)}>+</span></h4>
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