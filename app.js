function Employee(employeeID,fullName,Department,Level,imageURL)

    
{

this.employeeID=employeeID,
this.fullName=fullName,
this.Department=Department,
this.Level=Level,
this.imageURL=imageURL
    

}

Employee.prototype.salry = function()
{

    let sumSalary = 0 ;

if(`${this.Level}` == "senior")
{
 
   max = 2000;
   min =1500;
  sumSalary = (Math.floor(Math.random() * (max - min + 1)) + min);
}
 else if (`${this.Level}` == "mid-senior")
{
      max = 1500;
      min= 1000;

    sumSalary =  (Math.floor(Math.random() * (max - min + 1)) + min);
}

 else  

{

    let min  = 500;
   let  max = 1000;   
    sumSalary =  (Math.floor(Math.random() * (max - min + 1)) + min);

}

return `   ${sumSalary - (sumSalary * ( 7.5 / 100 ))}` ;
}

Employee.prototype.render = function()
   {


     return ` <br> <br> <div> ${this.fullName} salary ${this.salry()}  </div> <br>`


    } 



let employee1 = new Employee ("1000" , "Ghazi Samer	" , "Administration" ,"senior" , "" )
let employee2 = new Employee ("1001" , "Lana Ali	" , "Finance" ,      "senior" , "" )
let employee3 = new Employee ("1002" , "Tamara Ayoub" , "Marketing" ,    "senior" , "" )
let employee4 = new Employee ("1003" , "Safi Walid	" , "Administration","mid-senior" , "" )
let employee5 = new Employee ("1004" , "Omar Zaid	" , "Development" ,  "senior" , "" )
let employee6 = new Employee ("1005" , "Rana Saleh	" , "Development" ,  "junior" , "" )
let employee7 = new Employee ("1006" , "Hadi Ahmad	" , "AFinance" ,     "mid-senior" , "" )


console.table(employee1);
document.write (employee1.render());
document.write (employee2.render());
document.write (employee3.render());
document.write (employee4.render());
document.write (employee5.render());
document.write (employee6.render());
document.write (employee7.render());
