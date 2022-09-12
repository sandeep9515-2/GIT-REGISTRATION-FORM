var h1=0;
  allStorage();
 function allStorage() {
     var values = [],
     keys = Object.keys(localStorage),
     i = 0;
     while ( i<keys.length ) {
     p=localStorage.getItem(keys[i]);
     //console.log(p)
     let p1=JSON.parse(p);
     let a=document.getElementById("11")
     let d=a.insertRow(h1+1);
     let d1=d.insertCell(0);
     let d2=d.insertCell(1);
     let d3=d.insertCell(2);
     let d4=d.insertCell(3);
     let d5=d.insertCell(4);
     d1.innerHTML=JSON.parse(p1['name'])
     d2.innerHTML=JSON.parse(p1['email'])
     d3.innerHTML=JSON.parse(p1['password'])
     d4.innerHTML=JSON.parse(p1['dob'])
     d5.innerHTML=JSON.parse(p1['terms'])
     h1=h1+1;
     i=i+1;
     }
 }



 function func()
 {
     let a=document.getElementById("11")
     let e1=document.getElementById("name").value;
     let e2=document.getElementById("email").value;
     let e3=document.getElementById("password").value;
     let e41=document.getElementById("date").value;
     let e5=document.getElementById("che").checked;
     //console.log(typeof(e2))
     e4=new Date(e41)
     let e6=e2.includes("@gmail.com")
     var month = e4.getMonth();
     var day=e4.getDate();
     var today = new Date(); 
     var age= today.getYear()-e4.getYear();  
     if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
      }
      let agg= age>18 && age <55;
     if(e5==false)
     {
        alert("Accept the terms and consitions")
        document.getElementById("ll").addEventListener("click", function(event){
            event.preventDefault()
          });
          return 1;
     }
     if(agg==false)
     {
        alert("age should between 18 and 55")
        document.getElementById("ll").addEventListener("click", function(event){
            event.preventDefault()
          });
          return 1;
     }
     if(e6==false)
     {
        alert("invalid email")
        document.getElementById("ll").addEventListener("click", function(event){
            event.preventDefault()
          });
          return 1;
     }
     let d=a.insertRow(h1+1);
     let d1=d.insertCell(0);
     let d2=d.insertCell(1);
     let d3=d.insertCell(2);
     let d4=d.insertCell(3);
     let d5=d.insertCell(4);
     d1.innerHTML=e1
     d2.innerHTML=e2
     d3.innerHTML=e3
     d4.innerHTML=e41
     d5.innerHTML="yes"
     let g={
         'name':JSON.stringify(e1),
         'email':JSON.stringify(e2),
         'password':JSON.stringify(e3),
         'dob':JSON.stringify(e41),
         'terms':JSON.stringify("yes")
     }
