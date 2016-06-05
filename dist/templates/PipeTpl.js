'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * PipeTpl
 */

var PipeTpl =
/**
 *
 * @param name - pipe name
 */
function PipeTpl(name) {
  _classCallCheck(this, PipeTpl);

  this.type = 'pipe';
  this.name = name;
  this.isDir = true;
};

exports.default = PipeTpl;