const container= document.getElementById("root");
console.log(container);
const root = ReactDOM.createRoot(container);
//const h2 = React.createElement('h2', { style: { color: 'green', backgroundColor: 'lightgray' } }, 'Welcome to React Development');
//const h1 = React.createElement('h1', { style: { color: 'red' } }, 'ABES Engineering College');
//const img = React.createElement('img', { src: 'https://www.magnific.com/free-photos-vectors/beautiful-scenery', alt: 'Beautiful Scenery', style: { width: '300px', height: '200px' } })
// ;
//const container = React.createElement('div',{style:{border:'2px solid black'}},img,h1,h2);
const h21 = <h2>hello World</h2>; //
const h22= <h2>welcome back</h2>; //
const div = <div>{h21}{h22}</div>
const  wrapper = <div style={{border:'2px solid black'}}>{div}</div>
{div}
    <h2>Hey, using jsx</h2>
</div>
root.render(wrapper);
