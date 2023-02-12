let alt1 = prompt('Please enter the number', '');

if (isNaN(alt1)) { console.log(alt1); 
  
   while (isNaN(alt1)) {
    alt1 = prompt(`Your numser is in corect, please enter the number:`, ''); 

   }
   alert(`result ${alt1} by 12 equals ${alt1 *12}  `);

}
else {console.log(alt1); alert(`result ${alt1} by 12 equals ${alt1 *12}  `); }

