interface PaginationProps {
  totalItems: number;
  currentPage: number;
  perPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const {
    totalItems,
    currentPage,
    perPage,
    onPageChange
  } = props;

  const totalPages = Math.ceil(totalItems / perPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    if (totalPages < 2) {
      return null;
    }

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          style={{width: '20px'}}
          className={i === currentPage ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <div style={{display: 'flex'}}>
        {renderPageNumbers()}
      </div>
    </div>
  );
}
