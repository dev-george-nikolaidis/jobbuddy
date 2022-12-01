import Navigation from "../../components/Navigation";
import styles from "./home.module.scss";

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<Navigation />
		</div>
	);
};

export default Home;
