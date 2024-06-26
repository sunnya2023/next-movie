import Movie from "../../components/movie";
import styles from "../../style/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "HOME",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const result = await res.json();
  return result;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
