/* eslint-disable react/react-in-jsx-scope */
import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import "./styles/global.scss";

const App = () => {
	return (
		<>
			<Header />
			<TaskList />
		</>
	);
};

export default App;
