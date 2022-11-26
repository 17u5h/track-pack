import {User} from "../user";

export interface Track {
	id: number,
	name: string,
	author: string,
	release_date: string,
	genre: string,
	album: string,
	duration_in_seconds: number,
	logo?: string,
	stared_user: User[],
	track_file: string,
	isLiked: boolean,
}