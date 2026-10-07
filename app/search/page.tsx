import MovieCard from "@/components/movie";
import { MovieType } from "@/types/global";

async function fetchSearch(q: string): Promise<MovieType[]> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${q}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    },
  );
  return (await res.json()).results;
}

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const q = (await searchParams).q;
  const movies = await fetchSearch(q);
  return (
    <div>
      <h2 className="p-4 border-b mb-4 text-xl font-bold">Search</h2>
      <div className="flex gap-2 flex-wrap">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
