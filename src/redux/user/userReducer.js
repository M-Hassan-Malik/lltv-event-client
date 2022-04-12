import { actionTypes } from "./";

const initialState = {
  user: {
    _id: "",
    user_type: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    dob: "",
    postal: "",
    contact: "",
    company: "",
    created_at: "",
    created_at: "",
    month: "",
    country: {}

  },
  MANAGE_EVENT: {
    organizer_id: "unmounted", // to check if user unmounter the Create Event Component
    title: "",
    hostingPlatform: "",
    category: "",
    eventType: "",
    webURL: "",
    description: "",
    moreinfo: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    venue: "",
    venue_address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    images: [],
    tickets_sold: "",
    month: 0,
    updated_at: new Date(),
    created_at: new Date(),
  },
  event: {
    // when Publishing Page mounts then it gets populated
    organizer_id: "",
    title: "",
    category: "",
    eventType: "",
    webURL: "",
    description: "",
    hostingPlatform: "",
    moreinfo: "",
    start_date: new Date(),
    end_date: new Date(),
    start_time: "",
    end_time: "",
    venue: "",
    venue_address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    images: [{ filename: "" }],
    tickets_sold: "",
    month: 0,
    updated_at: new Date(),
    created_at: new Date(),
  },
  webURLsAndIDs: [
    {
      webURL: "",
      eventId: "",
    },
  ],
  bookingsViewandEditData: "", //contains ticket's id
  showTicket : false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.MANAGE_EVENT:
      return {
        ...state,
        MANAGE_EVENT: action.payload,
      };
    case actionTypes.EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case actionTypes.PUBLISHING_PAGE:
      return {
        ...state,
        webURLsAndIDs: action.payload,
      };
    case actionTypes.BOOKING_VIEW_EDIT:
      return {
        ...state,
        bookingsViewandEditData: action.payload,
      };
    case actionTypes.SHOW_TICKET:
      return {
        ...state,
        showTicket: action.payload,
      };
    default:
      return state;
  }
};
