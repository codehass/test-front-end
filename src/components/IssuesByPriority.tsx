import TotalIssuesCard from "./TotalIssuesCard";
import IssuePriorityCard from "./IssuePriorityCard";
import PriorityBarChart from "./PriorityBarChart";

const priorities = [
	{
		label: "Critical issues",
		count: 10,
		color: "#F32FAA",
		bg: "#F32FAA1A",
	},
	{
		label: "High issues",
		count: 6,
		color: "#F32FAA",
		bg: "#F32FAA1A",
	},
	{
		label: "Medium issues",
		count: 4,
		color: "#FFB700",
		bg: "#FFB70033",
	},
	{
		label: "Low issues",
		count: 2,
		color: "#77CFBF",
		bg: "#77CFBF33",
	},
];

const IssuesByPriority = () => {
	return (
		<div className="grid grid-cols-4 grid-rows-2 gap-2">
			<TotalIssuesCard />
			<PriorityBarChart />
			<IssuePriorityCard {...priorities[0]} />
			<IssuePriorityCard {...priorities[1]} />
			<div className="col-start-4 row-start-2">
				<IssuePriorityCard {...priorities[2]} />
			</div>
			<div className="col-start-3 row-start-2">
				<IssuePriorityCard {...priorities[3]} />
			</div>
		</div>
	);
};

export default IssuesByPriority;
