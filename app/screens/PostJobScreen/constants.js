export const INPUT_KEYS = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  SKILLS: 'skills',
  PRICE: 'price',
  DEADLINE: 'deadline',
};

export const inputs = [
  {
    id: '1',
    key: INPUT_KEYS.TITLE,
    label: 'Title *',
    placeholder: 'Enter a short title',
    returnKeyType: 'next',
  },
  {
    id: '2',
    key: INPUT_KEYS.DESCRIPTION,
    label: 'Description *',
    placeholder: 'Describe your project',
    returnKeyType: 'next',
  },
  {
    id: '3',
    key: INPUT_KEYS.SKILLS,
    label: '',
    skillsLabel: 'Skills Required *',
    skills: [
      {
        id: '1',
        name: 'Video Editing',
      },
      {
        id: '2',
        name: 'Adobe Premier Pro',
      },
      {
        id: '3',
        name: 'Transitions',
      },
      {
        id: '4',
        name: 'Tiktok',
      },
      {
        id: '5',
        name: 'Facebook',
      },
      {
        id: '6',
        name: 'Instagram',
      },
      {
        id: '7',
        name: 'Social Media',
      },
      {
        id: '8',
        name: 'Video Production',
      },
      {
        id: '9',
        name: 'Color Grading',
      },
      {
        id: '10',
        name: 'Music Video',
      },
      {
        id: '11',
        name: 'Adobe After Effect',
      },
      {
        id: '12',
        name: 'Podcast',
      },
      {
        id: '13',
        name: 'Short Form',
      },
      {
        id: '14',
        name: 'Long Form',
      },
      {
        id: '15',
        name: 'Subtitling/Captioning',
      },
      {
        id: '16',
        name: 'Audio Editing',
      },
      {
        id: '17',
        name: 'Motion Graphics',
      },
    ],
    placeholder: 'Others (each skill separated comma)',
  },
  {
    id: '4',
    key: INPUT_KEYS.PRICE,
    label: '',
    placeholder: 'e.g $500 - $800',
    keyboardType: 'decimal-pad',
    returnKeyType: 'next',
  },
  {
    id: '5',
    key: INPUT_KEYS.DEADLINE,
    label: 'Deadline *',
    placeholder: 'DD/MM/YYYY',
    keyboardType: 'number-pad',
    returnKeyType: 'done',
  },
];
