"use client";

import BackButton from "@/components/MovieBackButton/BackButton";
import GenreTable from "@/components/GenreComponents/GenreTable";
import { useGenres } from "@/firebase/movies/genreHooks"
import { GenreSentDto } from "@/types/movies.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function GenrePage() {

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { getGenreById, deleteGenre } = useGenres();

  const [genre, setGenre] = useState<GenreSentDto>({
    label: '',
    slug: '',
  });

  useEffect(() => {
    getGenreById(id).then((response) => {
        setGenre(response);
      });
  }, [])

  async function handleDeleteClick() {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await deleteGenre(id);
      toast.success("Deleted");
      router.push("/movies/genres");

    } catch (error) {
      toast.error("Something went wrong. Try again.")
      console.error("Error deleting: ", error);
    }

  }

  return (
    <div className='p-6 flex justify-center'>
      <div className="flex flex-col">
        <h2 className="text-xl mb-6 font-semibold">
          {genre.label}
        </h2>
        <GenreTable id={id} genre={genre} />
        <button
          className="block mt-10 rounded-2xl p-2 bg-red-500 hover:bg-red-600 text-white text-center"
          onClick={handleDeleteClick}
        >
          Delete genre
        </button>
        <BackButton name="genres" />
      </div>

    </div>
  )
}

export default GenrePage