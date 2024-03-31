import Link from "next/link";

export const metadata = {
  title: "HOME",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const result = await res.json();
  return result;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      hi
      {movies.map((movie: any) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
