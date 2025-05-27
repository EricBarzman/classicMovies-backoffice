import { DocumentData } from "firebase/firestore";

export interface RegionDto extends DocumentData {
  id: string;
  name: string;
}

export type RegionSentDto = {
  name: string;
}

export interface CountryDto extends DocumentData {
  id: string;
  name: string;
  region: RegionDto;
}

export type CountrySentDto = {
  name: string;
  regionId: string;
}

export interface KeywordDto extends DocumentData {
  id: string;
  label: string;
}

export type KeywordSentDto = {
  label: string;
}

export interface DirectorDto extends DocumentData {
  id: string;
  firstName: string;
  lastName: string;
  country: CountryDto;
}

export type DirectorSentDto = {
  firstName: string;
  lastName: string;
  countryId: string;
}

export interface GenreDto extends DocumentData {
  id: string;
  label: string;
  slug: string;
}

export type GenreSentDto = {
  label: string;
  slug: string;
}

export type DecadeChoiceProps =
  '1920' | '1930' | '1940' | '1950' | '1960' | '1970' | '1980' | '1990' | '2000' | '2010'

export interface MoviesCompleteDto extends DocumentData {
  id: string;
  title: string;
  slug: string;
  year: number;
  country: CountryDto;
  genre: GenreDto;
  director: DirectorDto;
  shortDescription?: string;
  decadeChoice: DecadeChoiceProps;
  keywords: KeywordDto[];
  get_image: string;
}

export interface MovieSingleDto extends DocumentData  {
  id: string;
  title: string;
  slug: string;
  year: number;
  countryId: string;
  genreId: string;
  directorId: string;
  shortDescription?: string;
  decadeChoice: DecadeChoiceProps;
  keywordsId: string[];
  get_image: string;
}

export type MovieSentDto = {
  title: string;
  slug: string;
  year: number;
  countryId: string;
  genreId: string;
  directorId: string;
  shortDescription?: string;
  decadeChoice: DecadeChoiceProps;
  keywordsId: string[];
  get_image: string;
}