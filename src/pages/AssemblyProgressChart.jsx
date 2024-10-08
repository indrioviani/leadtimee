import React from 'react';
import '../style/AssemblyProgressChart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import excavatorImage from '../assets/img/excavactor.png'; // Adjust the path as necessary

const AssemblyProgressChart = () => {
  return (
    <div className='ass'>
      <div className='box'>
        <FontAwesomeIcon icon={faWarehouse} style={{ fontSize: '30px' }} />
        <h5>G2</h5>
        <div className='text-container'>
          <h4>In Process ;</h4>
          <p>-</p>
          <h4>Today ;</h4>
          <p>-</p>
          <p>-</p>
        </div>
        {/* Excavator image with reduced size */}
        <img 
          src={excavatorImage} 
          alt="Excavator" 
          className='excavator-emoji' 
          style={{ width: '30px', height: 'auto' }} // Adjust the width as needed
        />
         <img 
          src={excavatorImage} 
          alt="Excavator" 
          className='excavator-emoji' 
          style={{ width: '30px', height: 'auto' }} // Adjust the width as needed
        />
      </div>

      <div className='box'>
        <FontAwesomeIcon icon={faWarehouse} style={{ fontSize: '30px' }} />
        <h5>G2</h5>
        <div className='text-container'>
          <h4>In Process ;</h4>
          <p>-</p>
          <h4>Today ;</h4>
          <p>-</p>
          <p>-</p>
        </div>
        <img 
          src={excavatorImage} 
          alt="Excavator" 
          className='excavator-emoji' 
          style={{ width: '30px', height: 'auto' }} // Adjust the width as needed
        />
      </div>

      <div className='box'>
        <FontAwesomeIcon icon={faWarehouse} style={{ fontSize: '30px' }} />
        <h5>G2</h5>
        <div className='text-container'>
          <h4>In Process ;</h4>
          <p>-</p>
          <h4>Today ;</h4>
          <p>-</p>
          <p>-</p>
        </div>
        <img 
          src={excavatorImage} 
          alt="Excavator" 
          className='excavator-emoji' 
          style={{ width: '30px', height: 'auto' }} // Adjust the width as needed
        />
      </div>
    </div>
  );
}

export default AssemblyProgressChart;
