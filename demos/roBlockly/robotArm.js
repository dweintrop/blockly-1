'use strict';


// only include if move into the main blocks directory
// goog.provide('Blockly.Blocks.robotArm');
// goog.require('Blockly.Blocks');

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

Blockly.Blocks['move_to_dropdowns'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["directly","direct"], ["quickly","quick"], ["smoothly","smooth"]]), "move_type")
        .appendField("to")
        .appendField(new Blockly.FieldVariable("home"), "dest");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
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