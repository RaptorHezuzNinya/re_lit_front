import { css } from 'lit-element';
import { canBackgroundColor } from '../assets/css/colors';
export const SharedStyles = css`
	:host {
		display: block;
		box-sizing: border-box;
	}

	section,
	main {
		padding: 20px;
		background-color: ${canBackgroundColor};
	}

	section > * {
		max-width: 600px;
		margin-right: auto;
		margin-left: auto;
	}

	section:nth-of-type(even) {
		background-color: var(--app-section-even-color);
	}
	/*
	h2 {
		font-size: 24px;
		text-align: center;
		color: var(--app-dark-text-color);
	} */

	/* @media (min-width: 460px) {
		h2 {
			font-size: 36px;
		}
	} */

	.circle {
		display: block;
		width: 64px;
		height: 64px;
		margin: 0 auto;
		text-align: center;
		border-radius: 50%;
		background: var(--app-primary-color);
		color: var(--app-light-text-color);
		font-size: 30px;
		line-height: 64px;
	}
`;
