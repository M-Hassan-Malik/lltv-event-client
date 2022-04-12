import { actionTypes } from "./";

export const user = (value) => ({
	type: actionTypes.USER,
	payload: value
});

export const MANAGE_EVENT = (value) => ({
	type: actionTypes.MANAGE_EVENT,
	payload: value
});
export const EVENT = (value) => ({
	type: actionTypes.EVENT,
	payload: value
});
export const PUBLISHING_PAGE = (value) => ({
	type: actionTypes.PUBLISHING_PAGE,
	payload: value
});
export const BOOKING_VIEW_EDIT = (value) => ({
	type: actionTypes.BOOKING_VIEW_EDIT,
	payload: value
});
export const SHOW_TICKET = (value) => ({
	type: actionTypes.SHOW_TICKET,
	payload: value
});