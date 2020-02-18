import { Component, OnInit } from '@angular/core';
import { RoomDTO } from '../../db/room.dto';
import { rooms } from '../../db/rooms';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  public bookedRooms: RoomDTO[] = rooms.slice().filter(room => room.isBooked === true);


  constructor() { }

  ngOnInit(): void {
  }

}
