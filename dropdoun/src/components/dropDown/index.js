import React, {useEffect, useRef} from 'react';
import checkIcon from "../../assets/check.svg"
import Users from "../users";

function DropDown({handleIsVisibla, isActive, setIsActive}) {
   let useClickOutside = (handler) => {
      let domNode = useRef()

      useEffect(() => {
         let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
               handler()
            }
         }
         document.addEventListener("mousedown", maybeHandler);
         return () => {
            document.addEventListener("mousedown", maybeHandler);
         }
      })
      return domNode
   }

   let domNode =  useClickOutside(() => {
      setIsActive(false)
   })

   return (
      <div className="dropDown" >
         <div className="dropDown-button" onClick={handleIsVisibla}>All Saved
            <img className={"checkIcon"} src={checkIcon} alt=""/>
         </div>
         <div   ref={domNode}>
            {isActive && ( <Users/>)}
         </div>
      </div>
   );
}

export default DropDown;