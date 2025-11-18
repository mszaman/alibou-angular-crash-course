import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  param: any;

  queryParamFirstName: any;

  queryParamLastName: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParamFirstName =
      this.activatedRoute.snapshot.queryParams['firstName'];
    this.queryParamLastName =
      this.activatedRoute.snapshot.queryParams['lastName'];
  }
}
