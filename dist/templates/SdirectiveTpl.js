'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SdirectiveTpl
 */

var SdirectiveTpl =
/**
 * @param name
 */
function SdirectiveTpl(name) {
  _classCallCheck(this, SdirectiveTpl);

  this.type = 'structural.directive';
  this.name = name;
  this.isDir = true;
};

exports.default = SdirectiveTpl;