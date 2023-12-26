import { TOTAL_TODOS, useTodoApi } from '@picsart/shared/data-access';
import { FormEvent, useRef, useState } from 'react';
import { TasksTable } from './tasks-table';
import { Box, Button, HStack, Input } from '@chakra-ui/react';
import { Page, Pagination, TableAlert, TableSkeleton } from '@picsart/ui';

export function HomeTasksList() {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    error,
    todos,
    isEmpty,
    postTodo,
    performDelete,
    performUpdate,
  } = useTodoApi(page);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const value = inputRef.current?.value;
    if (!value) {
      return;
    }

    postTodo(value.trim());

    evt.currentTarget.reset();
  };

  return (
    <Page title={'Home'}>
      <form onSubmit={handleAddTodo}>
        <HStack>
          <Input
            size={'sm'}
            placeholder={'New task title'}
            ref={inputRef}
            maxW={'300px'}
          />
          <Button size={'sm'} colorScheme={'teal'} type={'submit'}>
            New Task
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
            <TasksTable
              data={todos}
              onDelete={performDelete}
              onUpdate={performUpdate}
            />
            <Pagination
              totalItems={TOTAL_TODOS}
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
