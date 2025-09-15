import { useState } from "react";
import { Activity, Calendar } from "lucide-react";

const ScanDetailsBar = () => {
	const [status, setStatus] = useState("completed");

	return (
		<div className="flex justify-between items-center py-2 flex-wrap gap-6">
			<div className="flex items-center gap-4">
				<Activity color="#093B42B2" />
				<span className="font-medium">Scan Type:</span>
				<p>Web</p>
			</div>

			<div className="flex items-center gap-4">
				<Calendar color="#093B42B2" />
				<span className="font-medium">Date:</span>
				<p>12 Jan 25</p>
			</div>

			<p className="font-medium truncate">www.websitename.com | scan_name</p>

			<div className="flex items-center gap-4">
				<Activity color="#093B42B2" />
				<label htmlFor="status" className="font-medium">
					Status:
				</label>
				<select
					id="status"
					name="status"
					value={status}
					onChange={(e) => setStatus(e.target.value)}
					className="border rounded-md px-2 py-1 text-sm text-white bg-[#0F616C]"
				>
					<option value="completed">Completed</option>
					<option value="pending">Pending</option>
					<option value="progress">In Progress</option>
				</select>
			</div>
		</div>
	);
};

export default ScanDetailsBar;
