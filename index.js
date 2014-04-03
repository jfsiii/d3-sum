(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.sum = function(array, f) {
            var s = 0, n = array.length, a, i = -1;
            if (arguments.length === 1) {
                while (++i < n) if (!isNaN(a = +array[i])) s += a;
            } else {
                while (++i < n) if (!isNaN(a = +f.call(array, array[i], i))) s += a;
            }
            return s;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();