import { useNavigate, useParams } from 'react-router-dom';
import { useUserApi } from '@picsart/shared/data-access';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { Page } from '@picsart/ui';

export function UserDetail() {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  const { isLoading, users, isEmpty } = useUserApi({ userId });

  const [user] = users;

  if (isEmpty) {
    return <Box>User Not found</Box>;
  }

  return (
    <Page title={'User Detail'}>
      <Button onClick={() => navigate(-1)} colorScheme={'teal'} mb={4}>
        Back
      </Button>
      {isLoading && <Skeleton h={'120px'} />}
      {user && (
        <Card>
          <CardHeader>
            <Heading size={'lg'}>{user.name}</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Email: <b>{user.email}</b>
            </Text>
            <Text>
              Username: <b>{user.username}</b>
            </Text>
            <Text>
              Phone: <b>{user.phone}</b>
            </Text>
            <Text>
              Company: <b>{user.company.name}</b>
            </Text>
            <Text>
              Address: <b>{user.address.street}</b>
            </Text>
          </CardBody>
        </Card>
      )}
    </Page>
  );
}
