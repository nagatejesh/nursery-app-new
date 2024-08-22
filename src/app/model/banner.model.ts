export class Banner{
    imageSource: string;
    offerTitle: string;
    offerDetails: string;
    offerDiscount: number;

    constructor(imageSource: string, offerTitle: string, offerDetails: string, offerDiscount: number){
        this.imageSource = imageSource;
        this.offerTitle = offerTitle;
        this.offerDetails = offerDetails;
        this.offerDiscount = offerDiscount;
    }
}