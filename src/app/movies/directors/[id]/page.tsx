"use client";

import BackButton from "@/components/MovieBackButton/BackButton";
import { useDirectors } from "@/firebase/movies/directorHooks"
import { DirectorSentDto } from "@/types/movies.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DirectorTable from "@/components/DirectorComponents/DirectorTable";

function DirectorPage() {

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { getDirectorById, deleteDirector } = useDirectors();

  const [director, setDirector] = useState<DirectorSentDto>({
    firstName: "",
    lastName: '',
    countryId: ''
  });

  useEffect(() => {
    getDirectorById(id)
      .then((response) => {
        setDirector(response);
      });
  }, [])

  async function handleDeleteClick() {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await deleteDirector(id);
      toast.success("Deleted");
      router.push("/movies/directors");

    } catch (error) {
      toast.error("Something went wrong. Try again.")
      console.error("Error deleting: ", error);
    }

  }

  return (
    <div className='p-6 flex justify-center'>
      <div className="flex flex-col">
        <h2 className="text-xl mb-6 font-semibold">
          {director.firstName} {director.lastName}
        </h2>
        <DirectorTable id={id} director={director} />
        <button
          className="block mt-10 rounded-2xl p-2 bg-red-500 hover:bg-red-600 text-white text-center"
          onClick={handleDeleteClick}
        >
          Delete director
        </button>
        <BackButton name="directors" />
      </div>

    </div>
  )
}

export default DirectorPage