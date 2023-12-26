import { FormEvent, useRef, useState } from 'react';
import { TOTAL_USERS, useUserApi } from '@picsart/shared/data-access';
import { Page, Pagination, TableAlert, TableSkeleton } from '@picsart/ui';
import { Box, Button, HStack, Input } from '@chakra-ui/react';
import { UsersTable } from './users-table';

export function UsersList() {
  const [page, setPage] = useState(1);

  const [term, setTerm] = useState<string>('');

  const { isLoading, error, users, isEmpty, performDelete } = useUserApi({
    page,
    limit: 5,
    search: term,
    sort: 'desc',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setTerm(inputRef.current?.value?.trim() || '');
  };

  return (
    <Page title={'Users'}>
      <form onSubmit={handleSearch}>
        <HStack>
          <Input
            size={'sm'}
            type={'search'}
            placeholder={'Search User'}
            ref={inputRef}
            maxW={'300px'}
          />
          <Button size={'sm'} colorScheme={'teal'} type={'submit'}>
            Search
          </Button>
        </HStack>
      </form>
      <Box mt={3}>
        {error && (
          <TableAlert message={'Something went wrong, check dev tools.'} />
        )}
        {isEmpty && <Box>No data found</Box>}
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <>
            <UsersTable users={users} onDelete={performDelete} />
            <Pagination
              totalItems={TOTAL_USERS}
              currentPage={page}
              perPage={10}
              onPageChange={setPage}
            />
          </>
        )}
      </Box>
    </Page>
  );
}
