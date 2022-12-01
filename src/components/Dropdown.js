const Dropdown = ({ onChange }) => {
    return (
      <div className="dropdown">
        <p>Select the grid size: </p>
        <select onChange={onChange}>
          {[2, 3, 4, 5, 6, 7, 8].map((key, index) => (
            <option key={index}>{key}</option>
          ))}
        </select>
      </div>
    );
  };
  export default Dropdown;
  