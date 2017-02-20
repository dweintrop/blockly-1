'use strict';

// only include if move into the main blocks directory
// goog.provide('Blockly.Blocks.robotHand');
// goog.require('Blockly.Blocks');

Blockly.Blocks['open_close_hand'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["open","open"], ["close","close"]]), "open_close_hand")
      .appendField("Hand");
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
        .appendField("wrist")
        .appendField(new Blockly.FieldAngle(150), "deg")
        .appendField("˚");;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pick_up_release'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Pick Up","pickup"], ["Release","release"]]), "pick_up_release")
        .appendField(new Blockly.FieldVariable("obj1"), "obj");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
   /**
   * Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var configObj = workspace.newBlock('config_object');
    configObj.initSvg();
    var nameInp = workspace.newBlock('text');
    nameInp.initSvg();
    nameInp.getField("TEXT").setValue("Name");
    configObj.getInput("obj_name").connection.connect(nameInp.outputConnection);
    var widthInp = workspace.newBlock('math_number');
    widthInp.initSvg();
    widthInp.getField("NUM").setValue("100");
    configObj.getInput("width").connection.connect(widthInp.outputConnection);
    var weightInp = workspace.newBlock('math_number');
    weightInp.initSvg();
    weightInp.getField("NUM").setValue(50);
    configObj.getInput("weight").connection.connect(weightInp.outputConnection);
    return configObj;
  },
  compose: function(containerBlock) {
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    return container;
  }
};

Blockly.Blocks['define_obj'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Define Object");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setMutator(new Blockly.Mutator(['']));
  },
   /**
   * Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var configObj = workspace.newBlock('config_object');
    configObj.initSvg();
    var nameInp = workspace.newBlock('text');
    nameInp.initSvg();
    nameInp.getField("TEXT").setValue("Name");
    configObj.getInput("obj_name").connection.connect(nameInp.outputConnection);
    var widthInp = workspace.newBlock('math_number');
    widthInp.initSvg();
    widthInp.getField("NUM").setValue("100");
    configObj.getInput("width").connection.connect(widthInp.outputConnection);
    var weightInp = workspace.newBlock('math_number');
    weightInp.initSvg();
    weightInp.getField("NUM").setValue(50);
    configObj.getInput("weight").connection.connect(weightInp.outputConnection);
    return configObj;
  },
  compose: function(containerBlock) {
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    return container;
  }
};

Blockly.Blocks['edit_obj'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Edit Object")
         .appendField(new Blockly.FieldVariable("obj1"), "obj");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setMutator(new Blockly.Mutator(['']));
  },
   /**
   * Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var configObj = workspace.newBlock('config_object');
    configObj.initSvg();
    var nameInp = workspace.newBlock('text');
    nameInp.initSvg();
    nameInp.getField("TEXT").setValue("Name");
    configObj.getInput("obj_name").connection.connect(nameInp.outputConnection);
    var widthInp = workspace.newBlock('math_number');
    widthInp.initSvg();
    widthInp.getField("NUM").setValue("100");
    configObj.getInput("width").connection.connect(widthInp.outputConnection);
    var weightInp = workspace.newBlock('math_number');
    weightInp.initSvg();
    weightInp.getField("NUM").setValue(50);
    configObj.getInput("weight").connection.connect(weightInp.outputConnection);
    return configObj;
  },
  compose: function(containerBlock) {
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    return container;
  }
};

Blockly.Blocks['config_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configure Object");
    this.appendValueInput("obj_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Name:");
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
