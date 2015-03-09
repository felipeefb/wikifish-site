"use strict";

var wfApp = angular.module("wfApp.factories", []);

wfApp.factory("MultiTransclude", function () {
    return {
        transclude: function (elem, transcludeFn) {
            transcludeFn(function (clone) {

                angular.forEach(clone, function (cloneEl) {
                    // get desired target ID
                    var tId = cloneEl.attributes["transclude-to"].value;

                    // find target element with that ID
                    var target = elem.find("[transclude-id='" + tId + "']");

                    // append element to target
                    if (target.length) {
                        target.append(cloneEl);
                    } else {
                        cloneEl.remove();
                        throw new Error("Target not found. Please specify the correct transclude-to attribute.");
                    }
                });
            });
        }
    };
});