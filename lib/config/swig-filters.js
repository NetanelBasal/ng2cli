import _ from 'lodash';

export default ( swig ) => {
  /* ===============
   Swig filters
   =============== */
  swig.setFilter('kebabCase', function( input ) {
    return _.kebabCase(input);
  });

  swig.setFilter('camelCase', function( input ) {
    return _.capitalize(_.camelCase(input));
  });
}