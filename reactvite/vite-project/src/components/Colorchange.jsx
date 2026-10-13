import React from 'react'

const Colorchange = () => {
    const [red, setRed] = React.useState(0);
    const [green, setGreen] = React.useState(0);
    const [blue, setBlue] = React.useState(0);

    function redColor(){
        setRed(255);
        setGreen(0);
        setBlue(0);
    }
    function greenColor(){
        setRed(0);
        setGreen(255);
        setBlue(0);
    }
    function blueColor(){
        setRed(0);
        setGreen(0);
        setBlue(255);
    }
  return (
    <div>
    <div style={{width: '400px', height: '400px', backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></div>

    <div>
     < button onClick={redColor}  style = {{margin : '5px'}} > Red</button>
     <button onClick={greenColor} style = {{margin : '5px'}}> Green</button>
     <button onClick={blueColor} style = {{margin : '5px'}}> Blue</button>
    </div>
    </div>
  )
}

export default Colorchange
