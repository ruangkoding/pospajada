webpackJsonp([2],{

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, setImmediate, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * CoreUI v3.3.0 (https://coreui.io)
  * Copyright 2020 creativeLabs Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (t = "undefined" != typeof globalThis ? globalThis : t || self).coreui = e();
}(this, function () {
  "use strict";

  function t(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function e(e, n, i) {
    return n && t(e.prototype, n), i && t(e, i), e;
  }

  function n(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function i(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2 ? i(Object(o), !0).forEach(function (e) {
        n(t, e, o[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }

    return t;
  }

  var r,
      s,
      a,
      l,
      c = "transitionend",
      u = function u(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      f = function f(t) {
    var e = t.getAttribute("data-target");

    if (!e || "#" === e) {
      var n = t.getAttribute("href");
      e = n && "#" !== n ? n.trim() : null;
    }

    return e;
  },
      h = function h(t) {
    var e = f(t);
    return e && document.querySelector(e) ? e : null;
  },
      d = function d(t) {
    var e = f(t);
    return e ? document.querySelector(e) : null;
  },
      p = function p(t) {
    if (!t) return 0;
    var e = window.getComputedStyle(t),
        n = e.transitionDuration,
        i = e.transitionDelay,
        o = parseFloat(n),
        r = parseFloat(i);
    return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
  },
      g = function g(t) {
    t.dispatchEvent(new Event(c));
  },
      m = function m(t) {
    return (t[0] || t).nodeType;
  },
      v = function v(t, e) {
    var n = !1,
        i = e + 5;
    t.addEventListener(c, function e() {
      n = !0, t.removeEventListener(c, e);
    }), setTimeout(function () {
      n || g(t);
    }, i);
  },
      _ = function _(t, e, n) {
    Object.keys(n).forEach(function (i) {
      var o,
          r = n[i],
          s = e[i],
          a = s && m(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
      if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".');
    });
  },
      b = function b(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var e = getComputedStyle(t),
          n = getComputedStyle(t.parentNode);
      return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility;
    }

    return !1;
  },
      y = function y() {
    return function () {};
  },
      w = function w(t) {
    return t.offsetHeight;
  },
      E = function E() {
    var t = __webpack_provided_window_dot_jQuery;
    return t && !document.body.hasAttribute("data-no-jquery") ? t : null;
  },
      L = (r = {}, s = 1, {
    set: function set(t, e, n) {
      "undefined" == typeof t.key && (t.key = {
        key: e,
        id: s
      }, s++), r[t.key.id] = n;
    },
    get: function get(t, e) {
      if (!t || "undefined" == typeof t.key) return null;
      var n = t.key;
      return n.key === e ? r[n.id] : null;
    },
    "delete": function _delete(t, e) {
      if ("undefined" != typeof t.key) {
        var n = t.key;
        n.key === e && (delete r[n.id], delete t.key);
      }
    }
  }),
      T = function T(t, e, n) {
    L.set(t, e, n);
  },
      k = function k(t, e) {
    return L.get(t, e);
  },
      O = function O(t, e) {
    L["delete"](t, e);
  },
      C = Element.prototype.querySelectorAll,
      S = Element.prototype.querySelector,
      A = (a = new CustomEvent("Bootstrap", {
    cancelable: !0
  }), (l = document.createElement("div")).addEventListener("Bootstrap", function () {
    return null;
  }), a.preventDefault(), l.dispatchEvent(a), a.defaultPrevented),
      x = /:scope\b/;

  (function () {
    var t = document.createElement("div");

    try {
      t.querySelectorAll(":scope *");
    } catch (t) {
      return !1;
    }

    return !0;
  })() || (C = function C(t) {
    if (!x.test(t)) return this.querySelectorAll(t);
    var e = Boolean(this.id);
    e || (this.id = u("scope"));
    var n = null;

    try {
      t = t.replace(x, "#" + this.id), n = this.querySelectorAll(t);
    } finally {
      e || this.removeAttribute("id");
    }

    return n;
  }, S = function S(t) {
    if (!x.test(t)) return this.querySelector(t);
    var e = C.call(this, t);
    return "undefined" != typeof e[0] ? e[0] : null;
  });
  var D = E(),
      j = /[^.]*(?=\..*)\.|.*/,
      N = /\..*/,
      I = /::\d+$/,
      P = {},
      R = 1,
      M = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      H = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

  function W(t, e) {
    return e && e + "::" + R++ || t.uidEvent || R++;
  }

  function Y(t) {
    var e = W(t);
    return t.uidEvent = e, P[e] = P[e] || {}, P[e];
  }

  function X(t, e, n) {
    void 0 === n && (n = null);

    for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
      var s = t[i[o]];
      if (s.originalHandler === e && s.delegationSelector === n) return s;
    }

    return null;
  }

  function B(t, e, n) {
    var i = "string" == typeof e,
        o = i ? n : e,
        r = t.replace(N, ""),
        s = M[r];
    return s && (r = s), H.indexOf(r) > -1 || (r = t), [i, o, r];
  }

  function U(t, e, n, i, o) {
    if ("string" == typeof e && t) {
      n || (n = i, i = null);
      var r = B(e, n, i),
          s = r[0],
          a = r[1],
          l = r[2],
          c = Y(t),
          u = c[l] || (c[l] = {}),
          f = X(u, a, s ? n : null);
      if (f) f.oneOff = f.oneOff && o;else {
        var h = W(a, e.replace(j, "")),
            d = s ? function (t, e, n) {
          return function i(o) {
            for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode) {
              for (var a = r.length; a--;) {
                if (r[a] === s) return o.delegateTarget = s, i.oneOff && Q.off(t, o.type, n), n.apply(s, [o]);
              }
            }

            return null;
          };
        }(t, n, i) : function (t, e) {
          return function n(i) {
            return i.delegateTarget = t, n.oneOff && Q.off(t, i.type, e), e.apply(t, [i]);
          };
        }(t, n);
        d.delegationSelector = s ? n : null, d.originalHandler = a, d.oneOff = o, d.uidEvent = h, u[h] = d, t.addEventListener(l, d, s);
      }
    }
  }

  function q(t, e, n, i, o) {
    var r = X(e[n], i, o);
    r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent]);
  }

  var Q = {
    on: function on(t, e, n, i) {
      U(t, e, n, i, !1);
    },
    one: function one(t, e, n, i) {
      U(t, e, n, i, !0);
    },
    off: function off(t, e, n, i) {
      if ("string" == typeof e && t) {
        var o = B(e, n, i),
            r = o[0],
            s = o[1],
            a = o[2],
            l = a !== e,
            c = Y(t),
            u = "." === e.charAt(0);

        if ("undefined" == typeof s) {
          u && Object.keys(c).forEach(function (n) {
            !function (t, e, n, i) {
              var o = e[n] || {};
              Object.keys(o).forEach(function (r) {
                if (r.indexOf(i) > -1) {
                  var s = o[r];
                  q(t, e, n, s.originalHandler, s.delegationSelector);
                }
              });
            }(t, c, n, e.slice(1));
          });
          var f = c[a] || {};
          Object.keys(f).forEach(function (n) {
            var i = n.replace(I, "");

            if (!l || e.indexOf(i) > -1) {
              var o = f[n];
              q(t, c, a, o.originalHandler, o.delegationSelector);
            }
          });
        } else {
          if (!c || !c[a]) return;
          q(t, c, a, s, r ? n : null);
        }
      }
    },
    trigger: function trigger(t, e, n) {
      if ("string" != typeof e || !t) return null;
      var i,
          o = e.replace(N, ""),
          r = e !== o,
          s = H.indexOf(o) > -1,
          a = !0,
          l = !0,
          c = !1,
          u = null;
      return r && D && (i = D.Event(e, n), D(t).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), c = i.isDefaultPrevented()), s ? (u = document.createEvent("HTMLEvents")).initEvent(o, a, !0) : u = new CustomEvent(e, {
        bubbles: a,
        cancelable: !0
      }), "undefined" != typeof n && Object.keys(n).forEach(function (t) {
        Object.defineProperty(u, t, {
          get: function get() {
            return n[t];
          }
        });
      }), c && (u.preventDefault(), A || Object.defineProperty(u, "defaultPrevented", {
        get: function get() {
          return !0;
        }
      })), l && t.dispatchEvent(u), u.defaultPrevented && "undefined" != typeof i && i.preventDefault(), u;
    }
  },
      F = "asyncLoad",
      V = "coreui.asyncLoad",
      z = "c-active",
      K = "c-show",
      $ = ".c-sidebar-nav-dropdown",
      G = ".c-xhr-link, .c-sidebar-nav-link",
      J = {
    defaultPage: "main.html",
    errorPage: "404.html",
    subpagesDirectory: "views/"
  },
      Z = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t;
      var n = location.hash.replace(/^#/, "");
      "" !== n ? this._setUpUrl(n) : this._setUpUrl(this._config.defaultPage), this._addEventListeners();
    }

    var n = t.prototype;
    return n._getConfig = function (t) {
      return t = o(o({}, J), t);
    }, n._loadPage = function (t) {
      var e = this,
          n = this._element,
          i = this._config,
          o = new XMLHttpRequest();
      o.open("GET", i.subpagesDirectory + t);
      var r = new CustomEvent("xhr", {
        detail: {
          url: t,
          status: o.status
        }
      });
      n.dispatchEvent(r), o.onload = function (s) {
        if (200 === o.status) {
          r = new CustomEvent("xhr", {
            detail: {
              url: t,
              status: o.status
            }
          }), n.dispatchEvent(r);
          var a = document.createElement("div");
          a.innerHTML = s.target.response;
          var l = Array.from(a.querySelectorAll("script")).map(function (t) {
            return t.attributes.getNamedItem("src").nodeValue;
          });
          a.querySelectorAll("script").forEach(function (t) {
            return t.remove(t);
          }), window.scrollTo(0, 0), n.innerHTML = "", n.appendChild(a), (c = document.querySelectorAll(".view-script")).length && c.forEach(function (t) {
            t.remove();
          }), l.length && function t(n, i) {
            void 0 === i && (i = 0);
            var o = document.createElement("script");
            o.type = "text/javascript", o.src = n[i], o.className = "view-script", o.onload = o.onreadystatechange = function () {
              e.readyState && "complete" !== e.readyState || n.length > i + 1 && t(n, i + 1);
            }, document.getElementsByTagName("body")[0].appendChild(o);
          }(l), window.location.hash = t;
        } else window.location.href = i.errorPage;

        var c;
      }, o.send();
    }, n._setUpUrl = function (t) {
      t = t.replace(/^\//, "").split("?")[0], Array.from(document.querySelectorAll(G)).forEach(function (t) {
        t.classList.remove(z);
      }), Array.from(document.querySelectorAll(G)).forEach(function (t) {
        t.classList.remove(z);
      }), Array.from(document.querySelectorAll($)).forEach(function (t) {
        t.classList.remove(K);
      }), Array.from(document.querySelectorAll($)).forEach(function (e) {
        Array.from(e.querySelectorAll('a[href*="' + t + '"]')).length > 0 && e.classList.add(K);
      }), Array.from(document.querySelectorAll('.c-sidebar-nav-item a[href*="' + t + '"]')).forEach(function (t) {
        t.classList.add(z);
      }), this._loadPage(t);
    }, n._loadBlank = function (t) {
      window.open(t);
    }, n._loadTop = function (t) {
      window.location = t;
    }, n._update = function (t) {
      "#" !== t.href && ("undefined" != typeof t.dataset.toggle && "null" !== t.dataset.toggle || ("_top" === t.target ? this._loadTop(t.href) : "_blank" === t.target ? this._loadBlank(t.href) : this._setUpUrl(t.getAttribute("href"))));
    }, n._addEventListeners = function () {
      var t = this;
      Q.on(document, "click.coreui.asyncLoad.data-api", G, function (e) {
        e.preventDefault();
        var n = e.target;
        n.classList.contains("c-sidebar-nav-link") || (n = n.closest(G)), n.classList.contains("c-sidebar-nav-dropdown-toggle") || "#" === n.getAttribute("href") || t._update(n);
      });
    }, t._asyncLoadInterface = function (e, n) {
      var i = k(e, V);

      if (i || (i = new t(e, "object" == _typeof(n) && n)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t._asyncLoadInterface(this, e);
      });
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return J;
      }
    }]), t;
  }(),
      tt = E();

  if (tt) {
    var et = tt.fn[F];
    tt.fn[F] = Z.jQueryInterface, tt.fn[F].Constructor = Z, tt.fn[F].noConflict = function () {
      return tt.fn[F] = et, Z.jQueryInterface;
    };
  }

  var nt = "coreui.alert",
      it = function () {
    function t(t) {
      this._element = t, this._element && T(t, nt, this);
    }

    var n = t.prototype;
    return n.close = function (t) {
      var e = t ? this._getRootElement(t) : this._element,
          n = this._triggerCloseEvent(e);

      null === n || n.defaultPrevented || this._removeElement(e);
    }, n.dispose = function () {
      O(this._element, nt), this._element = null;
    }, n._getRootElement = function (t) {
      return d(t) || t.closest(".alert");
    }, n._triggerCloseEvent = function (t) {
      return Q.trigger(t, "close.coreui.alert");
    }, n._removeElement = function (t) {
      var e = this;

      if (t.classList.remove("show"), t.classList.contains("fade")) {
        var n = p(t);
        Q.one(t, c, function () {
          return e._destroyElement(t);
        }), v(t, n);
      } else this._destroyElement(t);
    }, n._destroyElement = function (t) {
      t.parentNode && t.parentNode.removeChild(t), Q.trigger(t, "closed.coreui.alert");
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = k(this, nt);
        n || (n = new t(this)), "close" === e && n[e](this);
      });
    }, t.handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, t.getInstance = function (t) {
      return k(t, nt);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }]), t;
  }();

  Q.on(document, "click.coreui.alert.data-api", '[data-dismiss="alert"]', it.handleDismiss(new it()));
  var ot = E();

  if (ot) {
    var rt = ot.fn.alert;
    ot.fn.alert = it.jQueryInterface, ot.fn.alert.Constructor = it, ot.fn.alert.noConflict = function () {
      return ot.fn.alert = rt, it.jQueryInterface;
    };
  }

  var st = {
    matches: function matches(t, e) {
      return t.matches(e);
    },
    find: function find(t, e) {
      var n;
      return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, C.call(e, t));
    },
    findOne: function findOne(t, e) {
      return void 0 === e && (e = document.documentElement), S.call(e, t);
    },
    children: function children(t, e) {
      var n,
          i = (n = []).concat.apply(n, t.children);
      return i.filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
        this.matches(i, e) && n.push(i), i = i.parentNode;
      }

      return n;
    },
    prev: function prev(t, e) {
      for (var n = t.previousElementSibling; n;) {
        if (n.matches(e)) return [n];
        n = n.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      for (var n = t.nextElementSibling; n;) {
        if (this.matches(n, e)) return [n];
        n = n.nextElementSibling;
      }

      return [];
    }
  },
      at = "coreui.button",
      lt = "active",
      ct = "disabled",
      ut = "focus",
      ft = '[data-toggle^="button"]',
      ht = ".btn",
      dt = function () {
    function t(t) {
      this._element = t, T(t, at, this);
    }

    var n = t.prototype;
    return n.toggle = function () {
      var t = !0,
          e = !0,
          n = this._element.closest('[data-toggle="buttons"]');

      if (n) {
        var i = st.findOne('input:not([type="hidden"])', this._element);

        if (i && "radio" === i.type) {
          if (i.checked && this._element.classList.contains(lt)) t = !1;else {
            var o = st.findOne(".active", n);
            o && o.classList.remove(lt);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains(ct) || n.classList.contains(ct)) return;
            i.checked = !this._element.classList.contains(lt), Q.trigger(i, "change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(lt)), t && this._element.classList.toggle(lt);
    }, n.dispose = function () {
      O(this._element, at), this._element = null;
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = k(this, at);
        n || (n = new t(this)), "toggle" === e && n[e]();
      });
    }, t.getInstance = function (t) {
      return k(t, at);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }]), t;
  }();

  Q.on(document, "click.coreui.button.data-api", ft, function (t) {
    t.preventDefault();
    var e = t.target.closest(ht),
        n = k(e, at);
    n || (n = new dt(e)), n.toggle();
  }), Q.on(document, "focus.coreui.button.data-api", ft, function (t) {
    var e = t.target.closest(ht);
    e && e.classList.add(ut);
  }), Q.on(document, "blur.coreui.button.data-api", ft, function (t) {
    var e = t.target.closest(ht);
    e && e.classList.remove(ut);
  });
  var pt = E();

  if (pt) {
    var gt = pt.fn.button;
    pt.fn.button = dt.jQueryInterface, pt.fn.button.Constructor = dt, pt.fn.button.noConflict = function () {
      return pt.fn.button = gt, dt.jQueryInterface;
    };
  }

  function mt(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function vt(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  var _t = {
    setDataAttribute: function setDataAttribute(t, e, n) {
      t.setAttribute("data-" + vt(e), n);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-" + vt(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = o({}, t.dataset);
      return Object.keys(e).forEach(function (t) {
        e[t] = mt(e[t]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return mt(t.getAttribute("data-" + vt(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    },
    toggleClass: function toggleClass(t, e) {
      t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e));
    }
  },
      bt = "carousel",
      yt = "coreui.carousel",
      wt = "." + yt,
      Et = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Lt = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      Tt = "next",
      kt = "prev",
      Ot = "slid" + wt,
      Ct = "active",
      St = ".active.carousel-item",
      At = {
    TOUCH: "touch",
    PEN: "pen"
  },
      xt = function () {
    function t(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = st.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners(), T(t, yt, this);
    }

    var n = t.prototype;
    return n.next = function () {
      this._isSliding || this._slide(Tt);
    }, n.nextWhenVisible = function () {
      !document.hidden && b(this._element) && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide(kt);
    }, n.pause = function (t) {
      t || (this._isPaused = !0), st.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (g(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (t) {
      var e = this;
      this._activeElement = st.findOne(St, this._element);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) Q.one(this._element, Ot, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = t > n ? Tt : kt;

        this._slide(i, this._items[t]);
      }
    }, n.dispose = function () {
      Q.off(this._element, wt), O(this._element, yt), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (t) {
      return t = o(o({}, Et), t), _(bt, t, Lt), t;
    }, n._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
      }
    }, n._addEventListeners = function () {
      var t = this;
      this._config.keyboard && Q.on(this._element, "keydown.coreui.carousel", function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (Q.on(this._element, "mouseenter.coreui.carousel", function (e) {
        return t.pause(e);
      }), Q.on(this._element, "mouseleave.coreui.carousel", function (e) {
        return t.cycle(e);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }, n._addTouchEventListeners = function () {
      var t = this,
          e = function e(_e2) {
        t._pointerEvent && At[_e2.pointerType.toUpperCase()] ? t.touchStartX = _e2.clientX : t._pointerEvent || (t.touchStartX = _e2.touches[0].clientX);
      },
          n = function n(e) {
        t._pointerEvent && At[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval));
      };

      st.find(".carousel-item img", this._element).forEach(function (t) {
        Q.on(t, "dragstart.coreui.carousel", function (t) {
          return t.preventDefault();
        });
      }), this._pointerEvent ? (Q.on(this._element, "pointerdown.coreui.carousel", function (t) {
        return e(t);
      }), Q.on(this._element, "pointerup.coreui.carousel", function (t) {
        return n(t);
      }), this._element.classList.add("pointer-event")) : (Q.on(this._element, "touchstart.coreui.carousel", function (t) {
        return e(t);
      }), Q.on(this._element, "touchmove.coreui.carousel", function (e) {
        return function (e) {
          e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX;
        }(e);
      }), Q.on(this._element, "touchend.coreui.carousel", function (t) {
        return n(t);
      }));
    }, n._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
        case "ArrowLeft":
          t.preventDefault(), this.prev();
          break;

        case "ArrowRight":
          t.preventDefault(), this.next();
      }
    }, n._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? st.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
    }, n._getItemByDirection = function (t, e) {
      var n = t === Tt,
          i = t === kt,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === kt ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, n._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(st.findOne(St, this._element));

      return Q.trigger(this._element, "slide.coreui.carousel", {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });
    }, n._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        for (var e = st.find(".active", this._indicatorsElement), n = 0; n < e.length; n++) {
          e[n].classList.remove(Ct);
        }

        var i = this._indicatorsElement.children[this._getItemIndex(t)];

        i && i.classList.add(Ct);
      }
    }, n._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = st.findOne(St, this._element),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          u = this._getItemIndex(l),
          f = Boolean(this._interval);

      if (t === Tt ? (n = "carousel-item-left", i = "carousel-item-next", o = "left") : (n = "carousel-item-right", i = "carousel-item-prev", o = "right"), l && l.classList.contains(Ct)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
        if (this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l), this._element.classList.contains("slide")) {
          l.classList.add(i), w(l), s.classList.add(n), l.classList.add(n);
          var h = parseInt(l.getAttribute("data-interval"), 10);
          h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = h) : this._config.interval = this._config.defaultInterval || this._config.interval;
          var d = p(s);
          Q.one(s, c, function () {
            l.classList.remove(n, i), l.classList.add(Ct), s.classList.remove(Ct, i, n), r._isSliding = !1, setTimeout(function () {
              Q.trigger(r._element, Ot, {
                relatedTarget: l,
                direction: o,
                from: a,
                to: u
              });
            }, 0);
          }), v(s, d);
        } else s.classList.remove(Ct), l.classList.add(Ct), this._isSliding = !1, Q.trigger(this._element, Ot, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: u
        });

        f && this.cycle();
      }
    }, t.carouselInterface = function (e, n) {
      var i = k(e, yt),
          r = o(o({}, Et), _t.getDataAttributes(e));
      "object" == _typeof(n) && (r = o(o({}, r), n));
      var s = "string" == typeof n ? n : r.slide;
      if (i || (i = new t(e, r)), "number" == typeof n) i.to(n);else if ("string" == typeof s) {
        if ("undefined" == typeof i[s]) throw new TypeError('No method named "' + s + '"');
        i[s]();
      } else r.interval && r.ride && (i.pause(), i.cycle());
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t.carouselInterface(this, e);
      });
    }, t.dataApiClickHandler = function (e) {
      var n = d(this);

      if (n && n.classList.contains("carousel")) {
        var i = o(o({}, _t.getDataAttributes(n)), _t.getDataAttributes(this)),
            r = this.getAttribute("data-slide-to");
        r && (i.interval = !1), t.carouselInterface(n, i), r && k(n, yt).to(r), e.preventDefault();
      }
    }, t.getInstance = function (t) {
      return k(t, yt);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Et;
      }
    }]), t;
  }();

  Q.on(document, "click.coreui.carousel.data-api", "[data-slide], [data-slide-to]", xt.dataApiClickHandler), Q.on(window, "load.coreui.carousel.data-api", function () {
    for (var t = st.find('[data-ride="carousel"]'), e = 0, n = t.length; e < n; e++) {
      xt.carouselInterface(t[e], k(t[e], yt));
    }
  });
  var Dt = E();

  if (Dt) {
    var jt = Dt.fn[bt];
    Dt.fn[bt] = xt.jQueryInterface, Dt.fn[bt].Constructor = xt, Dt.fn[bt].noConflict = function () {
      return Dt.fn[bt] = jt, xt.jQueryInterface;
    };
  }

  var Nt = "class-toggler",
      It = "coreui.class-toggler",
      Pt = {
    addClass: "(null|array|string)",
    breakpoints: "(null|array|string)",
    removeClass: "(null|array|string)",
    responsive: "(null|boolean)",
    target: "(null|string)",
    toggleClass: "(null|array|string)"
  },
      Rt = {
    addClass: null,
    breakpoints: ["", "sm", "md", "lg", "xl"],
    removeClass: null,
    responsive: !1,
    target: "body",
    toggleClass: null
  },
      Mt = "classremoved",
      Ht = "classtoggle",
      Wt = ".c-class-toggler",
      Yt = function () {
    function t(t, e) {
      this._element = t, this._config = this._getConfig(e), T(t, It, this);
    }

    var n = t.prototype;
    return n.add = function () {
      var t = this,
          e = this._target();

      this._config.addClass.replace(/\s/g, "").split(",").forEach(function (n) {
        e.classList.add(n), t._customEvent("classadded", e, !0, n);
      });
    }, n.remove = function () {
      var t = this,
          e = this._target();

      this._config.removeClass.replace(/\s/g, "").split(",").forEach(function (n) {
        t._config.responsive ? t._updateResponsiveClassNames(n).forEach(function (n) {
          e.classList.remove(n), t._customEvent(Mt, e, !1, n);
        }) : (e.classList.remove(n), t._customEvent(Mt, e, !1, n));
      });
    }, n.toggle = function () {
      var t = this,
          e = this._target(),
          n = this._config.toggleClass.replace(/\s/g, "").split(",");

      this._config.responsive ? n.forEach(function (n) {
        t._updateResponsiveClassNames(n).filter(function (t) {
          return e.classList.contains(t);
        }).length ? t._updateResponsiveClassNames(n).forEach(function (n) {
          t._config.removeClass = n, t.remove(), t._customEvent(Ht, e, !1, n);
        }) : (t._config.addClass = n, t.add(), t._customEvent(Ht, e, !0, n));
      }) : n.forEach(function (n) {
        e.classList.contains(n) ? (t._config.removeClass = n, t.remove(), t._customEvent(Ht, e, !1, n)) : (t._config.addClass = n, t.add(), t._customEvent(Ht, e, !0, n));
      });
    }, n["class"] = function () {
      this._config.toggleClass = this._config["class"], this._element.getAttribute("responsive") && (this._config.responsive = this._element.getAttribute("responsive")), this.toggle();
    }, n._target = function () {
      return "body" === this._config.target ? document.querySelector(this._config.target) : "_parent" === this._config.target ? this._element.parentNode : document.querySelector(this._config.target);
    }, n._customEvent = function (t, e, n, i) {
      var o = new CustomEvent(t, {
        detail: {
          target: e,
          add: n,
          className: i
        }
      });
      e.dispatchEvent(o);
    }, n._breakpoint = function (t) {
      return this._config.breakpoints.filter(function (t) {
        return t.length > 0;
      }).filter(function (e) {
        return t.includes(e);
      })[0];
    }, n._breakpoints = function (t) {
      var e = this._config.breakpoints;
      return e.slice(0, e.indexOf(e.filter(function (t) {
        return t.length > 0;
      }).filter(function (e) {
        return t.includes(e);
      })[0]) + 1);
    }, n._updateResponsiveClassNames = function (t) {
      var e = this._breakpoint(t);

      return this._breakpoints(t).map(function (n) {
        return n.length > 0 ? t.replace(e, n) : t.replace("-" + e, n);
      });
    }, n._includesResponsiveClass = function (t) {
      var e = this;
      return this._updateResponsiveClassNames(t).filter(function (t) {
        return e._config.target.contains(t);
      });
    }, n._getConfig = function (t) {
      return t = o(o(o({}, this.constructor.Default), _t.getDataAttributes(this._element)), t), _(Nt, t, this.constructor.DefaultType), t;
    }, t.classTogglerInterface = function (e, n) {
      var i = k(e, It);

      if (i || (i = new t(e, "object" == _typeof(n) && n)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t.classTogglerInterface(this, e);
      });
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Rt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pt;
      }
    }]), t;
  }();

  Q.on(document, "click.coreui.class-toggler.data-api", Wt, function (t) {
    t.preventDefault(), t.stopPropagation();
    var e = t.target;
    e.classList.contains("c-class-toggler") || (e = e.closest(Wt)), "undefined" != typeof e.dataset.addClass && Yt.classTogglerInterface(e, "add"), "undefined" != typeof e.dataset.removeClass && Yt.classTogglerInterface(e, "remove"), "undefined" != typeof e.dataset.toggleClass && Yt.classTogglerInterface(e, "toggle"), "undefined" != typeof e.dataset["class"] && Yt.classTogglerInterface(e, "class");
  });
  var Xt = E();

  if (Xt) {
    var Bt = Xt.fn[Nt];
    Xt.fn[Nt] = Yt.jQueryInterface, Xt.fn[Nt].Constructor = Yt, Xt.fn[Nt].noConflict = function () {
      return Xt.fn[Nt] = Bt, Yt.jQueryInterface;
    };
  }

  var Ut = "collapse",
      qt = "coreui.collapse",
      Qt = {
    toggle: !0,
    parent: ""
  },
      Ft = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      Vt = "show",
      zt = "collapse",
      Kt = "collapsing",
      $t = "collapsed",
      Gt = "width",
      Jt = '[data-toggle="collapse"]',
      Zt = function () {
    function t(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = st.find(Jt + '[href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]');

      for (var n = st.find(Jt), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = h(r),
            a = st.find(s).filter(function (e) {
          return e === t;
        });
        null !== s && a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), T(t, qt, this);
    }

    var n = t.prototype;
    return n.toggle = function () {
      this._element.classList.contains(Vt) ? this.hide() : this.show();
    }, n.show = function () {
      var e = this;

      if (!this._isTransitioning && !this._element.classList.contains(Vt)) {
        var n, i;
        this._parent && 0 === (n = st.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof e._config.parent ? t.getAttribute("data-parent") === e._config.parent : t.classList.contains(zt);
        })).length && (n = null);
        var o = st.findOne(this._selector);

        if (n) {
          var r = n.filter(function (t) {
            return o !== t;
          });
          if ((i = r[0] ? k(r[0], qt) : null) && i._isTransitioning) return;
        }

        if (!Q.trigger(this._element, "show.coreui.collapse").defaultPrevented) {
          n && n.forEach(function (e) {
            o !== e && t.collapseInterface(e, "hide"), i || T(e, qt, null);
          });

          var s = this._getDimension();

          this._element.classList.remove(zt), this._element.classList.add(Kt), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
            t.classList.remove($t), t.setAttribute("aria-expanded", !0);
          }), this.setTransitioning(!0);
          var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
              l = p(this._element);
          Q.one(this._element, c, function () {
            e._element.classList.remove(Kt), e._element.classList.add(zt, Vt), e._element.style[s] = "", e.setTransitioning(!1), Q.trigger(e._element, "shown.coreui.collapse");
          }), v(this._element, l), this._element.style[s] = this._element[a] + "px";
        }
      }
    }, n.hide = function () {
      var t = this;

      if (!this._isTransitioning && this._element.classList.contains(Vt) && !Q.trigger(this._element, "hide.coreui.collapse").defaultPrevented) {
        var e = this._getDimension();

        this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", w(this._element), this._element.classList.add(Kt), this._element.classList.remove(zt, Vt);
        var n = this._triggerArray.length;
        if (n > 0) for (var i = 0; i < n; i++) {
          var o = this._triggerArray[i],
              r = d(o);
          r && !r.classList.contains(Vt) && (o.classList.add($t), o.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0);
        this._element.style[e] = "";
        var s = p(this._element);
        Q.one(this._element, c, function () {
          t.setTransitioning(!1), t._element.classList.remove(Kt), t._element.classList.add(zt), Q.trigger(t._element, "hidden.coreui.collapse");
        }), v(this._element, s);
      }
    }, n.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, n.dispose = function () {
      O(this._element, qt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (t) {
      return (t = o(o({}, Qt), t)).toggle = Boolean(t.toggle), _(Ut, t, Ft), t;
    }, n._getDimension = function () {
      return this._element.classList.contains(Gt) ? Gt : "height";
    }, n._getParent = function () {
      var t = this,
          e = this._config.parent;
      m(e) ? "undefined" == typeof e.jquery && "undefined" == typeof e[0] || (e = e[0]) : e = st.findOne(e);
      var n = Jt + '[data-parent="' + e + '"]';
      return st.find(n, e).forEach(function (e) {
        var n = d(e);

        t._addAriaAndCollapsedClass(n, [e]);
      }), e;
    }, n._addAriaAndCollapsedClass = function (t, e) {
      if (t && e.length) {
        var n = t.classList.contains(Vt);
        e.forEach(function (t) {
          n ? t.classList.remove($t) : t.classList.add($t), t.setAttribute("aria-expanded", n);
        });
      }
    }, t.collapseInterface = function (e, n) {
      var i = k(e, qt),
          r = o(o(o({}, Qt), _t.getDataAttributes(e)), "object" == _typeof(n) && n ? n : {});

      if (!i && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), i || (i = new t(e, r)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t.collapseInterface(this, e);
      });
    }, t.getInstance = function (t) {
      return k(t, qt);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Qt;
      }
    }]), t;
  }();

  Q.on(document, "click.coreui.collapse.data-api", Jt, function (t) {
    "A" === t.target.tagName && t.preventDefault();

    var e = _t.getDataAttributes(this),
        n = h(this);

    st.find(n).forEach(function (t) {
      var n,
          i = k(t, qt);
      i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, Zt.collapseInterface(t, n);
    });
  });
  var te = E();

  if (te) {
    var ee = te.fn[Ut];
    te.fn[Ut] = Zt.jQueryInterface, te.fn[Ut].Constructor = Zt, te.fn[Ut].noConflict = function () {
      return te.fn[Ut] = ee, Zt.jQueryInterface;
    };
  }

  function ne(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function ie(t) {
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window;
    }

    return t;
  }

  function oe(t) {
    var e = ie(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function re(t) {
    return t instanceof ie(t).Element || t instanceof Element;
  }

  function se(t) {
    return t instanceof ie(t).HTMLElement || t instanceof HTMLElement;
  }

  function ae(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function le(t) {
    return (re(t) ? t.ownerDocument : t.document).documentElement;
  }

  function ce(t) {
    return ne(le(t)).left + oe(t).scrollLeft;
  }

  function ue(t) {
    return ie(t).getComputedStyle(t);
  }

  function fe(t) {
    var e = ue(t),
        n = e.overflow,
        i = e.overflowX,
        o = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + i);
  }

  function he(t, e, n) {
    void 0 === n && (n = !1);
    var i,
        o = le(e),
        r = ne(t),
        s = se(e),
        a = {
      scrollLeft: 0,
      scrollTop: 0
    },
        l = {
      x: 0,
      y: 0
    };
    return (s || !s && !n) && (("body" !== ae(e) || fe(o)) && (a = (i = e) !== ie(i) && se(i) ? function (t) {
      return {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
      };
    }(i) : oe(i)), se(e) ? ((l = ne(e)).x += e.clientLeft, l.y += e.clientTop) : o && (l.x = ce(o))), {
      x: r.left + a.scrollLeft - l.x,
      y: r.top + a.scrollTop - l.y,
      width: r.width,
      height: r.height
    };
  }

  function de(t) {
    return {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: t.offsetWidth,
      height: t.offsetHeight
    };
  }

  function pe(t) {
    return "html" === ae(t) ? t : t.assignedSlot || t.parentNode || t.host || le(t);
  }

  function ge(t, e) {
    void 0 === e && (e = []);

    var n = function t(e) {
      return ["html", "body", "#document"].indexOf(ae(e)) >= 0 ? e.ownerDocument.body : se(e) && fe(e) ? e : t(pe(e));
    }(t),
        i = "body" === ae(n),
        o = ie(n),
        r = i ? [o].concat(o.visualViewport || [], fe(n) ? n : []) : n,
        s = e.concat(r);

    return i ? s : s.concat(ge(pe(r)));
  }

  function me(t) {
    return ["table", "td", "th"].indexOf(ae(t)) >= 0;
  }

  function ve(t) {
    if (!se(t) || "fixed" === ue(t).position) return null;
    var e = t.offsetParent;

    if (e) {
      var n = le(e);
      if ("body" === ae(e) && "static" === ue(e).position && "static" !== ue(n).position) return n;
    }

    return e;
  }

  function _e(t) {
    for (var e = ie(t), n = ve(t); n && me(n) && "static" === ue(n).position;) {
      n = ve(n);
    }

    return n && "body" === ae(n) && "static" === ue(n).position ? e : n || function (t) {
      for (var e = pe(t); se(e) && ["html", "body"].indexOf(ae(e)) < 0;) {
        var n = ue(e);
        if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return e;
        e = e.parentNode;
      }

      return null;
    }(t) || e;
  }

  var be = "top",
      ye = "bottom",
      we = "right",
      Ee = "left",
      Le = "auto",
      Te = [be, ye, we, Ee],
      ke = "start",
      Oe = "end",
      Ce = "viewport",
      Se = "popper",
      Ae = Te.reduce(function (t, e) {
    return t.concat([e + "-" + ke, e + "-" + Oe]);
  }, []),
      xe = [].concat(Te, [Le]).reduce(function (t, e) {
    return t.concat([e, e + "-" + ke, e + "-" + Oe]);
  }, []),
      De = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function je(t) {
    var e = new Map(),
        n = new Set(),
        i = [];
    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      n.has(t.name) || function t(o) {
        n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach(function (i) {
          if (!n.has(i)) {
            var o = e.get(i);
            o && t(o);
          }
        }), i.push(o);
      }(t);
    }), i;
  }

  function Ne(t) {
    return t.split("-")[0];
  }

  function Ie(t, e) {
    var n = Boolean(e.getRootNode && e.getRootNode().host);
    if (t.contains(e)) return !0;

    if (n) {
      var i = e;

      do {
        if (i && t.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }

    return !1;
  }

  function Pe(t) {
    return Object.assign(Object.assign({}, t), {}, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Re(t, e) {
    return e === Ce ? Pe(function (t) {
      var e = ie(t),
          n = le(t),
          i = e.visualViewport,
          o = n.clientWidth,
          r = n.clientHeight,
          s = 0,
          a = 0;
      return i && (o = i.width, r = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, a = i.offsetTop)), {
        width: o,
        height: r,
        x: s + ce(t),
        y: a
      };
    }(t)) : se(e) ? function (t) {
      var e = ne(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Pe(function (t) {
      var e = le(t),
          n = oe(t),
          i = t.ownerDocument.body,
          o = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
          r = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
          s = -n.scrollLeft + ce(t),
          a = -n.scrollTop;
      return "rtl" === ue(i || e).direction && (s += Math.max(e.clientWidth, i ? i.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: s,
        y: a
      };
    }(le(t)));
  }

  function Me(t, e, n) {
    var i = "clippingParents" === e ? function (t) {
      var e = ge(pe(t)),
          n = ["absolute", "fixed"].indexOf(ue(t).position) >= 0 && se(t) ? _e(t) : t;
      return re(n) ? e.filter(function (t) {
        return re(t) && Ie(t, n) && "body" !== ae(t);
      }) : [];
    }(t) : [].concat(e),
        o = [].concat(i, [n]),
        r = o[0],
        s = o.reduce(function (e, n) {
      var i = Re(t, n);
      return e.top = Math.max(i.top, e.top), e.right = Math.min(i.right, e.right), e.bottom = Math.min(i.bottom, e.bottom), e.left = Math.max(i.left, e.left), e;
    }, Re(t, r));
    return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
  }

  function He(t) {
    return t.split("-")[1];
  }

  function We(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  function Ye(t) {
    var e,
        n = t.reference,
        i = t.element,
        o = t.placement,
        r = o ? Ne(o) : null,
        s = o ? He(o) : null,
        a = n.x + n.width / 2 - i.width / 2,
        l = n.y + n.height / 2 - i.height / 2;

    switch (r) {
      case be:
        e = {
          x: a,
          y: n.y - i.height
        };
        break;

      case ye:
        e = {
          x: a,
          y: n.y + n.height
        };
        break;

      case we:
        e = {
          x: n.x + n.width,
          y: l
        };
        break;

      case Ee:
        e = {
          x: n.x - i.width,
          y: l
        };
        break;

      default:
        e = {
          x: n.x,
          y: n.y
        };
    }

    var c = r ? We(r) : null;

    if (null != c) {
      var u = "y" === c ? "height" : "width";

      switch (s) {
        case ke:
          e[c] = Math.floor(e[c]) - Math.floor(n[u] / 2 - i[u] / 2);
          break;

        case Oe:
          e[c] = Math.floor(e[c]) + Math.ceil(n[u] / 2 - i[u] / 2);
      }
    }

    return e;
  }

  function Xe(t) {
    return Object.assign(Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }), t);
  }

  function Be(t, e) {
    return e.reduce(function (e, n) {
      return e[n] = t, e;
    }, {});
  }

  function Ue(t, e) {
    void 0 === e && (e = {});
    var n = e,
        i = n.placement,
        o = void 0 === i ? t.placement : i,
        r = n.boundary,
        s = void 0 === r ? "clippingParents" : r,
        a = n.rootBoundary,
        l = void 0 === a ? Ce : a,
        c = n.elementContext,
        u = void 0 === c ? Se : c,
        f = n.altBoundary,
        h = void 0 !== f && f,
        d = n.padding,
        p = void 0 === d ? 0 : d,
        g = Xe("number" != typeof p ? p : Be(p, Te)),
        m = u === Se ? "reference" : Se,
        v = t.elements.reference,
        _ = t.rects.popper,
        b = t.elements[h ? m : u],
        y = Me(re(b) ? b : b.contextElement || le(t.elements.popper), s, l),
        w = ne(v),
        E = Ye({
      reference: w,
      element: _,
      strategy: "absolute",
      placement: o
    }),
        L = Pe(Object.assign(Object.assign({}, _), E)),
        T = u === Se ? L : w,
        k = {
      top: y.top - T.top + g.top,
      bottom: T.bottom - y.bottom + g.bottom,
      left: y.left - T.left + g.left,
      right: T.right - y.right + g.right
    },
        O = t.modifiersData.offset;

    if (u === Se && O) {
      var C = O[o];
      Object.keys(k).forEach(function (t) {
        var e = [we, ye].indexOf(t) >= 0 ? 1 : -1,
            n = [be, ye].indexOf(t) >= 0 ? "y" : "x";
        k[t] += C[n] * e;
      });
    }

    return k;
  }

  var qe = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function Qe() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
      e[n] = arguments[n];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function Fe(t) {
    void 0 === t && (t = {});
    var e = t,
        n = e.defaultModifiers,
        i = void 0 === n ? [] : n,
        o = e.defaultOptions,
        r = void 0 === o ? qe : o;
    return function (t, e, n) {
      void 0 === n && (n = r);
      var o,
          s,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign(Object.assign({}, qe), r),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          u = {
        state: a,
        setOptions: function setOptions(n) {
          f(), a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n), a.scrollParents = {
            reference: re(t) ? ge(t) : t.contextElement ? ge(t.contextElement) : [],
            popper: ge(e)
          };

          var o,
              s,
              c = function (t) {
            var e = je(t);
            return De.reduce(function (t, n) {
              return t.concat(e.filter(function (t) {
                return t.phase === n;
              }));
            }, []);
          }((o = [].concat(i, a.options.modifiers), s = o.reduce(function (t, e) {
            var n = t[e.name];
            return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
              options: Object.assign(Object.assign({}, n.options), e.options),
              data: Object.assign(Object.assign({}, n.data), e.data)
            }) : e, t;
          }, {}), Object.keys(s).map(function (t) {
            return s[t];
          })));

          return a.orderedModifiers = c.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                n = t.options,
                i = void 0 === n ? {} : n,
                o = t.effect;

            if ("function" == typeof o) {
              var r = o({
                state: a,
                name: e,
                instance: u,
                options: i
              }),
                  s = function s() {};

              l.push(r || s);
            }
          }), u.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                n = t.popper;

            if (Qe(e, n)) {
              a.rects = {
                reference: he(e, _e(n), "fixed" === a.options.strategy),
                popper: de(n)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var i = 0; i < a.orderedModifiers.length; i++) {
                if (!0 !== a.reset) {
                  var o = a.orderedModifiers[i],
                      r = o.fn,
                      s = o.options,
                      l = void 0 === s ? {} : s,
                      f = o.name;
                  "function" == typeof r && (a = r({
                    state: a,
                    options: l,
                    name: f,
                    instance: u
                  }) || a);
                } else a.reset = !1, i = -1;
              }
            }
          }
        },
        update: (o = function o() {
          return new Promise(function (t) {
            u.forceUpdate(), t(a);
          });
        }, function () {
          return s || (s = new Promise(function (t) {
            Promise.resolve().then(function () {
              s = void 0, t(o());
            });
          })), s;
        }),
        destroy: function destroy() {
          f(), c = !0;
        }
      };
      if (!Qe(t, e)) return u;

      function f() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return u.setOptions(n).then(function (t) {
        !c && n.onFirstUpdate && n.onFirstUpdate(t);
      }), u;
    };
  }

  var Ve = {
    passive: !0
  };
  var ze = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Ke(t) {
    var e,
        n = t.popper,
        i = t.popperRect,
        o = t.placement,
        r = t.offsets,
        s = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = function (t) {
      var e = t.x,
          n = t.y,
          i = window.devicePixelRatio || 1;
      return {
        x: Math.round(e * i) / i || 0,
        y: Math.round(n * i) / i || 0
      };
    }(r),
        u = c.x,
        f = c.y,
        h = r.hasOwnProperty("x"),
        d = r.hasOwnProperty("y"),
        p = Ee,
        g = be,
        m = window;

    if (l) {
      var v = _e(n);

      v === ie(n) && (v = le(n)), o === be && (g = ye, f -= v.clientHeight - i.height, f *= a ? 1 : -1), o === Ee && (p = we, u -= v.clientWidth - i.width, u *= a ? 1 : -1);
    }

    var _,
        b = Object.assign({
      position: s
    }, l && ze);

    return a ? Object.assign(Object.assign({}, b), {}, ((_ = {})[g] = d ? "0" : "", _[p] = h ? "0" : "", _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)", _)) : Object.assign(Object.assign({}, b), {}, ((e = {})[g] = d ? f + "px" : "", e[p] = h ? u + "px" : "", e.transform = "", e));
  }

  var $e = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Ge(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return $e[t];
    });
  }

  var Je = {
    start: "end",
    end: "start"
  };

  function Ze(t) {
    return t.replace(/start|end/g, function (t) {
      return Je[t];
    });
  }

  function tn(t, e) {
    void 0 === e && (e = {});
    var n = e,
        i = n.placement,
        o = n.boundary,
        r = n.rootBoundary,
        s = n.padding,
        a = n.flipVariations,
        l = n.allowedAutoPlacements,
        c = void 0 === l ? xe : l,
        u = He(i),
        f = u ? a ? Ae : Ae.filter(function (t) {
      return He(t) === u;
    }) : Te,
        h = f.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === h.length && (h = f);
    var d = h.reduce(function (e, n) {
      return e[n] = Ue(t, {
        placement: n,
        boundary: o,
        rootBoundary: r,
        padding: s
      })[Ne(n)], e;
    }, {});
    return Object.keys(d).sort(function (t, e) {
      return d[t] - d[e];
    });
  }

  function en(t, e, n) {
    return Math.max(t, Math.min(e, n));
  }

  function nn(t, e, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x
    };
  }

  function on(t) {
    return [be, we, ye, Ee].some(function (e) {
      return t[e] >= 0;
    });
  }

  var rn = Fe({
    defaultModifiers: [{
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function fn() {},
      effect: function effect(t) {
        var e = t.state,
            n = t.instance,
            i = t.options,
            o = i.scroll,
            r = void 0 === o || o,
            s = i.resize,
            a = void 0 === s || s,
            l = ie(e.elements.popper),
            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return r && c.forEach(function (t) {
          t.addEventListener("scroll", n.update, Ve);
        }), a && l.addEventListener("resize", n.update, Ve), function () {
          r && c.forEach(function (t) {
            t.removeEventListener("scroll", n.update, Ve);
          }), a && l.removeEventListener("resize", n.update, Ve);
        };
      },
      data: {}
    }, {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function fn(t) {
        var e = t.state,
            n = t.name;
        e.modifiersData[n] = Ye({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement
        });
      },
      data: {}
    }, {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function fn(t) {
        var e = t.state,
            n = t.options,
            i = n.gpuAcceleration,
            o = void 0 === i || i,
            r = n.adaptive,
            s = void 0 === r || r,
            a = {
          placement: Ne(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: o
        };
        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), Ke(Object.assign(Object.assign({}, a), {}, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: s
        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), Ke(Object.assign(Object.assign({}, a), {}, {
          offsets: e.modifiersData.arrow,
          position: "absolute",
          adaptive: !1
        })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
          "data-popper-placement": e.placement
        });
      },
      data: {}
    }, {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function fn(t) {
        var e = t.state;
        Object.keys(e.elements).forEach(function (t) {
          var n = e.styles[t] || {},
              i = e.attributes[t] || {},
              o = e.elements[t];
          se(o) && ae(o) && (Object.assign(o.style, n), Object.keys(i).forEach(function (t) {
            var e = i[t];
            !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e);
          }));
        });
      },
      effect: function effect(t) {
        var e = t.state,
            n = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
          Object.keys(e.elements).forEach(function (t) {
            var i = e.elements[t],
                o = e.attributes[t] || {},
                r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
              return t[e] = "", t;
            }, {});
            se(i) && ae(i) && (Object.assign(i.style, r), Object.keys(o).forEach(function (t) {
              i.removeAttribute(t);
            }));
          });
        };
      },
      requires: ["computeStyles"]
    }, {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function fn(t) {
        var e = t.state,
            n = t.options,
            i = t.name,
            o = n.offset,
            r = void 0 === o ? [0, 0] : o,
            s = xe.reduce(function (t, n) {
          return t[n] = function (t, e, n) {
            var i = Ne(t),
                o = [Ee, be].indexOf(i) >= 0 ? -1 : 1,
                r = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {
              placement: t
            })) : n,
                s = r[0],
                a = r[1];
            return s = s || 0, a = (a || 0) * o, [Ee, we].indexOf(i) >= 0 ? {
              x: a,
              y: s
            } : {
              x: s,
              y: a
            };
          }(n, e.rects, r), t;
        }, {}),
            a = s[e.placement],
            l = a.x,
            c = a.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = s;
      }
    }, {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e = t.state,
            n = t.options,
            i = t.name;

        if (!e.modifiersData[i]._skip) {
          for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, h = n.altBoundary, d = n.flipVariations, p = void 0 === d || d, g = n.allowedAutoPlacements, m = e.options.placement, v = Ne(m), _ = l || (v === m || !p ? [Ge(m)] : function (t) {
            if (Ne(t) === Le) return [];
            var e = Ge(t);
            return [Ze(t), e, Ze(e)];
          }(m)), b = [m].concat(_).reduce(function (t, n) {
            return t.concat(Ne(n) === Le ? tn(e, {
              placement: n,
              boundary: u,
              rootBoundary: f,
              padding: c,
              flipVariations: p,
              allowedAutoPlacements: g
            }) : n);
          }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), L = !0, T = b[0], k = 0; k < b.length; k++) {
            var O = b[k],
                C = Ne(O),
                S = He(O) === ke,
                A = [be, ye].indexOf(C) >= 0,
                x = A ? "width" : "height",
                D = Ue(e, {
              placement: O,
              boundary: u,
              rootBoundary: f,
              altBoundary: h,
              padding: c
            }),
                j = A ? S ? we : Ee : S ? ye : be;
            y[x] > w[x] && (j = Ge(j));
            var N = Ge(j),
                I = [];

            if (r && I.push(D[C] <= 0), a && I.push(D[j] <= 0, D[N] <= 0), I.every(function (t) {
              return t;
            })) {
              T = O, L = !1;
              break;
            }

            E.set(O, I);
          }

          if (L) for (var P = function P(t) {
            var e = b.find(function (e) {
              var n = E.get(e);
              if (n) return n.slice(0, t).every(function (t) {
                return t;
              });
            });
            if (e) return T = e, "break";
          }, R = p ? 3 : 1; R > 0; R--) {
            if ("break" === P(R)) break;
          }
          e.placement !== T && (e.modifiersData[i]._skip = !0, e.placement = T, e.reset = !0);
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    }, {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e = t.state,
            n = t.options,
            i = t.name,
            o = n.mainAxis,
            r = void 0 === o || o,
            s = n.altAxis,
            a = void 0 !== s && s,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            h = n.tether,
            d = void 0 === h || h,
            p = n.tetherOffset,
            g = void 0 === p ? 0 : p,
            m = Ue(e, {
          boundary: l,
          rootBoundary: c,
          padding: f,
          altBoundary: u
        }),
            v = Ne(e.placement),
            _ = He(e.placement),
            b = !_,
            y = We(v),
            w = "x" === y ? "y" : "x",
            E = e.modifiersData.popperOffsets,
            L = e.rects.reference,
            T = e.rects.popper,
            k = "function" == typeof g ? g(Object.assign(Object.assign({}, e.rects), {}, {
          placement: e.placement
        })) : g,
            O = {
          x: 0,
          y: 0
        };

        if (E) {
          if (r) {
            var C = "y" === y ? be : Ee,
                S = "y" === y ? ye : we,
                A = "y" === y ? "height" : "width",
                x = E[y],
                D = E[y] + m[C],
                j = E[y] - m[S],
                N = d ? -T[A] / 2 : 0,
                I = _ === ke ? L[A] : T[A],
                P = _ === ke ? -T[A] : -L[A],
                R = e.elements.arrow,
                M = d && R ? de(R) : {
              width: 0,
              height: 0
            },
                H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
                W = H[C],
                Y = H[S],
                X = en(0, L[A], M[A]),
                B = b ? L[A] / 2 - N - X - W - k : I - X - W - k,
                U = b ? -L[A] / 2 + N + X + Y + k : P + X + Y + k,
                q = e.elements.arrow && _e(e.elements.arrow),
                Q = q ? "y" === y ? q.clientTop || 0 : q.clientLeft || 0 : 0,
                F = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                V = E[y] + B - F - Q,
                z = E[y] + U - F,
                K = en(d ? Math.min(D, V) : D, x, d ? Math.max(j, z) : j);

            E[y] = K, O[y] = K - x;
          }

          if (a) {
            var $ = "x" === y ? be : Ee,
                G = "x" === y ? ye : we,
                J = E[w],
                Z = en(J + m[$], J, J - m[G]);
            E[w] = Z, O[w] = Z - J;
          }

          e.modifiersData[i] = O;
        }
      },
      requiresIfExists: ["offset"]
    }, {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e,
            n = t.state,
            i = t.name,
            o = n.elements.arrow,
            r = n.modifiersData.popperOffsets,
            s = Ne(n.placement),
            a = We(s),
            l = [Ee, we].indexOf(s) >= 0 ? "height" : "width";

        if (o && r) {
          var c = n.modifiersData[i + "#persistent"].padding,
              u = de(o),
              f = "y" === a ? be : Ee,
              h = "y" === a ? ye : we,
              d = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l],
              p = r[a] - n.rects.reference[a],
              g = _e(o),
              m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
              v = d / 2 - p / 2,
              _ = c[f],
              b = m - u[l] - c[h],
              y = m / 2 - u[l] / 2 + v,
              w = en(_, y, b),
              E = a;

          n.modifiersData[i] = ((e = {})[E] = w, e.centerOffset = w - y, e);
        }
      },
      effect: function effect(t) {
        var e = t.state,
            n = t.options,
            i = t.name,
            o = n.element,
            r = void 0 === o ? "[data-popper-arrow]" : o,
            s = n.padding,
            a = void 0 === s ? 0 : s;
        null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && Ie(e.elements.popper, r) && (e.elements.arrow = r, e.modifiersData[i + "#persistent"] = {
          padding: Xe("number" != typeof a ? a : Be(a, Te))
        });
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    }, {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function fn(t) {
        var e = t.state,
            n = t.name,
            i = e.rects.reference,
            o = e.rects.popper,
            r = e.modifiersData.preventOverflow,
            s = Ue(e, {
          elementContext: "reference"
        }),
            a = Ue(e, {
          altBoundary: !0
        }),
            l = nn(s, i),
            c = nn(a, o, r),
            u = on(l),
            f = on(c);
        e.modifiersData[n] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: u,
          hasPopperEscaped: f
        }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
          "data-popper-reference-hidden": u,
          "data-popper-escaped": f
        });
      }
    }]
  }),
      sn = "dropdown",
      an = "coreui.dropdown",
      ln = "." + an,
      cn = "Escape",
      un = "Space",
      fn = "ArrowUp",
      hn = "ArrowDown",
      dn = new RegExp("ArrowUp|ArrowDown|Escape"),
      pn = "hide" + ln,
      gn = "hidden" + ln,
      mn = "click.coreui.dropdown.data-api",
      vn = "keydown.coreui.dropdown.data-api",
      _n = "disabled",
      bn = "show",
      yn = "dropdown-menu-right",
      wn = '[data-toggle="dropdown"]',
      En = ".dropdown-menu",
      Ln = {
    offset: [0, 0],
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      Tn = {
    offset: "(array|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)"
  },
      kn = function () {
    function t(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._addEventListeners(), T(t, an, this);
    }

    var n = t.prototype;
    return n.toggle = function () {
      if (!this._element.disabled && !this._element.classList.contains(_n)) {
        var e = this._menu.classList.contains(bn);

        t.clearMenus(), e || this.show();
      }
    }, n.show = function () {
      if (!(this._element.disabled || this._element.classList.contains(_n) || this._menu.classList.contains(bn))) {
        var e = t.getParentFromElement(this._element),
            n = {
          relatedTarget: this._element
        };

        if (!Q.trigger(e, "show.coreui.dropdown", n).defaultPrevented) {
          if (!this._inNavbar && !this._inHeader) {
            if ("undefined" == typeof rn) throw new TypeError("CoreUI's dropdowns require Popper.js (https://popper.js.org)");
            var i = this._element;
            "parent" === this._config.reference ? i = e : m(this._config.reference) && (i = this._config.reference, "undefined" != typeof this._config.reference.jquery && (i = this._config.reference[0])), "scrollParent" !== this._config.boundary && e.classList.add("position-static"), this._popper = rn(i, this._menu, this._getPopperConfig());
          }

          var o, r;
          if ("ontouchstart" in document.documentElement && !e.closest(".navbar-nav")) (o = []).concat.apply(o, document.body.children).forEach(function (t) {
            return Q.on(t, "mouseover", null, function () {});
          });
          if ("ontouchstart" in document.documentElement && !e.closest(".c-header-nav")) (r = []).concat.apply(r, document.body.children).forEach(function (t) {
            return Q.on(t, "mouseover", null, function () {});
          });
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), _t.toggleClass(this._menu, bn), _t.toggleClass(e, bn), Q.trigger(e, "shown.coreui.dropdown", n);
        }
      }
    }, n.hide = function () {
      if (!this._element.disabled && !this._element.classList.contains(_n) && this._menu.classList.contains(bn)) {
        var e = t.getParentFromElement(this._element),
            n = {
          relatedTarget: this._element
        };
        Q.trigger(e, pn, n).defaultPrevented || (this._popper && this._popper.destroy(), _t.toggleClass(this._menu, bn), _t.toggleClass(e, bn), Q.trigger(e, gn, n));
      }
    }, n.dispose = function () {
      O(this._element, an), Q.off(this._element, ln), this._element = null, this._menu = null, this._popper && (this._popper.destroy(), this._popper = null);
    }, n.update = function () {
      this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._popper && this._popper.update();
    }, n._addEventListeners = function () {
      var t = this;
      Q.on(this._element, "click.coreui.dropdown", function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, n._getConfig = function (t) {
      return t = o(o(o({}, this.constructor.Default), _t.getDataAttributes(this._element)), t), _(sn, t, this.constructor.DefaultType), t;
    }, n._getMenuElement = function () {
      var e = t.getParentFromElement(this._element);
      return st.findOne(En, e);
    }, n._getPlacement = function () {
      var t = this._element.parentNode,
          e = "bottom-start";
      return t.classList.contains("dropup") ? (e = "top-start", this._menu.classList.contains(yn) && (e = "top-end")) : t.classList.contains("dropright") ? e = "right-start" : t.classList.contains("dropleft") ? e = "left-start" : this._menu.classList.contains(yn) && (e = "bottom-end"), e;
    }, n._detectNavbar = function () {
      return Boolean(this._element.closest(".navbar"));
    }, n._detectHeader = function () {
      return Boolean(this._element.closest(".c-header"));
    }, n._getOffset = function () {
      var t = this;
      return "function" == typeof this._config.offset ? function (e) {
        var n = e.placement,
            i = e.reference,
            o = e.popper;
        return t._config.offset({
          placement: n,
          reference: i,
          popper: o
        });
      } : this._config.offset;
    }, n._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "flip",
          enabled: this._config.flip
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }]
      };
      return "static" === this._config.display && (t.modifiers = {
        name: "applyStyles",
        enabled: !1
      }), o(o({}, t), this._config.popperConfig);
    }, t.dropdownInterface = function (e, n) {
      var i = k(e, an);

      if (i || (i = new t(e, "object" == _typeof(n) ? n : null)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t.dropdownInterface(this, e);
      });
    }, t.clearMenus = function (e) {
      if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)) for (var n = st.find(wn), i = 0, o = n.length; i < o; i++) {
        var r = t.getParentFromElement(n[i]),
            s = k(n[i], an),
            a = {
          relatedTarget: n[i]
        };

        if (e && "click" === e.type && (a.clickEvent = e), s) {
          var l = s._menu;
          if (r.classList.contains(bn)) if (!(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && "Tab" === e.key) && r.contains(e.target))) if (!Q.trigger(r, pn, a).defaultPrevented) {
            var c;
            if ("ontouchstart" in document.documentElement) (c = []).concat.apply(c, document.body.children).forEach(function (t) {
              return Q.off(t, "mouseover", null, function () {});
            });
            n[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), l.classList.remove(bn), r.classList.remove(bn), Q.trigger(r, gn, a);
          }
        }
      }
    }, t.getParentFromElement = function (t) {
      return d(t) || t.parentNode;
    }, t.dataApiKeydownHandler = function (e) {
      if (!(/input|textarea/i.test(e.target.tagName) ? e.key === un || e.key !== cn && (e.key !== hn && e.key !== fn || e.target.closest(En)) : !dn.test(e.key)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains(_n))) {
        var n = t.getParentFromElement(this),
            i = n.classList.contains(bn);
        if (e.key === cn) return (this.matches(wn) ? this : st.prev(this, wn)[0]).focus(), void t.clearMenus();

        if (i && e.key !== un) {
          var o = st.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n).filter(b);

          if (o.length) {
            var r = o.indexOf(e.target);
            e.key === fn && r > 0 && r--, e.key === hn && r < o.length - 1 && r++, o[r = -1 === r ? 0 : r].focus();
          }
        } else t.clearMenus();
      }
    }, t.getInstance = function (t) {
      return k(t, an);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ln;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Tn;
      }
    }]), t;
  }();

  Q.on(document, vn, wn, kn.dataApiKeydownHandler), Q.on(document, vn, En, kn.dataApiKeydownHandler), Q.on(document, mn, kn.clearMenus), Q.on(document, "keyup.coreui.dropdown.data-api", kn.clearMenus), Q.on(document, mn, wn, function (t) {
    t.preventDefault(), t.stopPropagation(), kn.dropdownInterface(this, "toggle");
  }), Q.on(document, mn, ".dropdown form", function (t) {
    return t.stopPropagation();
  });
  var On = E();

  if (On) {
    var Cn = On.fn[sn];
    On.fn[sn] = kn.jQueryInterface, On.fn[sn].Constructor = kn, On.fn[sn].noConflict = function () {
      return On.fn[sn] = Cn, kn.jQueryInterface;
    };
  }

  var Sn = "modal",
      An = "coreui.modal",
      xn = "." + An,
      Dn = "Escape",
      jn = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      Nn = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      In = "hidden" + xn,
      Pn = "show" + xn,
      Rn = "focusin" + xn,
      Mn = "resize" + xn,
      Hn = "click.dismiss" + xn,
      Wn = "keydown.dismiss" + xn,
      Yn = "mousedown.dismiss" + xn,
      Xn = "modal-open",
      Bn = "fade",
      Un = "show",
      qn = "modal-static",
      Qn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Fn = ".sticky-top",
      Vn = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = st.findOne(".modal-dialog", t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0, T(t, An, this);
    }

    var n = t.prototype;
    return n.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, n.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        this._element.classList.contains(Bn) && (this._isTransitioning = !0);
        var n = Q.trigger(this._element, Pn, {
          relatedTarget: t
        });
        this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), Q.on(this._element, Hn, '[data-dismiss="modal"]', function (t) {
          return e.hide(t);
        }), Q.on(this._dialog, Yn, function () {
          Q.one(e._element, "mouseup.dismiss.coreui.modal", function (t) {
            t.target === e._element && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, n.hide = function (t) {
      var e = this;

      if ((t && t.preventDefault(), this._isShown && !this._isTransitioning) && !Q.trigger(this._element, "hide.coreui.modal").defaultPrevented) {
        this._isShown = !1;

        var n = this._element.classList.contains(Bn);

        if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Q.off(document, Rn), this._element.classList.remove(Un), Q.off(this._element, Hn), Q.off(this._dialog, Yn), n) {
          var i = p(this._element);
          Q.one(this._element, c, function (t) {
            return e._hideModal(t);
          }), v(this._element, i);
        } else this._hideModal();
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return Q.off(t, xn);
      }), Q.off(document, Rn), O(this._element, An), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (t) {
      return t = o(o({}, jn), t), _(Sn, t, Nn), t;
    }, n._showElement = function (t) {
      var e = this,
          n = this._element.classList.contains(Bn),
          i = st.findOne(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && w(this._element), this._element.classList.add(Un), this._config.focus && this._enforceFocus();

      var o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Q.trigger(e._element, "shown.coreui.modal", {
          relatedTarget: t
        });
      };

      if (n) {
        var r = p(this._dialog);
        Q.one(this._dialog, c, o), v(this._dialog, r);
      } else o();
    }, n._enforceFocus = function () {
      var t = this;
      Q.off(document, Rn), Q.on(document, Rn, function (e) {
        document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var t = this;
      this._isShown ? Q.on(this._element, Wn, function (e) {
        t._config.keyboard && e.key === Dn ? (e.preventDefault(), t.hide()) : t._config.keyboard || e.key !== Dn || t._triggerBackdropTransition();
      }) : Q.off(this._element, Wn);
    }, n._setResizeEvent = function () {
      var t = this;
      this._isShown ? Q.on(window, Mn, function () {
        return t._adjustDialog();
      }) : Q.off(window, Mn);
    }, n._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        document.body.classList.remove(Xn), t._resetAdjustments(), t._resetScrollbar(), Q.trigger(t._element, In);
      });
    }, n._removeBackdrop = function () {
      this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
    }, n._showBackdrop = function (t) {
      var e = this,
          n = this._element.classList.contains(Bn) ? Bn : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), Q.on(this._element, Hn, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
        }), n && w(this._backdrop), this._backdrop.classList.add(Un), !n) return void t();
        var i = p(this._backdrop);
        Q.one(this._backdrop, c, t), v(this._backdrop, i);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove(Un);

        var o = function o() {
          e._removeBackdrop(), t();
        };

        if (this._element.classList.contains(Bn)) {
          var r = p(this._backdrop);
          Q.one(this._backdrop, c, o), v(this._backdrop, r);
        } else o();
      } else t();
    }, n._triggerBackdropTransition = function () {
      var t = this;

      if ("static" === this._config.backdrop) {
        if (Q.trigger(this._element, "hidePrevented.coreui.modal").defaultPrevented) return;
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        e || (this._element.style.overflowY = "hidden"), this._element.classList.add(qn);
        var n = p(this._dialog);
        Q.off(this._element, c), Q.one(this._element, c, function () {
          t._element.classList.remove(qn), e || (Q.one(t._element, c, function () {
            t._element.style.overflowY = "";
          }), v(t._element, n));
        }), v(this._element, n), this._element.focus();
      } else this.hide();
    }, n._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, n._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, n._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, n._setScrollbar = function () {
      var t = this;

      if (this._isBodyOverflowing) {
        st.find(Qn).forEach(function (e) {
          var n = e.style.paddingRight,
              i = window.getComputedStyle(e)["padding-right"];
          _t.setDataAttribute(e, "padding-right", n), e.style.paddingRight = parseFloat(i) + t._scrollbarWidth + "px";
        }), st.find(Fn).forEach(function (e) {
          var n = e.style.marginRight,
              i = window.getComputedStyle(e)["margin-right"];
          _t.setDataAttribute(e, "margin-right", n), e.style.marginRight = parseFloat(i) - t._scrollbarWidth + "px";
        });
        var e = document.body.style.paddingRight,
            n = window.getComputedStyle(document.body)["padding-right"];
        _t.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px";
      }

      document.body.classList.add(Xn);
    }, n._resetScrollbar = function () {
      st.find(Qn).forEach(function (t) {
        var e = _t.getDataAttribute(t, "padding-right");

        "undefined" != typeof e && (_t.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e);
      }), st.find(".sticky-top").forEach(function (t) {
        var e = _t.getDataAttribute(t, "margin-right");

        "undefined" != typeof e && (_t.removeDataAttribute(t, "margin-right"), t.style.marginRight = e);
      });

      var t = _t.getDataAttribute(document.body, "padding-right");

      "undefined" == typeof t ? document.body.style.paddingRight = "" : (_t.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t);
    }, n._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure", document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, t.jQueryInterface = function (e, n) {
      return this.each(function () {
        var i = k(this, An),
            r = o(o(o({}, jn), _t.getDataAttributes(this)), "object" == _typeof(e) && e ? e : {});

        if (i || (i = new t(this, r)), "string" == typeof e) {
          if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
          i[e](n);
        } else r.show && i.show(n);
      });
    }, t.getInstance = function (t) {
      return k(t, An);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return jn;
      }
    }]), t;
  }();

  Q.on(document, "click.coreui.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e = this,
        n = d(this);
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), Q.one(n, Pn, function (t) {
      t.defaultPrevented || Q.one(n, In, function () {
        b(e) && e.focus();
      });
    });
    var i = k(n, An);

    if (!i) {
      var r = o(o({}, _t.getDataAttributes(n)), _t.getDataAttributes(this));
      i = new Vn(n, r);
    }

    i.show(this);
  });
  var zn = E();

  if (zn) {
    var Kn = zn.fn.modal;
    zn.fn.modal = Vn.jQueryInterface, zn.fn.modal.Constructor = Vn, zn.fn.modal.noConflict = function () {
      return zn.fn.modal = Kn, Vn.jQueryInterface;
    };
  }

  var $n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Gn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      Jn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Zn = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function ti(t, e, n) {
    var i;
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);

    for (var o = new window.DOMParser().parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function a(t, n) {
      var i,
          o = s[t],
          a = o.nodeName.toLowerCase();
      if (-1 === r.indexOf(a)) return o.parentNode.removeChild(o), "continue";
      var l = (i = []).concat.apply(i, o.attributes),
          c = [].concat(e["*"] || [], e[a] || []);
      l.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === $n.indexOf(n) || Boolean(t.nodeValue.match(Gn) || t.nodeValue.match(Jn));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, c) || o.removeAttribute(t.nodeName);
      });
    }, l = 0, c = s.length; l < c; l++) {
      a(l);
    }

    return o.body.innerHTML;
  }

  var ei = "tooltip",
      ni = "coreui.tooltip",
      ii = "." + ni,
      oi = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      ri = ["sanitize", "whiteList", "sanitizeFn"],
      si = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|function)",
    container: "(string|element|boolean)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)"
  },
      ai = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      li = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Zn,
    popperConfig: null
  },
      ci = {
    HIDE: "hide" + ii,
    HIDDEN: "hidden" + ii,
    SHOW: "show" + ii,
    SHOWN: "shown" + ii,
    INSERTED: "inserted" + ii,
    CLICK: "click" + ii,
    FOCUSIN: "focusin" + ii,
    FOCUSOUT: "focusout" + ii,
    MOUSEENTER: "mouseenter" + ii,
    MOUSELEAVE: "mouseleave" + ii
  },
      ui = "fade",
      fi = "show",
      hi = "show",
      di = "out",
      pi = "hover",
      gi = "focus",
      mi = function () {
    function t(t, e) {
      if ("undefined" == typeof rn) throw new TypeError("CoreUI's tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners(), T(t, this.constructor.DATA_KEY, this);
    }

    var n = t.prototype;
    return n.enable = function () {
      this._isEnabled = !0;
    }, n.disable = function () {
      this._isEnabled = !1;
    }, n.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, n.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = k(t.delegateTarget, e);
        n || (n = new this.constructor(t.delegateTarget, this._getDelegateConfig()), T(t.delegateTarget, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (this.getTipElement().classList.contains(fi)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, n.dispose = function () {
      clearTimeout(this._timeout), O(this.element, this.constructor.DATA_KEY), Q.off(this.element, this.constructor.EVENT_KEY), Q.off(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, n.show = function () {
      var t = this;
      if ("none" === this.element.style.display) throw new Error("Please use show on visible elements");

      if (this.isWithContent() && this._isEnabled) {
        var e = Q.trigger(this.element, this.constructor.Event.SHOW),
            n = function t(e) {
          if (!document.documentElement.attachShadow) return null;

          if ("function" == typeof e.getRootNode) {
            var n = e.getRootNode();
            return n instanceof ShadowRoot ? n : null;
          }

          return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null;
        }(this.element),
            i = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);

        if (e.defaultPrevented || !i) return;
        var o = this.getTipElement(),
            r = u(this.constructor.NAME);
        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add(ui);

        var s,
            a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            l = this._getAttachment(a),
            f = this._getContainer();

        if (T(o, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || f.appendChild(o), Q.trigger(this.element, this.constructor.Event.INSERTED), this._popper = rn(this.element, o, this._getPopperConfig(l)), o.classList.add(fi), "ontouchstart" in document.documentElement) (s = []).concat.apply(s, document.body.children).forEach(function (t) {
          Q.on(t, "mouseover", function () {});
        });

        var h = function h() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, Q.trigger(t.element, t.constructor.Event.SHOWN), e === di && t._leave(null, t);
        };

        if (this.tip.classList.contains(ui)) {
          var d = p(this.tip);
          Q.one(this.tip, c, h), v(this.tip, d);
        } else h();
      }
    }, n.hide = function () {
      var t = this,
          e = this.getTipElement(),
          n = function n() {
        t._hoverState !== hi && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), Q.trigger(t.element, t.constructor.Event.HIDDEN), t._popper.destroy();
      };

      if (!Q.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
        var i;
        if (e.classList.remove(fi), "ontouchstart" in document.documentElement) (i = []).concat.apply(i, document.body.children).forEach(function (t) {
          return Q.off(t, "mouseover", y);
        });

        if (this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains(ui)) {
          var o = p(e);
          Q.one(e, c, n), v(e, o);
        } else n();

        this._hoverState = "";
      }
    }, n.update = function () {
      null !== this._popper && this._popper.update();
    }, n.isWithContent = function () {
      return Boolean(this.getTitle());
    }, n.getTipElement = function () {
      if (this.tip) return this.tip;
      var t = document.createElement("div");
      return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
    }, n.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(st.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove(ui, fi);
    }, n.setElementContent = function (t, e) {
      if (null !== t) return "object" == _typeof(e) && m(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = ti(e, this.config.whiteList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
    }, n.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, n._getPopperConfig = function (t) {
      var e = this;
      return o(o({}, {
        placement: t,
        modifiers: [{
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "arrow",
          options: {
            element: "." + this.constructor.NAME + "-arrow"
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this.config.boundary
          }
        }],
        onFirstUpdate: function onFirstUpdate(t) {
          t.originalPlacement !== t.placement && e._popper.update();
        }
      }), this.config.popperConfig);
    }, n._getOffset = function () {
      var t = this;
      return "function" == typeof this.config.offset ? function (e) {
        var n = e.placement,
            i = e.reference,
            o = e.popper;
        return t.config.offset({
          placement: n,
          reference: i,
          popper: o
        });
      } : this.config.offset;
    }, n._getContainer = function () {
      return !1 === this.config.container ? document.body : m(this.config.container) ? this.config.container : st.findOne(this.config.container);
    }, n._getAttachment = function (t) {
      return ai[t.toUpperCase()];
    }, n._setListeners = function () {
      var t = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) Q.on(t.element, t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if ("manual" !== e) {
          var n = e === pi ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              i = e === pi ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
          Q.on(t.element, n, t.config.selector, function (e) {
            return t._enter(e);
          }), Q.on(t.element, i, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        t.element && t.hide();
      }, Q.on(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler), this.config.selector ? this.config = o(o({}, this.config), {}, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, n._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, n._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || k(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), T(t.delegateTarget, n, e)), t && (e._activeTrigger["focusin" === t.type ? gi : pi] = !0), e.getTipElement().classList.contains(fi) || e._hoverState === hi ? e._hoverState = hi : (clearTimeout(e._timeout), e._hoverState = hi, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === hi && e.show();
      }, e.config.delay.show) : e.show());
    }, n._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || k(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), T(t.delegateTarget, n, e)), t && (e._activeTrigger["focusout" === t.type ? gi : pi] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = di, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === di && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, n._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, n._getConfig = function (t) {
      var e = _t.getDataAttributes(this.element);

      return Object.keys(e).forEach(function (t) {
        -1 !== ri.indexOf(t) && delete e[t];
      }), t && "object" == _typeof(t.container) && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = o(o(o({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _(ei, t, this.constructor.DefaultType), t.sanitize && (t.template = ti(t.template, t.whiteList, t.sanitizeFn)), t;
    }, n._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, n._cleanTipClass = function () {
      var t = this.getTipElement(),
          e = t.getAttribute("class").match(oi);
      null !== e && e.length > 0 && e.map(function (t) {
        return t.trim();
      }).forEach(function (e) {
        return t.classList.remove(e);
      });
    }, n._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("data-popper-placement") && (t.classList.remove(ui), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = k(this, ni),
            i = "object" == _typeof(e) && e;

        if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i)), "string" == typeof e)) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t.getInstance = function (t) {
      return k(t, ni);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return li;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ei;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return ni;
      }
    }, {
      key: "Event",
      get: function get() {
        return ci;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ii;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return si;
      }
    }]), t;
  }(),
      vi = E();

  if (vi) {
    var _i = vi.fn.tooltip;
    vi.fn.tooltip = mi.jQueryInterface, vi.fn.tooltip.Constructor = mi, vi.fn.tooltip.noConflict = function () {
      return vi.fn.tooltip = _i, mi.jQueryInterface;
    };
  }

  var bi = "popover",
      yi = "coreui.popover",
      wi = "." + yi,
      Ei = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Li = o(o({}, mi.Default), {}, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ti = o(o({}, mi.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      ki = {
    HIDE: "hide" + wi,
    HIDDEN: "hidden" + wi,
    SHOW: "show" + wi,
    SHOWN: "shown" + wi,
    INSERTED: "inserted" + wi,
    CLICK: "click" + wi,
    FOCUSIN: "focusin" + wi,
    FOCUSOUT: "focusout" + wi,
    MOUSEENTER: "mouseenter" + wi,
    MOUSELEAVE: "mouseleave" + wi
  },
      Oi = function (t) {
    var n, i;

    function o() {
      return t.apply(this, arguments) || this;
    }

    i = t, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
    var r = o.prototype;
    return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(st.findOne(".popover-header", t), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(st.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
    }, r._addAttachmentClass = function (t) {
      this.getTipElement().classList.add("bs-popover-" + t);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = this.getTipElement(),
          e = t.getAttribute("class").match(Ei);
      null !== e && e.length > 0 && e.map(function (t) {
        return t.trim();
      }).forEach(function (e) {
        return t.classList.remove(e);
      });
    }, o.jQueryInterface = function (t) {
      return this.each(function () {
        var e = k(this, yi),
            n = "object" == _typeof(t) ? t : null;

        if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), T(this, yi, e)), "string" == typeof t)) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, o.getInstance = function (t) {
      return k(t, yi);
    }, e(o, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return Li;
      }
    }, {
      key: "NAME",
      get: function get() {
        return bi;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return yi;
      }
    }, {
      key: "Event",
      get: function get() {
        return ki;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return wi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ti;
      }
    }]), o;
  }(mi),
      Ci = E();

  if (Ci) {
    var Si = Ci.fn.popover;
    Ci.fn.popover = Oi.jQueryInterface, Ci.fn.popover.Constructor = Oi, Ci.fn.popover.noConflict = function () {
      return Ci.fn.popover = Si, Oi.jQueryInterface;
    };
  }

  var Ai = "scrollspy",
      xi = "coreui.scrollspy",
      Di = "." + xi,
      ji = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Ni = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      Ii = "dropdown-item",
      Pi = "active",
      Ri = ".nav-link",
      Mi = "position",
      Hi = function () {
    function t(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ".nav-link, " + this._config.target + " " + ".list-group-item, " + this._config.target + " ." + Ii, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Q.on(this._scrollElement, "scroll.coreui.scrollspy", function (t) {
        return n._process(t);
      }), this.refresh(), this._process(), T(t, xi, this);
    }

    var n = t.prototype;
    return n.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : Mi,
          n = "auto" === this._config.method ? e : this._config.method,
          i = n === Mi ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), st.find(this._selector).map(function (t) {
        var e = h(t),
            o = e ? st.findOne(e) : null;

        if (o) {
          var r = o.getBoundingClientRect();
          if (r.width || r.height) return [_t[n](o).top + i, e];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, n.dispose = function () {
      O(this._element, xi), Q.off(this._scrollElement, Di), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (t) {
      if ("string" != typeof (t = o(o({}, ji), "object" == _typeof(t) && t ? t : {})).target && m(t.target)) {
        var e = t.target.id;
        e || (e = u(Ai), t.target.id = e), t.target = "#" + e;
      }

      return _(Ai, t, Ni), t;
    }, n._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, n._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, n._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, n._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= n) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, n._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",").map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          n = st.findOne(e.join(","));

      n.classList.contains(Ii) ? (st.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(Pi), n.classList.add(Pi)) : (n.classList.add(Pi), st.parents(n, ".nav, .list-group").forEach(function (t) {
        st.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
          return t.classList.add(Pi);
        }), st.prev(t, ".nav-item").forEach(function (t) {
          st.children(t, Ri).forEach(function (t) {
            return t.classList.add(Pi);
          });
        });
      })), Q.trigger(this._scrollElement, "activate.coreui.scrollspy", {
        relatedTarget: t
      });
    }, n._clear = function () {
      st.find(this._selector).filter(function (t) {
        return t.classList.contains(Pi);
      }).forEach(function (t) {
        return t.classList.remove(Pi);
      });
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = k(this, xi);

        if (n || (n = new t(this, "object" == _typeof(e) && e)), "string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t.getInstance = function (t) {
      return k(t, xi);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return ji;
      }
    }]), t;
  }();

  Q.on(window, "load.coreui.scrollspy.data-api", function () {
    st.find('[data-spy="scroll"]').forEach(function (t) {
      return new Hi(t, _t.getDataAttributes(t));
    });
  });
  var Wi = E();

  if (Wi) {
    var Yi = Wi.fn[Ai];
    Wi.fn[Ai] = Hi.jQueryInterface, Wi.fn[Ai].Constructor = Hi, Wi.fn[Ai].noConflict = function () {
      return Wi.fn[Ai] = Yi, Hi.jQueryInterface;
    };
  }
  /*!
     * perfect-scrollbar v1.5.0
     * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
     * Licensed under MIT
     */


  function Xi(t) {
    return getComputedStyle(t);
  }

  function Bi(t, e) {
    for (var n in e) {
      var i = e[n];
      "number" == typeof i && (i += "px"), t.style[n] = i;
    }

    return t;
  }

  function Ui(t) {
    var e = document.createElement("div");
    return e.className = t, e;
  }

  var qi = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

  function Qi(t, e) {
    if (!qi) throw new Error("No element matching method supported");
    return qi.call(t, e);
  }

  function Fi(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }

  function Vi(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return Qi(t, e);
    });
  }

  var zi = "ps",
      Ki = "ps__rtl",
      $i = {
    thumb: function thumb(t) {
      return "ps__thumb-" + t;
    },
    rail: function rail(t) {
      return "ps__rail-" + t;
    },
    consuming: "ps__child--consume"
  },
      Gi = {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function active(t) {
      return "ps--active-" + t;
    },
    scrolling: function scrolling(t) {
      return "ps--scrolling-" + t;
    }
  },
      Ji = {
    x: null,
    y: null
  };

  function Zi(t, e) {
    var n = t.element.classList,
        i = Gi.scrolling(e);
    n.contains(i) ? clearTimeout(Ji[e]) : n.add(i);
  }

  function to(t, e) {
    Ji[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(Gi.scrolling(e));
    }, t.settings.scrollingThreshold);
  }

  var eo = function eo(t) {
    this.element = t, this.handlers = {};
  },
      no = {
    isEmpty: {
      configurable: !0
    }
  };

  eo.prototype.bind = function (t, e) {
    "undefined" == typeof this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
  }, eo.prototype.unbind = function (t, e) {
    var n = this;
    this.handlers[t] = this.handlers[t].filter(function (i) {
      return !(!e || i === e) || (n.element.removeEventListener(t, i, !1), !1);
    });
  }, eo.prototype.unbindAll = function () {
    for (var t in this.handlers) {
      this.unbind(t);
    }
  }, no.isEmpty.get = function () {
    var t = this;
    return Object.keys(this.handlers).every(function (e) {
      return 0 === t.handlers[e].length;
    });
  }, Object.defineProperties(eo.prototype, no);

  var io = function io() {
    this.eventElements = [];
  };

  function oo(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }

  function ro(t, e, n, i, o) {
    var r;
    if (void 0 === i && (i = !0), void 0 === o && (o = !1), "top" === e) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];else {
      if ("left" !== e) throw new Error("A proper axis should be provided");
      r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    }
    !function (t, e, n, i, o) {
      var r = n[0],
          s = n[1],
          a = n[2],
          l = n[3],
          c = n[4],
          u = n[5];
      void 0 === i && (i = !0);
      void 0 === o && (o = !1);
      var f = t.element;
      t.reach[l] = null, f[a] < 1 && (t.reach[l] = "start");
      f[a] > t[r] - t[s] - 1 && (t.reach[l] = "end");
      e && (f.dispatchEvent(oo("ps-scroll-" + l)), e < 0 ? f.dispatchEvent(oo("ps-scroll-" + c)) : e > 0 && f.dispatchEvent(oo("ps-scroll-" + u)), i && function (t, e) {
        Zi(t, e), to(t, e);
      }(t, l));
      t.reach[l] && (e || o) && f.dispatchEvent(oo("ps-" + l + "-reach-" + t.reach[l]));
    }(t, n, r, i, o);
  }

  function so(t) {
    return parseInt(t, 10) || 0;
  }

  io.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || (e = new eo(t), this.eventElements.push(e)), e;
  }, io.prototype.bind = function (t, e, n) {
    this.eventElement(t).bind(e, n);
  }, io.prototype.unbind = function (t, e, n) {
    var i = this.eventElement(t);
    i.unbind(e, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1);
  }, io.prototype.unbindAll = function () {
    this.eventElements.forEach(function (t) {
      return t.unbindAll();
    }), this.eventElements = [];
  }, io.prototype.once = function (t, e, n) {
    var i = this.eventElement(t),
        o = function o(t) {
      i.unbind(e, o), n(t);
    };

    i.bind(e, o);
  };
  var ao = {
    isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
    isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
  };

  function lo(t) {
    var e = t.element,
        n = Math.floor(e.scrollTop),
        i = e.getBoundingClientRect();
    t.containerWidth = Math.ceil(i.width), t.containerHeight = Math.ceil(i.height), t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (Vi(e, $i.rail("x")).forEach(function (t) {
      return Fi(t);
    }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (Vi(e, $i.rail("y")).forEach(function (t) {
      return Fi(t);
    }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = co(t, so(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = so((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = co(t, so(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = so(n * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), function (t, e) {
      var n = {
        width: e.railXWidth
      },
          i = Math.floor(t.scrollTop);
      e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft;
      e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - i : n.top = e.scrollbarXTop + i;
      Bi(e.scrollbarXRail, n);
      var o = {
        top: i,
        height: e.railYHeight
      };
      e.isScrollbarYUsingRight ? e.isRtl ? o.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth - 9 : o.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? o.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : o.left = e.scrollbarYLeft + t.scrollLeft;
      Bi(e.scrollbarYRail, o), Bi(e.scrollbarX, {
        left: e.scrollbarXLeft,
        width: e.scrollbarXWidth - e.railBorderXWidth
      }), Bi(e.scrollbarY, {
        top: e.scrollbarYTop,
        height: e.scrollbarYHeight - e.railBorderYWidth
      });
    }(e, t), t.scrollbarXActive ? e.classList.add(Gi.active("x")) : (e.classList.remove(Gi.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0), t.scrollbarYActive ? e.classList.add(Gi.active("y")) : (e.classList.remove(Gi.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0);
  }

  function co(t, e) {
    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
  }

  function uo(t, e) {
    var n = e[0],
        i = e[1],
        o = e[2],
        r = e[3],
        s = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        u = e[8],
        f = t.element,
        h = null,
        d = null,
        p = null;

    function g(e) {
      e.touches && e.touches[0] && (e[o] = e.touches[0].pageY), f[l] = h + p * (e[o] - d), Zi(t, c), lo(t), e.stopPropagation(), e.preventDefault();
    }

    function m() {
      to(t, c), t[u].classList.remove(Gi.clicking), t.event.unbind(t.ownerDocument, "mousemove", g);
    }

    function v(e, s) {
      h = f[l], s && e.touches && (e[o] = e.touches[0].pageY), d = e[o], p = (t[i] - t[n]) / (t[r] - t[a]), s ? t.event.bind(t.ownerDocument, "touchmove", g) : (t.event.bind(t.ownerDocument, "mousemove", g), t.event.once(t.ownerDocument, "mouseup", m), e.preventDefault()), t[u].classList.add(Gi.clicking), e.stopPropagation();
    }

    t.event.bind(t[s], "mousedown", function (t) {
      v(t);
    }), t.event.bind(t[s], "touchstart", function (t) {
      v(t, !0);
    });
  }

  var fo = {
    "click-rail": function clickRail(t) {
      t.element, t.event.bind(t.scrollbarY, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
        var n = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
        t.element.scrollTop += n * t.containerHeight, lo(t), e.stopPropagation();
      }), t.event.bind(t.scrollbarX, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
        var n = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
        t.element.scrollLeft += n * t.containerWidth, lo(t), e.stopPropagation();
      });
    },
    "drag-thumb": function dragThumb(t) {
      uo(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), uo(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
    },
    keyboard: function keyboard(t) {
      var e = t.element;
      t.event.bind(t.ownerDocument, "keydown", function (n) {
        if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (Qi(e, ":hover") || Qi(t.scrollbarX, ":focus") || Qi(t.scrollbarY, ":focus"))) {
          var i,
              o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;

          if (o) {
            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;else for (; o.shadowRoot;) {
              o = o.shadowRoot.activeElement;
            }
            if (Qi(i = o, "input,[contenteditable]") || Qi(i, "select,[contenteditable]") || Qi(i, "textarea,[contenteditable]") || Qi(i, "button,[contenteditable]")) return;
          }

          var r = 0,
              s = 0;

          switch (n.which) {
            case 37:
              r = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
              break;

            case 38:
              s = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
              break;

            case 39:
              r = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
              break;

            case 40:
              s = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
              break;

            case 32:
              s = n.shiftKey ? t.containerHeight : -t.containerHeight;
              break;

            case 33:
              s = t.containerHeight;
              break;

            case 34:
              s = -t.containerHeight;
              break;

            case 36:
              s = t.contentHeight;
              break;

            case 35:
              s = -t.contentHeight;
              break;

            default:
              return;
          }

          t.settings.suppressScrollX && 0 !== r || t.settings.suppressScrollY && 0 !== s || (e.scrollTop -= s, e.scrollLeft += r, lo(t), function (n, i) {
            var o = Math.floor(e.scrollTop);

            if (0 === n) {
              if (!t.scrollbarYActive) return !1;
              if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation;
            }

            var r = e.scrollLeft;

            if (0 === i) {
              if (!t.scrollbarXActive) return !1;
              if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation;
            }

            return !0;
          }(r, s) && n.preventDefault());
        }
      });
    },
    wheel: function wheel(t) {
      var e = t.element;

      function n(n) {
        var i = function (t) {
          var e = t.deltaX,
              n = -1 * t.deltaY;
          return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e != e && n != n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n];
        }(n),
            o = i[0],
            r = i[1];

        if (!function (t, n, i) {
          if (!ao.isWebKit && e.querySelector("select:focus")) return !0;
          if (!e.contains(t)) return !1;

          for (var o = t; o && o !== e;) {
            if (o.classList.contains($i.consuming)) return !0;
            var r = Xi(o);

            if (i && r.overflowY.match(/(scroll|auto)/)) {
              var s = o.scrollHeight - o.clientHeight;
              if (s > 0 && (o.scrollTop > 0 && i < 0 || o.scrollTop < s && i > 0)) return !0;
            }

            if (n && r.overflowX.match(/(scroll|auto)/)) {
              var a = o.scrollWidth - o.clientWidth;
              if (a > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < a && n > 0)) return !0;
            }

            o = o.parentNode;
          }

          return !1;
        }(n.target, o, r)) {
          var s = !1;
          t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (r ? e.scrollTop -= r * t.settings.wheelSpeed : e.scrollTop += o * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? e.scrollLeft += o * t.settings.wheelSpeed : e.scrollLeft -= r * t.settings.wheelSpeed, s = !0) : (e.scrollTop -= r * t.settings.wheelSpeed, e.scrollLeft += o * t.settings.wheelSpeed), lo(t), (s = s || function (n, i) {
            var o = Math.floor(e.scrollTop),
                r = 0 === e.scrollTop,
                s = o + e.offsetHeight === e.scrollHeight,
                a = 0 === e.scrollLeft,
                l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
            return !(Math.abs(i) > Math.abs(n) ? r || s : a || l) || !t.settings.wheelPropagation;
          }(o, r)) && !n.ctrlKey && (n.stopPropagation(), n.preventDefault());
        }
      }

      "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", n) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", n);
    },
    touch: function touch(t) {
      if (ao.supportsTouch || ao.supportsIePointer) {
        var e = t.element,
            n = {},
            i = 0,
            o = {},
            r = null;
        ao.supportsTouch ? (t.event.bind(e, "touchstart", c), t.event.bind(e, "touchmove", u), t.event.bind(e, "touchend", f)) : ao.supportsIePointer && (window.PointerEvent ? (t.event.bind(e, "pointerdown", c), t.event.bind(e, "pointermove", u), t.event.bind(e, "pointerup", f)) : window.MSPointerEvent && (t.event.bind(e, "MSPointerDown", c), t.event.bind(e, "MSPointerMove", u), t.event.bind(e, "MSPointerUp", f)));
      }

      function s(n, i) {
        e.scrollTop -= i, e.scrollLeft -= n, lo(t);
      }

      function a(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function l(t) {
        return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE));
      }

      function c(t) {
        if (l(t)) {
          var e = a(t);
          n.pageX = e.pageX, n.pageY = e.pageY, i = new Date().getTime(), null !== r && clearInterval(r);
        }
      }

      function u(r) {
        if (l(r)) {
          var c = a(r),
              u = {
            pageX: c.pageX,
            pageY: c.pageY
          },
              f = u.pageX - n.pageX,
              h = u.pageY - n.pageY;
          if (function (t, n, i) {
            if (!e.contains(t)) return !1;

            for (var o = t; o && o !== e;) {
              if (o.classList.contains($i.consuming)) return !0;
              var r = Xi(o);

              if (i && r.overflowY.match(/(scroll|auto)/)) {
                var s = o.scrollHeight - o.clientHeight;
                if (s > 0 && (o.scrollTop > 0 && i < 0 || o.scrollTop < s && i > 0)) return !0;
              }

              if (n && r.overflowX.match(/(scroll|auto)/)) {
                var a = o.scrollWidth - o.clientWidth;
                if (a > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < a && n > 0)) return !0;
              }

              o = o.parentNode;
            }

            return !1;
          }(r.target, f, h)) return;
          s(f, h), n = u;
          var d = new Date().getTime(),
              p = d - i;
          p > 0 && (o.x = f / p, o.y = h / p, i = d), function (n, i) {
            var o = Math.floor(e.scrollTop),
                r = e.scrollLeft,
                s = Math.abs(n),
                a = Math.abs(i);

            if (a > s) {
              if (i < 0 && o === t.contentHeight - t.containerHeight || i > 0 && 0 === o) return 0 === window.scrollY && i > 0 && ao.isChrome;
            } else if (s > a && (n < 0 && r === t.contentWidth - t.containerWidth || n > 0 && 0 === r)) return !0;

            return !0;
          }(f, h) && r.preventDefault();
        }
      }

      function f() {
        t.settings.swipeEasing && (clearInterval(r), r = setInterval(function () {
          t.isInitialized ? clearInterval(r) : o.x || o.y ? Math.abs(o.x) < .01 && Math.abs(o.y) < .01 ? clearInterval(r) : (s(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8) : clearInterval(r);
        }, 10));
      }
    }
  },
      ho = function ho(t, e) {
    var n = this;
    if (void 0 === e && (e = {}), "string" == typeof t && (t = document.querySelector(t)), !t || !t.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");

    for (var i in this.element = t, t.classList.add(zi), this.settings = {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !0,
      wheelSpeed: 1
    }, e) {
      this.settings[i] = e[i];
    }

    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;

    var o,
        r,
        s = function s() {
      return t.classList.add(Gi.focus);
    },
        a = function a() {
      return t.classList.remove(Gi.focus);
    };

    this.isRtl = "rtl" === Xi(t).direction, !0 === this.isRtl && t.classList.add(Ki), this.isNegativeScroll = (r = t.scrollLeft, t.scrollLeft = -1, o = t.scrollLeft < 0, t.scrollLeft = r, o), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new io(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = Ui($i.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = Ui($i.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
    var l = Xi(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(l.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = so(l.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = so(l.borderLeftWidth) + so(l.borderRightWidth), Bi(this.scrollbarXRail, {
      display: "block"
    }), this.railXMarginWidth = so(l.marginLeft) + so(l.marginRight), Bi(this.scrollbarXRail, {
      display: ""
    }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = Ui($i.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = Ui($i.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
    var c = Xi(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(c.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = so(c.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
      var e = Xi(t);
      return so(e.width) + so(e.paddingLeft) + so(e.paddingRight) + so(e.borderLeftWidth) + so(e.borderRightWidth);
    }(this.scrollbarY) : null, this.railBorderYWidth = so(c.borderTopWidth) + so(c.borderBottomWidth), Bi(this.scrollbarYRail, {
      display: "block"
    }), this.railYMarginHeight = so(c.marginTop) + so(c.marginBottom), Bi(this.scrollbarYRail, {
      display: ""
    }), this.railYHeight = null, this.railYRatio = null, this.reach = {
      x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    }, this.isAlive = !0, this.settings.handlers.forEach(function (t) {
      return fo[t](n);
    }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function (t) {
      return n.onScroll(t);
    }), lo(this);
  };

  ho.prototype.update = function () {
    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, Bi(this.scrollbarXRail, {
      display: "block"
    }), Bi(this.scrollbarYRail, {
      display: "block"
    }), this.railXMarginWidth = so(Xi(this.scrollbarXRail).marginLeft) + so(Xi(this.scrollbarXRail).marginRight), this.railYMarginHeight = so(Xi(this.scrollbarYRail).marginTop) + so(Xi(this.scrollbarYRail).marginBottom), Bi(this.scrollbarXRail, {
      display: "none"
    }), Bi(this.scrollbarYRail, {
      display: "none"
    }), lo(this), ro(this, "top", 0, !1, !0), ro(this, "left", 0, !1, !0), Bi(this.scrollbarXRail, {
      display: ""
    }), Bi(this.scrollbarYRail, {
      display: ""
    }));
  }, ho.prototype.onScroll = function (t) {
    this.isAlive && (lo(this), ro(this, "top", this.element.scrollTop - this.lastScrollTop), ro(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
  }, ho.prototype.destroy = function () {
    this.isAlive && (this.event.unbindAll(), Fi(this.scrollbarX), Fi(this.scrollbarY), Fi(this.scrollbarXRail), Fi(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
  }, ho.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (t) {
      return !t.match(/^ps([-_].+|)$/);
    }).join(" ");
  };

  var po = "sidebar",
      go = "coreui.sidebar",
      mo = {
    activeLinksExact: !0,
    breakpoints: {
      xs: "c-sidebar-show",
      sm: "c-sidebar-sm-show",
      md: "c-sidebar-md-show",
      lg: "c-sidebar-lg-show",
      xl: "c-sidebar-xl-show",
      xxl: "c-sidebar-xxl-show"
    },
    dropdownAccordion: !0
  },
      vo = {
    activeLinksExact: "boolean",
    breakpoints: "object",
    dropdownAccordion: "(string|boolean)"
  },
      _o = "c-active",
      bo = "c-sidebar-nav-dropdown",
      yo = "c-show",
      wo = "c-sidebar-minimized",
      Eo = "c-sidebar-unfoldable",
      Lo = "click.coreui.sidebar.data-api",
      To = ".c-sidebar-nav-dropdown-toggle",
      ko = ".c-sidebar-nav-dropdown",
      Oo = ".c-sidebar-nav-link",
      Co = ".c-sidebar-nav",
      So = ".c-sidebar",
      Ao = function () {
    function t(t, e) {
      if ("undefined" == typeof ho) throw new TypeError("CoreUI's sidebar require Perfect Scrollbar");
      this._element = t, this._config = this._getConfig(e), this._open = this._isVisible(), this._mobile = this._isMobile(), this._overlaid = this._isOverlaid(), this._minimize = this._isMinimized(), this._unfoldable = this._isUnfoldable(), this._setActiveLink(), this._ps = null, this._backdrop = null, this._psInit(), this._addEventListeners(), T(t, go, this);
    }

    var n = t.prototype;
    return n.open = function (t) {
      var e = this;
      Q.trigger(this._element, "open.coreui.sidebar"), this._isMobile() ? (this._addClassName(this._firstBreakpointClassName()), this._showBackdrop(), Q.one(this._element, c, function () {
        e._addClickOutListener();
      })) : t ? (this._addClassName(this._getBreakpointClassName(t)), this._isOverlaid() && Q.one(this._element, c, function () {
        e._addClickOutListener();
      })) : (this._addClassName(this._firstBreakpointClassName()), this._isOverlaid() && Q.one(this._element, c, function () {
        e._addClickOutListener();
      }));
      var n = p(this._element);
      Q.one(this._element, c, function () {
        !0 === e._isVisible() && (e._open = !0, Q.trigger(e._element, "opened.coreui.sidebar"));
      }), v(this._element, n);
    }, n.close = function (t) {
      var e = this;
      Q.trigger(this._element, "close.coreui.sidebar"), this._isMobile() ? (this._element.classList.remove(this._firstBreakpointClassName()), this._removeBackdrop(), this._removeClickOutListener()) : t ? (this._element.classList.remove(this._getBreakpointClassName(t)), this._isOverlaid() && this._removeClickOutListener()) : (this._element.classList.remove(this._firstBreakpointClassName()), this._isOverlaid() && this._removeClickOutListener());
      var n = p(this._element);
      Q.one(this._element, c, function () {
        !1 === e._isVisible() && (e._open = !1, Q.trigger(e._element, "closed.coreui.sidebar"));
      }), v(this._element, n);
    }, n.toggle = function (t) {
      this._open ? this.close(t) : this.open(t);
    }, n.minimize = function () {
      this._isMobile() || (this._addClassName(wo), this._minimize = !0, this._psDestroy());
    }, n.unfoldable = function () {
      this._isMobile() || (this._addClassName(Eo), this._unfoldable = !0);
    }, n.reset = function () {
      this._element.classList.contains(wo) && (this._element.classList.remove(wo), this._minimize = !1, Q.one(this._element, c, this._psInit())), this._element.classList.contains(Eo) && (this._element.classList.remove(Eo), this._unfoldable = !1);
    }, n._getConfig = function (t) {
      return t = o(o(o({}, this.constructor.Default), _t.getDataAttributes(this._element)), t), _(po, t, this.constructor.DefaultType), t;
    }, n._isMobile = function () {
      return Boolean(window.getComputedStyle(this._element, null).getPropertyValue("--is-mobile"));
    }, n._isIOS = function () {
      var t = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
      if (Boolean(navigator.platform)) for (; t.length;) {
        if (navigator.platform === t.pop()) return !0;
      }
      return !1;
    }, n._isMinimized = function () {
      return this._element.classList.contains(wo);
    }, n._isOverlaid = function () {
      return this._element.classList.contains("c-sidebar-overlaid");
    }, n._isUnfoldable = function () {
      return this._element.classList.contains(Eo);
    }, n._isVisible = function () {
      var t = this._element.getBoundingClientRect();

      return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
    }, n._addClassName = function (t) {
      this._element.classList.add(t);
    }, n._firstBreakpointClassName = function () {
      return Object.keys(mo.breakpoints).map(function (t) {
        return mo.breakpoints[t];
      })[0];
    }, n._getBreakpointClassName = function (t) {
      return mo.breakpoints[t];
    }, n._removeBackdrop = function () {
      this._backdrop && (this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null);
    }, n._showBackdrop = function () {
      this._backdrop || (this._backdrop = document.createElement("div"), this._backdrop.className = "c-sidebar-backdrop", this._backdrop.classList.add("c-fade"), document.body.appendChild(this._backdrop), w(this._backdrop), this._backdrop.classList.add(yo));
    }, n._clickOutListener = function (t, e) {
      null === t.target.closest(So) && (t.preventDefault(), t.stopPropagation(), e.close());
    }, n._addClickOutListener = function () {
      var t = this;
      Q.on(document, Lo, function (e) {
        t._clickOutListener(e, t);
      });
    }, n._removeClickOutListener = function () {
      Q.off(document, Lo);
    }, n._getAllSiblings = function (t, e) {
      var n = [];
      t = t.parentNode.firstChild;

      do {
        3 !== t.nodeType && 8 !== t.nodeType && (e && !e(t) || n.push(t));
      } while (t = t.nextSibling);

      return n;
    }, n._toggleDropdown = function (t, e) {
      var n = t.target;
      n.classList.contains("c-sidebar-nav-dropdown-toggle") || (n = n.closest(To));
      var i = n.closest(Co).dataset;
      "undefined" != typeof i.dropdownAccordion && (mo.dropdownAccordion = JSON.parse(i.dropdownAccordion)), !0 === mo.dropdownAccordion && this._getAllSiblings(n.parentElement, function (t) {
        return Boolean(t.classList.contains(bo));
      }).forEach(function (t) {
        t !== n.parentNode && t.classList.contains(bo) && t.classList.remove(yo);
      }), n.parentNode.classList.toggle(yo), e._psUpdate();
    }, n._psInit = function () {
      this._element.querySelector(Co) && !this._isIOS() && (this._ps = new ho(this._element.querySelector(Co), {
        suppressScrollX: !0,
        wheelPropagation: !1
      }));
    }, n._psUpdate = function () {
      this._ps && this._ps.update();
    }, n._psDestroy = function () {
      this._ps && (this._ps.destroy(), this._ps = null);
    }, n._getParents = function (t, e) {
      for (var n = []; t && t !== document; t = t.parentNode) {
        e ? t.matches(e) && n.push(t) : n.push(t);
      }

      return n;
    }, n._setActiveLink = function () {
      var t = this;
      Array.from(this._element.querySelectorAll(Oo)).forEach(function (e) {
        var n;
        "#" === (n = /\\?.*=/.test(String(window.location)) || /\\?./.test(String(window.location)) ? String(window.location).split("?")[0] : /#./.test(String(window.location)) ? String(window.location).split("#")[0] : String(window.location)).slice(-1) && (n = n.slice(0, -1));
        var i = e.closest(Co).dataset;
        "undefined" != typeof i.activeLinksExact && (mo.activeLinksExact = JSON.parse(i.activeLinksExact)), mo.activeLinksExact && e.href === n && (e.classList.add(_o), Array.from(t._getParents(e, ko)).forEach(function (t) {
          t.classList.add(yo);
        })), !mo.activeLinksExact && e.href.startsWith(n) && (e.classList.add(_o), Array.from(t._getParents(e, ko)).forEach(function (t) {
          t.classList.add(yo);
        }));
      });
    }, n._addEventListeners = function () {
      var t = this;
      this._mobile && this._open && this._addClickOutListener(), this._overlaid && this._open && this._addClickOutListener(), Q.on(this._element, "classtoggle", function (e) {
        if (e.detail.className === wo && (t._element.classList.contains(wo) ? t.minimize() : t.reset()), e.detail.className === Eo && (t._element.classList.contains(Eo) ? t.unfoldable() : t.reset()), "undefined" != typeof Object.keys(mo.breakpoints).find(function (t) {
          return mo.breakpoints[t] === e.detail.className;
        })) {
          var n = e.detail.className,
              i = Object.keys(mo.breakpoints).find(function (t) {
            return mo.breakpoints[t] === n;
          });
          e.detail.add ? t.open(i) : t.close(i);
        }
      }), Q.on(this._element, Lo, To, function (e) {
        e.preventDefault(), t._toggleDropdown(e, t);
      }), Q.on(this._element, Lo, Oo, function () {
        t._isMobile() && t.close();
      });
    }, t._sidebarInterface = function (e, n) {
      var i = k(e, go);

      if (i || (i = new t(e, "object" == _typeof(n) && n)), "string" == typeof n) {
        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        t._sidebarInterface(this, e);
      });
    }, t.getInstance = function (t) {
      return k(t, go);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "Default",
      get: function get() {
        return mo;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return vo;
      }
    }]), t;
  }();

  Q.on(window, "load.coreui.sidebar.data-api", function () {
    Array.from(document.querySelectorAll(So)).forEach(function (t) {
      Ao._sidebarInterface(t);
    });
  });
  var xo = E();

  if (xo) {
    var Do = xo.fn.sidebar;
    xo.fn.sidebar = Ao.jQueryInterface, xo.fn.sidebar.Constructor = Ao, xo.fn.sidebar.noConflict = function () {
      return xo.fn.sidebar = Do, Ao.jQueryInterface;
    };
  }

  var jo = "coreui.tab",
      No = "active",
      Io = "fade",
      Po = "show",
      Ro = ".active",
      Mo = ":scope > li > .active",
      Ho = function () {
    function t(t) {
      this._element = t, T(this._element, jo, this);
    }

    var n = t.prototype;
    return n.show = function () {
      var t = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(No) || this._element.classList.contains("disabled"))) {
        var e,
            n = d(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var o = "UL" === i.nodeName || "OL" === i.nodeName ? Mo : Ro;
          e = (e = st.find(o, i))[e.length - 1];
        }

        var r = null;

        if (e && (r = Q.trigger(e, "hide.coreui.tab", {
          relatedTarget: this._element
        })), !(Q.trigger(this._element, "show.coreui.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== r && r.defaultPrevented)) {
          this._activate(this._element, i);

          var s = function s() {
            Q.trigger(e, "hidden.coreui.tab", {
              relatedTarget: t._element
            }), Q.trigger(t._element, "shown.coreui.tab", {
              relatedTarget: e
            });
          };

          n ? this._activate(n, n.parentNode, s) : s();
        }
      }
    }, n.dispose = function () {
      O(this._element, jo), this._element = null;
    }, n._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? st.children(e, Ro) : st.find(Mo, e))[0],
          r = n && o && o.classList.contains(Io),
          s = function s() {
        return i._transitionComplete(t, o, n);
      };

      if (o && r) {
        var a = p(o);
        o.classList.remove(Po), Q.one(o, c, s), v(o, a);
      } else s();
    }, n._transitionComplete = function (t, e, n) {
      if (e) {
        e.classList.remove(No);
        var i = st.findOne(":scope > .dropdown-menu .active", e.parentNode);
        i && i.classList.remove(No), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      (t.classList.add(No), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), w(t), t.classList.contains(Io) && t.classList.add(Po), t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && st.find(".dropdown-toggle").forEach(function (t) {
        return t.classList.add(No);
      }), t.setAttribute("aria-expanded", !0));
      n && n();
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = k(this, jo) || new t(this);

        if ("string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t.getInstance = function (t) {
      return k(t, jo);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }]), t;
  }();

  Q.on(document, "click.coreui.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
    t.preventDefault(), (k(this, jo) || new Ho(this)).show();
  });
  var Wo = E();

  if (Wo) {
    var Yo = Wo.fn.tab;
    Wo.fn.tab = Ho.jQueryInterface, Wo.fn.tab.Constructor = Ho, Wo.fn.tab.noConflict = function () {
      return Wo.fn.tab = Yo, Ho.jQueryInterface;
    };
  }

  var Xo,
      Bo,
      Uo,
      qo,
      Qo,
      Fo = "toast",
      Vo = "coreui.toast",
      zo = "." + Vo,
      Ko = "click.dismiss" + zo,
      $o = "hide",
      Go = "show",
      Jo = "showing",
      Zo = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      tr = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  },
      er = function () {
    function t(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners(), T(t, Vo, this);
    }

    var n = t.prototype;
    return n.show = function () {
      var t = this;

      if (!Q.trigger(this._element, "show.coreui.toast").defaultPrevented) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var e = function e() {
          t._element.classList.remove(Jo), t._element.classList.add(Go), Q.trigger(t._element, "shown.coreui.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
            t.hide();
          }, t._config.delay));
        };

        if (this._element.classList.remove($o), w(this._element), this._element.classList.add(Jo), this._config.animation) {
          var n = p(this._element);
          Q.one(this._element, c, e), v(this._element, n);
        } else e();
      }
    }, n.hide = function () {
      var t = this;

      if (this._element.classList.contains(Go) && !Q.trigger(this._element, "hide.coreui.toast").defaultPrevented) {
        var e = function e() {
          t._element.classList.add($o), Q.trigger(t._element, "hidden.coreui.toast");
        };

        if (this._element.classList.remove(Go), this._config.animation) {
          var n = p(this._element);
          Q.one(this._element, c, e), v(this._element, n);
        } else e();
      }
    }, n.dispose = function () {
      this._clearTimeout(), this._element.classList.contains(Go) && this._element.classList.remove(Go), Q.off(this._element, Ko), O(this._element, Vo), this._element = null, this._config = null;
    }, n._getConfig = function (t) {
      return t = o(o(o({}, tr), _t.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), _(Fo, t, this.constructor.DefaultType), t;
    }, n._setListeners = function () {
      var t = this;
      Q.on(this._element, Ko, '[data-dismiss="toast"]', function () {
        return t.hide();
      });
    }, n._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, t.jQueryInterface = function (e) {
      return this.each(function () {
        var n = k(this, Vo);

        if (n || (n = new t(this, "object" == _typeof(e) && e)), "string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e](this);
        }
      });
    }, t.getInstance = function (t) {
      return k(t, Vo);
    }, e(t, null, [{
      key: "VERSION",
      get: function get() {
        return "3.2.2";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zo;
      }
    }, {
      key: "Default",
      get: function get() {
        return tr;
      }
    }]), t;
  }(),
      nr = E();

  if (nr) {
    var ir = nr.fn.toast;
    nr.fn.toast = er.jQueryInterface, nr.fn.toast.Constructor = er, nr.fn.toast.noConflict = function () {
      return nr.fn.toast = ir, er.jQueryInterface;
    };
  }

  return Array.from || (Array.from = (Xo = Object.prototype.toString, Bo = function Bo(t) {
    return "function" == typeof t || "[object Function]" === Xo.call(t);
  }, Uo = Math.pow(2, 53) - 1, qo = function qo(t) {
    var e = function (t) {
      var e = Number(t);
      return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e;
    }(t);

    return Math.min(Math.max(e, 0), Uo);
  }, function (t) {
    var e = this,
        n = Object(t);
    if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
    var i,
        o = arguments.length > 1 ? arguments[1] : void 0;

    if ("undefined" != typeof o) {
      if (!Bo(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
      arguments.length > 2 && (i = arguments[2]);
    }

    for (var r, s = qo(n.length), a = Bo(e) ? Object(new e(s)) : new Array(s), l = 0; l < s;) {
      r = n[l], a[l] = o ? "undefined" == typeof i ? o(r, l) : o.call(i, r, l) : r, l += 1;
    }

    return a.length = s, a;
  })), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
    var e = this;

    do {
      if (e.matches(t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);

    return null;
  }), function () {
    if ("function" == typeof window.CustomEvent) return !1;

    window.CustomEvent = function (t, e) {
      e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
      };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
    };
  }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (t) {
    for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;) {
      ;
    }

    return n > -1;
  }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function value(t) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var e = Object(this),
          n = e.length >>> 0;
      if ("function" != typeof t) throw new TypeError("predicate must be a function");

      for (var i = arguments[1], o = 0; o < n;) {
        var r = e[o];
        if (t.call(i, r, o, e)) return r;
        o++;
      }
    }
  }), "function" != typeof Object.assign && (Object.assign = function (t, e) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");

    for (var n = Object(t), i = 1; i < arguments.length; i++) {
      var o = arguments[i];
      if (null != o) for (var r in o) {
        Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
      }
    }

    return n;
  }), Qo = function Qo() {
    function t(t) {
      var e = this.constructor;
      return this.then(function (n) {
        return e.resolve(t()).then(function () {
          return n;
        });
      }, function (n) {
        return e.resolve(t()).then(function () {
          return e.reject(n);
        });
      });
    }

    var e = setTimeout;

    function n(t) {
      return Boolean(t && "undefined" != typeof t.length);
    }

    function i() {}

    function o(t) {
      if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof t) throw new TypeError("not a function");
      this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(t, this);
    }

    function r(t, e) {
      for (; 3 === t._state;) {
        t = t._value;
      }

      0 !== t._state ? (t._handled = !0, o._immediateFn(function () {
        var n = 1 === t._state ? e.onFulfilled : e.onRejected;

        if (null !== n) {
          var i;

          try {
            i = n(t._value);
          } catch (t) {
            return void a(e.promise, t);
          }

          s(e.promise, i);
        } else (1 === t._state ? s : a)(e.promise, t._value);
      })) : t._deferreds.push(e);
    }

    function s(t, e) {
      try {
        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

        if (e && ("object" == _typeof(e) || "function" == typeof e)) {
          var n = e.then;
          if (e instanceof o) return t._state = 3, t._value = e, void l(t);
          if ("function" == typeof n) return void u((i = n, r = e, function () {
            i.apply(r, arguments);
          }), t);
        }

        t._state = 1, t._value = e, l(t);
      } catch (e) {
        a(t, e);
      }

      var i, r;
    }

    function a(t, e) {
      t._state = 2, t._value = e, l(t);
    }

    function l(t) {
      2 === t._state && 0 === t._deferreds.length && o._immediateFn(function () {
        t._handled || o._unhandledRejectionFn(t._value);
      });

      for (var e = 0, n = t._deferreds.length; e < n; e++) {
        r(t, t._deferreds[e]);
      }

      t._deferreds = null;
    }

    function c(t, e, n) {
      this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
    }

    function u(t, e) {
      var n = !1;

      try {
        t(function (t) {
          n || (n = !0, s(e, t));
        }, function (t) {
          n || (n = !0, a(e, t));
        });
      } catch (t) {
        if (n) return;
        n = !0, a(e, t);
      }
    }

    o.prototype["catch"] = function (t) {
      return this.then(null, t);
    }, o.prototype.then = function (t, e) {
      var n = new this.constructor(i);
      return r(this, new c(t, e, n)), n;
    }, o.prototype["finally"] = t, o.all = function (t) {
      return new o(function (e, i) {
        if (!n(t)) return i(new TypeError("Promise.all accepts an array"));
        var o = Array.prototype.slice.call(t);
        if (0 === o.length) return e([]);
        var r = o.length;

        function s(t, n) {
          try {
            if (n && ("object" == _typeof(n) || "function" == typeof n)) {
              var a = n.then;
              if ("function" == typeof a) return void a.call(n, function (e) {
                s(t, e);
              }, i);
            }

            o[t] = n, 0 == --r && e(o);
          } catch (t) {
            i(t);
          }
        }

        for (var a = 0; a < o.length; a++) {
          s(a, o[a]);
        }
      });
    }, o.resolve = function (t) {
      return t && "object" == _typeof(t) && t.constructor === o ? t : new o(function (e) {
        e(t);
      });
    }, o.reject = function (t) {
      return new o(function (e, n) {
        n(t);
      });
    }, o.race = function (t) {
      return new o(function (e, i) {
        if (!n(t)) return i(new TypeError("Promise.race accepts an array"));

        for (var r = 0, s = t.length; r < s; r++) {
          o.resolve(t[r]).then(e, i);
        }
      });
    }, o._immediateFn = "function" == typeof setImmediate && function (t) {
      setImmediate(t);
    } || function (t) {
      e(t, 0);
    }, o._unhandledRejectionFn = function (t) {
      "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
    };

    var f = function () {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if ("undefined" != typeof global) return global;
      throw new Error("unable to locate global object");
    }();

    "Promise" in f ? f.Promise.prototype["finally"] || (f.Promise.prototype["finally"] = t) : f.Promise = o;
  }, "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? Qo() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Qo),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : Qo(), function () {
    function t(t, e) {
      e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
      };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
    }

    "function" == typeof window.CustomEvent || this.CustomEvent.toString().indexOf("CustomEventConstructor") > -1 || (t.prototype = window.Event.prototype, window.CustomEvent = t);
  }(), {
    AsyncLoad: Z,
    Alert: it,
    Button: dt,
    Carousel: xt,
    ClassToggler: Yt,
    Collapse: Zt,
    Dropdown: kn,
    Modal: Vn,
    Popover: Oi,
    Scrollspy: Hi,
    Sidebar: Ao,
    Tab: Ho,
    Toast: er,
    Tooltip: mi
  };
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(8).setImmediate, __webpack_require__(5)))

/***/ })

},[181]);