import MovieCard from "@/components/movie";
import { MovieType } from "@/types/global";

async function fetchUpcoming(): Promise<MovieType[]> {
  const res = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });
  return (await res.json()).results;
}

export default async function Home() {
  const upcoming = await fetchUpcoming();
  return (
    <div>
      <h2 className="py-4 border-b mb-4 text-xl font-bold">Upcoming</h2>
      <div className="flex gap-2 flex-wrap">
        {upcoming.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
