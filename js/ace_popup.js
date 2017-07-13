ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setValue("#include <iostream>\n\nusing namespace std;\n\nint main (void)\n{\n  \n  return 0;\n}");
editor.clearSelection();
editor.setTheme("ace/theme/monokai");
var CCppMode = ace.require("ace/mode/c_cpp").Mode;
editor.session.setMode(new CCppMode());
