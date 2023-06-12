import { useState } from 'react';

import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion( {items}) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
    
  };

  //this goes through all the items
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    //sets what to show and what not to show
    //const content = (isExpanded && <div>{item.content}</div>);
      
    const icon = (<span className="text-2xl"> 
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>);

      //the individual item
      return (
       <div key={item.id}>
          <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
            {item.label}
            {icon}
          </div>
          {isExpanded &&<div className="border-b p-5">{item.content}</div>}
       </div>
      );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;