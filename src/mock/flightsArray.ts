const flights = [
  {
    id: 1,
    price: 15000,
    there: {
      value: "LHR - DXB",
      start: "10:45",
      finish: "08:00",
      time: "20г 45хв",
    },
    back: {
      value: "DXB - LHR",
      start: "11:20",
      finish: "00:50",
      time: "13г 10хв",
    },
    transplants: ["HKG"],
  },
  {
    id: 2,
    price: 16000,
    there: {
      value: "JFK - LHR",
      start: "08:00",
      finish: "12:00",
      time: "33г 10хв",
    },
    back: {
      value: "LHR - JFK",
      start: "14:00",
      finish: "18:00",
      time: "13г 10хв",
    },
    transplants: [],
  },
  {
    id: 3,
    price: 14000,
    there: {
      value: "SFO - NRT",
      start: "09:00",
      finish: "11:00",
      time: "23г 10хв",
    },
    back: {
      value: "NRT - SFO",
      start: "13:00",
      finish: "15:00",
      time: "3г 10хв",
    },
    transplants: ["ICN", "PEK"],
  },
  {
    id: 4,
    price: 15500,
    there: {
      value: "ORD - PEK",
      start: "10:00",
      finish: "12:00",
      time: "13г 10хв",
    },
    back: {
      value: "PEK - ORD",
      start: "14:00",
      finish: "16:00",
      time: "13г 10хв",
    },
    transplants: ["HND", "PVG", "ICN"],
  },
  {
    id: 5,
    price: 17000,
    there: {
      value: "LAX - SYD",
      start: "11:00",
      finish: "13:00",
      time: "43г 10хв",
    },
    back: {
      value: "SYD - LAX",
      start: "15:00",
      finish: "17:00",
      time: "13г 10хв",
    },
    transplants: ["AKL"],
  },
  {
    id: 6,
    price: 16500,
    there: {
      value: "BOS - FRA",
      start: "12:00",
      finish: "14:00",
      time: "13г 15хв",
    },
    back: {
      value: "FRA - BOS",
      start: "16:00",
      finish: "18:00",
      time: "15г 20хв",
    },
    transplants: [],
  },
  {
    id: 7,
    price: 15000,
    there: {
      value: "MIA - MAD",
      start: "13:00",
      finish: "15:00",
      time: "14г 10хв",
    },
    back: {
      value: "MAD - MIA",
      start: "17:00",
      finish: "19:00",
      time: "11г 10хв",
    },
    transplants: ["LIS", "BCN"],
  },
  {
    id: 8,
    price: 16000,
    there: {
      value: "SEA - ICN",
      start: "14:00",
      finish: "16:00",
      time: "16г 10хв",
    },
    back: {
      value: "ICN - SEA",
      start: "18:00",
      finish: "20:00",
      time: "2г 10хв",
    },
    transplants: ["HND"],
  },
  {
    id: 9,
    price: 17000,
    there: {
      value: "DFW - GRU",
      start: "15:00",
      finish: "17:00",
      time: "2г 10хв",
    },
    back: {
      value: "GRU - DFW",
      start: "19:00",
      finish: "21:00",
      time: "3г 10хв",
    },
    transplants: ["EZE"],
  },
  {
    id: 10,
    price: 15500,
    there: {
      value: "EWR - CDG",
      start: "16:00",
      finish: "18:00",
      time: "2г 10хв",
    },
    back: {
      value: "CDG - EWR",
      start: "20:00",
      finish: "22:00",
      time: "13г 10хв",
    },
    transplants: ["AMS"],
  },
  {
    id: 11,
    price: 16000,
    there: {
      value: "ATL - JNB",
      start: "17:00",
      finish: "19:00",
      time: "13г 10хв",
    },
    back: {
      value: "JNB - ATL",
      start: "21:00",
      finish: "23:00",
      time: "13г 10хв",
    },
    transplants: ["DOH"],
  },
  {
    id: 12,
    price: 16500,
    there: {
      value: "SFO - SYD",
      start: "18:00",
      finish: "20:00",
      time: "13г 10хв",
    },
    back: {
      value: "SYD - SFO",
      start: "22:00",
      finish: "00:00",
      time: "13г 10хв",
    },
    transplants: ["AKL", "HNL"],
  },
  {
    id: 13,
    price: 17000,
    there: {
      value: "IAD - DXB",
      start: "19:00",
      finish: "21:00",
      time: "13г 10хв",
    },
    back: {
      value: "DXB - IAD",
      start: "23:00",
      finish: "01:00",
      time: "13г 10хв",
    },
    transplants: ["IST", "FRA"],
  },
  {
    id: 14,
    price: 4000,
    there: {
      value: "ORD - PVG",
      start: "20:00",
      finish: "22:00",
      time: "13г 10хв",
    },
    back: {
      value: "PVG - ORD",
      start: "00:00",
      finish: "02:00",
      time: "13г 10хв",
    },
    transplants: [],
  },
  {
    id: 15,
    price: 16000,
    there: {
      value: "JFK - HKG",
      start: "21:00",
      finish: "23:00",
      time: "13г 10хв",
    },
    back: {
      value: "HKG - JFK",
      start: "01:00",
      finish: "03:00",
      time: "13г 10хв",
    },
    transplants: ["ICN"],
  },
  {
    id: 16,
    price: 13000,
    there: {
      value: "LAX - MEL",
      start: "22:00",
      finish: "00:00",
      time: "13г 10хв",
    },
    back: {
      value: "MEL - LAX",
      start: "02:00",
      finish: "04:00",
      time: "13г 10хв",
    },
    transplants: ["AKL", "SYD", "SIN"],
  },
];

export default flights;
