/**
 * ServiceTpl
 */
class ServiceTpl {
  /**
   * @param name
   */
  constructor( name ) {
    this.type = 'service';
    this.name = name;
    this.isDir = true;
  }
}

export default ServiceTpl
