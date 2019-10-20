import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { CSV, FILE } from '../../actions/file.acs.js';
import { TENANTS, createTenants } from '../../actions/tenant.acs.js';
import Papa from 'papaparse';
import { PARSE } from '../../actions/action.types.js';

export const fileMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	switch (action.type) {
		case `${TENANTS} ${FILE} ${CSV} ${PARSE}`: {
			const result = [];
			Papa.parse(action.payload, {
				header: true,
				step: function(row) {
					result.push(row.data);
				},
				complete: () => {
					console.log(result);
					dispatch(setLoader({ state: true, entity: FILE }));
					dispatch(createTenants({ data: result, multiple: true }));
				}
			});
			break;
		}

		case `${FILE} ${API_SUCCESS}`: {
			next([]);

			break;
		}

		case `${FILE} ${API_ERROR}`: {
			next([]);
			break;
		}
	}
};