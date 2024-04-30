import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const CARDS = [
  {
    title: 'Дизайн',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias placeat temporibus mollitia doloribus. Consequatur aperiam facilis culpa fuga quia! Labore, sequi! Optio officiis obcaecati tempora voluptates consequuntur, placeat ad.',
    services: [
      ['Веб страницы', 'Мобильные'],
      ['Мобильные приложения', 'Брендинг'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Веб разработка',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias placeat temporibus mollitia doloribus. Consequatur aperiam facilis culpa fuga quia! Labore, sequi! Optio officiis obcaecati tempora voluptates consequuntur, placeat ad.',
    services: [
      ['Веб страницы', 'FullМобильные'],
      ['Веб приложений', 'Разработка API'],
    ],
    number: '02.',
    classes: ' border-t border-gray-1/50',
  },
  {
    title: 'Мобильная разработка',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias placeat temporibus mollitia doloribus. Consequatur aperiam facilis culpa fuga quia! Labore, sequi! Optio officiis obcaecati tempora voluptates consequuntur, placeat ad.',
    services: [
      ['Мобильные приложения', '12312'],
      ['Веб приложен2ия', 'Бре2ндинг'],
    ],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Консультация',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: '',
  },
  {
    icon: Second,
    title: 'Совместный обзор',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: '',
  },
  {
    icon: Third,
    title: 'Разработка',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: '',
  },
  {
    icon: Fourth,
    title: 'Тестирование',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: '',
  },
  {
    icon: Fifth,
    title: 'Готовая работа (?)',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: 'col-span-2 bg-[#fff]/5 hover:bg-[#fff]/5',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'What service do you need?',
    classes: 'mr-8',
    type: 'service',
    radioArray: [
      { name: 'Design / branding', value: '1' },
      { name: 'Web development', value: '2' },
      { name: 'Mobile Development', value: '3' },
      { name: 'All of the above', value: '4' },
      { name: 'Other', value: '44' },
    ],
  },
  {
    title: 'What is your project budget?',
    classes: '',
    type: 'budget',
    radioArray: [
      { name: '10000TMT - 20000TMT', value: '5' },
      { name: '20000TMT - 30000TMT', value: '6' },
      { name: '30000TMT - 50000TMT', value: '7' },
      { name: '50000+', value: '8' },
    ],
  },
  {
    title: 'Примерно, сколько страниц будет иметь ваш проект?',
    classes: 'mr-8',
    type: 'pages',
    radioArray: [
      { name: 'Меньше 5-ти', value: '9' },
      { name: '6-10', value: '10' },
      { name: '11-20', value: '11' },
      { name: '20+', value: '12' },
    ],
  },
  {
    title: 'Насколько быстро вам нужен проект?',
    classes: '',
    type: 'quickness',
    radioArray: [
      { name: 'Максимально быстро', value: '13' },
      { name: 'High prio (меньше 3х недель)', value: '14' },
      { name: 'Regular', value: '15' },
      { name: 'Take your time', value: '16' },
    ],
  },
];

export const INPUT_FIELDS = [
  { label: 'first name', name: 'firstname', classes: 'inline-block !w-[calc(50%-16px)] mr-8' },
  { label: 'last name', name: 'lastname', classes: 'inline-block !w-[calc(50%-16px)]' },
  { label: 'email name', name: 'email', classes: '' },
  { label: 'company name', name: 'companyname', classes: '' },
  { label: 'website url', name: 'website', classes: '' },
];