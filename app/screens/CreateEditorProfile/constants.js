import {createNumberMask} from 'react-native-mask-input';

export const INPUT_KEYS = {
  TITLE: 'title',
  BIO: 'bio',
  SERVICE_OFFERINGS: 'servicesOfferings',
  SKILLS: 'skills',
  SUGGESTED_SKILLS: 'suggestedSkills',
  PORTFOLIO_LINK: 'portfolioLink',
  PORTFOLIO_VIDEO: 'portfolioVideo',
  INSTITUTE_NAME: 'instituteName',
  DEGREE_NAME: 'degreeName',
  DEGREE_START_DATE: 'degreeStartDate',
  DEGREE_END_DATE: 'degreeEndDate',
  HOURLY_RATE: 'hourlyRate',
  ACTUAL_HOURLY_RATE: 'actualHourlyRate',
  PROFILE_IMAGE: 'profileImage',
  COUNTRY: 'country',
  ADDRESS: 'address',
  CITY: 'city',
  LANGUAGE: 'language',
};

export const SERVICES_OFFERINGS = [
  {
    id: '1',
    name: 'Animations',
  },
  {
    id: '2',
    name: 'Video Editing',
  },
  {
    id: '3',
    name: 'Audio Editing',
  },
  {
    id: '4',
    name: 'Transitions',
  },
  {
    id: '5',
    name: 'Music Video',
  },
];
export const skillsSetInputs = [
  {
    id: '1',
    key: INPUT_KEYS.TITLE,
    type: 'input',
    label: 'Add Title',
    placeholder: 'Example: Video Editor',
  },
  {
    id: '2',
    key: INPUT_KEYS.BIO,
    type: 'input-multiline',
    label: 'Bio',
    placeholder:
      'Describe your top level skills, experiences \n' + 'and interests',
    bottomMessage: 'At least 500 characters',
    multiline: true,
    numberOfLines: 3,
  },
  {
    id: '3',
    key: INPUT_KEYS.SERVICE_OFFERINGS,
    type: 'dropdown',
    servicesList: SERVICES_OFFERINGS,
    label: 'Service  Offering',
    placeholder: 'Choose service',
    editable: false,
    isDropDown: true,
    pointerEvents: 'none',
  },
  {
    id: '4',
    key: INPUT_KEYS.SKILLS,
    type: 'multiline-view',
    label: 'Your Skills',
    placeholder: 'Add skills',
    multiline: true,
    editable: false,
    bottomMessage: 'Max 10 Skills',
  },
  {
    id: '5',
    key: INPUT_KEYS.SUGGESTED_SKILLS,
    type: 'multiline-selections',
    label: 'Suggested Skills',
    suggestedSkills: [
      {
        id: '1',
        title: 'Video Production',
      },
      {
        id: '2',
        title: 'Color Grading',
      },
      {
        id: '3',
        title: 'Music Video',
      },
      {
        id: '4',
        title: 'Video Editing',
      },
      {
        id: '5',
        title: 'Podcast',
      },
    ],
  },
];

export const signupPages = [
  {
    id: '1',
    key: 'skillsSet',
  },
  {
    id: '2',
    key: 'portfolio',
  },
  {
    id: '3',
    key: 'education',
  },
  {
    id: '4',
    key: 'hourlyRate',
  },
  {
    id: '5',
    key: 'profile',
  },
  {
    id: '6',
    key: 'reviewProfile',
  },
];

export const PORTFOLIO_INPUTS = [
  {
    id: '1',
    key: INPUT_KEYS.PORTFOLIO_LINK,
    label: 'Portfolio Link',
    placeholder: 'https://',
    type: 'input',
  },
  {
    id: '2',
    key: INPUT_KEYS.PORTFOLIO_VIDEO,
  },
];

export const EDUCATION_INPUTS = [
  {
    id: '1',
    key: INPUT_KEYS.INSTITUTE_NAME,
    label: 'Name of Institute ',
    placeholder: 'Enter name',
  },
  {
    id: '2',
    key: INPUT_KEYS.DEGREE_NAME,
    label: 'Name of Degree',
    placeholder: 'Enter name of degree',
  },
  [
    {
      id: '3',
      key: INPUT_KEYS.DEGREE_START_DATE,
      editable: false,
      type: 'dateView',
      label: 'Start Date',
      placeholder: 'DD/MM/YYYY',
    },
    {
      id: '4',
      key: INPUT_KEYS.DEGREE_END_DATE,
      editable: false,
      type: 'dateView',
      label: 'End Date',
      placeholder: 'DD/MM/YYYY',
    },
  ],
];

const dollarMask = createNumberMask({
  prefix: ['$', ' '],
  delimiter: ',',
  separator: '.',
  precision: 2,
});

export const HOURLY_RATE_INPUTS = [
  {
    id: '1',
    key: INPUT_KEYS.HOURLY_RATE,
    label: 'Hourly Rate',
    placeholder: '$  50.00',
    bottomMessage: 'Total amount the client will see',
    keyboardType: 'decimal-pad',
    returnKeyType: 'done',
    mask: dollarMask,
    isMaskInput: true,
  },
  {
    id: '2',
    key: INPUT_KEYS.ACTUAL_HOURLY_RATE,
    label: 'You’ll receive',
    placeholder: '$  40.00',
    bottomMessage: 'The estimated amount you’ll receive after service fees',
    keyboardType: 'decimal-pad',
    returnKeyType: 'done',
    mask: dollarMask,
    isMaskInput: true,
  },
];

export const UNITS = [
  {
    id: '1',
    label: '/hr',
  },
  {
    id: '2',
    label: '/day',
  },
  {
    id: '3',
    label: '/week',
  },
  {
    id: '4',
    label: '/month',
  },
];

export const PROFILE_INFO_INPUTS = [
  {
    id: '1',
    key: INPUT_KEYS.COUNTRY,
    label: 'Country',
    placeholder: 'Select Country',
    editable: false,
    pointerEvents: 'none',
  },
  {
    id: '2',
    key: INPUT_KEYS.ADDRESS,
    label: 'Address',
    placeholder: 'Enter Address',
    bottomMessage: 'This won’t show on profile',
  },
  {
    id: '3',
    key: INPUT_KEYS.CITY,
    label: 'City',
    placeholder: 'Search City',
  },
  {
    id: '4',
    key: INPUT_KEYS.LANGUAGE,
    label: 'language',
    placeholder: 'Select language',
    editable: false,
    pointerEvents: 'none',
  },
];
export const LANGUAGES = [
  {
    id: '1',
    name: 'English',
  },
  {
    id: '2',
    name: 'Italian',
  },
  {
    id: '3',
    name: 'French',
  },
  {
    id: '4',
    name: 'Dutch',
  },
  {
    id: '5',
    name: 'Arabic',
  },
  {
    id: '6',
    name: 'Hindi',
  },
  {
    id: '7',
    name: 'Urdu',
  },
];
