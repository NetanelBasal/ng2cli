'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ActionsTpl
 */

var ActionsTpl =
/**
 * @param name
 * @param actions
 */
function ActionsTpl(name, actions) {
  _classCallCheck(this, ActionsTpl);

  this.type = 'actions';
  this.name = name;
  this.actions = actions;
};

exports.default = ActionsTpl;