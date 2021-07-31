import { Mobile } from './mobile';
import { MobileLibrary } from './mobileLibrary';

let Xiaomi: Mobile = new Mobile("Xiaomi", "plusA","Xiaomi","164GB", "Amarillo", true, 4, 200);
let LG: Mobile = new Mobile("LG","Wind", "LG", "128GB","Azul", true, 4, 600);
let Sony: Mobile = new Mobile ("Sony", "Xperia 25", "Sony", "160GB", "rojo", true, 3, 150);
let Iphone: Mobile = new Mobile("Iphone", "12", "Apple", "125GB", "negro", true, 8, 900);

let allMobiles = [Xiaomi,LG,Sony,Iphone];
 
let objetcLibraryNew = new MobileLibrary("Blackberry","USA",allMobiles);

console.log("totalPriceCalculation");
console.log(objetcLibraryNew.totalPriceCalculation());
///
console.log("getName");
console.log(objetcLibraryNew.getName());
////
console.log("setName");
console.log(objetcLibraryNew.setName("Aaa"));
////
console.log("getLocation");
console.log(objetcLibraryNew.getLocation());
///
console.log("setLocation");
console.log(objetcLibraryNew.setLocation("Abcs"));
////
console.log("getMobiles");
console.log(objetcLibraryNew.getMobiles());
////
console.log("setMobiles");
console.log(objetcLibraryNew.setMobiles([]));
////
console.log("getTotalPrice");
console.log(objetcLibraryNew.getTotalprice());
/////
console.log("setTotalPrice");
console.log(objetcLibraryNew.setTotalprice(500));