var workspace = Blockly.inject('blocklyDiv',
    {
        toolbox: document.getElementById('toolbox'),
        zoom: {
            controls: true,
        }
    });
var startBlocks = document.getElementById('startBlocks');
Blockly.Xml.domToWorkspace(startBlocks, workspace);

function myUpdateFunction(event) {
    var languageDropdown = document.getElementById('languageDropdown');
    var languageSelection = languageDropdown.options[languageDropdown.selectedIndex].value;
    var codeDiv = document.getElementById('codeDiv');
    var codeHolder = document.createElement('pre');
    codeHolder.className = 'prettyprint';
    var code = document.createTextNode(Blockly[languageSelection].workspaceToCode(workspace));
    codeHolder.appendChild(code);
    codeDiv.replaceChild(codeHolder, codeDiv.lastElementChild);
    prettyPrint();
}
workspace.addChangeListener(myUpdateFunction);
function executeBlockCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);
}