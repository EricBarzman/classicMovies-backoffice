
export type RegionDto = {
  _id: string;
  name: string;
}

export type CountryDto = {
  _id: string;
  name: string;
  region: RegionDto;
}

export type KeywordDto = {
  _id: string;
  label: string;
}

export type DirectorDto = {
  _id: string;
  firstName : string;
  lastName : string;
  country : CountryDto;
}

export type GenreDto = {
  _id: string;
  label : string;
  slug: string;
}

export type DecadeChoiceProps = '1920' | '1930' | '1940' | '1950' | '1960' | '1970' | '1980' | '1990' | '2000' | '2010'

export type MoviesCompleteDto = {
  _id: string;
  title: string;
  slug: string;
  year: number;
  country: CountryDto;
  genre: GenreDto;
  director: DirectorDto;
  shortDescription?: string;
  decadeChoice : DecadeChoiceProps;
  keywords: KeywordDto[];
  get_image: string;
}

export type MoviesSmallDto = {
  _id: string;
  title: string;
  slug: string;
  year: number;
  countryId: string;
  genreId: string;
  directorId: string;
  shortDescription?: string;
  decadeChoice : DecadeChoiceProps;
  keywordsId: string[];
  get_image: string;
}