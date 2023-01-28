import React from "react";
import classNames from "classnames";

const Button = ({
	children,
	primary,
	secondary,
	success,
	warning,
	rounded,
	outline,
	...rest
}) => {
	const classes = classNames("mx-auto px-3 py-1.5 border", {
		"border-blue-500 bg-blue-500 text-white": primary,
		"border-gray-900 bg-gray-900 text-white": secondary,
		"border-green-500 bg-green-500 text-white": success,
		"border-yellow-400 bg-yellow-400 text-white": warning,
		"rounded-full": rounded,
		"bg-white": outline,
		"text-blue-500": outline && primary,
		"text-gray-900": outline && secondary,
	});

	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	);
};

export default Button;
