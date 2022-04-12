import Img1 from '../../images/svg-1.svg'
import Img2 from '../../images/svg-2.svg'
import Img3 from '../../images/svg-3.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: Img2,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Img1,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'About us',
  description:
    "We have two aspects one is from attendees side while the other one is from the organiser side. The attendees are able to purchase tickets from the events available at our website whilst also reading reviews and announcements from certain events. On the other hand, Organiser’s are able to create and manage their events through their personal dashboard. The dashboard also includes statistical views for their tickets and more updates on their dashboards.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: Img3,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true
};
