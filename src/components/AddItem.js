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
   return (
      <form className="hide_input" id={props.id}>
         <input className="add_item" placeholder="Enter item..."/>
         <input type="submit" className="add_btn" onClick={e => addItemHandler(e)} value="add" />
      </form>
   );
}




export default AddItem;