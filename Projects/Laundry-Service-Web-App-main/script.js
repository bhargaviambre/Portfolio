let total=0;
let serial=1;

function toggleItem(button, id, serviceName, price){
   let table = document.getElementById("Cart-Items");

   if(button.innerHTML == "Add Item ➕")
   {
      let row = table.insertRow();
      row.id=id;
      row.innerHTML=
      `
      <td>${serial}</td>
      <td>${serviceName}</td>
      <td>₹${price}</td>
      `;

      serial++;
      total +=price;

      document.getElementById("total").innerHTML ="₹" + total;
      button.innerHTML="Remove Item ❌";
   }

   else{
      let row= document.getElementById(id);

      if(row){
         row.remove();
      }
      total -=price;
      document.getElementById("total").innerHTML= "₹" + total;
      button.innerHTML="Add Item ➕"
   } 
}
 function bookNow()
 {
   let name=document.getElementById("name").value;
   let email=document.getElementById("email").value;
   let phone=document.getElementById("phone").value;
   let msg=document.getElementById("msg");
   
   if(name =="" || email==""|| phone=="")
      {
         msg.innerHTML="Please fill all fields";
         msg.style.color="red";
         return;
      }

      let params={
         customer_name: name,
         customer_email: email,
         customer_phone: phone,
         total_amount: total,
         services:document.getElementById("Cart-Items").innerText
      };
      emailjs.send( "service_zswlik3" , "template_oqq6wkj" , params).then(function(){
         msg.innerHTML="THANK YOU FOR BOOKING! EMAIL HAS BEEN SENT SUCCESSFULLY.";
         msg.style.color="green";

         document.getElementById("name").value="";
         document.getElementById("email").value="";
         document.getElementById("phone").value="";
      })
      .catch(function(error){
         console.log(error);
         document.getElementById("msg").innerHTML="Failed to send" + error.text;
         document.getElementById("msg").style.color="red";
      });
   }

   