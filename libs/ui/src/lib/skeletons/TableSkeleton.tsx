import { Skeleton, Stack } from '@chakra-ui/react';

export function TableSkeleton() {
  return (
    <Stack>
      <Skeleton h={'40px'} />
      <Skeleton h={'40px'} />
      <Skeleton h={'40px'} />
      <Skeleton h={'40px'} />
      <Skeleton h={'40px'} />
      <Skeleton h={'40px'} />
      <Skeleton h={'40px'} />
    </Stack>
  );
}
