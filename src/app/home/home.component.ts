import { Component, OnInit } from '@angular/core';
import { BannerService } from '../service/banner.service';
import { Banner } from './banner/banner.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  offerDetails!: Banner;

  constructor(private bannerService: BannerService) {}
  ngOnInit(): void {
    this.offerDetails = this.bannerService.getOfferDetails();
  }

}
