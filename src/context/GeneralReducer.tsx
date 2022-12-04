import { Action, ActionTypes } from "./Actions";
import { GeneralContextState } from "./GeneralContext";

type ReducerType = (state: GeneralContextState, action: Action) => GeneralContextState;

export const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_JOBS:
			return {
				...state,
				// @ts-ignore
				jobs: action.payload,
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
				single_job: action.payload,
			};

		default:
			return state;
	}
};
