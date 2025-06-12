import { Timestamp } from "firebase/firestore";

export interface AvatarDto {
  id : string;
  avatarId : number;
  get_image: string;
}

export interface VoteDto {
  id: string;
  comment: string;
  rating: number;
  movieId: string;
}

export interface ContactUsDto {
  id: string;
  email: string;
  topic: string;
  content: string;
  createdAt: Timestamp;
}

export interface UserDto {
  id: string;
  email: string;
  username: string;
  avatarId: number;
  votesId: string[];
}

export interface UserFavorite {
  id: string;
  userId: string;
  movieId: string;
  createdAt: string;
}