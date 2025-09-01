import React from "react";
import { useFetch } from "../hooks/useFetch";

function Products() {
  const { data: productsData, customFetch: fetchProducts } = useFetch({
    url: "/products",
    initialData: [],
    fetchOnMount: true,
  });
  const { customFetch: postProducts } = useFetch({
    url: "/products",
    fetchOptions: { method: "POST" },
    onSuccess: () => {
      fetchProducts();
    },
  });
  const { customFetch: deleteProducts } = useFetch({
    url: "/products",
    fetchOptions: { method: "DELETE" },
    onSuccess: (deletedUser) => {
      fetchProducts();
      alert(`User ${deletedUser.name.firstname} deleted Successfully`);
    },
  });
  const { customFetch: updateProducts } = useFetch({
    url: "/products",
    fetchOptions: { method: "PUT" },
    onSuccess: (deletedUser) => {
      fetchProducts();
      alert(`User ${deletedUser.name.firstname} deleted Successfully`);
    },
  });
  return <div>Products</div>;
}

export default Products;
