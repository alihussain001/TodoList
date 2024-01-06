// for login-page
function validateForm() {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
      alert('Please enter both email and password.');
      return false;
    }
    
   
    return true;
  }

  function validateEmail(email){
    // Regular expressiom for simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const email = "mytodolist@email.com";
  if (validateEmail(email)){
    console.log("Email is valid");
  }
  else {
    console.log("Email is invalid");
  }

  // for todolist
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");


  function addTask() {
   if (inputBox.value === ''){
    alert("You must write something");
   }

   else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
   }
   inputBox.value = "";
   saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }

 }, false);  

 function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
 }

 function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();
    

