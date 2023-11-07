window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.ChamarApiLocal = window.blockly.js.blockly.ChamarApiLocal || {};

/**
 * @function getLocalChatGPTApi
 *
 *
 *
 *
 * @author Andre Lucio Rocha Wanderley
 * @since 07/11/2023, 14:32:46
 *
 */
window.blockly.js.blockly.ChamarApiLocal.getLocalChatGPTApiArgs = [];
window.blockly.js.blockly.ChamarApiLocal.getLocalChatGPTApi = async function() {
 var response, retornoAPI, item;
  //
  this.cronapi.util.getURLFromOthers('GET', 'application/json', 'http://localhost:8080/chat?userInput=say%20hello', null, null, async function(sender_retornoAPI) {
      retornoAPI = sender_retornoAPI;
    //
    console.log(retornoAPI);
  }.bind(this), async function(sender_item) {
      item = sender_item;
  }.bind(this));
}
