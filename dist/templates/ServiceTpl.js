'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ServiceTpl
 */

var ServiceTpl =
/**
 * @param name
 */
function ServiceTpl(name) {
  _classCallCheck(this, ServiceTpl);

  this.type = 'service';
  this.name = name;
  this.isDir = true;
};

exports.default = ServiceTpl;