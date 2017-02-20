'use strict';

// only include if move into the main blocks directory
// goog.provide('Blockly.Blocks.robotRecipe');
// goog.require('Blockly.Blocks');

Blockly.Blocks['pick_and_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Pick and Place"), "pick_n_place_name");
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
        .appendField(new Blockly.FieldTextInput("Button Press"), "NAME");
    this.appendStatementInput("steps")
        .setCheck(null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pick_and_place_a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pick and Place A");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pressbuttona'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Press Button A");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};