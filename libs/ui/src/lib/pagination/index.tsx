import { Box, Button, Flex } from '@chakra-ui/react';

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  perPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const { totalItems, currentPage, perPage, onPageChange } = props;

  const totalPages = Math.ceil(totalItems / perPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button
          key={i}
          size={'sm'}
          onClick={() => handlePageChange(i)}
          variant={'link'}
          isActive={i === currentPage}
        >
          {i}
        </Button>
      );
    }
    return pageNumbers;
  };

  if (totalPages < 2) {
    return null;
  }

  return (
    <Box my={3} bg={'gray.100'} py={3} borderRadius={'md'} px={2}>
      <Flex>
        Page:
        {renderPageNumbers()}
      </Flex>
    </Box>
  );
}
