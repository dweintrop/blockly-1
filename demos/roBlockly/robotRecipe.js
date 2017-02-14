'use strict';

// only include if move into the main blocks directory
// goog.provide('Blockly.Blocks.robotRecipe');
// goog.require('Blockly.Blocks');

Blockly.Blocks['pick_and_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Pick and Place"), "pick_n_place_name")
        .appendField(new Blockly.FieldImage("http://www.clker.com/cliparts/V/u/o/j/G/b/white-cog-hi.png", 15, 15, "*"));
    this.appendStatementInput("steps")
        .setCheck(null);
    this.setColour(150);
    this.setTooltip('Pick and Place');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['button_press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Button Press"), "NAME")
        .appendField(new Blockly.FieldImage("http://www.clker.com/cliparts/V/u/o/j/G/b/white-cog-hi.png", 15, 15, "*"));
    this.appendStatementInput("steps")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
