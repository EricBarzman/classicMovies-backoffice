import { useRegions } from "@/firebase/movies/moviesHooks";
import { RegionDto } from "@/types/movies.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function RegionForm({ id }: { id: null | string; }) {

  const [region, setRegion] = useState<RegionDto>({
    _id: "",
    name: "",
  });

  const router = useRouter();
  const [nameError, setNameError] = useState<string | null>(null);
  const { deleteRegion, createRegion, updateRegion } = useRegions();

  useEffect(() => {
    if (id) setRegion({
      _id: id,
      name: "Something",
    })
  }, [])

  async function handleSubmit() {
    console.log("Submitted");
    console.log(region);
    if (!id) toast.success("Region successfully created");
    else toast.success("Region successfully edited");
  }

  async function handleDelete() {
    if (window.confirm('Confirmer la suppression ?')) {
      try {
        // await deleteRegion(id);
        toast.success("Successfully deleted");
        router.push("/movies/regions");

      } catch (error) {
        toast.error("Error")
        console.error("Could not delete: ", error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 shadow-md w-full">
      <div className="flex flex-col mb-4">
        <label className="font-semibold text-sm">Name
          {nameError &&
            <span style={{ color: 'red' }}> {nameError}</span>}
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          value={region.name}
          onChange={(e) => setRegion({ ...region, name: e.target.value })}
        />
      </div>

      <div>
        <button
          className="bg-amber-200 hover:bg-amber-300 rounded-2xl p-2"
          type="submit"
        >
          Enregistrer
        </button>
        {id && (
          <button
            type="button"
            style={{ marginLeft: 10 }}
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg"
          >
            Supprimer
          </button>
        )}
      </div>
    </form>
  )
}

export default RegionForm