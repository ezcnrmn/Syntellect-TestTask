import React from "react";
import Button from "../Button";
import "./WithButtons.css";

interface ButtonProps {
	key: React.Key;
	text: string;
	onClick: () => void;
}
interface WithButtonsProps extends React.PropsWithChildren {
	prefixes?: ButtonProps[];
	suffixes?: ButtonProps[];
}

const WithButtons: React.FC<WithButtonsProps> = ({ prefixes, suffixes, children }) => {
	return (
		<div className="with-buttons">
			{prefixes &&
				prefixes.map((button) => (
					<div className="with-buttons__button" key={button.key}>
						<Button onClick={button.onClick}>{button.text}</Button>
					</div>
				))}

			{children}

			{suffixes &&
				suffixes.map((button) => (
					<div className="with-buttons__button" key={button.key}>
						<Button onClick={button.onClick}>{button.text}</Button>
					</div>
				))}
		</div>
	);
};

export default WithButtons;
