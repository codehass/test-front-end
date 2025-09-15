const navItems = ["Home", "Scans", "Websites", "Scan_name", "Issues"];

const Breadcrumbs = () => {
	return (
		<nav className="flex items-center gap-2 text-gray-800 font-medium text-sm">
			{navItems.map((item, index) => (
				<div key={index} className="flex items-center gap-2">
					<span className="font-medium border-b-2 border-gray-800 hover:cursor-pointer">
						{item}
					</span>
					{index < navItems.length - 1 && (
						<span className="text-gray-400">{">"}</span>
					)}
				</div>
			))}
		</nav>
	);
};

export default Breadcrumbs;
