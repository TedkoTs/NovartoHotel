
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-room-filter',
  templateUrl: './room-filter.component.html',
  styleUrls: ['./room-filter.component.css']
})
export class RoomFilterComponent implements OnInit {

  public filterForm: FormGroup;
  public roomTypes: string[] = ['Single', 'Double', 'Studio'];


  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      startDate: [new Date()],
      endDate: [new Date()]
    });
  }

  public logFilter(data) {
    console.log(data);

  }


}
