var images =
["blob:https://web.whatsapp.com/64b652c2-e5ff-4cc5-90d7-309110eaad54", 
"blob:https://web.whatsapp.com/9eed658d-f2b3-408e-bc63-46f37db17b48",
"blob:https://web.whatsapp.com/cc5e0f2e-be9a-48db-bee7-08ce4d552d06",
"blob:https://web.whatsapp.com/66edeb50-dc8d-4107-8974-d4c0cce8beb1"]

var names= ["Jyoti","Arvind","Aditya","Aradhya"]


var i=0
function update()
{
      i++
      var number_of_member_array=4
      if(i > number_of_member_array)
      {
          i=0;
      }
      var updatedimage = images[i];
      var updatedname = images[i];
      document.getElementById("image_of_member").src= updatedimage;
      document.getElementById("name_of_family_member").innerHTML= updatedname;
}  