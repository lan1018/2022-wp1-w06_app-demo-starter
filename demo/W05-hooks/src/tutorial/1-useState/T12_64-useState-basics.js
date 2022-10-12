import React from 'react';
import { useState } from 'react';

const T12_64_ErrorExample = () => {
  //let title = 'random title'
  const [title, setTitle] = useState('random title');
  const handleClick = () => {
    setTitle('Hello word');
    console.log('title1', title);
  }

  console.log('title2', title);

  return (
    <>
       <h2>{title}</h2>
       <button type='button' className='btn' onClick={handleClick}>
        change title
       </button>
    </>
  );
};

export default T12_64_ErrorExample;
