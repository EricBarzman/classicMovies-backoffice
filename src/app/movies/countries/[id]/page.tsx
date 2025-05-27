"use client";

import BackButton from "@/components/MovieBackButton/BackButton";
import CountryTable from "@/components/CountryComponents/CountryTable";
import { useCountries } from "@/firebase/movies/countryHooks"
import { CountryDto } from "@/types/movies.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CountryPage() {

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { getCountryById, deleteCountry } = useCountries();

  const [country, setCountry] = useState<CountryDto>({
    id: "",
    name: "",
    region: {
      id: "",
      name: ""
    }
  });

  useEffect(() => {
    getCountryById(id)
      .then((response) => {
        setCountry(response);
      });
  }, [])

  async function handleDeleteClick() {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await deleteCountry(id);
      toast.success("Deleted");
      router.push("/movies/countries");

    } catch (error) {
      toast.error("Something went wrong. Try again.")
      console.error("Error deleting: ", error);
    }

  }

  return (
    <div className='p-6 flex justify-center'>
      <div className="flex flex-col">
        <h2 className="text-xl mb-6 font-semibold">
          {country.name}
        </h2>
        <CountryTable country={country} />
        <button
          className="block mt-10 rounded-2xl p-2 bg-red-500 hover:bg-red-600 text-white text-center"
          onClick={handleDeleteClick}
        >
          Delete country
        </button>
        <BackButton name="countries" />
      </div>

    </div>
  )
}

export default CountryPage