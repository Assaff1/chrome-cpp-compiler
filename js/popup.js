var COMPLIER = 'https://paiza.io/api/projects.json';
$('#complie').click(function(){
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
    }
  };
  $.ajax({
    url: COMPLIER,
    headers: {
      'Content-Type':'application/json',
      'X-XSRF-TOKEN':'"q3ebbG6+VN/N34CdbaGjTLL/vGqftE/SJSIh1idubi43FQdoQR3gJ5MMAmH9a+FqmGFEtwPu8aW0otS6VDg0vw=="'
    },
    method: 'POST',
    data: JSON.stringify(data),
    success: function(data) {

    },
    complete: function(data) {
      COMPLIE_BTN.removeAttr('disabled');
    }
  });
});
