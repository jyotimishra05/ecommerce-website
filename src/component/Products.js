import React, { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);
//   const [data, setdata] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products");
   
console.log(response)
              setData(await response.data);
              setfilter(await response.data);
              console.log(filter);
              console.log(data)
              setLoading(false);
              
             
  };
  useEffect(() => {
    fetchData();

    // eslint-disable-next-line 
  }, []);
//   let componentMounted = true;
//   const getProducts = async () => {
//     setLoading(true);
//     const response = await fetch("https://fakestoreapi.com/products");
//     // if (componentMounted) {

//       setData(await response.json());
//       setfilter(await response.json());
//       setLoading(false);
//       console.log(filter);
//       console.log(data)
//     // }
//     // return () => {
//     //   componentMounted = false;
//     // };
//   };
//   useEffect =(()=>{
//         getProducts();
//   },[])

    
  const Loading = () => {
    return <>Loading...</>;
  };
  const filterProducts=(category)=>{
        const updateList = data.filter((item)=>{
            return item.category===category
        })
        setfilter(updateList)
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setfilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2"onClick={()=>filterProducts("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2"onClick={()=>filterProducts("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2"onClick={()=>filterProducts("electronics")}>Electronics</button>
        </div>
        {filter.map((products) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={products.id}>
                  <img src={products.image} className="card-img-top" alt={products.title} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{products.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                    Price :{products.price}
                    </p>
                    <NavLink to={`/products/${products.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
