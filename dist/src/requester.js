"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

/**
 * Module dependencies.
 */

/**
 * Export Requester class.
 */
class Requester {
  constructor({
    methods = {},
    version
  } = {}) {
    this.methods = methods;
    this.version = version;
  }
  /**
  * Prepare rpc request.
  */


  prepare({
    method,
    parameters = [],
    suffix
  }) {
    method = method.toLowerCase();

    if (this.version && !(0, _lodash.get)(this.methods[method], 'supported', false)) {
      throw new Error(`Method "${method}" is not supported by version "${this.version}"`);
    }

    return {
      id: `${Date.now()}${suffix !== undefined ? `-${suffix}` : ''}`,
      method,
      params: parameters
    };
  }

}

exports.default = Requester;