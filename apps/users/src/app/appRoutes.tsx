import * as React from 'react';
import { Page } from '@picsart/ui';

const UsersList = React.lazy(() => import('@picsart/users/feature-users-list'));
const UserDetails = React.lazy(
  () => import('@picsart/users/feature-user-detail')
);

export const appRoutes = [
  {
    path: '/',
    index: true,
    element: (
      <Page title={'Users'}>
        <UsersList />
      </Page>
    ),
  },
  {
    path: '/:id',
    element: (
      <Page title={'User Detail'}>
        <UserDetails />
      </Page>
    ),
  },
];
