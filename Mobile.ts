export class Mobile{   
    public name:string;
    public model:string;
    public tradeMark:string;
    public sdSize:string;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;
    
    constructor(name:string, model:string, tradeMark:string, sdSize:string, color:string, is5G:boolean, cameraNumber:number, price:number){
        this.name = name;
        this.model = model;
        this.tradeMark = tradeMark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber
        this.price = price;
    };
    public atributos():string
    {
        let allAtributos: string = (" Name: " + this.name + "\n" + 
                                               " Model: " + this.model  +"\n" + 
                                               " Trademark: " + this.tradeMark + "\n" + 
                                               " SD size: " + this.sdSize +"\n" + 
                                               " Color: " + this.color + "\n" + 
                                               " Is 5G?: " + this.is5G  + "\n" + 
                                               " Number of Cameras: " + this.cameraNumber + "\n" + 
                                               " Price: " + this.price  + "\n")
        return allAtributos;
    };
}