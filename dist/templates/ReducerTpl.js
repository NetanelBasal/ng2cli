'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ReducerTpl
 */

var ReducerTpl =
/**
 * @param name
 * @param actions
 */
function ReducerTpl(name, actions) {
  _classCallCheck(this, ReducerTpl);

  this.type = 'reducer';
  this.name = name;
  this.isDir = true;
  this.actions = actions;
};

exports.default = ReducerTpl;