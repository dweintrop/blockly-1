'use strict';

// only include if move into the main blocks directory
// goog.provide('Blockly.Blocks.robotHand');
// goog.require('Blockly.Blocks');

Blockly.Blocks['close_hand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Close Hand");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['open_hand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Open Hand");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['configure_hand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["turn","turn"], ["flex","flex"]]), "wrist_motion")
        .appendField("wrist");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pick_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pick up")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setMutator(new Blockly.Mutator(['']));
  },
   /**
   * Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var configPickUp = workspace.newBlock('config_pickup');
    configPickUp.initSvg();

    var widthInp = workspace.newBlock('math_number');
    widthInp.initSvg();
    widthInp.getField("NUM").setValue("100");
    configPickUp.getInput("width").connection.connect(widthInp.outputConnection);
    var weightInp = workspace.newBlock('math_number');
    weightInp.initSvg();
    weightInp.getField("NUM").setValue(50);
    configPickUp.getInput("weight").connection.connect(weightInp.outputConnection);
    return configPickUp;
  },
  compose: function(containerBlock) {
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    return container;
  }
};

Blockly.Blocks['config_pickup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configure Pick Up");
    this.appendValueInput("width")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Object size (mm) :");
    this.appendValueInput("weight")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Object Weight (mg) :");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['drop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("drop")
        .appendField(new Blockly.FieldImage("http://www.clker.com/cliparts/V/u/o/j/G/b/white-cog-hi.png", 15, 15, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};