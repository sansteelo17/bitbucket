import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllProducts, massDelete } from "../lib/api";
import ProductItem from "./ProductItem";

const Products = () => {
  const navigate = useNavigate();

  const [checkbox, setCheckbox] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await getAllProducts();

      setProducts(allProducts);
    };

    loadProducts();
  }, []);

  const addToCheckbox = (sku) => {
    setCheckbox((prevState) => [...prevState, sku]);
  };

  const removeFromCheckbox = (sku) => {
    setCheckbox((prevState) => prevState.filter((skus) => skus !== sku));
  };

  const homeNavigateFn = () => {
    navigate("/");
  };

  const massDeleteHandler = (e) => {
    e.preventDefault();

    const newProducts = products.filter((item) => !checkbox.includes(item.sku));

    setProducts(newProducts);

    massDelete(checkbox, homeNavigateFn);
  };

  return (
    <div div id="products" className="container">
      <div>
        <div className="d-flex justify-content-between  pt-5">
          <h2>Product List</h2>

          <div className="d-flex">
            <Link to="/addproduct">
              <button className="btn btn-dark mx-3 text-light">ADD</button>
            </Link>
            <form onSubmit={massDeleteHandler}>
              <button
                type="submit"
                className="btn btn-danger"
                id="delete-product-btn"
                name="deleteMultipleBtn"
                value="Delete"
              >
                MASS DELETE
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div id="grid">
          <div className="row">
            {products.map((product) => (
              <ProductItem
                key={product.sku}
                sku={product.sku}
                id={product.id}
                name={product.name}
                price={product.price}
                attribute={product.attribute}
                type={product.type}
                onAddToCheckbox={addToCheckbox}
                onRemoveFromCheckbox={removeFromCheckbox}
                checkbox={checkbox}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
