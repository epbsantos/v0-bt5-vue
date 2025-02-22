import algoliasearch from 'algoliasearch';

const client = algoliasearch('YourApplicationID', 'YourSearchOnlyAPIKey');
const index = client.initIndex('your_index_name');

export const search = async (query) => {
  const { hits } = await index.search(query);
  return hits;
};