(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["vendor"],{

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hmr/hmr-update.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hot = __webpack_require__("../node_modules/nativescript-dev-webpack/hot.js");
const file_system_1 = __webpack_require__("tns-core-modules/file-system");
function hmrUpdate() {
    const applicationFiles = file_system_1.knownFolders.currentApp();
    const latestHash = __webpack_require__["h"]();
    return hot(latestHash, filename => applicationFiles.getFile(filename));
}
exports.hmrUpdate = hmrUpdate;
//# sourceMappingURL=hmr-update.js.map

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hmr/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hmr_update_1 = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/hmr-update.js");
exports.hmrUpdate = hmr_update_1.hmrUpdate;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hot.js":
/***/ (function(module, exports, __webpack_require__) {

const hmrPrefix = 'HMR:';
const log = {
    info: (message) => console.info(`${hmrPrefix} ${message}`),
    warn: (message) => console.warn(`${hmrPrefix} ${message}`),
    error: (message) => console.error(`${hmrPrefix} ${message}`),
};
const refresh = 'Application needs to be restarted in order to apply the changes.';
const hotOptions = {
    ignoreUnaccepted: false,
    ignoreDeclined: false,
    ignoreErrored: false,
    onUnaccepted(data) {
        const chain = [].concat(data.chain);
        const last = chain[chain.length - 1];

        if (last === 0) {
            chain.pop();
        }

        log.warn(`Ignored an update to unaccepted module: `);
        chain.forEach(mod => log.warn(`         ➭ ${mod}`));
    },
    onDeclined(data) {
        log.warn(`Ignored an update to declined module:`);
        data.chain.forEach(mod => log.warn(`         ➭ ${mod}`));
    },
    onErrored(data) {
        log.warn(
            `Ignored an error while updating module ${data.moduleId} <${data.type}>`
        );
        log.warn(data.error);
    },
};

let nextHash;
let currentHash;

function upToDate() {
    return nextHash.indexOf(__webpack_require__.h()) >= 0;
}

function result(modules, appliedModules) {
    const unaccepted = modules.filter(
        (moduleId) => appliedModules && appliedModules.indexOf(moduleId) < 0
    );

    if (unaccepted.length > 0) {
        log.warn('The following modules could not be updated:');

        for (const moduleId of unaccepted) {
            log.warn(`          ⦻ ${moduleId}`);
        }
    }

    if (!(appliedModules || []).length) {
        log.info('No Modules Updated.');
    } else {
        log.info('The following modules were updated:');

        for (const moduleId of appliedModules) {
            log.info(`         ↻ ${moduleId}`);
        }

        const numberIds = appliedModules.every(
            (moduleId) => typeof moduleId === 'number'
        );
        if (numberIds) {
            log.info(
                'Please consider using the NamedModulesPlugin for module names.'
            );
        }
    }
}

function check(options) {
    return module.hot
        .check()
        .then((modules) => {
            if (!modules) {
                log.warn(
                    `Cannot find update. ${refresh}`
                );
                return null;
            }

            return module.hot
                .apply(hotOptions)
                .then((appliedModules) => {
                    let nextCheck;
                    if (!upToDate()) {
                        nextCheck = check(options);
                    }

                    result(modules, appliedModules);

                    if (upToDate()) {
                        // Do not modify message - CLI depends on this exact content to determine hmr operation status.
                        log.info(`Successfully applied update with hmr hash ${currentHash}. App is up to date.`);
                    }

                    return nextCheck || null;
                })
                .catch((err) => {
                    const status = module.hot.status();
                    if (['abort', 'fail'].indexOf(status) >= 0) {
                        // Do not modify message - CLI depends on this exact content to determine hmr operation status.
                        log.error(`Cannot apply update with hmr hash ${currentHash}.`);
                        log.error(err.message || err.stack);
                    } else {
                        log.error(`Update failed: ${err.message || err.stack}`);
                    }
                });
        })
        .catch((err) => {
            const status = module.hot.status();
            if (['abort', 'fail'].indexOf(status) >= 0) {
                log.error(`Cannot check for update. ${refresh}`);
                log.error(err.message || err.stack);
            } else {
                log.error(`Update check failed: ${err.message || err.stack}`);
            }
        });
}

if (true) {
    log.info('Hot Module Replacement Enabled. Waiting for signal.');
} else {}

function update(latestHash, options) {
    nextHash = latestHash;
    if (!upToDate()) {
        const status = module.hot.status();

        if (status === 'idle') {
            //Do not modify message - CLI depends on this exact content to determine hmr operation status.
            log.info(`Checking for updates to the bundle with hmr hash ${currentHash}.`);
            return check(options);
        } else if (['abort', 'fail'].indexOf(status) >= 0) {
            log.warn(
                `Cannot apply update. A previous update ${status}ed. ${refresh}`
            );
        }
    }
};

function getNextHash(hash, getFileContent) {
    const file = getFileContent(`${hash}.hot-update.json`);
    return file.readText().then(hotUpdateContent => {
        if (hotUpdateContent) {
            const manifest = JSON.parse(hotUpdateContent);
            const newHash = manifest.h;
            return getNextHash(newHash, getFileContent);
        } else {
            return Promise.resolve(hash);
        }
    }).catch(error => Promise.reject(error));
}

module.exports = function checkState(initialHash, getFileContent) {
    currentHash = initialHash;
    return getNextHash(initialHash, getFileContent).then(nextHash => {
        if (nextHash != initialHash) {
            return update(nextHash, {});
        }
    })
}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css-angular.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const loadCss = __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css.js");

module.exports = function() {
    loadCss(function() {
        global.registerModule("./app.css", () => __webpack_require__("./app.scss"));
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (loadModuleFn) {
    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    loadModuleFn();

    application.loadAppCss();
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXIvaG1yLXVwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG90LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLWFuZ3VsYXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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ZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBob3QgPSByZXF1aXJlKFwiLi4vaG90XCIpO1xuY29uc3QgZmlsZV9zeXN0ZW1fMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpO1xuZnVuY3Rpb24gaG1yVXBkYXRlKCkge1xuICAgIGNvbnN0IGFwcGxpY2F0aW9uRmlsZXMgPSBmaWxlX3N5c3RlbV8xLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgY29uc3QgbGF0ZXN0SGFzaCA9IF9fd2VicGFja19yZXF1aXJlX19bXCJoXCJdKCk7XG4gICAgcmV0dXJuIGhvdChsYXRlc3RIYXNoLCBmaWxlbmFtZSA9PiBhcHBsaWNhdGlvbkZpbGVzLmdldEZpbGUoZmlsZW5hbWUpKTtcbn1cbmV4cG9ydHMuaG1yVXBkYXRlID0gaG1yVXBkYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG1yLXVwZGF0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBobXJfdXBkYXRlXzEgPSByZXF1aXJlKFwiLi9obXItdXBkYXRlXCIpO1xuZXhwb3J0cy5obXJVcGRhdGUgPSBobXJfdXBkYXRlXzEuaG1yVXBkYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiY29uc3QgaG1yUHJlZml4ID0gJ0hNUjonO1xuY29uc3QgbG9nID0ge1xuICAgIGluZm86IChtZXNzYWdlKSA9PiBjb25zb2xlLmluZm8oYCR7aG1yUHJlZml4fSAke21lc3NhZ2V9YCksXG4gICAgd2FybjogKG1lc3NhZ2UpID0+IGNvbnNvbGUud2FybihgJHtobXJQcmVmaXh9ICR7bWVzc2FnZX1gKSxcbiAgICBlcnJvcjogKG1lc3NhZ2UpID0+IGNvbnNvbGUuZXJyb3IoYCR7aG1yUHJlZml4fSAke21lc3NhZ2V9YCksXG59O1xuY29uc3QgcmVmcmVzaCA9ICdBcHBsaWNhdGlvbiBuZWVkcyB0byBiZSByZXN0YXJ0ZWQgaW4gb3JkZXIgdG8gYXBwbHkgdGhlIGNoYW5nZXMuJztcbmNvbnN0IGhvdE9wdGlvbnMgPSB7XG4gICAgaWdub3JlVW5hY2NlcHRlZDogZmFsc2UsXG4gICAgaWdub3JlRGVjbGluZWQ6IGZhbHNlLFxuICAgIGlnbm9yZUVycm9yZWQ6IGZhbHNlLFxuICAgIG9uVW5hY2NlcHRlZChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gW10uY29uY2F0KGRhdGEuY2hhaW4pO1xuICAgICAgICBjb25zdCBsYXN0ID0gY2hhaW5bY2hhaW4ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGxhc3QgPT09IDApIHtcbiAgICAgICAgICAgIGNoYWluLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLndhcm4oYElnbm9yZWQgYW4gdXBkYXRlIHRvIHVuYWNjZXB0ZWQgbW9kdWxlOiBgKTtcbiAgICAgICAgY2hhaW4uZm9yRWFjaChtb2QgPT4gbG9nLndhcm4oYCAgICAgICAgIOKerSAke21vZH1gKSk7XG4gICAgfSxcbiAgICBvbkRlY2xpbmVkKGRhdGEpIHtcbiAgICAgICAgbG9nLndhcm4oYElnbm9yZWQgYW4gdXBkYXRlIHRvIGRlY2xpbmVkIG1vZHVsZTpgKTtcbiAgICAgICAgZGF0YS5jaGFpbi5mb3JFYWNoKG1vZCA9PiBsb2cud2FybihgICAgICAgICAg4p6tICR7bW9kfWApKTtcbiAgICB9LFxuICAgIG9uRXJyb3JlZChkYXRhKSB7XG4gICAgICAgIGxvZy53YXJuKFxuICAgICAgICAgICAgYElnbm9yZWQgYW4gZXJyb3Igd2hpbGUgdXBkYXRpbmcgbW9kdWxlICR7ZGF0YS5tb2R1bGVJZH0gPCR7ZGF0YS50eXBlfT5gXG4gICAgICAgICk7XG4gICAgICAgIGxvZy53YXJuKGRhdGEuZXJyb3IpO1xuICAgIH0sXG59O1xuXG5sZXQgbmV4dEhhc2g7XG5sZXQgY3VycmVudEhhc2g7XG5cbmZ1bmN0aW9uIHVwVG9EYXRlKCkge1xuICAgIHJldHVybiBuZXh0SGFzaC5pbmRleE9mKF9fd2VicGFja19oYXNoX18pID49IDA7XG59XG5cbmZ1bmN0aW9uIHJlc3VsdChtb2R1bGVzLCBhcHBsaWVkTW9kdWxlcykge1xuICAgIGNvbnN0IHVuYWNjZXB0ZWQgPSBtb2R1bGVzLmZpbHRlcihcbiAgICAgICAgKG1vZHVsZUlkKSA9PiBhcHBsaWVkTW9kdWxlcyAmJiBhcHBsaWVkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDBcbiAgICApO1xuXG4gICAgaWYgKHVuYWNjZXB0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2cud2FybignVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkIG5vdCBiZSB1cGRhdGVkOicpO1xuXG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgdW5hY2NlcHRlZCkge1xuICAgICAgICAgICAgbG9nLndhcm4oYCAgICAgICAgICDiprsgJHttb2R1bGVJZH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKGFwcGxpZWRNb2R1bGVzIHx8IFtdKS5sZW5ndGgpIHtcbiAgICAgICAgbG9nLmluZm8oJ05vIE1vZHVsZXMgVXBkYXRlZC4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2cuaW5mbygnVGhlIGZvbGxvd2luZyBtb2R1bGVzIHdlcmUgdXBkYXRlZDonKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIGFwcGxpZWRNb2R1bGVzKSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhgICAgICAgICAg4oa7ICR7bW9kdWxlSWR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBudW1iZXJJZHMgPSBhcHBsaWVkTW9kdWxlcy5ldmVyeShcbiAgICAgICAgICAgIChtb2R1bGVJZCkgPT4gdHlwZW9mIG1vZHVsZUlkID09PSAnbnVtYmVyJ1xuICAgICAgICApO1xuICAgICAgICBpZiAobnVtYmVySWRzKSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcbiAgICAgICAgICAgICAgICAnUGxlYXNlIGNvbnNpZGVyIHVzaW5nIHRoZSBOYW1lZE1vZHVsZXNQbHVnaW4gZm9yIG1vZHVsZSBuYW1lcy4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGVjayhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG1vZHVsZS5ob3RcbiAgICAgICAgLmNoZWNrKClcbiAgICAgICAgLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgICAgICAgIGlmICghbW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKFxuICAgICAgICAgICAgICAgICAgICBgQ2Fubm90IGZpbmQgdXBkYXRlLiAke3JlZnJlc2h9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuaG90XG4gICAgICAgICAgICAgICAgLmFwcGx5KGhvdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGFwcGxpZWRNb2R1bGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0Q2hlY2s7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXBUb0RhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dENoZWNrID0gY2hlY2sob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHQobW9kdWxlcywgYXBwbGllZE1vZHVsZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cFRvRGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgbW9kaWZ5IG1lc3NhZ2UgLSBDTEkgZGVwZW5kcyBvbiB0aGlzIGV4YWN0IGNvbnRlbnQgdG8gZGV0ZXJtaW5lIGhtciBvcGVyYXRpb24gc3RhdHVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oYFN1Y2Nlc3NmdWxseSBhcHBsaWVkIHVwZGF0ZSB3aXRoIGhtciBoYXNoICR7Y3VycmVudEhhc2h9LiBBcHAgaXMgdXAgdG8gZGF0ZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0Q2hlY2sgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbJ2Fib3J0JywgJ2ZhaWwnXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IG1vZGlmeSBtZXNzYWdlIC0gQ0xJIGRlcGVuZHMgb24gdGhpcyBleGFjdCBjb250ZW50IHRvIGRldGVybWluZSBobXIgb3BlcmF0aW9uIHN0YXR1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ2Fubm90IGFwcGx5IHVwZGF0ZSB3aXRoIGhtciBoYXNoICR7Y3VycmVudEhhc2h9LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGVyci5tZXNzYWdlIHx8IGVyci5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYFVwZGF0ZSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2UgfHwgZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xuICAgICAgICAgICAgaWYgKFsnYWJvcnQnLCAnZmFpbCddLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDYW5ub3QgY2hlY2sgZm9yIHVwZGF0ZS4gJHtyZWZyZXNofWApO1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIuc3RhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYFVwZGF0ZSBjaGVjayBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2UgfHwgZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBsb2cuaW5mbygnSG90IE1vZHVsZSBSZXBsYWNlbWVudCBFbmFibGVkLiBXYWl0aW5nIGZvciBzaWduYWwuJyk7XG59IGVsc2Uge1xuICAgIGxvZy5lcnJvcignSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC4nKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKGxhdGVzdEhhc2gsIG9wdGlvbnMpIHtcbiAgICBuZXh0SGFzaCA9IGxhdGVzdEhhc2g7XG4gICAgaWYgKCF1cFRvRGF0ZSgpKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XG4gICAgICAgICAgICAvL0RvIG5vdCBtb2RpZnkgbWVzc2FnZSAtIENMSSBkZXBlbmRzIG9uIHRoaXMgZXhhY3QgY29udGVudCB0byBkZXRlcm1pbmUgaG1yIG9wZXJhdGlvbiBzdGF0dXMuXG4gICAgICAgICAgICBsb2cuaW5mbyhgQ2hlY2tpbmcgZm9yIHVwZGF0ZXMgdG8gdGhlIGJ1bmRsZSB3aXRoIGhtciBoYXNoICR7Y3VycmVudEhhc2h9LmApO1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrKG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2UgaWYgKFsnYWJvcnQnLCAnZmFpbCddLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG4gICAgICAgICAgICBsb2cud2FybihcbiAgICAgICAgICAgICAgICBgQ2Fubm90IGFwcGx5IHVwZGF0ZS4gQSBwcmV2aW91cyB1cGRhdGUgJHtzdGF0dXN9ZWQuICR7cmVmcmVzaH1gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZ2V0TmV4dEhhc2goaGFzaCwgZ2V0RmlsZUNvbnRlbnQpIHtcbiAgICBjb25zdCBmaWxlID0gZ2V0RmlsZUNvbnRlbnQoYCR7aGFzaH0uaG90LXVwZGF0ZS5qc29uYCk7XG4gICAgcmV0dXJuIGZpbGUucmVhZFRleHQoKS50aGVuKGhvdFVwZGF0ZUNvbnRlbnQgPT4ge1xuICAgICAgICBpZiAoaG90VXBkYXRlQ29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgbWFuaWZlc3QgPSBKU09OLnBhcnNlKGhvdFVwZGF0ZUNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3QgbmV3SGFzaCA9IG1hbmlmZXN0Lmg7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TmV4dEhhc2gobmV3SGFzaCwgZ2V0RmlsZUNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNoKTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKGVycm9yID0+IFByb21pc2UucmVqZWN0KGVycm9yKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2hlY2tTdGF0ZShpbml0aWFsSGFzaCwgZ2V0RmlsZUNvbnRlbnQpIHtcbiAgICBjdXJyZW50SGFzaCA9IGluaXRpYWxIYXNoO1xuICAgIHJldHVybiBnZXROZXh0SGFzaChpbml0aWFsSGFzaCwgZ2V0RmlsZUNvbnRlbnQpLnRoZW4obmV4dEhhc2ggPT4ge1xuICAgICAgICBpZiAobmV4dEhhc2ggIT0gaW5pdGlhbEhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGUobmV4dEhhc2gsIHt9KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJjb25zdCBsb2FkQ3NzID0gcmVxdWlyZShcIi4vbG9hZC1hcHBsaWNhdGlvbi1jc3NcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgbG9hZENzcyhmdW5jdGlvbigpIHtcbiAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiLi9hcHAuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJ+L2FwcFwiKSk7XG4gICAgfSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsb2FkTW9kdWxlRm4pIHtcbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBsb2FkTW9kdWxlRm4oKTtcblxuICAgIGFwcGxpY2F0aW9uLmxvYWRBcHBDc3MoKTtcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=