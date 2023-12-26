import * as React from 'react';

const UsersList = React.lazy(() => import('@picsart/users/feature-users-list'));
const UserDetails = React.lazy(
  () => import('@picsart/users/feature-user-detail')
);

export const appRoutes = [
  {
    path: '/',
    index: true,
    element: <UsersList />,
  },
  {
    path: '/:id',
    element: <UserDetails />,
  },
];
