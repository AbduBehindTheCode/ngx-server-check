import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiStatus } from './ngx-server-check.type';

@Component({
  selector: 'lib-ngx-server-check',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: 'ngx-server-check.component.html',
  styleUrl: 'ngx-server-check.component.scss'
})
export class NgxServerCheckComponent implements OnInit{
  apiStatus: apiStatus[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.apiStatus = data.response; 
    });
  }
}
