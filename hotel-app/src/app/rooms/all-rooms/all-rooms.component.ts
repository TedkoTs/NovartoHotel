import { RoomFilterDTO } from './../../db/filter-room.dto';
import { Component, OnInit } from '@angular/core';
import { RoomDTO } from '../../db/room.dto';
import { rooms } from '../../db/rooms';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {

  public rooms: RoomDTO[];

  constructor() { }

  ngOnInit(): void { }

  public bookRoom(room: RoomDTO): void {
    const index: number = this.rooms.findIndex(x => x.id === room.id);
    this.rooms[index].isBooked = true;
    this.rooms.splice(index, 1);
  }

  public addBreakfast(room: RoomDTO): void {
    const index: number = this.rooms.findIndex(x => x.id === room.id);
    this.rooms[index].bnB = !this.rooms[index].bnB;
    if (this.rooms[index].bnB) {
      this.rooms[index].price = (this.rooms[index].price * this.rooms[index].nights) + (10 * this.rooms[index].nights);
    } else {
      this.rooms[index].price = (this.rooms[index].price * this.rooms[index].nights);
    }
  }

  public applyFilter(filterParams: RoomFilterDTO): void {
    this.rooms = rooms.slice()
      .filter(room => !room.isBooked)
      .filter(room => room.type === filterParams.type);
    this.rooms.forEach(room => room.nights = filterParams.nights);
  }

  public resetList() {
    this.rooms = [];
  }

}
