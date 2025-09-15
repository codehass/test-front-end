const priorityData = [
	{ label: "Critical", count: 10, height: "h-28", color: "#0F616C" },
	{ label: "High", count: 8, height: "h-24", color: "#E4F5F2" },
	{ label: "Medium", count: 6, height: "h-16", color: "#0F616C" },
	{ label: "Low", count: 4, height: "h-12", color: "#E4F5F2" },
];

const PriorityBarChart = () => {
	return (
		<div className="row-span-2 bg-white flex items-center justify-center rounded-3xl">
			<div className="font-medium text-lg text-[#093B42] flex flex-col items-center">
				<p className="text-base">Issues by Priority</p>
				<div className="flex justify-center gap-6 items-end h-40">
					{priorityData.map((item, index) => (
						<div key={index} className="flex flex-col items-center">
							<p className="mb-1 text-xs">{item.count}</p>
							<div
								className={`w-6 ${item.height} rounded-md`}
								style={{ backgroundColor: item.color }}
							/>
							<p className="text-xs mt-1">{item.label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PriorityBarChart;
