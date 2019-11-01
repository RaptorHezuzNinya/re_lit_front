import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { ING_API } from '../../actions/ing.acs.js';
import { FETCH } from '../../actions/action.types.js';
import { ACCESS_TOKEN } from '../../actions/subEntities.js';

export const ingMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);
	const { entity, subEntity } = action.meta || {};
	switch (action.type) {
		case `${ING_API} ${ACCESS_TOKEN} ${FETCH}`: {
			next([
				apiRequest({
					url: `/oauth2/token`,
					method: 'POST',
					entity,
					ing: true
				}),
				setLoader({ state: true, entity })
			]);
			break;
		}
	}
};

// Host: api.ing.com
// Date: Sun, 05 Jan 2014 21:31:40 GMT
// Content-Type: application/x-www-form-urlencoded

// grant_type=client_credentials&scope=greetings%3Aview
