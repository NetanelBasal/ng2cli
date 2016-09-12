/**
 * ModuleTpl
 */
class ModuleTpl {
  /**
   *
   * @param name - module name
   */
  constructor( name ) {
    this.type = 'module';
    this.name = name;
    this.isDir = true;
  }
}

export default ModuleTpl
