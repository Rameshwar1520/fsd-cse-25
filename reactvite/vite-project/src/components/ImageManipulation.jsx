import React from 'react'
import cat from '../Image/cat.png'
const ImageManipulation = () => {
  const [catheight, setCatHeight] = React.useState(200);
  const [catwidth, setCatWidth] = React.useState(200);

  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);

 function changecolor(){
    setRed(Math.random()*255)
    setGreen(Math.random()*255)
    setBlue(Math.random()*255)
 }
  function increaseHeight() {
    setCatHeight(catheight + 10);
  }
  function increaseWidth() {
    setCatWidth(catwidth + 10);
  }

  return (
    <div>
      <h2>ImageManipulation</h2>
      <div style = {{height: `${catheight}px`, width: `${catwidth}px`, border: '1px solid red', backgroundColor :`rgb(${red}, ${green}, ${blue})`}}> 
        <img src={cat} alt="Cat" style={{ height: '50%' }} />
      </div>
      <button onClick={increaseHeight}>Increase Height</button>
      <button onClick={increaseWidth}>Increase Width</button>
      <button onClick={changecolor}>Change Color</button>


<div>  </div> 
   </div>
  )
}

export default ImageManipulation
