let arrNew;

function fn1() {

  let fname1 = document.getElementById("fname").value;
  let lname1 = document.getElementById("lname").value
  let dob1 = document.getElementById("dob").value
  let mail1 = document.getElementById("mail").value
  let college1 = document.getElementById("college").value
  let jobrole1 = document.getElementById("jobrole").value
  let gender1
  if(document.getElementById("male").checked)
  {
    gender1=document.getElementById("male").value
  }
  else if(document.getElementById("female").checked)
  {
    gender1=document.getElementById("female").value
  }
  else if(document.getElementById("others").checked)
  {
    gender1=document.getElementById("others").value
  }

  console.log(gender1)

if(fname1=="")
{
  alert("Please Enter the first name ")

}

else if(lname1=="")
{
  alert("Please Enter the last name ")
}
else if(dob1=="")
{
  alert("Please Enter the Date Of Birth ")
}
else if(gender1=="")
{
  alert("Please Enter the Date Of Birth ")
}
else if(mail1=="")
{
  alert("Please Enter the Email ")
}
else if(college1=="")
{
  alert("Please Enter Your College Name")
}
else if(jobrole1=="")
{
  alert("Please Enter Your Job Role ")
}
else{
  alert("Your Form is Submitted")
  console.log( ` Name :${fname1} \n father name :${lname1} \n D.O.B ${dob1} \n Gender : ${gender1} \n Email ${mail1} \n College ${college1} \n Job Role ${jobrole1}`)

 
  localStorage.setItem("name", fname1);
  localStorage.setItem("lname", lname1);
  localStorage.setItem("dob", dob1);
  localStorage.setItem("gender", gender1);
  localStorage.setItem("mail", mail1);
  localStorage.setItem("college", college1);
  localStorage.setItem("jobrole", jobrole1);

}


}





  

 

function myFunction() {

  let name = localStorage.getItem('name');
  let lname = localStorage.getItem('lname');
  let dob = localStorage.getItem('dob');
  let gender= localStorage.getItem('gender');
  let mail = localStorage.getItem('mail');
  let college = localStorage.getItem('college');
  let jobrole = localStorage.getItem('jobrole');
 
  document.getElementById("fnamep").innerHTML = name;
  document.getElementById("lnamep").innerHTML = lname;
  document.getElementById("dobp").innerHTML = dob;
  document.getElementById("genderp").innerHTML = gender;
  document.getElementById("emailp").innerHTML = mail;
  document.getElementById("collegep").innerHTML = college;
  document.getElementById("jobrolep").innerHTML = jobrole;
}


document.getElementById("okay").addEventListener('click',()=>{
  alert("Thanks for Choosing US")
})
