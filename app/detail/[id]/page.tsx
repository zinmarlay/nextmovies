import { MovieType, PersonType } from "@/types/global";
import Link from "next/link";

async function fetchMovie(id: string): Promise<MovieType> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });
  return await res.json();
}

async function fetchCasts(id: string): Promise<PersonType[]> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });
  const data = await res.json();
  return data.cast;
}

const backdrop = "http://image.tmdb.org/t/p/w1280";
const profile = "http://image.tmdb.org/t/p/w185";

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await fetchMovie(id);
  const casts = await fetchCasts(id);
  return (
    <div>
      <h2 className="p-4 border-b mb-4 text-xl font-bold">
        {movie.title}({movie.release_date.split("-")[0]})
      </h2>
      <div>
        <img src={backdrop + movie.backdrop_path} alt="" />
      </div>
      <div className="mt-4 mb-12">{movie.overview}</div>
      <h3 className="pb-4 border-b mb-4 text-lg font-bold">Cast</h3>
      <div className="flex gap-2 flex-wrap">
        {casts.map((cast) => {
          return (
            <div key={cast.id} className="w-46 mb-4">
              {cast.profile_path ? (
                <img src={profile + cast.profile_path} alt="" />
              ) : (
                <div className="h-69 bg-gray-200"></div>
              )}
              <Link href={`/person/${cast.id}`}>
                <b>{cast.name}</b>
              </Link>

              <div className="text-gray-600">{cast.character}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
