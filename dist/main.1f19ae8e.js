// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"students.json":[function(require,module,exports) {
module.exports = [];
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _students = _interopRequireDefault(require("./students.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var inputsInfo = {
  name: document.querySelector("#name"),
  surname: document.querySelector("#surname"),
  age: document.querySelector("#age"),
  studyCurse: document.querySelector("#studyCurse")
};
var name = inputsInfo.name,
  surname = inputsInfo.surname,
  age = inputsInfo.age,
  studyCurse = inputsInfo.studyCurse;
var btnsCourses = {
  math: document.querySelector("#btnMathAdd"),
  english: document.querySelector("#btnEnglishAdd"),
  history: document.querySelector("#btnHistoryAdd"),
  science: document.querySelector("#btnScienceAdd")
};
var btnAdd = document.querySelector("#btn");
var table = document.querySelector("#table");
var btnDelete = document.querySelector("#btnDelete");
var inputNumb = document.querySelector("#deleteNumb");
var changeNumb = document.querySelector("#changeNumb");
var btnChange = document.querySelector("#btnChange");
btnAdd.addEventListener("click", addStudnet);
btnDelete.addEventListener("click", deleteStudent);
btnChange.addEventListener("click", changeStudent);
var courses = [];
function addStudnet() {
  var sObject = {
    name: name.value,
    surname: surname.value,
    age: age.value,
    studyCurse: studyCurse.value,
    courses: courses,
    number: _students.default.length + 1
  };
  _students.default.push(JSON.stringify(sObject));
  courses = [];
  var newStr = "<tr>\n    <th>".concat(sObject.name, "</th>\n    <th>").concat(sObject.surname, "</th> \n    <th>").concat(sObject.age, "</th>\n    <th>").concat(sObject.studyCurse, "</th>\n    <th>").concat(sObject.courses, "</th>\n    <th>").concat(_students.default.length, "</th>\n    </tr>");
  table.insertAdjacentHTML("beforeend", newStr);
}
function deleteStudent() {
  var newStudents = _students.default.splice(_students.default.indexOf(_students.default.find(function (i) {
    return JSON.parse(i).number === Number.parseInt(inputNumb.value);
  })), 1);
  table.innerHTML = " ";
  table.innerHTML = "<tr>\n    <th>\u0406\u043C'\u044F</th>\n    <th>\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435</th>\n    <th>\u0412\u0456\u043A</th>\n    <th>Kypc</th>\n    <th>\u041A\u0443\u0440\u0441\u0438</th>\n    <th>\u041D\u043E\u043C\u0435\u0440</th></tr";
  var lengthCount = 0;
  var _iterator = _createForOfIteratorHelper(_students.default),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      lengthCount += 1;
      var newStr = "<tr>\n        <th>".concat(JSON.parse(i).name, "</th>\n        <th>").concat(JSON.parse(i).surname, "</th> \n        <th>").concat(JSON.parse(i).age, "</th>\n        <th>").concat(JSON.parse(i).studyCurse, "</th>\n        <th>").concat(JSON.parse(i).courses, "</th>\n        <th>").concat(lengthCount, "</th>\n        </tr>");
      table.insertAdjacentHTML("beforeend", newStr);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// =============================================

var inputsInfC = {
  nameC: document.querySelector("#nameC"),
  surnameC: document.querySelector("#surnameC"),
  ageC: document.querySelector("#ageC"),
  studyCurseC: document.querySelector("#studyCurseC")
};
var nameC = inputsInfC.nameC,
  surnameC = inputsInfC.surnameC,
  ageC = inputsInfC.ageC,
  studyCurseC = inputsInfC.studyCurseC;
var btnsCoursesC = {
  mathC: document.querySelector("#btnMathAddC"),
  englishC: document.querySelector("#btnEnglishAddC"),
  historyC: document.querySelector("#btnHistoryAddC"),
  scienceC: document.querySelector("#btnScienceAddC")
};
function changeStudent() {
  var newStudent = _students.default.find(function (i) {
    return JSON.parse(i).number === Number.parseInt(changeNumb.value);
  });
  _students.default.splice(_students.default.indexOf(_students.default.find(function (i) {
    return JSON.parse(i).number === Number.parseInt(inputNumb.value);
  })), 1);
  table.innerHTML = " ";
  table.innerHTML = "<tr>\n    <th>\u0406\u043C'\u044F</th>\n    <th>\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435</th>\n    <th>\u0412\u0456\u043A</th>\n    <th>\u041A\u0443\u0440\u0441</th>\n    <th>\u041A\u0443\u0440\u0441\u0438</th>\n    <th>\u041D\u043E\u043C\u0435\u0440</th></tr>";
  var lengthCount = 0;
  var parsedNewStudent = JSON.parse(newStudent);
  parsedNewStudent.name = nameC.value;
  parsedNewStudent.surname = surnameC.value;
  parsedNewStudent.age = ageC.value;
  parsedNewStudent.studyCurse = studyCurseC.value;
  parsedNewStudent.courses = courses;
  console.log(parsedNewStudent);
  var stringify = JSON.stringify(parsedNewStudent);
  _students.default.push(stringify);
  var _iterator2 = _createForOfIteratorHelper(_students.default),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var i = _step2.value;
      lengthCount += 1;
      var newStr = "<tr>\n        <th>".concat(JSON.parse(i).name, "</th>\n        <th>").concat(JSON.parse(i).surname, "</th> \n        <th>").concat(JSON.parse(i).age, "</th>\n        <th>").concat(JSON.parse(i).studyCurse, "</th>\n        <th>").concat(JSON.parse(i).courses, "</th>\n        <th>").concat(lengthCount, "</th>\n        </tr>");
      table.insertAdjacentHTML("beforeend", newStr);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  courses = [];
}

// =======================btn=========================

btnsCourses.math.addEventListener("click", function () {
  if (courses.includes("Math")) {
    alert("Ти вже записаний/а на цей курс!");
  } else {
    courses.push("Math");
  }
});
btnsCourses.english.addEventListener("click", function () {
  if (courses.includes("English")) {
    alert("Ти вже записаний/а на цей курс!");
  } else {
    courses.push("English");
  }
});
btnsCourses.history.addEventListener("click", function () {
  if (courses.includes("History")) {
    alert("Ти вже записаний/а на цей курс!");
  } else {
    courses.push("History");
  }
});
btnsCourses.science.addEventListener("click", function () {
  if (courses.includes("Science")) {
    alert("Ти вже записаний/а на цей курс!");
  } else {
    courses.push("Science");
  }
});

// +++++++++++++++++++++++++++

btnsCoursesC.mathC.addEventListener("click", function () {
  if (courses.includes("Math")) {
    alert("Ти вже записаний/а на цей курс!");
  } else {
    courses.push("Math");
    console.log(courses);
  }
});
btnsCoursesC.englishC.addEventListener("click", function () {
  if (courses.includes("English")) {
    alert("Ти вже записаний/а на цей курс!");
  } else {
    courses.push("English");
  }
});
btnsCoursesC.historyC.addEventListener("click", function () {
  if (courses.includes("History")) {
    alert("Ти вже записаний/а на цей курс!");
  } else {
    courses.push("History");
  }
});
btnsCoursesC.scienceC.addEventListener("click", function () {
  if (courses.includes("Science")) {
    alert("Ти вже записаний/а на цей курс!");
  } else {
    courses.push("Science");
  }
});
},{"./students.json":"students.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61948" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map