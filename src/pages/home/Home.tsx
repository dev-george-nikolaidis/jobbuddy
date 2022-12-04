import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import { ActionTypes } from "../../context/Actions";
import { useGeneralContext } from "../../context/GeneralContext";
import styles from "./home.module.scss";
import Jobs from "./Jobs";
import { jobs } from "../../data/data";
import FetchButton from "./FetchButton";

const Home: React.FC = () => {
	const { dispatch } = useGeneralContext();

	useEffect(() => {
		dispatch({ type: ActionTypes.FETCH_JOBS, payload: jobs });
	}, []);

	return (
		<div className={styles.home}>
			<Navigation />
			<Jobs />
			<FetchButton />
		</div>
	);
};

export default Home;
