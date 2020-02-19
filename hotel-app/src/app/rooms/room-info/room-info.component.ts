import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoomDTO } from '../../db/room.dto';
import * as moment from 'moment';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent {
  public roomToShow: RoomDTO;
  public totalPrice: number;

  @Input() public set room(data: RoomDTO) {
    const formattedStartDate = moment(data.startDate, ['YYYY-MM-DD']).format(
      'MMMM Do YYYY'
    );
    const formattedEndDate = moment(data.endDate, ['YYYY-MM-DD']).format(
      'MMMM Do YYYY'
    );

    this.roomToShow = {
      ...data,
    };
  }

  @Output() public bookRoom: EventEmitter<RoomDTO> = new EventEmitter();
  @Output() public addBreakfast: EventEmitter<RoomDTO> = new EventEmitter();


  public onBookButtonClick(): void {
    this.bookRoom.emit(this.roomToShow);
  }

  public onBreakfastClick(): void {
    this.addBreakfast.emit(this.roomToShow);
  }
}
