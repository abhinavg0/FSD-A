function validate()
{
    let username=document.getElementById('un').value
    // alert(username)
    let pass=document.getElementById("pass").value
   // alert(pass)
   let p1=document.getElementById('result')
   if(username!="" )
   {
    if(pass=="admin")
    {
        p1.innerHTML="validated";

    }
    else{
     p1.innerText="Invalid Password"
 
    }

   }
   else{
    p1.innerText="Invalid Username"
   }
}