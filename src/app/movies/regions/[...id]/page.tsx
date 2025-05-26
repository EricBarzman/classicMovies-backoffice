import { useRegions } from "@/firebase/movies/moviesHooks"
import { RegionDto } from "@/types/movies.type";
import { DocumentData } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useState } from "react";

function RegionPage() {

  const { id } = useParams<{ id: string }>();

  // Mon CRUD
  const { getRegions, getRegionsById, createRegion, updateRegion, deleteRegion } = useRegions();

  const [region, setRegion] = useState<RegionDto>({
    _id: '',
    name: "",
  })

  return (
    <div>
      <h2></h2>
    </div>
  )
}

export default RegionPage