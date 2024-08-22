import { Injectable } from '@angular/core';
import { Banner } from '../model/banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  getOfferDetails(): Banner {
    return {
      imageSource: 'https://media.istockphoto.com/id/1045254326/photo/various-spicy-herbs-in-pots-for-sale-in-the-city-market.jpg?s=1024x1024&w=is&k=20&c=JqExHnKmC5eZqbZkYIn94Qyo1AWZBGqP00bK1PUmf6g=',
      offerTitle: 'Exciting Summer Sale is live now!!',
      offerDetails: 'Shop now',
      offerDiscount: 50
    }
  }
   
  constructor() { }
  }
