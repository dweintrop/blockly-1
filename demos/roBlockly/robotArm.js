'use strict';


// only include if move into the main blocks directory
// goog.provide('Blockly.Blocks.robotArm');
// goog.require('Blockly.Blocks');


Blockly.Blocks['move_to_dropdowns'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["directly","direct"], 
                                                ["quickly","quick"], 
                                                ["circularly", "circular"], 
                                                ["smoothly","smooth"]]), "move_type")
        .appendField("to")
        .appendField(new Blockly.FieldVariable("home"), "dest");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['move_to_xyz'] = {
  init: function() {
    this.jsonInit({
      "message0": "Move %1 to x:%2 y: %3 z: %4",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "move_type",
          "options":
            [["directly","direct"], 
              ["quickly","quick"], 
              ["circularly", "circular"], 
              ["smoothly","smooth"]]
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "z",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "colour": 60,
      "helpUrl": Blockly.Msg.MATH_ARITHMETIC_HELPURL,
      "previousStatement": null,
      "nextStatement": null,
    });
  }
};

Blockly.Blocks['define_locale'] = {
  init: function() {
    this.appendDummyInput().appendField("Define Location");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setMutator(new Blockly.Mutator(['']));
  },
  
  /**
   * Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var configBlock = workspace.newBlock('config_locale');
    configBlock.initSvg();
    var nameInp = workspace.newBlock('text');
    nameInp.initSvg();
    nameInp.getField("TEXT").setValue("New Location");
    configBlock.getInput("locale_name").connection.connect(nameInp.outputConnection);
    var xInp = workspace.newBlock('math_number');
    xInp.initSvg();
    xInp.getField("NUM").setValue(180);
    configBlock.getInput("x").connection.connect(xInp.outputConnection);
    var yInp = workspace.newBlock('math_number');
    yInp.getField("NUM").setValue(180);
    yInp.initSvg();
    configBlock.getInput("y").connection.connect(yInp.outputConnection);
    var zInp = workspace.newBlock('math_number');
    zInp.getField("NUM").setValue(180);
    zInp.initSvg();
    configBlock.getInput("z").connection.connect(zInp.outputConnection);
    return configBlock;
  },
  compose: function(containerBlock) {
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('x', this.getFieldValue('x'));
    return container;
  },
  domToMutation: function(container) {
    this.x = container.getAttribute('x');
  }
};

Blockly.Blocks['config_locale'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Define Location");
    this.appendValueInput("locale_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Name:");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X:");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y:");
    this.appendValueInput("z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z:");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['edit_locale'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Edit Location: ")
        .appendField(new Blockly.FieldVariable("home"), "locale");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setMutator(new Blockly.Mutator(['']));
  },
  /**
   * Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var configBlock = workspace.newBlock('config_locale');
    configBlock.initSvg();
    var nameInp = workspace.newBlock('text');
    nameInp.initSvg();
    nameInp.getField("TEXT").setValue("New Location");
    configBlock.getInput("locale_name").connection.connect(nameInp.outputConnection);
    var xInp = workspace.newBlock('math_number');
    xInp.initSvg();
    xInp.getField("NUM").setValue(180);
    configBlock.getInput("x").connection.connect(xInp.outputConnection);
    var yInp = workspace.newBlock('math_number');
    yInp.getField("NUM").setValue(180);
    yInp.initSvg();
    configBlock.getInput("y").connection.connect(yInp.outputConnection);
    var zInp = workspace.newBlock('math_number');
    zInp.getField("NUM").setValue(180);
    zInp.initSvg();
    configBlock.getInput("z").connection.connect(zInp.outputConnection);
    return configBlock;
  },
  compose: function(containerBlock) {
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('x', this.getFieldValue('x'));
    return container;
  },
  domToMutation: function(container) {
    this.x = container.getAttribute('x');
  }
};

////////////////////////////
//     Old blocks/ideas   //
////////////////////////////

Blockly.Blocks['move_to_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move to Location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setMutator(new Blockly.Mutator(['']));
    this.x = 1;
    this.y = 2;
    this.z = 3;
  },

   /**
   * Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var configBlock = workspace.newBlock('config_move');
    configBlock.initSvg();
    return configBlock;
  },
  compose: function(containerBlock) {
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('x', this.getFieldValue('x'));
    return container;
  },
  domToMutation: function(container) {
    this.x = container.getAttribute('x');
  }

};

Blockly.Blocks['config_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configure Move");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X:")
        .appendField(new Blockly.FieldNumber(180, -360, 360, 0.01), "x");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y:")
        .appendField(new Blockly.FieldNumber(180, -360, 360, 0.01), "y");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z:")
        .appendField(new Blockly.FieldNumber(180, -360, 360, 0.01), "z");
    this.appendDummyInput()
        .appendField("Move Type")
        .appendField(new Blockly.FieldDropdown([["Direct","Direct"], ["Fast","Fast"], ["Smooth","Smooth"]]), "type");
    this.setInputsInline(false);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['go_home'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move to")
        .appendField(new Blockly.FieldVariable("home"), "loc_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};