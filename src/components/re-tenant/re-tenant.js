import { LitElement, html, css } from 'lit-element';
import { normalize } from '../../css/normalize';

class ReTenant extends LitElement {
	static get styles() {
		return css`
			:host {
				${normalize}
			}
		`;
	}

	render() {
		const { email, first_name, account_holder } = this.tenant;
		return html`
			<article>
				<h1>${email}</h1>
				<p>${first_name}</p>
				<p>${account_holder}</p>
				<br />
			</article>
		`;
	}
}

customElements.define('re-tenant', ReTenant);
