(function (window, document, undefined) {


    var Thing = function (o) {
        return new t(o);
    },
        t = function (o) {
            this.toObject = function () {
                return o;
            }
        },
        contains = function (arr, elem) {
            var i = arr.length;

            while (i--)
                if (arr[i] === elem)
                    return true;

            return false;

        };

    t.prototype = {

        loop: function (fn) {
            var obj = this.toObject();

            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    fn.call(obj, key, obj[key]);
            }
            return this;
        },
        keys: function () {
            var arr = [];
            this.loop(function (k, v) {
                arr.push(k);
            });
            return arr;
        },
        values: function () {
            var arr = [];
            this.loop(function (k, v) {
                arr.push(v);
            });
            return arr;
        },
        get: function (keys) {

            keys = keys.match ? new Array(keys) : keys;

            var arr = [];

            this.loop(function (k, v) {
                if (contains(keys, k))
                    arr.push(v);
            });

            return arr;
        },
        set: function (o) {
            var obj = this.toObject();

            Thing(o).loop(function (k, v) {
                obj[k] = v;
            });

            return this;

        },
        add: function (k, v) {
            this.toObject()[k] = v;
            return this;
        },
        containsKey: function (key) {
            return contains(this.keys(), key);
        },
        clone: function () {
            var o = {};
            this.loop(function (k, v) {
                o[k] = v;
            });
            return Thing(o);
        }

    };

    Thing.contains = contains;

    window.Thing = Thing;

})(window, document);
