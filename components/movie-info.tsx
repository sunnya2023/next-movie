import { API_URL } from "../app/(home)/page";

async function getMovie(id) {
  console.log("fetching movie", Date.now());
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  const result = await res.json();
  return result;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
