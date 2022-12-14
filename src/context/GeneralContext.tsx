import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

import { Action, Genres } from "./Actions";
import { reducer } from "./GeneralReducer";

export interface GeneralContextState {
	jobs: any;
	single_job: any;
	filter: boolean;
	filtered_jobs: any;
	no_jobs_found: boolean;
}
const initialState: GeneralContextState = {
	jobs: [],
	single_job: [],
	filter: false,
	filtered_jobs: [],
	no_jobs_found: false,
};

type ContextHook = () => {
	state: GeneralContextState;
	dispatch: (action: Action) => void;
};

const GeneralContext = createContext<{
	state: GeneralContextState;
	dispatch: Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => {},
});

//Provider name must start with capital letter
export const GeneralContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <GeneralContext.Provider value={{ state, dispatch }}>{children}</GeneralContext.Provider>;
};

//Capitalize the first character after the word use
export const useGeneralContext: ContextHook = () => {
	const { state, dispatch } = useContext(GeneralContext);
	return { state, dispatch };
};
