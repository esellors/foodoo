import React from 'react';

function AddItem(props) {
   function addItemHandler(e) {
      e.preventDefault();
      const tgtCategory = e.target.parentNode.id;
      const newItemInputField = e.target.previousSibling;
      
      if(newItemInputField.value === '') {
         alert("Please enter an item");
      } else {
         props.addItemRelay(tgtCategory, newItemInputField.value);
         newItemInputField.value = '';
         newItemInputField.focus();
      }
   }
   function cancelAddItem(e) {
      e = e || window.event;
      var target = e.target || e.srcElement;
      setTimeout(() => {
         target.value = '';
         target.parentNode.classList.add("hide_element");
      }, 350);
   }
   return (
      <form className="add_to_menu_form hide_element" id={props.id} onBlur={e => cancelAddItem(e)}>
         <input className="add_item" placeholder="enter item..."/>
         <input type="submit" className="add_btn" onClick={e => addItemHandler(e)} hidden />
         <span id="cancel_add_item">x</span>
      </form>
   );
}

export default AddItem;