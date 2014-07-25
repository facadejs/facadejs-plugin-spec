/*globals define, Facade */

(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd !== undefined) {

        define(['facade'], factory);

    } else {

        factory(Facade);

    }

}(this, function (Facade) {

    'use strict';

    var methods = {

        set: function (type, color) {

            if (type === 'fillStyle') {

                this.setOptions({ fillStyle: color });

            } else if (type === 'strokeStyle') {

                this.setOptions({ strokeStyle: color });

            }

            return this;

        },

        randomize: function (type) {

            var color = 'hsl(' + Math.round(Math.random() * 100) + ', 100%, 50%)';

            methods.set.call(this, type, color);

            return this;

        }

    };

    Facade.Entity.prototype.Color = function (method) {

        if (!methods[method]) {

            console.error(method + ' is not a method specified in this plugin.');

        }

        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

    };

    return Facade;

}));
