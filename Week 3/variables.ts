//let, const, var arasındaki farkları araştır ve her biriyle birer örnek yaz.
//Şu veri türlerinde değişkenler oluştur ve her birini typeof ile ekrana yazdır:

let isim:string="Ahmet";
let yas:number=19;
let student:boolean=true 
let tasks:undefined;
let unkown :null=null;
let family:string[]=["Father :Hüseyin","Mother Hatice","Sister :Büşra"]
class person{
    isim:string;
    yas:number;

    constructor(isim:string,yas:number){
        this.isim=isim;
        this.yas=yas;
    
    }
}
function birthdatecalculator(yas:number){
    let birthdate:number=2025-yas;

    console.log(birthdate)
}
let a :number=15
const keyword:string="boğa"
var temppassword:number=1907;



console.log(
    typeof isim,           
    typeof student,        
    typeof tasks,          
    typeof unkown,         
    typeof family,         
    typeof person,         
    typeof birthdatecalculator 
)