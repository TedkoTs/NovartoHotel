import { Component, OnInit } from '@angular/core';
import { RoomDTO } from '../../db/room.dto';
import { rooms } from '../../db/rooms';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  public bookedRooms: RoomDTO[] = rooms.slice().filter(room => room.isBooked);
  public freeRooms: RoomDTO[] = rooms.slice().filter(room => !room.isBooked);
  public income: number;


  constructor() { }

  ngOnInit(): void { }

  onClickCalc() {
    const fullPrice: number[] = [];
    this.bookedRooms.forEach(el => {
      fullPrice.push(el.price * el.nights);
    });

    return this.income = fullPrice.reduce((a, b) => a + b, 0);
  }

}
// .reduce((a, b) => a + b.price, 0);
