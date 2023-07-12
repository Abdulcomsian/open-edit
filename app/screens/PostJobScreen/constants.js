import { SKILLS } from "../../constants/constraints";

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
    skills: SKILLS,
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
    editable: false,
    pointerEvents: 'none',
  },
];
