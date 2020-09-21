// Once the tab is close the data is gone
// This can be stored locally
// Take the javscript object

// For the first time when the page loads
    window.onload=function()
    {
      let initialbusinfo = [
        {
            name: "Airavatha",
            number: 3,
            source: "Mysuru",
            target: "Bengauru",
        },
      ];
    //   localStorage.removeItem("businfo");
      if(localStorage.getItem("businfo")== null)
      {
        localStorage.setItem("businfo",JSON.stringify(initialbusinfo));
        // console.log(JSON.parse(localStorage.getItem("businfo")));
      }
    }

    function display(displaycheck=undefined){
  
        let tabledata = "";
        let srno = 1 ;
        let businfo;
        if(displaycheck == undefined)
    {
        businfo = JSON.parse(localStorage.getItem("businfo"));
    }
    else
    {
        businfo = displaycheck;
    }
        // let businfo = JSON.parse(localStorage.getItem("businfo"));
        // console.log(businfo);
      businfo.forEach(function (buses, index) {
        let currentrow = `<tr>
          <td>${srno}</td>
          <td>${buses.name}</td>
          <td>${buses.number}</td>
          <td>${buses.source}</td>
          <td>${buses.target}</td>
          <td>
          <button onclick="deleteemployee(${index})">Delete</button>
          </td>
          </tr>`;
        tabledata += currentrow;
        srno++;
      });
      document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    }

    display();

function addnewentry(e)
{
  e.preventDefault(); 
//   console.log("hello");
  let newbus={};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let number = document.getElementById("number").value;
  let target = document.getElementById("target").value;

  newbus.name = name;
  newbus.source = source;
  newbus.number = number;
  newbus.target = target;

  console.log(newbus);

  let businfo = JSON.parse(localStorage.getItem("businfo")) ;
  console.log(businfo);
  businfo.push(newbus);
  localStorage.setItem("businfo",JSON.stringify(businfo));
  console.log(JSON.parse(localStorage.getItem("businfo")));

  display();

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("number").value = "";
  document.getElementById("target").value = "";
}

function searchbysource()
{
    let businfo = JSON.parse(localStorage.getItem("businfo"));
  let searchvalue = document.getElementById("searchbysource").value;

  let reqresult = businfo.filter(function(result) {

    return result.source.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1 ; 
  })
  
  display(reqresult);
}

function searchbydestination()
{
    let businfo = JSON.parse(localStorage.getItem("businfo"));

  let searchvalue = document.getElementById("searchbydestination").value;

  let reqresult = businfo.filter(function(result) {

    return result.target.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1 ; 
  })
  
  display(reqresult);
}

function deleteemployee(indexvalue) 
{
let businfo = JSON.parse(localStorage.getItem("businfo"));
businfo.splice(indexvalue,1);
 
  localStorage.setItem("businfo",JSON.stringify(businfo));

  display();
}

    function hideModal(event) {

        if (event.target.className == "modal") {
          let modal = document.getElementsByClassName("modal")[0];
          modal.style.display = "none";
        }
      }
      
      function showModal() {
        //   console.log("hello");
        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "block";
      }
     