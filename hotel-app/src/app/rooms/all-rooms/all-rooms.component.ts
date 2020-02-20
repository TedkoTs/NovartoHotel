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

  public roomsToShow: RoomDTO[];

  constructor() { }

  ngOnInit(): void { }

  public bookRoom(room: RoomDTO): void {
    const index: number = this.roomsToShow.findIndex(x => x.id === room.id);
    this.roomsToShow[index].isBooked = true;
    this.roomsToShow.splice(index, 1);
  }

  public addBreakfast(room: RoomDTO): void {
    const index: number = this.roomsToShow.findIndex(x => x.id === room.id);
    this.roomsToShow[index].bnB = !this.roomsToShow[index].bnB;
  }

  public applyFilter(filterParams: RoomFilterDTO): void {
    this.roomsToShow = rooms
      .filter(room => !room.isBooked)
      .filter(room => room.type === filterParams.type);
    this.roomsToShow.forEach(room => {
      room.nights = filterParams.nights,
        room.bnB = false;
      room.startDate = filterParams.startDate;
      room.endDate = filterParams.endDate;
    });
  }

  public resetList() {
    this.roomsToShow = [];
  }

}
