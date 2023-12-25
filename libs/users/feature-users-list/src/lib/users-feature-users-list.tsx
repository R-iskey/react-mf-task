import { FormEvent, useRef, useState } from "react";
import { TOTAL_USERS, useUserApi } from "@picsart/shared/data-access";
import { Pagination } from "@picsart/ui";
import { Link } from "react-router-dom";

export function UsersFeatureUsersList() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [term, setTerm] = useState<string>('');

  const { isLoading, isError, users, performDelete } = useUserApi({page, limit, search: term, sort: 'desc'});

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setTerm(inputRef.current?.value?.trim() || '');
  };

  return (
    <div>
      {isError && "Error!"}
      {isLoading && "Loading..."}
      <form onSubmit={handleSearch}>
        <input type={"search"} ref={inputRef} placeholder={"Search User"} />
        <button type={"submit"}>Search</button>
      </form>
      <table>
        <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td><Link to={`${user.id}`}>{user.name}</Link></td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => performDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={4}>
            <Pagination totalItems={TOTAL_USERS} currentPage={page} perPage={limit} onPageChange={setPage} />
          </td>
        </tr>
        </tfoot>
      </table>


    </div>
  );
}
