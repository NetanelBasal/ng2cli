'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PipeTpl = require('./templates/PipeTpl');

var _PipeTpl2 = _interopRequireDefault(_PipeTpl);

var _ComponentTpl = require('./templates/ComponentTpl');

var _ComponentTpl2 = _interopRequireDefault(_ComponentTpl);

var _DirectiveTpl = require('./templates/DirectiveTpl');

var _DirectiveTpl2 = _interopRequireDefault(_DirectiveTpl);

var _ServiceTpl = require('./templates/ServiceTpl');

var _ServiceTpl2 = _interopRequireDefault(_ServiceTpl);

var _SdirectiveTpl = require('./templates/SdirectiveTpl');

var _SdirectiveTpl2 = _interopRequireDefault(_SdirectiveTpl);

var _SpipeTpl = require('./templates/SpipeTpl');

var _SpipeTpl2 = _interopRequireDefault(_SpipeTpl);

var _TemplateGenerator = require('./TemplateGenerator');

var _TemplateGenerator2 = _interopRequireDefault(_TemplateGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TemplateFactory
 */

var TemplateFactory = (function () {
  function TemplateFactory() {
    _classCallCheck(this, TemplateFactory);
  }

  _createClass(TemplateFactory, null, [{
    key: 'createTemplateFor',

    /**
     * Factory to generate the templates
     * @param cli
     */
    value: function createTemplateFor(cli) {
      /**
       * Generate Angular 2 pipe
       */
      if (cli.pipe) {
        return new _TemplateGenerator2.default(new _PipeTpl2.default(cli.pipe));
      }
      /**
       * Generate Angular 2 stateful pipe
       */
      if (cli.sp) {
        return new _TemplateGenerator2.default(new _SpipeTpl2.default(cli.sp));
      }
      /**
       * Generate Angular 2 component
       */
      if (cli.component) {
        return new _TemplateGenerator2.default(new _ComponentTpl2.default(cli.component));
      }

      /**
       * Generate Angular 2 directive
       */
      if (cli.directive) {
        return new _TemplateGenerator2.default(new _DirectiveTpl2.default(cli.directive));
      }

      /**
       * Generate Angular 2 structural directive
       */
      if (cli.sd) {
        return new _TemplateGenerator2.default(new _SdirectiveTpl2.default(cli.sd));
      }

      /**
       * Generate Angular 2 service
       */
      if (cli.service) {
        return new _TemplateGenerator2.default(new _ServiceTpl2.default(cli.service));
      }
    }
  }]);

  return TemplateFactory;
})();

exports.default = TemplateFactory;