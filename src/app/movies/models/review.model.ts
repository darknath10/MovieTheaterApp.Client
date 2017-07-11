import { IUser } from '../../user/models/user.model';

export interface IReview {
    movieId: number;
    score: number;
    text: string;
    user: IUser;
}