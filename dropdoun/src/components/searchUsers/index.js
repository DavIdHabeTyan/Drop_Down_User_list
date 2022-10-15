import React, {useState} from 'react';

function SearchUsers ()  {

   const [value, setValue] = useState("")

   const filteredUsers = () => {

   }

   return (
      <div>
         <form action="">
         <input type="text"
                placeholder={"Search..."}
                onChange={(e) => setValue(e.target.value)}
         />

         </form>
      </div>
   );
}

export default SearchUsers;