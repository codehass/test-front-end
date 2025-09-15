interface HexagonProps {
	className?: string;
	fill: string;
}

const Hexagon = ({ className = "", fill }: HexagonProps) => (
	<svg
		viewBox="0 0 100 100"
		className={className}
		aria-hidden="true"
		focusable="false"
	>
		<path
			d="
        M25,2.5 
        A5,5 0 0 1 30,0 
        H70 
        A5,5 0 0 1 75,2.5 
        L97.5,50 
        A5,5 0 0 1 97.5,55 
        L75,97.5 
        A5,5 0 0 1 70,100 
        H30 
        A5,5 0 0 1 25,97.5 
        L2.5,55 
        A5,5 0 0 1 2.5,50 
        Z
      "
			fill={fill}
		/>
	</svg>
);

export default Hexagon;
