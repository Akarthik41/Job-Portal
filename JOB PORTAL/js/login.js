document.getElementById("sub").addEventListener('click',()=>{
    let uname=document.getElementById("txtemail").value
let pass=document.getElementById("txtpass").value

if(uname=="test" && pass=="123")
{
    alert("Verified User")
    window.open("verifieduser.html")
}
else
{
    alert("Check Your User Name & Password")
    // window.onload("login.html")

}

})