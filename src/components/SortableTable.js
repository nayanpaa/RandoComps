import { useState } from 'react';
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

//two pieces of state
  //one to keep track of the sorting order
  //one to keep track of which column we are sorting by
function SortableTable(props) {
  

  //want to just take configs, not modifying configs, just taking them and using them as the bases for a new config object
  const { config, data } = props; 

  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
  } = useSort(data, config);

  
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }//if it is not sortable

    return {
      ...column, 
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
          
        </th>
      ),

    };//if it is then we will return a new object with all the old stuff and a header function
  });//need to pass this down
  //the onclick thing is an arrow function because there is a parameter in the handleClick function



  

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}//config updated will override old config in props




function getIcons(label, sortBy, sortOrder) {
  if(label !== sortBy) {
    return <div>
      <GoArrowSmallUp />
      <GoArrowSmallDown />
    </div>;
  }

  if(sortOrder === null) {
    return <div>
    <GoArrowSmallUp />
    <GoArrowSmallDown />
  </div>;
  }
  else if (sortOrder === 'asc') {
    return <div>
    <GoArrowSmallUp />
  </div>;
  }
  else if (sortOrder === 'desc') {
    return <div>
    <GoArrowSmallDown />
  </div>;
  }
}

export default SortableTable;