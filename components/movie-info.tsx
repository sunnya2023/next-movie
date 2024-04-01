import { API_URL } from "../app/(home)/page";
import styles from "../style/movie-info.module.css";

export async function getMovie(id: string) {
  // console.log("fetching movie", Date.now());
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  const result = await res.json();
  return result;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a href={movie.hompage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
