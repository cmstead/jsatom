JSAtom
======

An atom implementation in Javascript.

JSAtom is an implementation of Clojure's atoms. One of the most important things to note about
atoms is they are specifically a mutable object handled with a mutator function.  Any mutation is applied
to the atom only if the atom data hasn't changed during the execution of the mutator function.

To Dos

##Atom module

- [x] Create core atom module (atom.build)
- [x] Build swap function (function swap)
- [ ] Implement watchers (function setWatcher)
- [ ] Return unwatch function (return from setWatcher)
- [ ] Handle assigned validator (function setValidator)
- [x] Retrieve raw value (function deref)
- [x] Compare old value and set new value (ensures old value value is still the current value and sets value)
- [ ] Fire watcher events on atom
- [ ] Remove watcher

##JFP module extension

All of the collowing functions can/will have side effects

- [x] atom (value)
- [x] compareAndSet (atom, oldValue, newValue) (can fail)
- [x] deref (atom, fn)
- [ ] setValidator (atom, fn)
- [ ] setWatcher (atom, fn)
- [ ] removeWatcher(atom, watcherId)
- [x] swap (atom, fn)
