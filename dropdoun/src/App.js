import './App.css';
import DropDown from "./components/dropDown";
import {useState} from "react";
function App() {

   const [isActive, setIsActive] = useState(false);

   const handleIsVisibla = () => {
      setIsActive(!isActive);
   }


   return (
         <div className={"container"} >
         <DropDown handleIsVisibla={handleIsVisibla}
                   isActive={isActive}
                   setIsActive={setIsActive}
         />
         </div>
   );
}

export default App;
