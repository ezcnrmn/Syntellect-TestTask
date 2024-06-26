import React from "react";
import "./Button.css";

interface ButtonProps extends React.PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
	[key: string]: unknown;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className="button" {...props}>
			{children}
		</button>
	);
};

export default Button;
