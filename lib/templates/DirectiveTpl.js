/**
 * DirectiveTpl
 */
class DirectiveTpl {
  /**
   *
   * @param name - directive name
   */
  constructor( name ) {
    this.type = 'directive';
    this.name = name;
    this.isDir = true;
  }
}

export default DirectiveTpl
