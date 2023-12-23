
/**
 * Can be quickly replaced with another API
 */
export const getPlaceholderApi = () => 'https://jsonplaceholder.typicode.com';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const swrFetcher = (...args) => fetch(...args).then((res) => res.json());
