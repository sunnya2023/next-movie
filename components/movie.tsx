"use client";

import Link from "next/link";
import styles from "../style/movie.module.css";
import { useRouter } from "next/navigation";
interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}
export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onclick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onclick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
