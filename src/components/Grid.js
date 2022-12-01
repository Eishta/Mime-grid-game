const Grid = (props) => {
  let { gridSize } = props;
  const renderRow = () => {
    let arr = [];
    for (let i = 0; i < gridSize; i++) {
      arr.push(<Row key={`row-${i}`} row={i} {...props} />);
    }
    return arr;
  };
  return <div className="grid">{renderRow()}</div>;
};

const Row = (props) => {
  let { gridSize } = props;
  const renderColumn = () => {
    let arr = [];
    for (let i = 0; i < gridSize; i++) {
      arr.push(
        <Cell
          key={`column-${i}`}
          col={i}
          {...props}
        
        />
      );
    }
    return arr;
  };
  return <div className="grid-row">{renderColumn()}</div>;
};

const Cell = ({ col, row, curRow, curColumn, gridSize }) => {
  console.log(curRow, curColumn);
  let winner = row === curRow && col === curColumn;
  return (
    <div className={`grid-cell ${row === gridSize - 1 && col === gridSize - 1 && winner ? 'lastCell' : ''}`} data-r={row} data-c={col}>
      {curColumn === col && curRow === row ? "P" : ""}
    </div>
  );
};
export default Grid;
