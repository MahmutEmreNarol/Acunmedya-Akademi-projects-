class Person{
    name:string;
    age:number;
    email:string;
    constructor(name: string,age : number ,email:string){
        this.name=name;
        this.age=age;
        this.email=email;

    }
    introduce(){
        console.log("Merhaba ben "+this.name+" "+this.age+" Yaşındayım ")
    }
}
class Employee extends Person{
    department :string;
    salary:number;
    constructor(name:string,age:number,email:string,department :string,salary:number){
        super(name,age,email);
        this.department=department;
        this.salary=salary

    }
    showsalary(){
        console.log(this.name+" isimli çalışanın maaşı  = "+this.salary)
    }
}

interface IProduct {
    id :string;
    name:string;
    price :number;
    category:string;
    discountedPrice(discountRate: number):number 

    }

class Product implements IProduct{
    id :string;
    name:string;
    price :number;
    category:string;
    constructor(id :string,name:string,price :number,category:string,){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;

    }
   discountedPrice(discountRate: number): number {
       const discount =(this.price*discountRate)/100;
       return this.price-discount ;
   }
        
    }
    function findmostexpproduct(products: Product[]): Product {
        return products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    }
    
    
    function sortemployeesbydpepartment(employees: Employee[]): { [key: string]: Employee[] } {
        return employees.reduce((acc, employee) => {
            if (!acc[employee.department]) {
                acc[employee.department] = [];
            }
            acc[employee.department].push(employee);
            return acc;
        }, {} as { [key: string]: Employee[] });
    }
    
    const products: Product[] = [
        new Product("1", "Laptop", 1000, "Elektronik"),
        new Product("2", "Telefon", 700, "Elektronik"),
        new Product("3", "Kitap", 20, "Kitaplar")
    ];
    
    
    const mostExpensiveProduct = findmostexpproduct(products);
    console.log(mostExpensiveProduct);
    
    const employees: Employee[] = [
        new Employee("Ahmet", 25, "ahmet@gmail.com", "Computer Engineer", 48500),
        new Employee("Ayşe", 30, "ayse@gmail.com", "İndustrial Engineer", 36000)
    ];
    
    
    const groupedEmployees = sortemployeesbydpepartment(employees);
    console.log(groupedEmployees);