import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReUserDashboardStyles } from './re-user-dashboard-styles.js';
import '../re-user-menu/re-user-menu.js';
import { navigate } from '../../redux/actions/app.acs.js';

export class ReUserDashboard extends connect(store)(LitElement) {
	static get styles() {
		return [ReUserDashboardStyles];
	}
	static get properties() {
		return {
			propName: { type: String }
		};
	}

	constructor() {
		super();
	}

	render() {
		return html`
			<p>user dashboard component (logged in)</p>
			<re-user-menu></re-user-menu>
		`;
	}
}
customElements.define('re-user-dashboard', ReUserDashboard);
