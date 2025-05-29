import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Firebase
import { useMovies } from "@/firebase/movies/movieHooks";

import toast from "react-hot-toast";
import { CountryDto, DirectorDto, GenreDto, KeywordDto, MovieSentDto } from "@/types/movies.type";
import { useCountries } from "@/firebase/movies/countryHooks";
import { useDirectors } from "@/firebase/movies/directorHooks";
import { useGenres } from "@/firebase/movies/genreHooks";
import { useKeywords } from "@/firebase/movies/keywordHooks";
import slugify from "@/utils/slugify";
import decadeChoice from "@/app/constants/decadeChoice";

function MovieForm({ id }: { id: null | string; }) {

  const [movie, setMovie] = useState<MovieSentDto>({
    title: "",
    year: 0,
    slug: "",
    countryId: "",
    genreId: "",
    directorId: "",
    decadeChoice: undefined,
    keywords: [],
    get_image: "",
    shortDescription: "",
  });

  const [countries, setCountries] = useState<CountryDto[]>([]);
  const [directors, setDirectors] = useState<DirectorDto[]>([]);
  const [genres, setGenres] = useState<GenreDto[]>([]);
  const [keywords, setKeywords] = useState<KeywordDto[]>([]);

  const { getMovieByIdWithAllInfo, createMovie, updateMovie } = useMovies();

  const router = useRouter();

  const [titleError, setTitleError] = useState<string | null>();
  const [countryError, setCountryError] = useState<string | null>();
  const [directorError, setDirectorError] = useState<string | null>();
  const [yearError, setYearError] = useState<string | null>();

  const { getCountries } = useCountries();
  const { getDirectors } = useDirectors();
  const { getGenres } = useGenres();
  const { getKeywords } = useKeywords();

  useEffect(() => {
    if (id) {
      getMovieByIdWithAllInfo(id).then(data => setMovie(data));
    }
    getCountries().then(data => setCountries(data));
    getDirectors().then(data => setDirectors(data));
    getGenres().then(data => setGenres(data));
    getKeywords().then(data => setKeywords(data));
  }, [])


  function handleKeywordChange(e) {
    // Remove keyword
    if (!e.target.checked)
      setMovie({
        ...movie,
        keywords: movie.keywords
          .filter(id => id !== e.target.value)
      })
    // Add keyword
    else
      setMovie({
        ...movie,
        keywords: [...movie.keywords, e.target.value]
      })
  }


  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setTitleError(null);
    setYearError(null);
    setCountryError(null);
    setDirectorError(null);

    try {
      if (movie.title === '') {
        setTitleError("You must type a title");
        return;
      }
      // Create
      if (!id) {
        await createMovie({
          title: movie.title,
          directorId: movie.directorId,
          countryId: movie.countryId,
          year: movie.year,
          slug: slugify(movie.title),
          genreId: movie.genreId,
          decadeChoice: movie.decadeChoice,
          keywords: movie.keywords,
          get_image: slugify(movie.title) + "." + "jpg",
          shortDescription: movie.shortDescription,
        });
        router.push("/movies/movies");
        toast.success("Movie successfully created");

      }
      // Update
      else {
        await updateMovie(id, {
          title: movie.title,
          directorId: movie.directorId,
          countryId: movie.countryId,
          year: movie.year,
          slug: slugify(movie.title),
          genreId: movie.genreId,
          decadeChoice: movie.decadeChoice,
          keywords: movie.keywords,
          get_image: slugify(movie.title) + "." + "jpg",
          shortDescription: movie.shortDescription,
        });
        router.push("/movies/movies");
        toast.success("Movie successfully edited");
      };

    } catch (error) {
      toast.error("L'opération a échoué. Voir console.")
      console.error("Echec à créer/éditer: ", error);

    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 shadow-md w-full">
      <div className="flex flex-col mb-4">

        <label className="font-semibold text-sm">Title
          {titleError &&
            <span style={{ color: 'red' }}> {titleError}</span>}
        </label>
        <input
          type="text"
          placeholder="Enter title..."
          className="mb-4"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />

        <label className="font-semibold text-sm">Year
          {yearError &&
            <span style={{ color: 'red' }}> {yearError}</span>}
        </label>
        <input
          type="number"
          placeholder="Enter year..."
          className="mb-4 w-1/2"
          value={movie.year}
          onChange={(e) => setMovie({ ...movie, year: Number(e.target.value) })}
        />

        <label className="font-semibold text-sm mt-6">
          Decade
        </label>
        <select
          className="mt-4 border-1 rounded-xl p-2 w-1/2"
          name="decade"
          value={movie.decadeChoice}
          onChange={(e) => setMovie({ ...movie, decadeChoice: e.target.value })}
        >
          <option disabled value="">Choose a decade</option>
          {decadeChoice.map(decade => (
            <option key={decade} value={decade}>{decade}</option>
          ))}
        </select>

        <label className="font-semibold text-sm mt-6">Director
          {directorError &&
            <span style={{ color: 'red' }}> {directorError}</span>}
        </label>
        <select
          className="mt-4 border-1 rounded-xl p-2 w-1/2"
          name="director"
          value={movie.directorId}
          onChange={(e) => setMovie({ ...movie, directorId: e.target.value })}
        >
          <option disabled value="">Choose a director</option>
          {directors.map(director => (
            <option key={director.id} value={director.id}>{director.firstName} {director.lastName}</option>
          ))}
        </select>

        <label className="font-semibold text-sm mt-6">Country
          {countryError &&
            <span style={{ color: 'red' }}> {countryError}</span>}
        </label>
        <select
          className="mt-4 border-1 rounded-xl p-2 w-1/2"
          name="country"
          value={movie.countryId}
          onChange={(e) => setMovie({ ...movie, countryId: e.target.value })}
        >
          <option disabled value="">Choose a country</option>
          {countries.map(country => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))}
        </select>

        <label className="font-semibold text-sm mt-6">
          Genre
        </label>
        <select
          className="mt-4 border-1 rounded-xl p-2 w-1/2"
          name="genre"
          value={movie.genreId}
          onChange={(e) => setMovie({ ...movie, genreId: e.target.value })}
        >
          <option disabled value="">Choose a genre</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.id}>{genre.label}</option>
          ))}
        </select>

        <label className="font-semibold text-sm mt-6">
          Keywords
        </label>
        {keywords.map(keyword => (
          <div key={keyword.id}>
            <label>{keyword.label}</label>
            <input
              defaultChecked={movie.keywords.includes(keyword.id)}
              type="checkbox"
              value={keyword.id}
              key={keyword.id}
              onChange={handleKeywordChange}
            />
          </div>
        ))}

        <label className="font-semibold mt-8 text-sm">
          Short description
        </label>
        <textarea
          placeholder="This movie is about..."
          className="mb-4"
          value={movie.shortDescription}
          onChange={(e) => setMovie({ ...movie, shortDescription: e.target.value })}
        />

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

export default MovieForm