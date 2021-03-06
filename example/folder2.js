"use strict";
var path = require('path');
console.log(path.dirname(__dirname))

var logger = require('..').console(
    {
        format : "{{timestamp}} <{{title}}> {{folder}}/{{file}}:{{line}} ({{method}}) {{message}}",
        rootDir: path.dirname(__dirname)
    }
);
logger.log('hello');
logger.trace('hello', 'world');
logger.debug('hello %s',  'world', 123);
logger.info('hello %s %d',  'world', 123, {foo:'bar'});
logger.warn('hello %s %d %j', 'world', 123, {foo:'bar'});
logger.error('hello %s %d %j', 'world', 123, {foo:'bar'}, [1, 2, 3, 4], Object);

eval("logger.log('hello');");

