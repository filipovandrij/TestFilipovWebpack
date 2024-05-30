export type FlightsType = {
  id: number;
  price: number;
  there: {
    value: string;
    start: string;
    finish: string;
    time: number;
  };
  back: {
    value: string;
    start: string;
    finish: string;
    time: number;
  };
  transplants: string[];
};
