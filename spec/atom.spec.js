(function(){
    'use strict';

    describe('atom', function(){

        describe('j.atom', function(){

            it('should return an object', function(){
                expect(typeof j.atom()).toBe('object');
            });

            it('should initialize with a value', function(){
                var testAtom = j.atom('my test value');

                expect(j.deref(testAtom)).toBe('my test value');
            });

        });

        describe('j.deref', function(){

            var testAtom;

            beforeEach(function(){
                testAtom = j.atom('test');
            });

            it('should return the internal value of the atom', function(){
                expect(j.deref(testAtom)).toBe('test');
            });

        });

        describe('j.swap', function(){

            var testAtom;

            beforeEach(function(){
                testAtom = j.atom('A test value');
            });

            it('should update the internal value of the atom', function(){
                j.swap(testAtom, function(value){
                    return 'Hooray!';
                });

                expect(j.deref(testAtom)).toBe('Hooray!');
            });

        });

        describe('j.compareAndSet', function(){

            var testAtom;

            beforeEach(function(){
                testAtom = j.atom('testValue');
            });

            it('should return true if value is successfully set', function(){
                expect(j.compareAndSet(testAtom, 'testValue', 'newValue')).toBe(true);
            });

            it('should return false if value old value does not match and atom is not updated', function(){
                expect(j.compareAndSet(testAtom, 'foo', 'newValue')).toBe(false);
            });

        });

    });

})();