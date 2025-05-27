import { useRegions } from "@/firebase/movies/regionHooks";
import { RegionSentDto } from "@/types/movies.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function RegionForm({ id }: { id: null | string; }) {

  const [region, setRegion] = useState<RegionSentDto>({
    name: "",
  });

  const { getRegionById, createRegion, updateRegion } = useRegions();

  const router = useRouter();
  const [nameError, setNameError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      getRegionById(id).then(data => setRegion(data))
    }
  }, [])

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (region.name.length < 1 || region.name === "") {
      setNameError("You must type a name");
      return;
    }

    try {
      if (!id) {
        await createRegion({
          name: region.name
        });
        router.push("/movies/regions");
        toast.success("Region successfully created");

      }
      else {
        await updateRegion(id, {
          name: region.name
        });
        router.push("/movies/regions");
        toast.success("Region successfully edited");
      };

    } catch (error) {
      toast.error("L'opération a échoué. Voir console.")
      console.error("Echec à créer/éditer: ", error);

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
          className={`${!id ? "bg-amber-200 hover:bg-amber-300" : "bg-teal-200 hover:bg-teal-300"} rounded-2xl p-2`}
          type="submit"
        >
          {!id ? "Créer" : "Mettre à jour"}
        </button>
      </div>
    </form>
  )
}

export default RegionForm