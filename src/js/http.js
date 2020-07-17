export function httpGet(url) {
  throw new Error(url);
}

export function httpPost(url) {
  throw new Error(url);
}

export default function fetchData(url) {
  console.log(url); // чтобы линт не выдавал ошибку, что url не используется
  throw new Error('Mock this!');
}
