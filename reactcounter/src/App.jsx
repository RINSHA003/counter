import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export default function App() {
  const[counter,setCounter]=useState(0)
  
    const increment=()=>{
      setCounter(counter+1)
    };
     const decrement=()=>{
      setCounter(counter-1)
     };
  return (
    <div>
      <Container className='mt-5 pt-5 text-center border'>
        <h1 className='text-center'>counter app</h1>
        <h1 className='text-center'>{counter}</h1>
        <Button variant="danger" onClick={increment} style={{ marginRight: '10px' }}>+</Button>
        {counter > 0 && (
 <Button variant="warning" onClick={decrement}>-</Button>
        )
}
      </Container>
       
    </div>
  )
}
