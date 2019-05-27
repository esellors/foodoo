import React from 'react';

function RenderMenuItems(props) {
   const {categoryName, categoryData} = props;

   return (
      <>
         { categoryData
            ? categoryData.map((item, index) => {
               return (
                  <p className={categoryName} key={index} onClick={e => props.moveItem(e)}>{item}<span onClick={e => props.deleteMenuItem(e)}>x</span></p>
               )})
            : null
         }
      </>
   );
}

export default RenderMenuItems;