import React from 'react';
import AddItem from './AddItem';
import RenderMenuItems from './RenderMenuItems';

function Menu(props) {
   function toggleShowForm(e) {
      const category = e.target.parentNode.firstChild.nodeValue;
      const clickedForm = document.getElementById(category);
      const targetInputForm = clickedForm.firstChild;
      const menuInputForms = document.getElementsByClassName('add_item_form');

      Array.from(menuInputForms).forEach(el => {
         el.firstChild.value = '';
         el.classList.add("hide_add_item_input")
      })

      clickedForm.classList.remove("hide_add_item_input");
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
         <h4 className="menu_categories">drinks<span onClick={e => toggleShowForm(e)}>+</span></h4>
         <AddItem id="drinks" addItemRelay={addItemRelay} />
            
         <RenderMenuItems categoryName="drinks" moveItem={props.moveItem} deleteMenuItem={props.deleteMenuItem} categoryData={drinks} />
            
         <h4 className="menu_categories">mains<span onClick={e => toggleShowForm(e)}>+</span></h4>
         <AddItem id="mains" addItemRelay={addItemRelay} />

         <RenderMenuItems categoryName="mains" moveItem={props.moveItem} deleteMenuItem={props.deleteMenuItem} categoryData={mains} />

         <h4 className="menu_categories">sides<span onClick={e => toggleShowForm(e)}>+</span></h4>
         <AddItem id="sides" addItemRelay={addItemRelay} />

         <RenderMenuItems categoryName="sides" moveItem={props.moveItem} deleteMenuItem={props.deleteMenuItem} categoryData={sides} />

         <h4 className="menu_categories">desserts<span onClick={e => toggleShowForm(e)}>+</span></h4>
         <AddItem id="desserts" addItemRelay={addItemRelay} />

         <RenderMenuItems categoryName="desserts" moveItem={props.moveItem} deleteMenuItem={props.deleteMenuItem} categoryData={desserts} />

      </section>
   )
}

export default Menu;