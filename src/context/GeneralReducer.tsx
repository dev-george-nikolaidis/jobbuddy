import { Action, ActionTypes } from "./Actions";
import { GeneralContextState } from "./GeneralContext";

type ReducerType = (state: GeneralContextState, action: Action) => GeneralContextState;

export const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_JOBS:
			return {
				...state,
				// @ts-ignore
				jobs: JSON.parse(localStorage.getItem("jobs")),
			};
		case ActionTypes.FETCH_MORE_JOBS:
			return {
				...state,
				jobs: action.payload,
			};
		case ActionTypes.FETCH_SINGLE_JOB:
			return {
				...state,
				// @ts-ignore
				single_job: JSON.parse(localStorage.getItem("single_job")),
			};

		default:
			return state;
	}
};
