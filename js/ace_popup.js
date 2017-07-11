ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
var CCppMode = ace.require("ace/mode/c_cpp").Mode;
editor.session.setMode(new CCppMode());
