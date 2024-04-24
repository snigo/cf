const randomArr = [
  'foo',
  1234,
  '45',
  'bar',
  '+3.14',
  'zulu',
  100453n,
  null,
  '0x101',
  false,
];

const marchDate = new Date('March 1, 2018');

const dates = [
  'May 10, 1981',
  'December 24, 1991',
  'The Big Bang',
  'November 21',
  null,
  '2024-04-24T23:05:50.043Z',
  marchDate,
];

export const testData = {
  alpha: [
    randomArr,
    ['+3.14', '0x101', 100453n, 1234, '45', 'bar', false, 'foo', null, 'zulu'],
  ],
  alphaDesc: [
    randomArr,
    ['zulu', null, 'foo', false, 'bar', '45', 1234, 100453n, '0x101', '+3.14'],
  ],
  alphaNullFirst: [
    randomArr,
    [null, '+3.14', '0x101', 100453n, 1234, '45', 'bar', false, 'foo', 'zulu'],
  ],
  alphaDescNullFirst: [
    randomArr,
    [null, 'zulu', 'foo', false, 'bar', '45', 1234, 100453n, '0x101', '+3.14'],
  ],
  alphaNullLast: [
    randomArr,
    ['+3.14', '0x101', 100453n, 1234, '45', 'bar', false, 'foo', 'zulu', null],
  ],
  alphaDescNullLast: [
    randomArr,
    ['zulu', 'foo', false, 'bar', '45', 1234, 100453n, '0x101', '+3.14', null],
  ],
  numeric: [
    randomArr,
    ['+3.14', '45', '0x101', 1234, 100453n, 'bar', false, 'foo', null, 'zulu'],
  ],
  numericDesc: [
    randomArr,
    ['zulu', null, 'foo', false, 'bar', 100453n, 1234, '0x101', '45', '+3.14'],
  ],
  numericNullFirst: [
    randomArr,
    [null, '+3.14', '45', '0x101', 1234, 100453n, 'bar', false, 'foo', 'zulu'],
  ],
  numericDescNullFirst: [
    randomArr,
    [null, 'zulu', 'foo', false, 'bar', 100453n, 1234, '0x101', '45', '+3.14'],
  ],
  numericNullLast: [
    randomArr,
    ['+3.14', '45', '0x101', 1234, 100453n, 'bar', false, 'foo', 'zulu', null],
  ],
  numericDescNullLast: [
    randomArr,
    ['zulu', 'foo', false, 'bar', 100453n, 1234, '0x101', '45', '+3.14', null],
  ],
  datetime: [
    dates,
    [
      'May 10, 1981',
      'December 24, 1991',
      'November 21',
      marchDate,
      '2024-04-24T23:05:50.043Z',
      null,
      'The Big Bang',
    ],
  ],
  datetimeDesc: [
    dates,
    [
      'The Big Bang',
      null,
      '2024-04-24T23:05:50.043Z',
      marchDate,
      'November 21',
      'December 24, 1991',
      'May 10, 1981',
    ],
  ],
  datetimeNullFirst: [
    dates,
    [
      null,
      'May 10, 1981',
      'December 24, 1991',
      'November 21',
      marchDate,
      '2024-04-24T23:05:50.043Z',
      'The Big Bang',
    ],
  ],
  datetimeDescNullFirst: [
    dates,
    [
      null,
      'The Big Bang',
      '2024-04-24T23:05:50.043Z',
      marchDate,
      'November 21',
      'December 24, 1991',
      'May 10, 1981',
    ],
  ],
  datetimeNullLast: [
    dates,
    [
      'May 10, 1981',
      'December 24, 1991',
      'November 21',
      marchDate,
      '2024-04-24T23:05:50.043Z',
      'The Big Bang',
      null,
    ],
  ],
  datetimeDescNullLast: [
    dates,
    [
      'The Big Bang',
      '2024-04-24T23:05:50.043Z',
      marchDate,
      'November 21',
      'December 24, 1991',
      'May 10, 1981',
      null,
    ],
  ],
} as const;
