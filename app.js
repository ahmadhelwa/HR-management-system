

let section = document.getElementById("container");

let allEmployee = [];
function Employee(fullName,Department,Level,imageURL)
    
{

// this.employeeID=employeeID,
this.fullName=fullName,
this.Department=Department,
this.Level=Level,
this.imageURL=imageURL,
// this.salary=salary1;
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
   number1.textContent = ` ${sum1()}`;
   divcard.appendChild(number1);

   let salary = document.createElement("h2");
   salary.textContent =  `${this.salary()}`;
   divcard.appendChild(salary);

};
   function sum1 () 
{
   
  return  Math.floor(1000 + Math.random() * 9000)
  
}


let employee2 = new Employee ("Lana Ali	" , "Finance" ,      "senior"  , "img/Ghazi.jpg" );
let employee3 = new Employee ( "Tamara Ayoub" , "Marketing" ,    "senior"  , "img/Hadi.jpg"  );
let employee4 = new Employee ( "Safi Walid	" , "Administration","mid-senior"  ,"img/Lana.jpg");
let employee5 = new Employee (  "Omar Zaid	" , "Development" ,  "senior"  ,"img/Omar.jpg");
let employee6 = new Employee ( "Rana Saleh	" , "Development" ,  "junior"  , "img/Rana.jpg"  );
let employee7 = new Employee ( "Hadi Ahmad	" , "Finance" ,     "mid-senior"  , "img/Tamara.jpg" );


function renderAll(){
for (let i = 0; i < allEmployee.length; i++)
{
 
  allEmployee[i].render();
  // allEmployee[i].renderTable();

}

  
}

let form = document.getElementById("form1");

form.addEventListener("submit", submet);

function submet(event) {
  event.preventDefault();
  // console.log("from event", event);

  let name = event.target.name.value;
  let department=event.target.department.value;
  let level = event.target.level.value;
  let image = event.target.image.value;

  

  let drinks = new Employee( name , department, level, image);
 

  drinks.render();
  savedata(allEmployee);
}


function savedata(data)
{
 
  let stringdata =JSON.stringify(data);
  localStorage.setItem("drinks",stringdata);
  
}

function gitdata()
{
  let returndata = localStorage.getItem("drinks");
  let arraydata =JSON.parse(returndata);



       
       if (arraydata != null)
           
  {
  
    for (let i = 0; i < arraydata.length; i++)
    {   
    let key = new Employee(arraydata[i].fullName , arraydata[i].Department, arraydata[i].Level, arraydata[i].image);
    let returndata = localStorage.getItem(key);
    
  }
  
  }

  renderAll();
}

gitdata();

   let table = document.getElementById("table");
   let tbody = document.getElementById("tbody");


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  







// --------------------------------------------------------------------------------------------------------------------------




      function renderTable ()
  
   {
 
 
 
 
      let trname = document.createElement('tr');
      tbody.appendChild(trname);   
 

      let td = document.createElement('td');
 
      td.textContent= ` allDepartment`;
      trname.appendChild(td);   

      let td1 = document.createElement('td');
 
      td1.textContent=  `${number1()}`;
      trname.appendChild(td1);   
 
      let td2 = document.createElement('td');
 
      td2.textContent=  `${salary2()}`;
      trname.appendChild(td2);   
 
      let td3 = document.createElement('td');
 
      td3.textContent=  `${avgsalary2()}`;
      trname.appendChild(td3);   
 
 
 
 
   }

  
   function number1()
   {
     let sum = 0 ;
     for (let i=0 ; i < allEmployee.length ; i++ )
     {
 if (`${Employee.Department}` == 'Finance' || 'Marketing' || 'Administration' || 'Development')
 {
   sum+=1;
 }
}
return sum;

 }

 function salary2()
 {
   sum = 0 ;
  let salaryemp = 0;
  for (let i=0 ; i < allEmployee.length ; i++ )
  {

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
 sum+=sumSalary;
   
  }

  
return sum;

 }
 
 function avgsalary2()
 {
   sum = 0 ;
  let salaryemp = 0;
  for (let i=0 ; i < allEmployee.length ; i++ )
  {


    

 sum+=sumSalary;
   
  }

  
return sum/allEmployee.length;

 }
renderTable ();
