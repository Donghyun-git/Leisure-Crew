import { QueryClient } from '@tanstack/react-query';

/**
 * 버전업되면서 deprecated인가..
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // keepPreviousData: true,
      // suspense: true,
      refetchInterval: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    },
  },
});
