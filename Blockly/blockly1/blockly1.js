var workspace = Blockly.inject('blocklyDiv',
    {
        media: 'https://unpkg.com/blockly/media/',
        toolbox: document.getElementById('toolbox'),
        zoom: {
            controls: true,
        }
    });
Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);

function showJsCode() {
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    alert(code);
}

function showPyCode() {
    Blockly.Python.INFINITE_LOOP_TRAP = null;
    var code = Blockly.Python.workspaceToCode(workspace);
    alert(code);
}

function runJsCode() {
    window.LoopTrap = 10;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }
}

function runPyCode() {
    window.LoopTrap = 10;
    Blockly.Python.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }
}