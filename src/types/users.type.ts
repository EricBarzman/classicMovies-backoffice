
export interface AvatarDto {
  _id : string;
  id : number;
  label : string;
  get_image: string;
}

export interface VoteDto {
  _id: string;
  comment: string;
  rating: number;
  movieId: string;

}

export interface UserDto {
  _id: string;
  clerkId: string;
  email: string;
  username: string;
  avatarId: number;
  votesId: string[];
}

export interface UserFavorite {
  _id: string;
  userId: string;
  movieId: string;
  createdAt: string;
}