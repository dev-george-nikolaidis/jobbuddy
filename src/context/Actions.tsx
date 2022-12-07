export enum ActionTypes {
	FETCH_JOBS = "FETCH_JOBS",
	FETCH_MORE_JOBS = "FETCH_MORE_JOBS",
	FETCH_SINGLE_JOB = "FETCH_SINGLE_JOB",
	FILTER_JOBS = "FILTER_JOBS",
	FETCH_JOBS_FILTER = "FETCH_JOBS_FILTER",
	RESET_JOBS = "RESET_JOBS",
}

export enum PayloadTypes {}

export interface Action {
	type: ActionTypes;
	payload?: any;
}

export interface Genres {
	genres: Genre[];
}

export interface Genre {
	id: number;
	name: string;
}
