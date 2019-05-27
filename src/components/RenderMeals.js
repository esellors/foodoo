import React from 'react';

function RenderMeals(props) {
   const {mealName} = props;

   return (
      <>
         {  mealName
            ? mealName.map((item, index) => {
               return <li key={`${mealName}-${index}`}>{item}</li>
            })
            : null
         }
      </>
   );
}

export default RenderMeals;