

let section = document.getElementById("container");

let allEmployee = [];
function Employee(employeeID,fullName,Department,Level,imageURL,salary)
    
{

this.employeeID=employeeID,
this.fullName=fullName,
this.Department=Department,
this.Level=Level,
this.imageURL=imageURL,

allEmployee.push(this);

}



Employee.prototype.salary = function()
 {
    let sumSalary = 0 ;

   if(`${this.Level}` == 'senior')
   {
 
   max = 2000;
   min =1500;
  sumSalary = (Math.floor(Math.random() * (max - min + 1)) + min);
  }
    else if (`${this.Level}` == 'mid-senior')
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

return ` ${sumSalary - (sumSalary * ( 7.5 / 100 ))}` ;
}


Employee.prototype.render = function () {
 

  let divcard = document.createElement("div");


    section.appendChild(divcard);

   let image = document.createElement("img");
   image.src = this.imageURL;
   image.className = "image1";
   image.style.width="50px";
   image.style.height="50px";
   divcard.appendChild(image);



    let name = document.createElement("h3");
    name.textContent = `${this.fullName}`;
    divcard.appendChild(name);

   
    let Department = document.createElement("h3");
    Department.textContent = this.Department;
    divcard.appendChild(Department);

    let level = document.createElement("h3");
    level.textContent = this.Level;
    divcard.appendChild(level);

  
   let number1 = document.createElement("h3");
   number1.textContent = ` ${sum()}`;
   divcard.appendChild(number1);

   let salary = document.createElement("h2");
   salary.textContent =  `${this.salary()}`;
   divcard.appendChild(salary);

};
   function sum () 
{
   
  return  Math.floor(1000 + Math.random() * 9000)
  
}
let employee2 = new Employee ("1001" , "Lana Ali	" , "Finance" ,      "senior"  , "img/Ghazi.jpg" );
let employee3 = new Employee ("1002" , "Tamara Ayoub" , "Marketing" ,    "senior"  , "img/Hadi.jpg" );
let employee4 = new Employee ("1003" , "Safi Walid	" , "Administration","mid-senior"  ,"img/Lana.jpg");
let employee5 = new Employee ("1004" , "Omar Zaid	" , "Development" ,  "senior"  ,"img/Omar.jpg");
let employee6 = new Employee ("1005" , "Rana Saleh	" , "Development" ,  "junior"  , "img/Rana.jpg" );
let employee7 = new Employee ("1006" , "Hadi Ahmad	" , "Finance" ,     "mid-senior"  , "img/Tamara.jpg" );

for (let i = 0; i < allEmployee.length; i++) {
 
  allEmployee[i].render();

  // allEmployee[i].salary();
  
}

let form = document.getElementById("form1");

form.addEventListener("submit", submet);

function submet(event) {
  event.preventDefault();
  console.log("from event", event);

  let name = event.target.name.value;
  let department=event.target.department.value;
  let level = event.target.level.value;
  let image = event.target.image.value;

  let drinks = new Employee("" , name , department, level, image);
  
  console.log(drinks);

  drinks.render();


}