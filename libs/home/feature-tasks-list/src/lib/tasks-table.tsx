import {
  Button,
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Todo } from '@picsart/shared/data-access';
import { ChangeEvent, memo } from 'react';

interface ITaskTableProps {
  data: Todo[];

  onDelete(id: number): void;

  onUpdate(id: number, payload: Partial<Todo>): void;
}

function TasksTableComponent({ data, onDelete, onUpdate }: ITaskTableProps) {
  const handleTodoToggle =
    (id: number) => (evt: ChangeEvent<HTMLInputElement>) => {
      const isChecked = evt.target.checked;
      onUpdate(id, {
        completed: isChecked,
      });
    };

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th w={3}></Th>
            <Th isNumeric w={5}>
              ID
            </Th>
            <Th>Title</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((todo) => (
            <Tr key={todo.id}>
              <Td w={3}>
                <Checkbox
                  onChange={handleTodoToggle(todo.id)}
                  isChecked={todo.completed}
                />
              </Td>
              <Td isNumeric w={5}>
                {todo.id}
              </Td>
              <Td>{todo.title}</Td>
              <Td>
                <Button
                  onClick={() => onDelete(todo.id)}
                  size={'xs'}
                  colorScheme="teal"
                  variant="link"
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export const TasksTable = memo(TasksTableComponent);
