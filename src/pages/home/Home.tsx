import Navigation from "../../components/Navigation";
import styles from "./home.module.scss";
import Jobs from "./Jobs";

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<Navigation />
			<Jobs />
		</div>
	);
};

export default Home;
