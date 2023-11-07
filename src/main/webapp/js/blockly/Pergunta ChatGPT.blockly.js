window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.PerguntaChatgpt = window.blockly.js.blockly.PerguntaChatgpt || {};

/**
 * @function getChatGptAnswerByUserInput
 *
 *
 *
 *
 * @author Andre Lucio Rocha Wanderley
 * @since 07/11/2023, 14:56:50
 *
 */
window.blockly.js.blockly.PerguntaChatgpt.getChatGptAnswerByUserInputArgs = [];
window.blockly.js.blockly.PerguntaChatgpt.getChatGptAnswerByUserInput = async function() {
 var jsonInput, header, retornoAPI, response;
  //
  jsonInput = this.cronapi.json.createObjectFromString(['{\n  \"model\": \"davinci-002\",\n  \"messages\": [\n    {\n      \"role\": \"user\",\n      \"content\": ',['\"',this.cronapi.screen.getValueOfField("vars.inputPergunta"),'\"'].join(''),'}\n  ]\n}'].join(''));
  //
  header = this.cronapi.json.createObjectFromString('{\"Authorization\":\"Bearer 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\"}');
  //
  this.cronapi.util.getURLFromOthers('POST', 'application/json', 'https://api.openai.com/v1/completions', jsonInput, header, async function(sender_retornoAPI) {
      retornoAPI = sender_retornoAPI;
    //
    response = this.cronapi.json.getProperty(retornoAPI, 'choices.message.content');
    //
    this.cronapi.screen.changeValueOfField("vars.outputPergunta", response);
  }.bind(this), async function(sender_retornoAPI) {
      retornoAPI = sender_retornoAPI;
    //
    this.cronapi.screen.changeValueOfField("vars.outputPergunta", 'Houve algo de errado na requisição, tente novamente mais tarde');
  }.bind(this));
}
