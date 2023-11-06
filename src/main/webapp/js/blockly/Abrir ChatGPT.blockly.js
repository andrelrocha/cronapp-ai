window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.AbrirChatgpt = window.blockly.js.blockly.AbrirChatgpt || {};

/**
 * @function getChatGptAnswer
 *
 *
 *
 *
 * @author Andre Lucio Rocha Wanderley
 * @since 06/11/2023, 16:59:48
 *
 */
window.blockly.js.blockly.AbrirChatgpt.getChatGptAnswerArgs = [];
window.blockly.js.blockly.AbrirChatgpt.getChatGptAnswer = async function() {

  //
  this.cronapi.screen.openUrl('https://chat.openai.com/?model=text-davinci-002-render-sha', null, 0, 0);
}
