'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SpipeTpl
 * structural pipe
 */

var SpipeTpl =
/**
 *
 * @param name - stateful pipe name
 */
function SpipeTpl(name) {
  _classCallCheck(this, SpipeTpl);

  this.type = 'stateful.pipe';
  this.name = name;
};

exports.default = SpipeTpl;