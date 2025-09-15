import { Sparkles } from "lucide-react";

const UpgradeCard = () => {
	return (
		<div className="flex items-center gap-3 cursor-pointer bg-white border border-[#E2E2E2] rounded-xl px-4 py-2 w-fit hover:shadow-sm transition">
			<div className="bg-[#F32FAA1A] p-4 rounded-xl flex items-center justify-center">
				<Sparkles className="text-[#F32FAA]" size={24} />
			</div>
			<p className="underline font-medium">Upgrade Now</p>
		</div>
	);
};

export default UpgradeCard;
