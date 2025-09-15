import { useState } from "react";

const statusNavigation = [
	"Summary",
	"Compliance",
	"Accessibility",
	"Pages",
	"Files",
	"Issues",
];

const StatusTabs = () => {
	const [activeIndex, setActiveIndex] = useState(statusNavigation.length - 1);

	return (
		<ul className="flex justify-between gap-8 bg-white px-12 rounded-2xl my-4">
			{statusNavigation.map((item, index) => (
				<li
					key={index}
					onClick={() => setActiveIndex(index)}
					className={`text-xl py-7 font-medium hover:cursor-pointer hover:border-b-4 hover:border-gray-800 transition ${
						index === activeIndex ? "border-b-4 border-gray-800" : ""
					}`}
				>
					{item}
				</li>
			))}
		</ul>
	);
};

export default StatusTabs;
