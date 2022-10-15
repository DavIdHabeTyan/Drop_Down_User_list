import React, {useEffect, useState} from 'react';
import {API_URL} from "../../constants/api";
import Division from "../division";

function Users() {
   const [data, setData] = useState({});
   useEffect(() => {
      fetch(API_URL)
         .then(res => res.json())
         .then(res => setData(res))

   },[])
   return (
      <div >
         {data.users && <Division users={data.users}/>}
      </div>
   );
}

export default Users;