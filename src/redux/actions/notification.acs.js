// action types
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// action creators
export const setNotification = ({ message, entity }) => {
	return {
		type: `${entity} ${SET_NOTIFICATION}`,
		payload: message,
		meta: { entity }
	};
};

export const removeNotification = ({ notificationId, entity }) => ({
	type: `${entity} ${REMOVE_NOTIFICATION}`,
	payload: notificationId,
	meta: { entity }
});
