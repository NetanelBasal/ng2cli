'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ModuleTpl
 */

var ModuleTpl =
/**
 *
 * @param name - module name
 */
function ModuleTpl(name) {
  _classCallCheck(this, ModuleTpl);

  this.type = 'module';
  this.name = name;
  this.isDir = true;
};

exports.default = ModuleTpl;