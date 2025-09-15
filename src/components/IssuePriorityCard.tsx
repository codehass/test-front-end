import { CircleAlert } from "lucide-react";

const IssuePriorityCard = ({
	label,
	count,
	color,
	bg,
}: {
	label: string;
	count: number;
	color: string;
	bg: string;
}) => (
	<div className="bg-white flex justify-between items-center text-[#093B42] rounded-2xl py-5 px-3">
		<div className="flex items-center gap-2">
			<div className="p-3 rounded-full" style={{ backgroundColor: bg }}>
				<CircleAlert size={32} color={color} />
			</div>
			<p className="font-medium">{label}</p>
		</div>
		<p className="font-medium">{count}</p>
	</div>
);

export default IssuePriorityCard;
