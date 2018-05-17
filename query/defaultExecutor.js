"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var abstract_query_builder_1 = require("abstract-query-builder");
var defaultExecutor = function (entityName, outerPrototype, innerPrototypes) {
    return function (selection, selectionArgs, sortOrderLimit) {
        return new Promise(function (resolve) {
            return react_native_1.NativeModules.EgaisModule.query(entityName, selection, selectionArgs, sortOrderLimit, abstract_query_builder_1.resultReader(resolve, outerPrototype, innerPrototypes));
        });
    };
};
exports.default = defaultExecutor;
