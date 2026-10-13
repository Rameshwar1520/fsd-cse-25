import React from 'react'

const College = () => {
    const[college, setCollege] = React.useState('ABES');
    const[name, setName] = React.useState('Rishuu');

    function changeCollege(){
        setCollege('ABES Engineering College');
    }
    function changeName(){
        setName('Rameshwar Tripathi');
    }
  return (
    <div>
    <h2> Name = {name}</h2>
    <h2> College = {college}</h2>
      <button onClick={changeCollege} style={{ margin: '10px' }}> College</button>
      <button onClick={changeName} style={{ margin: '10px' }}> Name</button>
    </div>
  )
}

export default College
