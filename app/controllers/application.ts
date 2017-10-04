import Ember from "ember";
import Foo from "../utils/foo";

function makefoo(f : Foo) : string {
  return f.bar;
}


function makefoo2(f : typeof Foo) : string {
  return f.bar;
}

export default Ember.Controller.extend({

});
