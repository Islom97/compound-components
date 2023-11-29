const Table = ({ children }) => <table>{children}</table>;

Table.Thead = ({ children }) => <thead>{children}</thead>;

Table.Tbody = ({ children }) => <tbody>{children}</tbody>;

Table.Tfoot = ({ children }) => <tfoot>{children}</tfoot>;

Table.Tr = ({ children }) => <tr>{children}</tr>;

Table.Th = ({ children }) => <th>{children}</th>;

Table.Td = ({ children }) => <td>{children}</td>;

export default Table;
