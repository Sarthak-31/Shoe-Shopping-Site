import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={2500}
          title="Upto Rs.2500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={5000}
          title="Rs.2501 - Rs.5000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={7500}
          title="Rs.5001 - Rs.7500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={10000}
          title="Over Rs.7500"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
