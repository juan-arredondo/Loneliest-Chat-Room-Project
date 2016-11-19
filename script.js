function ready() {
 var textbox = $('#new-message-body');
 var counter = 0;

 function sendMessage() {
   var message = textbox.val();
   textbox.val("");


   $('#conversation').append( "<li class='message'> \
       <a class='delete' href='#'>Delete</a>\
       <h3 class='author'>" + getAuthor() +"</h3>\
       <p class='message-body'>" + message + "</p>\
       <span class='timestamp'>" + getFormattedTime() + "</span>\
     </li>");
     $('.delete').click(function(e){
       e.preventDefault();
       $(this).parent().remove();
     })
 }

 function getFormattedTime() {
   var date = new Date();
   return date.getHours() + ':' + date.getMinutes();
 }

 function getAuthor() {
   if(counter === 0){
     counter ++;
     return "Me";
   } else if (counter===1) {
     counter ++;
     return "Myself";
   }
   else {
     counter =0;
     return "I";
   }
 }

 $('#new-message-button').click(function(e) {
   e.preventDefault();
   sendMessage();
 });

 textbox.keydown(function(e) {
   if (e.keyCode == 13) {
     sendMessage();
   }
 });

}

$(document).ready(ready);
$(document).on('page:load', ready);
