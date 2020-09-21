

let employees = [
    {
      name: "Gabbar Singh",
      age: 29,
      city: "Vishakapattanam",
      salary: "40000",
    },
    {
      name: "Ramesh",
      age: 32,
      city: "Bengaluru",
      salary: "14000",
    },
    {
      name: "Suresh",
      age: 31,
      city: "Mysuru",
      salary: "15000",
    },
    {
        name : "Sotte Manja",
        age : 26,
        city:"Karkala",
        salary: "23000",
    },
    {
        name: "Muthappa Rai",
        age : 43,
        city: "Mangalore",
        salary : "160000",
    },
  ];

    function display(recordstoshow){
  
    let tabledata = "";
    let srno = 1 ;
  
  recordstoshow.forEach(function (employee, index) {
    
    let currentrow = `<tr>
      <td>${srno}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.city}</td>
      <td>${employee.salary}</td>
      <td>
      <button onclick="deleteemployee(${index})">Delete</button>
      </td>
      </tr>`;
    // Creating another button for update
    // Takes the index value and pass it on to the show modal
    tabledata += currentrow;
    srno++;
  });
  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display(employees);

function searchbyname()
{

  let searchvalue = document.getElementById("searchbyname").value;

  let reqresult = employees.filter(function(result) {

    return result.name.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1 ; 
  })
  
  display(reqresult);
}

function searchbycity()
{

  let searchvalue = document.getElementById("searchbycity").value;

  let reqresult = employees.filter(function(result) {

    return result.city.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1 ; 
  })
  
  display(reqresult);
}


function deleteemployee(indexvalue) 
{
  employees.splice(indexvalue,1);

  display(employees);
}
