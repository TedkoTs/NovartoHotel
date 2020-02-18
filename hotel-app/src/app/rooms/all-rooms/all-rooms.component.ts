import { Component, OnInit } from '@angular/core';
import { RoomDTO } from '../../db/room.dto';
import { rooms } from '../../db/rooms';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {

  public rooms: RoomDTO[] = rooms.slice().filter(room => room.isBooked === false);

  constructor() { }

  ngOnInit(): void { }

  public bookRoom(room: RoomDTO): void {
    const index: number = this.rooms.findIndex(x => x.id === room.id);
    this.rooms[index].isBooked = true;
    this.rooms.splice(index, 1);
  }

}
