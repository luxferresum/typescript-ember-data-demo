import Ember from 'ember';

const Foo = Ember.Object.extend({
  name: "Hallo"
});

type Foo = typeof Foo.prototype;
export default Foo;