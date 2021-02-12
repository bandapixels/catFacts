import { CatFactStatus } from './catFactStatus'

export interface CatFact {
  createdAt: string;
  deleted: boolean;
  status: CatFactStatus;
  text: string;
  type: string;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
}
