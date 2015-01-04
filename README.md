JSAtom
======

An atom implementation in common JS.

JSAtom is an implementation of Clojure's atoms. One of the most important things to note about
atoms is they are specifically a mutable object handled with a mutator function.  Any mutation is applied
to the atom only if the atom data hasn't changed during the execution of the mutator function.

To Dos

- [ ] Create core atom module (atom.build)
- [ ] Build swap function (function swap)
- [ ] Implement watchers (function setWatcher)
- [ ] Return unwatch function (return from setWatcher)
- [ ] Handle assigned validator (function setValidator)
