const MockAccount = [
  {
    name: "IRA",
    id: 29,
    cash: (Math.random() * 10000).toFixed(2),
    change: (Math.random() * 0.5 - 0.2).toFixed(2),
  },

  {
    name: "IRA",
    id: 146,
    cash: (Math.random() * 100000).toFixed(2),
    change: (Math.random() * 0.5 - 0.2).toFixed(2),
  },

  {
    name: "AAA",
    id: 29,
    cash: (Math.random() * 1000000).toFixed(2),
    change: (Math.random() * 0.5 - 0.2).toFixed(2),
  },

  {
    name: "AAA",
    id: 1812,
    cash: (Math.random() * 1000000).toFixed(2),
    change: (Math.random() * 0.5 - 0.2).toFixed(2),
  },

  {
    name: "AAA",
    id: 3810,
    cash: (Math.random() * 1000000).toFixed(2),
    change: (Math.random() * 0.5 - 0.2).toFixed(2),
  },

  {
    name: "REG",
    id: 2019,
    cash: (Math.random() * 1000000).toFixed(2),
    change: (Math.random() * 0.5 - 0.2).toFixed(2),
  },
];

exports.MockAccount = MockAccount;
