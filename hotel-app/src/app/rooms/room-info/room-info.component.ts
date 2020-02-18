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

  @Input() public set room(value: RoomDTO) {
    const formattedStartDate = moment(value.startDate, ['YYYY-MM-DD']).format(
      'MMMM Do YYYY'
    );

    this.roomToShow = { ...value, startDate: formattedStartDate };
  }

  @Output() public bookRoom: EventEmitter<RoomDTO> = new EventEmitter();


  public onBookButtonClick(): void {
    this.bookRoom.emit(this.roomToShow);
  }

  public onBreakfastClick(): void {
    this.roomToShow.bnB = !this.roomToShow.bnB;
  }

}
