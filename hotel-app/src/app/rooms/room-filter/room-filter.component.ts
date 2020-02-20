import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomFilterDTO } from '../../db/filter-room.dto';
import * as moment from 'moment';


@Component({
  selector: 'app-room-filter',
  templateUrl: './room-filter.component.html',
  styleUrls: ['./room-filter.component.css']
})
export class RoomFilterComponent implements OnInit {

  @Output() applyFilter: EventEmitter<RoomFilterDTO> = new EventEmitter();
  @Output() resetList: EventEmitter<any> = new EventEmitter();

  public filterForm: FormGroup;
  public roomTypes: string[] = ['Single Room', 'Double Room', 'Studio'];
  public filter: RoomFilterDTO;
  public unavailableDate: Date = new Date();


  constructor(private readonly formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      startDate: [new Date(), [Validators.required]],
      endDate: [new Date(), [Validators.required]]
    });
  }

  public logFilter(data: RoomFilterDTO) {
    const formattedStartDate = moment(data.startDate, ['YYYY-MM-DD']);
    const formattedEndDate = moment(data.endDate, ['YYYY-MM-DD']);

    const dur = formattedEndDate.diff(formattedStartDate, 'days') + 1;

    this.filter = {
      ...data,
      nights: dur,
      bnB: false
    };

    this.applyFilter.emit(this.filter);
    this.filterForm.reset();
  }

  public filterReset() {
    this.filterForm.reset();
    this.resetList.emit();
  }
}
