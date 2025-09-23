interface CircleQuarterProps {
	className?: string;
	fill: string;
}

const CircleQuarter = ({ className = "", fill }: CircleQuarterProps) => (
	<div
		className={`${className} overflow-hidden`}
		aria-hidden="true"
		style={{ borderTopRightRadius: "100%" }}
	>
		<svg
			viewBox="0 0 100 100"
			className="w-full h-full"
			preserveAspectRatio="xMinYMin meet"
			focusable="false"
			aria-hidden="true"
		>
			<circle cx="0" cy="100" r="50" fill={fill} />
			{/* thi is a cooent */}
		</svg>
	</div>
);

export default CircleQuarter;
