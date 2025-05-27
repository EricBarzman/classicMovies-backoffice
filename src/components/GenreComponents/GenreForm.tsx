import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Firebase
import { useGenres } from "@/firebase/movies/genreHooks";

import toast from "react-hot-toast";
import { GenreSentDto } from "@/types/movies.type";
import slugify from "@/utils/slugify";

function GenreForm({ id }: { id: null | string; }) {

  const [genre, setGenre] = useState<GenreSentDto>({
    label: "",
    slug: ""
  });

  const { getGenreById, createGenre, updateGenre } = useGenres();
  
  const router = useRouter();
  const [labelError, setLabelError] = useState<string | null>();
  
  useEffect(() => {
    if (id) {
      getGenreById(id).then(data => setGenre(data));
    }
  }, [])

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setLabelError(null);
    
    try {
      if (genre.label.length < 1 || genre.label === '') {
        setLabelError("You must type a label");
        return;
      }
      
      if (!id) {
        await createGenre({
          label: genre.label,
          slug: slugify(genre.label),
        });
        router.push("/movies/genres");
        toast.success("Genre successfully created");

      }
      else {
        await updateGenre(id, {
          label: genre.label,
          slug: slugify(genre.label),
        });
        router.push("/movies/genres");
        toast.success("Genre successfully edited");
      };

    } catch (error) {
      toast.error("L'opération a échoué. Voir console.")
      console.error("Echec à créer/éditer: ", error);

    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 shadow-md w-full">
      <div className="flex flex-col mb-4">
        <label className="font-semibold text-sm">Label
          {labelError &&
            <span style={{ color: 'red' }}> {labelError}</span>}
        </label>
        <input
          type="text"
          name="label"
          placeholder="Name..."
          className="mb-4"
          value={genre.label}
          onChange={(e) => setGenre({ ...genre, label: e.target.value })}
        />
      </div>

      <div>
        <button
          className={`w-1/2 ${!id ? "bg-amber-400 hover:bg-amber-500" : "bg-teal-200 hover:bg-teal-300"} rounded-2xl p-2`}
          type="submit"
        >
          {!id ? "Créer" : "Mettre à jour"}
        </button>
      </div>
    </form>
  )
}

export default GenreForm