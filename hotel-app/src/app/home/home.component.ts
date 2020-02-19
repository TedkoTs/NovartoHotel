import { rooms } from "./../db/rooms";
import { Component, OnInit } from '@angular/core';
import { RoomDTO } from '../db/room.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rooms: RoomDTO[] = rooms;

  constructor() { }

  ngOnInit() { }
}
