window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.PerguntarChatbase = window.blockly.js.PerguntarChatbase || {};

/**
 * @function askChatBase
 *
 *
 *
 *
 * @author Andre Lucio Rocha Wanderley
 * @since 06/11/2023, 17:44:29
 *
 */
window.blockly.js.PerguntarChatbase.askChatBaseArgs = [];
window.blockly.js.PerguntarChatbase.askChatBase = async function() {
 var item;
  //
  this.cronapi.util.getURLFromOthers('GET', 'application/x-www-form-urlencoded', '', null, null, async function(sender_item) {
      item = sender_item;
  }.bind(this), async function(sender_item) {
      item = sender_item;
  }.bind(this));
}
