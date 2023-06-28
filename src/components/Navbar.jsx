import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedSection, setselectedSection] = useState("All");
  return (
    <header className="shadow-md w-screen">
      <nav>
        <ul className="flex gap-8 mx-8 p-8 text-xl list-none">
          <li className={`${selectedSection==="Your"? `border-b-2 border-red-500`: `border-0`}`} 
          onClick={() => setselectedSection("Your")}>
            <Link to='/1'>Your</Link>
          </li>
          <li className={`${selectedSection==="All"? `border-b-2 border-red-500`: `border-0`}`} 
          onClick={() => setselectedSection("All")}>
            <a href="/">All</a>
          </li>
          <li className={`${selectedSection==="Blocked"? `border-b-2 border-red-500`: `border-0`}`} 
          onClick={() => setselectedSection("Blocked")}>
            <a href="#" onClick={() => setselectedSection("Blocked")}>
              Blocked
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
