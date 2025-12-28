export interface IReason {
  id: string;
  title: string;
  testType: string;
  level: string;
  value: number;
  valueUnit: string;
  status: string;
  norma: {
    min: number;
    max: number;
  };
}
