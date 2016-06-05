/**
 * ReducerTpl
 */
class ReducerTpl {
  /**
   * @param name
   * @param actions
   */
  constructor( name , actions) {
    this.type = 'reducer';
    this.name = name;
    this.isDir = true;
    this.actions = actions;
  }
}

export default ReducerTpl
