import React, { useState } from 'react'
// import { RoomType } from '../roomType'
import { Button } from 'react-bootstrap'

function FilterCapacity({onFilterChange} ) {
    const [selectedCapacity, setSelectedCapacity] = useState('');
    const handleCapacitySelect = (selectedCapacity) => {
        setSelectedCapacity(selectedCapacity);
        onFilterChange(selectedCapacity);
    };
    const capacity = [
      "2", "3", "4",
    ]
  return (
    <div className='filter-box'
    style={{
      marginLeft: "50px",
      backgroundColor: "transparent",
      fontSize: "23px",
    }}
    >
        <strong>Selected Capacity: {selectedCapacity}</strong>
        <div> 
          {capacity.map((capacity) => (
            <Button
              key = {capacity}
              variant="secondary"
              className={`m-2 ${selectedCapacity === capacity ? 'selected' : ''}`}
              onClick={() => handleCapacitySelect(capacity)}>
              {capacity}
              </Button>
          ))}
          </div>                      
    </div>
  );
}

export default FilterCapacity;
 