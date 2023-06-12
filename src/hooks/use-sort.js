import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null); //column name 

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy (label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy (label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy (label);
    }else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy (null);
    }
  };

  //only sort data if sortOrder && sortBy are not null
  //make a copy of the data prop, we can't modify an array if it is part of the prop system or state system (we just dont in react)
  //find the correct sort value function (from the config in tablepage) and use in sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    //this returns the entire column object, so we destructure off the sortValue from the object
    const {sortValue} = config.find(column => column.label === sortBy); //for every column object we will find a label that is equal to our sortBy piece of state
   // sortedData = [...data]; //this makes the copy, it makes a new array and adds data's stuff to it
   sortedData = [...data].sort((a,b) => {
    const valueA = sortValue(a);
    const valueB = sortValue(b);

    const reverseOrder = sortOrder === 'asc' ? 1: -1;

    if (typeof valueA === 'string') {
      return valueA.localeCompare(valueB) * reverseOrder;
    } else {
      return (valueA - valueB) * reverseOrder;
    }
   });
  };

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
  };

}

export default useSort;