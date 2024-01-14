/**
 * 라우터 path
 */
export const PATH = {
  root: '/' as const,
  community: '/community' as const,
  crews: '/crews' as const,
};

export const ROOT_PATH = {
  root: '/:params' as const,
  main: '' as const,
  community: 'community' as const,
  crews: 'crews' as const,
};
