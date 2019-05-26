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
         target.parentNode.classList.add("hide_input");
      }, 350);
   }
   return (
      <form className="add_item_form hide_input" id={props.id} onBlur={e => cancelAddItem(e)}>
         <input className="add_item" placeholder="enter item or tab to cancel..."/>
         <input type="submit" className="add_btn" onClick={e => addItemHandler(e)} hidden />
         <span id="cancel_add_item">X</span>
      </form>
   );
}

export default AddItem;