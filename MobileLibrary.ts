import { Mobile } from './mobile';
export class MobileLibrary{
    private name:string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(name: string, location: string, mobiles: Mobile[]){
        this.name= name;
        this.location=location;
        this.mobiles=mobiles;
        this.totalPrice=this.totalPriceCalculation();
    };
    public getName(): string{
        return this.name;
    };
    public setName(newName: string){
       return this.name = newName;
    };
    public getLocation(): string{
        return this.location;
    };
    public setLocation(newLocation: string){
        return this.location = newLocation;
    };
    public getMobiles(){
        return this.mobiles;
    };
    public setMobiles(newMobiles:[]){
        return this.mobiles = newMobiles;
    };
    public getTotalprice(): number{
        return this.totalPrice;
    };
    public setTotalprice(newTotalPrice: number){
       return this.totalPrice = newTotalPrice;
    };
    public totalPriceCalculation(){
       let sumAllPrices: number=0;
       for (let key in this.mobiles){
            sumAllPrices += this.mobiles[key].getPrice();
        };
        return sumAllPrices;
    };   
}