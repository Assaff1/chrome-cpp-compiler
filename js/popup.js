var COMPLIER = 'https://paiza.io/api/projects.json';
$('#complie').click(function(){
  $(this).attr('disabled', 'disable');
  var COMPLIE_BTN = $(this);
  var data = {
    
  };
  $.ajax({
    url: COMPLIER,
    headers: {
      'X-XSRF-TOKEN':'"CYMwJDo2lYPQJ6vXHNjzaDSOeeWfXBBWDUpt/yKqDyZEh0WFwUgzeEYYY02hMIITm5pZxAZLFyyScpjg9A0RyA=="'
    },
    method: 'POST',
    data: '{"project":{"id":506521,"source_files":[{"filename":"Main.cpp","body":"#include <iostream>\nusing namespace std;\nint main(void){\n    // Here your code !\n    \n}\n","position":0},{"id":634715,"_destroy":true}],"language":"cpp","input":null,"share":"public","network":true,"live":null,"output_type":null,"schedule":null,"title":null},"run":true,"save":true}',
    success: function(data) {

    },
    complete: function(data) {
      COMPLIE_BTN.removeAttr('disabled');
    }
  });
});
