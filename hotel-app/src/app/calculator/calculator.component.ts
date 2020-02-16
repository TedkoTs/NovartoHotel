import { Component, OnInit } from '@angular/core';
import { RoomDTO } from '../db/room.dto';
import { rooms } from '../db/rooms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public rooms: RoomDTO[] = rooms.slice();

  constructor() { }

  ngOnInit(): void {
    console.log(this.rooms);

  }

}
