import { Action, ActionTypes } from "./Actions";
import { GeneralContextState } from "./GeneralContext";

type ReducerType = (state: GeneralContextState, action: Action) => GeneralContextState;

export const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_JOBS:
			return {
				...state,
				// @ts-ignore
				no_jobs_found: false,
				jobs: action.payload,
			};
		case ActionTypes.FETCH_JOBS_FILTER:
			return {
				...state,
				filter: false,
				no_jobs_found: true,
				// @ts-ignore
				jobs: action.payload,
			};
		case ActionTypes.FETCH_MORE_JOBS:
			return {
				...state,
				jobs: action.payload,
			};
		case ActionTypes.RESET_JOBS:
			return {
				...state,
				no_jobs_found: false,
				filtered_jobs: [],
				filter: false,
				jobs: action.payload,
			};
		case ActionTypes.FETCH_SINGLE_JOB:
			return {
				...state,
				// @ts-ignore
				single_job: action.payload,
			};
		case ActionTypes.FILTER_JOBS:
			return {
				...state,
				filter: true,
				filtered_jobs: action.payload,
			};

		default:
			return state;
	}
};
