var inflection = require( 'inflection' );

var words=[
  'cactus',
  'octopus',
  'person',
  'cat',
  'sheep',
  'moose',
  'dog',
  'fish',
  'bunny',
  'mouse'
];

words.forEach(function(word){
  console.log('1 ' + word);
  console.log('...multiple '+inflection.pluralize(word));
  console.log(' ')
});