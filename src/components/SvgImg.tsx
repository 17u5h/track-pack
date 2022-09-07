import React from "react";

type SvgImgProps = {
	className: string,
	href: string
}

export function SvgImg({className, href}: SvgImgProps) {
	return (
		<svg className={className}>
			<use xlinkHref={href}></use>
		</svg>
	)
}

