/**
 * Created by hfwu on 21/2/17.
 */
'use strict';
var Storage = require('dom-storage');

module.exports = new Storage('./db.json', {strict: false, ws: '  '});