import React from 'react'

const Counter = () => {
    const [count , setCount] = React.useState(0)

    const increment = () => {
      if(count<10)
        setCount (count + 1)
    }

    const dec = () =>{
      if(count>0)
        setCount (count - 1)
    } 
    const res = () =>{
        setCount(0)
    }
      return (
    <>
    <h1>Counter APP</h1>
    <h2>Count : {count}</h2>
    <button onClick={increment}>Inc</button>
     <button onClick={dec}>Dec</button>
      <button onClick={res}>Res</button>
    </>
  )
}

export default Counter