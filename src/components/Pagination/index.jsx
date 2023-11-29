import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ children }) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

Pagination.Left = ({ handleClick, disabled }) => (
  <button disabled={disabled} onClick={handleClick}>
    <FaChevronLeft />
  </button>
);
Pagination.Right = ({ handleClick, disabled }) => (
  <button disabled={disabled} onClick={handleClick}>
    <FaChevronRight />
  </button>
);
Pagination.Pages = ({ count, current }) => {
  const renderedData = Array.from({ length: count }, (_, index) => (
    <span
      style={index + 1 === current ? { backgroundColor: "green" } : {}}
      key={index}
    >
      {index + 1}
    </span>
  ));

  return <div>{renderedData}</div>;
};

export default Pagination;
