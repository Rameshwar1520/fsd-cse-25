const container = document.getElementById("root");
console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2', { style: { color: 'green', backgroundColor: 'lightgray' } }, 'Welcome to React Development');
const h1 = React.createElement('h1', { style: { color: 'red' } }, 'ABES Engineering College');
const img = React.createElement('img', { src: 'https://www.magnific.com/free-photos-vectors/beautiful-scenery', alt: 'Beautiful Scenery', style: { width: '300px', height: '200px' } });
const h21 = <h2>Hello World</h2>;
const appContent = React.createElement('div', { style: { border: '2px solid black' } }, img, h1, h2, h21);
root.render(appContent);