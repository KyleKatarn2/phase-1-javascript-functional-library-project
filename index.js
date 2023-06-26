function myEach(collection, callback) {
    let test;
    if (!Array.isArray(collection)) {
        test = Object.values(collection);
    } else {
        test = collection;
    }
    let newCollection = [];
    for (let i = 0; i < test.length; i++) {
        newCollection.push(callback(test[i]));
    }
    return collection;
}

function myMap(collection, callback) {
    let test;
    if (!Array.isArray(collection)) {
        test = Object.values(collection);
    } else {
        test = collection;
    }
    let newCollection = [];
    for (let i = 0; i < test.length; i++) {
        newCollection.push(callback(test[i]));
    }
    return newCollection;
}

function myReduce(collection, callback, acc) {
    let test;
    if (!Array.isArray(collection)) {
        test = Object.values(collection);
    } else {
        test = collection;
    }
    if (acc === undefined) {
        acc = test[0];
        for (let i = 1; i < test.length; i++) {
            acc = callback(acc, test[i], collection)
        }
    } else {
        for (let i = 0; i < test.length; i++) {
            acc = callback(acc, test[i], collection)
        }
    }

    return acc;
}

function myFind(collection, predicate) {
    let test;
    if (!Array.isArray(collection)) {
        test = Object.values(collection);
    } else {
        test = collection;
    }

    let find;
    for (let i = 0; i < test.length; i++) {
        if (predicate(test[i]) === true) {
            find = test[i];
            break;
        }
    }
    return find;
}

function myFilter(collection, predicate) {
    let test;
    if (!Array.isArray(collection)) {
        test = Object.values(collection);
    } else {
        test = collection;
    }

    let filter = [];
    for (let i = 0; i < test.length; i++) {
        if (predicate(test[i]) === true) {
            filter.push(test[i]);
        }
    }
    return filter;
}

function mySize(collection) {
    let test;
    if (!Array.isArray(collection)) {
        test = Object.values(collection);
    } else {
        test = collection;
    }

    return test.length;
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        let test = [...array.slice(0, n)];
        return test;
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length-1];
    } else {
        let test = [...array.slice(-n)];
        return test;
    }
}

function myKeys(object) {
    let array = [];
    for(let key in object) {
        array.push(key);
    }
    return array;
}

function myValues(object) {
    let array = [];
    for(let values in object) {
        array.push(object[values]);
    }
    return array;
    
}