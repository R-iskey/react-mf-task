import { useNavigate, useParams } from "react-router-dom";
import { useUserApi } from "@picsart/shared/data-access";

export function UsersFeatureUserDetail() {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  const { isError, isLoading, users } = useUserApi({ userId });

  const [user] = users;
  if (!user && !isLoading) {
    return <div>User Not found</div>;
  }

  return (
    <div>
      {isError && "Error!"}
      {isLoading && "Loading..."}
      {user &&
        <>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
          <div>
            <p>Full Name: <b>{user.name}</b></p>
            <p>Email: <b>{user.email}</b></p>
            <p>Username: <b>{user.username}</b></p>
            <p>Phone: <b>{user.phone}</b></p>
            <p>Company: <b>{user.company.name}</b></p>
            <p>Address: <b>{user.address.street}</b></p>
          </div>
        </>

      }
    </div>
  );
}

export default UsersFeatureUserDetail;
