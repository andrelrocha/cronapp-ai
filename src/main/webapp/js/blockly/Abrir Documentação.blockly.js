window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.AbrirDocumentacao = window.blockly.js.blockly.AbrirDocumentacao || {};

/**
 * @function getDocumentacaoFromUrl
 *
 *
 *
 *
 * @author Andre Lucio Rocha Wanderley
 * @since 06/11/2023, 15:30:11
 *
 */
window.blockly.js.blockly.AbrirDocumentacao.getDocumentacaoFromUrlArgs = [];
window.blockly.js.blockly.AbrirDocumentacao.getDocumentacaoFromUrl = async function() {

  //
  this.cronapi.screen.openUrl('https://docs.cronapp.io/', null, 0, 0);
}
