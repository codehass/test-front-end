import { Menu, User } from "lucide-react";
import "./App.css";

function App() {
	return (
		<div className="text-center mt-8 font-bold text-orange-500">
			<div className="flex justify-between p-4 border border-gray-300 rounded-lg ">
				<Menu />
				<User />
			</div>
			App component
		</div>
	);
}

export default App;
