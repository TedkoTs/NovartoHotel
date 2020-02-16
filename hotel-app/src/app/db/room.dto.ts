import { RoomType } from './room-type.enum';
export class RoomDTO {
  id: number;
  type: RoomType;
  isBooked: boolean;
  price: number;
  bnB: boolean;
  daysBooked: number;
  startDate: string;
}
