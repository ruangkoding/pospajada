"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*jshint esversion: 8 */
var _default = {
  fetchData: function fetchData(actionUrl) {
    var data;
    return regeneratorRuntime.async(function fetchData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(actionUrl)).then(function (response) {
              return response;
            }));

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  postData: function postData(actionUrl, payload) {
    var data;
    return regeneratorRuntime.async(function postData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(actionUrl), payload).then(function (response) {
              return response;
            }));

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data.data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  getDownloadData: function getDownloadData(actionUrl) {
    var data, url;
    return regeneratorRuntime.async(function getDownloadData$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(actionUrl), {
              responseType: 'blob',
              headers: {
                'Accept': 'application/pdf'
              }
            }).then(function (response) {
              return response;
            }));

          case 2:
            data = _context3.sent;
            url = window.URL.createObjectURL(new Blob([data.data]));
            return _context3.abrupt("return", url);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  postUploadData: function postUploadData(actionUrl, payload) {
    var data;
    return regeneratorRuntime.async(function postUploadData$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(actionUrl), payload, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then(function (response) {
              return response;
            }));

          case 2:
            data = _context4.sent;
            return _context4.abrupt("return", data.data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  putData: function putData(actionUrl, payload) {
    var data;
    return regeneratorRuntime.async(function putData$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].put("".concat(actionUrl), payload).then(function (response) {
              return response;
            }));

          case 2:
            data = _context5.sent;
            return _context5.abrupt("return", data.data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  deleteData: function deleteData(actionUrl) {
    var data;
    return regeneratorRuntime.async(function deleteData$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(actionUrl)).then(function (response) {
              return response;
            }));

          case 2:
            data = _context6.sent;
            return _context6.abrupt("return", data.data);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  }
};
exports["default"] = _default;