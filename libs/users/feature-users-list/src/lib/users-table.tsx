import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { User } from '@picsart/shared/data-access';
import { Link } from 'react-router-dom';
import { memo } from 'react';

interface IUserTableProps {
  users: User[];

  onDelete(id: number): void;
}

function UsersTableComponent({ users, onDelete }: IUserTableProps) {
  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Company</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>
                <ChakraLink as={Link} to={`${user.id}`}>
                  {user.name}
                </ChakraLink>
              </Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.company.name}</Td>
              <Td>
                <Button
                  onClick={() => onDelete(user.id)}
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

export const UsersTable = memo(UsersTableComponent);
