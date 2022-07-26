Blockly.Blocks['move_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("move forward");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
    }
};

Blockly.Blocks['turn_right_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("turn")
            .appendField(new Blockly.FieldDropdown([["left", "L"], ["right", "R"]]), "position");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
    }
};

Blockly.JavaScript['turn_right_left'] = function (block) {
    var dropdown_position = block.getFieldValue('position');
    var cat = document.getElementsByClassName("cat")[0];
    var code;

    if (dropdown_position == "L") {
        var go_left = cat.style.transform = "rotate(90deg)";
        cat = isRotateLeft;
        code = go_left;
    } else {
        var go_right = cat.style.transform = "rotate(-90deg)";
        cat = isRotateRight;
        code = go_right;
    }
    return code;
};

Blockly.JavaScript['move_forward'] = function (block) {
    var code = `var cat = document.getElementsByClassName("cat")[0];\n`;
    code += `cat.style.transform = "translate(20px)";\n`;
    return code;
};