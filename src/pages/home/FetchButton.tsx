import styles from "./fetchButton.module.scss";
import { jobs_2 } from "../../data/data";
import { useGeneralContext } from "../../context/GeneralContext";
import { ActionTypes } from "../../context/Actions";
const FetchButton: React.FC = () => {
	const {
		dispatch,
		state: { jobs },
	} = useGeneralContext();

	const handle_click = () => {
		dispatch({ type: ActionTypes.FETCH_MORE_JOBS, payload: jobs.concat(jobs_2) });
	};

	return (
		<div className={styles.btn_wrapper}>
			<button className={styles.fetch_btn} onClick={handle_click}>
				Load More
			</button>
		</div>
	);
};

export default FetchButton;
