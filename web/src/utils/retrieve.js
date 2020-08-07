import cache from './cache';

const API_URL = `https://raw.githubusercontent.com/chunyenHuang/nhi-open-data-tool/master/data/latest`;

export default async function retrieve(path, options = {}) {
  path = path.endsWith('.json') ? path : `${path}.json`;
  const cacheKey = `api:${path}`;
  const cachedData = await cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const res = await fetch(`${API_URL}/${path}`);
  const output = await res.json();

  await cache.set(cacheKey, output);

  return output;
}

export const getItemImageUrl = (id) => {
  return `https://www.nhi.gov.tw/Query4Pic/${id}.jpg`;
};