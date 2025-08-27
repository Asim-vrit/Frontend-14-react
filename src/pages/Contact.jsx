import { useEffect, useState } from "react";

function Contact() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchProducts() {
    try {
      setLoading(true);
      const raw = await fetch("https://fakestoreapi.com/products");
      if (!raw.ok) {
        throw new Error("Something went wrong");
      }
      const res = await raw.json();
      setLoading(false);
      setError(false);
      setProduct(res);
    } catch (error) {
      setLoading(false);
      setProduct([]);
      setError(error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    return () => {};
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          fetchProducts();
          setProduct([]);
        }}
      >
        Click me to refetch
      </button>
      <div>
        {loading && (
          <span className="bg-gray-400 px-3 py-2 text-black rounded-2xl animate-pulse">
            loading.....
          </span>
        )}
      </div>
      <div>{error && <span className="text-red-500">{error}</span>}</div>
      {product.map((item, index) => {
        return (
          <div key={index} className="">
            <div className="w-10 h-10">
              <img className="w-full h-auto" src={item.image} alt="" />
            </div>
            <div>{item?.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
