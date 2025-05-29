import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Firebase
import { useDirectors } from "@/firebase/movies/directorHooks";

import toast from "react-hot-toast";
import { CountryDto, DirectorSentDto } from "@/types/movies.type";
import { useCountries } from "@/firebase/movies/countryHooks";

function DirectorForm({ id }: { id: null | string; }) {

  const [director, setDirector] = useState<DirectorSentDto>({
    firstName: '',
    lastName: '',
    countryId: '',
  });

  const [countries, setCountries] = useState<CountryDto[]>([{
    id: "",
    name: "",
    regionId: ""
  }])

  const { getDirectorById, createDirector, updateDirector } = useDirectors();

  const router = useRouter();
  const [firstNameError, setFirstNameError] = useState<string | null>();
  const [lastNameError, setLastNameError] = useState<string | null>();
  const [countryError, setCountryError] = useState<string | null>();

  const { getCountries } = useCountries();

  useEffect(() => {
    if (id) {
      getDirectorById(id).then(data => setDirector(data));
    }
    getCountries().then(data => setCountries(data));
  }, [])

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setFirstNameError(null);
    setLastNameError(null);

    try {
      if (director.firstName.length < 1 || director.firstName === '') {
        setFirstNameError("You must type a name");
        return;
      }

      if (director.lastName.length < 1 || director.lastName === '') {
        setFirstNameError("You must type a name");
        return;
      }

      if (director.countryId === "" || director.countryId === undefined) {
        setCountryError("You must choose a country");
        return;
      }

      if (!id) {
        await createDirector({
          firstName: director.firstName,
          lastName: director.lastName,
          countryId: director.countryId,
        });
        router.push("/movies/directors");
        toast.success("Director successfully created");

      }
      else {
        await updateDirector(id, {
          firstName: director.firstName,
          lastName: director.lastName,
          countryId: director.countryId,
        });
        router.push("/movies/directors");
        toast.success("Director successfully edited");
      };

    } catch (error) {
      toast.error("L'opération a échoué. Voir console.")
      console.error("Echec à créer/éditer: ", error);

    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 shadow-md w-full">
      <div className="flex flex-col mb-4">
        
        <label className="font-semibold text-sm">First name
          {firstNameError &&
            <span style={{ color: 'red' }}> {firstNameError}</span>}
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="First name..."
          className="mb-4"
          value={director.firstName}
          onChange={(e) => setDirector({ ...director, firstName: e.target.value })}
        />
        
        <label className="font-semibold text-sm">Last name
          {lastNameError &&
            <span style={{ color: 'red' }}> {lastNameError}</span>}
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Last name..."
          className="mb-4"
          value={director.lastName}
          onChange={(e) => setDirector({ ...director, lastName: e.target.value })}
        />

        <label className="font-semibold text-sm">Country
          {countryError &&
            <span style={{ color: 'red' }}> {countryError}</span>}
        </label>
        <select
          className="mt-4 border-1 rounded-xl p-2 w-1/2"
          name="region"
          value={director.countryId}
          onChange={(e) => setDirector({ ...director, countryId: e.target.value })}
        >
          <option disabled value="">Choose a country</option>
          {countries.map(country => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))}
        </select>
      </div>

      <div>
        <button
          className={`w-1/2 text-white ${!id ? "bg-amber-400 hover:bg-amber-500" : "bg-teal-200 hover:bg-teal-300"} rounded-2xl p-2`}
          type="submit"
        >
          {!id ? "Create" : "Update"}
        </button>
      </div>
    </form>
  )
}

export default DirectorForm