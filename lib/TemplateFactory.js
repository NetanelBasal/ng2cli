import PipeTpl from './templates/PipeTpl';
import ComponentTpl from './templates/ComponentTpl';
import DirectiveTpl from './templates/DirectiveTpl';
import ServiceTpl from './templates/ServiceTpl';
import SdirectiveTpl from './templates/SdirectiveTpl';
import SpipeTpl from './templates/SpipeTpl';
import TemplateGenerator from './TemplateGenerator';

/**
 * TemplateFactory
 */
class TemplateFactory {

  /**
   * Factory to generate the templates
   * @param cli
   */
  static createTemplateFor( cli ) {
    /**
     * Generate Angular 2 pipe
     */
    if( cli.pipe ) {
      return new TemplateGenerator(new PipeTpl(cli.pipe));
    }
    /**
     * Generate Angular 2 stateful pipe
     */
    if( cli.spipe ) {
      return new TemplateGenerator(new SpipeTpl(cli.spipe));
    }
    /**
     * Generate Angular 2 component
     */
    if( cli.component ) {
      return new TemplateGenerator(new ComponentTpl(cli.component));
    }

    /**
     * Generate Angular 2 directive
     */
    if( cli.directive ) {
      return new TemplateGenerator(new DirectiveTpl(cli.directive));
    }

    /**
     * Generate Angular 2 structural directive
     */
    if( cli.sdirective ) {
      return new TemplateGenerator(new SdirectiveTpl(cli.sdirective));
    }

    /**
     * Generate Angular 2 service
     */
    if( cli.service ) {
      return new TemplateGenerator(new ServiceTpl(cli.service));
    }
  }

}

export default TemplateFactory