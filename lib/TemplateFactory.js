import PipeTpl from './templates/PipeTpl';
import ComponentTpl from './templates/ComponentTpl';
import DirectiveTpl from './templates/DirectiveTpl';
import ServiceTpl from './templates/ServiceTpl';
import SdirectiveTpl from './templates/SdirectiveTpl';
import SpipeTpl from './templates/SpipeTpl';
import ActionsTpl from './templates/ActionsTpl';
import ReducerTpl from './templates/ReducerTpl';
import ModuleTpl from './templates/ModuleTpl';
import TemplateGenerator from './TemplateGenerator';

/**
 * TemplateFactory
 */
class TemplateFactory {

  /**
   * Factory to generate the templates
   * @param cli options
   */
  static createTemplateFor( cli ) {
    /**
     * Generate Angular 2 module
     */
    if( cli.module ) {
      return new TemplateGenerator(new ModuleTpl(cli.module));
    }
    /**
     * Generate Angular 2 pipe
     */
    if( cli.pipe ) {
      return new TemplateGenerator(new PipeTpl(cli.pipe));
    }
    /**
     * Generate Angular 2 stateful pipe
     */
    if( cli.sp ) {
      return new TemplateGenerator(new SpipeTpl(cli.sp));
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
    if( cli.sd ) {
      return new TemplateGenerator(new SdirectiveTpl(cli.sd));
    }

    /**
     * Generate Angular 2 service
     */
    if( cli.service ) {
      return new TemplateGenerator(new ServiceTpl(cli.service));
    }

    /**
     * Generate ngrx reducer + actions
     */
    if(cli.reducer) {
      return new TemplateGenerator(new ReducerTpl(cli.reducer, cli.actions));
    }

    /**
     * Generate ngrx actions
     */
    if(cli.actions) {
      return new TemplateGenerator(new ActionsTpl(cli.name, cli.actions));
    }


  }

}

export default TemplateFactory
