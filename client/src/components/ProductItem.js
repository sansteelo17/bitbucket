const ProductItem = ({
  sku,
  name,
  price,
  type,
  attribute,
  onAddToCheckbox,
  onRemoveFromCheckbox,
  checkbox,
}) => {
  const toggleCheckbox = () => {
    if (checkbox.find((el) => el === sku)) {
      onRemoveFromCheckbox(sku);
    } else {
      onAddToCheckbox(sku);
    }
  };

  return (
    <div className="col-3 border border-3 border-dark mb-3 mx-3 wdt">
      <form method="POST" id="delete_product">
        <input
          className="delete-checkbox"
          name="checkBox"
          id="checkBox"
          onClick={toggleCheckbox}
          value={sku}
          type="checkbox"
        />
      </form>
      <div className="text-center">
        <h5>#{sku}</h5>
        <h5>{name}</h5>
        <h5>{price}$</h5>
        {type === "dvd" && <h5>Size: {attribute}</h5>}
        {type === "book" && <h5>Weight: {attribute}</h5>}
        {type === "furniture" && <h5>Dimension: {attribute}</h5>}
      </div>
    </div>
  );
};

export default ProductItem;
