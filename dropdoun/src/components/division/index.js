import React, {useState} from 'react';
import SearchUsers from "../searchUsers";

function Division({users}) {

   const [newData, setNewData] = useState(users)
   return (
      <div className={"dropDown-content"}>
         <SearchUsers/>
         <section className={"section"}>
            {users.map(elem => (
               <div className={"section-element"} key={elem.id}>
                  <img className={"section-images"} src={elem.image} alt=""/>
                  <h3>{elem.lastName} {elem.firstName}</h3>
               </div>
            ))}
         </section>

      </div>
   );
}

export default Division;