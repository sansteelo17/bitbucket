import { useState } from "react";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import useInput from "../hooks/use-input";
import { getAllProducts, insertProduct } from "../lib/api";
import styles from "./AddProduct.module.css";

let formData;

const AddProduct = () => {
  const [type, setType] = useState("");
  const [isUsed, setIsUsed] = useState(false);

  const navigate = useNavigate();

  const { enteredValue: skuValue, valueChangeHandler: skuValueChangeHandler } =
    useInput();
  const {
    enteredValue: nameValue,
    valueChangeHandler: nameValueChangeHandler,
  } = useInput();
  const {
    enteredValue: priceValue,
    valueChangeHandler: priceValueChangeHandler,
  } = useInput();
  const {
    enteredValue: sizeValue,
    valueChangeHandler: sizeValueChangeHandler,
  } = useInput();
  const {
    enteredValue: weightValue,
    valueChangeHandler: weightValueChangeHandler,
  } = useInput();
  const {
    enteredValue: widthValue,
    valueChangeHandler: widthValueChangeHandler,
  } = useInput();
  const {
    enteredValue: lengthValue,
    valueChangeHandler: lengthValueChangeHandler,
  } = useInput();
  const {
    enteredValue: heightValue,
    valueChangeHandler: heightValueChangeHandler,
  } = useInput();

  const allProducts = useLoaderData();

  const homeNavigateFn = () => {
    navigate("/");
  };

  const typeChangeHandler = (e) => {
    setType(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    allProducts.forEach((product) => {
      if (product.sku === skuValue) {
        setIsUsed(true);
        return;
      }
    });

    if (!isUsed) {
      if (type === "book") {
        formData = {
          sku: skuValue,
          name: nameValue,
          price: priceValue,
          weight: weightValue,
          type,
        };
      } else if (type === "dvd") {
        formData = {
          sku: skuValue,
          name: nameValue,
          price: priceValue,
          size: sizeValue,
          type,
        };
      } else if (type === "furniture") {
        formData = {
          sku: skuValue,
          name: nameValue,
          price: priceValue,
          width: widthValue,
          length: lengthValue,
          height: heightValue,
          type,
        };
      }
      insertProduct(formData, homeNavigateFn);
    }
  };

  const error = isUsed ? "1px solid red" : "";

  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-between  pt-5">
          <h2>Product ADD</h2>

          <div>
            <button
              className="btn btn-danger"
              type="submit"
              form="product_form"
            >
              Save
            </button>
            <Link to="/" href="#">
              <button className="btn btn-dark text-light mx-3">Cancel</button>
            </Link>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <form id="product_form" onSubmit={formSubmitHandler}>
          <table>
            <tbody>
              <tr>
                <td htmlFor="SKU">SKU </td>
                <td>
                  <input
                    id="sku"
                    type="text"
                    name="sku"
                    placeholder="#sku"
                    value={skuValue}
                    onChange={skuValueChangeHandler}
                    required={true}
                    style={{ border: error }}
                  />
                </td>
                <td>
                  {isUsed && (
                    <span
                      className="ms-3 mt-1"
                      style={{ color: "red", fontSize: "1rem" }}
                    >
                      SKU must be Unique. Try Again
                    </span>
                  )}
                </td>
              </tr>

              <tr>
                <td htmlFor="name">Name</td>
                <td>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="name"
                    value={nameValue}
                    onChange={nameValueChangeHandler}
                    required={true}
                  />
                </td>
              </tr>

              <tr>
                <td htmlFor="price">Price ($)</td>
                <td>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Enter a number"
                    value={priceValue}
                    onChange={priceValueChangeHandler}
                    required={true}
                  />
                </td>
              </tr>

              <tr>
                <td htmlFor="switcher" className="pt-4">
                  Type switcher
                </td>
                <td>
                  <select
                    required
                    id="productType"
                    value={type}
                    onChange={typeChangeHandler}
                    className={styles.switcher}
                  >
                    <option value="">Type switcher</option>
                    <option value="book">Book</option>
                    <option value="dvd">DVD</option>
                    <option value="furniture">Furniture</option>
                  </select>
                </td>
              </tr>

              {type === "book" && (
                <tr>
                  <td htmlFor="weight">Weight (KG)</td>
                  <td>
                    <input
                      id="weight"
                      type="number"
                      name="weight"
                      placeholder="Enter a number"
                      value={weightValue}
                      onChange={weightValueChangeHandler}
                      required={true}
                    />
                  </td>
                </tr>
              )}

              {type === "dvd" && (
                <tr>
                  <td htmlFor="size">Size (MB)</td>
                  <td>
                    <input
                      id="size"
                      type="number"
                      name="size"
                      placeholder="Enter a number"
                      value={sizeValue}
                      onChange={sizeValueChangeHandler}
                      required={true}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {type === "furniture" && (
            <table>
              <tbody>
                <tr>
                  <td htmlFor="height">Height (CM)</td>
                  <td>
                    <input
                      id="height"
                      type="number"
                      name="height"
                      placeholder="Enter a number"
                      value={heightValue}
                      onChange={heightValueChangeHandler}
                      required={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {type === "furniture" && (
            <table>
              <tbody>
                <tr>
                  <td htmlFor="height">Width (CM)</td>
                  <td>
                    <input
                      id="width"
                      type="number"
                      name="width"
                      placeholder="Enter a number"
                      value={widthValue}
                      onChange={widthValueChangeHandler}
                      required={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {type === "furniture" && (
            <table>
              <tbody>
                <tr>
                  <td htmlFor="length">Length (CM)</td>
                  <td>
                    <input
                      id="length"
                      type="number"
                      name="length"
                      placeholder="Enter a number"
                      value={lengthValue}
                      onChange={lengthValueChangeHandler}
                      required={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </form>
        <div>
          <p className={styles["last-p"]}>
            {type === "book" && "Please, provide weight"}
            {type === "dvd" && "Please, provide size"}
            {type === "furniture" && "Please, provide dimensions"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

export async function loader() {
  const allProducts = await getAllProducts();

  return allProducts;
}
