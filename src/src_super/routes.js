import Dashboard from "./views/dashboard/dashboard.js";
import User from "views/pages/User.js";



import Login from "views/pages/Login.js";
import Lock from "views/pages/Lock.js";
import Events from "views/pages/Events.js";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/super-admin",
  },
  {
    collapse: true,
    name: "Pages",
    icon: "tim-icons icon-tag",
    state: "pagesCollapse",
    views: [
      {
        path: "/user-profile",
        name: "User Profile",
        mini: "UP",
        component: User,
        layout: "/super-admin",
      },
    ],
  },
];

export default routes;

// {
//   collapse: true,
//   name: "Manage Bookings",
//   icon: "tim-icons icon-image-02",
//   state: "pagesCollapse",
//   views: [
//     {
//       path: "/bookings",
//       name: "Booking",
//       mini: "B",
//       component: Bookings,
//       layout: "/super/admin/",
//     },
//   ],
// },
