document.getElementById("btn").addEventListener("click", function () {

    


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let clas = document.getElementById("classes").value;
    let roll = document.getElementById("roll").value;

    

    if(name == "" || email == "" || clas == "" || roll == "") {
        alert("please fill all feilds");
        return false;
    }

    console.log(name,email,clas,roll);
     
    var tablez = document.getElementById("jsdiv");
    tablez.style.display = "block";

    var table = document.getElementById("StudentTable");
    var tablerow = table.insertRow();


    tablerow.insertCell(0).innerHTML = name;
    tablerow.insertCell(1).innerHTML = email;
    tablerow.insertCell(2).innerHTML = clas;
    tablerow.insertCell(3).innerHTML = roll;

   

    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    resetButton.className="set";
    resetButton.addEventListener("click", function() { resetrow(tablerow); });
    tablerow.insertCell(4).appendChild(resetButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className="del";
    deleteButton.addEventListener("click", function() { deleterow(tablerow); });
    tablerow.insertCell(5).appendChild(deleteButton);


    function resetrow(row) {
       
        row.cells[0].innerHTML = "";  
        row.cells[1].innerHTML = ""; 
        row.cells[2].innerHTML = "";  
        row.cells[3].innerHTML = ""; 
    }

    function deleterow(row) {
        row.parentNode.removeChild(row);
    }


});