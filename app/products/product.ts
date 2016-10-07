export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string; //Had to set as string for my data. Should be Date.
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

//Product class is for demonstration only. Not used.
export class Product implements IProduct {
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public price: number,
        public description: string,
        public starRating: number,
        public imageUrl: string) {
    }

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}