/**
 * PipeTpl
 */
class PipeTpl {
  /**
   *
   * @param name - pipe name
   */
  constructor( name ) {
    this.type = 'pipe';
    this.name = name;
    this.isDir = true;
  }
}

export default PipeTpl
