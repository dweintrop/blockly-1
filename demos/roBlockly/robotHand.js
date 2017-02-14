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
        .appendField("Configure Hand")
        .appendField(new Blockly.FieldImage("http://www.clker.com/cliparts/V/u/o/j/G/b/white-cog-hi.png", 15, 15, "*"));
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
        .appendField(new Blockly.FieldImage("http://www.clker.com/cliparts/V/u/o/j/G/b/white-cog-hi.png", 15, 15, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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