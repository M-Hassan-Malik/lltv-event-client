import Dashboard from "views/dashboard/dashboard.js";
import CreateEvent from "views/pages/CreateEvent";
import ManageEvents from "./components/ManageEvents/ManageEvents.js";
import EventCategoryManage from "./components/ManageEvents/ManageEventsCategory.js";
import ManageFAQ from "./components/ManageFAQs/ManageFAQ.js";
import PublishingPage from "./components/PublishingPage/index.js";
import User from "views/pages/User.js";
import Bookings from "./components/Bookings/Bookings.js";
import BookingsView from "./components/Bookings/View.js";
import BookingsEdit from "./components/Bookings/Edit.js";
import CreateBlog from "./components/Blog/CreateBlog";
import BlogPosts from "./components/Blog/Posts";



// import Login from "views/pages/Login.js";
// import Lock from "views/pages/Lock.js";
// import Events from "views/pages/Events.js";

const routes = [
  {
    path: "/dashboard",
    id:'dashboard',
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    id:'page-collapse',
    name: "Pages",
    icon: "tim-icons icon-tag",
    state: "pagesCollapse",
    views: [
      {
        path: "/user-profile",
        id:'user-profile',
        name: "User Profile",
        mini: "UP",
        component: User,
        layout: "/admin",
      },
      {
        path: "/manage/faq",
        id:'manage-faq',
        name: "Manage FAQs",
        mini: "FAQ",
        component: ManageFAQ,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    id:'blog-collapse',
    name: "Blog",
    icon: "tim-icons icon-email-85",
    state: "blogCollapse",
    views: [
      {
        path: "/blogs/create",
        id:'blog-create',
        name: "Create Blog",
        mini: "B",
        component: CreateBlog,
        layout: "/admin",
      },
      {
        path: "/all/blogs",
        id:'all-blogs',
        name: "All Posts",
        mini: "Bs",
        component: BlogPosts,
        layout: "/admin",
      },
    ],
  },

  {
    collapse: true,
    id:'manage-events-collapse',
    name: "Manage Events",
    icon: "tim-icons icon-gift-2",
    state: "manageEventsCollapse",
    views: [
      {
        path: "/create-event",
        id:'create-events',
        name: "Create Event",
        mini: "CE",
        component: CreateEvent,
        layout: "/admin",
      },
      {
        path: "/ManageEvents",
        id:'manage-events',
        name: "Manage Events",
        mini: "ME",
        component: ManageEvents, // yaha se
        layout: "/admin",
      },
      {
        path: "/category",
        id:'events-category',
        name: "Manage Category",
        mini: "MC",
        component: EventCategoryManage,
        layout: "/admin",
      },
    ],
  }, // manage events
  {
    collapse: true,
    id:'manage-booking-collapse',
    name: "Manage Bookings",
    icon: "tim-icons icon-trophy",
    views: [
      {
        path: "/bookings", 
        id:'bookings',
        name: "Booking",
        mini: "B",
        component: Bookings,
        layout: "/admin",
      },
      {
        path: "/booking/view",
        id:'bookings-view',
        component: BookingsView,
        mini: "B",
        name: "View Booking",
        layout: "/admin",
      },
      {
        path: "/booking/edit",
        id:'bookings-edit',
        component: BookingsEdit,
        mini: "B",
        name: "Edit Booking",
        layout: "/admin",
      },
    ],
  },
  {
    path: "/settings",
    id:'settings',
    name: "Setting Page",
    icon: "tim-icons icon-settings",
    component: PublishingPage,
    layout: "/admin",
  },
];

export default routes;

// {
//   collapse: true,
//id:'',
//   name: "Manage Bookings",
//   icon: "tim-icons icon-image-02",
//   state: "pagesCollapse",
//   views: [
//     {
//       path: "/bookings",
//id:'',
//       name: "Booking",
//       mini: "B",
//       component: Bookings,
//       layout: "/admin",
//     },
//   ],
// },
