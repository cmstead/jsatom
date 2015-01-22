(function(j){

    function atomCompareAndSet(valueObj, oldValue, newValue){
        var valuesMatch = valueObj.value === oldValue;

        valueObj.value = (valuesMatch) ? newValue : valueObj.value;

        return valuesMatch;
    }

    function atomDeref(valueObj){
        return valueObj.value;
    }

    function atomSwap(valueObj, callback){
        valueObj.value = callback(valueObj.value);
    }

    function atom(value){
        var valueObj = {
            value: value
        };

        return {
            compareAndSet: j.partial(atomCompareAndSet, valueObj),
            deref: j.partial(atomDeref, valueObj),
            swap: j.partial(atomSwap, valueObj)
        };
    }

    function compareAndSet(atom, oldValue, newValue){
        return atom.compareAndSet(oldValue, newValue);
    }

    function deref(atom){
        return atom.deref();
    }

    //This has side effects!
    function swap(atom, callback){
        atom.swap(callback);
    }

    j.atom = atom;
    j.compareAndSet = compareAndSet;
    j.deref = deref;
    j.swap = swap;

})(jfp);