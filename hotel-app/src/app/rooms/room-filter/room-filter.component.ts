
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomFilterDTO } from '../../db/filter-room.dto';
import * as moment from 'moment';


@Component({
  selector: 'app-room-filter',
  templateUrl: './room-filter.component.html',
  styleUrls: ['./room-filter.component.css']
})
export class RoomFilterComponent implements OnInit {

  public filterForm: FormGroup;
  public roomTypes: string[] = ['Single', 'Double', 'Studio'];
  public filter: RoomFilterDTO;


  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      startDate: [new Date()],
      endDate: [new Date()]
    });
  }

  public logFilter(data: RoomFilterDTO) {
    const formattedStartDate = moment(data.startDate, ['YYYY-MM-DD']).format(
      'MMMM D YYYY');
    const formattedEndDate = moment(data.endDate, ['YYYY-MM-DD']).format(
      'MMMM D YYYY'
    );

    this.filter = {
      ...data,
      startDate: formattedStartDate,
      endDate: formattedEndDate
    };
    console.log(this.filter);
  }


}
