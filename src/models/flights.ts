export type FlightsType = {
  id: number;
  price: number;
  there: {
    value: string;
    time: number;
  };
  back: {
    value: string;
    time: number;
  };
  transplants: string[];
};
