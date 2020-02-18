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

  @Input() public set room(value: RoomDTO) {
    const formattedStartDate = moment(value.startDate, ['YYYY-MM-DD']).format(
      'MMMM Do YYYY'
    );
    const formattedEndDate = moment(value.endDate, ['YYYY-MM-DD']).format(
      'MMMM Do YYYY'
    );

    this.roomToShow = {
      ...value,
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

  public calculatePrice(): number {
    if (!this.roomToShow.bnB) {
      return this.roomToShow.price * this.roomToShow.nights;
    } else {
      return (this.roomToShow.price + 10) * this.roomToShow.nights;
    }
  }

}
