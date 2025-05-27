import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Firebase
import { useCountries } from "@/firebase/movies/countryHooks";
import { useRegions } from "@/firebase/movies/regionHooks";
import { DocumentData } from "firebase/firestore";

import toast from "react-hot-toast";

function CountryForm({ id }: { id: null | string; }) {

  const [country, setCountry] = useState<DocumentData>({
    name: "",
    regionId: ""
  });

  const [regions, setRegions] = useState<[DocumentData]>([{
    id: "",
    name: "",
  }]);

  const { getCountryById, createCountry, updateCountry } = useCountries();
  const { getRegions } = useRegions();

  const router = useRouter();
  const [nameError, setNameError] = useState<string | null>();
  const [regionError, setRegionError] = useState<string | null>();

  useEffect(() => {
    getRegions().then(response => setRegions(response));
    if (id) {
      getCountryById(id).then(data => setCountry(data));
    }
  }, [])

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setNameError(null);
    setRegionError(null);

    try {
      if (country.name.length < 1 || country.name === '') {
        setNameError("You must type a name");
        return;
      }
      if (country.regionId === "" || !country.regionId) {
        setRegionError("You must choose a region");
        return;
      }

      if (!id) {
        await createCountry(country);
        router.push("/movies/countries");
        toast.success("Country successfully created");

      }
      else {
        await updateCountry(id, country);
        router.push("/movies/countries");
        toast.success("Country successfully edited");
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
          className="mb-4"
          value={country.name}
          onChange={(e) => setCountry({ ...country, name: e.target.value })}
        />
        <label className="font-semibold text-sm">Region
          {regionError &&
            <span style={{ color: 'red' }}> {regionError}</span>}
        </label>
        <select
          className="mt-4 border-1 rounded-xl p-2 w-1/2"
          name="region"
          value={country.regionId}
          onChange={(e) => setCountry({ ...country, regionId: e.target.value })}
        >
          <option disabled value="">Choisir une région</option>
          {regions.map(region => (
            <option key={region.id} value={region.id}>{region.name}</option>
          ))}
        </select>
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

export default CountryForm