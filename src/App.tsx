import Sidebar from "./components/Sidebar";
import Breadcrumbs from "./components/Breadcrumbs";
import UsageCard from "./components/UsageCard";
import UpgradeCard from "./components/UpgradeCard";
import ScanDetailsBar from "./components/ScanDetailsBar";
import StatusTabs from "./components/StatusTabs";
import IssuesByPriority from "./components/IssuesByPriority";

import Hexagon from "./components/Hexagon";
import CircleQuarter from "./components/CircleQuarter";

function App() {
	return (
		<div className="bg-[#f4f3ef] text-[#093B42]">
			<Sidebar />

			<div className="relative flex flex-col justify-center items-center overflow-hidden">
				<Hexagon
					fill="#093B42"
					className="absolute w-96 h-96 left-0 -top-12 translate-x-[-50%] translate-y-[-40%] opacity-90"
				/>
				<Hexagon
					fill="#F32FAA"
					className="absolute w-96 h-96 right-0 top-0 translate-x-[50%] translate-y-[-50%] opacity-90"
				/>
				<CircleQuarter
					fill="#FFB700"
					className="absolute bottom-0 left-0 w-96 h-96 "
				/>
				<Hexagon
					fill="#86D5C6"
					className="absolute w-96 h-96 bottom-0 right-0 translate-x-[50%] translate-y-[50%] opacity-90"
				/>

				<div className="w-full max-w-7xl px-10 py-6">
					<div className="flex justify-between items-center">
						<Breadcrumbs />
						<div className="flex items-center gap-6">
							<UsageCard />
							<UpgradeCard />
						</div>
					</div>

					<h1 className="text-5xl py-8">Title</h1>

					<ScanDetailsBar />
					<StatusTabs />
					<IssuesByPriority />
				</div>
			</div>
		</div>
	);
}

export default App;
