import { Component, Input, OnInit } from '@angular/core';
import { Banner } from '../../model/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() offer!: Banner;
  constructor() { }
  ngOnInit(): void {
    console.log(this.offer);
  }

}
