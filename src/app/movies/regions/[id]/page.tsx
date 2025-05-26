"use client";

import RegionBackButton from "@/components/RegionComponents/RegionBackButton";
import RegionTable from "@/components/RegionComponents/RegionTable";
import { useRegions } from "@/firebase/movies/moviesHooks"
import { RegionDto } from "@/types/movies.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function RegionPage() {

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { getRegionById, deleteRegion } = useRegions();

  const [region, setRegion] = useState<RegionDto>({});

  useEffect(() => {
    getRegionById(id)
      .then((response) => setRegion(response));
  }, [])

  async function handleDeleteClick() {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await deleteRegion(id);
      toast.success("Deleted");
      router.push("/movies/regions");

    } catch (error) {
      toast.error("Something went wrong. Try again.")
      console.error("Error deleting: ", error);
    }

  }

  return (
    <div className='p-6 flex justify-center'>
      <div className="flex flex-col">
        <h2 className="text-xl mb-6 font-semibold">
          {region.name}
        </h2>
        <RegionTable region={region} />
        <button
          className="block mt-10 rounded-2xl p-2 bg-red-500 hover:bg-red-600 text-white text-center"
          onClick={handleDeleteClick}
        >
          Delete region
        </button>
        <RegionBackButton />
      </div>

    </div>
  )
}

export default RegionPage