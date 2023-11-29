import Table from "./components/Table/index";
import Pagination from "./components/Pagination/index";
import useTable from "./hooks.js";
import { mocDatas } from "./service/mocDatas";

function App() {
  const { currentPage, nextPage, previousPage } = useTable();
  const maxCount = 5;
  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Header</Table.Th>
            <Table.Th>Header</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {mocDatas.map((item) => (
            <Table.Tr key={item.id}>
              <Table.Td>{item.name}</Table.Td>
              <Table.Td>{item.surname}</Table.Td>
              <Table.Td>{item.age}</Table.Td>
              <Table.Td>{item.city}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>

        <Table.Tfoot>
          <Table.Tr>
            <Table.Td>Footer</Table.Td>
            <Table.Td>Footer</Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
      <Pagination>
        <Pagination.Left
          disabled={currentPage === 1}
          handleClick={previousPage}
        />
        <Pagination.Pages count={maxCount} current={currentPage} />
        <Pagination.Right
          disabled={currentPage === maxCount}
          handleClick={nextPage}
        />
      </Pagination>
    </>
  );
}

export default App;
