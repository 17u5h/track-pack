import React from "react";

type menuLinkProps = {
	navMenuClassName: string
	listClassName: string
	itemClassName: string
	linkClassName: string
	href?: string
}

const hrefs: string[] = ['https://', 'https://', 'https://']
const content: string[] = ['Главное', 'Мой плейлист', 'Войти']

export function NavMenu(props: menuLinkProps) {
	return (
		<div className={props.navMenuClassName}>
			<ul className={props.listClassName}>
				{hrefs.map((link, i) => (
					<li key={i} className={props.itemClassName}>
						<a href={props.href} className={props.linkClassName}>{content[i]}</a>
					</li>
				))}
			</ul>
		</div>
	)
}