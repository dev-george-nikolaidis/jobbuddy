import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import { ActionTypes } from "../../context/Actions";
import { useGeneralContext } from "../../context/GeneralContext";
import styles from "./home.module.scss";
import Jobs from "./Jobs";
import { jobs as data_jobs } from "../../data/data";
import FetchButton from "./FetchButton";

const Home: React.FC = () => {
	const {
		dispatch,
		state: { filter, filtered_jobs, jobs, no_jobs_found },
	} = useGeneralContext();

	useEffect(() => {
		if (filter && filtered_jobs.length > 0) {
			dispatch({ type: ActionTypes.FETCH_JOBS, payload: filtered_jobs });
		}
		if (filter && filtered_jobs.length === 0) {
			dispatch({ type: ActionTypes.FETCH_JOBS_FILTER, payload: data_jobs });
		}

		if (!filter) {
			dispatch({ type: ActionTypes.FETCH_JOBS, payload: data_jobs });
		}
	}, [filtered_jobs]);

	const handler_reset = () => {
		dispatch({ type: ActionTypes.RESET_JOBS, payload: data_jobs });
	};
	return (
		<div className={styles.home}>
			<Navigation />
			{no_jobs_found && <span className={styles.message}> No jobs found with the specified filters!</span>}
			{filtered_jobs.length > 0 && (
				<button className={styles.btn_reset} onClick={handler_reset}>
					All Jobs
				</button>
			)}

			<Jobs />
			<FetchButton />
		</div>
	);
};

export default Home;
