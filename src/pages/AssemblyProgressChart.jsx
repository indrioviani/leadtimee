import React from 'react';
import '../style/AssemblyProgressChart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

const AssemblyProgressChart = () => {
  return (
    <div className='ass'>
      <div className='box'>
      <FontAwesomeIcon icon={faWarehouse} style={{ fontSize: '30px' }} />
      <h5>G2</h5>
        <div className='text-container'>
          <p>Text 1</p>
          <p>Text 2</p>
          <p>Text 3</p>
          <p>Text 4</p>
          <p>Text 5</p>
        </div>
      </div>
      <div className='box'>
        Box 2
        <div className='text-container'>
          <p>Text 1</p>
          <p>Text 2</p>
          <p>Text 3</p>
          <p>Text 4</p>
          <p>Text 5</p>
        </div>
      </div>
      <div className='box'>
        Box 3
        <div className='text-container'>
          <p>Text 1</p>
          <p>Text 2</p>
          <p>Text 3</p>
          <p>Text 4</p>
          <p>Text 5</p>
        </div>
      </div>
    
    </div>
  );
}

export default AssemblyProgressChart;
