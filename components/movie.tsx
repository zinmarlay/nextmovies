import { MovieType } from "@/types/global";
import Link from "next/link";

const poster = "http://image.tmdb.org/t/p/w185";
export default async function MovieCard({ movie }: { movie: MovieType }) {
  return (
    <div className="w-46 border rounded" key={movie.id}>
      <Link href={`/detail/${movie.id}`}>
        <img
          src={poster + movie.poster_path}
          alt=""
          className="hover:scale-105 transition-all"
        />
      </Link>
      <div className="p-2">
        <Link href={`/detail/${movie.id}`}>
          <b>{movie.title}</b>
        </Link>
        <div>{movie.release_date.split("-")[0]}</div>
      </div>
    </div>
  );
}
