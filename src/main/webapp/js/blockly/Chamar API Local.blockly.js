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
 * @since 07/11/2023, 15:41:30
 *
 */
window.blockly.js.blockly.ChamarApiLocal.getLocalChatGPTApiArgs = [];
window.blockly.js.blockly.ChamarApiLocal.getLocalChatGPTApi = async function() {
 var retornoAPI, item, response;
  //
  this.cronapi.util.getURLFromOthers('POST', 'application/json', 'http://localhost:8080/chat', this.cronapi.json.createObjectFromString(['{\n	\"input\": \"',this.cronapi.screen.getValueOfField("vars.inputPergunta"),'\"\n}'].join('')), null, async function(sender_retornoAPI) {
      retornoAPI = sender_retornoAPI;
    //
    response = this.cronapi.json.getProperty(retornoAPI, 'choices.message.content');
    //
    this.cronapi.screen.changeValueOfField("vars.outputPergunta", response);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.changeValueOfField("vars.outputPergunta", 'Houve algo de errado na requisição, tente novamente mais tarde');
  }.bind(this));
}
