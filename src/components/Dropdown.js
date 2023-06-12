import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function Dropdown({options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();


  useEffect(() => {
    const handler = (event) => {
      if(!divEl.current) {
        return;
      }

      if(!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }


      //console.log(divEl.current); //need the current to get the reference
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };

  }, []); //since there is an empty array, this will be called when the page is first opened

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen); //functional kind
    //setIsOpen(!isOpen); would've worked fine too, basically the opposite fo the current open status
  };

  const handleOptionClick = (option) => {
    //CLose dropdown
    setIsOpen(false);
    //what option did the user click on: we need to pass in the option object wehn we call handleOption CLcik
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
      {option.label}
    </div>
  });

 //let content = 'Select...';
 // if (selection) {      //if it is not null
  //  content = selection.label;
 // } SAME THING BELOW

  return (
    <div ref={divEl} className= "w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className="text=lg"/>
      </Panel>
     {isOpen && (<Panel className="absolute top-full"> {renderedOptions}</Panel>)}
    </div>
  );
}

export default Dropdown;



/*
  Design 

  State functions
    An item can be selected --> selected --> Option object | null
    Menu opens and closes --> isOpen --> boolean

  Event handlers
    click an option --> handleSelect (affects the selected object piece of state)
    click the dropdown --> handleClick (affects the isOpen boolean state)

*/