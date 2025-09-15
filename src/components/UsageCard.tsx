import { LoaderCircle } from "lucide-react";

const UsageCard = () => {
	return (
		<div className="flex items-center cursor-pointer gap-3 bg-white border border-[#E2E2E2] rounded-xl px-8 py-5 w-fit hover:shadow-sm transition">
			<div className="bg-white rounded-xl flex items-center justify-center">
				<LoaderCircle className="text-[#86D5C6]" size={40} />
			</div>
			<p className="underline font-medium">Usage</p>
		</div>
	);
};

export default UsageCard;
