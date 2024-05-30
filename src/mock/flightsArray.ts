const flights = [
  {
    id: 1,
    price: 15000,
    there: {
      value: "LHR - DXB",
      time: 13500000,
    },
    back: {
      value: "DXB - LHR",
      time: 13200000,
    },
    transplants: ["HKG"],
  },
  {
    id: 2,
    price: 16000,
    there: {
      value: "JFK - LHR",
      time: 14500000,
    },
    back: {
      value: "LHR - JFK",
      time: 14200000,
    },
    transplants: [],
  },
  {
    id: 3,
    price: 14000,
    there: {
      value: "SFO - NRT",
      time: 12500000,
    },
    back: {
      value: "NRT - SFO",
      time: 12200000,
    },
    transplants: ["ICN", "PEK"],
  },
  {
    id: 4,
    price: 15500,
    there: {
      value: "ORD - PEK",
      time: 13500000,
    },
    back: {
      value: "PEK - ORD",
      time: 13200000,
    },
    transplants: ["HND", "PVG", "ICN"],
  },
  {
    id: 5,
    price: 17000,
    there: {
      value: "LAX - SYD",
      time: 15500000,
    },
    back: {
      value: "SYD - LAX",
      time: 15200000,
    },
    transplants: ["AKL"],
  },
  {
    id: 6,
    price: 16500,
    there: {
      value: "BOS - FRA",
      time: 14500000,
    },
    back: {
      value: "FRA - BOS",
      time: 14200000,
    },
    transplants: [],
  },
  {
    id: 7,
    price: 15000,
    there: {
      value: "MIA - MAD",
      time: 13500000,
    },
    back: {
      value: "MAD - MIA",
      time: 13200000,
    },
    transplants: ["LIS", "BCN"],
  },
  {
    id: 8,
    price: 16000,
    there: {
      value: "SEA - ICN",
      time: 15500000,
    },
    back: {
      value: "ICN - SEA",
      time: 15200000,
    },
    transplants: ["HND"],
  },
  {
    id: 9,
    price: 17000,
    there: {
      value: "DFW - GRU",
      time: 14500000,
    },
    back: {
      value: "GRU - DFW",
      time: 14200000,
    },
    transplants: ["EZE"],
  },
  {
    id: 10,
    price: 15500,
    there: {
      value: "EWR - CDG",
      time: 13500000,
    },
    back: {
      value: "CDG - EWR",
      time: 13200000,
    },
    transplants: ["AMS"],
  },
  {
    id: 11,
    price: 16000,
    there: {
      value: "ATL - JNB",
      time: 15500000,
    },
    back: {
      value: "JNB - ATL",
      time: 15200000,
    },
    transplants: ["DOH"],
  },
  {
    id: 12,
    price: 16500,
    there: {
      value: "SFO - SYD",
      time: 16500000,
    },
    back: {
      value: "SYD - SFO",
      time: 16200000,
    },
    transplants: ["AKL", "HNL"],
  },
  {
    id: 13,
    price: 17000,
    there: {
      value: "IAD - DXB",
      time: 17500000,
    },
    back: {
      value: "DXB - IAD",
      time: 17200000,
    },
    transplants: ["IST", "FRA"],
  },
  {
    id: 14,
    price: 15000,
    there: {
      value: "ORD - PVG",
      time: 16500000,
    },
    back: {
      value: "PVG - ORD",
      time: 16200000,
    },
    transplants: [],
  },
  {
    id: 15,
    price: 16000,
    there: {
      value: "JFK - HKG",
      time: 18500000,
    },
    back: {
      value: "HKG - JFK",
      time: 18200000,
    },
    transplants: ["ICN"],
  },
  {
    id: 16,
    price: 17000,
    there: {
      value: "LAX - MEL",
      time: 19500000,
    },
    back: {
      value: "MEL - LAX",
      time: 19200000,
    },
    transplants: ["AKL", "SYD", "SIN"],
  },
];

export default flights;
