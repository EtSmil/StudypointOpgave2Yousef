/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var student = [
        {"name": "Messi", "phone": "10101010", "mail": "messias@barca.cat","level":"red","group":"legends"},
        {"name": "Xavi", "phone": "6060606", "mail": "elMaestro@barca.cat","level":"red","group":"legends"},
        {"name": "Iniesta", "phone": "80808080", "mail": "theMagician@barca.cat","level":"red","group":"legends"},
        {"name": "Dani Alves", "phone": "20202020", "mail": "daAlves2008@barca.cat","level":"yellow","group":""},
        {"name": "Rafinha", "phone": "12121212", "mail": "brotherOfThiago@barca.cat","level":"green","group":""}
      
    ];



   
//    document.body.appendChild(btn); 


var populateTable = function(){
     

    
    tableBody.innerHTML = "";
  
for(var i=0; i<student.length; i++){
var row = tableBody.insertRow(i);  

    var deleteBtn = document.createElement("button");
    var text = document.createTextNode("Delete"); 
    deleteBtn.appendChild(text);
    deleteBtn.id = student[i].name;
    deleteBtn.name = "deleteB";

    row.insertCell(0).innerHTML =student[i].name;
  row.insertCell(1).innerHTML =student[i].phone;
    row.insertCell(2).innerHTML =student[i].mail;
   row.insertCell(3).innerHTML =student[i].level;
  if(student[i].group!=""){  row.insertCell(4).innerHTML =student[i].group;}
  else{
      var tField = document.createElement("INPUT");
          tField.setAttribute("type", "text");
          tField.id = i;
          tField.name = "delete";

      row.insertCell(4).appendChild(tField);}
  // row.insertCell(5).appendChild(deleteBtn);
    var cell  = row.insertCell(5);
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    cell.appendChild(btn);
    
    btn.onclick = (function(){
        
        var inc = i;
        return function(){
            student.splice(inc,1);
                populateTable();

            
        };
        
        
    })();
    
    

}};



var tableBody = document.getElementById("studentsTable");


var addNewStudent = function(nName,nMail,nPhone,nLevel,nGroup){
    
  student.push( {"name": nName, "phone": nPhone, "mail": nMail,"level":nLevel,"group":nGroup});
    
    
};

var studentForm = document.getElementById("stdentForm");
 studentForm.onsubmit = function(event){
    
event.preventDefault();
    addNewStudent(stdentForm.elements["firstname"].value,stdentForm.elements["email"].value,stdentForm.elements["phone"].value,stdentForm.elements["level"].value,stdentForm.elements["group"].value)

    populateTable();
};
//delete
var deleteAllBtn = document.getElementById("deleteAll");
    
deleteAllBtn.onclick = function () {//delete all students
        
student = student.slice(0,0);
    populateTable();
}


//groups
var saveGroups = document.getElementById("saveGroups");
    saveGroups.onclick = function () {

var inputs, index;

inputs = document.getElementsByName('delete');
for (index = 0; index < inputs.length; ++index) {

  if(inputs[index].value != ""){student[ inputs[index].id ].group =  inputs[index].value }

    }populateTable(); };


var resetGroups = document.getElementById("resetGroups");
    resetGroups.onclick = function () {
        
 for(var i=0; i<student.length; i++){
     
     
    student[i].group = ""; 
     
 }
 populateTable();
        
    };
    
//
//    var dBtn = document.getElementsByName("delete");
// 
// dBtn.onclick = function () {
//        
//     alert("hej");
//     
// };
// 
 
// 
// 
// 
// 
// deleteBtn.onclick = function(){
//    alert("deleteButton");
// //  var index = deleteBtn.id;
//    
////student.splice(index,1);
//populateTable();     
//}
//    

populateTable();     