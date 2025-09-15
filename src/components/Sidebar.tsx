import {
	Activity,
	BookOpen,
	ChevronDown,
	CirclePlay,
	FileText,
	FolderOpen,
	House,
	Menu,
	Monitor,
	Settings,
	User,
	Wrench,
} from "lucide-react";

import { useState } from "react";

const menuItems = [
	{ icon: <House /> },
	{ icon: <FolderOpen /> },
	{ icon: <FileText /> },
	{ icon: <Wrench /> },
	{ icon: <Activity /> },
	{ icon: <Monitor /> },
	{ icon: <CirclePlay /> },
	{ icon: <BookOpen /> },
	{ icon: <Settings /> },
];

function Sidebar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(4);

	function handleMenuItemClick(index: number) {
		setActiveIndex(index);
	}
	return (
		<div className="relative bg-white">
			<div className="flex justify-between border items-center border-gray-300 rounded-2xl m-1">
				<button
					aria-expanded={menuOpen}
					aria-label="Toggle menu"
					onClick={() => setMenuOpen(!menuOpen)}
					className="pl-7 hover:cursor-pointer"
				>
					<Menu size={24} />
				</button>
				<div className="flex items-center gap-1 pr-32 py-7">
					<div className="bg-[#86D5C6] p-4 rounded-lg text-5xl">
						<User className="text-[#093B42]" size={24} />
					</div>
					<ChevronDown size={24} />
				</div>
			</div>
			<div>
				{menuOpen && (
					<div className="absolute top-full left-0 bg-white border border-gray-300 rounded-2xl shadow-lg p-9 z-10">
						<ul className="space-y-2 flex flex-col gap-4">
							{menuItems.map((item, index) => (
								<li
									key={index}
									className={`cursor-pointer p-3 rounded-lg transition-colors duration-200 ${
										activeIndex === index
											? "bg-[#86D5C6]"
											: "bg-[#F4F5F6] hover:bg-gray-200"
									}`}
									onClick={() => handleMenuItemClick(index)}
								>
									{item.icon}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default Sidebar;
