"use client";

import BackButton from "@/components/MovieBackButton/BackButton";
import { useMovies } from "@/firebase/movies/movieHooks"
import { MoviesCompleteDto } from "@/types/movies.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MovieTable from "@/components/MovieComponents/MovieTable";

function DirectorPage() {

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { getMovieByIdWithAllInfo, deleteMovie } = useMovies();

  const [movie, setMovie] = useState<MoviesCompleteDto>({
    id: '',
    title: "",
    slug: "",
    year: 0,
    countryId: "",
    genreId: "",
    director: {
      firstName: "",
      lastName: "",
      id: "",
      countryId: ""
    },
    shortDescription: '',
    decadeChoice: '1920',
    keywords: [],
    get_image: '',
  });

  useEffect(() => {
    getMovieByIdWithAllInfo(id)
      .then((response) => {
        setMovie(response);
      });
  }, [])

  async function handleDeleteClick() {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await deleteMovie(id);
      toast.success("Deleted");
      router.push("/movies/movies");

    } catch (error) {
      toast.error("Something went wrong. Try again.")
      console.error("Error deleting: ", error);
    }
  }

  return (
    <div className='p-6 flex justify-center'>
      <div className="flex flex-col">
        <h2 className="text-xl mb-6 font-semibold">
          {movie.title}
        </h2>
        <MovieTable id={id} movie={movie} />
        <button
          className="block mt-10 rounded-2xl p-2 bg-red-500 hover:bg-red-600 text-white text-center"
          onClick={handleDeleteClick}
        >
          Delete movie
        </button>
        <BackButton name="movies" />
      </div>

    </div>
  )
}

export default DirectorPage