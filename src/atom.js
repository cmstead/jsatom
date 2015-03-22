(function(j){

	function atomExecuteWatcher(value, watcher){
		if(j.isFunction(watcher)){
			watcher(value);
		}
	}

	function atomExecuteWatchers(watchers, value){
		var executeWatcher = j.partial(atomExecuteWatcher, value);

		j.each(executeWatcher, watchers);
	}

    function atomCompareAndSet(valueObj, watchers, oldValue, newValue){
        var valuesMatch = valueObj.value === oldValue;

        valueObj.value = (valuesMatch) ? newValue : valueObj.value;

		if(valuesMatch){
			atomExecuteWatchers(watchers, newValue);
		}

        return valuesMatch;
    }

    function atomDeref(valueObj){
        return valueObj.value;
    }

    function atomSwap(valueObj, watchers, callback){
		//Keep performing compare and set until success happens
		while(!atomCompareAndSet(valueObj, watchers, valueObj.value, callback(valueObj.value)));
    }

	function unwatch(watchers, index){
		watchers[index] = null;
	}

    function atomWatch(watchers, watcher){
		watchers.push(watcher);
		return j.partial(unwatch, watchers, watchers.length - 1);
    }

    function atom(value){
        var valueObj = {
			value: value
	    },
	    watchers = [];

        return {
            compareAndSet: j.partial(atomCompareAndSet, valueObj, watchers),
            deref: j.partial(atomDeref, valueObj),
            swap: j.partial(atomSwap, valueObj, watchers),
			watch: j.partial(atomWatch, watchers)
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

    function watch(atom, watcher){
		return atom.watch(watcher);
    }

    j.atom = atom;
    j.compareAndSet = compareAndSet;
    j.deref = deref;
    j.swap = swap;
    j.watch = watch;

})(jfp);
