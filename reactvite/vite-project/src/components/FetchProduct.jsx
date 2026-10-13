import { useEffect, useState } from 'react';

function FetchProduct() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const result = await response.json();
                setData(result.products);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }
        fetchData();
    }, []);

  return (
    <div>

      <h2>Fetch Product</h2>
      {/*<h2>{JSON.stringify(data)}</h2>*/}
      {data.map((ele) => (

        <div key={ele.id} style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '400px' }}>
            <img src={ele.thumbnail} alt={ele.title} style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
          <h3>{ele.title}</h3>
          <p>{ele.description}</p>
          <p>${ele.price.toFixed(2)}</p>
          
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default FetchProduct;