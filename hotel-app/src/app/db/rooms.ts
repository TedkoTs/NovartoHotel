import { RoomDTO } from './room.dto';
import { RoomType } from './room-type.enum';

export const rooms: RoomDTO[] = [
  {
    id: 1,
    type: RoomType.Single,
    isBooked: false,
    price: 50,
    bnB: false,
    daysBooked: 0,
    startDate: ''
  },
  {
    id: 2,
    type: RoomType.Single,
    isBooked: false,
    price: 50,
    bnB: true,
    daysBooked: 0,
    startDate: ''
  },
  {
    id: 3,
    type: RoomType.Single,
    isBooked: true,
    price: 50,
    bnB: false,
    daysBooked: 3,
    startDate: '2020-04-01'
  },
  {
    id: 4,
    type: RoomType.Single,
    isBooked: true,
    price: 50,
    bnB: true,
    daysBooked: 5,
    startDate: '2020-04-10'
  },
  {
    id: 5,
    type: RoomType.Double,
    isBooked: true,
    price: 100,
    bnB: true,
    daysBooked: 2,
    startDate: '2020-04-03'
  },
  {
    id: 6,
    type: RoomType.Double,
    isBooked: true,
    price: 100,
    bnB: false,
    daysBooked: 3,
    startDate: '2020-04-02'
  },
  {
    id: 7,
    type: RoomType.Double,
    isBooked: false,
    price: 100,
    bnB: true,
    daysBooked: 0,
    startDate: ''
  },
  {
    id: 8,
    type: RoomType.Double,
    isBooked: false,
    price: 100,
    bnB: false,
    daysBooked: 0,
    startDate: ''
  },
  {
    id: 9,
    type: RoomType.Studio,
    isBooked: true,
    price: 150,
    bnB: true,
    daysBooked: 7,
    startDate: '2020-05-07'
  },
  {
    id: 10,
    type: RoomType.Studio,
    isBooked: true,
    price: 150,
    bnB: false,
    daysBooked: 10,
    startDate: '2020-04-21'
  },
  {
    id: 11,
    type: RoomType.Studio,
    isBooked: false,
    price: 150,
    bnB: true,
    daysBooked: 0,
    startDate: ''
  },
  {
    id: 12,
    type: RoomType.Studio,
    isBooked: false,
    price: 150,
    bnB: false,
    daysBooked: 0,
    startDate: ''
  }
];
