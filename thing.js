(function (window, document, undefined) {


    var Thing = function (o) {
        return new t(o);
    };

    var t = function (o) {
            this.toObject = function () {
                return o;
            }
        },
        i = new Function(),
        ins = new i();

    i.prototype.isArray = function (o) {
        return toString.call(o) === "[object Array]";
    };

    i.prototype.allTrue = function (arr) {
        for (var i in arr)
            if (!arr[i]) return false;
        return true;
    };

    i.prototype.contains = function (arr, elem) {

        for (var i in arr) {
            if (arr[i] === elem) return true;
        }
        return false;

    };

    i.prototype.hasOwn = function (o, key) {
        return o.hasOwnProperty(key);
    }

    t.prototype.loop = function (fn) {
        var obj = this.toObject();

        for (var key in obj) {
            if (ins.hasOwn(obj, key))
                fn.call(obj, key, obj[key]);
        }
        return this;
    };

    t.prototype.keys = function () {
        var arr = [];
        this.loop(function (k, v) {
            arr.push(k);
        });
        return arr;
    };

    t.prototype.values = function () {
        var arr = [];
        this.loop(function (k, v) {
            arr.push(v);
        });
        return arr;
    };

    t.prototype.get = function (keys) {

        if (!ins.isArray(keys)) keys = new Array(keys);

        var arr = [];

        this.loop(function (k, v) {
            if (ins.contains(keys, k)) arr.push(v);
        });

        return arr;
    };

    t.prototype.set = function (o) {

        for (var key in o) {
            this.toObject()[key] = o[key];
        }
        return this;

    };

    t.prototype.add = function (k, v) {
        this.toObject()[k] = v;
        return this;
    };

    t.prototype.containsKey = function (key) {
        return ins.contains(this.keys(), key);
    };

    t.prototype.clone = function () {
        var o = {};
        this.loop(function (k, v) {
            o[k] = v;
        });
        return Thing(o);
    };


    window.Thing = (function (thing) {

        thing(ins.__proto__).loop(function (k, v) {
            th[k] = v;
        });

        return thing;
    })(Thing);


})(window, document);
