var X_XSRF_TOKEN;
var COMPLIER = 'https://paiza.io/api/projects.json';
$('#complie').click(function(){
  //X_XSRF_TOKEN = '"q3ebbG6+VN/N34CdbaGjTLL/vGqftE/SJSIh1idubi43FQdoQR3gJ5MMAmH9a+FqmGFEtwPu8aW0otS6VDg0vw=="';
  $(this).attr('disabled', 'disable');
  var COMPLIE_BTN = $(this);
  var data = {
    "project": {
      "language": "cpp",
      "source_files": [
	{
	  "filename": "Main.cpp",
	  "body": editor.getValue()
	}
      ],
    },
    "run": true,
    "save": true
  };
  $.ajax({
    url: COMPLIER,
    headers: {
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': X_XSRF_TOKEN
    },
    method: 'POST',
    data: JSON.stringify(data),
    success: function(data) {

    },
    complete: function(data) {
      COMPLIE_BTN.removeAttr('disabled');
    }
  });
  /*editor.getSession().setAnnotations([{
	row: 1,
	column: 0,
	text: "Error Message", // Or the Json reply from the parser 
	type: "error" // also warning and information
  }]);*/
});


