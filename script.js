function AE(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var _l =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function sm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var AS = { exports: {} },
  Dc = {},
  RS = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xs = Symbol.for("react.element"),
  RE = Symbol.for("react.portal"),
  OE = Symbol.for("react.fragment"),
  ME = Symbol.for("react.strict_mode"),
  $E = Symbol.for("react.profiler"),
  DE = Symbol.for("react.provider"),
  IE = Symbol.for("react.context"),
  zE = Symbol.for("react.forward_ref"),
  FE = Symbol.for("react.suspense"),
  LE = Symbol.for("react.memo"),
  jE = Symbol.for("react.lazy"),
  Yg = Symbol.iterator;
function NE(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yg && e[Yg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var OS = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  MS = Object.assign,
  $S = {};
function na(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $S),
    (this.updater = n || OS);
}
na.prototype.isReactComponent = {};
na.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
na.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function DS() {}
DS.prototype = na.prototype;
function lm(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $S),
    (this.updater = n || OS);
}
var um = (lm.prototype = new DS());
um.constructor = lm;
MS(um, na.prototype);
um.isPureReactComponent = !0;
var Qg = Array.isArray,
  IS = Object.prototype.hasOwnProperty,
  cm = { current: null },
  zS = { key: !0, ref: !0, __self: !0, __source: !0 };
function FS(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      IS.call(t, r) && !zS.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Xs,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: cm.current,
  };
}
function BE(e, t) {
  return {
    $$typeof: Xs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function dm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xs;
}
function VE(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Zg = /\/+/g;
function Kd(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? VE("" + e.key)
    : t.toString(36);
}
function su(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xs:
          case RE:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Kd(a, 0) : r),
      Qg(o)
        ? ((n = ""),
          e != null && (n = e.replace(Zg, "$&/") + "/"),
          su(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (dm(o) &&
            (o = BE(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Zg, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Qg(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + Kd(i, s);
      a += su(i, t, n, l, o);
    }
  else if (((l = NE(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Kd(i, s++)), (a += su(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function El(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    su(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function WE(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var St = { current: null },
  lu = { transition: null },
  UE = {
    ReactCurrentDispatcher: St,
    ReactCurrentBatchConfig: lu,
    ReactCurrentOwner: cm,
  };
function LS() {
  throw Error("act(...) is not supported in production builds of React.");
}
ne.Children = {
  map: El,
  forEach: function (e, t, n) {
    El(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      El(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      El(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!dm(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ne.Component = na;
ne.Fragment = OE;
ne.Profiler = $E;
ne.PureComponent = lm;
ne.StrictMode = ME;
ne.Suspense = FE;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = UE;
ne.act = LS;
ne.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = MS({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = cm.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      IS.call(t, l) &&
        !zS.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Xs, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ne.createContext = function (e) {
  return (
    (e = {
      $$typeof: IE,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: DE, _context: e }),
    (e.Consumer = e)
  );
};
ne.createElement = FS;
ne.createFactory = function (e) {
  var t = FS.bind(null, e);
  return (t.type = e), t;
};
ne.createRef = function () {
  return { current: null };
};
ne.forwardRef = function (e) {
  return { $$typeof: zE, render: e };
};
ne.isValidElement = dm;
ne.lazy = function (e) {
  return { $$typeof: jE, _payload: { _status: -1, _result: e }, _init: WE };
};
ne.memo = function (e, t) {
  return { $$typeof: LE, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function (e) {
  var t = lu.transition;
  lu.transition = {};
  try {
    e();
  } finally {
    lu.transition = t;
  }
};
ne.unstable_act = LS;
ne.useCallback = function (e, t) {
  return St.current.useCallback(e, t);
};
ne.useContext = function (e) {
  return St.current.useContext(e);
};
ne.useDebugValue = function () {};
ne.useDeferredValue = function (e) {
  return St.current.useDeferredValue(e);
};
ne.useEffect = function (e, t) {
  return St.current.useEffect(e, t);
};
ne.useId = function () {
  return St.current.useId();
};
ne.useImperativeHandle = function (e, t, n) {
  return St.current.useImperativeHandle(e, t, n);
};
ne.useInsertionEffect = function (e, t) {
  return St.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function (e, t) {
  return St.current.useLayoutEffect(e, t);
};
ne.useMemo = function (e, t) {
  return St.current.useMemo(e, t);
};
ne.useReducer = function (e, t, n) {
  return St.current.useReducer(e, t, n);
};
ne.useRef = function (e) {
  return St.current.useRef(e);
};
ne.useState = function (e) {
  return St.current.useState(e);
};
ne.useSyncExternalStore = function (e, t, n) {
  return St.current.useSyncExternalStore(e, t, n);
};
ne.useTransition = function () {
  return St.current.useTransition();
};
ne.version = "18.3.1";
RS.exports = ne;
var b = RS.exports;
const bn = sm(b),
  Jg = AE({ __proto__: null, default: bn }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var HE = b,
  GE = Symbol.for("react.element"),
  KE = Symbol.for("react.fragment"),
  qE = Object.prototype.hasOwnProperty,
  XE = HE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  YE = { key: !0, ref: !0, __self: !0, __source: !0 };
function jS(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) qE.call(t, r) && !YE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: GE,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: XE.current,
  };
}
Dc.Fragment = KE;
Dc.jsx = jS;
Dc.jsxs = jS;
AS.exports = Dc;
var k = AS.exports,
  NS = { exports: {} },
  Gt = {},
  BS = { exports: {} },
  VS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, j) {
    var U = D.length;
    D.push(j);
    e: for (; 0 < U; ) {
      var ie = (U - 1) >>> 1,
        te = D[ie];
      if (0 < o(te, j)) (D[ie] = j), (D[U] = te), (U = ie);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var j = D[0],
      U = D.pop();
    if (U !== j) {
      D[0] = U;
      e: for (var ie = 0, te = D.length, B = te >>> 1; ie < B; ) {
        var K = 2 * (ie + 1) - 1,
          Te = D[K],
          xe = K + 1,
          Xe = D[xe];
        if (0 > o(Te, U))
          xe < te && 0 > o(Xe, Te)
            ? ((D[ie] = Xe), (D[xe] = U), (ie = xe))
            : ((D[ie] = Te), (D[K] = U), (ie = K));
        else if (xe < te && 0 > o(Xe, U)) (D[ie] = Xe), (D[xe] = U), (ie = xe);
        else break e;
      }
    }
    return j;
  }
  function o(D, j) {
    var U = D.sortIndex - j.sortIndex;
    return U !== 0 ? U : D.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    v = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= D)
        r(u), (j.sortIndex = j.expirationTime), t(l, j);
      else break;
      j = n(u);
    }
  }
  function w(D) {
    if (((g = !1), y(D), !v))
      if (n(l) !== null) (v = !0), q(C);
      else {
        var j = n(u);
        j !== null && I(w, j.startTime - D);
      }
  }
  function C(D, j) {
    (v = !1), g && ((g = !1), h(A), (A = -1)), (p = !0);
    var U = f;
    try {
      for (
        y(j), d = n(l);
        d !== null && (!(d.expirationTime > j) || (D && !L()));

      ) {
        var ie = d.callback;
        if (typeof ie == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var te = ie(d.expirationTime <= j);
          (j = e.unstable_now()),
            typeof te == "function" ? (d.callback = te) : d === n(l) && r(l),
            y(j);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var B = !0;
      else {
        var K = n(u);
        K !== null && I(w, K.startTime - j), (B = !1);
      }
      return B;
    } finally {
      (d = null), (f = U), (p = !1);
    }
  }
  var P = !1,
    _ = null,
    A = -1,
    $ = 5,
    M = -1;
  function L() {
    return !(e.unstable_now() - M < $);
  }
  function Y() {
    if (_ !== null) {
      var D = e.unstable_now();
      M = D;
      var j = !0;
      try {
        j = _(!0, D);
      } finally {
        j ? Q() : ((P = !1), (_ = null));
      }
    } else P = !1;
  }
  var Q;
  if (typeof m == "function")
    Q = function () {
      m(Y);
    };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(),
      J = ue.port2;
    (ue.port1.onmessage = Y),
      (Q = function () {
        J.postMessage(null);
      });
  } else
    Q = function () {
      S(Y, 0);
    };
  function q(D) {
    (_ = D), P || ((P = !0), Q());
  }
  function I(D, j) {
    A = S(function () {
      D(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), q(C));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (D) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = f;
      }
      var U = f;
      f = j;
      try {
        return D();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, j) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var U = f;
      f = D;
      try {
        return j();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (D, j, U) {
      var ie = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? ie + U : ie))
          : (U = ie),
        D)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = U + te),
        (D = {
          id: c++,
          callback: j,
          priorityLevel: D,
          startTime: U,
          expirationTime: te,
          sortIndex: -1,
        }),
        U > ie
          ? ((D.sortIndex = U),
            t(u, D),
            n(l) === null &&
              D === n(u) &&
              (g ? (h(A), (A = -1)) : (g = !0), I(w, U - ie)))
          : ((D.sortIndex = te), t(l, D), v || p || ((v = !0), q(C))),
        D
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (D) {
      var j = f;
      return function () {
        var U = f;
        f = j;
        try {
          return D.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(VS);
BS.exports = VS;
var QE = BS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ZE = b,
  Wt = QE;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var WS = new Set(),
  fs = {};
function No(e, t) {
  Li(e, t), Li(e + "Capture", t);
}
function Li(e, t) {
  for (fs[e] = t, e = 0; e < t.length; e++) WS.add(t[e]);
}
var dr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pp = Object.prototype.hasOwnProperty,
  JE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  e0 = {},
  t0 = {};
function e3(e) {
  return pp.call(t0, e)
    ? !0
    : pp.call(e0, e)
    ? !1
    : JE.test(e)
    ? (t0[e] = !0)
    : ((e0[e] = !0), !1);
}
function t3(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function n3(e, t, n, r) {
  if (t === null || typeof t > "u" || t3(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function xt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new xt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ot[t] = new xt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ot[e] = new xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ot[e] = new xt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ot[e] = new xt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ot[e] = new xt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ot[e] = new xt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ot[e] = new xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fm = /[\-:]([a-z])/g;
function pm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fm, pm);
    ot[t] = new xt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fm, pm);
    ot[t] = new xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fm, pm);
  ot[t] = new xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ot[e] = new xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ot.xlinkHref = new xt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ot[e] = new xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hm(e, t, n, r) {
  var o = ot.hasOwnProperty(t) ? ot[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (n3(t, n, o, r) && (n = null),
    r || o === null
      ? e3(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yr = ZE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Tl = Symbol.for("react.element"),
  ei = Symbol.for("react.portal"),
  ti = Symbol.for("react.fragment"),
  mm = Symbol.for("react.strict_mode"),
  hp = Symbol.for("react.profiler"),
  US = Symbol.for("react.provider"),
  HS = Symbol.for("react.context"),
  vm = Symbol.for("react.forward_ref"),
  mp = Symbol.for("react.suspense"),
  vp = Symbol.for("react.suspense_list"),
  gm = Symbol.for("react.memo"),
  Pr = Symbol.for("react.lazy"),
  GS = Symbol.for("react.offscreen"),
  n0 = Symbol.iterator;
function ma(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (n0 && e[n0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var De = Object.assign,
  qd;
function Ma(e) {
  if (qd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      qd = (t && t[1]) || "";
    }
  return (
    `
` +
    qd +
    e
  );
}
var Xd = !1;
function Yd(e, t) {
  if (!e || Xd) return "";
  Xd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Xd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ma(e) : "";
}
function r3(e) {
  switch (e.tag) {
    case 5:
      return Ma(e.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yd(e.type, !1)), e;
    case 11:
      return (e = Yd(e.type.render, !1)), e;
    case 1:
      return (e = Yd(e.type, !0)), e;
    default:
      return "";
  }
}
function gp(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ti:
      return "Fragment";
    case ei:
      return "Portal";
    case hp:
      return "Profiler";
    case mm:
      return "StrictMode";
    case mp:
      return "Suspense";
    case vp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case HS:
        return (e.displayName || "Context") + ".Consumer";
      case US:
        return (e._context.displayName || "Context") + ".Provider";
      case vm:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gm:
        return (
          (t = e.displayName || null), t !== null ? t : gp(e.type) || "Memo"
        );
      case Pr:
        (t = e._payload), (e = e._init);
        try {
          return gp(e(t));
        } catch {}
    }
  return null;
}
function o3(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gp(t);
    case 8:
      return t === mm ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ur(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function KS(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function i3(e) {
  var t = KS(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pl(e) {
  e._valueTracker || (e._valueTracker = i3(e));
}
function qS(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = KS(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Bu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yp(e, t) {
  var n = t.checked;
  return De({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function r0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ur(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function XS(e, t) {
  (t = t.checked), t != null && hm(e, "checked", t, !1);
}
function bp(e, t) {
  XS(e, t);
  var n = Ur(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Sp(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Sp(e, t.type, Ur(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function o0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Sp(e, t, n) {
  (t !== "number" || Bu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $a = Array.isArray;
function Ci(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ur(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function xp(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return De({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function i0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if ($a(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ur(n) };
}
function YS(e, t) {
  var n = Ur(t.value),
    r = Ur(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function a0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function QS(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? QS(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Al,
  ZS = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Al = Al || document.createElement("div"),
          Al.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Al.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ps(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ua = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  a3 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ua).forEach(function (e) {
  a3.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ua[t] = Ua[e]);
  });
});
function JS(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ua.hasOwnProperty(e) && Ua[e])
    ? ("" + t).trim()
    : t + "px";
}
function ex(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = JS(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var s3 = De(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function kp(e, t) {
  if (t) {
    if (s3[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Cp(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _p = null;
function ym(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ep = null,
  _i = null,
  Ei = null;
function s0(e) {
  if ((e = Zs(e))) {
    if (typeof Ep != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = jc(t)), Ep(e.stateNode, e.type, t));
  }
}
function tx(e) {
  _i ? (Ei ? Ei.push(e) : (Ei = [e])) : (_i = e);
}
function nx() {
  if (_i) {
    var e = _i,
      t = Ei;
    if (((Ei = _i = null), s0(e), t)) for (e = 0; e < t.length; e++) s0(t[e]);
  }
}
function rx(e, t) {
  return e(t);
}
function ox() {}
var Qd = !1;
function ix(e, t, n) {
  if (Qd) return e(t, n);
  Qd = !0;
  try {
    return rx(e, t, n);
  } finally {
    (Qd = !1), (_i !== null || Ei !== null) && (ox(), nx());
  }
}
function hs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var Tp = !1;
if (dr)
  try {
    var va = {};
    Object.defineProperty(va, "passive", {
      get: function () {
        Tp = !0;
      },
    }),
      window.addEventListener("test", va, va),
      window.removeEventListener("test", va, va);
  } catch {
    Tp = !1;
  }
function l3(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ha = !1,
  Vu = null,
  Wu = !1,
  Pp = null,
  u3 = {
    onError: function (e) {
      (Ha = !0), (Vu = e);
    },
  };
function c3(e, t, n, r, o, i, a, s, l) {
  (Ha = !1), (Vu = null), l3.apply(u3, arguments);
}
function d3(e, t, n, r, o, i, a, s, l) {
  if ((c3.apply(this, arguments), Ha)) {
    if (Ha) {
      var u = Vu;
      (Ha = !1), (Vu = null);
    } else throw Error(z(198));
    Wu || ((Wu = !0), (Pp = u));
  }
}
function Bo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ax(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function l0(e) {
  if (Bo(e) !== e) throw Error(z(188));
}
function f3(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bo(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return l0(o), e;
        if (i === r) return l0(o), t;
        i = i.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function sx(e) {
  return (e = f3(e)), e !== null ? lx(e) : null;
}
function lx(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lx(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ux = Wt.unstable_scheduleCallback,
  u0 = Wt.unstable_cancelCallback,
  p3 = Wt.unstable_shouldYield,
  h3 = Wt.unstable_requestPaint,
  Be = Wt.unstable_now,
  m3 = Wt.unstable_getCurrentPriorityLevel,
  bm = Wt.unstable_ImmediatePriority,
  cx = Wt.unstable_UserBlockingPriority,
  Uu = Wt.unstable_NormalPriority,
  v3 = Wt.unstable_LowPriority,
  dx = Wt.unstable_IdlePriority,
  Ic = null,
  zn = null;
function g3(e) {
  if (zn && typeof zn.onCommitFiberRoot == "function")
    try {
      zn.onCommitFiberRoot(Ic, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Sn = Math.clz32 ? Math.clz32 : S3,
  y3 = Math.log,
  b3 = Math.LN2;
function S3(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((y3(e) / b3) | 0)) | 0;
}
var Rl = 64,
  Ol = 4194304;
function Da(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = Da(s)) : ((i &= a), i !== 0 && (r = Da(i)));
  } else (a = n & ~o), a !== 0 ? (r = Da(a)) : i !== 0 && (r = Da(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Sn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function x3(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function w3(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Sn(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = x3(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Ap(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fx() {
  var e = Rl;
  return (Rl <<= 1), !(Rl & 4194240) && (Rl = 64), e;
}
function Zd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ys(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Sn(t)),
    (e[t] = n);
}
function k3(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Sn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Sm(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Sn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ve = 0;
function px(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hx,
  xm,
  mx,
  vx,
  gx,
  Rp = !1,
  Ml = [],
  Ir = null,
  zr = null,
  Fr = null,
  ms = new Map(),
  vs = new Map(),
  Rr = [],
  C3 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function c0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ir = null;
      break;
    case "dragenter":
    case "dragleave":
      zr = null;
      break;
    case "mouseover":
    case "mouseout":
      Fr = null;
      break;
    case "pointerover":
    case "pointerout":
      ms.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vs.delete(t.pointerId);
  }
}
function ga(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Zs(t)), t !== null && xm(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function _3(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ir = ga(Ir, e, t, n, r, o)), !0;
    case "dragenter":
      return (zr = ga(zr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Fr = ga(Fr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ms.set(i, ga(ms.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), vs.set(i, ga(vs.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function yx(e) {
  var t = mo(e.target);
  if (t !== null) {
    var n = Bo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ax(n)), t !== null)) {
          (e.blockedOn = t),
            gx(e.priority, function () {
              mx(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function uu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Op(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_p = r), n.target.dispatchEvent(r), (_p = null);
    } else return (t = Zs(n)), t !== null && xm(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function d0(e, t, n) {
  uu(e) && n.delete(t);
}
function E3() {
  (Rp = !1),
    Ir !== null && uu(Ir) && (Ir = null),
    zr !== null && uu(zr) && (zr = null),
    Fr !== null && uu(Fr) && (Fr = null),
    ms.forEach(d0),
    vs.forEach(d0);
}
function ya(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rp ||
      ((Rp = !0),
      Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority, E3)));
}
function gs(e) {
  function t(o) {
    return ya(o, e);
  }
  if (0 < Ml.length) {
    ya(Ml[0], e);
    for (var n = 1; n < Ml.length; n++) {
      var r = Ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ir !== null && ya(Ir, e),
      zr !== null && ya(zr, e),
      Fr !== null && ya(Fr, e),
      ms.forEach(t),
      vs.forEach(t),
      n = 0;
    n < Rr.length;
    n++
  )
    (r = Rr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rr.length && ((n = Rr[0]), n.blockedOn === null); )
    yx(n), n.blockedOn === null && Rr.shift();
}
var Ti = yr.ReactCurrentBatchConfig,
  Gu = !0;
function T3(e, t, n, r) {
  var o = ve,
    i = Ti.transition;
  Ti.transition = null;
  try {
    (ve = 1), wm(e, t, n, r);
  } finally {
    (ve = o), (Ti.transition = i);
  }
}
function P3(e, t, n, r) {
  var o = ve,
    i = Ti.transition;
  Ti.transition = null;
  try {
    (ve = 4), wm(e, t, n, r);
  } finally {
    (ve = o), (Ti.transition = i);
  }
}
function wm(e, t, n, r) {
  if (Gu) {
    var o = Op(e, t, n, r);
    if (o === null) uf(e, t, r, Ku, n), c0(e, r);
    else if (_3(o, e, t, n, r)) r.stopPropagation();
    else if ((c0(e, r), t & 4 && -1 < C3.indexOf(e))) {
      for (; o !== null; ) {
        var i = Zs(o);
        if (
          (i !== null && hx(i),
          (i = Op(e, t, n, r)),
          i === null && uf(e, t, r, Ku, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else uf(e, t, r, null, n);
  }
}
var Ku = null;
function Op(e, t, n, r) {
  if (((Ku = null), (e = ym(r)), (e = mo(e)), e !== null))
    if (((t = Bo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ax(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ku = e), null;
}
function bx(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (m3()) {
        case bm:
          return 1;
        case cx:
          return 4;
        case Uu:
        case v3:
          return 16;
        case dx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $r = null,
  km = null,
  cu = null;
function Sx() {
  if (cu) return cu;
  var e,
    t = km,
    n = t.length,
    r,
    o = "value" in $r ? $r.value : $r.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (cu = o.slice(e, 1 < r ? 1 - r : void 0));
}
function du(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $l() {
  return !0;
}
function f0() {
  return !1;
}
function Kt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? $l
        : f0),
      (this.isPropagationStopped = f0),
      this
    );
  }
  return (
    De(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = $l));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $l));
      },
      persist: function () {},
      isPersistent: $l,
    }),
    t
  );
}
var ra = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cm = Kt(ra),
  Qs = De({}, ra, { view: 0, detail: 0 }),
  A3 = Kt(Qs),
  Jd,
  ef,
  ba,
  zc = De({}, Qs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _m,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ba &&
            (ba && e.type === "mousemove"
              ? ((Jd = e.screenX - ba.screenX), (ef = e.screenY - ba.screenY))
              : (ef = Jd = 0),
            (ba = e)),
          Jd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ef;
    },
  }),
  p0 = Kt(zc),
  R3 = De({}, zc, { dataTransfer: 0 }),
  O3 = Kt(R3),
  M3 = De({}, Qs, { relatedTarget: 0 }),
  tf = Kt(M3),
  $3 = De({}, ra, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  D3 = Kt($3),
  I3 = De({}, ra, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  z3 = Kt(I3),
  F3 = De({}, ra, { data: 0 }),
  h0 = Kt(F3),
  L3 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  j3 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  N3 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function B3(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = N3[e]) ? !!t[e] : !1;
}
function _m() {
  return B3;
}
var V3 = De({}, Qs, {
    key: function (e) {
      if (e.key) {
        var t = L3[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = du(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? j3[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _m,
    charCode: function (e) {
      return e.type === "keypress" ? du(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? du(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  W3 = Kt(V3),
  U3 = De({}, zc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  m0 = Kt(U3),
  H3 = De({}, Qs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _m,
  }),
  G3 = Kt(H3),
  K3 = De({}, ra, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  q3 = Kt(K3),
  X3 = De({}, zc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Y3 = Kt(X3),
  Q3 = [9, 13, 27, 32],
  Em = dr && "CompositionEvent" in window,
  Ga = null;
dr && "documentMode" in document && (Ga = document.documentMode);
var Z3 = dr && "TextEvent" in window && !Ga,
  xx = dr && (!Em || (Ga && 8 < Ga && 11 >= Ga)),
  v0 = " ",
  g0 = !1;
function wx(e, t) {
  switch (e) {
    case "keyup":
      return Q3.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kx(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ni = !1;
function J3(e, t) {
  switch (e) {
    case "compositionend":
      return kx(t);
    case "keypress":
      return t.which !== 32 ? null : ((g0 = !0), v0);
    case "textInput":
      return (e = t.data), e === v0 && g0 ? null : e;
    default:
      return null;
  }
}
function e4(e, t) {
  if (ni)
    return e === "compositionend" || (!Em && wx(e, t))
      ? ((e = Sx()), (cu = km = $r = null), (ni = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var t4 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function y0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!t4[e.type] : t === "textarea";
}
function Cx(e, t, n, r) {
  tx(r),
    (t = qu(t, "onChange")),
    0 < t.length &&
      ((n = new Cm("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ka = null,
  ys = null;
function n4(e) {
  Ix(e, 0);
}
function Fc(e) {
  var t = ii(e);
  if (qS(t)) return e;
}
function r4(e, t) {
  if (e === "change") return t;
}
var _x = !1;
if (dr) {
  var nf;
  if (dr) {
    var rf = "oninput" in document;
    if (!rf) {
      var b0 = document.createElement("div");
      b0.setAttribute("oninput", "return;"),
        (rf = typeof b0.oninput == "function");
    }
    nf = rf;
  } else nf = !1;
  _x = nf && (!document.documentMode || 9 < document.documentMode);
}
function S0() {
  Ka && (Ka.detachEvent("onpropertychange", Ex), (ys = Ka = null));
}
function Ex(e) {
  if (e.propertyName === "value" && Fc(ys)) {
    var t = [];
    Cx(t, ys, e, ym(e)), ix(n4, t);
  }
}
function o4(e, t, n) {
  e === "focusin"
    ? (S0(), (Ka = t), (ys = n), Ka.attachEvent("onpropertychange", Ex))
    : e === "focusout" && S0();
}
function i4(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fc(ys);
}
function a4(e, t) {
  if (e === "click") return Fc(t);
}
function s4(e, t) {
  if (e === "input" || e === "change") return Fc(t);
}
function l4(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kn = typeof Object.is == "function" ? Object.is : l4;
function bs(e, t) {
  if (kn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!pp.call(t, o) || !kn(e[o], t[o])) return !1;
  }
  return !0;
}
function x0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function w0(e, t) {
  var n = x0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = x0(n);
  }
}
function Tx(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tx(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Px() {
  for (var e = window, t = Bu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bu(e.document);
  }
  return t;
}
function Tm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function u4(e) {
  var t = Px(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tx(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Tm(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = w0(n, i));
        var a = w0(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var c4 = dr && "documentMode" in document && 11 >= document.documentMode,
  ri = null,
  Mp = null,
  qa = null,
  $p = !1;
function k0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $p ||
    ri == null ||
    ri !== Bu(r) ||
    ((r = ri),
    "selectionStart" in r && Tm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (qa && bs(qa, r)) ||
      ((qa = r),
      (r = qu(Mp, "onSelect")),
      0 < r.length &&
        ((t = new Cm("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ri))));
}
function Dl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var oi = {
    animationend: Dl("Animation", "AnimationEnd"),
    animationiteration: Dl("Animation", "AnimationIteration"),
    animationstart: Dl("Animation", "AnimationStart"),
    transitionend: Dl("Transition", "TransitionEnd"),
  },
  of = {},
  Ax = {};
dr &&
  ((Ax = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete oi.animationend.animation,
    delete oi.animationiteration.animation,
    delete oi.animationstart.animation),
  "TransitionEvent" in window || delete oi.transitionend.transition);
function Lc(e) {
  if (of[e]) return of[e];
  if (!oi[e]) return e;
  var t = oi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ax) return (of[e] = t[n]);
  return e;
}
var Rx = Lc("animationend"),
  Ox = Lc("animationiteration"),
  Mx = Lc("animationstart"),
  $x = Lc("transitionend"),
  Dx = new Map(),
  C0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qr(e, t) {
  Dx.set(e, t), No(t, [e]);
}
for (var af = 0; af < C0.length; af++) {
  var sf = C0[af],
    d4 = sf.toLowerCase(),
    f4 = sf[0].toUpperCase() + sf.slice(1);
  qr(d4, "on" + f4);
}
qr(Rx, "onAnimationEnd");
qr(Ox, "onAnimationIteration");
qr(Mx, "onAnimationStart");
qr("dblclick", "onDoubleClick");
qr("focusin", "onFocus");
qr("focusout", "onBlur");
qr($x, "onTransitionEnd");
Li("onMouseEnter", ["mouseout", "mouseover"]);
Li("onMouseLeave", ["mouseout", "mouseover"]);
Li("onPointerEnter", ["pointerout", "pointerover"]);
Li("onPointerLeave", ["pointerout", "pointerover"]);
No(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
No(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
No("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
No(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
No(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
No(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ia =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  p4 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));
function _0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), d3(r, t, void 0, e), (e.currentTarget = null);
}
function Ix(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          _0(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          _0(o, s, u), (i = l);
        }
    }
  }
  if (Wu) throw ((e = Pp), (Wu = !1), (Pp = null), e);
}
function Ce(e, t) {
  var n = t[Lp];
  n === void 0 && (n = t[Lp] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zx(t, e, 2, !1), n.add(r));
}
function lf(e, t, n) {
  var r = 0;
  t && (r |= 4), zx(n, e, r, t);
}
var Il = "_reactListening" + Math.random().toString(36).slice(2);
function Ss(e) {
  if (!e[Il]) {
    (e[Il] = !0),
      WS.forEach(function (n) {
        n !== "selectionchange" && (p4.has(n) || lf(n, !1, e), lf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Il] || ((t[Il] = !0), lf("selectionchange", !1, t));
  }
}
function zx(e, t, n, r) {
  switch (bx(t)) {
    case 1:
      var o = T3;
      break;
    case 4:
      o = P3;
      break;
    default:
      o = wm;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Tp ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function uf(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = mo(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  ix(function () {
    var u = i,
      c = ym(n),
      d = [];
    e: {
      var f = Dx.get(e);
      if (f !== void 0) {
        var p = Cm,
          v = e;
        switch (e) {
          case "keypress":
            if (du(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = W3;
            break;
          case "focusin":
            (v = "focus"), (p = tf);
            break;
          case "focusout":
            (v = "blur"), (p = tf);
            break;
          case "beforeblur":
          case "afterblur":
            p = tf;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = p0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = O3;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = G3;
            break;
          case Rx:
          case Ox:
          case Mx:
            p = D3;
            break;
          case $x:
            p = q3;
            break;
          case "scroll":
            p = A3;
            break;
          case "wheel":
            p = Y3;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = z3;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = m0;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          h = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var w = y.stateNode;
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              h !== null && ((w = hs(m, h)), w != null && g.push(xs(m, w, y)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((f = new p(f, v, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== _p &&
            (v = n.relatedTarget || n.fromElement) &&
            (mo(v) || v[fr]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = u),
              (v = v ? mo(v) : null),
              v !== null &&
                ((S = Bo(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = u)),
          p !== v)
        ) {
          if (
            ((g = p0),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = m0),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (m = "pointer")),
            (S = p == null ? f : ii(p)),
            (y = v == null ? f : ii(v)),
            (f = new g(w, m + "leave", p, n, c)),
            (f.target = S),
            (f.relatedTarget = y),
            (w = null),
            mo(c) === u &&
              ((g = new g(h, m + "enter", v, n, c)),
              (g.target = y),
              (g.relatedTarget = S),
              (w = g)),
            (S = w),
            p && v)
          )
            t: {
              for (g = p, h = v, m = 0, y = g; y; y = Ko(y)) m++;
              for (y = 0, w = h; w; w = Ko(w)) y++;
              for (; 0 < m - y; ) (g = Ko(g)), m--;
              for (; 0 < y - m; ) (h = Ko(h)), y--;
              for (; m--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = Ko(g)), (h = Ko(h));
              }
              g = null;
            }
          else g = null;
          p !== null && E0(d, f, p, g, !1),
            v !== null && S !== null && E0(d, S, v, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? ii(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var C = r4;
        else if (y0(f))
          if (_x) C = s4;
          else {
            C = i4;
            var P = o4;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = a4);
        if (C && (C = C(e, u))) {
          Cx(d, C, n, c);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            Sp(f, "number", f.value);
      }
      switch (((P = u ? ii(u) : window), e)) {
        case "focusin":
          (y0(P) || P.contentEditable === "true") &&
            ((ri = P), (Mp = u), (qa = null));
          break;
        case "focusout":
          qa = Mp = ri = null;
          break;
        case "mousedown":
          $p = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($p = !1), k0(d, n, c);
          break;
        case "selectionchange":
          if (c4) break;
        case "keydown":
        case "keyup":
          k0(d, n, c);
      }
      var _;
      if (Em)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        ni
          ? wx(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (xx &&
          n.locale !== "ko" &&
          (ni || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && ni && (_ = Sx())
            : (($r = c),
              (km = "value" in $r ? $r.value : $r.textContent),
              (ni = !0))),
        (P = qu(u, A)),
        0 < P.length &&
          ((A = new h0(A, e, null, n, c)),
          d.push({ event: A, listeners: P }),
          _ ? (A.data = _) : ((_ = kx(n)), _ !== null && (A.data = _)))),
        (_ = Z3 ? J3(e, n) : e4(e, n)) &&
          ((u = qu(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new h0("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = _)));
    }
    Ix(d, t);
  });
}
function xs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = hs(e, n)),
      i != null && r.unshift(xs(e, i, o)),
      (i = hs(e, t)),
      i != null && r.push(xs(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Ko(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function E0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = hs(n, i)), l != null && a.unshift(xs(n, l, s)))
        : o || ((l = hs(n, i)), l != null && a.push(xs(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var h4 = /\r\n?/g,
  m4 = /\u0000|\uFFFD/g;
function T0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      h4,
      `
`
    )
    .replace(m4, "");
}
function zl(e, t, n) {
  if (((t = T0(t)), T0(e) !== t && n)) throw Error(z(425));
}
function Xu() {}
var Dp = null,
  Ip = null;
function zp(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fp = typeof setTimeout == "function" ? setTimeout : void 0,
  v4 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  P0 = typeof Promise == "function" ? Promise : void 0,
  g4 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof P0 < "u"
      ? function (e) {
          return P0.resolve(null).then(e).catch(y4);
        }
      : Fp;
function y4(e) {
  setTimeout(function () {
    throw e;
  });
}
function cf(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), gs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  gs(t);
}
function Lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function A0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var oa = Math.random().toString(36).slice(2),
  Dn = "__reactFiber$" + oa,
  ws = "__reactProps$" + oa,
  fr = "__reactContainer$" + oa,
  Lp = "__reactEvents$" + oa,
  b4 = "__reactListeners$" + oa,
  S4 = "__reactHandles$" + oa;
function mo(e) {
  var t = e[Dn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[fr] || n[Dn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = A0(e); e !== null; ) {
          if ((n = e[Dn])) return n;
          e = A0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zs(e) {
  return (
    (e = e[Dn] || e[fr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ii(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function jc(e) {
  return e[ws] || null;
}
var jp = [],
  ai = -1;
function Xr(e) {
  return { current: e };
}
function Ee(e) {
  0 > ai || ((e.current = jp[ai]), (jp[ai] = null), ai--);
}
function we(e, t) {
  ai++, (jp[ai] = e.current), (e.current = t);
}
var Hr = {},
  ft = Xr(Hr),
  Et = Xr(!1),
  Ro = Hr;
function ji(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Hr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Tt(e) {
  return (e = e.childContextTypes), e != null;
}
function Yu() {
  Ee(Et), Ee(ft);
}
function R0(e, t, n) {
  if (ft.current !== Hr) throw Error(z(168));
  we(ft, t), we(Et, n);
}
function Fx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, o3(e) || "Unknown", o));
  return De({}, n, r);
}
function Qu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Hr),
    (Ro = ft.current),
    we(ft, e),
    we(Et, Et.current),
    !0
  );
}
function O0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((e = Fx(e, t, Ro)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ee(Et),
      Ee(ft),
      we(ft, e))
    : Ee(Et),
    we(Et, n);
}
var Xn = null,
  Nc = !1,
  df = !1;
function Lx(e) {
  Xn === null ? (Xn = [e]) : Xn.push(e);
}
function x4(e) {
  (Nc = !0), Lx(e);
}
function Yr() {
  if (!df && Xn !== null) {
    df = !0;
    var e = 0,
      t = ve;
    try {
      var n = Xn;
      for (ve = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xn = null), (Nc = !1);
    } catch (o) {
      throw (Xn !== null && (Xn = Xn.slice(e + 1)), ux(bm, Yr), o);
    } finally {
      (ve = t), (df = !1);
    }
  }
  return null;
}
var si = [],
  li = 0,
  Zu = null,
  Ju = 0,
  Jt = [],
  en = 0,
  Oo = null,
  Zn = 1,
  Jn = "";
function lo(e, t) {
  (si[li++] = Ju), (si[li++] = Zu), (Zu = e), (Ju = t);
}
function jx(e, t, n) {
  (Jt[en++] = Zn), (Jt[en++] = Jn), (Jt[en++] = Oo), (Oo = e);
  var r = Zn;
  e = Jn;
  var o = 32 - Sn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Sn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Zn = (1 << (32 - Sn(t) + o)) | (n << o) | r),
      (Jn = i + e);
  } else (Zn = (1 << i) | (n << o) | r), (Jn = e);
}
function Pm(e) {
  e.return !== null && (lo(e, 1), jx(e, 1, 0));
}
function Am(e) {
  for (; e === Zu; )
    (Zu = si[--li]), (si[li] = null), (Ju = si[--li]), (si[li] = null);
  for (; e === Oo; )
    (Oo = Jt[--en]),
      (Jt[en] = null),
      (Jn = Jt[--en]),
      (Jt[en] = null),
      (Zn = Jt[--en]),
      (Jt[en] = null);
}
var jt = null,
  Lt = null,
  Re = !1,
  gn = null;
function Nx(e, t) {
  var n = tn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function M0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (jt = e), (Lt = Lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (jt = e), (Lt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Oo !== null ? { id: Zn, overflow: Jn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (jt = e),
            (Lt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Np(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bp(e) {
  if (Re) {
    var t = Lt;
    if (t) {
      var n = t;
      if (!M0(e, t)) {
        if (Np(e)) throw Error(z(418));
        t = Lr(n.nextSibling);
        var r = jt;
        t && M0(e, t)
          ? Nx(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (jt = e));
      }
    } else {
      if (Np(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (Re = !1), (jt = e);
    }
  }
}
function $0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  jt = e;
}
function Fl(e) {
  if (e !== jt) return !1;
  if (!Re) return $0(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !zp(e.type, e.memoizedProps))),
    t && (t = Lt))
  ) {
    if (Np(e)) throw (Bx(), Error(z(418)));
    for (; t; ) Nx(e, t), (t = Lr(t.nextSibling));
  }
  if (($0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Lt = Lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Lt = null;
    }
  } else Lt = jt ? Lr(e.stateNode.nextSibling) : null;
  return !0;
}
function Bx() {
  for (var e = Lt; e; ) e = Lr(e.nextSibling);
}
function Ni() {
  (Lt = jt = null), (Re = !1);
}
function Rm(e) {
  gn === null ? (gn = [e]) : gn.push(e);
}
var w4 = yr.ReactCurrentBatchConfig;
function Sa(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function Ll(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function D0(e) {
  var t = e._init;
  return t(e._payload);
}
function Vx(e) {
  function t(h, m) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [m]), (h.flags |= 16)) : y.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function o(h, m) {
    return (h = Vr(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, m, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((h.flags |= 2), m) : y)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, m, y, w) {
    return m === null || m.tag !== 6
      ? ((m = yf(y, h.mode, w)), (m.return = h), m)
      : ((m = o(m, y)), (m.return = h), m);
  }
  function l(h, m, y, w) {
    var C = y.type;
    return C === ti
      ? c(h, m, y.props.children, w, y.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Pr &&
            D0(C) === m.type))
      ? ((w = o(m, y.props)), (w.ref = Sa(h, m, y)), (w.return = h), w)
      : ((w = yu(y.type, y.key, y.props, null, h.mode, w)),
        (w.ref = Sa(h, m, y)),
        (w.return = h),
        w);
  }
  function u(h, m, y, w) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = bf(y, h.mode, w)), (m.return = h), m)
      : ((m = o(m, y.children || [])), (m.return = h), m);
  }
  function c(h, m, y, w, C) {
    return m === null || m.tag !== 7
      ? ((m = wo(y, h.mode, w, C)), (m.return = h), m)
      : ((m = o(m, y)), (m.return = h), m);
  }
  function d(h, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = yf("" + m, h.mode, y)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Tl:
          return (
            (y = yu(m.type, m.key, m.props, null, h.mode, y)),
            (y.ref = Sa(h, null, m)),
            (y.return = h),
            y
          );
        case ei:
          return (m = bf(m, h.mode, y)), (m.return = h), m;
        case Pr:
          var w = m._init;
          return d(h, w(m._payload), y);
      }
      if ($a(m) || ma(m))
        return (m = wo(m, h.mode, y, null)), (m.return = h), m;
      Ll(h, m);
    }
    return null;
  }
  function f(h, m, y, w) {
    var C = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : s(h, m, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Tl:
          return y.key === C ? l(h, m, y, w) : null;
        case ei:
          return y.key === C ? u(h, m, y, w) : null;
        case Pr:
          return (C = y._init), f(h, m, C(y._payload), w);
      }
      if ($a(y) || ma(y)) return C !== null ? null : c(h, m, y, w, null);
      Ll(h, y);
    }
    return null;
  }
  function p(h, m, y, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(y) || null), s(m, h, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Tl:
          return (h = h.get(w.key === null ? y : w.key) || null), l(m, h, w, C);
        case ei:
          return (h = h.get(w.key === null ? y : w.key) || null), u(m, h, w, C);
        case Pr:
          var P = w._init;
          return p(h, m, y, P(w._payload), C);
      }
      if ($a(w) || ma(w)) return (h = h.get(y) || null), c(m, h, w, C, null);
      Ll(m, w);
    }
    return null;
  }
  function v(h, m, y, w) {
    for (
      var C = null, P = null, _ = m, A = (m = 0), $ = null;
      _ !== null && A < y.length;
      A++
    ) {
      _.index > A ? (($ = _), (_ = null)) : ($ = _.sibling);
      var M = f(h, _, y[A], w);
      if (M === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && M.alternate === null && t(h, _),
        (m = i(M, m, A)),
        P === null ? (C = M) : (P.sibling = M),
        (P = M),
        (_ = $);
    }
    if (A === y.length) return n(h, _), Re && lo(h, A), C;
    if (_ === null) {
      for (; A < y.length; A++)
        (_ = d(h, y[A], w)),
          _ !== null &&
            ((m = i(_, m, A)), P === null ? (C = _) : (P.sibling = _), (P = _));
      return Re && lo(h, A), C;
    }
    for (_ = r(h, _); A < y.length; A++)
      ($ = p(_, h, A, y[A], w)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? A : $.key),
          (m = i($, m, A)),
          P === null ? (C = $) : (P.sibling = $),
          (P = $));
    return (
      e &&
        _.forEach(function (L) {
          return t(h, L);
        }),
      Re && lo(h, A),
      C
    );
  }
  function g(h, m, y, w) {
    var C = ma(y);
    if (typeof C != "function") throw Error(z(150));
    if (((y = C.call(y)), y == null)) throw Error(z(151));
    for (
      var P = (C = null), _ = m, A = (m = 0), $ = null, M = y.next();
      _ !== null && !M.done;
      A++, M = y.next()
    ) {
      _.index > A ? (($ = _), (_ = null)) : ($ = _.sibling);
      var L = f(h, _, M.value, w);
      if (L === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && L.alternate === null && t(h, _),
        (m = i(L, m, A)),
        P === null ? (C = L) : (P.sibling = L),
        (P = L),
        (_ = $);
    }
    if (M.done) return n(h, _), Re && lo(h, A), C;
    if (_ === null) {
      for (; !M.done; A++, M = y.next())
        (M = d(h, M.value, w)),
          M !== null &&
            ((m = i(M, m, A)), P === null ? (C = M) : (P.sibling = M), (P = M));
      return Re && lo(h, A), C;
    }
    for (_ = r(h, _); !M.done; A++, M = y.next())
      (M = p(_, h, A, M.value, w)),
        M !== null &&
          (e && M.alternate !== null && _.delete(M.key === null ? A : M.key),
          (m = i(M, m, A)),
          P === null ? (C = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        _.forEach(function (Y) {
          return t(h, Y);
        }),
      Re && lo(h, A),
      C
    );
  }
  function S(h, m, y, w) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ti &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Tl:
          e: {
            for (var C = y.key, P = m; P !== null; ) {
              if (P.key === C) {
                if (((C = y.type), C === ti)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (m = o(P, y.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Pr &&
                    D0(C) === P.type)
                ) {
                  n(h, P.sibling),
                    (m = o(P, y.props)),
                    (m.ref = Sa(h, P, y)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            y.type === ti
              ? ((m = wo(y.props.children, h.mode, w, y.key)),
                (m.return = h),
                (h = m))
              : ((w = yu(y.type, y.key, y.props, null, h.mode, w)),
                (w.ref = Sa(h, m, y)),
                (w.return = h),
                (h = w));
          }
          return a(h);
        case ei:
          e: {
            for (P = y.key; m !== null; ) {
              if (m.key === P)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(h, m.sibling),
                    (m = o(m, y.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = bf(y, h.mode, w)), (m.return = h), (h = m);
          }
          return a(h);
        case Pr:
          return (P = y._init), S(h, m, P(y._payload), w);
      }
      if ($a(y)) return v(h, m, y, w);
      if (ma(y)) return g(h, m, y, w);
      Ll(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = o(m, y)), (m.return = h), (h = m))
          : (n(h, m), (m = yf(y, h.mode, w)), (m.return = h), (h = m)),
        a(h))
      : n(h, m);
  }
  return S;
}
var Bi = Vx(!0),
  Wx = Vx(!1),
  ec = Xr(null),
  tc = null,
  ui = null,
  Om = null;
function Mm() {
  Om = ui = tc = null;
}
function $m(e) {
  var t = ec.current;
  Ee(ec), (e._currentValue = t);
}
function Vp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Pi(e, t) {
  (tc = e),
    (Om = ui = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_t = !0), (e.firstContext = null));
}
function an(e) {
  var t = e._currentValue;
  if (Om !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ui === null)) {
      if (tc === null) throw Error(z(308));
      (ui = e), (tc.dependencies = { lanes: 0, firstContext: e });
    } else ui = ui.next = e;
  return t;
}
var vo = null;
function Dm(e) {
  vo === null ? (vo = [e]) : vo.push(e);
}
function Ux(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Dm(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    pr(e, r)
  );
}
function pr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ar = !1;
function Im(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function rr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), le & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      pr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Dm(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    pr(e, n)
  );
}
function fu(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sm(e, n);
  }
}
function I0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function nc(e, t, n, r) {
  var o = e.updateQueue;
  Ar = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        p = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            g = s;
          switch (((f = t), (p = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(p, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(p, d, f) : v),
                f == null)
              )
                break e;
              d = De({}, d, f);
              break e;
            case 2:
              Ar = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ($o |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function z0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(z(191, o));
        o.call(r);
      }
    }
}
var Js = {},
  Fn = Xr(Js),
  ks = Xr(Js),
  Cs = Xr(Js);
function go(e) {
  if (e === Js) throw Error(z(174));
  return e;
}
function zm(e, t) {
  switch ((we(Cs, t), we(ks, e), we(Fn, Js), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wp(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wp(t, e));
  }
  Ee(Fn), we(Fn, t);
}
function Vi() {
  Ee(Fn), Ee(ks), Ee(Cs);
}
function Gx(e) {
  go(Cs.current);
  var t = go(Fn.current),
    n = wp(t, e.type);
  t !== n && (we(ks, e), we(Fn, n));
}
function Fm(e) {
  ks.current === e && (Ee(Fn), Ee(ks));
}
var Oe = Xr(0);
function rc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ff = [];
function Lm() {
  for (var e = 0; e < ff.length; e++)
    ff[e]._workInProgressVersionPrimary = null;
  ff.length = 0;
}
var pu = yr.ReactCurrentDispatcher,
  pf = yr.ReactCurrentBatchConfig,
  Mo = 0,
  $e = null,
  Ge = null,
  Ye = null,
  oc = !1,
  Xa = !1,
  _s = 0,
  k4 = 0;
function it() {
  throw Error(z(321));
}
function jm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kn(e[n], t[n])) return !1;
  return !0;
}
function Nm(e, t, n, r, o, i) {
  if (
    ((Mo = i),
    ($e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pu.current = e === null || e.memoizedState === null ? T4 : P4),
    (e = n(r, o)),
    Xa)
  ) {
    i = 0;
    do {
      if (((Xa = !1), (_s = 0), 25 <= i)) throw Error(z(301));
      (i += 1),
        (Ye = Ge = null),
        (t.updateQueue = null),
        (pu.current = A4),
        (e = n(r, o));
    } while (Xa);
  }
  if (
    ((pu.current = ic),
    (t = Ge !== null && Ge.next !== null),
    (Mo = 0),
    (Ye = Ge = $e = null),
    (oc = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function Bm() {
  var e = _s !== 0;
  return (_s = 0), e;
}
function Rn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ye === null ? ($e.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye;
}
function sn() {
  if (Ge === null) {
    var e = $e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ge.next;
  var t = Ye === null ? $e.memoizedState : Ye.next;
  if (t !== null) (Ye = t), (Ge = e);
  else {
    if (e === null) throw Error(z(310));
    (Ge = e),
      (e = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null,
      }),
      Ye === null ? ($e.memoizedState = Ye = e) : (Ye = Ye.next = e);
  }
  return Ye;
}
function Es(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hf(e) {
  var t = sn(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = Ge,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Mo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          ($e.lanes |= c),
          ($o |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      kn(r, t.memoizedState) || (_t = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), ($e.lanes |= i), ($o |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mf(e) {
  var t = sn(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    kn(i, t.memoizedState) || (_t = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Kx() {}
function qx(e, t) {
  var n = $e,
    r = sn(),
    o = t(),
    i = !kn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (_t = !0)),
    (r = r.queue),
    Vm(Qx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ye !== null && Ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ts(9, Yx.bind(null, n, r, o, t), void 0, null),
      Qe === null)
    )
      throw Error(z(349));
    Mo & 30 || Xx(n, t, o);
  }
  return o;
}
function Xx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($e.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zx(t) && Jx(e);
}
function Qx(e, t, n) {
  return n(function () {
    Zx(t) && Jx(e);
  });
}
function Zx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kn(e, n);
  } catch {
    return !0;
  }
}
function Jx(e) {
  var t = pr(e, 1);
  t !== null && xn(t, e, 1, -1);
}
function F0(e) {
  var t = Rn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Es,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = E4.bind(null, $e, e)),
    [t.memoizedState, e]
  );
}
function Ts(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ew() {
  return sn().memoizedState;
}
function hu(e, t, n, r) {
  var o = Rn();
  ($e.flags |= e),
    (o.memoizedState = Ts(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bc(e, t, n, r) {
  var o = sn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ge !== null) {
    var a = Ge.memoizedState;
    if (((i = a.destroy), r !== null && jm(r, a.deps))) {
      o.memoizedState = Ts(t, n, i, r);
      return;
    }
  }
  ($e.flags |= e), (o.memoizedState = Ts(1 | t, n, i, r));
}
function L0(e, t) {
  return hu(8390656, 8, e, t);
}
function Vm(e, t) {
  return Bc(2048, 8, e, t);
}
function tw(e, t) {
  return Bc(4, 2, e, t);
}
function nw(e, t) {
  return Bc(4, 4, e, t);
}
function rw(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ow(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bc(4, 4, rw.bind(null, t, e), n)
  );
}
function Wm() {}
function iw(e, t) {
  var n = sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jm(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function aw(e, t) {
  var n = sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jm(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sw(e, t, n) {
  return Mo & 21
    ? (kn(n, t) || ((n = fx()), ($e.lanes |= n), ($o |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_t = !0)), (e.memoizedState = n));
}
function C4(e, t) {
  var n = ve;
  (ve = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = pf.transition;
  pf.transition = {};
  try {
    e(!1), t();
  } finally {
    (ve = n), (pf.transition = r);
  }
}
function lw() {
  return sn().memoizedState;
}
function _4(e, t, n) {
  var r = Br(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    uw(e))
  )
    cw(t, n);
  else if (((n = Ux(e, t, n, r)), n !== null)) {
    var o = yt();
    xn(n, e, r, o), dw(n, t, r);
  }
}
function E4(e, t, n) {
  var r = Br(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (uw(e)) cw(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), kn(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Dm(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ux(e, t, o, r)),
      n !== null && ((o = yt()), xn(n, e, r, o), dw(n, t, r));
  }
}
function uw(e) {
  var t = e.alternate;
  return e === $e || (t !== null && t === $e);
}
function cw(e, t) {
  Xa = oc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sm(e, n);
  }
}
var ic = {
    readContext: an,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useInsertionEffect: it,
    useLayoutEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useMutableSource: it,
    useSyncExternalStore: it,
    useId: it,
    unstable_isNewReconciler: !1,
  },
  T4 = {
    readContext: an,
    useCallback: function (e, t) {
      return (Rn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: an,
    useEffect: L0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        hu(4194308, 4, rw.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return hu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return hu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Rn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Rn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _4.bind(null, $e, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Rn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: F0,
    useDebugValue: Wm,
    useDeferredValue: function (e) {
      return (Rn().memoizedState = e);
    },
    useTransition: function () {
      var e = F0(!1),
        t = e[0];
      return (e = C4.bind(null, e[1])), (Rn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $e,
        o = Rn();
      if (Re) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), Qe === null)) throw Error(z(349));
        Mo & 30 || Xx(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        L0(Qx.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ts(9, Yx.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Rn(),
        t = Qe.identifierPrefix;
      if (Re) {
        var n = Jn,
          r = Zn;
        (n = (r & ~(1 << (32 - Sn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _s++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = k4++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  P4 = {
    readContext: an,
    useCallback: iw,
    useContext: an,
    useEffect: Vm,
    useImperativeHandle: ow,
    useInsertionEffect: tw,
    useLayoutEffect: nw,
    useMemo: aw,
    useReducer: hf,
    useRef: ew,
    useState: function () {
      return hf(Es);
    },
    useDebugValue: Wm,
    useDeferredValue: function (e) {
      var t = sn();
      return sw(t, Ge.memoizedState, e);
    },
    useTransition: function () {
      var e = hf(Es)[0],
        t = sn().memoizedState;
      return [e, t];
    },
    useMutableSource: Kx,
    useSyncExternalStore: qx,
    useId: lw,
    unstable_isNewReconciler: !1,
  },
  A4 = {
    readContext: an,
    useCallback: iw,
    useContext: an,
    useEffect: Vm,
    useImperativeHandle: ow,
    useInsertionEffect: tw,
    useLayoutEffect: nw,
    useMemo: aw,
    useReducer: mf,
    useRef: ew,
    useState: function () {
      return mf(Es);
    },
    useDebugValue: Wm,
    useDeferredValue: function (e) {
      var t = sn();
      return Ge === null ? (t.memoizedState = e) : sw(t, Ge.memoizedState, e);
    },
    useTransition: function () {
      var e = mf(Es)[0],
        t = sn().memoizedState;
      return [e, t];
    },
    useMutableSource: Kx,
    useSyncExternalStore: qx,
    useId: lw,
    unstable_isNewReconciler: !1,
  };
function mn(e, t) {
  if (e && e.defaultProps) {
    (t = De({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wp(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : De({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = yt(),
      o = Br(e),
      i = rr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = jr(e, i, o)),
      t !== null && (xn(t, e, o, r), fu(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = yt(),
      o = Br(e),
      i = rr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = jr(e, i, o)),
      t !== null && (xn(t, e, o, r), fu(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = yt(),
      r = Br(e),
      o = rr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = jr(e, o, r)),
      t !== null && (xn(t, e, r, n), fu(t, e, r));
  },
};
function j0(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bs(n, r) || !bs(o, i)
      : !0
  );
}
function fw(e, t, n) {
  var r = !1,
    o = Hr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = an(i))
      : ((o = Tt(t) ? Ro : ft.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ji(e, o) : Hr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function N0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vc.enqueueReplaceState(t, t.state, null);
}
function Up(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Im(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = an(i))
    : ((i = Tt(t) ? Ro : ft.current), (o.context = ji(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Wp(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Vc.enqueueReplaceState(o, o.state, null),
      nc(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += r3(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function vf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var R4 = typeof WeakMap == "function" ? WeakMap : Map;
function pw(e, t, n) {
  (n = rr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sc || ((sc = !0), (th = r)), Hp(e, t);
    }),
    n
  );
}
function hw(e, t, n) {
  (n = rr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Hp(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Hp(e, t),
          typeof r != "function" &&
            (Nr === null ? (Nr = new Set([this])) : Nr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function B0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new R4();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = U4.bind(null, e, t, n)), t.then(e, e));
}
function V0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function W0(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = rr(-1, 1)), (t.tag = 2), jr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var O4 = yr.ReactCurrentOwner,
  _t = !1;
function vt(e, t, n, r) {
  t.child = e === null ? Wx(t, null, n, r) : Bi(t, e.child, n, r);
}
function U0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Pi(t, o),
    (r = Nm(e, t, n, r, i, o)),
    (n = Bm()),
    e !== null && !_t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        hr(e, t, o))
      : (Re && n && Pm(t), (t.flags |= 1), vt(e, t, r, o), t.child)
  );
}
function H0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Qm(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), mw(e, t, i, r, o))
      : ((e = yu(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bs), n(a, r) && e.ref === t.ref)
    )
      return hr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Vr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bs(i, r) && e.ref === t.ref)
      if (((_t = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (_t = !0);
      else return (t.lanes = e.lanes), hr(e, t, o);
  }
  return Gp(e, t, n, r, o);
}
function vw(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(di, zt),
        (zt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(di, zt),
          (zt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        we(di, zt),
        (zt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(di, zt),
      (zt |= r);
  return vt(e, t, o, n), t.child;
}
function gw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Gp(e, t, n, r, o) {
  var i = Tt(n) ? Ro : ft.current;
  return (
    (i = ji(t, i)),
    Pi(t, o),
    (n = Nm(e, t, n, r, i, o)),
    (r = Bm()),
    e !== null && !_t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        hr(e, t, o))
      : (Re && r && Pm(t), (t.flags |= 1), vt(e, t, n, o), t.child)
  );
}
function G0(e, t, n, r, o) {
  if (Tt(n)) {
    var i = !0;
    Qu(t);
  } else i = !1;
  if ((Pi(t, o), t.stateNode === null))
    mu(e, t), fw(t, n, r), Up(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = an(u))
      : ((u = Tt(n) ? Ro : ft.current), (u = ji(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && N0(t, a, r, u)),
      (Ar = !1);
    var f = t.memoizedState;
    (a.state = f),
      nc(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || Et.current || Ar
        ? (typeof c == "function" && (Wp(t, n, c, r), (l = t.memoizedState)),
          (s = Ar || j0(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Hx(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : mn(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = an(l))
        : ((l = Tt(n) ? Ro : ft.current), (l = ji(t, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && N0(t, a, r, l)),
      (Ar = !1),
      (f = t.memoizedState),
      (a.state = f),
      nc(t, r, a, o);
    var v = t.memoizedState;
    s !== d || f !== v || Et.current || Ar
      ? (typeof p == "function" && (Wp(t, n, p, r), (v = t.memoizedState)),
        (u = Ar || j0(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Kp(e, t, n, r, i, o);
}
function Kp(e, t, n, r, o, i) {
  gw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && O0(t, n, !1), hr(e, t, i);
  (r = t.stateNode), (O4.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Bi(t, e.child, null, i)), (t.child = Bi(t, null, s, i)))
      : vt(e, t, s, i),
    (t.memoizedState = r.state),
    o && O0(t, n, !0),
    t.child
  );
}
function yw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? R0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && R0(e, t.context, !1),
    zm(e, t.containerInfo);
}
function K0(e, t, n, r, o) {
  return Ni(), Rm(o), (t.flags |= 256), vt(e, t, n, r), t.child;
}
var qp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bw(e, t, n) {
  var r = t.pendingProps,
    o = Oe.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    we(Oe, o & 1),
    e === null)
  )
    return (
      Bp(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Hc(a, r, 0, null)),
              (e = wo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Xp(n)),
              (t.memoizedState = qp),
              e)
            : Um(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return M4(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Vr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Vr(s, i)) : ((i = wo(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Xp(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = qp),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Vr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Um(e, t) {
  return (
    (t = Hc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jl(e, t, n, r) {
  return (
    r !== null && Rm(r),
    Bi(t, e.child, null, n),
    (e = Um(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function M4(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vf(Error(z(422)))), jl(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Hc({ mode: "visible", children: r.children }, o, 0, null)),
        (i = wo(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Bi(t, e.child, null, a),
        (t.child.memoizedState = Xp(a)),
        (t.memoizedState = qp),
        i);
  if (!(t.mode & 1)) return jl(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(z(419))), (r = vf(i, r, void 0)), jl(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), _t || s)) {
    if (((r = Qe), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), pr(e, o), xn(r, e, o, -1));
    }
    return Ym(), (r = vf(Error(z(421)))), jl(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = H4.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Lt = Lr(o.nextSibling)),
      (jt = t),
      (Re = !0),
      (gn = null),
      e !== null &&
        ((Jt[en++] = Zn),
        (Jt[en++] = Jn),
        (Jt[en++] = Oo),
        (Zn = e.id),
        (Jn = e.overflow),
        (Oo = t)),
      (t = Um(t, r.children)),
      (t.flags |= 4096),
      t);
}
function q0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vp(e.return, t, n);
}
function gf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Sw(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((vt(e, t, r.children, n), (r = Oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && q0(e, n, t);
        else if (e.tag === 19) q0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(Oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && rc(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          gf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && rc(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        gf(t, !0, n, null, i);
        break;
      case "together":
        gf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function mu(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function hr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($o |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function $4(e, t, n) {
  switch (t.tag) {
    case 3:
      yw(t), Ni();
      break;
    case 5:
      Gx(t);
      break;
    case 1:
      Tt(t.type) && Qu(t);
      break;
    case 4:
      zm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      we(ec, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Oe, Oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bw(e, t, n)
          : (we(Oe, Oe.current & 1),
            (e = hr(e, t, n)),
            e !== null ? e.sibling : null);
      we(Oe, Oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(Oe, Oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vw(e, t, n);
  }
  return hr(e, t, n);
}
var xw, Yp, ww, kw;
xw = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Yp = function () {};
ww = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), go(Fn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = yp(e, o)), (r = yp(e, r)), (i = []);
        break;
      case "select":
        (o = De({}, o, { value: void 0 })),
          (r = De({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = xp(e, o)), (r = xp(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xu);
    }
    kp(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (fs.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (fs.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Ce("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
kw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xa(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function at(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function D4(e, t, n) {
  var r = t.pendingProps;
  switch ((Am(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return at(t), null;
    case 1:
      return Tt(t.type) && Yu(), at(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vi(),
        Ee(Et),
        Ee(ft),
        Lm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gn !== null && (oh(gn), (gn = null)))),
        Yp(e, t),
        at(t),
        null
      );
    case 5:
      Fm(t);
      var o = go(Cs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ww(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return at(t), null;
        }
        if (((e = go(Fn.current)), Fl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Dn] = t), (r[ws] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ce("cancel", r), Ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ia.length; o++) Ce(Ia[o], r);
              break;
            case "source":
              Ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ce("error", r), Ce("load", r);
              break;
            case "details":
              Ce("toggle", r);
              break;
            case "input":
              r0(r, i), Ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ce("invalid", r);
              break;
            case "textarea":
              i0(r, i), Ce("invalid", r);
          }
          kp(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      zl(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      zl(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : fs.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  Ce("scroll", r);
            }
          switch (n) {
            case "input":
              Pl(r), o0(r, i, !0);
              break;
            case "textarea":
              Pl(r), a0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Xu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = QS(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Dn] = t),
            (e[ws] = r),
            xw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Cp(n, r)), n)) {
              case "dialog":
                Ce("cancel", e), Ce("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ce("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ia.length; o++) Ce(Ia[o], e);
                o = r;
                break;
              case "source":
                Ce("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ce("error", e), Ce("load", e), (o = r);
                break;
              case "details":
                Ce("toggle", e), (o = r);
                break;
              case "input":
                r0(e, r), (o = yp(e, r)), Ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = De({}, r, { value: void 0 })),
                  Ce("invalid", e);
                break;
              case "textarea":
                i0(e, r), (o = xp(e, r)), Ce("invalid", e);
                break;
              default:
                o = r;
            }
            kp(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? ex(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && ZS(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ps(e, l)
                    : typeof l == "number" && ps(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (fs.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && Ce("scroll", e)
                      : l != null && hm(e, i, l, a));
              }
            switch (n) {
              case "input":
                Pl(e), o0(e, r, !1);
                break;
              case "textarea":
                Pl(e), a0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ur(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ci(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ci(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Xu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return at(t), null;
    case 6:
      if (e && t.stateNode != null) kw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (((n = go(Cs.current)), go(Fn.current), Fl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Dn] = t),
            (i = r.nodeValue !== n) && ((e = jt), e !== null))
          )
            switch (e.tag) {
              case 3:
                zl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Dn] = t),
            (t.stateNode = r);
      }
      return at(t), null;
    case 13:
      if (
        (Ee(Oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && Lt !== null && t.mode & 1 && !(t.flags & 128))
          Bx(), Ni(), (t.flags |= 98560), (i = !1);
        else if (((i = Fl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(z(317));
            i[Dn] = t;
          } else
            Ni(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          at(t), (i = !1);
        } else gn !== null && (oh(gn), (gn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Oe.current & 1 ? Ke === 0 && (Ke = 3) : Ym())),
          t.updateQueue !== null && (t.flags |= 4),
          at(t),
          null);
    case 4:
      return (
        Vi(), Yp(e, t), e === null && Ss(t.stateNode.containerInfo), at(t), null
      );
    case 10:
      return $m(t.type._context), at(t), null;
    case 17:
      return Tt(t.type) && Yu(), at(t), null;
    case 19:
      if ((Ee(Oe), (i = t.memoizedState), i === null)) return at(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) xa(i, !1);
        else {
          if (Ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = rc(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    xa(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(Oe, (Oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Be() > Ui &&
            ((t.flags |= 128), (r = !0), xa(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rc(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xa(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Re)
            )
              return at(t), null;
          } else
            2 * Be() - i.renderingStartTime > Ui &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xa(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Be()),
          (t.sibling = null),
          (n = Oe.current),
          we(Oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (at(t), null);
    case 22:
    case 23:
      return (
        Xm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? zt & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : at(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function I4(e, t) {
  switch ((Am(t), t.tag)) {
    case 1:
      return (
        Tt(t.type) && Yu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vi(),
        Ee(Et),
        Ee(ft),
        Lm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fm(t), null;
    case 13:
      if (
        (Ee(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        Ni();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ee(Oe), null;
    case 4:
      return Vi(), null;
    case 10:
      return $m(t.type._context), null;
    case 22:
    case 23:
      return Xm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nl = !1,
  ut = !1,
  z4 = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function ci(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Fe(e, t, r);
      }
    else n.current = null;
}
function Qp(e, t, n) {
  try {
    n();
  } catch (r) {
    Fe(e, t, r);
  }
}
var X0 = !1;
function F4(e, t) {
  if (((Dp = Gu), (e = Px()), Tm(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ip = { focusedElem: e, selectionRange: n }, Gu = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    S = v.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : mn(t.type, g),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (w) {
          Fe(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (v = X0), (X0 = !1), v;
}
function Ya(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Qp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Zp(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cw(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Dn], delete t[ws], delete t[Lp], delete t[b4], delete t[S4])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _w(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Y0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _w(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Jp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jp(e, t, n), e = e.sibling; e !== null; ) Jp(e, t, n), (e = e.sibling);
}
function eh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eh(e, t, n), e = e.sibling; e !== null; ) eh(e, t, n), (e = e.sibling);
}
var et = null,
  vn = !1;
function wr(e, t, n) {
  for (n = n.child; n !== null; ) Ew(e, t, n), (n = n.sibling);
}
function Ew(e, t, n) {
  if (zn && typeof zn.onCommitFiberUnmount == "function")
    try {
      zn.onCommitFiberUnmount(Ic, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ut || ci(n, t);
    case 6:
      var r = et,
        o = vn;
      (et = null),
        wr(e, t, n),
        (et = r),
        (vn = o),
        et !== null &&
          (vn
            ? ((e = et),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : et.removeChild(n.stateNode));
      break;
    case 18:
      et !== null &&
        (vn
          ? ((e = et),
            (n = n.stateNode),
            e.nodeType === 8
              ? cf(e.parentNode, n)
              : e.nodeType === 1 && cf(e, n),
            gs(e))
          : cf(et, n.stateNode));
      break;
    case 4:
      (r = et),
        (o = vn),
        (et = n.stateNode.containerInfo),
        (vn = !0),
        wr(e, t, n),
        (et = r),
        (vn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ut &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Qp(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      wr(e, t, n);
      break;
    case 1:
      if (
        !ut &&
        (ci(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Fe(n, t, s);
        }
      wr(e, t, n);
      break;
    case 21:
      wr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ut = (r = ut) || n.memoizedState !== null), wr(e, t, n), (ut = r))
        : wr(e, t, n);
      break;
    default:
      wr(e, t, n);
  }
}
function Q0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new z4()),
      t.forEach(function (r) {
        var o = G4.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function pn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (et = s.stateNode), (vn = !1);
              break e;
            case 3:
              (et = s.stateNode.containerInfo), (vn = !0);
              break e;
            case 4:
              (et = s.stateNode.containerInfo), (vn = !0);
              break e;
          }
          s = s.return;
        }
        if (et === null) throw Error(z(160));
        Ew(i, a, o), (et = null), (vn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Fe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tw(t, e), (t = t.sibling);
}
function Tw(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pn(t, e), Pn(e), r & 4)) {
        try {
          Ya(3, e, e.return), Wc(3, e);
        } catch (g) {
          Fe(e, e.return, g);
        }
        try {
          Ya(5, e, e.return);
        } catch (g) {
          Fe(e, e.return, g);
        }
      }
      break;
    case 1:
      pn(t, e), Pn(e), r & 512 && n !== null && ci(n, n.return);
      break;
    case 5:
      if (
        (pn(t, e),
        Pn(e),
        r & 512 && n !== null && ci(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ps(o, "");
        } catch (g) {
          Fe(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && XS(o, i),
              Cp(s, a);
            var u = Cp(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? ex(o, d)
                : c === "dangerouslySetInnerHTML"
                ? ZS(o, d)
                : c === "children"
                ? ps(o, d)
                : hm(o, c, d, u);
            }
            switch (s) {
              case "input":
                bp(o, i);
                break;
              case "textarea":
                YS(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Ci(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ci(o, !!i.multiple, i.defaultValue, !0)
                      : Ci(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ws] = i;
          } catch (g) {
            Fe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((pn(t, e), Pn(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Fe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (pn(t, e), Pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          gs(t.containerInfo);
        } catch (g) {
          Fe(e, e.return, g);
        }
      break;
    case 4:
      pn(t, e), Pn(e);
      break;
    case 13:
      pn(t, e),
        Pn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Km = Be())),
        r & 4 && Q0(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ut = (u = ut) || c), pn(t, e), (ut = u)) : pn(t, e),
        Pn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((f = F), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ya(4, f, f.return);
                  break;
                case 1:
                  ci(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      Fe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ci(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    J0(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (F = p)) : J0(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = JS("display", a)));
              } catch (g) {
                Fe(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Fe(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      pn(t, e), Pn(e), r & 4 && Q0(e);
      break;
    case 21:
      break;
    default:
      pn(t, e), Pn(e);
  }
}
function Pn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_w(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ps(o, ""), (r.flags &= -33));
          var i = Y0(e);
          eh(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Y0(e);
          Jp(e, s, a);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      Fe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function L4(e, t, n) {
  (F = e), Pw(e);
}
function Pw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Nl;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || ut;
        s = Nl;
        var u = ut;
        if (((Nl = a), (ut = l) && !u))
          for (F = o; F !== null; )
            (a = F),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? ey(o)
                : l !== null
                ? ((l.return = a), (F = l))
                : ey(o);
        for (; i !== null; ) (F = i), Pw(i), (i = i.sibling);
        (F = o), (Nl = s), (ut = u);
      }
      Z0(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : Z0(e);
  }
}
function Z0(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ut || Wc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ut)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && z0(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                z0(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && gs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        ut || (t.flags & 512 && Zp(t));
      } catch (f) {
        Fe(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function J0(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function ey(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wc(4, t);
          } catch (l) {
            Fe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Fe(t, o, l);
            }
          }
          var i = t.return;
          try {
            Zp(t);
          } catch (l) {
            Fe(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Zp(t);
          } catch (l) {
            Fe(t, a, l);
          }
      }
    } catch (l) {
      Fe(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (F = s);
      break;
    }
    F = t.return;
  }
}
var j4 = Math.ceil,
  ac = yr.ReactCurrentDispatcher,
  Hm = yr.ReactCurrentOwner,
  rn = yr.ReactCurrentBatchConfig,
  le = 0,
  Qe = null,
  He = null,
  rt = 0,
  zt = 0,
  di = Xr(0),
  Ke = 0,
  Ps = null,
  $o = 0,
  Uc = 0,
  Gm = 0,
  Qa = null,
  kt = null,
  Km = 0,
  Ui = 1 / 0,
  qn = null,
  sc = !1,
  th = null,
  Nr = null,
  Bl = !1,
  Dr = null,
  lc = 0,
  Za = 0,
  nh = null,
  vu = -1,
  gu = 0;
function yt() {
  return le & 6 ? Be() : vu !== -1 ? vu : (vu = Be());
}
function Br(e) {
  return e.mode & 1
    ? le & 2 && rt !== 0
      ? rt & -rt
      : w4.transition !== null
      ? (gu === 0 && (gu = fx()), gu)
      : ((e = ve),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bx(e.type))),
        e)
    : 1;
}
function xn(e, t, n, r) {
  if (50 < Za) throw ((Za = 0), (nh = null), Error(z(185)));
  Ys(e, n, r),
    (!(le & 2) || e !== Qe) &&
      (e === Qe && (!(le & 2) && (Uc |= n), Ke === 4 && Or(e, rt)),
      Pt(e, r),
      n === 1 && le === 0 && !(t.mode & 1) && ((Ui = Be() + 500), Nc && Yr()));
}
function Pt(e, t) {
  var n = e.callbackNode;
  w3(e, t);
  var r = Hu(e, e === Qe ? rt : 0);
  if (r === 0)
    n !== null && u0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && u0(n), t === 1))
      e.tag === 0 ? x4(ty.bind(null, e)) : Lx(ty.bind(null, e)),
        g4(function () {
          !(le & 6) && Yr();
        }),
        (n = null);
    else {
      switch (px(r)) {
        case 1:
          n = bm;
          break;
        case 4:
          n = cx;
          break;
        case 16:
          n = Uu;
          break;
        case 536870912:
          n = dx;
          break;
        default:
          n = Uu;
      }
      n = zw(n, Aw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Aw(e, t) {
  if (((vu = -1), (gu = 0), le & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (Ai() && e.callbackNode !== n) return null;
  var r = Hu(e, e === Qe ? rt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = uc(e, r);
  else {
    t = r;
    var o = le;
    le |= 2;
    var i = Ow();
    (Qe !== e || rt !== t) && ((qn = null), (Ui = Be() + 500), xo(e, t));
    do
      try {
        V4();
        break;
      } catch (s) {
        Rw(e, s);
      }
    while (!0);
    Mm(),
      (ac.current = i),
      (le = o),
      He !== null ? (t = 0) : ((Qe = null), (rt = 0), (t = Ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ap(e)), o !== 0 && ((r = o), (t = rh(e, o)))), t === 1)
    )
      throw ((n = Ps), xo(e, 0), Or(e, r), Pt(e, Be()), n);
    if (t === 6) Or(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !N4(o) &&
          ((t = uc(e, r)),
          t === 2 && ((i = Ap(e)), i !== 0 && ((r = i), (t = rh(e, i)))),
          t === 1))
      )
        throw ((n = Ps), xo(e, 0), Or(e, r), Pt(e, Be()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          uo(e, kt, qn);
          break;
        case 3:
          if (
            (Or(e, r), (r & 130023424) === r && ((t = Km + 500 - Be()), 10 < t))
          ) {
            if (Hu(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              yt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Fp(uo.bind(null, e, kt, qn), t);
            break;
          }
          uo(e, kt, qn);
          break;
        case 4:
          if ((Or(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Sn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Be() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * j4(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fp(uo.bind(null, e, kt, qn), r);
            break;
          }
          uo(e, kt, qn);
          break;
        case 5:
          uo(e, kt, qn);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Pt(e, Be()), e.callbackNode === n ? Aw.bind(null, e) : null;
}
function rh(e, t) {
  var n = Qa;
  return (
    e.current.memoizedState.isDehydrated && (xo(e, t).flags |= 256),
    (e = uc(e, t)),
    e !== 2 && ((t = kt), (kt = n), t !== null && oh(t)),
    e
  );
}
function oh(e) {
  kt === null ? (kt = e) : kt.push.apply(kt, e);
}
function N4(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!kn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Or(e, t) {
  for (
    t &= ~Gm,
      t &= ~Uc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Sn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ty(e) {
  if (le & 6) throw Error(z(327));
  Ai();
  var t = Hu(e, 0);
  if (!(t & 1)) return Pt(e, Be()), null;
  var n = uc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ap(e);
    r !== 0 && ((t = r), (n = rh(e, r)));
  }
  if (n === 1) throw ((n = Ps), xo(e, 0), Or(e, t), Pt(e, Be()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    uo(e, kt, qn),
    Pt(e, Be()),
    null
  );
}
function qm(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((Ui = Be() + 500), Nc && Yr());
  }
}
function Do(e) {
  Dr !== null && Dr.tag === 0 && !(le & 6) && Ai();
  var t = le;
  le |= 1;
  var n = rn.transition,
    r = ve;
  try {
    if (((rn.transition = null), (ve = 1), e)) return e();
  } finally {
    (ve = r), (rn.transition = n), (le = t), !(le & 6) && Yr();
  }
}
function Xm() {
  (zt = di.current), Ee(di);
}
function xo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), v4(n)), He !== null))
    for (n = He.return; n !== null; ) {
      var r = n;
      switch ((Am(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yu();
          break;
        case 3:
          Vi(), Ee(Et), Ee(ft), Lm();
          break;
        case 5:
          Fm(r);
          break;
        case 4:
          Vi();
          break;
        case 13:
          Ee(Oe);
          break;
        case 19:
          Ee(Oe);
          break;
        case 10:
          $m(r.type._context);
          break;
        case 22:
        case 23:
          Xm();
      }
      n = n.return;
    }
  if (
    ((Qe = e),
    (He = e = Vr(e.current, null)),
    (rt = zt = t),
    (Ke = 0),
    (Ps = null),
    (Gm = Uc = $o = 0),
    (kt = Qa = null),
    vo !== null)
  ) {
    for (t = 0; t < vo.length; t++)
      if (((n = vo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    vo = null;
  }
  return e;
}
function Rw(e, t) {
  do {
    var n = He;
    try {
      if ((Mm(), (pu.current = ic), oc)) {
        for (var r = $e.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        oc = !1;
      }
      if (
        ((Mo = 0),
        (Ye = Ge = $e = null),
        (Xa = !1),
        (_s = 0),
        (Hm.current = null),
        n === null || n.return === null)
      ) {
        (Ke = 1), (Ps = t), (He = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = rt),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = V0(a);
          if (p !== null) {
            (p.flags &= -257),
              W0(p, a, s, i, t),
              p.mode & 1 && B0(i, u, t),
              (t = p),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              B0(i, u, t), Ym();
              break e;
            }
            l = Error(z(426));
          }
        } else if (Re && s.mode & 1) {
          var S = V0(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              W0(S, a, s, i, t),
              Rm(Wi(l, s));
            break e;
          }
        }
        (i = l = Wi(l, s)),
          Ke !== 4 && (Ke = 2),
          Qa === null ? (Qa = [i]) : Qa.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = pw(i, l, t);
              I0(i, h);
              break e;
            case 1:
              s = l;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Nr === null || !Nr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = hw(i, s, t);
                I0(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $w(n);
    } catch (C) {
      (t = C), He === n && n !== null && (He = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ow() {
  var e = ac.current;
  return (ac.current = ic), e === null ? ic : e;
}
function Ym() {
  (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
    Qe === null || (!($o & 268435455) && !(Uc & 268435455)) || Or(Qe, rt);
}
function uc(e, t) {
  var n = le;
  le |= 2;
  var r = Ow();
  (Qe !== e || rt !== t) && ((qn = null), xo(e, t));
  do
    try {
      B4();
      break;
    } catch (o) {
      Rw(e, o);
    }
  while (!0);
  if ((Mm(), (le = n), (ac.current = r), He !== null)) throw Error(z(261));
  return (Qe = null), (rt = 0), Ke;
}
function B4() {
  for (; He !== null; ) Mw(He);
}
function V4() {
  for (; He !== null && !p3(); ) Mw(He);
}
function Mw(e) {
  var t = Iw(e.alternate, e, zt);
  (e.memoizedProps = e.pendingProps),
    t === null ? $w(e) : (He = t),
    (Hm.current = null);
}
function $w(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = I4(n, t)), n !== null)) {
        (n.flags &= 32767), (He = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ke = 6), (He = null);
        return;
      }
    } else if (((n = D4(n, t, zt)), n !== null)) {
      He = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      He = t;
      return;
    }
    He = t = e;
  } while (t !== null);
  Ke === 0 && (Ke = 5);
}
function uo(e, t, n) {
  var r = ve,
    o = rn.transition;
  try {
    (rn.transition = null), (ve = 1), W4(e, t, n, r);
  } finally {
    (rn.transition = o), (ve = r);
  }
  return null;
}
function W4(e, t, n, r) {
  do Ai();
  while (Dr !== null);
  if (le & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (k3(e, i),
    e === Qe && ((He = Qe = null), (rt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bl ||
      ((Bl = !0),
      zw(Uu, function () {
        return Ai(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = rn.transition), (rn.transition = null);
    var a = ve;
    ve = 1;
    var s = le;
    (le |= 4),
      (Hm.current = null),
      F4(e, n),
      Tw(n, e),
      u4(Ip),
      (Gu = !!Dp),
      (Ip = Dp = null),
      (e.current = n),
      L4(n),
      h3(),
      (le = s),
      (ve = a),
      (rn.transition = i);
  } else e.current = n;
  if (
    (Bl && ((Bl = !1), (Dr = e), (lc = o)),
    (i = e.pendingLanes),
    i === 0 && (Nr = null),
    g3(n.stateNode),
    Pt(e, Be()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (sc) throw ((sc = !1), (e = th), (th = null), e);
  return (
    lc & 1 && e.tag !== 0 && Ai(),
    (i = e.pendingLanes),
    i & 1 ? (e === nh ? Za++ : ((Za = 0), (nh = e))) : (Za = 0),
    Yr(),
    null
  );
}
function Ai() {
  if (Dr !== null) {
    var e = px(lc),
      t = rn.transition,
      n = ve;
    try {
      if (((rn.transition = null), (ve = 16 > e ? 16 : e), Dr === null))
        var r = !1;
      else {
        if (((e = Dr), (Dr = null), (lc = 0), le & 6)) throw Error(z(331));
        var o = le;
        for (le |= 4, F = e.current; F !== null; ) {
          var i = F,
            a = i.child;
          if (F.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ya(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (F = d);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling,
                        p = c.return;
                      if ((Cw(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (F = f);
                        break;
                      }
                      F = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (F = a);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ya(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (F = h);
                break e;
              }
              F = i.return;
            }
        }
        var m = e.current;
        for (F = m; F !== null; ) {
          a = F;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (F = y);
          else
            e: for (a = m; F !== null; ) {
              if (((s = F), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wc(9, s);
                  }
                } catch (C) {
                  Fe(s, s.return, C);
                }
              if (s === a) {
                F = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (F = w);
                break e;
              }
              F = s.return;
            }
        }
        if (
          ((le = o), Yr(), zn && typeof zn.onPostCommitFiberRoot == "function")
        )
          try {
            zn.onPostCommitFiberRoot(Ic, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ve = n), (rn.transition = t);
    }
  }
  return !1;
}
function ny(e, t, n) {
  (t = Wi(n, t)),
    (t = pw(e, t, 1)),
    (e = jr(e, t, 1)),
    (t = yt()),
    e !== null && (Ys(e, 1, t), Pt(e, t));
}
function Fe(e, t, n) {
  if (e.tag === 3) ny(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ny(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nr === null || !Nr.has(r)))
        ) {
          (e = Wi(n, e)),
            (e = hw(t, e, 1)),
            (t = jr(t, e, 1)),
            (e = yt()),
            t !== null && (Ys(t, 1, e), Pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function U4(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = yt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Qe === e &&
      (rt & n) === n &&
      (Ke === 4 || (Ke === 3 && (rt & 130023424) === rt && 500 > Be() - Km)
        ? xo(e, 0)
        : (Gm |= n)),
    Pt(e, t);
}
function Dw(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ol), (Ol <<= 1), !(Ol & 130023424) && (Ol = 4194304))
      : (t = 1));
  var n = yt();
  (e = pr(e, t)), e !== null && (Ys(e, t, n), Pt(e, n));
}
function H4(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dw(e, n);
}
function G4(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), Dw(e, n);
}
var Iw;
Iw = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Et.current) _t = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (_t = !1), $4(e, t, n);
      _t = !!(e.flags & 131072);
    }
  else (_t = !1), Re && t.flags & 1048576 && jx(t, Ju, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      mu(e, t), (e = t.pendingProps);
      var o = ji(t, ft.current);
      Pi(t, n), (o = Nm(null, t, r, e, o, n));
      var i = Bm();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Tt(r) ? ((i = !0), Qu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Im(t),
            (o.updater = Vc),
            (t.stateNode = o),
            (o._reactInternals = t),
            Up(t, r, e, n),
            (t = Kp(null, t, r, !0, i, n)))
          : ((t.tag = 0), Re && i && Pm(t), vt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (mu(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = q4(r)),
          (e = mn(r, e)),
          o)
        ) {
          case 0:
            t = Gp(null, t, r, e, n);
            break e;
          case 1:
            t = G0(null, t, r, e, n);
            break e;
          case 11:
            t = U0(null, t, r, e, n);
            break e;
          case 14:
            t = H0(null, t, r, mn(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        Gp(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        G0(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((yw(t), e === null)) throw Error(z(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Hx(e, t),
          nc(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Wi(Error(z(423)), t)), (t = K0(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Wi(Error(z(424)), t)), (t = K0(e, t, r, n, o));
            break e;
          } else
            for (
              Lt = Lr(t.stateNode.containerInfo.firstChild),
                jt = t,
                Re = !0,
                gn = null,
                n = Wx(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ni(), r === o)) {
            t = hr(e, t, n);
            break e;
          }
          vt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gx(t),
        e === null && Bp(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        zp(r, o) ? (a = null) : i !== null && zp(r, i) && (t.flags |= 32),
        gw(e, t),
        vt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Bp(t), null;
    case 13:
      return bw(e, t, n);
    case 4:
      return (
        zm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bi(t, null, r, n)) : vt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        U0(e, t, r, o, n)
      );
    case 7:
      return vt(e, t, t.pendingProps, n), t.child;
    case 8:
      return vt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return vt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          we(ec, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (kn(i.value, a)) {
            if (i.children === o.children && !Et.current) {
              t = hr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = rr(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Vp(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(z(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Vp(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        vt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Pi(t, n),
        (o = an(o)),
        (r = r(o)),
        (t.flags |= 1),
        vt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = mn(r, t.pendingProps)),
        (o = mn(r.type, o)),
        H0(e, t, r, o, n)
      );
    case 15:
      return mw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        mu(e, t),
        (t.tag = 1),
        Tt(r) ? ((e = !0), Qu(t)) : (e = !1),
        Pi(t, n),
        fw(t, r, o),
        Up(t, r, o, n),
        Kp(null, t, r, !0, e, n)
      );
    case 19:
      return Sw(e, t, n);
    case 22:
      return vw(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function zw(e, t) {
  return ux(e, t);
}
function K4(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function tn(e, t, n, r) {
  return new K4(e, t, n, r);
}
function Qm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function q4(e) {
  if (typeof e == "function") return Qm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vm)) return 11;
    if (e === gm) return 14;
  }
  return 2;
}
function Vr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function yu(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Qm(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ti:
        return wo(n.children, o, i, t);
      case mm:
        (a = 8), (o |= 8);
        break;
      case hp:
        return (
          (e = tn(12, n, t, o | 2)), (e.elementType = hp), (e.lanes = i), e
        );
      case mp:
        return (e = tn(13, n, t, o)), (e.elementType = mp), (e.lanes = i), e;
      case vp:
        return (e = tn(19, n, t, o)), (e.elementType = vp), (e.lanes = i), e;
      case GS:
        return Hc(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case US:
              a = 10;
              break e;
            case HS:
              a = 9;
              break e;
            case vm:
              a = 11;
              break e;
            case gm:
              a = 14;
              break e;
            case Pr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tn(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function wo(e, t, n, r) {
  return (e = tn(7, e, r, t)), (e.lanes = n), e;
}
function Hc(e, t, n, r) {
  return (
    (e = tn(22, e, r, t)),
    (e.elementType = GS),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yf(e, t, n) {
  return (e = tn(6, e, null, t)), (e.lanes = n), e;
}
function bf(e, t, n) {
  return (
    (t = tn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function X4(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zd(0)),
    (this.expirationTimes = Zd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Zm(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new X4(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = tn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Im(i),
    e
  );
}
function Y4(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ei,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fw(e) {
  if (!e) return Hr;
  e = e._reactInternals;
  e: {
    if (Bo(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Tt(n)) return Fx(e, n, t);
  }
  return t;
}
function Lw(e, t, n, r, o, i, a, s, l) {
  return (
    (e = Zm(n, r, !0, e, o, i, a, s, l)),
    (e.context = Fw(null)),
    (n = e.current),
    (r = yt()),
    (o = Br(n)),
    (i = rr(r, o)),
    (i.callback = t ?? null),
    jr(n, i, o),
    (e.current.lanes = o),
    Ys(e, o, r),
    Pt(e, r),
    e
  );
}
function Gc(e, t, n, r) {
  var o = t.current,
    i = yt(),
    a = Br(o);
  return (
    (n = Fw(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jr(o, t, a)),
    e !== null && (xn(e, o, a, i), fu(e, o, a)),
    a
  );
}
function cc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ry(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jm(e, t) {
  ry(e, t), (e = e.alternate) && ry(e, t);
}
function Q4() {
  return null;
}
var jw =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ev(e) {
  this._internalRoot = e;
}
Kc.prototype.render = ev.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Gc(e, t, null, null);
};
Kc.prototype.unmount = ev.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Do(function () {
      Gc(null, e, null, null);
    }),
      (t[fr] = null);
  }
};
function Kc(e) {
  this._internalRoot = e;
}
Kc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rr.length && t !== 0 && t < Rr[n].priority; n++);
    Rr.splice(n, 0, e), n === 0 && yx(e);
  }
};
function tv(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function oy() {}
function Z4(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = cc(a);
        i.call(u);
      };
    }
    var a = Lw(t, r, e, 0, null, !1, !1, "", oy);
    return (
      (e._reactRootContainer = a),
      (e[fr] = a.current),
      Ss(e.nodeType === 8 ? e.parentNode : e),
      Do(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = cc(l);
      s.call(u);
    };
  }
  var l = Zm(e, 0, !1, null, null, !1, !1, "", oy);
  return (
    (e._reactRootContainer = l),
    (e[fr] = l.current),
    Ss(e.nodeType === 8 ? e.parentNode : e),
    Do(function () {
      Gc(t, l, n, r);
    }),
    l
  );
}
function Xc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = cc(a);
        s.call(l);
      };
    }
    Gc(t, a, e, o);
  } else a = Z4(n, t, e, o, r);
  return cc(a);
}
hx = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Da(t.pendingLanes);
        n !== 0 &&
          (Sm(t, n | 1), Pt(t, Be()), !(le & 6) && ((Ui = Be() + 500), Yr()));
      }
      break;
    case 13:
      Do(function () {
        var r = pr(e, 1);
        if (r !== null) {
          var o = yt();
          xn(r, e, 1, o);
        }
      }),
        Jm(e, 1);
  }
};
xm = function (e) {
  if (e.tag === 13) {
    var t = pr(e, 134217728);
    if (t !== null) {
      var n = yt();
      xn(t, e, 134217728, n);
    }
    Jm(e, 134217728);
  }
};
mx = function (e) {
  if (e.tag === 13) {
    var t = Br(e),
      n = pr(e, t);
    if (n !== null) {
      var r = yt();
      xn(n, e, t, r);
    }
    Jm(e, t);
  }
};
vx = function () {
  return ve;
};
gx = function (e, t) {
  var n = ve;
  try {
    return (ve = e), t();
  } finally {
    ve = n;
  }
};
Ep = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bp(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = jc(r);
            if (!o) throw Error(z(90));
            qS(r), bp(r, o);
          }
        }
      }
      break;
    case "textarea":
      YS(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ci(e, !!n.multiple, t, !1);
  }
};
rx = qm;
ox = Do;
var J4 = { usingClientEntryPoint: !1, Events: [Zs, ii, jc, tx, nx, qm] },
  wa = {
    findFiberByHostInstance: mo,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  eT = {
    bundleType: wa.bundleType,
    version: wa.version,
    rendererPackageName: wa.rendererPackageName,
    rendererConfig: wa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sx(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wa.findFiberByHostInstance || Q4,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vl.isDisabled && Vl.supportsFiber)
    try {
      (Ic = Vl.inject(eT)), (zn = Vl);
    } catch {}
}
Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J4;
Gt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tv(t)) throw Error(z(200));
  return Y4(e, t, null, n);
};
Gt.createRoot = function (e, t) {
  if (!tv(e)) throw Error(z(299));
  var n = !1,
    r = "",
    o = jw;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Zm(e, 1, !1, null, null, n, !1, r, o)),
    (e[fr] = t.current),
    Ss(e.nodeType === 8 ? e.parentNode : e),
    new ev(t)
  );
};
Gt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = sx(t)), (e = e === null ? null : e.stateNode), e;
};
Gt.flushSync = function (e) {
  return Do(e);
};
Gt.hydrate = function (e, t, n) {
  if (!qc(t)) throw Error(z(200));
  return Xc(null, e, t, !0, n);
};
Gt.hydrateRoot = function (e, t, n) {
  if (!tv(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = jw;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Lw(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[fr] = t.current),
    Ss(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Kc(t);
};
Gt.render = function (e, t, n) {
  if (!qc(t)) throw Error(z(200));
  return Xc(null, e, t, !1, n);
};
Gt.unmountComponentAtNode = function (e) {
  if (!qc(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (Do(function () {
        Xc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[fr] = null);
        });
      }),
      !0)
    : !1;
};
Gt.unstable_batchedUpdates = qm;
Gt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qc(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Xc(e, t, n, !1, r);
};
Gt.version = "18.3.1-next-f1338f8080-20240426";
function Nw() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nw);
    } catch (e) {
      console.error(e);
    }
}
Nw(), (NS.exports = Gt);
var nv = NS.exports,
  Bw,
  iy = nv;
(Bw = iy.createRoot), iy.hydrateRoot;
var tT = !1;
function nT(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function rT(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var oT = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !tT : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(rT(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = nT(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  st = "-ms-",
  dc = "-moz-",
  fe = "-webkit-",
  Vw = "comm",
  rv = "rule",
  ov = "decl",
  iT = "@import",
  Ww = "@keyframes",
  aT = "@layer",
  sT = Math.abs,
  Yc = String.fromCharCode,
  lT = Object.assign;
function uT(e, t) {
  return nt(e, 0) ^ 45
    ? (((((((t << 2) ^ nt(e, 0)) << 2) ^ nt(e, 1)) << 2) ^ nt(e, 2)) << 2) ^
        nt(e, 3)
    : 0;
}
function Uw(e) {
  return e.trim();
}
function cT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function pe(e, t, n) {
  return e.replace(t, n);
}
function ih(e, t) {
  return e.indexOf(t);
}
function nt(e, t) {
  return e.charCodeAt(t) | 0;
}
function As(e, t, n) {
  return e.slice(t, n);
}
function Mn(e) {
  return e.length;
}
function iv(e) {
  return e.length;
}
function Wl(e, t) {
  return t.push(e), e;
}
function dT(e, t) {
  return e.map(t).join("");
}
var Qc = 1,
  Hi = 1,
  Hw = 0,
  $t = 0,
  Ue = 0,
  ia = "";
function Zc(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Qc,
    column: Hi,
    length: a,
    return: "",
  };
}
function ka(e, t) {
  return lT(Zc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function fT() {
  return Ue;
}
function pT() {
  return (
    (Ue = $t > 0 ? nt(ia, --$t) : 0), Hi--, Ue === 10 && ((Hi = 1), Qc--), Ue
  );
}
function Nt() {
  return (
    (Ue = $t < Hw ? nt(ia, $t++) : 0), Hi++, Ue === 10 && ((Hi = 1), Qc++), Ue
  );
}
function Ln() {
  return nt(ia, $t);
}
function bu() {
  return $t;
}
function el(e, t) {
  return As(ia, e, t);
}
function Rs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gw(e) {
  return (Qc = Hi = 1), (Hw = Mn((ia = e))), ($t = 0), [];
}
function Kw(e) {
  return (ia = ""), e;
}
function Su(e) {
  return Uw(el($t - 1, ah(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hT(e) {
  for (; (Ue = Ln()) && Ue < 33; ) Nt();
  return Rs(e) > 2 || Rs(Ue) > 3 ? "" : " ";
}
function mT(e, t) {
  for (
    ;
    --t &&
    Nt() &&
    !(Ue < 48 || Ue > 102 || (Ue > 57 && Ue < 65) || (Ue > 70 && Ue < 97));

  );
  return el(e, bu() + (t < 6 && Ln() == 32 && Nt() == 32));
}
function ah(e) {
  for (; Nt(); )
    switch (Ue) {
      case e:
        return $t;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ah(Ue);
        break;
      case 40:
        e === 41 && ah(e);
        break;
      case 92:
        Nt();
        break;
    }
  return $t;
}
function vT(e, t) {
  for (; Nt() && e + Ue !== 57; ) if (e + Ue === 84 && Ln() === 47) break;
  return "/*" + el(t, $t - 1) + "*" + Yc(e === 47 ? e : Nt());
}
function gT(e) {
  for (; !Rs(Ln()); ) Nt();
  return el(e, $t);
}
function yT(e) {
  return Kw(xu("", null, null, null, [""], (e = Gw(e)), 0, [0], e));
}
function xu(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      p = 0,
      v = 0,
      g = 1,
      S = 1,
      h = 1,
      m = 0,
      y = "",
      w = o,
      C = i,
      P = r,
      _ = y;
    S;

  )
    switch (((v = m), (m = Nt()))) {
      case 40:
        if (v != 108 && nt(_, d - 1) == 58) {
          ih((_ += pe(Su(m), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Su(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += hT(v);
        break;
      case 92:
        _ += mT(bu() - 1, 7);
        continue;
      case 47:
        switch (Ln()) {
          case 42:
          case 47:
            Wl(bT(vT(Nt(), bu()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        s[u++] = Mn(_) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            h == -1 && (_ = pe(_, /\f/g, "")),
              p > 0 &&
                Mn(_) - d &&
                Wl(
                  p > 32
                    ? sy(_ + ";", r, n, d - 1)
                    : sy(pe(_, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (Wl((P = ay(_, t, n, u, c, o, s, y, (w = []), (C = []), d)), i),
              m === 123)
            )
              if (c === 0) xu(_, t, P, P, w, i, d, s, C);
              else
                switch (f === 99 && nt(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xu(
                      e,
                      P,
                      P,
                      r && Wl(ay(e, P, P, 0, 0, o, s, y, o, (w = []), d), C),
                      o,
                      C,
                      d,
                      s,
                      r ? w : C
                    );
                    break;
                  default:
                    xu(_, P, P, P, [""], C, 0, s, C);
                }
        }
        (u = c = p = 0), (g = h = 1), (y = _ = ""), (d = a);
        break;
      case 58:
        (d = 1 + Mn(_)), (p = v);
      default:
        if (g < 1) {
          if (m == 123) --g;
          else if (m == 125 && g++ == 0 && pT() == 125) continue;
        }
        switch (((_ += Yc(m)), m * g)) {
          case 38:
            h = c > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Mn(_) - 1) * h), (h = 1);
            break;
          case 64:
            Ln() === 45 && (_ += Su(Nt())),
              (f = Ln()),
              (c = d = Mn((y = _ += gT(bu())))),
              m++;
            break;
          case 45:
            v === 45 && Mn(_) == 2 && (g = 0);
        }
    }
  return i;
}
function ay(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], p = iv(f), v = 0, g = 0, S = 0;
    v < r;
    ++v
  )
    for (var h = 0, m = As(e, d + 1, (d = sT((g = a[v])))), y = e; h < p; ++h)
      (y = Uw(g > 0 ? f[h] + " " + m : pe(m, /&\f/g, f[h]))) && (l[S++] = y);
  return Zc(e, t, n, o === 0 ? rv : s, l, u, c);
}
function bT(e, t, n) {
  return Zc(e, t, n, Vw, Yc(fT()), As(e, 2, -2), 0);
}
function sy(e, t, n, r) {
  return Zc(e, t, n, ov, As(e, 0, r), As(e, r + 1, -1), r);
}
function Ri(e, t) {
  for (var n = "", r = iv(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function ST(e, t, n, r) {
  switch (e.type) {
    case aT:
      if (e.children.length) break;
    case iT:
    case ov:
      return (e.return = e.return || e.value);
    case Vw:
      return "";
    case Ww:
      return (e.return = e.value + "{" + Ri(e.children, r) + "}");
    case rv:
      e.value = e.props.join(",");
  }
  return Mn((n = Ri(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function xT(e) {
  var t = iv(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function wT(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var ly = function (t) {
  var n = new WeakMap();
  return function (r) {
    if (n.has(r)) return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function qw(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var kT = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Ln()), o === 38 && i === 12 && (n[r] = 1), !Rs(i);

    )
      Nt();
    return el(t, $t);
  },
  CT = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Rs(o)) {
        case 0:
          o === 38 && Ln() === 12 && (n[r] = 1), (t[r] += kT($t - 1, n, r));
          break;
        case 2:
          t[r] += Su(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Ln() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Yc(o);
      }
    while ((o = Nt()));
    return t;
  },
  _T = function (t, n) {
    return Kw(CT(Gw(t), n));
  },
  uy = new WeakMap(),
  ET = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !uy.get(r)) &&
        !o
      ) {
        uy.set(t, !0);
        for (
          var i = [], a = _T(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  TT = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Xw(e, t) {
  switch (uT(e, t)) {
    case 5103:
      return fe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return fe + e + dc + e + st + e + e;
    case 6828:
    case 4268:
      return fe + e + st + e + e;
    case 6165:
      return fe + e + st + "flex-" + e + e;
    case 5187:
      return (
        fe + e + pe(e, /(\w+).+(:[^]+)/, fe + "box-$1$2" + st + "flex-$1$2") + e
      );
    case 5443:
      return fe + e + st + "flex-item-" + pe(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        fe +
        e +
        st +
        "flex-line-pack" +
        pe(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return fe + e + st + pe(e, "shrink", "negative") + e;
    case 5292:
      return fe + e + st + pe(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        fe +
        "box-" +
        pe(e, "-grow", "") +
        fe +
        e +
        st +
        pe(e, "grow", "positive") +
        e
      );
    case 4554:
      return fe + pe(e, /([^-])(transform)/g, "$1" + fe + "$2") + e;
    case 6187:
      return (
        pe(
          pe(pe(e, /(zoom-|grab)/, fe + "$1"), /(image-set)/, fe + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return pe(e, /(image-set\([^]*)/, fe + "$1$`$1");
    case 4968:
      return (
        pe(
          pe(e, /(.+:)(flex-)?(.*)/, fe + "box-pack:$3" + st + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        fe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return pe(e, /(.+)-inline(.+)/, fe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Mn(e) - 1 - t > 6)
        switch (nt(e, t + 1)) {
          case 109:
            if (nt(e, t + 4) !== 45) break;
          case 102:
            return (
              pe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  fe +
                  "$2-$3$1" +
                  dc +
                  (nt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~ih(e, "stretch")
              ? Xw(pe(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (nt(e, t + 1) !== 115) break;
    case 6444:
      switch (nt(e, Mn(e) - 3 - (~ih(e, "!important") && 10))) {
        case 107:
          return pe(e, ":", ":" + fe) + e;
        case 101:
          return (
            pe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                fe +
                (nt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                fe +
                "$2$3$1" +
                st +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (nt(e, t + 11)) {
        case 114:
          return fe + e + st + pe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return fe + e + st + pe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return fe + e + st + pe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return fe + e + st + e + e;
  }
  return e;
}
var PT = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case ov:
          t.return = Xw(t.value, t.length);
          break;
        case Ww:
          return Ri([ka(t, { value: pe(t.value, "@", "@" + fe) })], o);
        case rv:
          if (t.length)
            return dT(t.props, function (i) {
              switch (cT(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ri(
                    [ka(t, { props: [pe(i, /:(read-\w+)/, ":" + dc + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Ri(
                    [
                      ka(t, {
                        props: [pe(i, /:(plac\w+)/, ":" + fe + "input-$1")],
                      }),
                      ka(t, { props: [pe(i, /:(plac\w+)/, ":" + dc + "$1")] }),
                      ka(t, { props: [pe(i, /:(plac\w+)/, st + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  AT = [PT],
  RT = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var S = g.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || AT,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var S = g.getAttribute("data-emotion").split(" "), h = 1;
            h < S.length;
            h++
          )
            i[S[h]] = !0;
          s.push(g);
        }
      );
    var l,
      u = [ET, TT];
    {
      var c,
        d = [
          ST,
          wT(function (g) {
            c.insert(g);
          }),
        ],
        f = xT(u.concat(o, d)),
        p = function (S) {
          return Ri(yT(S), f);
        };
      l = function (S, h, m, y) {
        (c = m),
          p(S ? S + "{" + h.styles + "}" : h.styles),
          y && (v.inserted[h.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new oT({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return v.sheet.hydrate(s), v;
  };
function Io() {
  return (
    (Io = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Io.apply(null, arguments)
  );
}
var Yw = { exports: {} },
  ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ze = typeof Symbol == "function" && Symbol.for,
  av = Ze ? Symbol.for("react.element") : 60103,
  sv = Ze ? Symbol.for("react.portal") : 60106,
  Jc = Ze ? Symbol.for("react.fragment") : 60107,
  ed = Ze ? Symbol.for("react.strict_mode") : 60108,
  td = Ze ? Symbol.for("react.profiler") : 60114,
  nd = Ze ? Symbol.for("react.provider") : 60109,
  rd = Ze ? Symbol.for("react.context") : 60110,
  lv = Ze ? Symbol.for("react.async_mode") : 60111,
  od = Ze ? Symbol.for("react.concurrent_mode") : 60111,
  id = Ze ? Symbol.for("react.forward_ref") : 60112,
  ad = Ze ? Symbol.for("react.suspense") : 60113,
  OT = Ze ? Symbol.for("react.suspense_list") : 60120,
  sd = Ze ? Symbol.for("react.memo") : 60115,
  ld = Ze ? Symbol.for("react.lazy") : 60116,
  MT = Ze ? Symbol.for("react.block") : 60121,
  $T = Ze ? Symbol.for("react.fundamental") : 60117,
  DT = Ze ? Symbol.for("react.responder") : 60118,
  IT = Ze ? Symbol.for("react.scope") : 60119;
function qt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case av:
        switch (((e = e.type), e)) {
          case lv:
          case od:
          case Jc:
          case td:
          case ed:
          case ad:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case rd:
              case id:
              case ld:
              case sd:
              case nd:
                return e;
              default:
                return t;
            }
        }
      case sv:
        return t;
    }
  }
}
function Qw(e) {
  return qt(e) === od;
}
ge.AsyncMode = lv;
ge.ConcurrentMode = od;
ge.ContextConsumer = rd;
ge.ContextProvider = nd;
ge.Element = av;
ge.ForwardRef = id;
ge.Fragment = Jc;
ge.Lazy = ld;
ge.Memo = sd;
ge.Portal = sv;
ge.Profiler = td;
ge.StrictMode = ed;
ge.Suspense = ad;
ge.isAsyncMode = function (e) {
  return Qw(e) || qt(e) === lv;
};
ge.isConcurrentMode = Qw;
ge.isContextConsumer = function (e) {
  return qt(e) === rd;
};
ge.isContextProvider = function (e) {
  return qt(e) === nd;
};
ge.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === av;
};
ge.isForwardRef = function (e) {
  return qt(e) === id;
};
ge.isFragment = function (e) {
  return qt(e) === Jc;
};
ge.isLazy = function (e) {
  return qt(e) === ld;
};
ge.isMemo = function (e) {
  return qt(e) === sd;
};
ge.isPortal = function (e) {
  return qt(e) === sv;
};
ge.isProfiler = function (e) {
  return qt(e) === td;
};
ge.isStrictMode = function (e) {
  return qt(e) === ed;
};
ge.isSuspense = function (e) {
  return qt(e) === ad;
};
ge.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Jc ||
    e === od ||
    e === td ||
    e === ed ||
    e === ad ||
    e === OT ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ld ||
        e.$$typeof === sd ||
        e.$$typeof === nd ||
        e.$$typeof === rd ||
        e.$$typeof === id ||
        e.$$typeof === $T ||
        e.$$typeof === DT ||
        e.$$typeof === IT ||
        e.$$typeof === MT))
  );
};
ge.typeOf = qt;
Yw.exports = ge;
var zT = Yw.exports,
  Zw = zT,
  FT = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  LT = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Jw = {};
Jw[Zw.ForwardRef] = FT;
Jw[Zw.Memo] = LT;
var jT = !0;
function NT(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var e2 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || jT === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  t2 = function (t, n, r) {
    e2(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function BT(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var VT = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  WT = !1,
  UT = /[A-Z]|^ms/g,
  HT = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  n2 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  cy = function (t) {
    return t != null && typeof t != "boolean";
  },
  Sf = qw(function (e) {
    return n2(e) ? e : e.replace(UT, "-$&").toLowerCase();
  }),
  dy = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(HT, function (r, o, i) {
            return ($n = { name: o, styles: i, next: $n }), o;
          });
    }
    return VT[t] !== 1 && !n2(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  GT =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Os(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return ($n = { name: o.name, styles: o.styles, next: $n }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            ($n = { name: a.name, styles: a.styles, next: $n }), (a = a.next);
        var s = i.styles + ";";
        return s;
      }
      return KT(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = $n,
          u = n(e);
        return ($n = l), Os(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function KT(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Os(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : cy(s) && (r += Sf(i) + ":" + dy(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && WT) throw new Error(GT);
        if (
          Array.isArray(a) &&
          typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        )
          for (var l = 0; l < a.length; l++)
            cy(a[l]) && (r += Sf(i) + ":" + dy(i, a[l]) + ";");
        else {
          var u = Os(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Sf(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var fy = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  $n;
function uv(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    o = "";
  $n = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += Os(n, t, i));
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((o += Os(n, t, e[s])), r)) {
      var l = i;
      o += l[s];
    }
  fy.lastIndex = 0;
  for (var u = "", c; (c = fy.exec(o)) !== null; ) u += "-" + c[1];
  var d = BT(o) + u;
  return { name: d, styles: o, next: $n };
}
var qT = function (t) {
    return t();
  },
  r2 = Jg.useInsertionEffect ? Jg.useInsertionEffect : !1,
  XT = r2 || qT,
  py = r2 || b.useLayoutEffect,
  o2 = b.createContext(typeof HTMLElement < "u" ? RT({ key: "css" }) : null);
o2.Provider;
var i2 = function (t) {
    return b.forwardRef(function (n, r) {
      var o = b.useContext(o2);
      return t(n, o, r);
    });
  },
  Ms = b.createContext({}),
  YT = function (t, n) {
    if (typeof n == "function") {
      var r = n(t);
      return r;
    }
    return Io({}, t, n);
  },
  QT = ly(function (e) {
    return ly(function (t) {
      return YT(e, t);
    });
  }),
  ZT = function (t) {
    var n = b.useContext(Ms);
    return (
      t.theme !== n && (n = QT(n)(t.theme)),
      b.createElement(Ms.Provider, { value: n }, t.children)
    );
  },
  ud = i2(function (e, t) {
    var n = e.styles,
      r = uv([n], void 0, b.useContext(Ms)),
      o = b.useRef();
    return (
      py(
        function () {
          var i = t.key + "-global",
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      py(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && t2(t, r.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert("", r, a, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function JT() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return uv(t);
}
var cv = function () {
    var t = JT.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  a2 = String.raw,
  s2 = a2`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  eP = () => k.jsx(ud, { styles: s2 }),
  tP = ({ scope: e = "" }) =>
    k.jsx(ud, {
      styles: a2`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${s2}
    `,
    });
function nP(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function pt(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = b.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = b.useContext(s);
    if (!c && n) {
      const d = new Error(i ?? nP(r, o));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [rP, oP] = pt({ strict: !1, name: "PortalManagerContext" });
function l2(e) {
  const { children: t, zIndex: n } = e;
  return k.jsx(rP, { value: { zIndex: n }, children: t });
}
l2.displayName = "PortalManager";
var or =
    globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect,
  [u2, iP] = pt({ strict: !1, name: "PortalContext" }),
  dv = "chakra-portal",
  aP = ".chakra-portal",
  sP = (e) =>
    k.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  lP = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = b.useState(null),
      i = b.useRef(null),
      [, a] = b.useState({});
    b.useEffect(() => a({}), []);
    const s = iP(),
      l = oP();
    or(() => {
      if (!r) return;
      const c = r.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement("div")),
        (i.current.className = dv),
        d.appendChild(i.current),
        a({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? k.jsx(sP, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return i.current
      ? nv.createPortal(k.jsx(u2, { value: i.current, children: u }), i.current)
      : k.jsx("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  uP = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      a = b.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement("div");
        return l && (l.className = dv), l;
      }, [o]),
      [, s] = b.useState({});
    return (
      or(() => s({}), []),
      or(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a);
            }
          );
      }, [a, i]),
      i && a
        ? nv.createPortal(k.jsx(u2, { value: r ? a : null, children: t }), a)
        : null
    );
  };
function tl(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? k.jsx(uP, { containerRef: n, ...r }) : k.jsx(lP, { ...r });
}
tl.className = dv;
tl.selector = aP;
tl.displayName = "Portal";
function Qr() {
  const e = b.useContext(Ms);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var fv = b.createContext({});
fv.displayName = "ColorModeContext";
function cd() {
  const e = b.useContext(fv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Ul = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function cP(e = {}) {
  const { preventTransition: t = !0 } = e,
    n = {
      setDataset: (r) => {
        const o = t ? n.preventTransition() : void 0;
        (document.documentElement.dataset.theme = r),
          (document.documentElement.style.colorScheme = r),
          o == null || o();
      },
      setClassName(r) {
        document.body.classList.add(r ? Ul.dark : Ul.light),
          document.body.classList.remove(r ? Ul.light : Ul.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(r) {
        var o;
        return ((o = n.query().matches) != null ? o : r === "dark")
          ? "dark"
          : "light";
      },
      addListener(r) {
        const o = n.query(),
          i = (a) => {
            r(a.matches ? "dark" : "light");
          };
        return (
          typeof o.addListener == "function"
            ? o.addListener(i)
            : o.addEventListener("change", i),
          () => {
            typeof o.removeListener == "function"
              ? o.removeListener(i)
              : o.removeEventListener("change", i);
          }
        );
      },
      preventTransition() {
        const r = document.createElement("style");
        return (
          r.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(r),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(r);
                });
              });
          }
        );
      },
    };
  return n;
}
var dP = "chakra-ui-color-mode";
function fP(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {}
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var pP = fP(dP),
  hy = () => {};
function my(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function c2(e) {
  const {
      value: t,
      children: n,
      options: {
        useSystemColorMode: r,
        initialColorMode: o,
        disableTransitionOnChange: i,
      } = {},
      colorModeManager: a = pP,
    } = e,
    s = o === "dark" ? "dark" : "light",
    [l, u] = b.useState(() => my(a, s)),
    [c, d] = b.useState(() => my(a)),
    {
      getSystemTheme: f,
      setClassName: p,
      setDataset: v,
      addListener: g,
    } = b.useMemo(() => cP({ preventTransition: i }), [i]),
    S = o === "system" && !l ? c : l,
    h = b.useCallback(
      (w) => {
        const C = w === "system" ? f() : w;
        u(C), p(C === "dark"), v(C), a.set(C);
      },
      [a, f, p, v]
    );
  or(() => {
    o === "system" && d(f());
  }, []),
    b.useEffect(() => {
      const w = a.get();
      if (w) {
        h(w);
        return;
      }
      if (o === "system") {
        h("system");
        return;
      }
      h(s);
    }, [a, s, o, h]);
  const m = b.useCallback(() => {
    h(S === "dark" ? "light" : "dark");
  }, [S, h]);
  b.useEffect(() => {
    if (r) return g(h);
  }, [r, g, h]);
  const y = b.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? hy : m,
      setColorMode: t ? hy : h,
      forced: t !== void 0,
    }),
    [S, m, h, t]
  );
  return k.jsx(fv.Provider, { value: y, children: n });
}
c2.displayName = "ColorModeProvider";
var hP = new Set(["dark", "light", "system"]);
function mP(e) {
  let t = e;
  return hP.has(t) || (t = "light"), t;
}
function vP(e = {}) {
  const {
      initialColorMode: t = "light",
      type: n = "localStorage",
      storageKey: r = "chakra-ui-color-mode",
    } = e,
    o = mP(t),
    i = n === "cookie",
    a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `,
    s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function gP(e = {}) {
  const { nonce: t } = e;
  return k.jsx("script", {
    id: "chakra-script",
    nonce: t,
    dangerouslySetInnerHTML: { __html: vP(e) },
  });
}
function yP() {
  const e = cd(),
    t = Qr();
  return { ...e, theme: t };
}
function bP(e, t, n) {
  var r, o;
  if (t == null) return t;
  const i = (a) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null
      ? void 0
      : l[a];
  };
  return (o = (r = i(t)) != null ? r : i(n)) != null ? o : n;
}
function SP(e, t, n) {
  var r, o;
  if (t == null) return t;
  const i = (a) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[a]) == null
      ? void 0
      : l.value;
  };
  return (o = (r = i(t)) != null ? r : i(n)) != null ? o : n;
}
function xP(e, t, n) {
  const r = Qr();
  return d2(e, t, n)(r);
}
function d2(e, t, n) {
  const r = Array.isArray(t) ? t : [t],
    o = Array.isArray(n) ? n : [n];
  return (i) => {
    const a = o.filter(Boolean),
      s = r.map((l, u) => {
        var c, d;
        if (e === "breakpoints") return bP(i, l, (c = a[u]) != null ? c : l);
        const f = `${e}.${l}`;
        return SP(i, f, (d = a[u]) != null ? d : l);
      });
    return Array.isArray(t) ? s : s[0];
  };
}
var oe = (...e) => e.filter(Boolean).join(" ");
function At(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function er(e, ...t) {
  return wP(e) ? e(...t) : e;
}
var wP = (e) => typeof e == "function",
  re = (e) => (e ? "" : void 0),
  xf = (e) => (e ? !0 : void 0);
function Ne(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function kP(...e) {
  return function (n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var fc = { exports: {} };
fc.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    p = "[object Function]",
    v = "[object GeneratorFunction]",
    g = "[object Map]",
    S = "[object Number]",
    h = "[object Null]",
    m = "[object Object]",
    y = "[object Proxy]",
    w = "[object RegExp]",
    C = "[object Set]",
    P = "[object String]",
    _ = "[object Undefined]",
    A = "[object WeakMap]",
    $ = "[object ArrayBuffer]",
    M = "[object DataView]",
    L = "[object Float32Array]",
    Y = "[object Float64Array]",
    Q = "[object Int8Array]",
    ue = "[object Int16Array]",
    J = "[object Int32Array]",
    q = "[object Uint8Array]",
    I = "[object Uint8ClampedArray]",
    D = "[object Uint16Array]",
    j = "[object Uint32Array]",
    U = /[\\^$.*+?()[\]{}|]/g,
    ie = /^\[object .+?Constructor\]$/,
    te = /^(?:0|[1-9]\d*)$/,
    B = {};
  (B[L] = B[Y] = B[Q] = B[ue] = B[J] = B[q] = B[I] = B[D] = B[j] = !0),
    (B[s] =
      B[l] =
      B[$] =
      B[c] =
      B[M] =
      B[d] =
      B[f] =
      B[p] =
      B[g] =
      B[S] =
      B[m] =
      B[w] =
      B[C] =
      B[P] =
      B[A] =
        !1);
  var K = typeof _l == "object" && _l && _l.Object === Object && _l,
    Te = typeof self == "object" && self && self.Object === Object && self,
    xe = K || Te || Function("return this")(),
    Xe = t && !t.nodeType && t,
    Le = Xe && !0 && e && !e.nodeType && e,
    En = Le && Le.exports === Xe,
    Un = En && K.process,
    Tn = (function () {
      try {
        var x = Le && Le.require && Le.require("util").types;
        return x || (Un && Un.binding && Un.binding("util"));
      } catch {}
    })(),
    Hn = Tn && Tn.isTypedArray;
  function Sr(x, T, R) {
    switch (R.length) {
      case 0:
        return x.call(T);
      case 1:
        return x.call(T, R[0]);
      case 2:
        return x.call(T, R[0], R[1]);
      case 3:
        return x.call(T, R[0], R[1], R[2]);
    }
    return x.apply(T, R);
  }
  function Wo(x, T) {
    for (var R = -1, N = Array(x); ++R < x; ) N[R] = T(R);
    return N;
  }
  function ee(x) {
    return function (T) {
      return x(T);
    };
  }
  function be(x, T) {
    return x == null ? void 0 : x[T];
  }
  function Ie(x, T) {
    return function (R) {
      return x(T(R));
    };
  }
  var ht = Array.prototype,
    cn = Function.prototype,
    mt = Object.prototype,
    xr = xe["__core-js_shared__"],
    no = cn.toString,
    dn = mt.hasOwnProperty,
    Uo = (function () {
      var x = /[^.]+$/.exec((xr && xr.keys && xr.keys.IE_PROTO) || "");
      return x ? "Symbol(src)_1." + x : "";
    })(),
    da = mt.toString,
    yl = no.call(Object),
    bl = RegExp(
      "^" +
        no
          .call(dn)
          .replace(U, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    ro = En ? xe.Buffer : void 0,
    Dg = xe.Symbol,
    Ig = xe.Uint8Array;
  ro && ro.allocUnsafe;
  var zg = Ie(Object.getPrototypeOf, Object),
    Fg = Object.create,
    __ = mt.propertyIsEnumerable,
    E_ = ht.splice,
    oo = Dg ? Dg.toStringTag : void 0,
    Sl = (function () {
      try {
        var x = jd(Object, "defineProperty");
        return x({}, "", {}), x;
      } catch {}
    })(),
    T_ = ro ? ro.isBuffer : void 0,
    Lg = Math.max,
    P_ = Date.now,
    jg = jd(xe, "Map"),
    fa = jd(Object, "create"),
    A_ = (function () {
      function x() {}
      return function (T) {
        if (!ao(T)) return {};
        if (Fg) return Fg(T);
        x.prototype = T;
        var R = new x();
        return (x.prototype = void 0), R;
      };
    })();
  function io(x) {
    var T = -1,
      R = x == null ? 0 : x.length;
    for (this.clear(); ++T < R; ) {
      var N = x[T];
      this.set(N[0], N[1]);
    }
  }
  function R_() {
    (this.__data__ = fa ? fa(null) : {}), (this.size = 0);
  }
  function O_(x) {
    var T = this.has(x) && delete this.__data__[x];
    return (this.size -= T ? 1 : 0), T;
  }
  function M_(x) {
    var T = this.__data__;
    if (fa) {
      var R = T[x];
      return R === r ? void 0 : R;
    }
    return dn.call(T, x) ? T[x] : void 0;
  }
  function $_(x) {
    var T = this.__data__;
    return fa ? T[x] !== void 0 : dn.call(T, x);
  }
  function D_(x, T) {
    var R = this.__data__;
    return (
      (this.size += this.has(x) ? 0 : 1),
      (R[x] = fa && T === void 0 ? r : T),
      this
    );
  }
  (io.prototype.clear = R_),
    (io.prototype.delete = O_),
    (io.prototype.get = M_),
    (io.prototype.has = $_),
    (io.prototype.set = D_);
  function Gn(x) {
    var T = -1,
      R = x == null ? 0 : x.length;
    for (this.clear(); ++T < R; ) {
      var N = x[T];
      this.set(N[0], N[1]);
    }
  }
  function I_() {
    (this.__data__ = []), (this.size = 0);
  }
  function z_(x) {
    var T = this.__data__,
      R = xl(T, x);
    if (R < 0) return !1;
    var N = T.length - 1;
    return R == N ? T.pop() : E_.call(T, R, 1), --this.size, !0;
  }
  function F_(x) {
    var T = this.__data__,
      R = xl(T, x);
    return R < 0 ? void 0 : T[R][1];
  }
  function L_(x) {
    return xl(this.__data__, x) > -1;
  }
  function j_(x, T) {
    var R = this.__data__,
      N = xl(R, x);
    return N < 0 ? (++this.size, R.push([x, T])) : (R[N][1] = T), this;
  }
  (Gn.prototype.clear = I_),
    (Gn.prototype.delete = z_),
    (Gn.prototype.get = F_),
    (Gn.prototype.has = L_),
    (Gn.prototype.set = j_);
  function Ho(x) {
    var T = -1,
      R = x == null ? 0 : x.length;
    for (this.clear(); ++T < R; ) {
      var N = x[T];
      this.set(N[0], N[1]);
    }
  }
  function N_() {
    (this.size = 0),
      (this.__data__ = {
        hash: new io(),
        map: new (jg || Gn)(),
        string: new io(),
      });
  }
  function B_(x) {
    var T = kl(this, x).delete(x);
    return (this.size -= T ? 1 : 0), T;
  }
  function V_(x) {
    return kl(this, x).get(x);
  }
  function W_(x) {
    return kl(this, x).has(x);
  }
  function U_(x, T) {
    var R = kl(this, x),
      N = R.size;
    return R.set(x, T), (this.size += R.size == N ? 0 : 1), this;
  }
  (Ho.prototype.clear = N_),
    (Ho.prototype.delete = B_),
    (Ho.prototype.get = V_),
    (Ho.prototype.has = W_),
    (Ho.prototype.set = U_);
  function Go(x) {
    var T = (this.__data__ = new Gn(x));
    this.size = T.size;
  }
  function H_() {
    (this.__data__ = new Gn()), (this.size = 0);
  }
  function G_(x) {
    var T = this.__data__,
      R = T.delete(x);
    return (this.size = T.size), R;
  }
  function K_(x) {
    return this.__data__.get(x);
  }
  function q_(x) {
    return this.__data__.has(x);
  }
  function X_(x, T) {
    var R = this.__data__;
    if (R instanceof Gn) {
      var N = R.__data__;
      if (!jg || N.length < n - 1)
        return N.push([x, T]), (this.size = ++R.size), this;
      R = this.__data__ = new Ho(N);
    }
    return R.set(x, T), (this.size = R.size), this;
  }
  (Go.prototype.clear = H_),
    (Go.prototype.delete = G_),
    (Go.prototype.get = K_),
    (Go.prototype.has = q_),
    (Go.prototype.set = X_);
  function Y_(x, T) {
    var R = Vd(x),
      N = !R && Bd(x),
      se = !R && !N && Ug(x),
      Se = !R && !N && !se && Gg(x),
      Pe = R || N || se || Se,
      ce = Pe ? Wo(x.length, String) : [],
      Ae = ce.length;
    for (var fn in x)
      (Pe &&
        (fn == "length" ||
          (se && (fn == "offset" || fn == "parent")) ||
          (Se &&
            (fn == "buffer" || fn == "byteLength" || fn == "byteOffset")) ||
          Vg(fn, Ae))) ||
        ce.push(fn);
    return ce;
  }
  function Fd(x, T, R) {
    ((R !== void 0 && !Cl(x[T], R)) || (R === void 0 && !(T in x))) &&
      Ld(x, T, R);
  }
  function Q_(x, T, R) {
    var N = x[T];
    (!(dn.call(x, T) && Cl(N, R)) || (R === void 0 && !(T in x))) &&
      Ld(x, T, R);
  }
  function xl(x, T) {
    for (var R = x.length; R--; ) if (Cl(x[R][0], T)) return R;
    return -1;
  }
  function Ld(x, T, R) {
    T == "__proto__" && Sl
      ? Sl(x, T, { configurable: !0, enumerable: !0, value: R, writable: !0 })
      : (x[T] = R);
  }
  var Z_ = dE();
  function wl(x) {
    return x == null
      ? x === void 0
        ? _
        : h
      : oo && oo in Object(x)
      ? fE(x)
      : yE(x);
  }
  function Ng(x) {
    return pa(x) && wl(x) == s;
  }
  function J_(x) {
    if (!ao(x) || vE(x)) return !1;
    var T = Ud(x) ? bl : ie;
    return T.test(wE(x));
  }
  function eE(x) {
    return pa(x) && Hg(x.length) && !!B[wl(x)];
  }
  function tE(x) {
    if (!ao(x)) return gE(x);
    var T = Wg(x),
      R = [];
    for (var N in x) (N == "constructor" && (T || !dn.call(x, N))) || R.push(N);
    return R;
  }
  function Bg(x, T, R, N, se) {
    x !== T &&
      Z_(
        T,
        function (Se, Pe) {
          if ((se || (se = new Go()), ao(Se))) nE(x, T, Pe, R, Bg, N, se);
          else {
            var ce = N ? N(Nd(x, Pe), Se, Pe + "", x, T, se) : void 0;
            ce === void 0 && (ce = Se), Fd(x, Pe, ce);
          }
        },
        Kg
      );
  }
  function nE(x, T, R, N, se, Se, Pe) {
    var ce = Nd(x, R),
      Ae = Nd(T, R),
      fn = Pe.get(Ae);
    if (fn) {
      Fd(x, R, fn);
      return;
    }
    var It = Se ? Se(ce, Ae, R + "", x, T, Pe) : void 0,
      ha = It === void 0;
    if (ha) {
      var Hd = Vd(Ae),
        Gd = !Hd && Ug(Ae),
        Xg = !Hd && !Gd && Gg(Ae);
      (It = Ae),
        Hd || Gd || Xg
          ? Vd(ce)
            ? (It = ce)
            : kE(ce)
            ? (It = lE(ce))
            : Gd
            ? ((ha = !1), (It = iE(Ae)))
            : Xg
            ? ((ha = !1), (It = sE(Ae)))
            : (It = [])
          : CE(Ae) || Bd(Ae)
          ? ((It = ce),
            Bd(ce) ? (It = _E(ce)) : (!ao(ce) || Ud(ce)) && (It = pE(Ae)))
          : (ha = !1);
    }
    ha && (Pe.set(Ae, It), se(It, Ae, N, Se, Pe), Pe.delete(Ae)), Fd(x, R, It);
  }
  function rE(x, T) {
    return SE(bE(x, T, qg), x + "");
  }
  var oE = Sl
    ? function (x, T) {
        return Sl(x, "toString", {
          configurable: !0,
          enumerable: !1,
          value: TE(T),
          writable: !0,
        });
      }
    : qg;
  function iE(x, T) {
    return x.slice();
  }
  function aE(x) {
    var T = new x.constructor(x.byteLength);
    return new Ig(T).set(new Ig(x)), T;
  }
  function sE(x, T) {
    var R = aE(x.buffer);
    return new x.constructor(R, x.byteOffset, x.length);
  }
  function lE(x, T) {
    var R = -1,
      N = x.length;
    for (T || (T = Array(N)); ++R < N; ) T[R] = x[R];
    return T;
  }
  function uE(x, T, R, N) {
    var se = !R;
    R || (R = {});
    for (var Se = -1, Pe = T.length; ++Se < Pe; ) {
      var ce = T[Se],
        Ae = void 0;
      Ae === void 0 && (Ae = x[ce]), se ? Ld(R, ce, Ae) : Q_(R, ce, Ae);
    }
    return R;
  }
  function cE(x) {
    return rE(function (T, R) {
      var N = -1,
        se = R.length,
        Se = se > 1 ? R[se - 1] : void 0,
        Pe = se > 2 ? R[2] : void 0;
      for (
        Se = x.length > 3 && typeof Se == "function" ? (se--, Se) : void 0,
          Pe && hE(R[0], R[1], Pe) && ((Se = se < 3 ? void 0 : Se), (se = 1)),
          T = Object(T);
        ++N < se;

      ) {
        var ce = R[N];
        ce && x(T, ce, N, Se);
      }
      return T;
    });
  }
  function dE(x) {
    return function (T, R, N) {
      for (var se = -1, Se = Object(T), Pe = N(T), ce = Pe.length; ce--; ) {
        var Ae = Pe[++se];
        if (R(Se[Ae], Ae, Se) === !1) break;
      }
      return T;
    };
  }
  function kl(x, T) {
    var R = x.__data__;
    return mE(T) ? R[typeof T == "string" ? "string" : "hash"] : R.map;
  }
  function jd(x, T) {
    var R = be(x, T);
    return J_(R) ? R : void 0;
  }
  function fE(x) {
    var T = dn.call(x, oo),
      R = x[oo];
    try {
      x[oo] = void 0;
      var N = !0;
    } catch {}
    var se = da.call(x);
    return N && (T ? (x[oo] = R) : delete x[oo]), se;
  }
  function pE(x) {
    return typeof x.constructor == "function" && !Wg(x) ? A_(zg(x)) : {};
  }
  function Vg(x, T) {
    var R = typeof x;
    return (
      (T = T ?? a),
      !!T &&
        (R == "number" || (R != "symbol" && te.test(x))) &&
        x > -1 &&
        x % 1 == 0 &&
        x < T
    );
  }
  function hE(x, T, R) {
    if (!ao(R)) return !1;
    var N = typeof T;
    return (N == "number" ? Wd(R) && Vg(T, R.length) : N == "string" && T in R)
      ? Cl(R[T], x)
      : !1;
  }
  function mE(x) {
    var T = typeof x;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean"
      ? x !== "__proto__"
      : x === null;
  }
  function vE(x) {
    return !!Uo && Uo in x;
  }
  function Wg(x) {
    var T = x && x.constructor,
      R = (typeof T == "function" && T.prototype) || mt;
    return x === R;
  }
  function gE(x) {
    var T = [];
    if (x != null) for (var R in Object(x)) T.push(R);
    return T;
  }
  function yE(x) {
    return da.call(x);
  }
  function bE(x, T, R) {
    return (
      (T = Lg(T === void 0 ? x.length - 1 : T, 0)),
      function () {
        for (
          var N = arguments, se = -1, Se = Lg(N.length - T, 0), Pe = Array(Se);
          ++se < Se;

        )
          Pe[se] = N[T + se];
        se = -1;
        for (var ce = Array(T + 1); ++se < T; ) ce[se] = N[se];
        return (ce[T] = R(Pe)), Sr(x, this, ce);
      }
    );
  }
  function Nd(x, T) {
    if (!(T === "constructor" && typeof x[T] == "function") && T != "__proto__")
      return x[T];
  }
  var SE = xE(oE);
  function xE(x) {
    var T = 0,
      R = 0;
    return function () {
      var N = P_(),
        se = i - (N - R);
      if (((R = N), se > 0)) {
        if (++T >= o) return arguments[0];
      } else T = 0;
      return x.apply(void 0, arguments);
    };
  }
  function wE(x) {
    if (x != null) {
      try {
        return no.call(x);
      } catch {}
      try {
        return x + "";
      } catch {}
    }
    return "";
  }
  function Cl(x, T) {
    return x === T || (x !== x && T !== T);
  }
  var Bd = Ng(
      (function () {
        return arguments;
      })()
    )
      ? Ng
      : function (x) {
          return pa(x) && dn.call(x, "callee") && !__.call(x, "callee");
        },
    Vd = Array.isArray;
  function Wd(x) {
    return x != null && Hg(x.length) && !Ud(x);
  }
  function kE(x) {
    return pa(x) && Wd(x);
  }
  var Ug = T_ || PE;
  function Ud(x) {
    if (!ao(x)) return !1;
    var T = wl(x);
    return T == p || T == v || T == u || T == y;
  }
  function Hg(x) {
    return typeof x == "number" && x > -1 && x % 1 == 0 && x <= a;
  }
  function ao(x) {
    var T = typeof x;
    return x != null && (T == "object" || T == "function");
  }
  function pa(x) {
    return x != null && typeof x == "object";
  }
  function CE(x) {
    if (!pa(x) || wl(x) != m) return !1;
    var T = zg(x);
    if (T === null) return !0;
    var R = dn.call(T, "constructor") && T.constructor;
    return typeof R == "function" && R instanceof R && no.call(R) == yl;
  }
  var Gg = Hn ? ee(Hn) : eE;
  function _E(x) {
    return uE(x, Kg(x));
  }
  function Kg(x) {
    return Wd(x) ? Y_(x) : tE(x);
  }
  var EE = cE(function (x, T, R, N) {
    Bg(x, T, R, N);
  });
  function TE(x) {
    return function () {
      return x;
    };
  }
  function qg(x) {
    return x;
  }
  function PE() {
    return !1;
  }
  e.exports = EE;
})(fc, fc.exports);
var CP = fc.exports;
const nn = sm(CP);
var _P = (e) => /!(important)?$/.test(e),
  vy = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  EP = (e, t) => (n) => {
    const r = String(t),
      o = _P(r),
      i = vy(r),
      a = e ? `${e}.${i}` : i;
    let s = At(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
    return (s = vy(s)), o ? `${s} !important` : s;
  };
function pv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = EP(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var Hl =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function Xt(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = pv({ scale: e, transform: t })), r;
  };
}
var TP =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function PP(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: TP(t),
    transform: n ? pv({ scale: n, compose: r }) : r,
  };
}
var f2 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function AP() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...f2,
  ].join(" ");
}
function RP() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...f2,
  ].join(" ");
}
var OP = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  MP = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function $P(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var DP = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  sh = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  IP = new Set(Object.values(sh)),
  lh = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  zP = (e) => e.trim();
function FP(e, t) {
  if (e == null || lh.has(e)) return e;
  if (!(uh(e) || lh.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2];
  if (!i || !a) return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = a.split(",").map(zP).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in sh ? sh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (IP.has(f)) return f;
    const p = f.indexOf(" "),
      [v, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f],
      S = uh(g) ? g : g && g.split(" "),
      h = `colors.${v}`,
      m = h in t.__cssMap ? t.__cssMap[h].varRef : v;
    return S ? [m, ...(Array.isArray(S) ? S : [S])].join(" ") : m;
  });
  return `${s}(${d.join(", ")})`;
}
var uh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  LP = (e, t) => FP(e, t ?? {});
function jP(e) {
  return /^var\(--.+\)$/.test(e);
}
var NP = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  An = (e) => (t) => `${e}(${t})`,
  ae = {
    filter(e) {
      return e !== "auto" ? e : OP;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : MP;
    },
    ring(e) {
      return $P(ae.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? AP() : e === "auto-gpu" ? RP() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = NP(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (jP(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: LP,
    blur: An("blur"),
    opacity: An("opacity"),
    brightness: An("brightness"),
    contrast: An("contrast"),
    dropShadow: An("drop-shadow"),
    grayscale: An("grayscale"),
    hueRotate: (e) => An("hue-rotate")(ae.degree(e)),
    invert: An("invert"),
    saturate: An("saturate"),
    sepia: An("sepia"),
    bgImage(e) {
      return e == null || uh(e) || lh.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = DP[e]) != null ? t : {},
        o = { flexDirection: e };
      return n && (o[n] = 1), r && (o[r] = 1), o;
    },
  },
  E = {
    borderWidths: Xt("borderWidths"),
    borderStyles: Xt("borderStyles"),
    colors: Xt("colors"),
    borders: Xt("borders"),
    gradients: Xt("gradients", ae.gradient),
    radii: Xt("radii", ae.px),
    space: Xt("space", Hl(ae.vh, ae.px)),
    spaceT: Xt("space", Hl(ae.vh, ae.px)),
    degreeT(e) {
      return { property: e, transform: ae.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: pv({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Xt("sizes", Hl(ae.vh, ae.px)),
    sizesT: Xt("sizes", Hl(ae.vh, ae.fraction)),
    shadows: Xt("shadows"),
    logical: PP,
    blur: Xt("blur", ae.blur),
  },
  wu = {
    background: E.colors("background"),
    backgroundColor: E.colors("backgroundColor"),
    backgroundImage: E.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: ae.bgClip },
    bgSize: E.prop("backgroundSize"),
    bgPosition: E.prop("backgroundPosition"),
    bg: E.colors("background"),
    bgColor: E.colors("backgroundColor"),
    bgPos: E.prop("backgroundPosition"),
    bgRepeat: E.prop("backgroundRepeat"),
    bgAttachment: E.prop("backgroundAttachment"),
    bgGradient: E.gradients("backgroundImage"),
    bgClip: { transform: ae.bgClip },
  };
Object.assign(wu, { bgImage: wu.backgroundImage, bgImg: wu.backgroundImage });
var de = {
  border: E.borders("border"),
  borderWidth: E.borderWidths("borderWidth"),
  borderStyle: E.borderStyles("borderStyle"),
  borderColor: E.colors("borderColor"),
  borderRadius: E.radii("borderRadius"),
  borderTop: E.borders("borderTop"),
  borderBlockStart: E.borders("borderBlockStart"),
  borderTopLeftRadius: E.radii("borderTopLeftRadius"),
  borderStartStartRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: E.radii("borderTopRightRadius"),
  borderStartEndRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: E.borders("borderRight"),
  borderInlineEnd: E.borders("borderInlineEnd"),
  borderBottom: E.borders("borderBottom"),
  borderBlockEnd: E.borders("borderBlockEnd"),
  borderBottomLeftRadius: E.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: E.radii("borderBottomRightRadius"),
  borderLeft: E.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: E.borders(["borderLeft", "borderRight"]),
  borderInline: E.borders("borderInline"),
  borderY: E.borders(["borderTop", "borderBottom"]),
  borderBlock: E.borders("borderBlock"),
  borderTopWidth: E.borderWidths("borderTopWidth"),
  borderBlockStartWidth: E.borderWidths("borderBlockStartWidth"),
  borderTopColor: E.colors("borderTopColor"),
  borderBlockStartColor: E.colors("borderBlockStartColor"),
  borderTopStyle: E.borderStyles("borderTopStyle"),
  borderBlockStartStyle: E.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: E.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: E.borderWidths("borderBlockEndWidth"),
  borderBottomColor: E.colors("borderBottomColor"),
  borderBlockEndColor: E.colors("borderBlockEndColor"),
  borderBottomStyle: E.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: E.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: E.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: E.borderWidths("borderInlineStartWidth"),
  borderLeftColor: E.colors("borderLeftColor"),
  borderInlineStartColor: E.colors("borderInlineStartColor"),
  borderLeftStyle: E.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: E.borderStyles("borderInlineStartStyle"),
  borderRightWidth: E.borderWidths("borderRightWidth"),
  borderInlineEndWidth: E.borderWidths("borderInlineEndWidth"),
  borderRightColor: E.colors("borderRightColor"),
  borderInlineEndColor: E.colors("borderInlineEndColor"),
  borderRightStyle: E.borderStyles("borderRightStyle"),
  borderInlineEndStyle: E.borderStyles("borderInlineEndStyle"),
  borderTopRadius: E.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: E.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: E.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: E.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(de, {
  rounded: de.borderRadius,
  roundedTop: de.borderTopRadius,
  roundedTopLeft: de.borderTopLeftRadius,
  roundedTopRight: de.borderTopRightRadius,
  roundedTopStart: de.borderStartStartRadius,
  roundedTopEnd: de.borderStartEndRadius,
  roundedBottom: de.borderBottomRadius,
  roundedBottomLeft: de.borderBottomLeftRadius,
  roundedBottomRight: de.borderBottomRightRadius,
  roundedBottomStart: de.borderEndStartRadius,
  roundedBottomEnd: de.borderEndEndRadius,
  roundedLeft: de.borderLeftRadius,
  roundedRight: de.borderRightRadius,
  roundedStart: de.borderInlineStartRadius,
  roundedEnd: de.borderInlineEndRadius,
  borderStart: de.borderInlineStart,
  borderEnd: de.borderInlineEnd,
  borderTopStartRadius: de.borderStartStartRadius,
  borderTopEndRadius: de.borderStartEndRadius,
  borderBottomStartRadius: de.borderEndStartRadius,
  borderBottomEndRadius: de.borderEndEndRadius,
  borderStartRadius: de.borderInlineStartRadius,
  borderEndRadius: de.borderInlineEndRadius,
  borderStartWidth: de.borderInlineStartWidth,
  borderEndWidth: de.borderInlineEndWidth,
  borderStartColor: de.borderInlineStartColor,
  borderEndColor: de.borderInlineEndColor,
  borderStartStyle: de.borderInlineStartStyle,
  borderEndStyle: de.borderInlineEndStyle,
});
var BP = {
    color: E.colors("color"),
    textColor: E.colors("color"),
    fill: E.colors("fill"),
    stroke: E.colors("stroke"),
  },
  ch = {
    boxShadow: E.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: E.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: E.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(ch, { shadow: ch.boxShadow });
var VP = {
    filter: { transform: ae.filter },
    blur: E.blur("--chakra-blur"),
    brightness: E.propT("--chakra-brightness", ae.brightness),
    contrast: E.propT("--chakra-contrast", ae.contrast),
    hueRotate: E.propT("--chakra-hue-rotate", ae.hueRotate),
    invert: E.propT("--chakra-invert", ae.invert),
    saturate: E.propT("--chakra-saturate", ae.saturate),
    dropShadow: E.propT("--chakra-drop-shadow", ae.dropShadow),
    backdropFilter: { transform: ae.backdropFilter },
    backdropBlur: E.blur("--chakra-backdrop-blur"),
    backdropBrightness: E.propT("--chakra-backdrop-brightness", ae.brightness),
    backdropContrast: E.propT("--chakra-backdrop-contrast", ae.contrast),
    backdropHueRotate: E.propT("--chakra-backdrop-hue-rotate", ae.hueRotate),
    backdropInvert: E.propT("--chakra-backdrop-invert", ae.invert),
    backdropSaturate: E.propT("--chakra-backdrop-saturate", ae.saturate),
  },
  pc = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: ae.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: E.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: E.space("gap"),
    rowGap: E.space("rowGap"),
    columnGap: E.space("columnGap"),
  };
Object.assign(pc, { flexDir: pc.flexDirection });
var p2 = {
    gridGap: E.space("gridGap"),
    gridColumnGap: E.space("gridColumnGap"),
    gridRowGap: E.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  WP = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: ae.outline },
    outlineOffset: !0,
    outlineColor: E.colors("outlineColor"),
  },
  Qt = {
    width: E.sizesT("width"),
    inlineSize: E.sizesT("inlineSize"),
    height: E.sizes("height"),
    blockSize: E.sizes("blockSize"),
    boxSize: E.sizes(["width", "height"]),
    minWidth: E.sizes("minWidth"),
    minInlineSize: E.sizes("minInlineSize"),
    minHeight: E.sizes("minHeight"),
    minBlockSize: E.sizes("minBlockSize"),
    maxWidth: E.sizes("maxWidth"),
    maxInlineSize: E.sizes("maxInlineSize"),
    maxHeight: E.sizes("maxHeight"),
    maxBlockSize: E.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: E.propT("float", ae.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Qt, {
  w: Qt.width,
  h: Qt.height,
  minW: Qt.minWidth,
  maxW: Qt.maxWidth,
  minH: Qt.minHeight,
  maxH: Qt.maxHeight,
  overscroll: Qt.overscrollBehavior,
  overscrollX: Qt.overscrollBehaviorX,
  overscrollY: Qt.overscrollBehaviorY,
});
var UP = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage"),
};
function HP(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var GP = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  KP = GP(HP),
  qP = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  XP = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  wf = (e, t, n) => {
    const r = {},
      o = KP(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  YP = {
    srOnly: {
      transform(e) {
        return e === !0 ? qP : e === "focusable" ? XP : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => wf(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => wf(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => wf(t, e, n) },
  },
  Ja = {
    position: !0,
    pos: E.prop("position"),
    zIndex: E.prop("zIndex", "zIndices"),
    inset: E.spaceT("inset"),
    insetX: E.spaceT(["left", "right"]),
    insetInline: E.spaceT("insetInline"),
    insetY: E.spaceT(["top", "bottom"]),
    insetBlock: E.spaceT("insetBlock"),
    top: E.spaceT("top"),
    insetBlockStart: E.spaceT("insetBlockStart"),
    bottom: E.spaceT("bottom"),
    insetBlockEnd: E.spaceT("insetBlockEnd"),
    left: E.spaceT("left"),
    insetInlineStart: E.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: E.spaceT("right"),
    insetInlineEnd: E.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Ja, {
  insetStart: Ja.insetInlineStart,
  insetEnd: Ja.insetInlineEnd,
});
var QP = {
    ring: { transform: ae.ring },
    ringColor: E.colors("--chakra-ring-color"),
    ringOffset: E.prop("--chakra-ring-offset-width"),
    ringOffsetColor: E.colors("--chakra-ring-offset-color"),
    ringInset: E.prop("--chakra-ring-inset"),
  },
  _e = {
    margin: E.spaceT("margin"),
    marginTop: E.spaceT("marginTop"),
    marginBlockStart: E.spaceT("marginBlockStart"),
    marginRight: E.spaceT("marginRight"),
    marginInlineEnd: E.spaceT("marginInlineEnd"),
    marginBottom: E.spaceT("marginBottom"),
    marginBlockEnd: E.spaceT("marginBlockEnd"),
    marginLeft: E.spaceT("marginLeft"),
    marginInlineStart: E.spaceT("marginInlineStart"),
    marginX: E.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: E.spaceT("marginInline"),
    marginY: E.spaceT(["marginTop", "marginBottom"]),
    marginBlock: E.spaceT("marginBlock"),
    padding: E.space("padding"),
    paddingTop: E.space("paddingTop"),
    paddingBlockStart: E.space("paddingBlockStart"),
    paddingRight: E.space("paddingRight"),
    paddingBottom: E.space("paddingBottom"),
    paddingBlockEnd: E.space("paddingBlockEnd"),
    paddingLeft: E.space("paddingLeft"),
    paddingInlineStart: E.space("paddingInlineStart"),
    paddingInlineEnd: E.space("paddingInlineEnd"),
    paddingX: E.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: E.space("paddingInline"),
    paddingY: E.space(["paddingTop", "paddingBottom"]),
    paddingBlock: E.space("paddingBlock"),
  };
Object.assign(_e, {
  m: _e.margin,
  mt: _e.marginTop,
  mr: _e.marginRight,
  me: _e.marginInlineEnd,
  marginEnd: _e.marginInlineEnd,
  mb: _e.marginBottom,
  ml: _e.marginLeft,
  ms: _e.marginInlineStart,
  marginStart: _e.marginInlineStart,
  mx: _e.marginX,
  my: _e.marginY,
  p: _e.padding,
  pt: _e.paddingTop,
  py: _e.paddingY,
  px: _e.paddingX,
  pb: _e.paddingBottom,
  pl: _e.paddingLeft,
  ps: _e.paddingInlineStart,
  paddingStart: _e.paddingInlineStart,
  pr: _e.paddingRight,
  pe: _e.paddingInlineEnd,
  paddingEnd: _e.paddingInlineEnd,
});
var ZP = {
    textDecorationColor: E.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: E.shadows("textShadow"),
  },
  JP = {
    clipPath: !0,
    transform: E.propT("transform", ae.transform),
    transformOrigin: !0,
    translateX: E.spaceT("--chakra-translate-x"),
    translateY: E.spaceT("--chakra-translate-y"),
    skewX: E.degreeT("--chakra-skew-x"),
    skewY: E.degreeT("--chakra-skew-y"),
    scaleX: E.prop("--chakra-scale-x"),
    scaleY: E.prop("--chakra-scale-y"),
    scale: E.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: E.degreeT("--chakra-rotate"),
  },
  eA = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: E.prop("transitionDuration", "transition.duration"),
    transitionProperty: E.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: E.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  tA = {
    fontFamily: E.prop("fontFamily", "fonts"),
    fontSize: E.prop("fontSize", "fontSizes", ae.px),
    fontWeight: E.prop("fontWeight", "fontWeights"),
    lineHeight: E.prop("lineHeight", "lineHeights"),
    letterSpacing: E.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  nA = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: E.spaceT("scrollMargin"),
    scrollMarginTop: E.spaceT("scrollMarginTop"),
    scrollMarginBottom: E.spaceT("scrollMarginBottom"),
    scrollMarginLeft: E.spaceT("scrollMarginLeft"),
    scrollMarginRight: E.spaceT("scrollMarginRight"),
    scrollMarginX: E.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: E.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: E.spaceT("scrollPadding"),
    scrollPaddingTop: E.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: E.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: E.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: E.spaceT("scrollPaddingRight"),
    scrollPaddingX: E.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: E.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function h2(e) {
  return At(e) && e.reference ? e.reference : String(e);
}
var dd = (e, ...t) => t.map(h2).join(` ${e} `).replace(/calc/g, ""),
  gy = (...e) => `calc(${dd("+", ...e)})`,
  yy = (...e) => `calc(${dd("-", ...e)})`,
  dh = (...e) => `calc(${dd("*", ...e)})`,
  by = (...e) => `calc(${dd("/", ...e)})`,
  Sy = (e) => {
    const t = h2(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : dh(t, -1);
  },
  po = Object.assign(
    (e) => ({
      add: (...t) => po(gy(e, ...t)),
      subtract: (...t) => po(yy(e, ...t)),
      multiply: (...t) => po(dh(e, ...t)),
      divide: (...t) => po(by(e, ...t)),
      negate: () => po(Sy(e)),
      toString: () => e.toString(),
    }),
    { add: gy, subtract: yy, multiply: dh, divide: by, negate: Sy }
  );
function rA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function oA(e) {
  const t = rA(e.toString());
  return aA(iA(t));
}
function iA(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function aA(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function sA(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function lA(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function uA(e, t = "") {
  return oA(`--${sA(e, t)}`);
}
function W(e, t, n) {
  const r = uA(e, n);
  return { variable: r, reference: lA(r, t) };
}
function cA(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = W(`${e}-${o}`, i);
      continue;
    }
    n[r] = W(`${e}-${r}`);
  }
  return n;
}
function dA(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function fA(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function fh(e) {
  if (e == null) return e;
  const { unitless: t } = fA(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var m2 = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  hv = (e) => Object.fromEntries(Object.entries(e).sort(m2));
function xy(e) {
  const t = hv(e);
  return Object.assign(Object.values(t), t);
}
function pA(e) {
  const t = Object.keys(hv(e));
  return new Set(t);
}
function wy(e) {
  var t;
  if (!e) return e;
  e = (t = fh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number"
    ? `${e + n}`
    : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function za(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${fh(e)})`),
    t && n.push("and", `(max-width: ${fh(t)})`),
    n.join(" ")
  );
}
function hA(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = xy(e),
    r = Object.entries(e)
      .sort(m2)
      .map(([a, s], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? wy(d) : void 0),
          {
            _minW: wy(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: za(null, d),
            minWQuery: za(s),
            minMaxQuery: za(s, d),
          }
        );
      }),
    o = pA(e),
    i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: hv(e),
    asArray: xy(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [null, ...n.map((a) => za(a)).slice(1)],
    toArrayValue(a) {
      if (!At(a)) throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; dA(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    },
  };
}
var Je = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  kr = (e) => v2((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  Kn = (e) => v2((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  v2 = (e, ...t) => t.map(e).join(", "),
  fd = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: kr(Je.hover),
    _peerHover: Kn(Je.hover),
    _groupFocus: kr(Je.focus),
    _peerFocus: Kn(Je.focus),
    _groupFocusVisible: kr(Je.focusVisible),
    _peerFocusVisible: Kn(Je.focusVisible),
    _groupActive: kr(Je.active),
    _peerActive: Kn(Je.active),
    _groupDisabled: kr(Je.disabled),
    _peerDisabled: Kn(Je.disabled),
    _groupInvalid: kr(Je.invalid),
    _peerInvalid: Kn(Je.invalid),
    _groupChecked: kr(Je.checked),
    _peerChecked: Kn(Je.checked),
    _groupFocusWithin: kr(Je.focusWithin),
    _peerFocusWithin: Kn(Je.focusWithin),
    _peerPlaceholderShown: Kn(Je.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  g2 = Object.keys(fd);
function ky(e, t) {
  return W(String(e).replace(/\./g, "-"), void 0, t);
}
function mA(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = ky(
        o,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."),
          [p, ...v] = f,
          g = `${p}.-${v.join(".")}`,
          S = po.negate(s),
          h = po.negate(u);
        r[g] = { value: S, var: l, varRef: h };
      }
      (n[l] = s), (r[o] = { value: s, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const v = [String(o).split(".")[0], f].join(".");
        if (!e[v]) return f;
        const { reference: S } = ky(v, t == null ? void 0 : t.cssVarPrefix);
        return S;
      },
      d = At(s) ? s : { default: s };
    (n = nn(
      n,
      Object.entries(d).reduce((f, [p, v]) => {
        var g, S;
        if (!v) return f;
        const h = c(`${v}`);
        if (p === "default") return (f[l] = h), f;
        const m = (S = (g = fd) == null ? void 0 : g[p]) != null ? S : p;
        return (f[m] = { [l]: h }), f;
      }, {})
    )),
      (r[o] = { value: u, var: l, varRef: u });
  }
  return { cssVars: n, cssMap: r };
}
function vA(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function gA(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function yA(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Cy(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (yA(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c,
          p = [...s, f];
        if (r != null && r(a, p)) return t(a, s);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var bA = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function SA(e) {
  return gA(e, bA);
}
function xA(e) {
  return e.semanticTokens;
}
function wA(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var kA = (e) => g2.includes(e) || e === "default";
function CA({ tokens: e, semanticTokens: t }) {
  const n = {};
  return (
    Cy(e, (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
    }),
    Cy(
      t,
      (r, o) => {
        r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
      },
      { stop: (r) => Object.keys(r).every(kA) }
    ),
    n
  );
}
function _A(e) {
  var t;
  const n = wA(e),
    r = SA(n),
    o = xA(n),
    i = CA({ tokens: r, semanticTokens: o }),
    a = (t = n.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = mA(i, { cssVarPrefix: a });
  return (
    Object.assign(n, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: hA(n.breakpoints),
    }),
    n
  );
}
var mv = nn(
  {},
  wu,
  de,
  BP,
  pc,
  Qt,
  VP,
  QP,
  WP,
  p2,
  YP,
  Ja,
  ch,
  _e,
  nA,
  tA,
  ZP,
  JP,
  UP,
  eA
);
Object.assign({}, _e, Qt, pc, p2, Ja);
var EA = [...Object.keys(mv), ...g2],
  TA = { ...mv, ...fd },
  PA = (e) => e in TA,
  AA = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const a in e) {
      let s = er(e[a], t);
      if (s == null) continue;
      if (((s = At(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
        i[a] = s;
        continue;
      }
      const l = s.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[a] = s[u];
          continue;
        }
        (i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
      }
    }
    return i;
  };
function RA(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((r = !0), (n += i))
      : i === ")"
      ? ((r = !1), (n += i))
      : i === "," && !r
      ? (t.push(n), (n = ""))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function OA(e) {
  return /^var\(--.+\)$/.test(e);
}
var MA = (e, t) => e.startsWith("--") && typeof t == "string" && !OA(t),
  $A = (e, t) => {
    var n, r;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [a, s] = RA(t);
    return (t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t)), t;
  };
function DA(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, a = !1) => {
      var s, l, u;
      const c = er(i, r),
        d = AA(c)(r);
      let f = {};
      for (let p in d) {
        const v = d[p];
        let g = er(v, r);
        p in n && (p = n[p]), MA(p, g) && (g = $A(r, g));
        let S = t[p];
        if ((S === !0 && (S = { property: p }), At(g))) {
          (f[p] = (s = f[p]) != null ? s : {}), (f[p] = nn({}, f[p], o(g, !0)));
          continue;
        }
        let h =
          (u =
            (l = S == null ? void 0 : S.transform) == null
              ? void 0
              : l.call(S, g, r, c)) != null
            ? u
            : g;
        h = S != null && S.processResult ? o(h, !0) : h;
        const m = er(S == null ? void 0 : S.property, r);
        if (!a && S != null && S.static) {
          const y = er(S.static, r);
          f = nn({}, f, y);
        }
        if (m && Array.isArray(m)) {
          for (const y of m) f[y] = h;
          continue;
        }
        if (m) {
          m === "&" && At(h) ? (f = nn({}, f, h)) : (f[m] = h);
          continue;
        }
        if (At(h)) {
          f = nn({}, f, h);
          continue;
        }
        f[p] = h;
      }
      return f;
    };
  return o;
}
var y2 = (e) => (t) => DA({ theme: t, pseudos: fd, configs: mv })(e);
function ke(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function IA(e, t) {
  if (Array.isArray(e)) return e;
  if (At(e)) return t(e);
  if (e != null) return [e];
}
function zA(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function FA(e) {
  const t = e.__breakpoints;
  return function (r, o, i, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = IA(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      p = !!r.parts;
    for (let v = 0; v < d; v++) {
      const g = t.details[v],
        S = t.details[zA(c, v)],
        h = za(g.minW, S == null ? void 0 : S._minW),
        m = er((s = r[o]) == null ? void 0 : s[c[v]], a);
      if (m) {
        if (p) {
          (l = r.parts) == null ||
            l.forEach((y) => {
              nn(u, { [y]: f ? m[y] : { [h]: m[y] } });
            });
          continue;
        }
        if (!p) {
          f ? nn(u, m) : (u[h] = m);
          continue;
        }
        u[h] = m;
      }
    }
    return u;
  };
}
function LA(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t,
      a = FA(i);
    return nn(
      {},
      er((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function wt(e) {
  return vA(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var jA = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
];
function NA(e) {
  return At(e)
    ? jA.every((t) => Object.prototype.hasOwnProperty.call(e, t))
    : !1;
}
var BA = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  VA = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  WA = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  UA = { property: BA, easing: VA, duration: WA },
  HA = UA,
  GA = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  KA = GA,
  qA = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  XA = qA,
  YA = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  QA = YA,
  ZA = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  JA = ZA,
  eR = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  tR = eR,
  nR = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  rR = nR,
  oR = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  iR = oR,
  aR = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  b2 = aR,
  S2 = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  sR = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  lR = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  uR = { ...S2, ...sR, container: lR },
  x2 = uR,
  cR = {
    breakpoints: QA,
    zIndices: KA,
    radii: tR,
    blur: iR,
    colors: JA,
    ...b2,
    sizes: x2,
    shadows: rR,
    space: S2,
    borders: XA,
    transition: HA,
  },
  { defineMultiStyleConfig: dR, definePartsStyle: Fa } = ke([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  Yn = W("stepper-indicator-size"),
  fi = W("stepper-icon-size"),
  pi = W("stepper-title-font-size"),
  La = W("stepper-description-font-size"),
  Ca = W("stepper-accent-color"),
  fR = Fa(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [Ca.variable]: `colors.${e}.500`,
      _dark: { [Ca.variable]: `colors.${e}.200` },
    },
    title: { fontSize: pi.reference, fontWeight: "medium" },
    description: { fontSize: La.reference, color: "chakra-subtle-text" },
    number: { fontSize: pi.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: fi.reference, height: fi.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: Yn.reference,
      height: Yn.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: Ca.reference,
      },
      "&[data-status=complete]": {
        bg: Ca.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: Ca.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${Yn.reference} - 8px)`,
        top: `calc(${Yn.reference} + 4px)`,
        insetStart: `calc(${Yn.reference} / 2 - 1px)`,
      },
    },
  })),
  pR = dR({
    baseStyle: fR,
    sizes: {
      xs: Fa({
        stepper: {
          [Yn.variable]: "sizes.4",
          [fi.variable]: "sizes.3",
          [pi.variable]: "fontSizes.xs",
          [La.variable]: "fontSizes.xs",
        },
      }),
      sm: Fa({
        stepper: {
          [Yn.variable]: "sizes.6",
          [fi.variable]: "sizes.4",
          [pi.variable]: "fontSizes.sm",
          [La.variable]: "fontSizes.xs",
        },
      }),
      md: Fa({
        stepper: {
          [Yn.variable]: "sizes.8",
          [fi.variable]: "sizes.5",
          [pi.variable]: "fontSizes.md",
          [La.variable]: "fontSizes.sm",
        },
      }),
      lg: Fa({
        stepper: {
          [Yn.variable]: "sizes.10",
          [fi.variable]: "sizes.6",
          [pi.variable]: "fontSizes.lg",
          [La.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function me(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c) t[d] = l(d);
    return me(e, t);
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return me(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const p = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: p, selector: `.${p}`, toString: () => c };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var hR = me("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  mR = me("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  vR = me("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  gR = me("breadcrumb").parts("link", "item", "container").extend("separator");
me("button").parts();
var yR = me("checkbox").parts("control", "icon", "container").extend("label");
me("progress").parts("track", "filledTrack").extend("label");
var bR = me("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  SR = me("editable").parts("preview", "input", "textarea"),
  xR = me("form").parts("container", "requiredIndicator", "helperText"),
  wR = me("formError").parts("text", "icon"),
  kR = me("input").parts("addon", "field", "element", "group"),
  CR = me("list").parts("container", "item", "icon"),
  _R = me("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  ER = me("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  TR = me("numberinput").parts("root", "field", "stepperGroup", "stepper");
me("pininput").parts("field");
var PR = me("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  AR = me("progress").parts("label", "filledTrack", "track"),
  RR = me("radio").parts("container", "control", "label"),
  OR = me("select").parts("field", "icon"),
  MR = me("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  $R = me("stat").parts("container", "label", "helpText", "number", "icon"),
  DR = me("switch").parts("container", "track", "thumb", "label"),
  IR = me("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  zR = me("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  FR = me("tag").parts("container", "label", "closeButton"),
  LR = me("card").parts("container", "header", "body", "footer");
me("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function yo(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class jR extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var ja = jR;
function vv(e) {
  if (typeof e != "string") throw new ja(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = KR.test(e) ? VR(e) : e;
  const n = WR.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt($s(s, 2), 16)),
      parseInt($s(a[3] || "f", 2), 16) / 255,
    ];
  }
  const r = UR.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 16)),
      parseInt(a[3] || "ff", 16) / 255,
    ];
  }
  const o = HR.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 10)),
      parseFloat(a[3] || "1"),
    ];
  }
  const i = GR.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (yo(0, 100, s) !== s) throw new ja(e);
    if (yo(0, 100, l) !== l) throw new ja(e);
    return [...qR(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new ja(e);
}
function NR(e) {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const _y = (e) => parseInt(e.replace(/_/g, ""), 36),
  BR =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const n = _y(t.substring(0, 3)),
          r = _y(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - r.length; i++) o += "0";
        return (e[n] = `${o}${r}`), e;
      }, {});
function VR(e) {
  const t = e.toLowerCase().trim(),
    n = BR[NR(t)];
  if (!n) throw new ja(e);
  return `#${n}`;
}
const $s = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  WR = new RegExp(`^#${$s("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  UR = new RegExp(`^#${$s("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  HR = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${$s(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  GR =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  KR = /^[a-z]+$/i,
  Ey = (e) => Math.round(e * 255),
  qR = (e, t, n) => {
    let r = n / 100;
    if (t === 0) return [r, r, r].map(Ey);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * (t / 100),
      a = i * (1 - Math.abs((o % 2) - 1));
    let s = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((s = i), (l = a))
      : o >= 1 && o < 2
      ? ((s = a), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = a))
      : o >= 3 && o < 4
      ? ((l = a), (u = i))
      : o >= 4 && o < 5
      ? ((s = a), (u = i))
      : o >= 5 && o < 6 && ((s = i), (u = a));
    const c = r - i / 2,
      d = s + c,
      f = l + c,
      p = u + c;
    return [d, f, p].map(Ey);
  };
function XR(e, t, n, r) {
  return `rgba(${yo(0, 255, e).toFixed()}, ${yo(0, 255, t).toFixed()}, ${yo(
    0,
    255,
    n
  ).toFixed()}, ${parseFloat(yo(0, 1, r).toFixed(3))})`;
}
function YR(e, t) {
  const [n, r, o, i] = vv(e);
  return XR(n, r, o, i - t);
}
function QR(e) {
  const [t, n, r, o] = vv(e);
  let i = (a) => {
    const s = yo(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function ZR(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var JR = (e) => Object.keys(e).length === 0,
  gt = (e, t, n) => {
    const r = ZR(e, `colors.${t}`, t);
    try {
      return QR(r), r;
    } catch {
      return n ?? "#000000";
    }
  },
  e6 = (e) => {
    const [t, n, r] = vv(e);
    return (t * 299 + n * 587 + r * 114) / 1e3;
  },
  t6 = (e) => (t) => {
    const n = gt(t, e);
    return e6(n) < 128 ? "dark" : "light";
  },
  n6 = (e) => (t) => t6(e)(t) === "dark",
  Gi = (e, t) => (n) => {
    const r = gt(n, e);
    return YR(r, 1 - t);
  };
function Ty(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var r6 = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function o6(e) {
  const t = r6();
  return !e || JR(e)
    ? t
    : e.string && e.colors
    ? a6(e.string, e.colors)
    : e.string && !e.colors
    ? i6(e.string)
    : e.colors && !e.string
    ? s6(e.colors)
    : t;
}
function i6(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = (t >> (r * 8)) & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function a6(e, t) {
  let n = 0;
  if (e.length === 0) return t[0];
  for (let r = 0; r < e.length; r += 1)
    (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n);
  return (n = ((n % t.length) + t.length) % t.length), t[n];
}
function s6(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function H(e, t) {
  return (n) => (n.colorMode === "dark" ? t : e);
}
function gv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? (t === "vertical" ? n : r) : {};
}
function w2(e) {
  return At(e) && e.reference ? e.reference : String(e);
}
var pd = (e, ...t) => t.map(w2).join(` ${e} `).replace(/calc/g, ""),
  Py = (...e) => `calc(${pd("+", ...e)})`,
  Ay = (...e) => `calc(${pd("-", ...e)})`,
  ph = (...e) => `calc(${pd("*", ...e)})`,
  Ry = (...e) => `calc(${pd("/", ...e)})`,
  Oy = (e) => {
    const t = w2(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : ph(t, -1);
  },
  Qn = Object.assign(
    (e) => ({
      add: (...t) => Qn(Py(e, ...t)),
      subtract: (...t) => Qn(Ay(e, ...t)),
      multiply: (...t) => Qn(ph(e, ...t)),
      divide: (...t) => Qn(Ry(e, ...t)),
      negate: () => Qn(Oy(e)),
      toString: () => e.toString(),
    }),
    { add: Py, subtract: Ay, multiply: ph, divide: Ry, negate: Oy }
  );
function l6(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function u6(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function k2(e) {
  const t = u6(e.toString());
  return t.includes("\\.") ? e : l6(e) ? t.replace(".", "\\.") : e;
}
function c6(e, t = "") {
  return [t, k2(e)].filter(Boolean).join("-");
}
function d6(e, t) {
  return `var(${k2(e)}${t ? `, ${t}` : ""})`;
}
function f6(e, t = "") {
  return `--${c6(e, t)}`;
}
function qe(e, t) {
  const n = f6(e, void 0);
  return { variable: n, reference: d6(n, p6(void 0)) };
}
function p6(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: h6, definePartsStyle: ku } = ke(DR.keys),
  es = qe("switch-track-width"),
  ko = qe("switch-track-height"),
  kf = qe("switch-track-diff"),
  m6 = Qn.subtract(es, ko),
  hh = qe("switch-thumb-x"),
  _a = qe("switch-bg"),
  v6 = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [es.reference],
      height: [ko.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [_a.variable]: "colors.gray.300",
      _dark: { [_a.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [_a.variable]: `colors.${t}.500`,
        _dark: { [_a.variable]: `colors.${t}.200` },
      },
      bg: _a.reference,
    };
  },
  g6 = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [ko.reference],
    height: [ko.reference],
    _checked: { transform: `translateX(${hh.reference})` },
  },
  y6 = ku((e) => ({
    container: {
      [kf.variable]: m6,
      [hh.variable]: kf.reference,
      _rtl: { [hh.variable]: Qn(kf).negate().toString() },
    },
    track: v6(e),
    thumb: g6,
  })),
  b6 = {
    sm: ku({
      container: { [es.variable]: "1.375rem", [ko.variable]: "sizes.3" },
    }),
    md: ku({
      container: { [es.variable]: "1.875rem", [ko.variable]: "sizes.4" },
    }),
    lg: ku({
      container: { [es.variable]: "2.875rem", [ko.variable]: "sizes.6" },
    }),
  },
  S6 = h6({
    baseStyle: y6,
    sizes: b6,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: x6, definePartsStyle: Oi } = ke(IR.keys),
  w6 = Oi({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  hc = { "&[data-is-numeric=true]": { textAlign: "end" } },
  k6 = Oi((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: H("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: H(`${t}.100`, `${t}.700`)(e),
        ...hc,
      },
      td: {
        borderBottom: "1px",
        borderColor: H(`${t}.100`, `${t}.700`)(e),
        ...hc,
      },
      caption: { color: H("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  C6 = Oi((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: H("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: H(`${t}.100`, `${t}.700`)(e),
        ...hc,
      },
      td: {
        borderBottom: "1px",
        borderColor: H(`${t}.100`, `${t}.700`)(e),
        ...hc,
      },
      caption: { color: H("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: H(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: H(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  _6 = { simple: k6, striped: C6, unstyled: {} },
  E6 = {
    sm: Oi({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: Oi({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: Oi({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  T6 = x6({
    baseStyle: w6,
    variants: _6,
    sizes: E6,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  Ct = W("tabs-color"),
  yn = W("tabs-bg"),
  Gl = W("tabs-border-color"),
  { defineMultiStyleConfig: P6, definePartsStyle: jn } = ke(zR.keys),
  A6 = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  R6 = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  O6 = (e) => {
    const { align: t = "start", orientation: n } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: n === "vertical" ? "column" : "row",
    };
  },
  M6 = { p: 4 },
  $6 = jn((e) => ({ root: A6(e), tab: R6(e), tablist: O6(e), tabpanel: M6 })),
  D6 = {
    sm: jn({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: jn({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: jn({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  I6 = jn((e) => {
    const { colorScheme: t, orientation: n } = e,
      r = n === "vertical",
      o = r ? "borderStart" : "borderBottom",
      i = r ? "marginStart" : "marginBottom";
    return {
      tablist: { [o]: "2px solid", borderColor: "inherit" },
      tab: {
        [o]: "2px solid",
        borderColor: "transparent",
        [i]: "-2px",
        _selected: {
          [Ct.variable]: `colors.${t}.600`,
          _dark: { [Ct.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [yn.variable]: "colors.gray.200",
          _dark: { [yn.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: Ct.reference,
        bg: yn.reference,
      },
    };
  }),
  z6 = jn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [Gl.variable]: "transparent",
        _selected: {
          [Ct.variable]: `colors.${t}.600`,
          [Gl.variable]: "colors.white",
          _dark: {
            [Ct.variable]: `colors.${t}.300`,
            [Gl.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: Gl.reference,
        },
        color: Ct.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  F6 = jn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [yn.variable]: "colors.gray.50",
        _dark: { [yn.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [yn.variable]: "colors.white",
          [Ct.variable]: `colors.${t}.600`,
          _dark: {
            [yn.variable]: "colors.gray.800",
            [Ct.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: Ct.reference,
        bg: yn.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  L6 = jn((e) => {
    const { colorScheme: t, theme: n } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: gt(n, `${t}.700`), bg: gt(n, `${t}.100`) },
      },
    };
  }),
  j6 = jn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [Ct.variable]: "colors.gray.600",
        _dark: { [Ct.variable]: "inherit" },
        _selected: {
          [Ct.variable]: "colors.white",
          [yn.variable]: `colors.${t}.600`,
          _dark: {
            [Ct.variable]: "colors.gray.800",
            [yn.variable]: `colors.${t}.300`,
          },
        },
        color: Ct.reference,
        bg: yn.reference,
      },
    };
  }),
  N6 = jn({}),
  B6 = {
    line: I6,
    enclosed: z6,
    "enclosed-colored": F6,
    "soft-rounded": L6,
    "solid-rounded": j6,
    unstyled: N6,
  },
  V6 = P6({
    baseStyle: $6,
    sizes: D6,
    variants: B6,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  Ve = cA("badge", ["bg", "color", "shadow"]),
  W6 = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: Ve.bg.reference,
    color: Ve.color.reference,
    boxShadow: Ve.shadow.reference,
  },
  U6 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Gi(`${t}.500`, 0.6)(n);
    return {
      [Ve.bg.variable]: `colors.${t}.500`,
      [Ve.color.variable]: "colors.white",
      _dark: {
        [Ve.bg.variable]: r,
        [Ve.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  H6 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Gi(`${t}.200`, 0.16)(n);
    return {
      [Ve.bg.variable]: `colors.${t}.100`,
      [Ve.color.variable]: `colors.${t}.800`,
      _dark: { [Ve.bg.variable]: r, [Ve.color.variable]: `colors.${t}.200` },
    };
  },
  G6 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Gi(`${t}.200`, 0.8)(n);
    return {
      [Ve.color.variable]: `colors.${t}.500`,
      _dark: { [Ve.color.variable]: r },
      [Ve.shadow.variable]: `inset 0 0 0px 1px ${Ve.color.reference}`,
    };
  },
  K6 = { solid: U6, subtle: H6, outline: G6 },
  ts = {
    baseStyle: W6,
    variants: K6,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: q6, definePartsStyle: Co } = ke(FR.keys),
  My = W("tag-bg"),
  $y = W("tag-color"),
  Cf = W("tag-shadow"),
  Cu = W("tag-min-height"),
  _u = W("tag-min-width"),
  Eu = W("tag-font-size"),
  Tu = W("tag-padding-inline"),
  X6 = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [$y.variable]: Ve.color.reference,
    [My.variable]: Ve.bg.reference,
    [Cf.variable]: Ve.shadow.reference,
    color: $y.reference,
    bg: My.reference,
    boxShadow: Cf.reference,
    borderRadius: "md",
    minH: Cu.reference,
    minW: _u.reference,
    fontSize: Eu.reference,
    px: Tu.reference,
    _focusVisible: { [Cf.variable]: "shadows.outline" },
  },
  Y6 = { lineHeight: 1.2, overflow: "visible" },
  Q6 = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  Z6 = Co({ container: X6, label: Y6, closeButton: Q6 }),
  J6 = {
    sm: Co({
      container: {
        [Cu.variable]: "sizes.5",
        [_u.variable]: "sizes.5",
        [Eu.variable]: "fontSizes.xs",
        [Tu.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: Co({
      container: {
        [Cu.variable]: "sizes.6",
        [_u.variable]: "sizes.6",
        [Eu.variable]: "fontSizes.sm",
        [Tu.variable]: "space.2",
      },
    }),
    lg: Co({
      container: {
        [Cu.variable]: "sizes.8",
        [_u.variable]: "sizes.8",
        [Eu.variable]: "fontSizes.md",
        [Tu.variable]: "space.3",
      },
    }),
  },
  eO = {
    subtle: Co((e) => {
      var t;
      return { container: (t = ts.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: Co((e) => {
      var t;
      return { container: (t = ts.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: Co((e) => {
      var t;
      return { container: (t = ts.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  tO = q6({
    variants: eO,
    baseStyle: Z6,
    sizes: J6,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: tr, defineMultiStyleConfig: nO } = ke(kR.keys),
  hi = W("input-height"),
  mi = W("input-font-size"),
  vi = W("input-padding"),
  gi = W("input-border-radius"),
  rO = tr({
    addon: {
      height: hi.reference,
      fontSize: mi.reference,
      px: vi.reference,
      borderRadius: gi.reference,
    },
    field: {
      width: "100%",
      height: hi.reference,
      fontSize: mi.reference,
      px: vi.reference,
      borderRadius: gi.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  Cr = {
    lg: {
      [mi.variable]: "fontSizes.lg",
      [vi.variable]: "space.4",
      [gi.variable]: "radii.md",
      [hi.variable]: "sizes.12",
    },
    md: {
      [mi.variable]: "fontSizes.md",
      [vi.variable]: "space.4",
      [gi.variable]: "radii.md",
      [hi.variable]: "sizes.10",
    },
    sm: {
      [mi.variable]: "fontSizes.sm",
      [vi.variable]: "space.3",
      [gi.variable]: "radii.sm",
      [hi.variable]: "sizes.8",
    },
    xs: {
      [mi.variable]: "fontSizes.xs",
      [vi.variable]: "space.2",
      [gi.variable]: "radii.sm",
      [hi.variable]: "sizes.6",
    },
  },
  oO = {
    lg: tr({ field: Cr.lg, group: Cr.lg }),
    md: tr({ field: Cr.md, group: Cr.md }),
    sm: tr({ field: Cr.sm, group: Cr.sm }),
    xs: tr({ field: Cr.xs, group: Cr.xs }),
  };
function yv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || H("blue.500", "blue.300")(e),
    errorBorderColor: n || H("red.500", "red.300")(e),
  };
}
var iO = tr((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = yv(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: H("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: gt(t, r), boxShadow: `0 0 0 1px ${gt(t, r)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: gt(t, n),
          boxShadow: `0 0 0 1px ${gt(t, n)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: H("inherit", "whiteAlpha.50")(e),
        bg: H("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  aO = tr((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = yv(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: H("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: H("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: gt(t, r) },
        _focusVisible: { bg: "transparent", borderColor: gt(t, n) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: H("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  sO = tr((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = yv(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: gt(t, r),
          boxShadow: `0px 1px 0px 0px ${gt(t, r)}`,
        },
        _focusVisible: {
          borderColor: gt(t, n),
          boxShadow: `0px 1px 0px 0px ${gt(t, n)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  lO = tr({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  uO = { outline: iO, filled: aO, flushed: sO, unstyled: lO },
  he = nO({
    baseStyle: rO,
    sizes: oO,
    variants: uO,
    defaultProps: { size: "md", variant: "outline" },
  }),
  Dy,
  cO = {
    ...((Dy = he.baseStyle) == null ? void 0 : Dy.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  Iy,
  zy,
  dO = {
    outline: (e) => {
      var t, n;
      return (n = (t = he.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, n;
      return (n = (t = he.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? n
        : {};
    },
    filled: (e) => {
      var t, n;
      return (n = (t = he.variants) == null ? void 0 : t.filled(e).field) !=
        null
        ? n
        : {};
    },
    unstyled:
      (zy = (Iy = he.variants) == null ? void 0 : Iy.unstyled.field) != null
        ? zy
        : {},
  },
  Fy,
  Ly,
  jy,
  Ny,
  By,
  Vy,
  Wy,
  Uy,
  fO = {
    xs: (Ly = (Fy = he.sizes) == null ? void 0 : Fy.xs.field) != null ? Ly : {},
    sm: (Ny = (jy = he.sizes) == null ? void 0 : jy.sm.field) != null ? Ny : {},
    md: (Vy = (By = he.sizes) == null ? void 0 : By.md.field) != null ? Vy : {},
    lg: (Uy = (Wy = he.sizes) == null ? void 0 : Wy.lg.field) != null ? Uy : {},
  },
  pO = {
    baseStyle: cO,
    sizes: fO,
    variants: dO,
    defaultProps: { size: "md", variant: "outline" },
  },
  Kl = qe("tooltip-bg"),
  _f = qe("tooltip-fg"),
  hO = qe("popper-arrow-bg"),
  mO = {
    bg: Kl.reference,
    color: _f.reference,
    [Kl.variable]: "colors.gray.700",
    [_f.variable]: "colors.whiteAlpha.900",
    _dark: {
      [Kl.variable]: "colors.gray.300",
      [_f.variable]: "colors.gray.900",
    },
    [hO.variable]: Kl.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  vO = { baseStyle: mO },
  { defineMultiStyleConfig: gO, definePartsStyle: Na } = ke(AR.keys),
  yO = (e) => {
    const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
      i = H(Ty(), Ty("1rem", "rgba(0,0,0,0.1)"))(e),
      a = H(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${gt(n, a)} 50%,
    transparent 100%
  )`;
    return { ...(!r && o && i), ...(r ? { bgImage: s } : { bgColor: a }) };
  },
  bO = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  SO = (e) => ({ bg: H("gray.100", "whiteAlpha.300")(e) }),
  xO = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...yO(e),
  }),
  wO = Na((e) => ({ label: bO, filledTrack: xO(e), track: SO(e) })),
  kO = {
    xs: Na({ track: { h: "1" } }),
    sm: Na({ track: { h: "2" } }),
    md: Na({ track: { h: "3" } }),
    lg: Na({ track: { h: "4" } }),
  },
  CO = gO({
    sizes: kO,
    baseStyle: wO,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  _O = (e) => typeof e == "function";
function bt(e, ...t) {
  return _O(e) ? e(...t) : e;
}
var { definePartsStyle: Pu, defineMultiStyleConfig: EO } = ke(yR.keys),
  ns = W("checkbox-size"),
  TO = (e) => {
    const { colorScheme: t } = e;
    return {
      w: ns.reference,
      h: ns.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: H(`${t}.500`, `${t}.200`)(e),
        borderColor: H(`${t}.500`, `${t}.200`)(e),
        color: H("white", "gray.900")(e),
        _hover: {
          bg: H(`${t}.600`, `${t}.300`)(e),
          borderColor: H(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: H("gray.200", "transparent")(e),
          bg: H("gray.200", "whiteAlpha.300")(e),
          color: H("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: H(`${t}.500`, `${t}.200`)(e),
        borderColor: H(`${t}.500`, `${t}.200`)(e),
        color: H("white", "gray.900")(e),
      },
      _disabled: {
        bg: H("gray.100", "whiteAlpha.100")(e),
        borderColor: H("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: H("red.500", "red.300")(e) },
    };
  },
  PO = { _disabled: { cursor: "not-allowed" } },
  AO = { userSelect: "none", _disabled: { opacity: 0.4 } },
  RO = { transitionProperty: "transform", transitionDuration: "normal" },
  OO = Pu((e) => ({ icon: RO, container: PO, control: bt(TO, e), label: AO })),
  MO = {
    sm: Pu({
      control: { [ns.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: Pu({
      control: { [ns.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: Pu({
      control: { [ns.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  mc = EO({
    baseStyle: OO,
    sizes: MO,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: $O, definePartsStyle: Au } = ke(RR.keys),
  DO = (e) => {
    var t;
    const n = (t = bt(mc.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...n,
      borderRadius: "full",
      _checked: {
        ...(n == null ? void 0 : n._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  IO = Au((e) => {
    var t, n, r, o;
    return {
      label: (n = (t = mc).baseStyle) == null ? void 0 : n.call(t, e).label,
      container:
        (o = (r = mc).baseStyle) == null ? void 0 : o.call(r, e).container,
      control: DO(e),
    };
  }),
  zO = {
    md: Au({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Au({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Au({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  FO = $O({
    baseStyle: IO,
    sizes: zO,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: LO, definePartsStyle: jO } = ke(OR.keys),
  ql = W("select-bg"),
  Hy,
  NO = {
    ...((Hy = he.baseStyle) == null ? void 0 : Hy.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: ql.reference,
    [ql.variable]: "colors.white",
    _dark: { [ql.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: ql.reference },
  },
  BO = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  VO = jO({ field: NO, icon: BO }),
  Xl = { paddingInlineEnd: "8" },
  Gy,
  Ky,
  qy,
  Xy,
  Yy,
  Qy,
  Zy,
  Jy,
  WO = {
    lg: {
      ...((Gy = he.sizes) == null ? void 0 : Gy.lg),
      field: { ...((Ky = he.sizes) == null ? void 0 : Ky.lg.field), ...Xl },
    },
    md: {
      ...((qy = he.sizes) == null ? void 0 : qy.md),
      field: { ...((Xy = he.sizes) == null ? void 0 : Xy.md.field), ...Xl },
    },
    sm: {
      ...((Yy = he.sizes) == null ? void 0 : Yy.sm),
      field: { ...((Qy = he.sizes) == null ? void 0 : Qy.sm.field), ...Xl },
    },
    xs: {
      ...((Zy = he.sizes) == null ? void 0 : Zy.xs),
      field: { ...((Jy = he.sizes) == null ? void 0 : Jy.xs.field), ...Xl },
      icon: { insetEnd: "1" },
    },
  },
  UO = LO({
    baseStyle: VO,
    sizes: WO,
    variants: he.variants,
    defaultProps: he.defaultProps,
  }),
  Ef = W("skeleton-start-color"),
  Tf = W("skeleton-end-color"),
  HO = {
    [Ef.variable]: "colors.gray.100",
    [Tf.variable]: "colors.gray.400",
    _dark: {
      [Ef.variable]: "colors.gray.800",
      [Tf.variable]: "colors.gray.600",
    },
    background: Ef.reference,
    borderColor: Tf.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  GO = { baseStyle: HO },
  Pf = W("skip-link-bg"),
  KO = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [Pf.variable]: "colors.white",
      _dark: { [Pf.variable]: "colors.gray.700" },
      bg: Pf.reference,
    },
  },
  qO = { baseStyle: KO },
  { defineMultiStyleConfig: XO, definePartsStyle: hd } = ke(MR.keys),
  Ds = W("slider-thumb-size"),
  Is = W("slider-track-size"),
  Mr = W("slider-bg"),
  YO = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...gv({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  QO = (e) => ({
    ...gv({
      orientation: e.orientation,
      horizontal: { h: Is.reference },
      vertical: { w: Is.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [Mr.variable]: "colors.gray.200",
    _dark: { [Mr.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [Mr.variable]: "colors.gray.300",
      _dark: { [Mr.variable]: "colors.whiteAlpha.300" },
    },
    bg: Mr.reference,
  }),
  ZO = (e) => {
    const { orientation: t } = e;
    return {
      ...gv({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: Ds.reference,
      h: Ds.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  JO = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [Mr.variable]: `colors.${t}.500`,
      _dark: { [Mr.variable]: `colors.${t}.200` },
      bg: Mr.reference,
    };
  },
  eM = hd((e) => ({
    container: YO(e),
    track: QO(e),
    thumb: ZO(e),
    filledTrack: JO(e),
  })),
  tM = hd({
    container: { [Ds.variable]: "sizes.4", [Is.variable]: "sizes.1" },
  }),
  nM = hd({
    container: { [Ds.variable]: "sizes.3.5", [Is.variable]: "sizes.1" },
  }),
  rM = hd({
    container: { [Ds.variable]: "sizes.2.5", [Is.variable]: "sizes.0.5" },
  }),
  oM = { lg: tM, md: nM, sm: rM },
  iM = XO({
    baseStyle: eM,
    sizes: oM,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  ho = qe("spinner-size"),
  aM = { width: [ho.reference], height: [ho.reference] },
  sM = {
    xs: { [ho.variable]: "sizes.3" },
    sm: { [ho.variable]: "sizes.4" },
    md: { [ho.variable]: "sizes.6" },
    lg: { [ho.variable]: "sizes.8" },
    xl: { [ho.variable]: "sizes.12" },
  },
  lM = { baseStyle: aM, sizes: sM, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: uM, definePartsStyle: C2 } = ke($R.keys),
  cM = { fontWeight: "medium" },
  dM = { opacity: 0.8, marginBottom: "2" },
  fM = { verticalAlign: "baseline", fontWeight: "semibold" },
  pM = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  hM = C2({ container: {}, label: cM, helpText: dM, number: fM, icon: pM }),
  mM = {
    md: C2({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  vM = uM({ baseStyle: hM, sizes: mM, defaultProps: { size: "md" } }),
  Af = W("kbd-bg"),
  gM = {
    [Af.variable]: "colors.gray.100",
    _dark: { [Af.variable]: "colors.whiteAlpha.100" },
    bg: Af.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  yM = { baseStyle: gM },
  bM = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  SM = { baseStyle: bM },
  { defineMultiStyleConfig: xM, definePartsStyle: wM } = ke(CR.keys),
  kM = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  CM = wM({ icon: kM }),
  _M = xM({ baseStyle: CM }),
  { defineMultiStyleConfig: EM, definePartsStyle: TM } = ke(_R.keys),
  On = W("menu-bg"),
  Rf = W("menu-shadow"),
  PM = {
    [On.variable]: "#fff",
    [Rf.variable]: "shadows.sm",
    _dark: {
      [On.variable]: "colors.gray.700",
      [Rf.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: On.reference,
    boxShadow: Rf.reference,
  },
  AM = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [On.variable]: "colors.gray.100",
      _dark: { [On.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [On.variable]: "colors.gray.200",
      _dark: { [On.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [On.variable]: "colors.gray.100",
      _dark: { [On.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: On.reference,
  },
  RM = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  OM = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  MM = { opacity: 0.6 },
  $M = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  DM = { transitionProperty: "common", transitionDuration: "normal" },
  IM = TM({
    button: DM,
    list: PM,
    item: AM,
    groupTitle: RM,
    icon: OM,
    command: MM,
    divider: $M,
  }),
  zM = EM({ baseStyle: IM }),
  { defineMultiStyleConfig: FM, definePartsStyle: mh } = ke(ER.keys),
  Of = W("modal-bg"),
  Mf = W("modal-shadow"),
  LM = { bg: "blackAlpha.600", zIndex: "modal" },
  jM = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: n === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  NM = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [Of.variable]: "colors.white",
      [Mf.variable]: "shadows.lg",
      _dark: {
        [Of.variable]: "colors.gray.700",
        [Mf.variable]: "shadows.dark-lg",
      },
      bg: Of.reference,
      boxShadow: Mf.reference,
    };
  },
  BM = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  VM = { position: "absolute", top: "2", insetEnd: "3" },
  WM = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  UM = { px: "6", py: "4" },
  HM = mh((e) => ({
    overlay: LM,
    dialogContainer: bt(jM, e),
    dialog: bt(NM, e),
    header: BM,
    closeButton: VM,
    body: bt(WM, e),
    footer: UM,
  }));
function hn(e) {
  return mh(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var GM = {
    xs: hn("xs"),
    sm: hn("sm"),
    md: hn("md"),
    lg: hn("lg"),
    xl: hn("xl"),
    "2xl": hn("2xl"),
    "3xl": hn("3xl"),
    "4xl": hn("4xl"),
    "5xl": hn("5xl"),
    "6xl": hn("6xl"),
    full: hn("full"),
  },
  KM = FM({ baseStyle: HM, sizes: GM, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: qM, definePartsStyle: _2 } = ke(TR.keys),
  bv = qe("number-input-stepper-width"),
  E2 = qe("number-input-input-padding"),
  XM = Qn(bv).add("0.5rem").toString(),
  $f = qe("number-input-bg"),
  Df = qe("number-input-color"),
  If = qe("number-input-border-color"),
  YM = { [bv.variable]: "sizes.6", [E2.variable]: XM },
  QM = (e) => {
    var t, n;
    return (n = (t = bt(he.baseStyle, e)) == null ? void 0 : t.field) != null
      ? n
      : {};
  },
  ZM = { width: bv.reference },
  JM = {
    borderStart: "1px solid",
    borderStartColor: If.reference,
    color: Df.reference,
    bg: $f.reference,
    [Df.variable]: "colors.chakra-body-text",
    [If.variable]: "colors.chakra-border-color",
    _dark: {
      [Df.variable]: "colors.whiteAlpha.800",
      [If.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [$f.variable]: "colors.gray.200",
      _dark: { [$f.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  e8 = _2((e) => {
    var t;
    return {
      root: YM,
      field: (t = bt(QM, e)) != null ? t : {},
      stepperGroup: ZM,
      stepper: JM,
    };
  });
function Yl(e) {
  var t, n, r;
  const o = (t = he.sizes) == null ? void 0 : t[e],
    i = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md",
    s = b2.fontSizes[a];
  return _2({
    field: { ...o.field, paddingInlineEnd: E2.reference, verticalAlign: "top" },
    stepper: {
      fontSize: Qn(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var t8 = { xs: Yl("xs"), sm: Yl("sm"), md: Yl("md"), lg: Yl("lg") },
  n8 = qM({
    baseStyle: e8,
    sizes: t8,
    variants: he.variants,
    defaultProps: he.defaultProps,
  }),
  e1,
  r8 = {
    ...((e1 = he.baseStyle) == null ? void 0 : e1.field),
    textAlign: "center",
  },
  o8 = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  t1,
  n1,
  i8 = {
    outline: (e) => {
      var t, n, r;
      return (r =
        (n = bt((t = he.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, n, r;
      return (r =
        (n = bt((t = he.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    filled: (e) => {
      var t, n, r;
      return (r =
        (n = bt((t = he.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    unstyled:
      (n1 = (t1 = he.variants) == null ? void 0 : t1.unstyled.field) != null
        ? n1
        : {},
  },
  a8 = {
    baseStyle: r8,
    sizes: o8,
    variants: i8,
    defaultProps: he.defaultProps,
  },
  { defineMultiStyleConfig: s8, definePartsStyle: l8 } = ke(PR.keys),
  Ql = qe("popper-bg"),
  u8 = qe("popper-arrow-bg"),
  r1 = qe("popper-arrow-shadow-color"),
  c8 = { zIndex: 10 },
  d8 = {
    [Ql.variable]: "colors.white",
    bg: Ql.reference,
    [u8.variable]: Ql.reference,
    [r1.variable]: "colors.gray.200",
    _dark: {
      [Ql.variable]: "colors.gray.700",
      [r1.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  f8 = { px: 3, py: 2, borderBottomWidth: "1px" },
  p8 = { px: 3, py: 2 },
  h8 = { px: 3, py: 2, borderTopWidth: "1px" },
  m8 = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  v8 = l8({
    popper: c8,
    content: d8,
    header: f8,
    body: p8,
    footer: h8,
    closeButton: m8,
  }),
  g8 = s8({ baseStyle: v8 }),
  { definePartsStyle: vh, defineMultiStyleConfig: y8 } = ke(bR.keys),
  zf = W("drawer-bg"),
  Ff = W("drawer-box-shadow");
function qo(e) {
  return vh(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var b8 = { bg: "blackAlpha.600", zIndex: "modal" },
  S8 = { display: "flex", zIndex: "modal", justifyContent: "center" },
  x8 = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [zf.variable]: "colors.white",
      [Ff.variable]: "shadows.lg",
      _dark: {
        [zf.variable]: "colors.gray.700",
        [Ff.variable]: "shadows.dark-lg",
      },
      bg: zf.reference,
      boxShadow: Ff.reference,
    };
  },
  w8 = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  k8 = { position: "absolute", top: "2", insetEnd: "3" },
  C8 = { px: "6", py: "2", flex: "1", overflow: "auto" },
  _8 = { px: "6", py: "4" },
  E8 = vh((e) => ({
    overlay: b8,
    dialogContainer: S8,
    dialog: bt(x8, e),
    header: w8,
    closeButton: k8,
    body: C8,
    footer: _8,
  })),
  T8 = {
    xs: qo("xs"),
    sm: qo("md"),
    md: qo("lg"),
    lg: qo("2xl"),
    xl: qo("4xl"),
    full: qo("full"),
  },
  P8 = y8({ baseStyle: E8, sizes: T8, defaultProps: { size: "xs" } }),
  { definePartsStyle: A8, defineMultiStyleConfig: R8 } = ke(SR.keys),
  O8 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  M8 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  $8 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  D8 = A8({ preview: O8, input: M8, textarea: $8 }),
  I8 = R8({ baseStyle: D8 }),
  { definePartsStyle: z8, defineMultiStyleConfig: F8 } = ke(xR.keys),
  Mi = W("form-control-color"),
  L8 = {
    marginStart: "1",
    [Mi.variable]: "colors.red.500",
    _dark: { [Mi.variable]: "colors.red.300" },
    color: Mi.reference,
  },
  j8 = {
    mt: "2",
    [Mi.variable]: "colors.gray.600",
    _dark: { [Mi.variable]: "colors.whiteAlpha.600" },
    color: Mi.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  N8 = z8({
    container: { width: "100%", position: "relative" },
    requiredIndicator: L8,
    helperText: j8,
  }),
  B8 = F8({ baseStyle: N8 }),
  { definePartsStyle: V8, defineMultiStyleConfig: W8 } = ke(wR.keys),
  $i = W("form-error-color"),
  U8 = {
    [$i.variable]: "colors.red.500",
    _dark: { [$i.variable]: "colors.red.300" },
    color: $i.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  H8 = {
    marginEnd: "0.5em",
    [$i.variable]: "colors.red.500",
    _dark: { [$i.variable]: "colors.red.300" },
    color: $i.reference,
  },
  G8 = V8({ text: U8, icon: H8 }),
  K8 = W8({ baseStyle: G8 }),
  q8 = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  X8 = { baseStyle: q8 },
  Y8 = { fontFamily: "heading", fontWeight: "bold" },
  Q8 = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  Z8 = { baseStyle: Y8, sizes: Q8, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: J8, definePartsStyle: e$ } = ke(gR.keys),
  Lf = W("breadcrumb-link-decor"),
  t$ = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: Lf.reference,
    [Lf.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [Lf.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  n$ = e$({ link: t$ }),
  r$ = J8({ baseStyle: n$ }),
  o$ = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  T2 = (e) => {
    const { colorScheme: t, theme: n } = e;
    if (t === "gray")
      return {
        color: H("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: H("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: H("gray.200", "whiteAlpha.300")(e) },
      };
    const r = Gi(`${t}.200`, 0.12)(n),
      o = Gi(`${t}.200`, 0.24)(n);
    return {
      color: H(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: H(`${t}.50`, r)(e) },
      _active: { bg: H(`${t}.100`, o)(e) },
    };
  },
  i$ = (e) => {
    const { colorScheme: t } = e,
      n = H("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? n : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...bt(T2, e),
    };
  },
  a$ = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  s$ = (e) => {
    var t;
    const { colorScheme: n } = e;
    if (n === "gray") {
      const l = H("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: H("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: H("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: H("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: r = `${n}.500`,
        color: o = "white",
        hoverBg: i = `${n}.600`,
        activeBg: a = `${n}.700`,
      } = (t = a$[n]) != null ? t : {},
      s = H(r, `${n}.200`)(e);
    return {
      bg: s,
      color: H(o, "gray.800")(e),
      _hover: { bg: H(i, `${n}.300`)(e), _disabled: { bg: s } },
      _active: { bg: H(a, `${n}.400`)(e) },
    };
  },
  l$ = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: H(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: H(`${t}.700`, `${t}.500`)(e) },
    };
  },
  u$ = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  c$ = { ghost: T2, outline: i$, solid: s$, link: l$, unstyled: u$ },
  d$ = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  f$ = {
    baseStyle: o$,
    variants: c$,
    sizes: d$,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: _o, defineMultiStyleConfig: p$ } = ke(LR.keys),
  vc = W("card-bg"),
  ir = W("card-padding"),
  P2 = W("card-shadow"),
  Ru = W("card-radius"),
  A2 = W("card-border-width", "0"),
  R2 = W("card-border-color"),
  h$ = _o({
    container: {
      [vc.variable]: "colors.chakra-body-bg",
      backgroundColor: vc.reference,
      boxShadow: P2.reference,
      borderRadius: Ru.reference,
      color: "chakra-body-text",
      borderWidth: A2.reference,
      borderColor: R2.reference,
    },
    body: { padding: ir.reference, flex: "1 1 0%" },
    header: { padding: ir.reference },
    footer: { padding: ir.reference },
  }),
  m$ = {
    sm: _o({
      container: { [Ru.variable]: "radii.base", [ir.variable]: "space.3" },
    }),
    md: _o({
      container: { [Ru.variable]: "radii.md", [ir.variable]: "space.5" },
    }),
    lg: _o({
      container: { [Ru.variable]: "radii.xl", [ir.variable]: "space.7" },
    }),
  },
  v$ = {
    elevated: _o({
      container: {
        [P2.variable]: "shadows.base",
        _dark: { [vc.variable]: "colors.gray.700" },
      },
    }),
    outline: _o({
      container: {
        [A2.variable]: "1px",
        [R2.variable]: "colors.chakra-border-color",
      },
    }),
    filled: _o({ container: { [vc.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [ir.variable]: 0 },
      header: { [ir.variable]: 0 },
      footer: { [ir.variable]: 0 },
    },
  },
  g$ = p$({
    baseStyle: h$,
    variants: v$,
    sizes: m$,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  rs = qe("close-button-size"),
  Ea = qe("close-button-bg"),
  y$ = {
    w: [rs.reference],
    h: [rs.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [Ea.variable]: "colors.blackAlpha.100",
      _dark: { [Ea.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [Ea.variable]: "colors.blackAlpha.200",
      _dark: { [Ea.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: Ea.reference,
  },
  b$ = {
    lg: { [rs.variable]: "sizes.10", fontSize: "md" },
    md: { [rs.variable]: "sizes.8", fontSize: "xs" },
    sm: { [rs.variable]: "sizes.6", fontSize: "2xs" },
  },
  S$ = { baseStyle: y$, sizes: b$, defaultProps: { size: "md" } },
  { variants: x$, defaultProps: w$ } = ts,
  k$ = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: Ve.bg.reference,
    color: Ve.color.reference,
    boxShadow: Ve.shadow.reference,
  },
  C$ = { baseStyle: k$, variants: x$, defaultProps: w$ },
  _$ = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  E$ = { baseStyle: _$ },
  T$ = { opacity: 0.6, borderColor: "inherit" },
  P$ = { borderStyle: "solid" },
  A$ = { borderStyle: "dashed" },
  R$ = { solid: P$, dashed: A$ },
  O$ = { baseStyle: T$, variants: R$, defaultProps: { variant: "solid" } },
  { definePartsStyle: M$, defineMultiStyleConfig: $$ } = ke(hR.keys),
  D$ = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  I$ = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  z$ = { pt: "2", px: "4", pb: "5" },
  F$ = { fontSize: "1.25em" },
  L$ = M$({ container: D$, button: I$, panel: z$, icon: F$ }),
  j$ = $$({ baseStyle: L$ }),
  { definePartsStyle: nl, defineMultiStyleConfig: N$ } = ke(mR.keys),
  Bt = W("alert-fg"),
  mr = W("alert-bg"),
  B$ = nl({
    container: { bg: mr.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: Bt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: Bt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function Sv(e) {
  const { theme: t, colorScheme: n } = e,
    r = Gi(`${n}.200`, 0.16)(t);
  return { light: `colors.${n}.100`, dark: r };
}
var V$ = nl((e) => {
    const { colorScheme: t } = e,
      n = Sv(e);
    return {
      container: {
        [Bt.variable]: `colors.${t}.600`,
        [mr.variable]: n.light,
        _dark: { [Bt.variable]: `colors.${t}.200`, [mr.variable]: n.dark },
      },
    };
  }),
  W$ = nl((e) => {
    const { colorScheme: t } = e,
      n = Sv(e);
    return {
      container: {
        [Bt.variable]: `colors.${t}.600`,
        [mr.variable]: n.light,
        _dark: { [Bt.variable]: `colors.${t}.200`, [mr.variable]: n.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: Bt.reference,
      },
    };
  }),
  U$ = nl((e) => {
    const { colorScheme: t } = e,
      n = Sv(e);
    return {
      container: {
        [Bt.variable]: `colors.${t}.600`,
        [mr.variable]: n.light,
        _dark: { [Bt.variable]: `colors.${t}.200`, [mr.variable]: n.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: Bt.reference,
      },
    };
  }),
  H$ = nl((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [Bt.variable]: "colors.white",
        [mr.variable]: `colors.${t}.600`,
        _dark: {
          [Bt.variable]: "colors.gray.900",
          [mr.variable]: `colors.${t}.200`,
        },
        color: Bt.reference,
      },
    };
  }),
  G$ = { subtle: V$, "left-accent": W$, "top-accent": U$, solid: H$ },
  K$ = N$({
    baseStyle: B$,
    variants: G$,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: O2, defineMultiStyleConfig: q$ } = ke(vR.keys),
  Di = W("avatar-border-color"),
  os = W("avatar-bg"),
  zs = W("avatar-font-size"),
  Ki = W("avatar-size"),
  X$ = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: Di.reference,
    [Di.variable]: "white",
    _dark: { [Di.variable]: "colors.gray.800" },
  },
  Y$ = {
    bg: os.reference,
    fontSize: zs.reference,
    width: Ki.reference,
    height: Ki.reference,
    lineHeight: "1",
    [os.variable]: "colors.gray.200",
    _dark: { [os.variable]: "colors.whiteAlpha.400" },
  },
  Q$ = (e) => {
    const { name: t, theme: n } = e,
      r = t ? o6({ string: t }) : "colors.gray.400",
      o = n6(r)(n);
    let i = "white";
    return (
      o || (i = "gray.800"),
      {
        bg: os.reference,
        fontSize: zs.reference,
        color: i,
        borderColor: Di.reference,
        verticalAlign: "top",
        width: Ki.reference,
        height: Ki.reference,
        "&:not([data-loaded])": { [os.variable]: r },
        [Di.variable]: "colors.white",
        _dark: { [Di.variable]: "colors.gray.800" },
      }
    );
  },
  Z$ = { fontSize: zs.reference, lineHeight: "1" },
  J$ = O2((e) => ({
    badge: bt(X$, e),
    excessLabel: bt(Y$, e),
    container: bt(Q$, e),
    label: Z$,
  }));
function _r(e) {
  const t = e !== "100%" ? x2[e] : void 0;
  return O2({
    container: {
      [Ki.variable]: t ?? e,
      [zs.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [Ki.variable]: t ?? e,
      [zs.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var eD = {
    "2xs": _r(4),
    xs: _r(6),
    sm: _r(8),
    md: _r(12),
    lg: _r(16),
    xl: _r(24),
    "2xl": _r(32),
    full: _r("100%"),
  },
  tD = q$({ baseStyle: J$, sizes: eD, defaultProps: { size: "md" } }),
  nD = {
    Accordion: j$,
    Alert: K$,
    Avatar: tD,
    Badge: ts,
    Breadcrumb: r$,
    Button: f$,
    Checkbox: mc,
    CloseButton: S$,
    Code: C$,
    Container: E$,
    Divider: O$,
    Drawer: P8,
    Editable: I8,
    Form: B8,
    FormError: K8,
    FormLabel: X8,
    Heading: Z8,
    Input: he,
    Kbd: yM,
    Link: SM,
    List: _M,
    Menu: zM,
    Modal: KM,
    NumberInput: n8,
    PinInput: a8,
    Popover: g8,
    Progress: CO,
    Radio: FO,
    Select: UO,
    Skeleton: GO,
    SkipLink: qO,
    Slider: iM,
    Spinner: lM,
    Stat: vM,
    Switch: S6,
    Table: T6,
    Tabs: V6,
    Tag: tO,
    Textarea: pO,
    Tooltip: vO,
    Card: g$,
    Stepper: pR,
  },
  rD = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  oD = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  iD = "ltr",
  aD = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  M2 = {
    semanticTokens: rD,
    direction: iD,
    ...cR,
    components: nD,
    styles: oD,
    config: aD,
  };
function Ba(e) {
  return typeof e == "function";
}
function sD(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var lD = (e) =>
    function (...n) {
      let r = [...n],
        o = n[n.length - 1];
      return (
        NA(o) && r.length > 1 ? (r = r.slice(0, r.length - 1)) : (o = e),
        sD(...r.map((i) => (a) => Ba(i) ? i(a) : cD(a, i)))(o)
      );
    },
  uD = lD(M2);
function cD(...e) {
  return nn({}, ...e, $2);
}
function $2(e, t, n, r) {
  if ((Ba(e) || Ba(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = Ba(e) ? e(...o) : e,
        a = Ba(t) ? t(...o) : t;
      return nn({}, i, a, $2);
    };
}
function dD() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
var fD = dD();
function pD(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function hD(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var mD = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  D2 = mD(hD);
function I2(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const o = e[r];
      t(o, r, e) && (n[r] = o);
    }),
    n
  );
}
var z2 = (e) => I2(e, (t) => t != null);
function vD(e) {
  return typeof e == "function";
}
function F2(e, ...t) {
  return vD(e) ? e(...t) : e;
}
function gD(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var yD = typeof Element < "u",
  bD = typeof Map == "function",
  SD = typeof Set == "function",
  xD = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ou(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ou(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (bD && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Ou(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (SD && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (xD && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (yD && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !Ou(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var wD = function (t, n) {
  try {
    return Ou(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const kD = sm(wD);
function L2(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
    { theme: i, colorMode: a } = yP(),
    s = e ? D2(i, `components.${e}`) : void 0,
    l = r || s,
    u = nn(
      { theme: i, colorMode: a },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      z2(pD(o, ["children"]))
    ),
    c = b.useRef({});
  if (l) {
    const f = LA(l)(u);
    kD(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Zr(e, t = {}) {
  return L2(e, t);
}
function br(e, t = {}) {
  return L2(e, t);
}
var CD = new Set([
    ...EA,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  _D = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function ED(e) {
  return _D.has(e) || !CD.has(e);
}
function TD(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
function xv(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
var PD =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  AD = qw(function (e) {
    return (
      PD.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  RD = AD,
  OD = function (t) {
    return t !== "theme";
  },
  o1 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? RD : OD;
  },
  i1 = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  MD = !1,
  $D = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      e2(n, r, o),
      XT(function () {
        return t2(n, r, o);
      }),
      null
    );
  },
  DD = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = i1(t, n, r),
      l = s || o1(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p]);
      }
      var v = i2(function (g, S, h) {
        var m = (u && g.as) || o,
          y = "",
          w = [],
          C = g;
        if (g.theme == null) {
          C = {};
          for (var P in g) C[P] = g[P];
          C.theme = b.useContext(Ms);
        }
        typeof g.className == "string"
          ? (y = NT(S.registered, w, g.className))
          : g.className != null && (y = g.className + " ");
        var _ = uv(d.concat(w), S.registered, C);
        (y += S.key + "-" + _.name), a !== void 0 && (y += " " + a);
        var A = u && s === void 0 ? o1(m) : l,
          $ = {};
        for (var M in g) (u && M === "as") || (A(M) && ($[M] = g[M]));
        return (
          ($.className = y),
          h && ($.ref = h),
          b.createElement(
            b.Fragment,
            null,
            b.createElement($D, {
              cache: S,
              serialized: _,
              isStringTag: typeof m == "string",
            }),
            b.createElement(m, $)
          )
        );
      });
      return (
        (v.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = d),
        (v.__emotion_forwardProp = s),
        Object.defineProperty(v, "toString", {
          value: function () {
            return a === void 0 && MD ? "NO_COMPONENT_SELECTOR" : "." + a;
          },
        }),
        (v.withComponent = function (g, S) {
          return e(g, Io({}, n, S, { shouldForwardProp: i1(v, S, !0) })).apply(
            void 0,
            d
          );
        }),
        v
      );
    };
  },
  ID = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  gc = DD.bind();
ID.forEach(function (e) {
  gc[e] = gc(e);
});
var a1,
  zD = (a1 = gc.default) != null ? a1 : gc,
  FD =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...a } = t,
        s = I2(a, (d, f) => PA(f)),
        l = F2(e, t),
        u = TD({}, o, l, z2(s), i),
        c = y2(u)(t.theme);
      return r ? [c, r] : c;
    };
function jf(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = ED);
  const o = FD({ baseStyle: n }),
    i = zD(e, r)(o);
  return bn.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = cd();
    return bn.createElement(i, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function LD() {
  const e = new Map();
  return new Proxy(jf, {
    apply(t, n, r) {
      return jf(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, jf(n)), e.get(n);
    },
  });
}
var V = LD();
function X(e) {
  return b.forwardRef(e);
}
function j2(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: r,
    } = e,
    o = b.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = b.useContext(o);
    if (!s && t) {
      const l = new Error(n);
      throw (
        ((l.name = "ContextError"),
        (a = Error.captureStackTrace) == null || a.call(Error, l, i),
        l)
      );
    }
    return s;
  }
  return [o.Provider, i, o];
}
function jD(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
    o = b.useMemo(() => _A(n), [n]);
  return k.jsxs(ZT, { theme: o, children: [k.jsx(ND, { root: t }), r] });
}
function ND({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return k.jsx(ud, { styles: (n) => ({ [t]: n.__cssVars }) });
}
j2({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function BD(e) {
  return j2({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `,
  });
}
function VD() {
  const { colorMode: e } = cd();
  return k.jsx(ud, {
    styles: (t) => {
      const n = D2(t, "styles.global"),
        r = F2(n, { theme: t, colorMode: e });
      return r ? y2(r)(t) : void 0;
    },
  });
}
var wv = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
wv.displayName = "EnvironmentContext";
function WD({ defer: e } = {}) {
  const [, t] = b.useReducer((n) => n + 1, 0);
  return (
    or(() => {
      e && t();
    }, [e]),
    b.useContext(wv)
  );
}
function N2(e) {
  const { children: t, environment: n, disabled: r } = e,
    o = b.useRef(null),
    i = b.useMemo(
      () =>
        n || {
          getDocument: () => {
            var s, l;
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var s, l;
            return (l =
              (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [n]
    ),
    a = !r || !n;
  return k.jsxs(wv.Provider, {
    value: i,
    children: [
      t,
      a && k.jsx("span", { id: "__chakra_env", hidden: !0, ref: o }),
    ],
  });
}
N2.displayName = "EnvironmentProvider";
var UD = (e) => {
    const {
        children: t,
        colorModeManager: n,
        portalZIndex: r,
        resetScope: o,
        resetCSS: i = !0,
        theme: a = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = k.jsx(N2, { environment: s, disabled: u, children: t });
    return k.jsx(jD, {
      theme: a,
      cssVarsRoot: l,
      children: k.jsxs(c2, {
        colorModeManager: n,
        options: a.config,
        children: [
          i ? k.jsx(tP, { scope: o }) : k.jsx(eP, {}),
          !c && k.jsx(VD, {}),
          r ? k.jsx(l2, { zIndex: r, children: d }) : d,
        ],
      }),
    });
  },
  HD = (e, t) => e.find((n) => n.id === t);
function s1(e, t) {
  const n = B2(e, t),
    r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return { position: n, index: r };
}
function B2(e, t) {
  for (const [n, r] of Object.entries(e)) if (HD(r, t)) return n;
}
function GD(e) {
  const t = e.includes("right"),
    n = e.includes("left");
  let r = "center";
  return (
    t && (r = "flex-end"),
    n && (r = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: r }
  );
}
function KD(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0,
    r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: a,
  };
}
function Wr(e, t = []) {
  const n = b.useRef(e);
  return (
    b.useEffect(() => {
      n.current = e;
    }),
    b.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function qD(e, t) {
  const n = Wr(e);
  b.useEffect(() => {
    if (t == null) return;
    let r = null;
    return (
      (r = window.setTimeout(() => {
        n();
      }, t)),
      () => {
        r && window.clearTimeout(r);
      }
    );
  }, [t, n]);
}
function qi(e, t) {
  const n = b.useRef(!1),
    r = b.useRef(!1);
  b.useEffect(() => {
    if (n.current && r.current) return e();
    r.current = !0;
  }, t),
    b.useEffect(
      () => (
        (n.current = !0),
        () => {
          n.current = !1;
        }
      ),
      []
    );
}
const kv = b.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  md = b.createContext({}),
  rl = b.createContext(null),
  Cv = typeof window < "u",
  V2 = Cv ? b.useLayoutEffect : b.useEffect,
  W2 = b.createContext({ strict: !1 }),
  vd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  XD = "framerAppearId",
  U2 = "data-" + vd(XD),
  YD = { skipAnimations: !1, useManualTiming: !1 };
function QD(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(u) {
    i.has(u) && (l.schedule(u), e()), u(a);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const p = d && r ? t : n;
      return c && i.add(u), p.has(u) || p.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((a = u), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(s),
        (r = !1),
        o && ((o = !1), l.process(u));
    },
  };
  return l;
}
const Zl = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  ZD = 40;
function H2(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    a = Zl.reduce((h, m) => ((h[m] = QD(i)), h), {}),
    {
      read: s,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = a,
    p = () => {
      const h = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(h - o.timestamp, ZD), 1)),
        (o.timestamp = h),
        (o.isProcessing = !0),
        s.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(p));
    },
    v = () => {
      (n = !0), (r = !0), o.isProcessing || e(p);
    };
  return {
    schedule: Zl.reduce((h, m) => {
      const y = a[m];
      return (h[m] = (w, C = !1, P = !1) => (n || v(), y.schedule(w, C, P))), h;
    }, {}),
    cancel: (h) => {
      for (let m = 0; m < Zl.length; m++) a[Zl[m]].cancel(h);
    },
    state: o,
    steps: a,
  };
}
const { schedule: _v, cancel: RH } = H2(queueMicrotask, !1);
function yi(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const G2 = b.createContext({});
let l1 = !1;
function JD(e, t, n, r, o) {
  var i;
  const { visualElement: a } = b.useContext(md),
    s = b.useContext(W2),
    l = b.useContext(rl),
    u = b.useContext(kv).reducedMotion,
    c = b.useRef();
  (r = r || s.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const d = c.current,
    f = b.useContext(G2);
  d &&
    !d.projection &&
    o &&
    (d.type === "html" || d.type === "svg") &&
    tI(c.current, n, o, f),
    b.useInsertionEffect(() => {
      d && d.update(n, l);
    });
  const p = n[U2],
    v = b.useRef(
      !!p &&
        !window.MotionHandoffIsComplete &&
        ((i = window.MotionHasOptimisedAnimation) === null || i === void 0
          ? void 0
          : i.call(window, p))
    );
  return (
    V2(() => {
      d &&
        (d.updateFeatures(),
        _v.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    b.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        (v.current = !1),
        l1 || ((l1 = !0), queueMicrotask(eI)));
    }),
    d
  );
}
function eI() {
  window.MotionHandoffIsComplete = !0;
}
function tI(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: a,
    dragConstraints: s,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : K2(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!a || (s && yi(s)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function K2(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : K2(e.parent);
}
function nI(e, t, n) {
  return b.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : yi(n) && (n.current = r));
    },
    [t]
  );
}
function Fs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ls(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ev = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Tv = ["initial", ...Ev];
function gd(e) {
  return Ls(e.animate) || Tv.some((t) => Fs(e[t]));
}
function q2(e) {
  return !!(gd(e) || e.variants);
}
function rI(e, t) {
  if (gd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Fs(n) ? n : void 0,
      animate: Fs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function oI(e) {
  const { initial: t, animate: n } = rI(e, b.useContext(md));
  return b.useMemo(() => ({ initial: t, animate: n }), [u1(t), u1(n)]);
}
function u1(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const c1 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Xi = {};
for (const e in c1) Xi[e] = { isEnabled: (t) => c1[e].some((n) => !!t[n]) };
function iI(e) {
  for (const t in e) Xi[t] = { ...Xi[t], ...e[t] };
}
const Pv = b.createContext({}),
  aI = Symbol.for("motionComponentSymbol"),
  dt = (e) => e;
let gh = dt;
function sI({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && iI(e);
  function i(s, l) {
    let u;
    const c = { ...b.useContext(kv), ...s, layoutId: lI(s) },
      { isStatic: d } = c,
      f = oI(s),
      p = r(s, d);
    if (!d && Cv) {
      uI();
      const v = cI(c);
      (u = v.MeasureLayout),
        (f.visualElement = JD(o, p, c, t, v.ProjectionNode));
    }
    return k.jsxs(md.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? k.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(o, s, nI(p, f.visualElement, l), p, d, f.visualElement),
      ],
    });
  }
  const a = b.forwardRef(i);
  return (a[aI] = o), a;
}
function lI({ layoutId: e }) {
  const t = b.useContext(Pv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function uI(e, t) {
  b.useContext(W2).strict;
}
function cI(e) {
  const { drag: t, layout: n } = Xi;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function dI(e) {
  function t(r, o = {}) {
    return sI(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const fI = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Av(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(fI.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const yc = {};
function pI(e) {
  Object.assign(yc, e);
}
const ol = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Jr = new Set(ol);
function X2(e, { layout: t, layoutId: n }) {
  return (
    Jr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!yc[e] || e === "opacity"))
  );
}
const ct = (e) => !!(e && e.getVelocity),
  Y2 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Gr = (e, t, n) => (n > t ? t : n < e ? e : n),
  aa = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  is = { ...aa, transform: (e) => Gr(0, 1, e) },
  Jl = { ...aa, default: 1 },
  as = (e) => Math.round(e * 1e5) / 1e5,
  Rv = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  hI =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  mI =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function il(e) {
  return typeof e == "string";
}
function vI(e) {
  return e == null;
}
const al = (e) => ({
    test: (t) => il(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Tr = al("deg"),
  Nn = al("%"),
  G = al("px"),
  gI = al("vh"),
  yI = al("vw"),
  d1 = {
    ...Nn,
    parse: (e) => Nn.parse(e) / 100,
    transform: (e) => Nn.transform(e * 100),
  },
  f1 = { ...aa, transform: Math.round },
  Ov = {
    borderWidth: G,
    borderTopWidth: G,
    borderRightWidth: G,
    borderBottomWidth: G,
    borderLeftWidth: G,
    borderRadius: G,
    radius: G,
    borderTopLeftRadius: G,
    borderTopRightRadius: G,
    borderBottomRightRadius: G,
    borderBottomLeftRadius: G,
    width: G,
    maxWidth: G,
    height: G,
    maxHeight: G,
    size: G,
    top: G,
    right: G,
    bottom: G,
    left: G,
    padding: G,
    paddingTop: G,
    paddingRight: G,
    paddingBottom: G,
    paddingLeft: G,
    margin: G,
    marginTop: G,
    marginRight: G,
    marginBottom: G,
    marginLeft: G,
    rotate: Tr,
    rotateX: Tr,
    rotateY: Tr,
    rotateZ: Tr,
    scale: Jl,
    scaleX: Jl,
    scaleY: Jl,
    scaleZ: Jl,
    skew: Tr,
    skewX: Tr,
    skewY: Tr,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: is,
    originX: d1,
    originY: d1,
    originZ: G,
    zIndex: f1,
    backgroundPositionX: G,
    backgroundPositionY: G,
    fillOpacity: is,
    strokeOpacity: is,
    numOctaves: f1,
  },
  bI = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  SI = ol.length;
function xI(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < SI; i++) {
    const a = ol[i],
      s = e[a];
    if (s === void 0) continue;
    let l = !0;
    if (
      (typeof s == "number"
        ? (l = s === (a.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(s) === 0),
      !l || n)
    ) {
      const u = Y2(s, Ov[a]);
      if (!l) {
        o = !1;
        const c = bI[a] || a;
        r += `${c}(${u}) `;
      }
      n && (t[a] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
const Q2 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Z2 = Q2("--"),
  wI = Q2("var(--"),
  Mv = (e) => (wI(e) ? kI.test(e.split("/*")[0].trim()) : !1),
  kI =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function $v(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let a = !1,
    s = !1;
  for (const l in t) {
    const u = t[l];
    if (Jr.has(l)) {
      a = !0;
      continue;
    } else if (Z2(l)) {
      o[l] = u;
      continue;
    } else {
      const c = Y2(u, Ov[l]);
      l.startsWith("origin") ? ((s = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (a || n
        ? (r.transform = xI(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    s)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Dv = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function J2(e, t, n) {
  for (const r in t) !ct(t[r]) && !X2(r, n) && (e[r] = t[r]);
}
function CI({ transformTemplate: e }, t) {
  return b.useMemo(() => {
    const n = Dv();
    return $v(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function _I(e, t) {
  const n = e.style || {},
    r = {};
  return J2(r, n, e), Object.assign(r, CI(e, t)), r;
}
function EI(e, t) {
  const n = {},
    r = _I(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const TI = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function bc(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    TI.has(e)
  );
}
let ek = (e) => !bc(e);
function PI(e) {
  e && (ek = (t) => (t.startsWith("on") ? !bc(t) : e(t)));
}
try {
  PI(require("@emotion/is-prop-valid").default);
} catch {}
function AI(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((ek(o) ||
        (n === !0 && bc(o)) ||
        (!t && !bc(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function p1(e, t, n) {
  return typeof e == "string" ? e : G.transform(t + n * e);
}
function RI(e, t, n) {
  const r = p1(t, e.x, e.width),
    o = p1(n, e.y, e.height);
  return `${r} ${o}`;
}
const OI = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  MI = { offset: "strokeDashoffset", array: "strokeDasharray" };
function $I(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? OI : MI;
  e[i.offset] = G.transform(-r);
  const a = G.transform(t),
    s = G.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Iv(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if (($v(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: p, dimensions: v } = e;
  f.transform && (v && (p.transform = f.transform), delete f.transform),
    v &&
      (o !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = RI(
        v,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    a !== void 0 && $I(f, a, s, l, !1);
}
const tk = () => ({ ...Dv(), attrs: {} }),
  zv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function DI(e, t, n, r) {
  const o = b.useMemo(() => {
    const i = tk();
    return (
      Iv(i, t, zv(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    J2(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function II(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Av(n) ? DI : EI)(r, i, a, n),
      u = AI(r, typeof n == "string", e),
      c = n !== b.Fragment ? { ...u, ...l, ref: o } : {},
      { children: d } = r,
      f = b.useMemo(() => (ct(d) ? d.get() : d), [d]);
    return b.createElement(n, { ...c, children: f });
  };
}
function nk(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const rk = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ok(e, t, n, r) {
  nk(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(rk.has(o) ? o : vd(o), t.attrs[o]);
}
function Fv(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const a in o)
    (ct(o[a]) ||
      (t.style && ct(t.style[a])) ||
      X2(a, e) ||
      ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[a] = o[a]);
  return (
    n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i
  );
}
function ik(e, t, n) {
  const r = Fv(e, t, n);
  for (const o in e)
    if (ct(e[o]) || ct(t[o])) {
      const i =
        ol.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function h1(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Lv(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = h1(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = h1(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function jv(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const yh = (e) => Array.isArray(e),
  zI = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  FI = (e) => (yh(e) ? e[e.length - 1] || 0 : e);
function Mu(e) {
  const t = ct(e) ? e.get() : e;
  return zI(t) ? t.toValue() : t;
}
const ak = new Set(["opacity", "clipPath", "filter", "transform"]);
function sk(e) {
  if (Jr.has(e)) return "transform";
  if (ak.has(e)) return vd(e);
}
function yd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function bd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function LI(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  o,
  i,
  a,
  s
) {
  const l = { latestValues: NI(o, i, a, s ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(o, u, l)), l;
}
const lk = (e) => (t, n) => {
  const r = b.useContext(md),
    o = b.useContext(rl),
    i = () => LI(e, t, r, o, n);
  return n ? i() : jv(i);
};
function jI(e, t) {
  const n = sk(t);
  n && yd(e, n);
}
function m1(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = Lv(e, r[o]);
    if (i) {
      const { transitionEnd: a, transition: s, ...l } = i;
      n(l, a);
    }
  }
}
function NI(e, t, n, r, o) {
  var i;
  const a = {},
    s = [],
    l =
      r &&
      ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) ===
        void 0,
    u = o(e, {});
  for (const S in u) a[S] = Mu(u[S]);
  let { initial: c, animate: d } = e;
  const f = gd(e),
    p = q2(e);
  t &&
    p &&
    !f &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
  let v = n ? n.initial === !1 : !1;
  v = v || c === !1;
  const g = v ? d : c;
  return (
    g &&
      typeof g != "boolean" &&
      !Ls(g) &&
      m1(e, g, (S, h) => {
        for (const m in S) {
          let y = S[m];
          if (Array.isArray(y)) {
            const w = v ? y.length - 1 : 0;
            y = y[w];
          }
          y !== null && (a[m] = y);
        }
        for (const m in h) a[m] = h[m];
      }),
    l &&
      (d &&
        c !== !1 &&
        !Ls(d) &&
        m1(e, d, (S) => {
          for (const h in S) jI(s, h);
        }),
      s.length && (a.willChange = s.join(","))),
    a
  );
}
const {
    schedule: ye,
    cancel: vr,
    state: tt,
    steps: Nf,
  } = H2(typeof requestAnimationFrame < "u" ? requestAnimationFrame : dt, !0),
  BI = {
    useVisualState: lk({
      scrapeMotionValuesFromProps: ik,
      createRenderState: tk,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ye.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ye.render(() => {
            Iv(n, r, zv(t.tagName), e.transformTemplate), ok(t, n);
          });
      },
    }),
  },
  VI = {
    useVisualState: lk({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: Fv,
      createRenderState: Dv,
    }),
  };
function WI(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Av(e) ? BI : VI),
    preloadedFeatures: n,
    useRender: II(t),
    createVisualElement: r,
    Component: e,
  };
}
function nr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const uk = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Sd(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const UI = (e) => (t) => uk(t) && e(t, Sd(t));
function ar(e, t, n, r) {
  return nr(e, t, UI(n), r);
}
const HI = (e, t) => (n) => t(e(n)),
  sr = (...e) => e.reduce(HI);
function ck(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const v1 = ck("dragHorizontal"),
  g1 = ck("dragVertical");
function dk(e) {
  let t = !1;
  if (e === "y") t = g1();
  else if (e === "x") t = v1();
  else {
    const n = v1(),
      r = g1();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function fk() {
  const e = dk(!0);
  return e ? (e(), !1) : !0;
}
class eo {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function y1(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    o = (i, a) => {
      if (i.pointerType === "touch" || fk()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = s[r];
      l && ye.postRender(() => l(i, a));
    };
  return ar(e.current, n, o, { passive: !e.getProps()[r] });
}
class GI extends eo {
  mount() {
    this.unmount = sr(y1(this.node, !0), y1(this.node, !1));
  }
  unmount() {}
}
class KI extends eo {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = sr(
      nr(this.node.current, "focus", () => this.onFocus()),
      nr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const pk = (e, t) => (t ? (e === t ? !0 : pk(e, t.parentElement)) : !1);
function Bf(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Sd(n));
}
class qI extends eo {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = dt),
      (this.removeEndListeners = dt),
      (this.removeAccessibleListeners = dt),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = ar(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                f = !d && !pk(this.node.current, s.target) ? c : u;
              f && ye.update(() => f(s, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = ar(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = sr(i, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                Bf("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ye.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = nr(this.node.current, "keyup", a)),
              Bf("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = nr(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Bf("cancel", (i, a) => this.cancelPress(i, a));
          },
          o = nr(this.node.current, "blur", r);
        this.removeAccessibleListeners = sr(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ye.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !fk()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ye.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = ar(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = nr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = sr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const bh = new WeakMap(),
  Vf = new WeakMap(),
  XI = (e) => {
    const t = bh.get(e.target);
    t && t(e);
  },
  YI = (e) => {
    e.forEach(XI);
  };
function QI({ root: e, ...t }) {
  const n = e || document;
  Vf.has(n) || Vf.set(n, {});
  const r = Vf.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(YI, { root: e, ...t })), r[o];
}
function ZI(e, t, n) {
  const r = QI(t);
  return (
    bh.set(e, n),
    r.observe(e),
    () => {
      bh.delete(e), r.unobserve(e);
    }
  );
}
const JI = { some: 0, all: 1 };
class e9 extends eo {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : JI[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return ZI(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(t9(t, n)) && this.startObserver();
  }
  unmount() {}
}
function t9({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const n9 = {
  inView: { Feature: e9 },
  tap: { Feature: qI },
  focus: { Feature: KI },
  hover: { Feature: GI },
};
function hk(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function xd(e, t, n) {
  const r = e.getProps();
  return Lv(r, t, n !== void 0 ? n : r.custom, e);
}
const lr = (e) => e * 1e3,
  ur = (e) => e / 1e3,
  r9 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  o9 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  i9 = { type: "keyframes", duration: 0.8 },
  a9 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  s9 = (e, { keyframes: t }) =>
    t.length > 2
      ? i9
      : Jr.has(e)
      ? e.startsWith("scale")
        ? o9(t[1])
        : r9
      : a9;
function l9({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Nv(e, t) {
  return e[t] || e.default || e;
}
const u9 = (e) => e !== null;
function wd(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(u9),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const mk = (e) => /^0[^.\s]+$/u.test(e);
function c9(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || mk(e)
    : !0;
}
const vk = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  d9 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function f9(e) {
  const t = d9.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function gk(e, t, n = 1) {
  const [r, o] = f9(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return vk(a) ? parseFloat(a) : a;
  }
  return Mv(o) ? gk(o, t, n + 1) : o;
}
const p9 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  b1 = (e) => e === aa || e === G,
  S1 = (e, t) => parseFloat(e.split(", ")[t]),
  x1 =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return S1(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? S1(i[1], e) : 0;
      }
    },
  h9 = new Set(["x", "y", "z"]),
  m9 = ol.filter((e) => !h9.has(e));
function v9(e) {
  const t = [];
  return (
    m9.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Yi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: x1(4, 13),
  y: x1(5, 14),
};
Yi.translateX = Yi.x;
Yi.translateY = Yi.y;
const yk = (e) => (t) => t.test(e),
  g9 = { test: (e) => e === "auto", parse: (e) => e },
  bk = [aa, G, Nn, Tr, yI, gI, g9],
  w1 = (e) => bk.find(yk(e)),
  Eo = new Set();
let Sh = !1,
  xh = !1;
function Sk() {
  if (xh) {
    const e = Array.from(Eo).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = v9(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, a]) => {
            var s;
            (s = r.getValue(i)) === null || s === void 0 || s.set(a);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (xh = !1), (Sh = !1), Eo.forEach((e) => e.complete()), Eo.clear();
}
function xk() {
  Eo.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (xh = !0);
  });
}
function y9() {
  xk(), Sk();
}
class Bv {
  constructor(t, n, r, o, i, a = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = a);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Eo.add(this),
          Sh || ((Sh = !0), ye.read(xk), ye.resolveKeyframes(Sk)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const a = o == null ? void 0 : o.get(),
            s = t[t.length - 1];
          if (a !== void 0) t[0] = a;
          else if (r && n) {
            const l = r.readValue(n, s);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = s), o && a === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Eo.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Eo.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Vv = (e, t) => (n) =>
    !!(
      (il(n) && mI.test(n) && n.startsWith(e)) ||
      (t && !vI(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  wk = (e, t, n) => (r) => {
    if (!il(r)) return r;
    const [o, i, a, s] = r.match(Rv);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  b9 = (e) => Gr(0, 255, e),
  Wf = { ...aa, transform: (e) => Math.round(b9(e)) },
  bo = {
    test: Vv("rgb", "red"),
    parse: wk("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Wf.transform(e) +
      ", " +
      Wf.transform(t) +
      ", " +
      Wf.transform(n) +
      ", " +
      as(is.transform(r)) +
      ")",
  };
function S9(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const wh = { test: Vv("#"), parse: S9, transform: bo.transform },
  bi = {
    test: Vv("hsl", "hue"),
    parse: wk("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Nn.transform(as(t)) +
      ", " +
      Nn.transform(as(n)) +
      ", " +
      as(is.transform(r)) +
      ")",
  },
  lt = {
    test: (e) => bo.test(e) || wh.test(e) || bi.test(e),
    parse: (e) =>
      bo.test(e) ? bo.parse(e) : bi.test(e) ? bi.parse(e) : wh.parse(e),
    transform: (e) =>
      il(e) ? e : e.hasOwnProperty("red") ? bo.transform(e) : bi.transform(e),
  };
function x9(e) {
  var t, n;
  return (
    isNaN(e) &&
    il(e) &&
    (((t = e.match(Rv)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(hI)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const kk = "number",
  Ck = "color",
  w9 = "var",
  k9 = "var(",
  k1 = "${}",
  C9 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function js(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const s = t
    .replace(
      C9,
      (l) => (
        lt.test(l)
          ? (r.color.push(i), o.push(Ck), n.push(lt.parse(l)))
          : l.startsWith(k9)
          ? (r.var.push(i), o.push(w9), n.push(l))
          : (r.number.push(i), o.push(kk), n.push(parseFloat(l))),
        ++i,
        k1
      )
    )
    .split(k1);
  return { values: n, split: s, indexes: r, types: o };
}
function _k(e) {
  return js(e).values;
}
function Ek(e) {
  const { split: t, types: n } = js(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (((i += t[a]), o[a] !== void 0)) {
        const s = n[a];
        s === kk
          ? (i += as(o[a]))
          : s === Ck
          ? (i += lt.transform(o[a]))
          : (i += o[a]);
      }
    return i;
  };
}
const _9 = (e) => (typeof e == "number" ? 0 : e);
function E9(e) {
  const t = _k(e);
  return Ek(e)(t.map(_9));
}
const Kr = {
    test: x9,
    parse: _k,
    createTransformer: Ek,
    getAnimatableNone: E9,
  },
  T9 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function P9(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Rv) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = T9.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const A9 = /\b([a-z-]*)\(.*?\)/gu,
  kh = {
    ...Kr,
    getAnimatableNone: (e) => {
      const t = e.match(A9);
      return t ? t.map(P9).join(" ") : e;
    },
  },
  R9 = {
    ...Ov,
    color: lt,
    backgroundColor: lt,
    outlineColor: lt,
    fill: lt,
    stroke: lt,
    borderColor: lt,
    borderTopColor: lt,
    borderRightColor: lt,
    borderBottomColor: lt,
    borderLeftColor: lt,
    filter: kh,
    WebkitFilter: kh,
  },
  Wv = (e) => R9[e];
function Tk(e, t) {
  let n = Wv(e);
  return (
    n !== kh && (n = Kr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const O9 = new Set(["auto", "none", "0"]);
function M9(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !O9.has(i) && js(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = Tk(n, o);
}
class Pk extends Bv {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Mv(u))) {
        const c = gk(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !p9.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      a = w1(o),
      s = w1(i);
    if (a !== s)
      if (b1(a) && b1(s))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) c9(t[o]) && r.push(o);
    r.length && M9(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Yi[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const a = o.length - 1,
      s = o[a];
    (o[a] = Yi[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ak(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let $u;
function $9() {
  $u = void 0;
}
const cr = {
    now: () => (
      $u === void 0 &&
        cr.set(
          tt.isProcessing || YD.useManualTiming
            ? tt.timestamp
            : performance.now()
        ),
      $u
    ),
    set: (e) => {
      ($u = e), queueMicrotask($9);
    },
  },
  C1 = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Kr.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function D9(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function I9(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    a = C1(o, t),
    s = C1(i, t);
  return !a || !s ? !1 : D9(e) || (n === "spring" && r);
}
const z9 = 40;
class Rk {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: a = "loop",
    ...s
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = cr.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: a,
        ...s,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > z9
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && y9(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = cr.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: a,
      onComplete: s,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !I9(t, r, o, i))
      if (a) this.options.duration = 0;
      else {
        l == null || l(wd(t, this.options, n)),
          s == null || s(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Ok(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const F9 = 5;
function Mk(e, t, n) {
  const r = Math.max(t - F9, 0);
  return Ok(n - e(r), t - r);
}
const Uf = 0.001,
  L9 = 0.01,
  j9 = 10,
  N9 = 0.05,
  B9 = 1;
function V9({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    a = 1 - t;
  (a = Gr(N9, B9, a)),
    (e = Gr(L9, j9, ur(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            p = Ch(u, a),
            v = Math.exp(-d);
          return Uf - (f / p) * v;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * n + n,
            p = Math.pow(a, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            g = Ch(Math.pow(u, 2), a);
          return ((-o(u) + Uf > 0 ? -1 : 1) * ((f - p) * v)) / g;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Uf + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = U9(o, i, s);
  if (((e = lr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const W9 = 12;
function U9(e, t, n) {
  let r = n;
  for (let o = 1; o < W9; o++) r = r - e(r) / t(r);
  return r;
}
function Ch(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const H9 = ["duration", "bounce"],
  G9 = ["stiffness", "damping", "mass"];
function _1(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function K9(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!_1(e, G9) && _1(e, H9)) {
    const n = V9(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function $k({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = K9({ ...r, velocity: -ur(r.velocity || 0) }),
    p = d || 0,
    v = l / (2 * Math.sqrt(s * u)),
    g = i - o,
    S = ur(Math.sqrt(s / u)),
    h = Math.abs(g) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let m;
  if (v < 1) {
    const y = Ch(S, v);
    m = (w) => {
      const C = Math.exp(-v * S * w);
      return (
        i - C * (((p + v * S * g) / y) * Math.sin(y * w) + g * Math.cos(y * w))
      );
    };
  } else if (v === 1) m = (y) => i - Math.exp(-S * y) * (g + (p + S * g) * y);
  else {
    const y = S * Math.sqrt(v * v - 1);
    m = (w) => {
      const C = Math.exp(-v * S * w),
        P = Math.min(y * w, 300);
      return (
        i - (C * ((p + v * S * g) * Math.sinh(P) + y * g * Math.cosh(P))) / y
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (y) => {
      const w = m(y);
      if (f) a.done = y >= c;
      else {
        let C = 0;
        v < 1 && (C = y === 0 ? lr(p) : Mk(m, y, w));
        const P = Math.abs(C) <= n,
          _ = Math.abs(i - w) <= t;
        a.done = P && _;
      }
      return (a.value = a.done ? i : w), a;
    },
  };
}
function E1({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    p = (A) => (s !== void 0 && A < s) || (l !== void 0 && A > l),
    v = (A) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - A) < Math.abs(l - A)
        ? s
        : l;
  let g = n * t;
  const S = d + g,
    h = a === void 0 ? S : a(S);
  h !== S && (g = h - d);
  const m = (A) => -g * Math.exp(-A / r),
    y = (A) => h + m(A),
    w = (A) => {
      const $ = m(A),
        M = y(A);
      (f.done = Math.abs($) <= u), (f.value = f.done ? h : M);
    };
  let C, P;
  const _ = (A) => {
    p(f.value) &&
      ((C = A),
      (P = $k({
        keyframes: [f.value, v(f.value)],
        velocity: Mk(y, A, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    _(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let $ = !1;
        return (
          !P && C === void 0 && (($ = !0), w(A), _(A)),
          C !== void 0 && A >= C ? P.next(A - C) : (!$ && w(A), f)
        );
      },
    }
  );
}
const Dk = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  q9 = 1e-7,
  X9 = 12;
function Y9(e, t, n, r, o) {
  let i,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (i = Dk(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > q9 && ++s < X9);
  return a;
}
function sl(e, t, n, r) {
  if (e === t && n === r) return dt;
  const o = (i) => Y9(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Dk(o(i), t, r));
}
const Q9 = sl(0.42, 0, 1, 1),
  Z9 = sl(0, 0, 0.58, 1),
  Ik = sl(0.42, 0, 0.58, 1),
  J9 = (e) => Array.isArray(e) && typeof e[0] != "number",
  zk = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Fk = (e) => (t) => 1 - e(1 - t),
  Uv = (e) => 1 - Math.sin(Math.acos(e)),
  Lk = Fk(Uv),
  e7 = zk(Uv),
  jk = sl(0.33, 1.53, 0.69, 0.99),
  Hv = Fk(jk),
  t7 = zk(Hv),
  n7 = (e) =>
    (e *= 2) < 1 ? 0.5 * Hv(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  T1 = {
    linear: dt,
    easeIn: Q9,
    easeInOut: Ik,
    easeOut: Z9,
    circIn: Uv,
    circInOut: e7,
    circOut: Lk,
    backIn: Hv,
    backInOut: t7,
    backOut: jk,
    anticipate: n7,
  },
  P1 = (e) => {
    if (Array.isArray(e)) {
      gh(e.length === 4);
      const [t, n, r, o] = e;
      return sl(t, n, r, o);
    } else if (typeof e == "string") return gh(T1[e] !== void 0), T1[e];
    return e;
  },
  Ns = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Me = (e, t, n) => e + (t - e) * n;
function Hf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function r7({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (o = Hf(l, s, e + 1 / 3)), (i = Hf(l, s, e)), (a = Hf(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
function Sc(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Gf = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  o7 = [wh, bo, bi],
  i7 = (e) => o7.find((t) => t.test(e));
function A1(e) {
  const t = i7(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === bi && (n = r7(n)), n;
}
const R1 = (e, t) => {
    const n = A1(e),
      r = A1(t);
    if (!n || !r) return Sc(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = Gf(n.red, r.red, i)),
      (o.green = Gf(n.green, r.green, i)),
      (o.blue = Gf(n.blue, r.blue, i)),
      (o.alpha = Me(n.alpha, r.alpha, i)),
      bo.transform(o)
    );
  },
  _h = new Set(["none", "hidden"]);
function a7(e, t) {
  return _h.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function s7(e, t) {
  return (n) => Me(e, t, n);
}
function Gv(e) {
  return typeof e == "number"
    ? s7
    : typeof e == "string"
    ? Mv(e)
      ? Sc
      : lt.test(e)
      ? R1
      : c7
    : Array.isArray(e)
    ? Nk
    : typeof e == "object"
    ? lt.test(e)
      ? R1
      : l7
    : Sc;
}
function Nk(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, a) => Gv(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++) n[a] = o[a](i);
    return n;
  };
}
function l7(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Gv(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function u7(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const a = t.types[i],
      s = e.indexes[a][o[a]],
      l = (n = e.values[s]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[a]++;
  }
  return r;
}
const c7 = (e, t) => {
  const n = Kr.createTransformer(t),
    r = js(e),
    o = js(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (_h.has(e) && !o.values.length) || (_h.has(t) && !r.values.length)
      ? a7(e, t)
      : sr(Nk(u7(r, o), o.values), n)
    : Sc(e, t);
};
function Bk(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Me(e, t, n)
    : Gv(e)(e, t);
}
function d7(e, t, n) {
  const r = [],
    o = n || Bk,
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || dt : t;
      s = sr(l, s);
    }
    r.push(s);
  }
  return r;
}
function f7(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((gh(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = d7(t, r, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Ns(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(Gr(e[0], e[i - 1], u)) : l;
}
function p7(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Ns(0, t, r);
    e.push(Me(n, 1, o));
  }
}
function h7(e) {
  const t = [0];
  return p7(t, e.length - 1), t;
}
function m7(e, t) {
  return e.map((n) => n * t);
}
function v7(e, t) {
  return e.map(() => t || Ik).splice(0, e.length - 1);
}
function xc({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = J9(r) ? r.map(P1) : P1(r),
    i = { done: !1, value: t[0] },
    a = m7(n && n.length === t.length ? n : h7(t), e),
    s = f7(a, t, { ease: Array.isArray(o) ? o : v7(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
const O1 = 2e4;
function g7(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < O1; ) (t += n), (r = e.next(t));
  return t >= O1 ? 1 / 0 : t;
}
const y7 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ye.update(t, !0),
      stop: () => vr(t),
      now: () => (tt.isProcessing ? tt.timestamp : cr.now()),
    };
  },
  b7 = { decay: E1, inertia: E1, tween: xc, keyframes: xc, spring: $k },
  S7 = (e) => e / 100;
class Kv extends Rk {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      a = (o == null ? void 0 : o.KeyframeResolver) || Bv,
      s = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new a(i, s, n, r, o)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: a = 0,
      } = this.options,
      s = b7[n] || xc;
    let l, u;
    s !== xc &&
      typeof t[0] != "number" &&
      ((l = sr(S7, Bk(t[0], t[1]))), (t = [0, 100]));
    const c = s({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = s({ ...this.options, keyframes: [...t].reverse(), velocity: -a })),
      c.calculatedDuration === null && (c.calculatedDuration = g7(c));
    const { calculatedDuration: d } = c,
      f = d + o,
      p = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: p,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: A } = this.options;
      return { done: !0, value: A[A.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: a,
      mapPercentToKeyframes: s,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: p,
      repeatType: v,
      repeatDelay: g,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const h = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? h < 0 : h > c;
    (this.currentTime = Math.max(h, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let y = this.currentTime,
      w = i;
    if (p) {
      const A = Math.min(this.currentTime, c) / d;
      let $ = Math.floor(A),
        M = A % 1;
      !M && A >= 1 && (M = 1),
        M === 1 && $--,
        ($ = Math.min($, p + 1)),
        !!($ % 2) &&
          (v === "reverse"
            ? ((M = 1 - M), g && (M -= g / d))
            : v === "mirror" && (w = a)),
        (y = Gr(0, 1, M) * d);
    }
    const C = m ? { done: !1, value: l[0] } : w.next(y);
    s && (C.value = s(C.value));
    let { done: P } = C;
    !m &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const _ =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      _ && o !== void 0 && (C.value = wd(l, this.options, o)),
      S && S(C.value),
      _ && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ur(t.calculatedDuration) : 0;
  }
  get time() {
    return ur(this.currentTime);
  }
  set time(t) {
    (t = lr(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = ur(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = y7, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Vk = (e) => Array.isArray(e) && typeof e[0] == "number";
function Wk(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in qv) ||
    Vk(e) ||
    (Array.isArray(e) && e.every(Wk))
  );
}
const Va = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  qv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Va([0, 0.65, 0.55, 1]),
    circOut: Va([0.55, 0, 1, 0.45]),
    backIn: Va([0.31, 0.01, 0.66, -0.59]),
    backOut: Va([0.33, 1.53, 0.69, 0.99]),
  };
function x7(e) {
  return Uk(e) || qv.easeOut;
}
function Uk(e) {
  if (e) return Vk(e) ? Va(e) : Array.isArray(e) ? e.map(x7) : qv[e];
}
function w7(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Uk(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
const k7 = Ak(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  wc = 10,
  C7 = 2e4;
function _7(e) {
  return e.type === "spring" || !Wk(e.ease);
}
function E7(e, t) {
  const n = new Kv({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < C7; ) (r = n.sample(i)), o.push(r.value), (i += wc);
  return { times: void 0, keyframes: o, duration: i - wc, ease: "linear" };
}
class M1 extends Rk {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new Pk(
      i,
      (a, s) => this.onKeyframesResolved(a, s),
      n,
      r,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: a,
      type: s,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (_7(this.options)) {
      const {
          onComplete: f,
          onUpdate: p,
          motionValue: v,
          element: g,
          ...S
        } = this.options,
        h = E7(t, S);
      (t = h.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = h.duration),
        (i = h.times),
        (a = h.ease),
        (s = "keyframes");
    }
    const d = w7(l.owner.current, u, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: a,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(wd(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: o, times: i, type: s, ease: a, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ur(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ur(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = lr(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return dt;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return dt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: a,
      times: s,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...p
        } = this.options,
        v = new Kv({
          ...p,
          keyframes: r,
          duration: o,
          type: i,
          ease: a,
          times: s,
          isGenerator: !0,
        }),
        g = lr(this.time);
      u.setWithVelocity(v.sample(g - wc).value, v.sample(g).value, wc);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: a,
      type: s,
    } = t;
    return (
      k7() &&
      r &&
      ak.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      a !== 0 &&
      s !== "inertia"
    );
  }
}
function T7(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t,
      a = (o === null ? 0 : o.value) / 100;
    n !== a && e(a), (n = a);
  };
  return ye.update(r, !0), () => vr(r);
}
const P7 = Ak(() => window.ScrollTimeline !== void 0);
class A7 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (P7() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          T7((o) => {
            r.time = r.duration * o;
          }, t)
        );
    });
    return () => {
      n.forEach((r, o) => {
        r && r(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Xv =
  (e, t, n, r = {}, o, i, a) =>
  (s) => {
    const l = Nv(r, e) || {},
      u = l.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - lr(u);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -c,
      onUpdate: (p) => {
        t.set(p), l.onUpdate && l.onUpdate(p);
      },
      onComplete: () => {
        s(), l.onComplete && l.onComplete(), a && a();
      },
      onStop: a,
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    l9(l) || (d = { ...d, ...s9(e, d) }),
      d.duration && (d.duration = lr(d.duration)),
      d.repeatDelay && (d.repeatDelay = lr(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      f && !i && t.get() !== void 0)
    ) {
      const p = wd(d.keyframes, l);
      if (p !== void 0)
        return (
          ye.update(() => {
            d.onUpdate(p), d.onComplete();
          }),
          new A7([])
        );
    }
    return !i && M1.supports(d) ? new M1(d) : new Kv(d);
  };
class Yv {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return yd(this.subscriptions, t), () => bd(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const $1 = 30,
  R7 = (e) => !isNaN(parseFloat(e));
class Hk {
  constructor(t, n = {}) {
    (this.version = "11.3.28"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = cr.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = cr.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = R7(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Yv());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ye.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = cr.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > $1
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, $1);
    return Ok(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Bs(e, t) {
  return new Hk(e, t);
}
function O7(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Bs(n));
}
function M7(e, t) {
  const n = xd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = FI(i[a]);
    O7(e, a, s);
  }
}
function Gk(e) {
  return e.getProps()[U2];
}
class $7 extends Hk {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map());
  }
  add(t) {
    const n = sk(t);
    if (!n) return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let o = !1;
    return () => {
      if (o) return;
      o = !0;
      const i = this.counts.get(n) - 1;
      this.counts.set(n, i), i === 0 && (bd(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
function D7(e) {
  return !!(ct(e) && e.add);
}
function Eh(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new $7("auto")), e.addValue("willChange", r)),
    D7(r))
  )
    return r.add(t);
}
function I7({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Kk(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: a = e.getDefaultTransition(), transitionEnd: s, ...l } = t;
  r && (a = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      p = l[d];
    if (p === void 0 || (c && I7(c, d))) continue;
    const v = { delay: n, ...Nv(a || {}, d) };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const h = Gk(e);
      if (h) {
        const m = window.MotionHandoffAnimation(h, d, ye);
        m !== null && ((v.startTime = m), (g = !0));
      }
    }
    f.start(
      Xv(
        d,
        f,
        p,
        e.shouldReduceMotion && Jr.has(d) ? { type: !1 } : v,
        e,
        g,
        Eh(e, d)
      )
    );
    const S = f.animation;
    S && u.push(S);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        ye.update(() => {
          s && M7(e, s);
        });
      }),
    u
  );
}
function Th(e, t, n = {}) {
  var r;
  const o = xd(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const a = o ? () => Promise.all(Kk(e, o, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return z7(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [a, s] : [s, a];
    return u().then(() => c());
  } else return Promise.all([a(), s(n.delay)]);
}
function z7(e, t, n = 0, r = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(F7)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            Th(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function F7(e, t) {
  return e.sortNodePosition(t);
}
function L7(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Th(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Th(e, t, n);
  else {
    const o = typeof t == "function" ? xd(e, t, n.custom) : t;
    r = Promise.all(Kk(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const j7 = [...Ev].reverse(),
  N7 = Ev.length;
function B7(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => L7(e, n, r)));
}
function V7(e) {
  let t = B7(e),
    n = D1(),
    r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = xd(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: p, transitionEnd: v, ...g } = f;
      u = { ...u, ...g, ...v };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function a(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let p = {},
      v = 1 / 0;
    for (let S = 0; S < N7; S++) {
      const h = j7[S],
        m = n[h],
        y = u[h] !== void 0 ? u[h] : c[h],
        w = Fs(y),
        C = h === l ? m.isActive : null;
      C === !1 && (v = S);
      let P = y === c[h] && y !== u[h] && w;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (m.protectedKeys = { ...p }),
        (!m.isActive && C === null) ||
          (!y && !m.prevProp) ||
          Ls(y) ||
          typeof y == "boolean")
      )
        continue;
      let A =
          W7(m.prevProp, y) ||
          (h === l && m.isActive && !P && w) ||
          (S > v && w),
        $ = !1;
      const M = Array.isArray(y) ? y : [y];
      let L = M.reduce(o(h), {});
      C === !1 && (L = {});
      const { prevResolvedValues: Y = {} } = m,
        Q = { ...Y, ...L },
        ue = (J) => {
          (A = !0),
            f.has(J) && (($ = !0), f.delete(J)),
            (m.needsAnimating[J] = !0);
          const q = e.getValue(J);
          q && (q.liveStyle = !1);
        };
      for (const J in Q) {
        const q = L[J],
          I = Y[J];
        if (p.hasOwnProperty(J)) continue;
        let D = !1;
        yh(q) && yh(I) ? (D = !hk(q, I)) : (D = q !== I),
          D
            ? q != null
              ? ue(J)
              : f.add(J)
            : q !== void 0 && f.has(J)
            ? ue(J)
            : (m.protectedKeys[J] = !0);
      }
      (m.prevProp = y),
        (m.prevResolvedValues = L),
        m.isActive && (p = { ...p, ...L }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          (!P || $) &&
          d.push(...M.map((J) => ({ animation: J, options: { type: h } })));
    }
    if (f.size) {
      const S = {};
      f.forEach((h) => {
        const m = e.getBaseTarget(h),
          y = e.getValue(h);
        y && (y.liveStyle = !0), (S[h] = m ?? null);
      }),
        d.push({ animation: S });
    }
    let g = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(d) : Promise.resolve()
    );
  }
  function s(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var p;
        return (p = f.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = a(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = D1()), (r = !0);
    },
  };
}
function W7(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hk(t, e) : !1;
}
function so(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function D1() {
  return {
    animate: so(!0),
    whileInView: so(),
    whileHover: so(),
    whileTap: so(),
    whileDrag: so(),
    whileFocus: so(),
    exit: so(),
  };
}
class U7 extends eo {
  constructor(t) {
    super(t), t.animationState || (t.animationState = V7(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ls(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let H7 = 0;
class G7 extends eo {
  constructor() {
    super(...arguments), (this.id = H7++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const K7 = { animation: { Feature: U7 }, exit: { Feature: G7 } },
  I1 = (e, t) => Math.abs(e - t);
function q7(e, t) {
  const n = I1(e.x, t.x),
    r = I1(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class qk {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = qf(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          p = q7(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !p) return;
        const { point: v } = d,
          { timestamp: g } = tt;
        this.history.push({ ...v, timestamp: g });
        const { onStart: S, onMove: h } = this.handlers;
        f ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Kf(f, this.transformPagePoint)),
          ye.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: p, onSessionEnd: v, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = qf(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Kf(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && p && p(d, S), v && v(d, S);
      }),
      !uk(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const a = Sd(t),
      s = Kf(a, this.transformPagePoint),
      { point: l } = s,
      { timestamp: u } = tt;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, qf(s, this.history)),
      (this.removeListeners = sr(
        ar(this.contextWindow, "pointermove", this.handlePointerMove),
        ar(this.contextWindow, "pointerup", this.handlePointerUp),
        ar(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), vr(this.updatePoint);
  }
}
function Kf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function z1(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function qf({ point: e }, t) {
  return {
    point: e,
    delta: z1(e, Xk(t)),
    offset: z1(e, X7(t)),
    velocity: Y7(t, 0.1),
  };
}
function X7(e) {
  return e[0];
}
function Xk(e) {
  return e[e.length - 1];
}
function Y7(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = Xk(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > lr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = ur(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
const Yk = 1e-4,
  Q7 = 1 - Yk,
  Z7 = 1 + Yk,
  Qk = 0.01,
  J7 = 0 - Qk,
  ez = 0 + Qk;
function Ut(e) {
  return e.max - e.min;
}
function tz(e, t, n) {
  return Math.abs(e - t) <= n;
}
function F1(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Me(t.min, t.max, e.origin)),
    (e.scale = Ut(n) / Ut(t)),
    (e.translate = Me(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Q7 && e.scale <= Z7) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= J7 && e.translate <= ez) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function ss(e, t, n, r) {
  F1(e.x, t.x, n.x, r ? r.originX : void 0),
    F1(e.y, t.y, n.y, r ? r.originY : void 0);
}
function L1(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ut(t));
}
function nz(e, t, n) {
  L1(e.x, t.x, n.x), L1(e.y, t.y, n.y);
}
function j1(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ut(t));
}
function ls(e, t, n) {
  j1(e.x, t.x, n.x), j1(e.y, t.y, n.y);
}
function rz(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Me(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Me(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function N1(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function oz(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: N1(e.x, n, o), y: N1(e.y, t, r) };
}
function B1(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function iz(e, t) {
  return { x: B1(e.x, t.x), y: B1(e.y, t.y) };
}
function az(e, t) {
  let n = 0.5;
  const r = Ut(e),
    o = Ut(t);
  return (
    o > r
      ? (n = Ns(t.min, t.max - r, e.min))
      : r > o && (n = Ns(e.min, e.max - o, t.min)),
    Gr(0, 1, n)
  );
}
function sz(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ph = 0.35;
function lz(e = Ph) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ph),
    { x: V1(e, "left", "right"), y: V1(e, "top", "bottom") }
  );
}
function V1(e, t, n) {
  return { min: W1(e, t), max: W1(e, n) };
}
function W1(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const U1 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Si = () => ({ x: U1(), y: U1() }),
  H1 = () => ({ min: 0, max: 0 }),
  je = () => ({ x: H1(), y: H1() });
function Zt(e) {
  return [e("x"), e("y")];
}
function Zk({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function uz({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function cz(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Xf(e) {
  return e === void 0 || e === 1;
}
function Ah({ scale: e, scaleX: t, scaleY: n }) {
  return !Xf(e) || !Xf(t) || !Xf(n);
}
function co(e) {
  return (
    Ah(e) ||
    Jk(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Jk(e) {
  return G1(e.x) || G1(e.y);
}
function G1(e) {
  return e && e !== "0%";
}
function kc(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function K1(e, t, n, r, o) {
  return o !== void 0 && (e = kc(e, o, r)), kc(e, n, r) + t;
}
function Rh(e, t = 0, n = 1, r, o) {
  (e.min = K1(e.min, t, n, r, o)), (e.max = K1(e.max, t, n, r, o));
}
function eC(e, { x: t, y: n }) {
  Rh(e.x, t.translate, t.scale, t.originPoint),
    Rh(e.y, n.translate, n.scale, n.originPoint);
}
const q1 = 0.999999999999,
  X1 = 1.0000000000001;
function dz(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = n[s]), (a = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        wi(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), eC(e, a)),
      r && co(i.latestValues) && wi(e, i.latestValues));
  }
  t.x < X1 && t.x > q1 && (t.x = 1), t.y < X1 && t.y > q1 && (t.y = 1);
}
function xi(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Y1(e, t, n, r, o = 0.5) {
  const i = Me(e.min, e.max, o);
  Rh(e, t, n, i, r);
}
function wi(e, t) {
  Y1(e.x, t.x, t.scaleX, t.scale, t.originX),
    Y1(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function tC(e, t) {
  return Zk(cz(e.getBoundingClientRect(), t));
}
function fz(e, t, n) {
  const r = tC(e, n),
    { scroll: o } = t;
  return o && (xi(r.x, o.offset.x), xi(r.y, o.offset.y)), r;
}
const nC = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  pz = new WeakMap();
class hz {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = je()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Sd(c, "page").point);
      },
      i = (c, d) => {
        var f;
        const { drag: p, dragPropagation: v, onDragStart: g } = this.getProps();
        if (
          p &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = dk(p)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Zt((h) => {
            let m = this.getAxisMotionValue(h).get() || 0;
            if (Nn.test(m)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const w = y.layout.layoutBox[h];
                w && (m = Ut(w) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[h] = m;
          }),
          g && ye.postRender(() => g(c, d)),
          (f = this.removeWillChange) === null || f === void 0 || f.call(this),
          (this.removeWillChange = Eh(this.visualElement, "transform"));
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: p,
          onDirectionLock: v,
          onDrag: g,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: S } = d;
        if (p && this.currentDirection === null) {
          (this.currentDirection = mz(S)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          g && g(c, d);
      },
      s = (c, d) => this.stop(c, d),
      l = () =>
        Zt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new qk(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: a,
        onSessionEnd: s,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: nC(this.visualElement),
      }
    );
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const o = this.isDragging;
    if ((this.cancel(), !o)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: a } = this.getProps();
    a && ye.postRender(() => a(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !eu(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = rz(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && yi(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = oz(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = lz(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Zt((a) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(a) &&
            (this.constraints[a] = sz(o.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !yi(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = fz(r, o.root, this.visualElement.getTransformPagePoint());
    let a = iz(o.layout.layoutBox, i);
    if (n) {
      const s = n(uz(a));
      (this.hasMutatedConstraints = !!s), s && (a = Zk(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = Zt((c) => {
        if (!eu(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          p = o ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(
      Xv(t, r, 0, n, this.visualElement, !1, Eh(this.visualElement, t))
    );
  }
  stopAnimation() {
    Zt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Zt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Zt((n) => {
      const { drag: r } = this.getProps();
      if (!eu(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - Me(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!yi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Zt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s && this.constraints !== !1) {
        const l = s.get();
        o[a] = az({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Zt((a) => {
        if (!eu(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(Me(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    pz.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ar(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        yi(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      ye.read(r);
    const a = nr(window, "resize", () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Zt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = Ph,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function eu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function mz(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class vz extends eo {
  constructor(t) {
    super(t),
      (this.removeGroupControls = dt),
      (this.removeListeners = dt),
      (this.controls = new hz(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || dt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Q1 = (e) => (t, n) => {
  e && ye.postRender(() => e(t, n));
};
class gz extends eo {
  constructor() {
    super(...arguments), (this.removePointerDownListener = dt);
  }
  onPointerDown(t) {
    this.session = new qk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: nC(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Q1(t),
      onStart: Q1(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && ye.postRender(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ar(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function rC() {
  const e = b.useContext(rl);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = b.useId();
  b.useEffect(() => r(o), []);
  const i = b.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
function yz() {
  return bz(b.useContext(rl));
}
function bz(e) {
  return e === null ? !0 : e.isPresent;
}
const Du = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Z1(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ta = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (G.test(e)) e = parseFloat(e);
        else return e;
      const n = Z1(e, t.target.x),
        r = Z1(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Sz = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Kr.parse(e);
      if (o.length > 5) return r;
      const i = Kr.createTransformer(e),
        a = typeof o[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = Me(s, l, 0.5);
      return (
        typeof o[2 + a] == "number" && (o[2 + a] /= u),
        typeof o[3 + a] == "number" && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class xz extends b.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    pI(wz),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Du.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              ye.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      _v.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function oC(e) {
  const [t, n] = rC(),
    r = b.useContext(Pv);
  return k.jsx(xz, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: b.useContext(G2),
    isPresent: t,
    safeToRemove: n,
  });
}
const wz = {
    borderRadius: {
      ...Ta,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Ta,
    borderTopRightRadius: Ta,
    borderBottomLeftRadius: Ta,
    borderBottomRightRadius: Ta,
    boxShadow: Sz,
  },
  iC = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  kz = iC.length,
  J1 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  eb = (e) => typeof e == "number" || G.test(e);
function Cz(e, t, n, r, o, i) {
  o
    ? ((e.opacity = Me(0, n.opacity !== void 0 ? n.opacity : 1, _z(r))),
      (e.opacityExit = Me(t.opacity !== void 0 ? t.opacity : 1, 0, Ez(r))))
    : i &&
      (e.opacity = Me(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < kz; a++) {
    const s = `border${iC[a]}Radius`;
    let l = tb(t, s),
      u = tb(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || eb(l) === eb(u)
        ? ((e[s] = Math.max(Me(J1(l), J1(u), r), 0)),
          (Nn.test(u) || Nn.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Me(t.rotate || 0, n.rotate || 0, r));
}
function tb(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const _z = aC(0, 0.5, Lk),
  Ez = aC(0.5, 0.95, dt);
function aC(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ns(e, t, r)));
}
function nb(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Yt(e, t) {
  nb(e.x, t.x), nb(e.y, t.y);
}
function rb(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function ob(e, t, n, r, o) {
  return (
    (e -= t), (e = kc(e, 1 / n, r)), o !== void 0 && (e = kc(e, 1 / o, r)), e
  );
}
function Tz(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (
    (Nn.test(t) &&
      ((t = parseFloat(t)), (t = Me(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = Me(i.min, i.max, r);
  e === i && (s -= t),
    (e.min = ob(e.min, t, n, s, o)),
    (e.max = ob(e.max, t, n, s, o));
}
function ib(e, t, [n, r, o], i, a) {
  Tz(e, t[n], t[r], t[o], t.scale, i, a);
}
const Pz = ["x", "scaleX", "originX"],
  Az = ["y", "scaleY", "originY"];
function ab(e, t, n, r) {
  ib(e.x, t, Pz, n ? n.x : void 0, r ? r.x : void 0),
    ib(e.y, t, Az, n ? n.y : void 0, r ? r.y : void 0);
}
function sb(e) {
  return e.translate === 0 && e.scale === 1;
}
function sC(e) {
  return sb(e.x) && sb(e.y);
}
function lb(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Rz(e, t) {
  return lb(e.x, t.x) && lb(e.y, t.y);
}
function ub(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function lC(e, t) {
  return ub(e.x, t.x) && ub(e.y, t.y);
}
function cb(e) {
  return Ut(e.x) / Ut(e.y);
}
function db(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Oz {
  constructor() {
    this.members = [];
  }
  add(t) {
    yd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (bd(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Mz(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    a = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: p,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      p && (r += `skewX(${p}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const $z = (e, t) => e.depth - t.depth;
class Dz {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    yd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    bd(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort($z),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Iz(e, t) {
  const n = cr.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (vr(r), e(i - t));
    };
  return ye.read(r, !0), () => vr(r);
}
function zz(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Fz(e, t, n) {
  const r = ct(e) ? e : Bs(e);
  return r.start(Xv("", r, t, n)), r.animation;
}
const fo = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Wa = typeof window < "u" && window.MotionDebug !== void 0,
  Yf = ["", "X", "Y", "Z"],
  Lz = { visibility: "hidden" },
  fb = 1e3;
let jz = 0;
function Qf(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function uC(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? window.MotionHasOptimisedTransformAnimation(Gk(t))
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? uC(e.parent)
      : !1
    : !1;
}
function cC({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = jz++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Wa &&
              (fo.totalNodes =
                fo.resolvedTargetDeltas =
                fo.recalculatedProjection =
                  0),
            this.nodes.forEach(Vz),
            this.nodes.forEach(Kz),
            this.nodes.forEach(qz),
            this.nodes.forEach(Wz),
            Wa && window.MotionDebug.record(fo);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Dz());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Yv()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = zz(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = Iz(f, 250)),
            Du.hasAnimatedSinceResize &&
              ((Du.hasAnimatedSinceResize = !1), this.nodes.forEach(hb));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: p,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || Jz,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: h } =
                  c.getProps(),
                m = !this.targetLayout || !lC(this.targetLayout, v) || p,
                y = !f && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y);
                const w = { ...Nv(g, "layout"), onPlay: S, onComplete: h };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                f || hb(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        vr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Xz),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionHandoffCancelAll &&
          uC(this) &&
          window.MotionHandoffCancelAll(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(pb);
        return;
      }
      this.isUpdating || this.nodes.forEach(Hz),
        (this.isUpdating = !1),
        this.nodes.forEach(Gz),
        this.nodes.forEach(Nz),
        this.nodes.forEach(Bz),
        this.clearAllSnapshots();
      const s = cr.now();
      (tt.delta = Gr(0, 1e3 / 60, s - tt.timestamp)),
        (tt.timestamp = s),
        (tt.isProcessing = !0),
        Nf.update.process(tt),
        Nf.preRender.process(tt),
        Nf.render.process(tt),
        (tt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), _v.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Uz), this.sharedNodes.forEach(Yz);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ye.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ye.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = je()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === a &&
          (s = !1),
        s)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const a =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        s = this.projectionDelta && !sC(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || co(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        eF(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var a;
      const { visualElement: s } = this.options;
      if (!s) return je();
      const l = s.measureViewportBox();
      if (
        !(
          ((a = this.scroll) === null || a === void 0 ? void 0 : a.wasRoot) ||
          this.path.some(tF)
        )
      ) {
        const { scroll: c } = this.root;
        c && (xi(l.x, c.offset.x), xi(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(a) {
      var s;
      const l = je();
      if (
        (Yt(l, a), !((s = this.scroll) === null || s === void 0) && s.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Yt(l, a), xi(l.x, d.offset.x), xi(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(a, s = !1) {
      const l = je();
      Yt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          wi(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          co(c.latestValues) && wi(l, c.latestValues);
      }
      return co(this.latestValues) && wi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = je();
      Yt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !co(u.latestValues)) continue;
        Ah(u.latestValues) && u.updateSnapshot();
        const c = je(),
          d = u.measurePageBox();
        Yt(c, d),
          ab(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return co(this.latestValues) && ab(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== tt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = tt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = je()),
              (this.relativeTargetOrigin = je()),
              ls(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              Yt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = je()), (this.targetWithTransforms = je())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                nz(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Yt(this.target, this.layout.layoutBox),
                eC(this.target, this.targetDelta))
              : Yt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = je()),
                (this.relativeTargetOrigin = je()),
                ls(this.relativeTargetOrigin, this.target, p.target),
                Yt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Wa && fo.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ah(this.parent.latestValues) ||
          Jk(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === tt.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Yt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        p = this.treeScale.y;
      dz(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = je()));
      const { target: v } = s;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (rb(this.prevProjectionDelta.x, this.projectionDelta.x),
          rb(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ss(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== p ||
          !db(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !db(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Wa && fo.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      var s;
      if (
        ((s = this.options.visualElement) === null ||
          s === void 0 ||
          s.scheduleRender(),
        a)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Si()),
        (this.projectionDelta = Si()),
        (this.projectionDeltaWithTransform = Si());
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Si();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = je(),
        p = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        g = p !== v,
        S = this.getStack(),
        h = !S || S.members.length <= 1,
        m = !!(g && !h && this.options.crossfade === !0 && !this.path.some(Zz));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (w) => {
        const C = w / 1e3;
        mb(d.x, a.x, C),
          mb(d.y, a.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ls(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Qz(this.relativeTarget, this.relativeTargetOrigin, f, C),
            y && Rz(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = je()),
            Yt(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), Cz(c, u, this.latestValues, C, m, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (vr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ye.update(() => {
          (Du.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Fz(0, fb, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(fb),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          dC(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || je();
          const d = Ut(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = Ut(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        Yt(s, l),
          wi(s, c),
          ss(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Oz()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (s = !0),
        !s)
      )
        return;
      const u = {};
      l.z && Qf("z", a, u, this.animationValues);
      for (let c = 0; c < Yf.length; c++)
        Qf(`rotate${Yf[c]}`, a, u, this.animationValues),
          Qf(`skew${Yf[c]}`, a, u, this.animationValues);
      a.render();
      for (const c in u)
        a.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Lz;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Mu(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Mu(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !co(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Mz(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: p, y: v } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const g in yc) {
        if (f[g] === void 0) continue;
        const { correct: S, applyTo: h } = yc[g],
          m = u.transform === "none" ? f[g] : S(f[g], d);
        if (h) {
          const y = h.length;
          for (let w = 0; w < y; w++) u[h[w]] = m;
        } else u[g] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Mu(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(pb),
        this.root.sharedNodes.clear();
    }
  };
}
function Nz(e) {
  e.updateLayout();
}
function Bz(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    i === "size"
      ? Zt((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            p = Ut(f);
          (f.min = r[d].min), (f.max = f.min + p);
        })
      : dC(i, n.layoutBox, r) &&
        Zt((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            p = Ut(r[d]);
          (f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + p));
        });
    const s = Si();
    ss(s, r, n.layoutBox);
    const l = Si();
    a ? ss(l, e.applyTransform(o, !0), n.measuredBox) : ss(l, r, n.layoutBox);
    const u = !sC(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = je();
          ls(v, n.layoutBox, f.layoutBox);
          const g = je();
          ls(g, r, p.layoutBox),
            lC(v, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Vz(e) {
  Wa && fo.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Wz(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Uz(e) {
  e.clearSnapshot();
}
function pb(e) {
  e.clearMeasurements();
}
function Hz(e) {
  e.isLayoutDirty = !1;
}
function Gz(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function hb(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Kz(e) {
  e.resolveTargetDelta();
}
function qz(e) {
  e.calcProjection();
}
function Xz(e) {
  e.resetSkewAndRotation();
}
function Yz(e) {
  e.removeLeadSnapshot();
}
function mb(e, t, n) {
  (e.translate = Me(t.translate, 0, n)),
    (e.scale = Me(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function vb(e, t, n, r) {
  (e.min = Me(t.min, n.min, r)), (e.max = Me(t.max, n.max, r));
}
function Qz(e, t, n, r) {
  vb(e.x, t.x, n.x, r), vb(e.y, t.y, n.y, r);
}
function Zz(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Jz = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  gb = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  yb = gb("applewebkit/") && !gb("chrome/") ? Math.round : dt;
function bb(e) {
  (e.min = yb(e.min)), (e.max = yb(e.max));
}
function eF(e) {
  bb(e.x), bb(e.y);
}
function dC(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !tz(cb(t), cb(n), 0.2))
  );
}
function tF(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const nF = cC({
    attachResizeListener: (e, t) => nr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Zf = { current: void 0 },
  fC = cC({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Zf.current) {
        const e = new nF({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Zf.current = e);
      }
      return Zf.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  rF = {
    pan: { Feature: gz },
    drag: { Feature: vz, ProjectionNode: fC, MeasureLayout: oC },
  },
  Oh = { current: null },
  pC = { current: !1 };
function oF() {
  if (((pC.current = !0), !!Cv))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Oh.current = e.matches);
      e.addListener(t), t();
    } else Oh.current = !1;
}
function iF(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (ct(o)) e.addValue(r, o);
    else if (ct(i)) e.addValue(r, Bs(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, Bs(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Sb = new WeakMap(),
  aF = [...bk, lt, Kr],
  sF = (e) => aF.find(yk(e)),
  xb = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  lF = Tv.length;
class uF {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: a,
    },
    s = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Bv),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        (this.isRenderScheduled = !1),
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.isRenderScheduled = !1),
      (this.scheduleRender = () => {
        this.isRenderScheduled ||
          ((this.isRenderScheduled = !0), ye.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = a;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = gd(n)),
      (this.isVariantNode = q2(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && ct(p) && p.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Sb.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      pC.current || oF(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Oh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Sb.delete(this.current),
      this.projection && this.projection.unmount(),
      vr(this.notifyUpdate),
      vr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Jr.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ye.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Xi) {
      const n = Xi[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : je();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < xb.length; r++) {
      const o = xb[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        a = t[i];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    (this.prevMotionValues = iF(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < lF; r++) {
      const o = Tv[r],
        i = this.props[o];
      (Fs(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Bs(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (vk(o) || mk(o))
          ? (o = parseFloat(o))
          : !sF(o) && Kr.test(n) && (o = Tk(t, n)),
        this.setBaseTarget(t, ct(o) ? o.get() : o)),
      ct(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const a = Lv(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      a && (o = a[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ct(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Yv()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class hC extends uF {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Pk);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function cF(e) {
  return window.getComputedStyle(e);
}
class dF extends hC {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = nk);
  }
  readValueFromInstance(t, n) {
    if (Jr.has(n)) {
      const r = Wv(n);
      return (r && r.default) || 0;
    } else {
      const r = cF(t),
        o = (Z2(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return tC(t, n);
  }
  build(t, n, r) {
    $v(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Fv(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ct(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class fF extends hC {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = je);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Jr.has(n)) {
      const r = Wv(n);
      return (r && r.default) || 0;
    }
    return (n = rk.has(n) ? n : vd(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ik(t, n, r);
  }
  build(t, n, r) {
    Iv(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ok(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = zv(t.tagName)), super.mount(t);
  }
}
const pF = (e, t) =>
    Av(e) ? new fF(t) : new dF(t, { allowProjection: e !== b.Fragment }),
  hF = { layout: { ProjectionNode: fC, MeasureLayout: oC } },
  mF = { ...K7, ...n9, ...rF, ...hF },
  ll = dI((e, t) => WI(e, t, mF, pF));
class vF extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function gF({ children: e, isPresent: t }) {
  const n = b.useId(),
    r = b.useRef(null),
    o = b.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = b.useContext(kv);
  return (
    b.useInsertionEffect(() => {
      const { width: a, height: s, top: l, left: u } = o.current;
      if (t || !r.current || !a || !s) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        i && (c.nonce = i),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    k.jsx(vF, {
      isPresent: t,
      childRef: r,
      sizeRef: o,
      children: b.cloneElement(e, { ref: r }),
    })
  );
}
const yF = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = jv(bF),
    l = b.useId(),
    u = b.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? [Math.random()] : [n]
    );
  return (
    b.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    b.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = k.jsx(gF, { isPresent: n, children: e })),
    k.jsx(rl.Provider, { value: u, children: e })
  );
};
function bF() {
  return new Map();
}
const tu = (e) => e.key || "";
function wb(e) {
  const t = [];
  return (
    b.Children.forEach(e, (n) => {
      b.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const kd = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: o,
  presenceAffectsLayout: i = !0,
  mode: a = "sync",
}) => {
  const s = b.useMemo(() => wb(e), [e]),
    l = s.map(tu),
    u = b.useRef(!0),
    c = b.useRef(s),
    d = jv(() => new Map()),
    [f, p] = b.useState(s),
    [v, g] = b.useState(s);
  V2(() => {
    (u.current = !1), (c.current = s);
    for (let m = 0; m < v.length; m++) {
      const y = tu(v[m]);
      l.includes(y) ? d.delete(y) : d.get(y) !== !0 && d.set(y, !1);
    }
  }, [v, l.length, l.join("-")]);
  const S = [];
  if (s !== f) {
    let m = [...s];
    for (let y = 0; y < v.length; y++) {
      const w = v[y],
        C = tu(w);
      l.includes(C) || (m.splice(y, 0, w), S.push(w));
    }
    a === "wait" && S.length && (m = S), g(wb(m)), p(s);
    return;
  }
  const { forceRender: h } = b.useContext(Pv);
  return k.jsx(k.Fragment, {
    children: v.map((m) => {
      const y = tu(m),
        w = s === v || l.includes(y),
        C = () => {
          if (d.has(y)) d.set(y, !0);
          else return;
          let P = !0;
          d.forEach((_) => {
            _ || (P = !1);
          }),
            P && (h == null || h(), g(c.current), o && o());
        };
      return k.jsx(
        yF,
        {
          isPresent: w,
          initial: !u.current || r ? void 0 : !1,
          custom: w ? void 0 : n,
          presenceAffectsLayout: i,
          mode: a,
          onExitComplete: w ? void 0 : C,
          children: m,
        },
        y
      );
    }),
  });
};
var SF = {
    initial: (e) => {
      const { position: t } = e,
        n = ["top", "bottom"].includes(t) ? "y" : "x";
      let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (r = 1), { opacity: 0, [n]: r * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  mC = b.memo((e) => {
    const {
        id: t,
        message: n,
        onCloseComplete: r,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = "bottom",
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = SF,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = b.useState(s),
      p = yz();
    qi(() => {
      p || r == null || r();
    }, [p]),
      qi(() => {
        f(s);
      }, [s]);
    const v = () => f(null),
      g = () => f(s),
      S = () => {
        p && o();
      };
    b.useEffect(() => {
      p && i && o();
    }, [p, i, o]),
      qD(S, d);
    const h = b.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      m = b.useMemo(() => GD(a), [a]);
    return k.jsx(ll.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: v,
      onHoverEnd: g,
      custom: { position: a },
      style: m,
      children: k.jsx(V.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: h,
        children: er(n, { id: t, onClose: S }),
      }),
    });
  });
mC.displayName = "ToastComponent";
var kb = {
    path: k.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        k.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        k.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        k.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Vo = X((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = "currentColor",
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = oe("chakra-icon", s),
      d = Zr("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      p = { ref: t, focusable: i, className: c, __css: f },
      v = r ?? kb.viewBox;
    if (n && typeof n != "string") return k.jsx(V.svg, { as: n, ...p, ...u });
    const g = a ?? kb.path;
    return k.jsx(V.svg, {
      verticalAlign: "middle",
      viewBox: v,
      ...p,
      ...u,
      children: g,
    });
  });
Vo.displayName = "Icon";
function xF(e) {
  return k.jsx(Vo, {
    viewBox: "0 0 24 24",
    ...e,
    children: k.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function wF(e) {
  return k.jsx(Vo, {
    viewBox: "0 0 24 24",
    ...e,
    children: k.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function Cb(e) {
  return k.jsx(Vo, {
    viewBox: "0 0 24 24",
    ...e,
    children: k.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var kF = cv({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  Cd = X((e, t) => {
    const n = Zr("Spinner", e),
      {
        label: r = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = wt(e),
      u = oe("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${kF} ${i} linear infinite`,
        ...n,
      };
    return k.jsx(V.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && k.jsx(V.span, { srOnly: !0, children: r }),
    });
  });
Cd.displayName = "Spinner";
var [CF, Qv] = pt({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [_F, Zv] = pt({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  vC = {
    info: { icon: wF, colorScheme: "blue" },
    warning: { icon: Cb, colorScheme: "orange" },
    success: { icon: xF, colorScheme: "green" },
    error: { icon: Cb, colorScheme: "red" },
    loading: { icon: Cd, colorScheme: "blue" },
  };
function EF(e) {
  return vC[e].colorScheme;
}
function TF(e) {
  return vC[e].icon;
}
var gC = X(function (t, n) {
  const r = Zv(),
    { status: o } = Qv(),
    i = { display: "inline", ...r.description };
  return k.jsx(V.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: oe("chakra-alert__desc", t.className),
    __css: i,
  });
});
gC.displayName = "AlertDescription";
function yC(e) {
  const { status: t } = Qv(),
    n = TF(t),
    r = Zv(),
    o = t === "loading" ? r.spinner : r.icon;
  return k.jsx(V.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: oe("chakra-alert__icon", e.className),
    __css: o,
    children: e.children || k.jsx(n, { h: "100%", w: "100%" }),
  });
}
yC.displayName = "AlertIcon";
var bC = X(function (t, n) {
  const r = Zv(),
    { status: o } = Qv();
  return k.jsx(V.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: oe("chakra-alert__title", t.className),
    __css: r.title,
  });
});
bC.displayName = "AlertTitle";
var SC = X(function (t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = wt(t),
    s = (r = t.colorScheme) != null ? r : EF(o),
    l = br("Alert", { ...t, colorScheme: s }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return k.jsx(CF, {
    value: { status: o },
    children: k.jsx(_F, {
      value: l,
      children: k.jsx(V.div, {
        "data-status": o,
        role: i ? "alert" : void 0,
        ref: n,
        ...a,
        className: oe("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
SC.displayName = "Alert";
function PF(e) {
  return k.jsx(Vo, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: k.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var Jv = X(function (t, n) {
  const r = Zr("CloseButton", t),
    { children: o, isDisabled: i, __css: a, ...s } = wt(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return k.jsx(V.button, {
    type: "button",
    "aria-label": "Close",
    ref: n,
    disabled: i,
    __css: { ...l, ...r, ...a },
    ...s,
    children: o || k.jsx(PF, { width: "1em", height: "1em" }),
  });
});
Jv.displayName = "CloseButton";
var AF = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  us = RF(AF);
function RF(e) {
  let t = e;
  const n = new Set(),
    r = (o) => {
      (t = o(t)), n.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      n.add(o),
      () => {
        r(() => e), n.delete(o);
      }
    ),
    removeToast: (o, i) => {
      r((a) => ({ ...a, [i]: a[i].filter((s) => s.id != o) }));
    },
    notify: (o, i) => {
      const a = OF(o, i),
        { position: s, id: l } = a;
      return (
        r((u) => {
          var c, d;
          const p = s.includes("top")
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a];
          return { ...u, [s]: p };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        r((a) => {
          const s = { ...a },
            { position: l, index: u } = s1(s, o);
          return (
            l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: $F(i) }), s
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) =>
        (
          o ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      r((i) => {
        const a = B2(i, o);
        return a
          ? {
              ...i,
              [a]: i[a].map((s) =>
                s.id == o ? { ...s, requestClose: !0 } : s
              ),
            }
          : i;
      });
    },
    isActive: (o) => !!s1(us.getState(), o).position,
  };
}
var _b = 0;
function OF(e, t = {}) {
  var n, r;
  _b += 1;
  const o = (n = t.id) != null ? n : _b,
    i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => us.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var MF = (e) => {
  const {
      status: t,
      variant: n = "solid",
      id: r,
      title: o,
      isClosable: i,
      onClose: a,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = r
      ? {
          root: `toast-${r}`,
          title: `toast-${r}-title`,
          description: `toast-${r}-description`,
        }
      : void 0;
  return k.jsxs(SC, {
    addRole: !1,
    status: t,
    variant: n,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      k.jsx(yC, { children: u }),
      k.jsxs(V.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          o && k.jsx(bC, { id: c == null ? void 0 : c.title, children: o }),
          s &&
            k.jsx(gC, {
              id: c == null ? void 0 : c.description,
              display: "block",
              children: s,
            }),
        ],
      }),
      i &&
        k.jsx(Jv, {
          size: "sm",
          onClick: a,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function $F(e = {}) {
  const { render: t, toastComponent: n = MF } = e;
  return (o) =>
    typeof t == "function" ? t({ ...o, ...e }) : k.jsx(n, { ...o, ...e });
}
var [DF, MH] = pt({ name: "ToastOptionsContext", strict: !1 }),
  IF = (e) => {
    const t = b.useSyncExternalStore(us.subscribe, us.getState, us.getState),
      { motionVariants: n, component: r = mC, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s];
        return k.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": `Notifications-${s}`,
            id: `chakra-toast-manager-${s}`,
            style: KD(s),
            children: k.jsx(kd, {
              initial: !1,
              children: l.map((u) =>
                k.jsx(r, { motionVariants: n, ...u }, u.id)
              ),
            }),
          },
          s
        );
      });
    return k.jsx(tl, { ...o, children: a });
  },
  zF = (e) =>
    function ({ children: n, theme: r = e, toastOptions: o, ...i }) {
      return k.jsxs(UD, {
        theme: r,
        ...i,
        children: [
          k.jsx(DF, {
            value: o == null ? void 0 : o.defaultOptions,
            children: n,
          }),
          k.jsx(IF, { ...o }),
        ],
      });
    },
  FF = zF(M2),
  LF = Object.defineProperty,
  jF = (e, t, n) =>
    t in e
      ? LF(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ze = (e, t, n) => (jF(e, typeof t != "symbol" ? t + "" : t, n), n);
function Eb(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (
      r & Node.DOCUMENT_POSITION_FOLLOWING ||
      r & Node.DOCUMENT_POSITION_CONTAINED_BY
    )
      return -1;
    if (
      r & Node.DOCUMENT_POSITION_PRECEDING ||
      r & Node.DOCUMENT_POSITION_CONTAINS
    )
      return 1;
    if (
      r & Node.DOCUMENT_POSITION_DISCONNECTED ||
      r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    )
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var NF = (e) =>
  typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function Tb(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function Pb(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var Mh = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
  Cc = (e) => e,
  BF = class {
    constructor() {
      ze(this, "descendants", new Map()),
        ze(this, "register", (e) => {
          if (e != null)
            return NF(e)
              ? this.registerNode(e)
              : (t) => {
                  this.registerNode(t, e);
                };
        }),
        ze(this, "unregister", (e) => {
          this.descendants.delete(e);
          const t = Eb(Array.from(this.descendants.keys()));
          this.assignIndex(t);
        }),
        ze(this, "destroy", () => {
          this.descendants.clear();
        }),
        ze(this, "assignIndex", (e) => {
          this.descendants.forEach((t) => {
            const n = e.indexOf(t.node);
            (t.index = n), (t.node.dataset.index = t.index.toString());
          });
        }),
        ze(this, "count", () => this.descendants.size),
        ze(this, "enabledCount", () => this.enabledValues().length),
        ze(this, "values", () =>
          Array.from(this.descendants.values()).sort(
            (t, n) => t.index - n.index
          )
        ),
        ze(this, "enabledValues", () =>
          this.values().filter((e) => !e.disabled)
        ),
        ze(this, "item", (e) => {
          if (this.count() !== 0) return this.values()[e];
        }),
        ze(this, "enabledItem", (e) => {
          if (this.enabledCount() !== 0) return this.enabledValues()[e];
        }),
        ze(this, "first", () => this.item(0)),
        ze(this, "firstEnabled", () => this.enabledItem(0)),
        ze(this, "last", () => this.item(this.descendants.size - 1)),
        ze(this, "lastEnabled", () => {
          const e = this.enabledValues().length - 1;
          return this.enabledItem(e);
        }),
        ze(this, "indexOf", (e) => {
          var t, n;
          return e &&
            (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) !=
              null
            ? n
            : -1;
        }),
        ze(this, "enabledIndexOf", (e) =>
          e == null
            ? -1
            : this.enabledValues().findIndex((t) => t.node.isSameNode(e))
        ),
        ze(this, "next", (e, t = !0) => {
          const n = Tb(e, this.count(), t);
          return this.item(n);
        }),
        ze(this, "nextEnabled", (e, t = !0) => {
          const n = this.item(e);
          if (!n) return;
          const r = this.enabledIndexOf(n.node),
            o = Tb(r, this.enabledCount(), t);
          return this.enabledItem(o);
        }),
        ze(this, "prev", (e, t = !0) => {
          const n = Pb(e, this.count() - 1, t);
          return this.item(n);
        }),
        ze(this, "prevEnabled", (e, t = !0) => {
          const n = this.item(e);
          if (!n) return;
          const r = this.enabledIndexOf(n.node),
            o = Pb(r, this.enabledCount() - 1, t);
          return this.enabledItem(o);
        }),
        ze(this, "registerNode", (e, t) => {
          if (!e || this.descendants.has(e)) return;
          const n = Array.from(this.descendants.keys()).concat(e),
            r = Eb(n);
          t != null && t.disabled && (t.disabled = !!t.disabled);
          const o = { node: e, index: -1, ...t };
          this.descendants.set(e, o), this.assignIndex(r);
        });
    }
  };
function VF(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Dt(...e) {
  return (t) => {
    e.forEach((n) => {
      VF(n, t);
    });
  };
}
function WF(...e) {
  return b.useMemo(() => Dt(...e), e);
}
function UF() {
  const e = b.useRef(new BF());
  return Mh(() => () => e.current.destroy()), e.current;
}
var [HF, xC] = pt({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider",
});
function GF(e) {
  const t = xC(),
    [n, r] = b.useState(-1),
    o = b.useRef(null);
  Mh(
    () => () => {
      o.current && t.unregister(o.current);
    },
    []
  ),
    Mh(() => {
      if (!o.current) return;
      const a = Number(o.current.dataset.index);
      n != a && !Number.isNaN(a) && r(a);
    });
  const i = Cc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: Dt(i, o),
  };
}
function KF() {
  return [Cc(HF), () => Cc(xC()), () => UF(), (o) => GF(o)];
}
var $h = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  Pa = {
    scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
    fade: { enter: { opacity: 1 }, exit: { opacity: 0 } },
    pushLeft: { enter: { x: "100%" }, exit: { x: "-30%" } },
    pushRight: { enter: { x: "-100%" }, exit: { x: "30%" } },
    pushUp: { enter: { y: "100%" }, exit: { y: "-30%" } },
    pushDown: { enter: { y: "-100%" }, exit: { y: "30%" } },
    slideLeft: {
      position: { left: 0, top: 0, bottom: 0, width: "100%" },
      enter: { x: 0, y: 0 },
      exit: { x: "-100%", y: 0 },
    },
    slideRight: {
      position: { right: 0, top: 0, bottom: 0, width: "100%" },
      enter: { x: 0, y: 0 },
      exit: { x: "100%", y: 0 },
    },
    slideUp: {
      position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
      enter: { x: 0, y: 0 },
      exit: { x: 0, y: "-100%" },
    },
    slideDown: {
      position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
      enter: { x: 0, y: 0 },
      exit: { x: 0, y: "100%" },
    },
  };
function Dh(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Pa.slideRight;
    case "left":
      return Pa.slideLeft;
    case "bottom":
      return Pa.slideDown;
    case "top":
      return Pa.slideUp;
    default:
      return Pa.slideRight;
  }
}
var Ab = {
    enter: { duration: 0.2, ease: $h.easeOut },
    exit: { duration: 0.1, ease: $h.easeIn },
  },
  _c = {
    enter: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.enter,
    }),
    exit: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.exit,
    }),
  },
  qF = {
    enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 1,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : _c.enter(Ab.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 0,
        transition:
          (r = e == null ? void 0 : e.exit) != null ? r : _c.exit(Ab.exit, n),
        transitionEnd: t == null ? void 0 : t.exit,
      };
    },
  },
  wC = { initial: "exit", animate: "enter", exit: "exit", variants: qF },
  XF = b.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        className: i,
        transition: a,
        transitionEnd: s,
        delay: l,
        ...u
      } = t,
      c = o || r ? "enter" : "exit",
      d = r ? o && r : !0,
      f = { transition: a, transitionEnd: s, delay: l };
    return k.jsx(kd, {
      custom: f,
      children:
        d &&
        k.jsx(ll.div, {
          ref: n,
          className: oe("chakra-fade", i),
          custom: f,
          ...wC,
          animate: c,
          ...u,
        }),
    });
  });
XF.displayName = "Fade";
var Rb = {
    exit: { duration: 0.15, ease: $h.easeInOut },
    enter: { type: "spring", damping: 25, stiffness: 180 },
  },
  YF = {
    exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
      var o;
      const { exit: i } = Dh({ direction: e });
      return {
        ...i,
        transition:
          (o = t == null ? void 0 : t.exit) != null ? o : _c.exit(Rb.exit, r),
        transitionEnd: n == null ? void 0 : n.exit,
      };
    },
    enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
      var o;
      const { enter: i } = Dh({ direction: e });
      return {
        ...i,
        transition:
          (o = n == null ? void 0 : n.enter) != null
            ? o
            : _c.enter(Rb.enter, r),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
  },
  kC = b.forwardRef(function (t, n) {
    const {
        direction: r = "right",
        style: o,
        unmountOnExit: i,
        in: a,
        className: s,
        transition: l,
        transitionEnd: u,
        delay: c,
        motionProps: d,
        ...f
      } = t,
      p = Dh({ direction: r }),
      v = Object.assign({ position: "fixed" }, p.position, o),
      g = i ? a && i : !0,
      S = a || i ? "enter" : "exit",
      h = { transitionEnd: u, transition: l, direction: r, delay: c };
    return k.jsx(kd, {
      custom: h,
      children:
        g &&
        k.jsx(ll.div, {
          ...f,
          ref: n,
          initial: "exit",
          className: oe("chakra-slide", s),
          animate: S,
          exit: "exit",
          custom: h,
          variants: YF,
          style: v,
          ...d,
        }),
    });
  });
kC.displayName = "Slide";
var Ih = X(function (t, n) {
  const { htmlWidth: r, htmlHeight: o, alt: i, ...a } = t;
  return k.jsx("img", { width: r, height: o, ref: n, alt: i, ...a });
});
Ih.displayName = "NativeImage";
function QF(e) {
  const {
      loading: t,
      src: n,
      srcSet: r,
      onLoad: o,
      onError: i,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = b.useState("pending");
  b.useEffect(() => {
    c(n ? "loading" : "pending");
  }, [n]);
  const d = b.useRef(),
    f = b.useCallback(() => {
      if (!n) return;
      p();
      const v = new Image();
      (v.src = n),
        a && (v.crossOrigin = a),
        r && (v.srcset = r),
        s && (v.sizes = s),
        t && (v.loading = t),
        (v.onload = (g) => {
          p(), c("loaded"), o == null || o(g);
        }),
        (v.onerror = (g) => {
          p(), c("failed"), i == null || i(g);
        }),
        (d.current = v);
    }, [n, a, r, s, o, i, t]),
    p = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    or(() => {
      if (!l)
        return (
          u === "loading" && f(),
          () => {
            p();
          }
        );
    }, [u, f, l]),
    l ? "loaded" : u
  );
}
var ZF = (e, t) =>
  (e !== "loaded" && t === "beforeLoadOrError") ||
  (e === "failed" && t === "onError");
function JF(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var _d = X(function (t, n) {
  const {
      fallbackSrc: r,
      fallback: o,
      src: i,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = "beforeLoadOrError",
      referrerPolicy: p,
      ...v
    } = t,
    g = r !== void 0 || o !== void 0,
    S = u != null || c || !g,
    h = QF({ ...t, crossOrigin: d, ignoreFallback: S }),
    m = ZF(h, f),
    y = {
      ref: n,
      objectFit: l,
      objectPosition: s,
      ...(S ? v : JF(v, ["onError", "onLoad"])),
    };
  return m
    ? o ||
        k.jsx(V.img, {
          as: Ih,
          className: "chakra-image__placeholder",
          src: r,
          ...y,
        })
    : k.jsx(V.img, {
        as: Ih,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: p,
        className: "chakra-image",
        ...y,
      });
});
_d.displayName = "Image";
function eg(e) {
  return b.Children.toArray(e).filter((t) => b.isValidElement(t));
}
var [$H, eL] = pt({ strict: !1, name: "ButtonGroupContext" });
function tL(e) {
  const [t, n] = b.useState(!e);
  return {
    ref: b.useCallback((i) => {
      i && n(i.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function zh(e) {
  const { children: t, className: n, ...r } = e,
    o = b.isValidElement(t)
      ? b.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    i = oe("chakra-button__icon", n);
  return k.jsx(V.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...r,
    className: i,
    children: o,
  });
}
zh.displayName = "ButtonIcon";
function Fh(e) {
  const {
      label: t,
      placement: n,
      spacing: r = "0.5rem",
      children: o = k.jsx(Cd, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = oe("chakra-button__spinner", i),
    u = n === "start" ? "marginEnd" : "marginStart",
    c = b.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a,
      }),
      [a, t, u, r]
    );
  return k.jsx(V.div, { className: l, ...s, __css: c, children: o });
}
Fh.displayName = "ButtonSpinner";
var ul = X((e, t) => {
  const n = eL(),
    r = Zr("Button", { ...n, ...e }),
    {
      isDisabled: o = n == null ? void 0 : n.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: p,
      spinnerPlacement: v = "start",
      className: g,
      as: S,
      ...h
    } = wt(e),
    m = b.useMemo(() => {
      const P = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...r,
        ...(!!n && { _focus: P }),
      };
    }, [r, n]),
    { ref: y, type: w } = tL(S),
    C = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return k.jsxs(V.button, {
    ref: WF(t, y),
    as: S,
    type: f ?? w,
    "data-active": re(a),
    "data-loading": re(i),
    __css: m,
    className: oe("chakra-button", g),
    ...h,
    disabled: o || i,
    children: [
      i &&
        v === "start" &&
        k.jsx(Fh, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: p,
        }),
      i
        ? c || k.jsx(V.span, { opacity: 0, children: k.jsx(Ob, { ...C }) })
        : k.jsx(Ob, { ...C }),
      i &&
        v === "end" &&
        k.jsx(Fh, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: p,
        }),
    ],
  });
});
ul.displayName = "Button";
function Ob(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return k.jsxs(k.Fragment, {
    children: [
      t && k.jsx(zh, { marginEnd: o, children: t }),
      r,
      n && k.jsx(zh, { marginStart: o, children: n }),
    ],
  });
}
var [nL, rL] = BD("Card"),
  CC = X(function (t, n) {
    const { className: r, ...o } = t,
      i = rL();
    return k.jsx(V.div, {
      ref: n,
      className: oe("chakra-card__body", r),
      __css: i.body,
      ...o,
    });
  }),
  _C = X(function (t, n) {
    const {
        className: r,
        children: o,
        direction: i = "column",
        justify: a,
        align: s,
        ...l
      } = wt(t),
      u = br("Card", t);
    return k.jsx(V.div, {
      ref: n,
      className: oe("chakra-card", r),
      __css: {
        display: "flex",
        flexDirection: i,
        justifyContent: a,
        alignItems: s,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...u.container,
      },
      ...l,
      children: k.jsx(nL, { value: u, children: o }),
    });
  }),
  [oL, iL] = pt({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [aL, EC] = pt({ strict: !1, name: "FormControlContext" });
function sL(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: o,
      isReadOnly: i,
      ...a
    } = e,
    s = b.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, p] = b.useState(!1),
    [v, g] = b.useState(!1),
    [S, h] = b.useState(!1),
    m = b.useCallback(
      (_ = {}, A = null) => ({
        id: d,
        ..._,
        ref: Dt(A, ($) => {
          $ && g(!0);
        }),
      }),
      [d]
    ),
    y = b.useCallback(
      (_ = {}, A = null) => ({
        ..._,
        ref: A,
        "data-focus": re(S),
        "data-disabled": re(o),
        "data-invalid": re(r),
        "data-readonly": re(i),
        id: _.id !== void 0 ? _.id : u,
        htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l,
      }),
      [l, o, S, r, i, u]
    ),
    w = b.useCallback(
      (_ = {}, A = null) => ({
        id: c,
        ..._,
        ref: Dt(A, ($) => {
          $ && p(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    C = b.useCallback(
      (_ = {}, A = null) => ({
        ..._,
        ...a,
        ref: A,
        role: "group",
        "data-focus": re(S),
        "data-disabled": re(o),
        "data-invalid": re(r),
        "data-readonly": re(i),
      }),
      [a, o, S, r, i]
    ),
    P = b.useCallback(
      (_ = {}, A = null) => ({
        ..._,
        ref: A,
        role: "presentation",
        "aria-hidden": !0,
        children: _.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!S,
    onFocus: () => h(!0),
    onBlur: () => h(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: v,
    setHasHelpText: g,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: m,
    getErrorMessageProps: w,
    getRootProps: C,
    getLabelProps: y,
    getRequiredIndicatorProps: P,
  };
}
var lL = X(function (t, n) {
  const r = br("Form", t),
    o = wt(t),
    { getRootProps: i, htmlProps: a, ...s } = sL(o),
    l = oe("chakra-form-control", t.className);
  return k.jsx(aL, {
    value: s,
    children: k.jsx(oL, {
      value: r,
      children: k.jsx(V.div, { ...i({}, n), className: l, __css: r.container }),
    }),
  });
});
lL.displayName = "FormControl";
var uL = X(function (t, n) {
  const r = EC(),
    o = iL(),
    i = oe("chakra-form__helper-text", t.className);
  return k.jsx(V.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: o.helperText,
    className: i,
  });
});
uL.displayName = "FormHelperText";
function cL(e) {
  const {
    isDisabled: t,
    isInvalid: n,
    isReadOnly: r,
    isRequired: o,
    ...i
  } = TC(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": xf(n),
    "aria-required": xf(o),
    "aria-readonly": xf(r),
  };
}
function TC(e) {
  var t, n, r;
  const o = EC(),
    {
      id: i,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: p,
      onBlur: v,
      ...g
    } = e,
    S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    o != null &&
      o.hasFeedbackText &&
      o != null &&
      o.isInvalid &&
      S.push(o.feedbackId),
    o != null && o.hasHelpText && S.push(o.helpTextId),
    {
      ...g,
      "aria-describedby": S.join(" ") || void 0,
      id: i ?? (o == null ? void 0 : o.id),
      isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
      isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
      isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
      isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
      onFocus: Ne(o == null ? void 0 : o.onFocus, p),
      onBlur: Ne(o == null ? void 0 : o.onBlur, v),
    }
  );
}
var dL = {
    border: "0",
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  fL = () => typeof document < "u",
  Mb = !1,
  cl = null,
  zo = !1,
  Lh = !1,
  jh = new Set();
function tg(e, t) {
  jh.forEach((n) => n(e, t));
}
var pL =
  typeof window < "u" && window.navigator != null
    ? /^Mac/.test(window.navigator.platform)
    : !1;
function hL(e) {
  return !(
    e.metaKey ||
    (!pL && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function $b(e) {
  (zo = !0), hL(e) && ((cl = "keyboard"), tg("keyboard", e));
}
function Xo(e) {
  if (((cl = "pointer"), e.type === "mousedown" || e.type === "pointerdown")) {
    zo = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let n = !1;
    try {
      n = t.matches(":focus-visible");
    } catch {}
    if (n) return;
    tg("pointer", e);
  }
}
function mL(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : e.detail === 0 && !e.pointerType;
}
function vL(e) {
  mL(e) && ((zo = !0), (cl = "virtual"));
}
function gL(e) {
  e.target === window ||
    e.target === document ||
    (!zo && !Lh && ((cl = "virtual"), tg("virtual", e)), (zo = !1), (Lh = !1));
}
function yL() {
  (zo = !1), (Lh = !0);
}
function Db() {
  return cl !== "pointer";
}
function bL() {
  if (!fL() || Mb) return;
  const { focus: e } = HTMLElement.prototype;
  (HTMLElement.prototype.focus = function (...n) {
    (zo = !0), e.apply(this, n);
  }),
    document.addEventListener("keydown", $b, !0),
    document.addEventListener("keyup", $b, !0),
    document.addEventListener("click", vL, !0),
    window.addEventListener("focus", gL, !0),
    window.addEventListener("blur", yL, !1),
    typeof PointerEvent < "u"
      ? (document.addEventListener("pointerdown", Xo, !0),
        document.addEventListener("pointermove", Xo, !0),
        document.addEventListener("pointerup", Xo, !0))
      : (document.addEventListener("mousedown", Xo, !0),
        document.addEventListener("mousemove", Xo, !0),
        document.addEventListener("mouseup", Xo, !0)),
    (Mb = !0);
}
function SL(e) {
  bL(), e(Db());
  const t = () => e(Db());
  return (
    jh.add(t),
    () => {
      jh.delete(t);
    }
  );
}
function xL(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function wL(e = {}) {
  const t = TC(e),
    {
      isDisabled: n,
      isReadOnly: r,
      isRequired: o,
      isInvalid: i,
      id: a,
      onBlur: s,
      onFocus: l,
      "aria-describedby": u,
    } = t,
    {
      defaultChecked: c,
      isChecked: d,
      isFocusable: f,
      onChange: p,
      isIndeterminate: v,
      name: g,
      value: S,
      tabIndex: h = void 0,
      "aria-label": m,
      "aria-labelledby": y,
      "aria-invalid": w,
      ...C
    } = e,
    P = xL(C, [
      "isDisabled",
      "isReadOnly",
      "isRequired",
      "isInvalid",
      "id",
      "onBlur",
      "onFocus",
      "aria-describedby",
    ]),
    _ = Wr(p),
    A = Wr(s),
    $ = Wr(l),
    [M, L] = b.useState(!1),
    [Y, Q] = b.useState(!1),
    [ue, J] = b.useState(!1),
    [q, I] = b.useState(!1);
  b.useEffect(() => SL(L), []);
  const D = b.useRef(null),
    [j, U] = b.useState(!0),
    [ie, te] = b.useState(!!c),
    B = d !== void 0,
    K = B ? d : ie,
    Te = b.useCallback(
      (ee) => {
        if (r || n) {
          ee.preventDefault();
          return;
        }
        B || te(K ? ee.target.checked : v ? !0 : ee.target.checked),
          _ == null || _(ee);
      },
      [r, n, K, B, v, _]
    );
  or(() => {
    D.current && (D.current.indeterminate = !!v);
  }, [v]),
    qi(() => {
      n && Q(!1);
    }, [n, Q]),
    or(() => {
      const ee = D.current;
      if (!(ee != null && ee.form)) return;
      const be = () => {
        te(!!c);
      };
      return (
        ee.form.addEventListener("reset", be),
        () => {
          var Ie;
          return (Ie = ee.form) == null
            ? void 0
            : Ie.removeEventListener("reset", be);
        }
      );
    }, []);
  const xe = n && !f,
    Xe = b.useCallback(
      (ee) => {
        ee.key === " " && I(!0);
      },
      [I]
    ),
    Le = b.useCallback(
      (ee) => {
        ee.key === " " && I(!1);
      },
      [I]
    );
  or(() => {
    if (!D.current) return;
    D.current.checked !== K && te(D.current.checked);
  }, [D.current]);
  const En = b.useCallback(
      (ee = {}, be = null) => {
        const Ie = (ht) => {
          Y && ht.preventDefault(), I(!0);
        };
        return {
          ...ee,
          ref: be,
          "data-active": re(q),
          "data-hover": re(ue),
          "data-checked": re(K),
          "data-focus": re(Y),
          "data-focus-visible": re(Y && M),
          "data-indeterminate": re(v),
          "data-disabled": re(n),
          "data-invalid": re(i),
          "data-readonly": re(r),
          "aria-hidden": !0,
          onMouseDown: Ne(ee.onMouseDown, Ie),
          onMouseUp: Ne(ee.onMouseUp, () => I(!1)),
          onMouseEnter: Ne(ee.onMouseEnter, () => J(!0)),
          onMouseLeave: Ne(ee.onMouseLeave, () => J(!1)),
        };
      },
      [q, K, n, Y, M, ue, v, i, r]
    ),
    Un = b.useCallback(
      (ee = {}, be = null) => ({
        ...ee,
        ref: be,
        "data-active": re(q),
        "data-hover": re(ue),
        "data-checked": re(K),
        "data-focus": re(Y),
        "data-focus-visible": re(Y && M),
        "data-indeterminate": re(v),
        "data-disabled": re(n),
        "data-invalid": re(i),
        "data-readonly": re(r),
      }),
      [q, K, n, Y, M, ue, v, i, r]
    ),
    Tn = b.useCallback(
      (ee = {}, be = null) => ({
        ...P,
        ...ee,
        ref: Dt(be, (Ie) => {
          Ie && U(Ie.tagName === "LABEL");
        }),
        onClick: Ne(ee.onClick, () => {
          var Ie;
          j ||
            ((Ie = D.current) == null || Ie.click(),
            requestAnimationFrame(() => {
              var ht;
              (ht = D.current) == null || ht.focus({ preventScroll: !0 });
            }));
        }),
        "data-disabled": re(n),
        "data-checked": re(K),
        "data-invalid": re(i),
      }),
      [P, n, K, i, j]
    ),
    Hn = b.useCallback(
      (ee = {}, be = null) => ({
        ...ee,
        ref: Dt(D, be),
        type: "checkbox",
        name: g,
        value: S,
        id: a,
        tabIndex: h,
        onChange: Ne(ee.onChange, Te),
        onBlur: Ne(ee.onBlur, A, () => Q(!1)),
        onFocus: Ne(ee.onFocus, $, () => Q(!0)),
        onKeyDown: Ne(ee.onKeyDown, Xe),
        onKeyUp: Ne(ee.onKeyUp, Le),
        required: o,
        checked: K,
        disabled: xe,
        readOnly: r,
        "aria-label": m,
        "aria-labelledby": y,
        "aria-invalid": w ? !!w : i,
        "aria-describedby": u,
        "aria-disabled": n,
        style: dL,
      }),
      [g, S, a, Te, A, $, Xe, Le, o, K, xe, r, m, y, w, i, u, n, h]
    ),
    Sr = b.useCallback(
      (ee = {}, be = null) => ({
        ...ee,
        ref: be,
        onMouseDown: Ne(ee.onMouseDown, kL),
        "data-disabled": re(n),
        "data-checked": re(K),
        "data-invalid": re(i),
      }),
      [K, n, i]
    );
  return {
    state: {
      isInvalid: i,
      isFocused: Y,
      isChecked: K,
      isActive: q,
      isHovered: ue,
      isIndeterminate: v,
      isDisabled: n,
      isReadOnly: r,
      isRequired: o,
    },
    getRootProps: Tn,
    getCheckboxProps: En,
    getIndicatorProps: Un,
    getInputProps: Hn,
    getLabelProps: Sr,
    htmlProps: P,
  };
}
function kL(e) {
  e.preventDefault(), e.stopPropagation();
}
function CL(e, t, n, r) {
  const o = Wr(n);
  return (
    b.useEffect(() => {
      const i = typeof e == "function" ? e() : e ?? document;
      if (!(!n || !i))
        return (
          i.addEventListener(t, o, r),
          () => {
            i.removeEventListener(t, o, r);
          }
        );
    }, [t, e, r, o, n]),
    () => {
      const i = typeof e == "function" ? e() : e ?? document;
      i == null || i.removeEventListener(t, o, r);
    }
  );
}
function _L(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
var Nh = "data-focus-lock",
  PC = "data-focus-lock-disabled",
  EL = "data-no-focus-lock",
  TL = "data-autofocus-inside",
  PL = "data-no-autofocus";
function Jf(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function AL(e, t) {
  var n = b.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var RL = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
  Ib = new WeakMap();
function AC(e, t) {
  var n = AL(null, function (r) {
    return e.forEach(function (o) {
      return Jf(o, r);
    });
  });
  return (
    RL(
      function () {
        var r = Ib.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            a = n.current;
          o.forEach(function (s) {
            i.has(s) || Jf(s, null);
          }),
            i.forEach(function (s) {
              o.has(s) || Jf(s, a);
            });
        }
        Ib.set(n, e);
      },
      [e]
    ),
    n
  );
}
var ep = {
    width: "1px",
    height: "0px",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: "1px",
    left: "1px",
  },
  In = function () {
    return (
      (In =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      In.apply(this, arguments)
    );
  };
function RC(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function OL(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function OC(e) {
  return e;
}
function MC(e, t) {
  t === void 0 && (t = OC);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var a = t(i, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (s) {
              return s !== a;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var a = n;
          (n = []), a.forEach(i);
        }
        n = {
          push: function (s) {
            return i(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var a = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(i), (a = n);
        }
        var l = function () {
            var c = a;
            (a = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              a.push(c), u();
            },
            filter: function (c) {
              return (a = a.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function ng(e, t) {
  return t === void 0 && (t = OC), MC(e, t);
}
function $C(e) {
  e === void 0 && (e = {});
  var t = MC(null);
  return (t.options = In({ async: !0, ssr: !1 }, e)), t;
}
var DC = function (e) {
  var t = e.sideCar,
    n = RC(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return b.createElement(r, In({}, n));
};
DC.isSideCarExport = !0;
function ML(e, t) {
  return e.useMedium(t), DC;
}
var IC = ng({}, function (e) {
    var t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  zC = ng(),
  $L = ng(),
  DL = $C({ async: !0, ssr: typeof document < "u" }),
  IL = b.createContext(void 0),
  zL = [],
  rg = b.forwardRef(function (t, n) {
    var r,
      o = b.useState(),
      i = o[0],
      a = o[1],
      s = b.useRef(),
      l = b.useRef(!1),
      u = b.useRef(null),
      c = b.useState({}),
      d = c[1],
      f = t.children,
      p = t.disabled,
      v = p === void 0 ? !1 : p,
      g = t.noFocusGuards,
      S = g === void 0 ? !1 : g,
      h = t.persistentFocus,
      m = h === void 0 ? !1 : h,
      y = t.crossFrame,
      w = y === void 0 ? !0 : y,
      C = t.autoFocus,
      P = C === void 0 ? !0 : C;
    t.allowTextSelection;
    var _ = t.group,
      A = t.className,
      $ = t.whiteList,
      M = t.hasPositiveIndices,
      L = t.shards,
      Y = L === void 0 ? zL : L,
      Q = t.as,
      ue = Q === void 0 ? "div" : Q,
      J = t.lockProps,
      q = J === void 0 ? {} : J,
      I = t.sideCar,
      D = t.returnFocus,
      j = D === void 0 ? !1 : D,
      U = t.focusOptions,
      ie = t.onActivation,
      te = t.onDeactivation,
      B = b.useState({}),
      K = B[0],
      Te = b.useCallback(
        function (be) {
          var Ie = be.captureFocusRestore;
          if (!u.current) {
            var ht,
              cn = (ht = document) == null ? void 0 : ht.activeElement;
            (u.current = cn), cn !== document.body && (u.current = Ie(cn));
          }
          s.current && ie && ie(s.current), (l.current = !0), d();
        },
        [ie]
      ),
      xe = b.useCallback(
        function () {
          (l.current = !1), te && te(s.current), d();
        },
        [te]
      ),
      Xe = b.useCallback(
        function (be) {
          var Ie = u.current;
          if (Ie) {
            var ht = (typeof Ie == "function" ? Ie() : Ie) || document.body,
              cn = typeof j == "function" ? j(ht) : j;
            if (cn) {
              var mt = typeof cn == "object" ? cn : void 0;
              (u.current = null),
                be
                  ? Promise.resolve().then(function () {
                      return ht.focus(mt);
                    })
                  : ht.focus(mt);
            }
          }
        },
        [j]
      ),
      Le = b.useCallback(function (be) {
        l.current && IC.useMedium(be);
      }, []),
      En = zC.useMedium,
      Un = b.useCallback(function (be) {
        s.current !== be && ((s.current = be), a(be));
      }, []),
      Tn = Io(((r = {}), (r[PC] = v && "disabled"), (r[Nh] = _), r), q),
      Hn = S !== !0,
      Sr = Hn && S !== "tail",
      Wo = AC([n, Un]),
      ee = b.useMemo(
        function () {
          return { observed: s, shards: Y, enabled: !v, active: l.current };
        },
        [v, l.current, Y, i]
      );
    return b.createElement(
      b.Fragment,
      null,
      Hn && [
        b.createElement("div", {
          key: "guard-first",
          "data-focus-guard": !0,
          tabIndex: v ? -1 : 0,
          style: ep,
        }),
        M
          ? b.createElement("div", {
              key: "guard-nearest",
              "data-focus-guard": !0,
              tabIndex: v ? -1 : 1,
              style: ep,
            })
          : null,
      ],
      !v &&
        b.createElement(I, {
          id: K,
          sideCar: DL,
          observed: i,
          disabled: v,
          persistentFocus: m,
          crossFrame: w,
          autoFocus: P,
          whiteList: $,
          shards: Y,
          onActivation: Te,
          onDeactivation: xe,
          returnFocus: Xe,
          focusOptions: U,
        }),
      b.createElement(
        ue,
        Io({ ref: Wo }, Tn, { className: A, onBlur: En, onFocus: Le }),
        b.createElement(IL.Provider, { value: ee }, f)
      ),
      Sr &&
        b.createElement("div", {
          "data-focus-guard": !0,
          tabIndex: v ? -1 : 0,
          style: ep,
        })
    );
  });
rg.propTypes = {};
function Bh(e, t) {
  return (
    (Bh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Bh(e, t)
  );
}
function FL(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Bh(e, t);
}
function Vs(e) {
  "@babel/helpers - typeof";
  return (
    (Vs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vs(e)
  );
}
function LL(e, t) {
  if (Vs(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Vs(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jL(e) {
  var t = LL(e, "string");
  return Vs(t) == "symbol" ? t : t + "";
}
function NL(e, t, n) {
  return (
    (t = jL(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function BL(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function (o) {
    var i = [],
      a;
    function s() {
      (a = e(
        i.map(function (u) {
          return u.props;
        })
      )),
        t(a);
    }
    var l = (function (u) {
      FL(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function () {
        return a;
      };
      var d = c.prototype;
      return (
        (d.componentDidMount = function () {
          i.push(this), s();
        }),
        (d.componentDidUpdate = function () {
          s();
        }),
        (d.componentWillUnmount = function () {
          var p = i.indexOf(this);
          i.splice(p, 1), s();
        }),
        (d.render = function () {
          return bn.createElement(o, this.props);
        }),
        c
      );
    })(b.PureComponent);
    return NL(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var Wn = function (e) {
    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  Fo = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  FC = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  VL = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var t = window.getComputedStyle(e, null);
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue("display") === "none" ||
          t.getPropertyValue("visibility") === "hidden";
  },
  LC = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode;
  },
  jC = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
  },
  WL = function (e) {
    return e.hasAttribute("inert");
  },
  UL = function (e, t) {
    return !e || jC(e) || (!VL(e) && !WL(e) && t(LC(e)));
  },
  NC = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = UL(t, NC.bind(void 0, e));
    return e.set(t, r), r;
  },
  HL = function (e, t) {
    return e && !jC(e) ? (qL(e) ? t(LC(e)) : !1) : !0;
  },
  BC = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = HL(t, BC.bind(void 0, e));
    return e.set(t, r), r;
  },
  VC = function (e) {
    return e.dataset;
  },
  GL = function (e) {
    return e.tagName === "BUTTON";
  },
  WC = function (e) {
    return e.tagName === "INPUT";
  },
  UC = function (e) {
    return WC(e) && e.type === "radio";
  },
  KL = function (e) {
    return !((WC(e) || GL(e)) && (e.type === "hidden" || e.disabled));
  },
  qL = function (e) {
    var t = e.getAttribute(PL);
    return ![!0, "true", ""].includes(t);
  },
  og = function (e) {
    var t;
    return !!(e && !((t = VC(e)) === null || t === void 0) && t.focusGuard);
  },
  Vh = function (e) {
    return !og(e);
  },
  XL = function (e) {
    return !!e;
  },
  YL = function (e, t) {
    var n = Math.max(0, e.tabIndex),
      r = Math.max(0, t.tabIndex),
      o = n - r,
      i = e.index - t.index;
    if (o) {
      if (!n) return 1;
      if (!r) return -1;
    }
    return o || i;
  },
  QL = function (e) {
    return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
  },
  ig = function (e, t, n) {
    return Wn(e)
      .map(function (r, o) {
        var i = QL(r);
        return {
          node: r,
          index: o,
          tabIndex: n && i === -1 ? ((r.dataset || {}).focusGuard ? 0 : -1) : i,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(YL);
  },
  ZL = [
    "button:enabled",
    "select:enabled",
    "textarea:enabled",
    "input:enabled",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[tabindex]",
    "[contenteditable]",
    "[autofocus]",
  ],
  ag = ZL.join(","),
  JL = "".concat(ag, ", [data-focus-guard]"),
  HC = function (e, t) {
    return Wn((e.shadowRoot || e).children).reduce(function (n, r) {
      return n.concat(r.matches(t ? JL : ag) ? [r] : [], HC(r));
    }, []);
  },
  ej = function (e, t) {
    var n;
    return e instanceof HTMLIFrameElement &&
      !((n = e.contentDocument) === null || n === void 0) &&
      n.body
      ? Qi([e.contentDocument.body], t)
      : [e];
  },
  Qi = function (e, t) {
    return e.reduce(function (n, r) {
      var o,
        i = HC(r, t),
        a = (o = []).concat.apply(
          o,
          i.map(function (s) {
            return ej(s, t);
          })
        );
      return n.concat(
        a,
        r.parentNode
          ? Wn(r.parentNode.querySelectorAll(ag)).filter(function (s) {
              return s === r;
            })
          : []
      );
    }, []);
  },
  tj = function (e) {
    var t = e.querySelectorAll("[".concat(TL, "]"));
    return Wn(t)
      .map(function (n) {
        return Qi([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  sg = function (e, t) {
    return Wn(e)
      .filter(function (n) {
        return NC(t, n);
      })
      .filter(function (n) {
        return KL(n);
      });
  },
  zb = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      Wn(e).filter(function (n) {
        return BC(t, n);
      })
    );
  },
  lg = function (e, t, n) {
    return ig(sg(Qi(e, n), t), !0, n);
  },
  Ec = function (e, t) {
    return ig(sg(Qi(e), t), !1);
  },
  nj = function (e, t) {
    return sg(tj(e), t);
  },
  To = function (e, t) {
    return e.shadowRoot
      ? To(e.shadowRoot, t)
      : Object.getPrototypeOf(e).contains !== void 0 &&
        Object.getPrototypeOf(e).contains.call(e, t)
      ? !0
      : Wn(e.children).some(function (n) {
          var r;
          if (n instanceof HTMLIFrameElement) {
            var o =
              (r = n.contentDocument) === null || r === void 0
                ? void 0
                : r.body;
            return o ? To(o, t) : !1;
          }
          return To(n, t);
        });
  },
  rj = function (e) {
    for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
      for (var o = r + 1; o < n; o += 1) {
        var i = e[r].compareDocumentPosition(e[o]);
        (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (a, s) {
      return !t.has(s);
    });
  },
  GC = function (e) {
    return e.parentNode ? GC(e.parentNode) : e;
  },
  ug = function (e) {
    var t = Fo(e);
    return t.filter(Boolean).reduce(function (n, r) {
      var o = r.getAttribute(Nh);
      return (
        n.push.apply(
          n,
          o
            ? rj(
                Wn(
                  GC(r).querySelectorAll(
                    "["
                      .concat(Nh, '="')
                      .concat(o, '"]:not([')
                      .concat(PC, '="disabled"])')
                  )
                )
              )
            : [r]
        ),
        n
      );
    }, []);
  },
  oj = function (e) {
    try {
      return e();
    } catch {
      return;
    }
  },
  Ws = function (e) {
    if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
      var t = e.activeElement;
      return t.shadowRoot
        ? Ws(t.shadowRoot)
        : t instanceof HTMLIFrameElement &&
          oj(function () {
            return t.contentWindow.document;
          })
        ? Ws(t.contentWindow.document)
        : t;
    }
  },
  ij = function (e, t) {
    return e === t;
  },
  aj = function (e, t) {
    return !!Wn(e.querySelectorAll("iframe")).some(function (n) {
      return ij(n, t);
    });
  },
  KC = function (e, t) {
    return (
      t === void 0 && (t = Ws(FC(e).ownerDocument)),
      !t || (t.dataset && t.dataset.focusGuard)
        ? !1
        : ug(e).some(function (n) {
            return To(n, t) || aj(n, t);
          })
    );
  },
  sj = function (e) {
    e === void 0 && (e = document);
    var t = Ws(e);
    return t
      ? Wn(e.querySelectorAll("[".concat(EL, "]"))).some(function (n) {
          return To(n, t);
        })
      : !1;
  },
  lj = function (e, t) {
    return (
      t
        .filter(UC)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  cg = function (e, t) {
    return UC(e) && e.name ? lj(e, t) : e;
  },
  uj = function (e) {
    var t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(cg(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  Fb = function (e) {
    return e[0] && e.length > 1 ? cg(e[0], e) : e[0];
  },
  Lb = function (e, t) {
    return e.indexOf(cg(t, e));
  },
  Wh = "NEW_FOCUS",
  cj = function (e, t, n, r, o) {
    var i = e.length,
      a = e[0],
      s = e[i - 1],
      l = og(r);
    if (!(r && e.indexOf(r) >= 0)) {
      var u = r !== void 0 ? n.indexOf(r) : -1,
        c = o ? n.indexOf(o) : u,
        d = o ? e.indexOf(o) : -1;
      if (u === -1) return d !== -1 ? d : Wh;
      if (d === -1) return Wh;
      var f = u - c,
        p = n.indexOf(a),
        v = n.indexOf(s),
        g = uj(n),
        S = r !== void 0 ? g.indexOf(r) : -1,
        h = S - (o ? g.indexOf(o) : u);
      if ((!f && d >= 0) || t.length === 0) return d;
      var m = Lb(e, t[0]),
        y = Lb(e, t[t.length - 1]);
      if (u <= p && l && Math.abs(f) > 1) return y;
      if (u >= v && l && Math.abs(f) > 1) return m;
      if (f && Math.abs(h) > 1) return d;
      if (u <= p) return y;
      if (u > v) return m;
      if (f) return Math.abs(f) > 1 ? d : (i + d + f) % i;
    }
  },
  dj = function (e) {
    return function (t) {
      var n,
        r = (n = VC(t)) === null || n === void 0 ? void 0 : n.autofocus;
      return (
        t.autofocus || (r !== void 0 && r !== "false") || e.indexOf(t) >= 0
      );
    };
  },
  jb = function (e, t, n) {
    var r = e.map(function (i) {
        var a = i.node;
        return a;
      }),
      o = zb(r.filter(dj(n)));
    return o && o.length ? Fb(o) : Fb(zb(t));
  },
  Uh = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && Uh(e.parentNode.host || e.parentNode, t),
      t
    );
  },
  tp = function (e, t) {
    for (var n = Uh(e), r = Uh(t), o = 0; o < n.length; o += 1) {
      var i = n[o];
      if (r.indexOf(i) >= 0) return i;
    }
    return !1;
  },
  qC = function (e, t, n) {
    var r = Fo(e),
      o = Fo(t),
      i = r[0],
      a = !1;
    return (
      o.filter(Boolean).forEach(function (s) {
        (a = tp(a || s, s) || a),
          n.filter(Boolean).forEach(function (l) {
            var u = tp(i, l);
            u && (!a || To(u, a) ? (a = u) : (a = tp(u, a)));
          });
      }),
      a
    );
  },
  Nb = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(nj(r, t));
    }, []);
  },
  fj = function (e, t) {
    var n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(XL)
    );
  },
  pj = function (e, t) {
    var n = Ws(Fo(e).length > 0 ? document : FC(e).ownerDocument),
      r = ug(e).filter(Vh),
      o = qC(n || e, e, r),
      i = new Map(),
      a = Ec(r, i),
      s = a.filter(function (v) {
        var g = v.node;
        return Vh(g);
      });
    if (s[0]) {
      var l = Ec([o], i).map(function (v) {
          var g = v.node;
          return g;
        }),
        u = fj(l, s),
        c = u.map(function (v) {
          var g = v.node;
          return g;
        }),
        d = u
          .filter(function (v) {
            var g = v.tabIndex;
            return g >= 0;
          })
          .map(function (v) {
            var g = v.node;
            return g;
          }),
        f = cj(c, d, l, n, t);
      if (f === Wh) {
        var p = jb(a, d, Nb(r, i)) || jb(a, c, Nb(r, i));
        if (p) return { node: p };
        console.warn("focus-lock: cannot find any node to move focus into");
        return;
      }
      return f === void 0 ? f : u[f];
    }
  },
  hj = function (e) {
    var t = ug(e).filter(Vh),
      n = qC(e, e, t),
      r = ig(Qi([n], !0), !0, !0),
      o = Qi(t, !1);
    return r.map(function (i) {
      var a = i.node,
        s = i.index;
      return { node: a, index: s, lockItem: o.indexOf(a) >= 0, guard: og(a) };
    });
  },
  dg = function (e, t) {
    e &&
      ("focus" in e && e.focus(t),
      "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
  },
  np = 0,
  rp = !1,
  XC = function (e, t, n) {
    n === void 0 && (n = {});
    var r = pj(e, t);
    if (!rp && r) {
      if (np > 2) {
        console.error(
          "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
        ),
          (rp = !0),
          setTimeout(function () {
            rp = !1;
          }, 1);
        return;
      }
      np++, dg(r.node, n.focusOptions), np--;
    }
  };
function Aa(e) {
  if (!e) return null;
  if (typeof WeakRef > "u")
    return function () {
      return e || null;
    };
  var t = e ? new WeakRef(e) : null;
  return function () {
    return (t == null ? void 0 : t.deref()) || null;
  };
}
var mj = function (e) {
    if (!e) return null;
    for (var t = [], n = e; n && n !== document.body; )
      t.push({
        current: Aa(n),
        parent: Aa(n.parentElement),
        left: Aa(n.previousElementSibling),
        right: Aa(n.nextElementSibling),
      }),
        (n = n.parentElement);
    return { element: Aa(e), stack: t, ownerDocument: e.ownerDocument };
  },
  vj = function (e) {
    var t, n, r, o, i;
    if (e)
      for (
        var a = e.stack, s = e.ownerDocument, l = new Map(), u = 0, c = a;
        u < c.length;
        u++
      ) {
        var d = c[u],
          f = (t = d.parent) === null || t === void 0 ? void 0 : t.call(d);
        if (f && s.contains(f)) {
          for (
            var p = (n = d.left) === null || n === void 0 ? void 0 : n.call(d),
              v = d.current(),
              g = f.contains(v) ? v : void 0,
              S = (r = d.right) === null || r === void 0 ? void 0 : r.call(d),
              h = lg([f], l),
              m =
                (i =
                  (o = g ?? (p == null ? void 0 : p.nextElementSibling)) !==
                    null && o !== void 0
                    ? o
                    : S) !== null && i !== void 0
                  ? i
                  : p;
            m;

          ) {
            for (var y = 0, w = h; y < w.length; y++) {
              var C = w[y];
              if (m != null && m.contains(C.node)) return C.node;
            }
            m = m.nextElementSibling;
          }
          if (h.length) return h[0].node;
        }
      }
  },
  gj = function (e) {
    var t = mj(e);
    return function () {
      return vj(t);
    };
  },
  yj = function (e, t, n) {
    if (!e || !t) return console.error("no element or scope given"), {};
    var r = Fo(t);
    if (
      r.every(function (a) {
        return !To(a, e);
      })
    )
      return console.error("Active element is not contained in the scope"), {};
    var o = n ? lg(r, new Map()) : Ec(r, new Map()),
      i = o.findIndex(function (a) {
        var s = a.node;
        return s === e;
      });
    if (i !== -1)
      return {
        prev: o[i - 1],
        next: o[i + 1],
        first: o[0],
        last: o[o.length - 1],
      };
  },
  bj = function (e, t) {
    var n = t ? lg(Fo(e), new Map()) : Ec(Fo(e), new Map());
    return { first: n[0], last: n[n.length - 1] };
  },
  Sj = function (e) {
    return Object.assign(
      { scope: document.body, cycle: !0, onlyTabbable: !0 },
      e
    );
  },
  YC = function (e, t, n) {
    t === void 0 && (t = {});
    var r = Sj(t),
      o = yj(e, r.scope, r.onlyTabbable);
    if (o) {
      var i = n(o, r.cycle);
      i && dg(i.node, r.focusOptions);
    }
  },
  xj = function (e, t) {
    t === void 0 && (t = {}),
      YC(e, t, function (n, r) {
        var o = n.next,
          i = n.first;
        return o || (r && i);
      });
  },
  wj = function (e, t) {
    t === void 0 && (t = {}),
      YC(e, t, function (n, r) {
        var o = n.prev,
          i = n.last;
        return o || (r && i);
      });
  },
  QC = function (e, t, n) {
    var r,
      o = bj(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0),
      i = o[n];
    i && dg(i.node, t.focusOptions);
  },
  kj = function (e, t) {
    t === void 0 && (t = {}), QC(e, t, "first");
  },
  Cj = function (e, t) {
    t === void 0 && (t = {}), QC(e, t, "last");
  };
function fg(e) {
  setTimeout(e, 1);
}
var _j = function (t) {
    return t && "current" in t ? t.current : t;
  },
  Ej = function () {
    return document && document.activeElement === document.body;
  },
  Tj = function () {
    return Ej() || sj();
  },
  Ii = null,
  ki = null,
  zi = null,
  Us = !1,
  Pj = function () {
    return !0;
  },
  Aj = function (t) {
    return (Ii.whiteList || Pj)(t);
  },
  Rj = function (t, n) {
    zi = { observerNode: t, portaledElement: n };
  },
  Oj = function (t) {
    return zi && zi.portaledElement === t;
  };
function Bb(e, t, n, r) {
  var o = null,
    i = e;
  do {
    var a = r[i];
    if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e) return;
      o = null;
    } else break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var Mj = function (t) {
    return t ? !!Us : Us === "meanwhile";
  },
  $j = function e(t, n, r) {
    return (
      n &&
      ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) ||
        (n.parentNode && e(t, n.parentNode, r)))
    );
  },
  Dj = function (t, n) {
    return n.some(function (r) {
      return $j(t, r, r);
    });
  },
  Tc = function () {
    var t = !1;
    if (Ii) {
      var n = Ii,
        r = n.observed,
        o = n.persistentFocus,
        i = n.autoFocus,
        a = n.shards,
        s = n.crossFrame,
        l = n.focusOptions,
        u = r || (zi && zi.portaledElement),
        c = document && document.activeElement;
      if (u) {
        var d = [u].concat(a.map(_j).filter(Boolean));
        if (
          ((!c || Aj(c)) &&
            (o || Mj(s) || !Tj() || (!ki && i)) &&
            (u &&
              !(KC(d) || (c && Dj(c, d)) || Oj(c)) &&
              (document && !ki && c && !i
                ? (c.blur && c.blur(), document.body.focus())
                : ((t = XC(d, ki, { focusOptions: l })), (zi = {}))),
            (Us = !1),
            (ki = document && document.activeElement)),
          document &&
            c !== document.activeElement &&
            document.querySelector("[data-focus-auto-guard]"))
        ) {
          var f = document && document.activeElement,
            p = hj(d),
            v = p
              .map(function (g) {
                var S = g.node;
                return S;
              })
              .indexOf(f);
          v > -1 &&
            (p
              .filter(function (g) {
                var S = g.guard,
                  h = g.node;
                return S && h.dataset.focusAutoGuard;
              })
              .forEach(function (g) {
                var S = g.node;
                return S.removeAttribute("tabIndex");
              }),
            Bb(v, p.length, 1, p),
            Bb(v, -1, -1, p));
        }
      }
    }
    return t;
  },
  ZC = function (t) {
    Tc() && t && (t.stopPropagation(), t.preventDefault());
  },
  pg = function () {
    return fg(Tc);
  },
  Ij = function (t) {
    var n = t.target,
      r = t.currentTarget;
    r.contains(n) || Rj(r, n);
  },
  zj = function () {
    return null;
  },
  JC = function () {
    (Us = "just"),
      fg(function () {
        Us = "meanwhile";
      });
  },
  Fj = function () {
    document.addEventListener("focusin", ZC),
      document.addEventListener("focusout", pg),
      window.addEventListener("blur", JC);
  },
  Lj = function () {
    document.removeEventListener("focusin", ZC),
      document.removeEventListener("focusout", pg),
      window.removeEventListener("blur", JC);
  };
function jj(e) {
  return e.filter(function (t) {
    var n = t.disabled;
    return !n;
  });
}
var e5 = {
  moveFocusInside: XC,
  focusInside: KC,
  focusNextElement: xj,
  focusPrevElement: wj,
  focusFirstElement: kj,
  focusLastElement: Cj,
  captureFocusRestore: gj,
};
function Nj(e) {
  var t = e.slice(-1)[0];
  t && !Ii && Fj();
  var n = Ii,
    r = n && t && t.id === n.id;
  (Ii = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (o) {
        var i = o.id;
        return i === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((ki = null),
        (!r || n.observed !== t.observed) && t.onActivation(e5),
        Tc(),
        fg(Tc))
      : (Lj(), (ki = null));
}
IC.assignSyncMedium(Ij);
zC.assignMedium(pg);
$L.assignMedium(function (e) {
  return e(e5);
});
const Bj = BL(jj, Nj)(zj);
var Hh = b.forwardRef(function (t, n) {
    return b.createElement(rg, Io({ sideCar: Bj, ref: n }, t));
  }),
  t5 = rg.propTypes || {};
t5.sideCar;
_L(t5, ["sideCar"]);
Hh.propTypes = {};
function n5(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function r5(e) {
  var t;
  if (!n5(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function Vj(e) {
  var t, n;
  return (n = (t = o5(e)) == null ? void 0 : t.defaultView) != null
    ? n
    : window;
}
function o5(e) {
  return n5(e) ? e.ownerDocument : document;
}
function Wj(e) {
  return o5(e).activeElement;
}
var i5 = (e) => e.hasAttribute("tabindex"),
  Uj = (e) => i5(e) && e.tabIndex === -1;
function Hj(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function a5(e) {
  return e.parentElement && a5(e.parentElement) ? !0 : e.hidden;
}
function Gj(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function s5(e) {
  if (!r5(e) || a5(e) || Hj(e)) return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls"),
  };
  return t in r ? r[t]() : Gj(e) ? !0 : i5(e);
}
function Kj(e) {
  return e ? r5(e) && s5(e) && !Uj(e) : !1;
}
var qj = [
    "input:not(:disabled):not([disabled])",
    "select:not(:disabled):not([disabled])",
    "textarea:not(:disabled):not([disabled])",
    "embed",
    "iframe",
    "object",
    "a[href]",
    "area[href]",
    "button:not(:disabled):not([disabled])",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    "*[tabindex]:not([aria-disabled])",
    "*[contenteditable]",
  ],
  Xj = qj.join(),
  Yj = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function Qj(e) {
  const t = Array.from(e.querySelectorAll(Xj));
  return t.unshift(e), t.filter((n) => s5(n) && Yj(n));
}
var Vb,
  Zj = (Vb = Hh.default) != null ? Vb : Hh,
  l5 = (e) => {
    const {
        initialFocusRef: t,
        finalFocusRef: n,
        contentRef: r,
        restoreFocus: o,
        children: i,
        isDisabled: a,
        autoFocus: s,
        persistentFocus: l,
        lockFocusAcrossFrames: u,
      } = e,
      c = b.useCallback(() => {
        t != null && t.current
          ? t.current.focus()
          : r != null &&
            r.current &&
            Qj(r.current).length === 0 &&
            requestAnimationFrame(() => {
              var v;
              (v = r.current) == null || v.focus();
            });
      }, [t, r]),
      d = b.useCallback(() => {
        var p;
        (p = n == null ? void 0 : n.current) == null || p.focus();
      }, [n]),
      f = o && !n;
    return k.jsx(Zj, {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i,
    });
  };
l5.displayName = "FocusLock";
var Jj = fD ? b.useLayoutEffect : b.useEffect;
function Wb(e, t = []) {
  const n = b.useRef(e);
  return (
    Jj(() => {
      n.current = e;
    }),
    b.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function eN(e, t) {
  const n = b.useId();
  return b.useMemo(() => e || [t, n].filter(Boolean).join("-"), [e, t, n]);
}
function tN(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function nN(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = Wb(n),
    a = Wb(t),
    [s, l] = b.useState(e.defaultIsOpen || !1),
    [u, c] = tN(r, s),
    d = eN(o, "disclosure"),
    f = b.useCallback(() => {
      u || l(!1), a == null || a();
    }, [u, a]),
    p = b.useCallback(() => {
      u || l(!0), i == null || i();
    }, [u, i]),
    v = b.useCallback(() => {
      (c ? f : p)();
    }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: v,
    isControlled: u,
    getButtonProps: (g = {}) => ({
      ...g,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: gD(g.onClick, v),
    }),
    getDisclosureProps: (g = {}) => ({ ...g, hidden: !c, id: d }),
  };
}
var [rN, oN] = pt({
    name: "InputGroupStylesContext",
    errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `,
  }),
  u5 = X(function (t, n) {
    const r = br("Input", t),
      { children: o, className: i, ...a } = wt(t),
      s = oe("chakra-input__group", i),
      l = {},
      u = eg(o),
      c = r.field;
    u.forEach((f) => {
      var p, v;
      r &&
        (c &&
          f.type.id === "InputLeftElement" &&
          (l.paddingStart = (p = c.height) != null ? p : c.h),
        c &&
          f.type.id === "InputRightElement" &&
          (l.paddingEnd = (v = c.height) != null ? v : c.h),
        f.type.id === "InputRightAddon" && (l.borderEndRadius = 0),
        f.type.id === "InputLeftAddon" && (l.borderStartRadius = 0));
    });
    const d = u.map((f) => {
      var p, v;
      const g = xv({
        size: ((p = f.props) == null ? void 0 : p.size) || t.size,
        variant: ((v = f.props) == null ? void 0 : v.variant) || t.variant,
      });
      return f.type.id !== "Input"
        ? b.cloneElement(f, g)
        : b.cloneElement(f, Object.assign(g, l, f.props));
    });
    return k.jsx(V.div, {
      className: s,
      ref: n,
      __css: {
        width: "100%",
        display: "flex",
        position: "relative",
        isolation: "isolate",
        ...r.group,
      },
      "data-group": !0,
      ...a,
      children: k.jsx(rN, { value: r, children: d }),
    });
  });
u5.displayName = "InputGroup";
var iN = V("div", {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "0",
      zIndex: 2,
    },
  }),
  Ed = X(function (t, n) {
    var r, o;
    const { placement: i = "left", ...a } = t,
      s = oN(),
      l = s.field,
      c = {
        [i === "left" ? "insetStart" : "insetEnd"]: "0",
        width:
          (r = l == null ? void 0 : l.height) != null
            ? r
            : l == null
            ? void 0
            : l.h,
        height:
          (o = l == null ? void 0 : l.height) != null
            ? o
            : l == null
            ? void 0
            : l.h,
        fontSize: l == null ? void 0 : l.fontSize,
        ...s.element,
      };
    return k.jsx(iN, { ref: n, __css: c, ...a });
  });
Ed.id = "InputElement";
Ed.displayName = "InputElement";
var hg = X(function (t, n) {
  const { className: r, ...o } = t,
    i = oe("chakra-input__left-element", r);
  return k.jsx(Ed, { ref: n, placement: "left", className: i, ...o });
});
hg.id = "InputLeftElement";
hg.displayName = "InputLeftElement";
var c5 = X(function (t, n) {
  const { className: r, ...o } = t,
    i = oe("chakra-input__right-element", r);
  return k.jsx(Ed, { ref: n, placement: "right", className: i, ...o });
});
c5.id = "InputRightElement";
c5.displayName = "InputRightElement";
var mg = X(function (t, n) {
  const { htmlSize: r, ...o } = t,
    i = br("Input", o),
    a = wt(o),
    s = cL(a),
    l = oe("chakra-input", t.className);
  return k.jsx(V.input, {
    size: r,
    ...s,
    __css: i.field,
    ref: n,
    className: l,
  });
});
mg.displayName = "Input";
mg.id = "Input";
var [aN, d5] = pt({
    name: "ListStylesContext",
    errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  Td = X(function (t, n) {
    const r = br("List", t),
      {
        children: o,
        styleType: i = "none",
        stylePosition: a,
        spacing: s,
        ...l
      } = wt(t),
      u = eg(o),
      d = s ? { ["& > *:not(style) ~ *:not(style)"]: { mt: s } } : {};
    return k.jsx(aN, {
      value: r,
      children: k.jsx(V.ul, {
        ref: n,
        listStyleType: i,
        listStylePosition: a,
        role: "list",
        __css: { ...r.container, ...d },
        ...l,
        children: u,
      }),
    });
  });
Td.displayName = "List";
var sN = X((e, t) => {
  const { as: n, ...r } = e;
  return k.jsx(Td, {
    ref: t,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em",
    ...r,
  });
});
sN.displayName = "OrderedList";
var lN = X(function (t, n) {
  const { as: r, ...o } = t;
  return k.jsx(Td, {
    ref: n,
    as: "ul",
    styleType: "initial",
    marginStart: "1em",
    ...o,
  });
});
lN.displayName = "UnorderedList";
var f5 = X(function (t, n) {
  const r = d5();
  return k.jsx(V.li, { ref: n, ...t, __css: r.item });
});
f5.displayName = "ListItem";
var uN = X(function (t, n) {
  const r = d5();
  return k.jsx(Vo, { ref: n, role: "presentation", ...t, __css: r.icon });
});
uN.displayName = "ListIcon";
var vg = X(function (t, n) {
  const {
      templateAreas: r,
      gap: o,
      rowGap: i,
      columnGap: a,
      column: s,
      row: l,
      autoFlow: u,
      autoRows: c,
      templateRows: d,
      autoColumns: f,
      templateColumns: p,
      ...v
    } = t,
    g = {
      display: "grid",
      gridTemplateAreas: r,
      gridGap: o,
      gridRowGap: i,
      gridColumnGap: a,
      gridAutoColumns: f,
      gridColumn: s,
      gridRow: l,
      gridAutoFlow: u,
      gridAutoRows: c,
      gridTemplateRows: d,
      gridTemplateColumns: p,
    };
  return k.jsx(V.div, { ref: n, __css: g, ...v });
});
vg.displayName = "Grid";
var p5 = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function Pd(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : At(e)
    ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
    : e != null
    ? t(e)
    : null;
}
function cN(e, t = p5) {
  const n = {};
  return (
    e.forEach((r, o) => {
      const i = t[o];
      r != null && (n[i] = r);
    }),
    n
  );
}
var h5 = X(function (t, n) {
  const {
      columns: r,
      spacingX: o,
      spacingY: i,
      spacing: a,
      minChildWidth: s,
      ...l
    } = t,
    u = Qr(),
    c = s ? fN(s, u) : pN(r);
  return k.jsx(vg, {
    ref: n,
    gap: a,
    columnGap: o,
    rowGap: i,
    templateColumns: c,
    ...l,
  });
});
h5.displayName = "SimpleGrid";
function dN(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function fN(e, t) {
  return Pd(e, (n) => {
    const r = d2("sizes", n, dN(n))(t);
    return n === null ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function pN(e) {
  return Pd(e, (t) => (t === null ? null : `repeat(${t}, minmax(0, 1fr))`));
}
var gg = X(function (t, n) {
  const r = Zr("Text", t),
    { className: o, align: i, decoration: a, casing: s, ...l } = wt(t),
    u = xv({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return k.jsx(V.p, {
    ref: n,
    className: oe("chakra-text", t.className),
    ...u,
    ...l,
    __css: r,
  });
});
gg.displayName = "Text";
var m5 = (e) =>
  k.jsx(V.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
m5.displayName = "StackItem";
function hN(e) {
  const { spacing: t, direction: n } = e,
    r = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": Pd(n, (o) => r[o]) };
}
var v5 = X((e, t) => {
  const {
      isInline: n,
      direction: r,
      align: o,
      justify: i,
      spacing: a = "0.5rem",
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    p = n ? "row" : r ?? "column",
    v = b.useMemo(() => hN({ spacing: a, direction: p }), [a, p]),
    g = !!u,
    S = !d && !g,
    h = b.useMemo(() => {
      const y = eg(l);
      return S
        ? y
        : y.map((w, C) => {
            const P = typeof w.key < "u" ? w.key : C,
              _ = C + 1 === y.length,
              $ = d ? k.jsx(m5, { children: w }, P) : w;
            if (!g) return $;
            const M = b.cloneElement(u, { __css: v }),
              L = _ ? null : M;
            return k.jsxs(b.Fragment, { children: [$, L] }, P);
          });
    }, [u, v, g, S, d, l]),
    m = oe("chakra-stack", c);
  return k.jsx(V.div, {
    ref: t,
    display: "flex",
    alignItems: o,
    justifyContent: i,
    flexDirection: p,
    flexWrap: s,
    gap: g ? void 0 : a,
    className: m,
    ...f,
    children: h,
  });
});
v5.displayName = "Stack";
var sa = X((e, t) =>
  k.jsx(v5, { align: "center", ...e, direction: "row", ref: t })
);
sa.displayName = "HStack";
function Ub(e) {
  return Pd(e, (t) => (t === "auto" ? "auto" : `span ${t}/span ${t}`));
}
var Iu = X(function (t, n) {
  const {
      area: r,
      colSpan: o,
      colStart: i,
      colEnd: a,
      rowEnd: s,
      rowSpan: l,
      rowStart: u,
      ...c
    } = t,
    d = xv({
      gridArea: r,
      gridColumn: Ub(o),
      gridRow: Ub(l),
      gridColumnStart: i,
      gridColumnEnd: a,
      gridRowStart: u,
      gridRowEnd: s,
    });
  return k.jsx(V.div, { ref: n, __css: d, ...c });
});
Iu.displayName = "GridItem";
var Ad = X(function (t, n) {
  const r = Zr("Heading", t),
    { className: o, ...i } = wt(t);
  return k.jsx(V.h2, {
    ref: n,
    className: oe("chakra-heading", t.className),
    ...i,
    __css: r,
  });
});
Ad.displayName = "Heading";
var Hs = V("div");
Hs.displayName = "Box";
var g5 = X(function (t, n) {
  const { size: r, centerContent: o = !0, ...i } = t,
    a = o
      ? { display: "flex", alignItems: "center", justifyContent: "center" }
      : {};
  return k.jsx(Hs, {
    ref: n,
    boxSize: r,
    __css: { ...a, flexShrink: 0, flexGrow: 0 },
    ...i,
  });
});
g5.displayName = "Square";
var mN = X(function (t, n) {
  const { size: r, ...o } = t;
  return k.jsx(g5, { size: r, ref: n, borderRadius: "9999px", ...o });
});
mN.displayName = "Circle";
var y5 = X(function (t, n) {
  const r = Zr("Badge", t),
    { className: o, ...i } = wt(t);
  return k.jsx(V.span, {
    ref: n,
    className: oe("chakra-badge", t.className),
    ...i,
    __css: {
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      ...r,
    },
  });
});
y5.displayName = "Badge";
var Gh = X(function (t, n) {
  const {
      direction: r,
      align: o,
      justify: i,
      wrap: a,
      basis: s,
      grow: l,
      shrink: u,
      ...c
    } = t,
    d = {
      display: "flex",
      flexDirection: r,
      alignItems: o,
      justifyContent: i,
      flexWrap: a,
      flexBasis: s,
      flexGrow: l,
      flexShrink: u,
    };
  return k.jsx(V.div, { ref: n, __css: d, ...c });
});
Gh.displayName = "Flex";
function b5(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t,
    { getWindow: o } = WD(),
    i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(r) ? r : [r];
  a = a.filter((u) => u != null);
  const [s, l] = b.useState(() =>
    i.map((u, c) => ({
      media: u,
      matches: n ? !!a[c] : o().matchMedia(u).matches,
    }))
  );
  return (
    b.useEffect(() => {
      const u = o();
      l(i.map((f) => ({ media: f, matches: u.matchMedia(f).matches })));
      const c = i.map((f) => u.matchMedia(f)),
        d = (f) => {
          l((p) =>
            p
              .slice()
              .map((v) =>
                v.media === f.media ? { ...v, matches: f.matches } : v
              )
          );
        };
      return (
        c.forEach((f) => {
          typeof f.addListener == "function"
            ? f.addListener(d)
            : f.addEventListener("change", d);
        }),
        () => {
          c.forEach((f) => {
            typeof f.removeListener == "function"
              ? f.removeListener(d)
              : f.removeEventListener("change", d);
          });
        }
      );
    }, [o]),
    s.map((u) => u.matches)
  );
}
function vN(e) {
  const { breakpoint: t, hide: n, children: r, ssr: o } = e,
    [i] = b5(t, { ssr: o });
  return (n ? !i : i) ? r : null;
}
var Hb = (e, t) => {
  var n, r;
  return (r =
    (n = e == null ? void 0 : e.breakpoints) == null ? void 0 : n[t]) != null
    ? r
    : t;
};
function gN(e) {
  const { breakpoint: t = "", below: n, above: r } = e,
    o = Qr(),
    i = Hb(o, n),
    a = Hb(o, r);
  let s = t;
  return i ? (s = `(max-width: ${i})`) : a && (s = `(min-width: ${a})`), s;
}
function Pc(e) {
  const { children: t, ssr: n } = e,
    r = gN(e);
  return k.jsx(vN, { breakpoint: r, ssr: n, children: t });
}
Pc.displayName = "Show";
function yN(e, t, n = p5) {
  let r = Object.keys(e).indexOf(t);
  if (r !== -1) return e[t];
  let o = n.indexOf(t);
  for (; o >= 0; ) {
    const i = n[o];
    if (e.hasOwnProperty(i)) {
      r = o;
      break;
    }
    o -= 1;
  }
  if (r !== -1) {
    const i = n[r];
    return e[i];
  }
}
function bN(e) {
  var t, n;
  const r = At(e) ? e : { fallback: e ?? "base" },
    i = Qr().__breakpoints.details.map(({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", ""),
    })),
    a = i.map((u) => u.breakpoint === r.fallback),
    l = b5(
      i.map((u) => u.query),
      { fallback: a, ssr: r.ssr }
    ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null
    ? n
    : r.fallback;
}
function SN(e, t) {
  var n;
  const r = At(t) ? t : { fallback: "base" },
    o = bN(r),
    i = Qr();
  if (!o) return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []),
    s = Array.isArray(e)
      ? Object.fromEntries(Object.entries(cN(e, a)).map(([l, u]) => [l, u]))
      : e;
  return yN(s, o, a);
}
function xN(e) {
  const { key: t } = e;
  return t.length === 1 || (t.length > 1 && /[^a-zA-Z0-9]/.test(t));
}
function wN(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e,
    [r, o] = b.useState([]),
    i = b.useRef(),
    a = () => {
      i.current && (clearTimeout(i.current), (i.current = null));
    },
    s = () => {
      a(),
        (i.current = setTimeout(() => {
          o([]), (i.current = null);
        }, t));
    };
  b.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (xN(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()),
          o(d),
          u(d.join("")),
          s();
      }
    };
  }
  return l;
}
function kN(e, t, n, r) {
  if (t == null) return r;
  if (!r) return e.find((a) => n(a).toLowerCase().startsWith(t.toLowerCase()));
  const o = e.filter((i) => n(i).toLowerCase().startsWith(t.toLowerCase()));
  if (o.length > 0) {
    let i;
    return o.includes(r)
      ? ((i = o.indexOf(r) + 1), i === o.length && (i = 0), o[i])
      : ((i = e.indexOf(o[0])), e[i]);
  }
  return r;
}
function CN() {
  const e = b.useRef(new Map()),
    t = e.current,
    n = b.useCallback((o, i, a, s) => {
      e.current.set(a, { type: i, el: o, options: s }),
        o.addEventListener(i, a, s);
    }, []),
    r = b.useCallback((o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    }, []);
  return (
    b.useEffect(
      () => () => {
        t.forEach((o, i) => {
          r(o.el, o.type, i, o.options);
        });
      },
      [r, t]
    ),
    { add: n, remove: r }
  );
}
function op(e) {
  const t = e.target,
    { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function _N(e = {}) {
  const {
      ref: t,
      isDisabled: n,
      isFocusable: r,
      clickOnEnter: o = !0,
      clickOnSpace: i = !0,
      onMouseDown: a,
      onMouseUp: s,
      onClick: l,
      onKeyDown: u,
      onKeyUp: c,
      tabIndex: d,
      onMouseOver: f,
      onMouseLeave: p,
      ...v
    } = e,
    [g, S] = b.useState(!0),
    [h, m] = b.useState(!1),
    y = CN(),
    w = (I) => {
      I && I.tagName !== "BUTTON" && S(!1);
    },
    C = g ? d : d || 0,
    P = n && !r,
    _ = b.useCallback(
      (I) => {
        if (n) {
          I.stopPropagation(), I.preventDefault();
          return;
        }
        I.currentTarget.focus(), l == null || l(I);
      },
      [n, l]
    ),
    A = b.useCallback(
      (I) => {
        h &&
          op(I) &&
          (I.preventDefault(),
          I.stopPropagation(),
          m(!1),
          y.remove(document, "keyup", A, !1));
      },
      [h, y]
    ),
    $ = b.useCallback(
      (I) => {
        if (
          (u == null || u(I),
          n || I.defaultPrevented || I.metaKey || !op(I.nativeEvent) || g)
        )
          return;
        const D = o && I.key === "Enter";
        i && I.key === " " && (I.preventDefault(), m(!0)),
          D && (I.preventDefault(), I.currentTarget.click()),
          y.add(document, "keyup", A, !1);
      },
      [n, g, u, o, i, y, A]
    ),
    M = b.useCallback(
      (I) => {
        if (
          (c == null || c(I),
          n || I.defaultPrevented || I.metaKey || !op(I.nativeEvent) || g)
        )
          return;
        i &&
          I.key === " " &&
          (I.preventDefault(), m(!1), I.currentTarget.click());
      },
      [i, g, n, c]
    ),
    L = b.useCallback(
      (I) => {
        I.button === 0 && (m(!1), y.remove(document, "mouseup", L, !1));
      },
      [y]
    ),
    Y = b.useCallback(
      (I) => {
        if (I.button !== 0) return;
        if (n) {
          I.stopPropagation(), I.preventDefault();
          return;
        }
        g || m(!0),
          I.currentTarget.focus({ preventScroll: !0 }),
          y.add(document, "mouseup", L, !1),
          a == null || a(I);
      },
      [n, g, a, y, L]
    ),
    Q = b.useCallback(
      (I) => {
        I.button === 0 && (g || m(!1), s == null || s(I));
      },
      [s, g]
    ),
    ue = b.useCallback(
      (I) => {
        if (n) {
          I.preventDefault();
          return;
        }
        f == null || f(I);
      },
      [n, f]
    ),
    J = b.useCallback(
      (I) => {
        h && (I.preventDefault(), m(!1)), p == null || p(I);
      },
      [h, p]
    ),
    q = Dt(t, w);
  return g
    ? {
        ...v,
        ref: q,
        type: "button",
        "aria-disabled": P ? void 0 : n,
        disabled: P,
        onClick: _,
        onMouseDown: a,
        onMouseUp: s,
        onKeyUp: c,
        onKeyDown: u,
        onMouseOver: f,
        onMouseLeave: p,
      }
    : {
        ...v,
        ref: q,
        role: "button",
        "data-active": re(h),
        "aria-disabled": n ? "true" : void 0,
        tabIndex: P ? void 0 : C,
        onClick: _,
        onMouseDown: Y,
        onMouseUp: Q,
        onKeyUp: M,
        onKeyDown: $,
        onMouseOver: ue,
        onMouseLeave: J,
      };
}
function EN(e) {
  const t = e.current;
  if (!t) return !1;
  const n = Wj(t);
  return !n || t.contains(n) ? !1 : !!Kj(n);
}
function TN(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t,
    i = n && !r;
  qi(() => {
    if (!i || EN(e)) return;
    const a = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (a)
      return (
        (s = requestAnimationFrame(() => {
          a.focus({ preventScroll: !0 });
        })),
        () => {
          cancelAnimationFrame(s);
        }
      );
  }, [i, e, o]);
}
var Yo = (e, t) => ({ var: e, varRef: t ? `var(${e}, ${t})` : `var(${e})` }),
  Ft = {
    arrowShadowColor: Yo("--popper-arrow-shadow-color"),
    arrowSize: Yo("--popper-arrow-size", "8px"),
    arrowSizeHalf: Yo("--popper-arrow-size-half"),
    arrowBg: Yo("--popper-arrow-bg"),
    transformOrigin: Yo("--popper-transform-origin"),
    arrowOffset: Yo("--popper-arrow-offset"),
  };
function PN(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var AN = {
    top: "bottom center",
    "top-start": "bottom left",
    "top-end": "bottom right",
    bottom: "top center",
    "bottom-start": "top left",
    "bottom-end": "top right",
    left: "right center",
    "left-start": "right top",
    "left-end": "right bottom",
    right: "left center",
    "right-start": "left top",
    "right-end": "left bottom",
  },
  RN = (e) => AN[e],
  Gb = { scroll: !0, resize: !0 };
function ON(e) {
  let t;
  return (
    typeof e == "object"
      ? (t = { enabled: !0, options: { ...Gb, ...e } })
      : (t = { enabled: e, options: Gb }),
    t
  );
}
var MN = {
    name: "matchWidth",
    enabled: !0,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state: e }) => {
      e.styles.popper.width = `${e.rects.reference.width}px`;
    },
    effect:
      ({ state: e }) =>
      () => {
        const t = e.elements.reference;
        e.elements.popper.style.width = `${t.offsetWidth}px`;
      },
  },
  $N = {
    name: "transformOrigin",
    enabled: !0,
    phase: "write",
    fn: ({ state: e }) => {
      Kb(e);
    },
    effect:
      ({ state: e }) =>
      () => {
        Kb(e);
      },
  },
  Kb = (e) => {
    e.elements.popper.style.setProperty(
      Ft.transformOrigin.var,
      RN(e.placement)
    );
  },
  DN = {
    name: "positionArrow",
    enabled: !0,
    phase: "afterWrite",
    fn: ({ state: e }) => {
      IN(e);
    },
  },
  IN = (e) => {
    var t;
    if (!e.placement) return;
    const n = zN(e.placement);
    if ((t = e.elements) != null && t.arrow && n) {
      Object.assign(e.elements.arrow.style, {
        [n.property]: n.value,
        width: Ft.arrowSize.varRef,
        height: Ft.arrowSize.varRef,
        zIndex: -1,
      });
      const r = {
        [Ft.arrowSizeHalf.var]: `calc(${Ft.arrowSize.varRef} / 2 - 1px)`,
        [Ft.arrowOffset.var]: `calc(${Ft.arrowSizeHalf.varRef} * -1)`,
      };
      for (const o in r) e.elements.arrow.style.setProperty(o, r[o]);
    }
  },
  zN = (e) => {
    if (e.startsWith("top"))
      return { property: "bottom", value: Ft.arrowOffset.varRef };
    if (e.startsWith("bottom"))
      return { property: "top", value: Ft.arrowOffset.varRef };
    if (e.startsWith("left"))
      return { property: "right", value: Ft.arrowOffset.varRef };
    if (e.startsWith("right"))
      return { property: "left", value: Ft.arrowOffset.varRef };
  },
  FN = {
    name: "innerArrow",
    enabled: !0,
    phase: "main",
    requires: ["arrow"],
    fn: ({ state: e }) => {
      qb(e);
    },
    effect:
      ({ state: e }) =>
      () => {
        qb(e);
      },
  },
  qb = (e) => {
    if (!e.elements.arrow) return;
    const t = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
    if (!t) return;
    const n = PN(e.placement);
    n && t.style.setProperty("--popper-arrow-default-shadow", n),
      Object.assign(t.style, {
        transform: "rotate(45deg)",
        background: Ft.arrowBg.varRef,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "inherit",
        boxShadow:
          "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
      });
  },
  LN = {
    "start-start": { ltr: "left-start", rtl: "right-start" },
    "start-end": { ltr: "left-end", rtl: "right-end" },
    "end-start": { ltr: "right-start", rtl: "left-start" },
    "end-end": { ltr: "right-end", rtl: "left-end" },
    start: { ltr: "left", rtl: "right" },
    end: { ltr: "right", rtl: "left" },
  },
  jN = {
    "auto-start": "auto-end",
    "auto-end": "auto-start",
    "top-start": "top-end",
    "top-end": "top-start",
    "bottom-start": "bottom-end",
    "bottom-end": "bottom-start",
  };
function NN(e, t = "ltr") {
  var n, r;
  const o = ((n = LN[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = jN[e]) != null ? r : o;
}
var Rt = "top",
  ln = "bottom",
  un = "right",
  Ot = "left",
  yg = "auto",
  dl = [Rt, ln, un, Ot],
  Zi = "start",
  Gs = "end",
  BN = "clippingParents",
  S5 = "viewport",
  Ra = "popper",
  VN = "reference",
  Xb = dl.reduce(function (e, t) {
    return e.concat([t + "-" + Zi, t + "-" + Gs]);
  }, []),
  x5 = [].concat(dl, [yg]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Zi, t + "-" + Gs]);
  }, []),
  WN = "beforeRead",
  UN = "read",
  HN = "afterRead",
  GN = "beforeMain",
  KN = "main",
  qN = "afterMain",
  XN = "beforeWrite",
  YN = "write",
  QN = "afterWrite",
  ZN = [WN, UN, HN, GN, KN, qN, XN, YN, QN];
function Vn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ht(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Lo(e) {
  var t = Ht(e).Element;
  return e instanceof t || e instanceof Element;
}
function on(e) {
  var t = Ht(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function bg(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ht(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function JN(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !on(i) ||
      !Vn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (a) {
        var s = o[a];
        s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function eB(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          s = a.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !on(o) ||
          !Vn(o) ||
          (Object.assign(o.style, s),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const tB = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: JN,
  effect: eB,
  requires: ["computeStyles"],
};
function Bn(e) {
  return e.split("-")[0];
}
var Po = Math.max,
  Ac = Math.min,
  Ji = Math.round;
function Kh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function w5() {
  return !/^((?!chrome|android).)*safari/i.test(Kh());
}
function ea(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    on(e) &&
    ((o = (e.offsetWidth > 0 && Ji(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Ji(r.height) / e.offsetHeight) || 1));
  var a = Lo(e) ? Ht(e) : window,
    s = a.visualViewport,
    l = !w5() && n,
    u = (r.left + (l && s ? s.offsetLeft : 0)) / o,
    c = (r.top + (l && s ? s.offsetTop : 0)) / i,
    d = r.width / o,
    f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c,
  };
}
function Sg(e) {
  var t = ea(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function k5(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && bg(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function gr(e) {
  return Ht(e).getComputedStyle(e);
}
function nB(e) {
  return ["table", "td", "th"].indexOf(Vn(e)) >= 0;
}
function to(e) {
  return ((Lo(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Rd(e) {
  return Vn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (bg(e) ? e.host : null) || to(e);
}
function Yb(e) {
  return !on(e) || gr(e).position === "fixed" ? null : e.offsetParent;
}
function rB(e) {
  var t = /firefox/i.test(Kh()),
    n = /Trident/i.test(Kh());
  if (n && on(e)) {
    var r = gr(e);
    if (r.position === "fixed") return null;
  }
  var o = Rd(e);
  for (bg(o) && (o = o.host); on(o) && ["html", "body"].indexOf(Vn(o)) < 0; ) {
    var i = gr(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function fl(e) {
  for (var t = Ht(e), n = Yb(e); n && nB(n) && gr(n).position === "static"; )
    n = Yb(n);
  return n &&
    (Vn(n) === "html" || (Vn(n) === "body" && gr(n).position === "static"))
    ? t
    : n || rB(e) || t;
}
function xg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cs(e, t, n) {
  return Po(e, Ac(t, n));
}
function oB(e, t, n) {
  var r = cs(e, t, n);
  return r > n ? n : r;
}
function C5() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function _5(e) {
  return Object.assign({}, C5(), e);
}
function E5(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var iB = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    _5(typeof t != "number" ? t : E5(t, dl))
  );
};
function aB(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    s = Bn(n.placement),
    l = xg(s),
    u = [Ot, un].indexOf(s) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = iB(o.padding, n),
      f = Sg(i),
      p = l === "y" ? Rt : Ot,
      v = l === "y" ? ln : un,
      g =
        n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
      S = a[l] - n.rects.reference[l],
      h = fl(i),
      m = h ? (l === "y" ? h.clientHeight || 0 : h.clientWidth || 0) : 0,
      y = g / 2 - S / 2,
      w = d[p],
      C = m - f[c] - d[v],
      P = m / 2 - f[c] / 2 + y,
      _ = cs(w, P, C),
      A = l;
    n.modifiersData[r] = ((t = {}), (t[A] = _), (t.centerOffset = _ - P), t);
  }
}
function sB(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (k5(t.elements.popper, o) && (t.elements.arrow = o)));
}
const lB = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: aB,
  effect: sB,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ta(e) {
  return e.split("-")[1];
}
var uB = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function cB(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Ji(n * o) / o || 0, y: Ji(r * o) / o || 0 };
}
function Qb(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    f = a.x,
    p = f === void 0 ? 0 : f,
    v = a.y,
    g = v === void 0 ? 0 : v,
    S = typeof c == "function" ? c({ x: p, y: g }) : { x: p, y: g };
  (p = S.x), (g = S.y);
  var h = a.hasOwnProperty("x"),
    m = a.hasOwnProperty("y"),
    y = Ot,
    w = Rt,
    C = window;
  if (u) {
    var P = fl(n),
      _ = "clientHeight",
      A = "clientWidth";
    if (
      (P === Ht(n) &&
        ((P = to(n)),
        gr(P).position !== "static" &&
          s === "absolute" &&
          ((_ = "scrollHeight"), (A = "scrollWidth"))),
      (P = P),
      o === Rt || ((o === Ot || o === un) && i === Gs))
    ) {
      w = ln;
      var $ = d && P === C && C.visualViewport ? C.visualViewport.height : P[_];
      (g -= $ - r.height), (g *= l ? 1 : -1);
    }
    if (o === Ot || ((o === Rt || o === ln) && i === Gs)) {
      y = un;
      var M = d && P === C && C.visualViewport ? C.visualViewport.width : P[A];
      (p -= M - r.width), (p *= l ? 1 : -1);
    }
  }
  var L = Object.assign({ position: s }, u && uB),
    Y = c === !0 ? cB({ x: p, y: g }, Ht(n)) : { x: p, y: g };
  if (((p = Y.x), (g = Y.y), l)) {
    var Q;
    return Object.assign(
      {},
      L,
      ((Q = {}),
      (Q[w] = m ? "0" : ""),
      (Q[y] = h ? "0" : ""),
      (Q.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + g + "px)"
          : "translate3d(" + p + "px, " + g + "px, 0)"),
      Q)
    );
  }
  return Object.assign(
    {},
    L,
    ((t = {}),
    (t[w] = m ? g + "px" : ""),
    (t[y] = h ? p + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function dB(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    s = n.roundOffsets,
    l = s === void 0 ? !0 : s,
    u = {
      placement: Bn(t.placement),
      variation: ta(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Qb(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Qb(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const fB = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dB,
  data: {},
};
var nu = { passive: !0 };
function pB(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    s = a === void 0 ? !0 : a,
    l = Ht(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, nu);
      }),
    s && l.addEventListener("resize", n.update, nu),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, nu);
        }),
        s && l.removeEventListener("resize", n.update, nu);
    }
  );
}
const hB = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: pB,
  data: {},
};
var mB = { left: "right", right: "left", bottom: "top", top: "bottom" };
function zu(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return mB[t];
  });
}
var vB = { start: "end", end: "start" };
function Zb(e) {
  return e.replace(/start|end/g, function (t) {
    return vB[t];
  });
}
function wg(e) {
  var t = Ht(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function kg(e) {
  return ea(to(e)).left + wg(e).scrollLeft;
}
function gB(e, t) {
  var n = Ht(e),
    r = to(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    s = 0,
    l = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var u = w5();
    (u || (!u && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: a, x: s + kg(e), y: l };
}
function yB(e) {
  var t,
    n = to(e),
    r = wg(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Po(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Po(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -r.scrollLeft + kg(e),
    l = -r.scrollTop;
  return (
    gr(o || n).direction === "rtl" &&
      (s += Po(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  );
}
function Cg(e) {
  var t = gr(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function T5(e) {
  return ["html", "body", "#document"].indexOf(Vn(e)) >= 0
    ? e.ownerDocument.body
    : on(e) && Cg(e)
    ? e
    : T5(Rd(e));
}
function ds(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = T5(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Ht(r),
    a = o ? [i].concat(i.visualViewport || [], Cg(r) ? r : []) : r,
    s = t.concat(a);
  return o ? s : s.concat(ds(Rd(a)));
}
function qh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function bB(e, t) {
  var n = ea(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function Jb(e, t, n) {
  return t === S5 ? qh(gB(e, n)) : Lo(t) ? bB(t, n) : qh(yB(to(e)));
}
function SB(e) {
  var t = ds(Rd(e)),
    n = ["absolute", "fixed"].indexOf(gr(e).position) >= 0,
    r = n && on(e) ? fl(e) : e;
  return Lo(r)
    ? t.filter(function (o) {
        return Lo(o) && k5(o, r) && Vn(o) !== "body";
      })
    : [];
}
function xB(e, t, n, r) {
  var o = t === "clippingParents" ? SB(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    s = i.reduce(function (l, u) {
      var c = Jb(e, u, r);
      return (
        (l.top = Po(c.top, l.top)),
        (l.right = Ac(c.right, l.right)),
        (l.bottom = Ac(c.bottom, l.bottom)),
        (l.left = Po(c.left, l.left)),
        l
      );
    }, Jb(e, a, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function P5(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Bn(r) : null,
    i = r ? ta(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case Rt:
      l = { x: a, y: t.y - n.height };
      break;
    case ln:
      l = { x: a, y: t.y + t.height };
      break;
    case un:
      l = { x: t.x + t.width, y: s };
      break;
    case Ot:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? xg(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Zi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Gs:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Ks(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    s = n.boundary,
    l = s === void 0 ? BN : s,
    u = n.rootBoundary,
    c = u === void 0 ? S5 : u,
    d = n.elementContext,
    f = d === void 0 ? Ra : d,
    p = n.altBoundary,
    v = p === void 0 ? !1 : p,
    g = n.padding,
    S = g === void 0 ? 0 : g,
    h = _5(typeof S != "number" ? S : E5(S, dl)),
    m = f === Ra ? VN : Ra,
    y = e.rects.popper,
    w = e.elements[v ? m : f],
    C = xB(Lo(w) ? w : w.contextElement || to(e.elements.popper), l, c, a),
    P = ea(e.elements.reference),
    _ = P5({ reference: P, element: y, strategy: "absolute", placement: o }),
    A = qh(Object.assign({}, y, _)),
    $ = f === Ra ? A : P,
    M = {
      top: C.top - $.top + h.top,
      bottom: $.bottom - C.bottom + h.bottom,
      left: C.left - $.left + h.left,
      right: $.right - C.right + h.right,
    },
    L = e.modifiersData.offset;
  if (f === Ra && L) {
    var Y = L[o];
    Object.keys(M).forEach(function (Q) {
      var ue = [un, ln].indexOf(Q) >= 0 ? 1 : -1,
        J = [Rt, ln].indexOf(Q) >= 0 ? "y" : "x";
      M[Q] += Y[J] * ue;
    });
  }
  return M;
}
function wB(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    s = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? x5 : l,
    c = ta(r),
    d = c
      ? s
        ? Xb
        : Xb.filter(function (v) {
            return ta(v) === c;
          })
      : dl,
    f = d.filter(function (v) {
      return u.indexOf(v) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (v, g) {
    return (
      (v[g] = Ks(e, { placement: g, boundary: o, rootBoundary: i, padding: a })[
        Bn(g)
      ]),
      v
    );
  }, {});
  return Object.keys(p).sort(function (v, g) {
    return p[v] - p[g];
  });
}
function kB(e) {
  if (Bn(e) === yg) return [];
  var t = zu(e);
  return [Zb(e), t, Zb(t)];
}
function CB(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        s = a === void 0 ? !0 : a,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        p = n.flipVariations,
        v = p === void 0 ? !0 : p,
        g = n.allowedAutoPlacements,
        S = t.options.placement,
        h = Bn(S),
        m = h === S,
        y = l || (m || !v ? [zu(S)] : kB(S)),
        w = [S].concat(y).reduce(function (K, Te) {
          return K.concat(
            Bn(Te) === yg
              ? wB(t, {
                  placement: Te,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: v,
                  allowedAutoPlacements: g,
                })
              : Te
          );
        }, []),
        C = t.rects.reference,
        P = t.rects.popper,
        _ = new Map(),
        A = !0,
        $ = w[0],
        M = 0;
      M < w.length;
      M++
    ) {
      var L = w[M],
        Y = Bn(L),
        Q = ta(L) === Zi,
        ue = [Rt, ln].indexOf(Y) >= 0,
        J = ue ? "width" : "height",
        q = Ks(t, {
          placement: L,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: u,
        }),
        I = ue ? (Q ? un : Ot) : Q ? ln : Rt;
      C[J] > P[J] && (I = zu(I));
      var D = zu(I),
        j = [];
      if (
        (i && j.push(q[Y] <= 0),
        s && j.push(q[I] <= 0, q[D] <= 0),
        j.every(function (K) {
          return K;
        }))
      ) {
        ($ = L), (A = !1);
        break;
      }
      _.set(L, j);
    }
    if (A)
      for (
        var U = v ? 3 : 1,
          ie = function (Te) {
            var xe = w.find(function (Xe) {
              var Le = _.get(Xe);
              if (Le)
                return Le.slice(0, Te).every(function (En) {
                  return En;
                });
            });
            if (xe) return ($ = xe), "break";
          },
          te = U;
        te > 0;
        te--
      ) {
        var B = ie(te);
        if (B === "break") break;
      }
    t.placement !== $ &&
      ((t.modifiersData[r]._skip = !0), (t.placement = $), (t.reset = !0));
  }
}
const _B = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: CB,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function eS(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function tS(e) {
  return [Rt, un, ln, Ot].some(function (t) {
    return e[t] >= 0;
  });
}
function EB(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = Ks(t, { elementContext: "reference" }),
    s = Ks(t, { altBoundary: !0 }),
    l = eS(a, r),
    u = eS(s, o, i),
    c = tS(l),
    d = tS(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": d,
    }));
}
const TB = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: EB,
};
function PB(e, t, n) {
  var r = Bn(e),
    o = [Ot, Rt].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    s = i[1];
  return (
    (a = a || 0),
    (s = (s || 0) * o),
    [Ot, un].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
  );
}
function AB(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = x5.reduce(function (c, d) {
      return (c[d] = PB(d, t.rects, i)), c;
    }, {}),
    s = a[t.placement],
    l = s.x,
    u = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = a);
}
const RB = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: AB,
};
function OB(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = P5({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const MB = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: OB,
  data: {},
};
function $B(e) {
  return e === "x" ? "y" : "x";
}
function DB(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    s = a === void 0 ? !1 : a,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    d = n.padding,
    f = n.tether,
    p = f === void 0 ? !0 : f,
    v = n.tetherOffset,
    g = v === void 0 ? 0 : v,
    S = Ks(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    h = Bn(t.placement),
    m = ta(t.placement),
    y = !m,
    w = xg(h),
    C = $B(w),
    P = t.modifiersData.popperOffsets,
    _ = t.rects.reference,
    A = t.rects.popper,
    $ =
      typeof g == "function"
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    M =
      typeof $ == "number"
        ? { mainAxis: $, altAxis: $ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, $),
    L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    Y = { x: 0, y: 0 };
  if (P) {
    if (i) {
      var Q,
        ue = w === "y" ? Rt : Ot,
        J = w === "y" ? ln : un,
        q = w === "y" ? "height" : "width",
        I = P[w],
        D = I + S[ue],
        j = I - S[J],
        U = p ? -A[q] / 2 : 0,
        ie = m === Zi ? _[q] : A[q],
        te = m === Zi ? -A[q] : -_[q],
        B = t.elements.arrow,
        K = p && B ? Sg(B) : { width: 0, height: 0 },
        Te = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : C5(),
        xe = Te[ue],
        Xe = Te[J],
        Le = cs(0, _[q], K[q]),
        En = y
          ? _[q] / 2 - U - Le - xe - M.mainAxis
          : ie - Le - xe - M.mainAxis,
        Un = y
          ? -_[q] / 2 + U + Le + Xe + M.mainAxis
          : te + Le + Xe + M.mainAxis,
        Tn = t.elements.arrow && fl(t.elements.arrow),
        Hn = Tn ? (w === "y" ? Tn.clientTop || 0 : Tn.clientLeft || 0) : 0,
        Sr = (Q = L == null ? void 0 : L[w]) != null ? Q : 0,
        Wo = I + En - Sr - Hn,
        ee = I + Un - Sr,
        be = cs(p ? Ac(D, Wo) : D, I, p ? Po(j, ee) : j);
      (P[w] = be), (Y[w] = be - I);
    }
    if (s) {
      var Ie,
        ht = w === "x" ? Rt : Ot,
        cn = w === "x" ? ln : un,
        mt = P[C],
        xr = C === "y" ? "height" : "width",
        no = mt + S[ht],
        dn = mt - S[cn],
        Uo = [Rt, Ot].indexOf(h) !== -1,
        da = (Ie = L == null ? void 0 : L[C]) != null ? Ie : 0,
        yl = Uo ? no : mt - _[xr] - A[xr] - da + M.altAxis,
        bl = Uo ? mt + _[xr] + A[xr] - da - M.altAxis : dn,
        ro = p && Uo ? oB(yl, mt, bl) : cs(p ? yl : no, mt, p ? bl : dn);
      (P[C] = ro), (Y[C] = ro - mt);
    }
    t.modifiersData[r] = Y;
  }
}
const IB = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: DB,
  requiresIfExists: ["offset"],
};
function zB(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function FB(e) {
  return e === Ht(e) || !on(e) ? wg(e) : zB(e);
}
function LB(e) {
  var t = e.getBoundingClientRect(),
    n = Ji(t.width) / e.offsetWidth || 1,
    r = Ji(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function jB(e, t, n) {
  n === void 0 && (n = !1);
  var r = on(t),
    o = on(t) && LB(t),
    i = to(t),
    a = ea(e, o, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Vn(t) !== "body" || Cg(i)) && (s = FB(t)),
      on(t)
        ? ((l = ea(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = kg(i))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  );
}
function NB(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function BB(e) {
  var t = NB(e);
  return ZN.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function VB(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function WB(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var nS = { placement: "bottom", modifiers: [], strategy: "absolute" };
function rS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function UB(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? nS : o;
  return function (s, l, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, nS, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: c,
        setOptions: function (h) {
          var m = typeof h == "function" ? h(c.options) : h;
          g(),
            (c.options = Object.assign({}, i, c.options, m)),
            (c.scrollParents = {
              reference: Lo(s)
                ? ds(s)
                : s.contextElement
                ? ds(s.contextElement)
                : [],
              popper: ds(l),
            });
          var y = BB(WB([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = y.filter(function (w) {
              return w.enabled;
            })),
            v(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var h = c.elements,
              m = h.reference,
              y = h.popper;
            if (rS(m, y)) {
              (c.rects = {
                reference: jB(m, fl(y), c.options.strategy === "fixed"),
                popper: Sg(y),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (M) {
                  return (c.modifiersData[M.name] = Object.assign({}, M.data));
                });
              for (var w = 0; w < c.orderedModifiers.length; w++) {
                if (c.reset === !0) {
                  (c.reset = !1), (w = -1);
                  continue;
                }
                var C = c.orderedModifiers[w],
                  P = C.fn,
                  _ = C.options,
                  A = _ === void 0 ? {} : _,
                  $ = C.name;
                typeof P == "function" &&
                  (c = P({ state: c, options: A, name: $, instance: p }) || c);
              }
            }
          }
        },
        update: VB(function () {
          return new Promise(function (S) {
            p.forceUpdate(), S(c);
          });
        }),
        destroy: function () {
          g(), (f = !0);
        },
      };
    if (!rS(s, l)) return p;
    p.setOptions(u).then(function (S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function v() {
      c.orderedModifiers.forEach(function (S) {
        var h = S.name,
          m = S.options,
          y = m === void 0 ? {} : m,
          w = S.effect;
        if (typeof w == "function") {
          var C = w({ state: c, name: h, instance: p, options: y }),
            P = function () {};
          d.push(C || P);
        }
      });
    }
    function g() {
      d.forEach(function (S) {
        return S();
      }),
        (d = []);
    }
    return p;
  };
}
var HB = [hB, MB, fB, tB, RB, _B, IB, lB, TB],
  GB = UB({ defaultModifiers: HB });
function KB(e = {}) {
  const {
      enabled: t = !0,
      modifiers: n,
      placement: r = "bottom",
      strategy: o = "absolute",
      arrowPadding: i = 8,
      eventListeners: a = !0,
      offset: s,
      gutter: l = 8,
      flip: u = !0,
      boundary: c = "clippingParents",
      preventOverflow: d = !0,
      matchWidth: f,
      direction: p = "ltr",
    } = e,
    v = b.useRef(null),
    g = b.useRef(null),
    S = b.useRef(null),
    h = NN(r, p),
    m = b.useRef(() => {}),
    y = b.useCallback(() => {
      var M;
      !t ||
        !v.current ||
        !g.current ||
        ((M = m.current) == null || M.call(m),
        (S.current = GB(v.current, g.current, {
          placement: h,
          modifiers: [
            FN,
            DN,
            $N,
            { ...MN, enabled: !!f },
            { name: "eventListeners", ...ON(a) },
            { name: "arrow", options: { padding: i } },
            { name: "offset", options: { offset: s ?? [0, l] } },
            { name: "flip", enabled: !!u, options: { padding: 8 } },
            { name: "preventOverflow", enabled: !!d, options: { boundary: c } },
            ...(n ?? []),
          ],
          strategy: o,
        })),
        S.current.forceUpdate(),
        (m.current = S.current.destroy));
    }, [h, t, n, f, a, i, s, l, u, d, c, o]);
  b.useEffect(
    () => () => {
      var M;
      !v.current &&
        !g.current &&
        ((M = S.current) == null || M.destroy(), (S.current = null));
    },
    []
  );
  const w = b.useCallback(
      (M) => {
        (v.current = M), y();
      },
      [y]
    ),
    C = b.useCallback((M = {}, L = null) => ({ ...M, ref: Dt(w, L) }), [w]),
    P = b.useCallback(
      (M) => {
        (g.current = M), y();
      },
      [y]
    ),
    _ = b.useCallback(
      (M = {}, L = null) => ({
        ...M,
        ref: Dt(P, L),
        style: {
          ...M.style,
          position: o,
          minWidth: f ? void 0 : "max-content",
          inset: "0 auto auto 0",
        },
      }),
      [o, P, f]
    ),
    A = b.useCallback((M = {}, L = null) => {
      const { size: Y, shadowColor: Q, bg: ue, style: J, ...q } = M;
      return { ...q, ref: L, "data-popper-arrow": "", style: qB(M) };
    }, []),
    $ = b.useCallback(
      (M = {}, L = null) => ({ ...M, ref: L, "data-popper-arrow-inner": "" }),
      []
    );
  return {
    update() {
      var M;
      (M = S.current) == null || M.update();
    },
    forceUpdate() {
      var M;
      (M = S.current) == null || M.forceUpdate();
    },
    transformOrigin: Ft.transformOrigin.varRef,
    referenceRef: w,
    popperRef: P,
    getPopperProps: _,
    getArrowProps: A,
    getArrowInnerProps: $,
    getReferenceProps: C,
  };
}
function qB(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e,
    i = { ...o, position: "absolute" };
  return (
    t && (i["--popper-arrow-size"] = t),
    n && (i["--popper-arrow-shadow-color"] = n),
    r && (i["--popper-arrow-bg"] = r),
    i
  );
}
function XB(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = Wr(n),
    a = Wr(t),
    [s, l] = b.useState(e.defaultIsOpen || !1),
    u = r !== void 0 ? r : s,
    c = r !== void 0,
    d = b.useId(),
    f = o ?? `disclosure-${d}`,
    p = b.useCallback(() => {
      c || l(!1), a == null || a();
    }, [c, a]),
    v = b.useCallback(() => {
      c || l(!0), i == null || i();
    }, [c, i]),
    g = b.useCallback(() => {
      u ? p() : v();
    }, [u, v, p]);
  function S(m = {}) {
    return {
      ...m,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(y) {
        var w;
        (w = m.onClick) == null || w.call(m, y), g();
      },
    };
  }
  function h(m = {}) {
    return { ...m, hidden: !u, id: f };
  }
  return {
    isOpen: u,
    onOpen: v,
    onClose: p,
    onToggle: g,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: h,
  };
}
function YB(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e,
    o = Wr(n),
    a = b.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }).current;
  b.useEffect(() => {
    if (!r) return;
    const s = (d) => {
        ip(d, t) && (a.isPointerDown = !0);
      },
      l = (d) => {
        if (a.ignoreEmulatedMouseEvents) {
          a.ignoreEmulatedMouseEvents = !1;
          return;
        }
        a.isPointerDown && n && ip(d, t) && ((a.isPointerDown = !1), o(d));
      },
      u = (d) => {
        (a.ignoreEmulatedMouseEvents = !0),
          n && a.isPointerDown && ip(d, t) && ((a.isPointerDown = !1), o(d));
      },
      c = A5(t.current);
    return (
      c.addEventListener("mousedown", s, !0),
      c.addEventListener("mouseup", l, !0),
      c.addEventListener("touchstart", s, !0),
      c.addEventListener("touchend", u, !0),
      () => {
        c.removeEventListener("mousedown", s, !0),
          c.removeEventListener("mouseup", l, !0),
          c.removeEventListener("touchstart", s, !0),
          c.removeEventListener("touchend", u, !0);
      }
    );
  }, [n, t, o, a, r]);
}
function ip(e, t) {
  var n;
  const r = e.target;
  return r && !A5(r).contains(r)
    ? !1
    : !((n = t.current) != null && n.contains(r));
}
function A5(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function QB(e) {
  const { isOpen: t, ref: n } = e,
    [r, o] = b.useState(t),
    [i, a] = b.useState(!1);
  return (
    b.useEffect(() => {
      i || (o(t), a(!0));
    }, [t, i, r]),
    CL(
      () => n.current,
      "animationend",
      () => {
        o(t);
      }
    ),
    {
      present: !(t ? !1 : !r),
      onComplete() {
        var l;
        const u = Vj(n.current),
          c = new u.CustomEvent("animationend", { bubbles: !0 });
        (l = n.current) == null || l.dispatchEvent(c);
      },
    }
  );
}
function ZB(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || (o === "keepMounted" && t));
}
var [JB, eV, tV, nV] = KF(),
  [rV, pl] = pt({ strict: !1, name: "MenuContext" });
function oV(e, ...t) {
  const n = b.useId(),
    r = e || n;
  return b.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function R5(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function oS(e) {
  return R5(e).activeElement === e;
}
function iV(e = {}) {
  const {
      id: t,
      closeOnSelect: n = !0,
      closeOnBlur: r = !0,
      initialFocusRef: o,
      autoSelect: i = !0,
      isLazy: a,
      isOpen: s,
      defaultIsOpen: l,
      onClose: u,
      onOpen: c,
      placement: d = "bottom-start",
      lazyBehavior: f = "unmount",
      direction: p,
      computePositionOnMount: v = !1,
      ...g
    } = e,
    S = b.useRef(null),
    h = b.useRef(null),
    m = tV(),
    y = b.useCallback(() => {
      requestAnimationFrame(() => {
        var B;
        (B = S.current) == null || B.focus({ preventScroll: !1 });
      });
    }, []),
    w = b.useCallback(() => {
      const B = setTimeout(() => {
        var K;
        if (o) (K = o.current) == null || K.focus();
        else {
          const Te = m.firstEnabled();
          Te && Q(Te.index);
        }
      });
      D.current.add(B);
    }, [m, o]),
    C = b.useCallback(() => {
      const B = setTimeout(() => {
        const K = m.lastEnabled();
        K && Q(K.index);
      });
      D.current.add(B);
    }, [m]),
    P = b.useCallback(() => {
      c == null || c(), i ? w() : y();
    }, [i, w, y, c]),
    {
      isOpen: _,
      onOpen: A,
      onClose: $,
      onToggle: M,
    } = XB({ isOpen: s, defaultIsOpen: l, onClose: u, onOpen: P });
  YB({
    enabled: _ && r,
    ref: S,
    handler: (B) => {
      var K;
      ((K = h.current) != null && K.contains(B.target)) || $();
    },
  });
  const L = KB({ ...g, enabled: _ || v, placement: d, direction: p }),
    [Y, Q] = b.useState(-1);
  qi(() => {
    _ || Q(-1);
  }, [_]),
    TN(S, { focusRef: h, visible: _, shouldFocus: !0 });
  const ue = QB({ isOpen: _, ref: S }),
    [J, q] = oV(t, "menu-button", "menu-list"),
    I = b.useCallback(() => {
      A(), y();
    }, [A, y]),
    D = b.useRef(new Set([]));
  b.useEffect(() => {
    const B = D.current;
    return () => {
      B.forEach((K) => clearTimeout(K)), B.clear();
    };
  }, []);
  const j = b.useCallback(() => {
      A(), w();
    }, [w, A]),
    U = b.useCallback(() => {
      A(), C();
    }, [A, C]),
    ie = b.useCallback(() => {
      var B, K;
      const Te = R5(S.current),
        xe = (B = S.current) == null ? void 0 : B.contains(Te.activeElement);
      if (!(_ && !xe)) return;
      const Le = (K = m.item(Y)) == null ? void 0 : K.node;
      Le == null || Le.focus({ preventScroll: !0 });
    }, [_, Y, m]),
    te = b.useRef(null);
  return {
    openAndFocusMenu: I,
    openAndFocusFirstItem: j,
    openAndFocusLastItem: U,
    onTransitionEnd: ie,
    unstable__animationState: ue,
    descendants: m,
    popper: L,
    buttonId: J,
    menuId: q,
    forceUpdate: L.forceUpdate,
    orientation: "vertical",
    isOpen: _,
    onToggle: M,
    onOpen: A,
    onClose: $,
    menuRef: S,
    buttonRef: h,
    focusedIndex: Y,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: Q,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: te,
  };
}
function aV(e = {}, t = null) {
  const n = pl(),
    {
      onToggle: r,
      popper: o,
      openAndFocusFirstItem: i,
      openAndFocusLastItem: a,
    } = n,
    s = b.useCallback(
      (l) => {
        const u = l.key,
          d = { Enter: i, ArrowDown: i, ArrowUp: a }[u];
        d && (l.preventDefault(), l.stopPropagation(), d(l));
      },
      [i, a]
    );
  return {
    ...e,
    ref: Dt(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": re(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Ne(e.onClick, r),
    onKeyDown: Ne(e.onKeyDown, s),
  };
}
function Xh(e) {
  var t;
  return (
    cV(e) &&
    !!(
      (t = e == null ? void 0 : e.getAttribute("role")) != null &&
      t.startsWith("menuitem")
    )
  );
}
function sV(e = {}, t = null) {
  const n = pl();
  if (!n)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
      focusedIndex: r,
      setFocusedIndex: o,
      menuRef: i,
      isOpen: a,
      onClose: s,
      menuId: l,
      isLazy: u,
      lazyBehavior: c,
      unstable__animationState: d,
    } = n,
    f = eV(),
    p = wN({ preventDefault: (h) => h.key !== " " && Xh(h.target) }),
    v = b.useCallback(
      (h) => {
        if (!h.currentTarget.contains(h.target)) return;
        const m = h.key,
          w = {
            Tab: (P) => P.preventDefault(),
            Escape: s,
            ArrowDown: () => {
              const P = f.nextEnabled(r);
              P && o(P.index);
            },
            ArrowUp: () => {
              const P = f.prevEnabled(r);
              P && o(P.index);
            },
          }[m];
        if (w) {
          h.preventDefault(), w(h);
          return;
        }
        const C = p((P) => {
          const _ = kN(
            f.values(),
            P,
            (A) => {
              var $, M;
              return (M =
                ($ = A == null ? void 0 : A.node) == null
                  ? void 0
                  : $.textContent) != null
                ? M
                : "";
            },
            f.item(r)
          );
          if (_) {
            const A = f.indexOf(_.node);
            o(A);
          }
        });
        Xh(h.target) && C(h);
      },
      [f, r, p, s, o]
    ),
    g = b.useRef(!1);
  a && (g.current = !0);
  const S = ZB({
    wasSelected: g.current,
    enabled: u,
    mode: c,
    isSelected: d.present,
  });
  return {
    ...e,
    ref: Dt(i, t),
    children: S ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: { ...e.style, transformOrigin: "var(--popper-transform-origin)" },
    "aria-orientation": "vertical",
    onKeyDown: Ne(e.onKeyDown, v),
  };
}
function lV(e = {}) {
  const { popper: t, isOpen: n } = pl();
  return t.getPopperProps({
    ...e,
    style: { visibility: n ? "visible" : "hidden", ...e.style },
  });
}
function uV(e = {}, t = null) {
  const {
      onMouseEnter: n,
      onMouseMove: r,
      onMouseLeave: o,
      onClick: i,
      onFocus: a,
      isDisabled: s,
      isFocusable: l,
      closeOnSelect: u,
      type: c,
      ...d
    } = e,
    f = pl(),
    {
      setFocusedIndex: p,
      focusedIndex: v,
      closeOnSelect: g,
      onClose: S,
      menuRef: h,
      isOpen: m,
      menuId: y,
      rafId: w,
    } = f,
    C = b.useRef(null),
    P = `${y}-menuitem-${b.useId()}`,
    { index: _, register: A } = nV({ disabled: s && !l }),
    $ = b.useCallback(
      (I) => {
        n == null || n(I), !s && p(_);
      },
      [p, _, s, n]
    ),
    M = b.useCallback(
      (I) => {
        r == null || r(I), C.current && !oS(C.current) && $(I);
      },
      [$, r]
    ),
    L = b.useCallback(
      (I) => {
        o == null || o(I), !s && p(-1);
      },
      [p, s, o]
    ),
    Y = b.useCallback(
      (I) => {
        i == null || i(I), Xh(I.currentTarget) && (u ?? g) && S();
      },
      [S, i, g, u]
    ),
    Q = b.useCallback(
      (I) => {
        a == null || a(I), p(_);
      },
      [p, a, _]
    ),
    ue = _ === v,
    J = s && !l;
  qi(() => {
    if (m)
      return (
        ue && !J && C.current
          ? (w.current && cancelAnimationFrame(w.current),
            (w.current = requestAnimationFrame(() => {
              var I;
              (I = C.current) == null || I.focus({ preventScroll: !0 }),
                (w.current = null);
            })))
          : h.current &&
            !oS(h.current) &&
            h.current.focus({ preventScroll: !0 }),
        () => {
          w.current && cancelAnimationFrame(w.current);
        }
      );
  }, [ue, J, h, m]);
  const q = _N({
    onClick: Y,
    onFocus: Q,
    onMouseEnter: $,
    onMouseMove: M,
    onMouseLeave: L,
    ref: Dt(A, C, t),
    isDisabled: s,
    isFocusable: l,
  });
  return {
    ...d,
    ...q,
    type: c ?? q.type,
    id: P,
    role: "menuitem",
    tabIndex: ue ? 0 : -1,
  };
}
function cV(e) {
  var t;
  if (!dV(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function dV(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
var [fV, hl] = pt({
    name: "MenuStylesContext",
    errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `,
  }),
  _g = (e) => {
    const { children: t } = e,
      n = br("Menu", e),
      r = wt(e),
      { direction: o } = Qr(),
      { descendants: i, ...a } = iV({ ...r, direction: o }),
      s = b.useMemo(() => a, [a]),
      { isOpen: l, onClose: u, forceUpdate: c } = s;
    return k.jsx(JB, {
      value: i,
      children: k.jsx(rV, {
        value: s,
        children: k.jsx(fV, {
          value: n,
          children: er(t, { isOpen: l, onClose: u, forceUpdate: c }),
        }),
      }),
    });
  };
_g.displayName = "Menu";
var O5 = X((e, t) => {
  const n = hl();
  return k.jsx(V.span, {
    ref: t,
    ...e,
    __css: n.command,
    className: "chakra-menu__command",
  });
});
O5.displayName = "MenuCommand";
var pV = X((e, t) => {
    const { type: n, ...r } = e,
      o = hl(),
      i = r.as || n ? n ?? void 0 : "button",
      a = b.useMemo(
        () => ({
          textDecoration: "none",
          color: "inherit",
          userSelect: "none",
          display: "flex",
          width: "100%",
          alignItems: "center",
          textAlign: "start",
          flex: "0 0 auto",
          outline: 0,
          ...o.item,
        }),
        [o.item]
      );
    return k.jsx(V.button, { ref: t, type: i, ...r, __css: a });
  }),
  M5 = (e) => {
    const { className: t, children: n, ...r } = e,
      o = hl(),
      i = b.Children.only(n),
      a = b.isValidElement(i)
        ? b.cloneElement(i, {
            focusable: "false",
            "aria-hidden": !0,
            className: oe("chakra-menu__icon", i.props.className),
          })
        : null,
      s = oe("chakra-menu__icon-wrapper", t);
    return k.jsx(V.span, { className: s, ...r, __css: o.icon, children: a });
  };
M5.displayName = "MenuIcon";
var Eg = X((e, t) => {
  const {
      icon: n,
      iconSpacing: r = "0.75rem",
      command: o,
      commandSpacing: i = "0.75rem",
      children: a,
      ...s
    } = e,
    l = uV(s, t),
    c =
      n || o
        ? k.jsx("span", {
            style: { pointerEvents: "none", flex: 1 },
            children: a,
          })
        : a;
  return k.jsxs(pV, {
    ...l,
    className: oe("chakra-menu__menuitem", l.className),
    children: [
      n && k.jsx(M5, { fontSize: "0.8em", marginEnd: r, children: n }),
      c,
      o && k.jsx(O5, { marginStart: i, children: o }),
    ],
  });
});
Eg.displayName = "MenuItem";
var hV = {
    enter: {
      visibility: "visible",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      transitionEnd: { visibility: "hidden" },
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.1, easings: "easeOut" },
    },
  },
  mV = V(ll.div),
  Tg = X(function (t, n) {
    var r, o;
    const { rootProps: i, motionProps: a, ...s } = t,
      { isOpen: l, onTransitionEnd: u, unstable__animationState: c } = pl(),
      d = sV(s, n),
      f = lV(i),
      p = hl();
    return k.jsx(V.div, {
      ...f,
      __css: {
        zIndex:
          (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex,
      },
      children: k.jsx(mV, {
        variants: hV,
        initial: !1,
        animate: l ? "enter" : "exit",
        __css: { outline: 0, ...p.list },
        ...a,
        className: oe("chakra-menu__menu-list", d.className),
        ...d,
        onUpdate: u,
        onAnimationComplete: kP(c.onComplete, d.onAnimationComplete),
      }),
    });
  });
Tg.displayName = "MenuList";
var vV = X((e, t) => {
    const n = hl();
    return k.jsx(V.button, {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...n.button,
      },
    });
  }),
  Pg = X((e, t) => {
    const { children: n, as: r, ...o } = e,
      i = aV(o, t),
      a = r || vV;
    return k.jsx(a, {
      ...i,
      className: oe("chakra-menu__menu-button", e.className),
      children: k.jsx(V.span, {
        __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
        children: e.children,
      }),
    });
  });
Pg.displayName = "MenuButton";
var gV = Object.defineProperty,
  yV = (e, t, n) =>
    t in e
      ? gV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  bV = (e, t, n) => (yV(e, t + "", n), n),
  SV = class {
    constructor() {
      bV(this, "modals"), (this.modals = new Map());
    }
    add(e) {
      return this.modals.set(e, this.modals.size + 1), this.modals.size;
    }
    remove(e) {
      this.modals.delete(e);
    }
    isTopModal(e) {
      return e ? this.modals.get(e) === this.modals.size : !1;
    }
  },
  Yh = new SV();
function $5(e, t) {
  const [n, r] = b.useState(0);
  return (
    b.useEffect(() => {
      const o = e.current;
      if (o) {
        if (t) {
          const i = Yh.add(o);
          r(i);
        }
        return () => {
          Yh.remove(o), r(0);
        };
      }
    }, [t, e]),
    n
  );
}
var xV = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Qo = new WeakMap(),
  ru = new WeakMap(),
  ou = {},
  ap = 0,
  D5 = function (e) {
    return e && (e.host || D5(e.parentNode));
  },
  wV = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = D5(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  kV = function (e, t, n, r) {
    var o = wV(t, Array.isArray(e) ? e : [e]);
    ou[n] || (ou[n] = new WeakMap());
    var i = ou[n],
      a = [],
      s = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || s.has(d) || (s.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (s.has(f)) c(f);
          else
            try {
              var p = f.getAttribute(r),
                v = p !== null && p !== "false",
                g = (Qo.get(f) || 0) + 1,
                S = (i.get(f) || 0) + 1;
              Qo.set(f, g),
                i.set(f, S),
                a.push(f),
                g === 1 && v && ru.set(f, !0),
                S === 1 && f.setAttribute(n, "true"),
                v || f.setAttribute(r, "true");
            } catch (h) {
              console.error("aria-hidden: cannot operate on ", f, h);
            }
        });
    };
    return (
      c(t),
      s.clear(),
      ap++,
      function () {
        a.forEach(function (d) {
          var f = Qo.get(d) - 1,
            p = i.get(d) - 1;
          Qo.set(d, f),
            i.set(d, p),
            f || (ru.has(d) || d.removeAttribute(r), ru.delete(d)),
            p || d.removeAttribute(n);
        }),
          ap--,
          ap ||
            ((Qo = new WeakMap()),
            (Qo = new WeakMap()),
            (ru = new WeakMap()),
            (ou = {}));
      }
    );
  },
  CV = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = xV(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        kV(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
function _V(e) {
  const {
      isOpen: t,
      onClose: n,
      id: r,
      closeOnOverlayClick: o = !0,
      closeOnEsc: i = !0,
      useInert: a = !0,
      onOverlayClick: s,
      onEsc: l,
    } = e,
    u = b.useRef(null),
    c = b.useRef(null),
    [d, f, p] = TV(
      r,
      "chakra-modal",
      "chakra-modal--header",
      "chakra-modal--body"
    );
  EV(u, t && a);
  const v = $5(u, t),
    g = b.useRef(null),
    S = b.useCallback(($) => {
      g.current = $.target;
    }, []),
    h = b.useCallback(
      ($) => {
        $.key === "Escape" &&
          ($.stopPropagation(), i && (n == null || n()), l == null || l());
      },
      [i, n, l]
    ),
    [m, y] = b.useState(!1),
    [w, C] = b.useState(!1),
    P = b.useCallback(
      ($ = {}, M = null) => ({
        role: "dialog",
        ...$,
        ref: Dt(M, u),
        id: d,
        tabIndex: -1,
        "aria-modal": !0,
        "aria-labelledby": m ? f : void 0,
        "aria-describedby": w ? p : void 0,
        onClick: Ne($.onClick, (L) => L.stopPropagation()),
      }),
      [p, w, d, f, m]
    ),
    _ = b.useCallback(
      ($) => {
        $.stopPropagation(),
          g.current === $.target &&
            Yh.isTopModal(u.current) &&
            (o && (n == null || n()), s == null || s());
      },
      [n, o, s]
    ),
    A = b.useCallback(
      ($ = {}, M = null) => ({
        ...$,
        ref: Dt(M, c),
        onClick: Ne($.onClick, _),
        onKeyDown: Ne($.onKeyDown, h),
        onMouseDown: Ne($.onMouseDown, S),
      }),
      [h, S, _]
    );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: C,
    setHeaderMounted: y,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: P,
    getDialogContainerProps: A,
    index: v,
  };
}
function EV(e, t) {
  const n = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t)) return CV(e.current);
  }, [t, e, n]);
}
function TV(e, ...t) {
  const n = b.useId(),
    r = e || n;
  return b.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [PV, ml] = pt({
    name: "ModalStylesContext",
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
  }),
  [AV, la] = pt({
    strict: !0,
    name: "ModalContext",
    errorMessage:
      "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
  }),
  I5 = (e) => {
    const t = {
        scrollBehavior: "outside",
        autoFocus: !0,
        trapFocus: !0,
        returnFocusOnClose: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        motionPreset: "scale",
        lockFocusAcrossFrames: !0,
        ...e,
      },
      {
        portalProps: n,
        children: r,
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: p,
        onCloseComplete: v,
      } = t,
      g = br("Modal", t),
      h = {
        ..._V(t),
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: p,
      };
    return k.jsx(AV, {
      value: h,
      children: k.jsx(PV, {
        value: g,
        children: k.jsx(kd, {
          onExitComplete: v,
          children: h.isOpen && k.jsx(tl, { ...n, children: r }),
        }),
      }),
    });
  };
I5.displayName = "Modal";
var Fu = "right-scroll-bar-position",
  Lu = "width-before-scroll-bar",
  RV = "with-scroll-bars-hidden",
  OV = "--removed-body-scroll-bar-size",
  z5 = $C(),
  sp = function () {},
  Od = b.forwardRef(function (e, t) {
    var n = b.useRef(null),
      r = b.useState({
        onScrollCapture: sp,
        onWheelCapture: sp,
        onTouchMoveCapture: sp,
      }),
      o = r[0],
      i = r[1],
      a = e.forwardProps,
      s = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noIsolation,
      v = e.inert,
      g = e.allowPinchZoom,
      S = e.as,
      h = S === void 0 ? "div" : S,
      m = e.gapMode,
      y = RC(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      w = f,
      C = AC([n, t]),
      P = In(In({}, y), o);
    return b.createElement(
      b.Fragment,
      null,
      c &&
        b.createElement(w, {
          sideCar: z5,
          removeScrollBar: u,
          shards: d,
          noIsolation: p,
          inert: v,
          setCallbacks: i,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: m,
        }),
      a
        ? b.cloneElement(b.Children.only(s), In(In({}, P), { ref: C }))
        : b.createElement(h, In({}, P, { className: l, ref: C }), s)
    );
  });
Od.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Od.classNames = { fullWidth: Lu, zeroRight: Fu };
var MV = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function $V() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = MV();
  return t && e.setAttribute("nonce", t), e;
}
function DV(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function IV(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var zV = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = $V()) && (DV(t, n), IV(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  FV = function () {
    var e = zV();
    return function (t, n) {
      b.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  F5 = function () {
    var e = FV(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  LV = { left: 0, top: 0, right: 0, gap: 0 },
  lp = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  jV = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [lp(n), lp(r), lp(o)];
  },
  NV = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return LV;
    var t = jV(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  BV = F5(),
  Fi = "data-scroll-locked",
  VV = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      a = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          RV,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Fi,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Fu,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Lu,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Fu, " .")
        .concat(
          Fu,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Lu, " .")
        .concat(
          Lu,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Fi,
          `] {
    `
        )
        .concat(OV, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  iS = function () {
    var e = parseInt(document.body.getAttribute(Fi) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  WV = function () {
    b.useEffect(function () {
      return (
        document.body.setAttribute(Fi, (iS() + 1).toString()),
        function () {
          var e = iS() - 1;
          e <= 0
            ? document.body.removeAttribute(Fi)
            : document.body.setAttribute(Fi, e.toString());
        }
      );
    }, []);
  },
  UV = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    WV();
    var i = b.useMemo(
      function () {
        return NV(o);
      },
      [o]
    );
    return b.createElement(BV, { styles: VV(i, !t, o, n ? "" : "!important") });
  },
  Qh = !1;
if (typeof window < "u")
  try {
    var iu = Object.defineProperty({}, "passive", {
      get: function () {
        return (Qh = !0), !0;
      },
    });
    window.addEventListener("test", iu, iu),
      window.removeEventListener("test", iu, iu);
  } catch {
    Qh = !1;
  }
var Zo = Qh ? { passive: !1 } : !1,
  HV = function (e) {
    return e.tagName === "TEXTAREA";
  },
  L5 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !HV(e) && n[t] === "visible")
    );
  },
  GV = function (e) {
    return L5(e, "overflowY");
  },
  KV = function (e) {
    return L5(e, "overflowX");
  },
  aS = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = j5(e, r);
      if (o) {
        var i = N5(e, r),
          a = i[1],
          s = i[2];
        if (a > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  qV = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  XV = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  j5 = function (e, t) {
    return e === "v" ? GV(t) : KV(t);
  },
  N5 = function (e, t) {
    return e === "v" ? qV(t) : XV(t);
  },
  YV = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  QV = function (e, t, n, r, o) {
    var i = YV(e, window.getComputedStyle(t).direction),
      a = i * r,
      s = n.target,
      l = t.contains(s),
      u = !1,
      c = a > 0,
      d = 0,
      f = 0;
    do {
      var p = N5(e, s),
        v = p[0],
        g = p[1],
        S = p[2],
        h = g - S - i * v;
      (v || h) && j5(e, s) && ((d += h), (f += v)),
        s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
    } while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  au = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  sS = function (e) {
    return [e.deltaX, e.deltaY];
  },
  lS = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ZV = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  JV = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  eW = 0,
  Jo = [];
function tW(e) {
  var t = b.useRef([]),
    n = b.useRef([0, 0]),
    r = b.useRef(),
    o = b.useState(eW++)[0],
    i = b.useState(F5)[0],
    a = b.useRef(e);
  b.useEffect(
    function () {
      a.current = e;
    },
    [e]
  ),
    b.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = OL([e.lockRef.current], (e.shards || []).map(lS), !0).filter(
            Boolean
          );
          return (
            g.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = b.useCallback(function (g, S) {
      if ("touches" in g && g.touches.length === 2)
        return !a.current.allowPinchZoom;
      var h = au(g),
        m = n.current,
        y = "deltaX" in g ? g.deltaX : m[0] - h[0],
        w = "deltaY" in g ? g.deltaY : m[1] - h[1],
        C,
        P = g.target,
        _ = Math.abs(y) > Math.abs(w) ? "h" : "v";
      if ("touches" in g && _ === "h" && P.type === "range") return !1;
      var A = aS(_, P);
      if (!A) return !0;
      if ((A ? (C = _) : ((C = _ === "v" ? "h" : "v"), (A = aS(_, P))), !A))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (y || w) && (r.current = C), !C)
      )
        return !0;
      var $ = r.current || C;
      return QV($, S, g, $ === "h" ? y : w, !0);
    }, []),
    l = b.useCallback(function (g) {
      var S = g;
      if (!(!Jo.length || Jo[Jo.length - 1] !== i)) {
        var h = "deltaY" in S ? sS(S) : au(S),
          m = t.current.filter(function (C) {
            return (
              C.name === S.type &&
              (C.target === S.target || S.target === C.shadowParent) &&
              ZV(C.delta, h)
            );
          })[0];
        if (m && m.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!m) {
          var y = (a.current.shards || [])
              .map(lS)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(S.target);
              }),
            w = y.length > 0 ? s(S, y[0]) : !a.current.noIsolation;
          w && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    u = b.useCallback(function (g, S, h, m) {
      var y = { name: g, delta: S, target: h, should: m, shadowParent: nW(h) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (w) {
            return w !== y;
          });
        }, 1);
    }, []),
    c = b.useCallback(function (g) {
      (n.current = au(g)), (r.current = void 0);
    }, []),
    d = b.useCallback(function (g) {
      u(g.type, sS(g), g.target, s(g, e.lockRef.current));
    }, []),
    f = b.useCallback(function (g) {
      u(g.type, au(g), g.target, s(g, e.lockRef.current));
    }, []);
  b.useEffect(function () {
    return (
      Jo.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, Zo),
      document.addEventListener("touchmove", l, Zo),
      document.addEventListener("touchstart", c, Zo),
      function () {
        (Jo = Jo.filter(function (g) {
          return g !== i;
        })),
          document.removeEventListener("wheel", l, Zo),
          document.removeEventListener("touchmove", l, Zo),
          document.removeEventListener("touchstart", c, Zo);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    v = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    v ? b.createElement(i, { styles: JV(o) }) : null,
    p ? b.createElement(UV, { gapMode: e.gapMode }) : null
  );
}
function nW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const rW = ML(z5, tW);
var B5 = b.forwardRef(function (e, t) {
  return b.createElement(Od, In({}, e, { ref: t, sideCar: rW }));
});
B5.classNames = Od.classNames;
function oW(e) {
  const {
      autoFocus: t,
      trapFocus: n,
      dialogRef: r,
      initialFocusRef: o,
      blockScrollOnMount: i,
      allowPinchZoom: a,
      finalFocusRef: s,
      returnFocusOnClose: l,
      preserveScrollBarGap: u,
      lockFocusAcrossFrames: c,
      isOpen: d,
    } = la(),
    [f, p] = rC();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const v = $5(r, d);
  return k.jsx(l5, {
    autoFocus: t,
    isDisabled: !n,
    initialFocusRef: o,
    finalFocusRef: s,
    restoreFocus: l,
    contentRef: r,
    lockFocusAcrossFrames: c,
    children: k.jsx(B5, {
      removeScrollBar: !u,
      allowPinchZoom: a,
      enabled: v === 1 && i,
      forwardProps: !0,
      children: e.children,
    }),
  });
}
var [iW, aW] = pt(),
  sW = {
    start: { ltr: "left", rtl: "right" },
    end: { ltr: "right", rtl: "left" },
  };
function lW(e, t) {
  var n, r;
  if (e) return (r = (n = sW[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function uW(e) {
  var t;
  const {
      isOpen: n,
      onClose: r,
      placement: o = "right",
      children: i,
      ...a
    } = e,
    s = Qr(),
    l = (t = s.components) == null ? void 0 : t.Drawer,
    u = lW(o, s.direction);
  return k.jsx(iW, {
    value: { placement: u },
    children: k.jsx(I5, {
      isOpen: n,
      onClose: r,
      styleConfig: l,
      ...a,
      children: i,
    }),
  });
}
var cW = V(kC),
  V5 = X((e, t) => {
    const {
        className: n,
        children: r,
        motionProps: o,
        containerProps: i,
        ...a
      } = e,
      { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = la(),
      c = s(a, t),
      d = l(i),
      f = oe("chakra-modal__content", n),
      p = ml(),
      v = {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        outline: 0,
        ...p.dialog,
      },
      g = {
        display: "flex",
        width: "100vw",
        height: "$100vh",
        position: "fixed",
        left: 0,
        top: 0,
        ...p.dialogContainer,
      },
      { placement: S } = aW();
    return k.jsx(oW, {
      children: k.jsx(V.div, {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: k.jsx(cW, {
          motionProps: o,
          direction: S,
          in: u,
          className: f,
          ...c,
          __css: v,
          children: r,
        }),
      }),
    });
  });
V5.displayName = "DrawerContent";
var W5 = X((e, t) => {
  const { className: n, ...r } = e,
    { headerId: o, setHeaderMounted: i } = la();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = oe("chakra-modal__header", n),
    l = { flex: 0, ...ml().header };
  return k.jsx(V.header, { ref: t, className: a, id: o, ...r, __css: l });
});
W5.displayName = "ModalHeader";
var dW = V(ll.div),
  U5 = X((e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e,
      a = oe("chakra-modal__overlay", n),
      l = {
        pos: "fixed",
        left: "0",
        top: "0",
        w: "100vw",
        h: "100vh",
        ...ml().overlay,
      },
      { motionPreset: u } = la(),
      d = o || (u === "none" ? {} : wC);
    return k.jsx(dW, { ...d, __css: l, ref: t, className: a, ...i });
  });
U5.displayName = "ModalOverlay";
var H5 = X((e, t) => {
  const { className: n, ...r } = e,
    { bodyId: o, setBodyMounted: i } = la();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = oe("chakra-modal__body", n),
    s = ml();
  return k.jsx(V.div, { ref: t, className: a, id: o, ...r, __css: s.body });
});
H5.displayName = "ModalBody";
var G5 = X((e, t) => {
  const { onClick: n, className: r, ...o } = e,
    { onClose: i } = la(),
    a = oe("chakra-modal__close-btn", r),
    s = ml();
  return k.jsx(Jv, {
    ref: t,
    __css: s.closeButton,
    className: a,
    onClick: Ne(n, (l) => {
      l.stopPropagation(), i();
    }),
    ...o,
  });
});
G5.displayName = "ModalCloseButton";
function fW() {
  const e = b.useRef(!0);
  return (
    b.useEffect(() => {
      e.current = !1;
    }, []),
    e.current
  );
}
function pW(e) {
  const t = b.useRef();
  return (
    b.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var hW = V("div", {
    baseStyle: {
      boxShadow: "none",
      backgroundClip: "padding-box",
      cursor: "default",
      color: "transparent",
      pointerEvents: "none",
      userSelect: "none",
      "&::before, &::after, *": { visibility: "hidden" },
    },
  }),
  Zh = W("skeleton-start-color"),
  Jh = W("skeleton-end-color"),
  mW = cv({ from: { opacity: 0 }, to: { opacity: 1 } }),
  vW = cv({
    from: { borderColor: Zh.reference, background: Zh.reference },
    to: { borderColor: Jh.reference, background: Jh.reference },
  }),
  Ag = X((e, t) => {
    const n = {
        ...e,
        fadeDuration: typeof e.fadeDuration == "number" ? e.fadeDuration : 0.4,
        speed: typeof e.speed == "number" ? e.speed : 0.8,
      },
      r = Zr("Skeleton", n),
      o = fW(),
      {
        startColor: i = "",
        endColor: a = "",
        isLoaded: s,
        fadeDuration: l,
        speed: u,
        className: c,
        fitContent: d,
        ...f
      } = wt(n),
      [p, v] = xP("colors", [i, a]),
      g = pW(s),
      S = oe("chakra-skeleton", c),
      h = { ...(p && { [Zh.variable]: p }), ...(v && { [Jh.variable]: v }) };
    if (s) {
      const m = o || g ? "none" : `${mW} ${l}s`;
      return k.jsx(V.div, {
        ref: t,
        className: S,
        __css: { animation: m },
        ...f,
      });
    }
    return k.jsx(hW, {
      ref: t,
      className: S,
      ...f,
      __css: {
        width: d ? "fit-content" : void 0,
        ...r,
        ...h,
        _dark: { ...r._dark, ...h },
        animation: `${u}s linear infinite alternate ${vW}`,
      },
    });
  });
Ag.displayName = "Skeleton";
function gW(e) {
  return Array(e)
    .fill(1)
    .map((t, n) => n + 1);
}
var uS = 3,
  K5 = (e) => {
    const {
        noOfLines: t = uS,
        spacing: n = "0.5rem",
        skeletonHeight: r = "0.5rem",
        className: o,
        startColor: i,
        endColor: a,
        isLoaded: s,
        fadeDuration: l,
        speed: u,
        variant: c,
        size: d,
        colorScheme: f,
        children: p,
        ...v
      } = e,
      g = SN(typeof t == "number" ? [t] : t) || uS,
      S = gW(g),
      h = (y) => (g > 1 && y === S.length ? "80%" : "100%"),
      m = oe("chakra-skeleton__group", o);
    return k.jsx(V.div, {
      className: m,
      ...v,
      children: S.map((y, w) => {
        if (s && w > 0) return null;
        const C = s
          ? null
          : { mb: y === S.length ? "0" : n, width: h(y), height: r };
        return k.jsx(
          Ag,
          {
            startColor: i,
            endColor: a,
            isLoaded: s,
            fadeDuration: l,
            speed: u,
            variant: c,
            size: d,
            colorScheme: f,
            ...C,
            children: w === 0 ? p : void 0,
          },
          S.length.toString() + y
        );
      }),
    });
  };
K5.displayName = "SkeletonText";
var q5 = X(function (t, n) {
  const r = br("Switch", t),
    { spacing: o = "0.5rem", children: i, ...a } = wt(t),
    {
      getIndicatorProps: s,
      getInputProps: l,
      getCheckboxProps: u,
      getRootProps: c,
      getLabelProps: d,
    } = wL(a),
    f = b.useMemo(
      () => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
        lineHeight: 0,
        ...r.container,
      }),
      [r.container]
    ),
    p = b.useMemo(
      () => ({
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "flex-start",
        boxSizing: "content-box",
        cursor: "pointer",
        ...r.track,
      }),
      [r.track]
    ),
    v = b.useMemo(
      () => ({ userSelect: "none", marginStart: o, ...r.label }),
      [o, r.label]
    );
  return k.jsxs(V.label, {
    ...c(),
    className: oe("chakra-switch", t.className),
    __css: f,
    children: [
      k.jsx("input", { className: "chakra-switch__input", ...l({}, n) }),
      k.jsx(V.span, {
        ...u(),
        className: "chakra-switch__track",
        __css: p,
        children: k.jsx(V.span, {
          __css: r.thumb,
          className: "chakra-switch__thumb",
          ...s(),
        }),
      }),
      i &&
        k.jsx(V.span, {
          className: "chakra-switch__label",
          ...d(),
          __css: v,
          children: i,
        }),
    ],
  });
});
q5.displayName = "Switch";
const yW = "logo.webp",
  bW = () => {
    const { toggleColorMode: e, colorMode: t } = cd();
    return k.jsxs(sa, {
      children: [
        k.jsx(q5, {
          colorScheme: "green",
          isChecked: t === "dark",
          onChange: e,
        }),
        k.jsx(gg, { whiteSpace: "nowrap", children: "Dark Mode" }),
      ],
    });
  };
var X5 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  cS = bn.createContext && bn.createContext(X5),
  SW = ["attr", "size", "title"];
function xW(e, t) {
  if (e == null) return {};
  var n = wW(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function wW(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Rc() {
  return (
    (Rc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rc.apply(this, arguments)
  );
}
function dS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Oc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dS(Object(n), !0).forEach(function (r) {
          kW(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dS(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function kW(e, t, n) {
  return (
    (t = CW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function CW(e) {
  var t = _W(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _W(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Y5(e) {
  return (
    e &&
    e.map((t, n) =>
      bn.createElement(t.tag, Oc({ key: n }, t.attr), Y5(t.child))
    )
  );
}
function Cn(e) {
  return (t) =>
    bn.createElement(EW, Rc({ attr: Oc({}, e.attr) }, t), Y5(e.child));
}
function EW(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      a = xW(e, SW),
      s = o || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      bn.createElement(
        "svg",
        Rc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: l,
            style: Oc(Oc({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && bn.createElement("title", null, i),
        e.children
      )
    );
  };
  return cS !== void 0
    ? bn.createElement(cS.Consumer, null, (n) => t(n))
    : t(X5);
}
function Q5(e) {
  return Cn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708",
        },
        child: [],
      },
    ],
  })(e);
}
function TW(e) {
  return Cn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z",
        },
        child: [],
      },
    ],
  })(e);
}
function PW(e) {
  return Cn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034 1.61 1.61 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z",
        },
        child: [],
      },
    ],
  })(e);
}
function AW(e) {
  return Cn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
        },
        child: [],
      },
    ],
  })(e);
}
const RW = ({ onSearch: e }) => {
    const t = b.useRef(null);
    return k.jsx("form", {
      onSubmit: (n) => {
        n.preventDefault(), t.current && e(t.current.value);
      },
      children: k.jsxs(u5, {
        children: [
          k.jsx(hg, { children: k.jsx(AW, {}) }),
          k.jsx(mg, {
            ref: t,
            borderRadius: 20,
            placeholder: "Search games...",
            variant: "filled",
          }),
        ],
      }),
    });
  },
  OW = ({ onSearch: e }) =>
    k.jsxs(sa, {
      padding: "10px",
      children: [
        k.jsx(_d, { src: yW, boxSize: "60px" }),
        k.jsx(RW, { onSearch: e }),
        k.jsx(bW, {}),
      ],
    });
function Z5(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: MW } = Object.prototype,
  { getPrototypeOf: Rg } = Object,
  Md = ((e) => (t) => {
    const n = MW.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _n = (e) => ((e = e.toLowerCase()), (t) => Md(t) === e),
  $d = (e) => (t) => typeof t === e,
  { isArray: ua } = Array,
  qs = $d("undefined");
function $W(e) {
  return (
    e !== null &&
    !qs(e) &&
    e.constructor !== null &&
    !qs(e.constructor) &&
    Vt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const J5 = _n("ArrayBuffer");
function DW(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && J5(e.buffer)),
    t
  );
}
const IW = $d("string"),
  Vt = $d("function"),
  e_ = $d("number"),
  Dd = (e) => e !== null && typeof e == "object",
  zW = (e) => e === !0 || e === !1,
  ju = (e) => {
    if (Md(e) !== "object") return !1;
    const t = Rg(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  FW = _n("Date"),
  LW = _n("File"),
  jW = _n("Blob"),
  NW = _n("FileList"),
  BW = (e) => Dd(e) && Vt(e.pipe),
  VW = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Vt(e.append) &&
          ((t = Md(e)) === "formdata" ||
            (t === "object" &&
              Vt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  WW = _n("URLSearchParams"),
  [UW, HW, GW, KW] = ["ReadableStream", "Request", "Response", "Headers"].map(
    _n
  ),
  qW = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), ua(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let s;
    for (r = 0; r < a; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function t_(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const So =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  n_ = (e) => !qs(e) && e !== So;
function em() {
  const { caseless: e } = (n_(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && t_(t, o)) || o;
      ju(t[i]) && ju(r)
        ? (t[i] = em(t[i], r))
        : ju(r)
        ? (t[i] = em({}, r))
        : ua(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && vl(arguments[r], n);
  return t;
}
const XW = (e, t, n, { allOwnKeys: r } = {}) => (
    vl(
      t,
      (o, i) => {
        n && Vt(o) ? (e[i] = Z5(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  YW = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  QW = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  ZW = (e, t, n, r) => {
    let o, i, a;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
      e = n !== !1 && Rg(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  JW = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  eU = (e) => {
    if (!e) return null;
    if (ua(e)) return e;
    let t = e.length;
    if (!e_(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  tU = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Rg(Uint8Array)),
  nU = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  rU = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  oU = _n("HTMLFormElement"),
  iU = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  fS = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  aU = _n("RegExp"),
  r_ = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    vl(n, (o, i) => {
      let a;
      (a = t(o, i, e)) !== !1 && (r[i] = a || o);
    }),
      Object.defineProperties(e, r);
  },
  sU = (e) => {
    r_(e, (t, n) => {
      if (Vt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Vt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  lU = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return ua(e) ? r(e) : r(String(e).split(t)), n;
  },
  uU = () => {},
  cU = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  up = "abcdefghijklmnopqrstuvwxyz",
  pS = "0123456789",
  o_ = { DIGIT: pS, ALPHA: up, ALPHA_DIGIT: up + up.toUpperCase() + pS },
  dU = (e = 16, t = o_.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function fU(e) {
  return !!(
    e &&
    Vt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const pU = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Dd(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = ua(r) ? [] : {};
            return (
              vl(r, (a, s) => {
                const l = n(a, o + 1);
                !qs(l) && (i[s] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  hU = _n("AsyncFunction"),
  mU = (e) => e && (Dd(e) || Vt(e)) && Vt(e.then) && Vt(e.catch),
  i_ = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          So.addEventListener(
            "message",
            ({ source: o, data: i }) => {
              o === So && i === n && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), So.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Vt(So.postMessage)
  ),
  vU =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(So)
      : (typeof process < "u" && process.nextTick) || i_,
  O = {
    isArray: ua,
    isArrayBuffer: J5,
    isBuffer: $W,
    isFormData: VW,
    isArrayBufferView: DW,
    isString: IW,
    isNumber: e_,
    isBoolean: zW,
    isObject: Dd,
    isPlainObject: ju,
    isReadableStream: UW,
    isRequest: HW,
    isResponse: GW,
    isHeaders: KW,
    isUndefined: qs,
    isDate: FW,
    isFile: LW,
    isBlob: jW,
    isRegExp: aU,
    isFunction: Vt,
    isStream: BW,
    isURLSearchParams: WW,
    isTypedArray: tU,
    isFileList: NW,
    forEach: vl,
    merge: em,
    extend: XW,
    trim: qW,
    stripBOM: YW,
    inherits: QW,
    toFlatObject: ZW,
    kindOf: Md,
    kindOfTest: _n,
    endsWith: JW,
    toArray: eU,
    forEachEntry: nU,
    matchAll: rU,
    isHTMLForm: oU,
    hasOwnProperty: fS,
    hasOwnProp: fS,
    reduceDescriptors: r_,
    freezeMethods: sU,
    toObjectSet: lU,
    toCamelCase: iU,
    noop: uU,
    toFiniteNumber: cU,
    findKey: t_,
    global: So,
    isContextDefined: n_,
    ALPHABET: o_,
    generateString: dU,
    isSpecCompliantForm: fU,
    toJSONObject: pU,
    isAsyncFn: hU,
    isThenable: mU,
    setImmediate: i_,
    asap: vU,
  };
function Z(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
O.inherits(Z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: O.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const a_ = Z.prototype,
  s_ = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  s_[e] = { value: e };
});
Object.defineProperties(Z, s_);
Object.defineProperty(a_, "isAxiosError", { value: !0 });
Z.from = (e, t, n, r, o, i) => {
  const a = Object.create(a_);
  return (
    O.toFlatObject(
      e,
      a,
      function (l) {
        return l !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    Z.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const gU = null;
function tm(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function l_(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function hS(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = l_(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function yU(e) {
  return O.isArray(e) && !e.some(tm);
}
const bU = O.toFlatObject(O, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Id(e, t, n) {
  if (!O.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = O.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, S) {
        return !O.isUndefined(S[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    a = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (O.isDate(v)) return v.toISOString();
    if (!l && O.isBlob(v))
      throw new Z("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(v) || O.isTypedArray(v)
      ? l && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, g, S) {
    let h = v;
    if (v && !S && typeof v == "object") {
      if (O.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (O.isArray(v) && yU(v)) ||
        ((O.isFileList(v) || O.endsWith(g, "[]")) && (h = O.toArray(v)))
      )
        return (
          (g = l_(g)),
          h.forEach(function (y, w) {
            !(O.isUndefined(y) || y === null) &&
              t.append(
                a === !0 ? hS([g], w, i) : a === null ? g : g + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return tm(v) ? !0 : (t.append(hS(S, g, i), u(v)), !1);
  }
  const d = [],
    f = Object.assign(bU, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: tm,
    });
  function p(v, g) {
    if (!O.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(v),
        O.forEach(v, function (h, m) {
          (!(O.isUndefined(h) || h === null) &&
            o.call(t, h, O.isString(m) ? m.trim() : m, g, f)) === !0 &&
            p(h, g ? g.concat(m) : [m]);
        }),
        d.pop();
    }
  }
  if (!O.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function mS(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Og(e, t) {
  (this._pairs = []), e && Id(e, this, t);
}
const u_ = Og.prototype;
u_.append = function (t, n) {
  this._pairs.push([t, n]);
};
u_.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, mS);
      }
    : mS;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function SU(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function c_(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || SU,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = O.isURLSearchParams(t) ? t.toString() : new Og(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class vS {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    O.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const d_ = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  xU = typeof URLSearchParams < "u" ? URLSearchParams : Og,
  wU = typeof FormData < "u" ? FormData : null,
  kU = typeof Blob < "u" ? Blob : null,
  CU = {
    isBrowser: !0,
    classes: { URLSearchParams: xU, FormData: wU, Blob: kU },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Mg = typeof window < "u" && typeof document < "u",
  _U = ((e) => Mg && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  EU =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  TU = (Mg && window.location.href) || "http://localhost",
  PU = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Mg,
        hasStandardBrowserEnv: _U,
        hasStandardBrowserWebWorkerEnv: EU,
        origin: TU,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wn = { ...PU, ...CU };
function AU(e, t) {
  return Id(
    e,
    new wn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return wn.isNode && O.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function RU(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function OU(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function f_(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a),
      l = i >= n.length;
    return (
      (a = !a && O.isArray(o) ? o.length : a),
      l
        ? (O.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !s)
        : ((!o[a] || !O.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], i) && O.isArray(o[a]) && (o[a] = OU(o[a])),
          !s)
    );
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const n = {};
    return (
      O.forEachEntry(e, (r, o) => {
        t(RU(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function MU(e, t, n) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const gl = {
  transitional: d_,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = O.isObject(t);
      if ((i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t)))
        return o ? JSON.stringify(f_(t)) : t;
      if (
        O.isArrayBuffer(t) ||
        O.isBuffer(t) ||
        O.isStream(t) ||
        O.isFile(t) ||
        O.isBlob(t) ||
        O.isReadableStream(t)
      )
        return t;
      if (O.isArrayBufferView(t)) return t.buffer;
      if (O.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return AU(t, this.formSerializer).toString();
        if ((s = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Id(
            s ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), MU(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || gl.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (O.isResponse(t) || O.isReadableStream(t)) return t;
      if (t && O.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (a)
            throw s.name === "SyntaxError"
              ? Z.from(s, Z.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: wn.classes.FormData, Blob: wn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
O.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  gl.headers[e] = {};
});
const $U = O.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  DU = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (o = a.indexOf(":")),
              (n = a.substring(0, o).trim().toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (t[n] && $U[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  gS = Symbol("internals");
function Oa(e) {
  return e && String(e).trim().toLowerCase();
}
function Nu(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(Nu) : String(e);
}
function IU(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const zU = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function cp(e, t, n, r, o) {
  if (O.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!O.isString(t))) {
    if (O.isString(r)) return t.indexOf(r) !== -1;
    if (O.isRegExp(r)) return r.test(t);
  }
}
function FU(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function LU(e, t) {
  const n = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0,
    });
  });
}
let Mt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, l, u) {
      const c = Oa(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = O.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = Nu(s));
    }
    const a = (s, l) => O.forEach(s, (u, c) => i(u, c, l));
    if (O.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (O.isString(t) && (t = t.trim()) && !zU(t)) a(DU(t), n);
    else if (O.isHeaders(t)) for (const [s, l] of t.entries()) i(l, s, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Oa(t)), t)) {
      const r = O.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return IU(o);
        if (O.isFunction(n)) return n.call(this, o, r);
        if (O.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Oa(t)), t)) {
      const r = O.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || cp(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = Oa(a)), a)) {
        const s = O.findKey(r, a);
        s && (!n || cp(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return O.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || cp(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      O.forEach(this, (o, i) => {
        const a = O.findKey(r, i);
        if (a) {
          (n[a] = Nu(o)), delete n[i];
          return;
        }
        const s = t ? FU(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = Nu(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      O.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && O.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[gS] = this[gS] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const s = Oa(a);
      r[s] || (LU(o, a), (r[s] = !0));
    }
    return O.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Mt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
O.reduceDescriptors(Mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
O.freezeMethods(Mt);
function dp(e, t) {
  const n = this || gl,
    r = t || n,
    o = Mt.from(r.headers);
  let i = r.data;
  return (
    O.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function p_(e) {
  return !!(e && e.__CANCEL__);
}
function ca(e, t, n) {
  Z.call(this, e ?? "canceled", Z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
O.inherits(ca, Z, { __CANCEL__: !0 });
function h_(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Z(
          "Request failed with status code " + n.status,
          [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function jU(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function NU(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      a || (a = u), (n[o] = l), (r[o] = u);
      let d = i,
        f = 0;
      for (; d !== o; ) (f += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t)) return;
      const p = c && u - c;
      return p ? Math.round((f * 1e3) / p) : void 0;
    }
  );
}
function BU(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const a = (u, c = Date.now()) => {
    (n = c), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        d = c - n;
      d >= r
        ? a(u, c)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              (i = null), a(o);
            }, r - d)));
    },
    () => o && a(o),
  ];
}
const Mc = (e, t, n = 3) => {
    let r = 0;
    const o = NU(50, 250);
    return BU((i) => {
      const a = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        l = a - r,
        u = o(l),
        c = a <= s;
      r = a;
      const d = {
        loaded: a,
        total: s,
        progress: s ? a / s : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && s && c ? (s - a) / u : void 0,
        event: i,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  yS = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  bS =
    (e) =>
    (...t) =>
      O.asap(() => e(...t)),
  VU = wn.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(i) {
          let a = i;
          return (
            t && (n.setAttribute("href", a), (a = n.href)),
            n.setAttribute("href", a),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (a) {
            const s = O.isString(a) ? o(a) : a;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  WU = wn.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const a = [e + "=" + encodeURIComponent(t)];
          O.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            O.isString(r) && a.push("path=" + r),
            O.isString(o) && a.push("domain=" + o),
            i === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function UU(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function HU(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function m_(e, t) {
  return e && !UU(t) ? HU(e, t) : t;
}
const SS = (e) => (e instanceof Mt ? { ...e } : e);
function jo(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return O.isPlainObject(u) && O.isPlainObject(c)
      ? O.merge.call({ caseless: d }, u, c)
      : O.isPlainObject(c)
      ? O.merge({}, c)
      : O.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if (O.isUndefined(c)) {
      if (!O.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!O.isUndefined(c)) return r(void 0, c);
  }
  function a(u, c) {
    if (O.isUndefined(c)) {
      if (!O.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function s(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (u, c) => o(SS(u), SS(c), !0),
  };
  return (
    O.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || o,
        f = d(e[c], t[c], c);
      (O.isUndefined(f) && d !== s) || (n[c] = f);
    }),
    n
  );
}
const v_ = (e) => {
    const t = jo({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: a,
      auth: s,
    } = t;
    (t.headers = a = Mt.from(a)),
      (t.url = c_(m_(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        a.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : "")
            )
        );
    let l;
    if (O.isFormData(n)) {
      if (wn.hasStandardBrowserEnv || wn.hasStandardBrowserWebWorkerEnv)
        a.setContentType(void 0);
      else if ((l = a.getContentType()) !== !1) {
        const [u, ...c] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        a.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      wn.hasStandardBrowserEnv &&
      (r && O.isFunction(r) && (r = r(t)), r || (r !== !1 && VU(t.url)))
    ) {
      const u = o && i && WU.read(i);
      u && a.set(o, u);
    }
    return t;
  },
  GU = typeof XMLHttpRequest < "u",
  KU =
    GU &&
    function (e) {
      return new Promise(function (n, r) {
        const o = v_(e);
        let i = o.data;
        const a = Mt.from(o.headers).normalize();
        let { responseType: s, onUploadProgress: l, onDownloadProgress: u } = o,
          c,
          d,
          f,
          p,
          v;
        function g() {
          p && p(),
            v && v(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c);
        }
        let S = new XMLHttpRequest();
        S.open(o.method.toUpperCase(), o.url, !0), (S.timeout = o.timeout);
        function h() {
          if (!S) return;
          const y = Mt.from(
              "getAllResponseHeaders" in S && S.getAllResponseHeaders()
            ),
            C = {
              data:
                !s || s === "text" || s === "json"
                  ? S.responseText
                  : S.response,
              status: S.status,
              statusText: S.statusText,
              headers: y,
              config: e,
              request: S,
            };
          h_(
            function (_) {
              n(_), g();
            },
            function (_) {
              r(_), g();
            },
            C
          ),
            (S = null);
        }
        "onloadend" in S
          ? (S.onloadend = h)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                setTimeout(h);
            }),
          (S.onabort = function () {
            S &&
              (r(new Z("Request aborted", Z.ECONNABORTED, e, S)), (S = null));
          }),
          (S.onerror = function () {
            r(new Z("Network Error", Z.ERR_NETWORK, e, S)), (S = null);
          }),
          (S.ontimeout = function () {
            let w = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = o.transitional || d_;
            o.timeoutErrorMessage && (w = o.timeoutErrorMessage),
              r(
                new Z(
                  w,
                  C.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED,
                  e,
                  S
                )
              ),
              (S = null);
          }),
          i === void 0 && a.setContentType(null),
          "setRequestHeader" in S &&
            O.forEach(a.toJSON(), function (w, C) {
              S.setRequestHeader(C, w);
            }),
          O.isUndefined(o.withCredentials) ||
            (S.withCredentials = !!o.withCredentials),
          s && s !== "json" && (S.responseType = o.responseType),
          u && (([f, v] = Mc(u, !0)), S.addEventListener("progress", f)),
          l &&
            S.upload &&
            (([d, p] = Mc(l)),
            S.upload.addEventListener("progress", d),
            S.upload.addEventListener("loadend", p)),
          (o.cancelToken || o.signal) &&
            ((c = (y) => {
              S &&
                (r(!y || y.type ? new ca(null, e, S) : y),
                S.abort(),
                (S = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const m = jU(o.url);
        if (m && wn.protocols.indexOf(m) === -1) {
          r(new Z("Unsupported protocol " + m + ":", Z.ERR_BAD_REQUEST, e));
          return;
        }
        S.send(i || null);
      });
    },
  qU = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function (l) {
      if (!r) {
        (r = !0), a();
        const u = l instanceof Error ? l : this.reason;
        n.abort(
          u instanceof Z ? u : new ca(u instanceof Error ? u.message : u)
        );
      }
    };
    let i =
      t &&
      setTimeout(() => {
        o(new Z(`timeout ${t} of ms exceeded`, Z.ETIMEDOUT));
      }, t);
    const a = () => {
      e &&
        (i && clearTimeout(i),
        (i = null),
        e.forEach((l) => {
          l &&
            (l.removeEventListener
              ? l.removeEventListener("abort", o)
              : l.unsubscribe(o));
        }),
        (e = null));
    };
    e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", o));
    const { signal: s } = n;
    return (
      (s.unsubscribe = a),
      [
        s,
        () => {
          i && clearTimeout(i), (i = null);
        },
      ]
    );
  },
  XU = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  YU = async function* (e, t, n) {
    for await (const r of e)
      yield* XU(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  xS = (e, t, n, r, o) => {
    const i = YU(e, t, o);
    let a = 0,
      s,
      l = (u) => {
        s || ((s = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: c, value: d } = await i.next();
            if (c) {
              l(), u.close();
              return;
            }
            let f = d.byteLength;
            if (n) {
              let p = (a += f);
              n(p);
            }
            u.enqueue(new Uint8Array(d));
          } catch (c) {
            throw (l(c), c);
          }
        },
        cancel(u) {
          return l(u), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  zd =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  g_ = zd && typeof ReadableStream == "function",
  nm =
    zd &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  y_ = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  QU =
    g_ &&
    y_(() => {
      let e = !1;
      const t = new Request(wn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  wS = 64 * 1024,
  rm = g_ && y_(() => O.isReadableStream(new Response("").body)),
  $c = { stream: rm && ((e) => e.body) };
zd &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !$c[t] &&
        ($c[t] = O.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new Z(
                `Response type '${t}' is not supported`,
                Z.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const ZU = async (e) => {
    if (e == null) return 0;
    if (O.isBlob(e)) return e.size;
    if (O.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (O.isArrayBufferView(e) || O.isArrayBuffer(e)) return e.byteLength;
    if ((O.isURLSearchParams(e) && (e = e + ""), O.isString(e)))
      return (await nm(e)).byteLength;
  },
  JU = async (e, t) => {
    const n = O.toFiniteNumber(e.getContentLength());
    return n ?? ZU(t);
  },
  eH =
    zd &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: a,
        onDownloadProgress: s,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = v_(e);
      u = u ? (u + "").toLowerCase() : "text";
      let [p, v] = o || i || a ? qU([o, i], a) : [],
        g,
        S;
      const h = () => {
        !g &&
          setTimeout(() => {
            p && p.unsubscribe();
          }),
          (g = !0);
      };
      let m;
      try {
        if (
          l &&
          QU &&
          n !== "get" &&
          n !== "head" &&
          (m = await JU(c, r)) !== 0
        ) {
          let P = new Request(t, { method: "POST", body: r, duplex: "half" }),
            _;
          if (
            (O.isFormData(r) &&
              (_ = P.headers.get("content-type")) &&
              c.setContentType(_),
            P.body)
          ) {
            const [A, $] = yS(m, Mc(bS(l)));
            r = xS(P.body, wS, A, $, nm);
          }
        }
        O.isString(d) || (d = d ? "include" : "omit"),
          (S = new Request(t, {
            ...f,
            signal: p,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: d,
          }));
        let y = await fetch(S);
        const w = rm && (u === "stream" || u === "response");
        if (rm && (s || w)) {
          const P = {};
          ["status", "statusText", "headers"].forEach((M) => {
            P[M] = y[M];
          });
          const _ = O.toFiniteNumber(y.headers.get("content-length")),
            [A, $] = (s && yS(_, Mc(bS(s), !0))) || [];
          y = new Response(
            xS(
              y.body,
              wS,
              A,
              () => {
                $ && $(), w && h();
              },
              nm
            ),
            P
          );
        }
        u = u || "text";
        let C = await $c[O.findKey($c, u) || "text"](y, e);
        return (
          !w && h(),
          v && v(),
          await new Promise((P, _) => {
            h_(P, _, {
              data: C,
              headers: Mt.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: S,
            });
          })
        );
      } catch (y) {
        throw (
          (h(),
          y && y.name === "TypeError" && /fetch/i.test(y.message)
            ? Object.assign(new Z("Network Error", Z.ERR_NETWORK, e, S), {
                cause: y.cause || y,
              })
            : Z.from(y, y && y.code, e, S))
        );
      }
    }),
  om = { http: gU, xhr: KU, fetch: eH };
O.forEach(om, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const kS = (e) => `- ${e}`,
  tH = (e) => O.isFunction(e) || e === null || e === !1,
  b_ = {
    getAdapter: (e) => {
      e = O.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let a;
        if (
          ((r = n),
          !tH(n) && ((r = om[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Z(`Unknown adapter '${a}'`);
        if (r) break;
        o[a || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([s, l]) =>
            `adapter ${s} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let a = t
          ? i.length > 1
            ? `since :
` +
              i.map(kS).join(`
`)
            : " " + kS(i[0])
          : "as no adapter specified";
        throw new Z(
          "There is no suitable adapter to dispatch the request " + a,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: om,
  };
function fp(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ca(null, e);
}
function CS(e) {
  return (
    fp(e),
    (e.headers = Mt.from(e.headers)),
    (e.data = dp.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    b_
      .getAdapter(e.adapter || gl.adapter)(e)
      .then(
        function (r) {
          return (
            fp(e),
            (r.data = dp.call(e, e.transformResponse, r)),
            (r.headers = Mt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            p_(r) ||
              (fp(e),
              r &&
                r.response &&
                ((r.response.data = dp.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Mt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const S_ = "1.7.4",
  $g = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    $g[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const _S = {};
$g.transitional = function (t, n, r) {
  function o(i, a) {
    return (
      "[Axios v" +
      S_ +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (i, a, s) => {
    if (t === !1)
      throw new Z(
        o(a, " has been removed" + (n ? " in " + n : "")),
        Z.ERR_DEPRECATED
      );
    return (
      n &&
        !_S[a] &&
        ((_S[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, a, s) : !0
    );
  };
};
function nH(e, t, n) {
  if (typeof e != "object")
    throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = t[i];
    if (a) {
      const s = e[i],
        l = s === void 0 || a(s, i, e);
      if (l !== !0)
        throw new Z("option " + i + " must be " + l, Z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Z("Unknown option " + i, Z.ERR_BAD_OPTION);
  }
}
const im = { assertOptions: nH, validators: $g },
  Er = im.validators;
let Ao = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new vS(), response: new vS() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = jo(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      im.assertOptions(
        r,
        {
          silentJSONParsing: Er.transitional(Er.boolean),
          forcedJSONParsing: Er.transitional(Er.boolean),
          clarifyTimeoutError: Er.transitional(Er.boolean),
        },
        !1
      ),
      o != null &&
        (O.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : im.assertOptions(
              o,
              { encode: Er.function, serialize: Er.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = i && O.merge(i.common, i[n.method]);
    i &&
      O.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete i[v];
        }
      ),
      (n.headers = Mt.concat(a, i));
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((l = l && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const v = [CS.bind(this), void 0];
      for (
        v.unshift.apply(v, s),
          v.push.apply(v, u),
          f = v.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    f = s.length;
    let p = n;
    for (d = 0; d < f; ) {
      const v = s[d++],
        g = s[d++];
      try {
        p = v(p);
      } catch (S) {
        g.call(this, S);
        break;
      }
    }
    try {
      c = CS.call(this, p);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = jo(this.defaults, t);
    const n = m_(t.baseURL, t.url);
    return c_(n, t.params, t.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function (t) {
  Ao.prototype[t] = function (n, r) {
    return this.request(
      jo(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
O.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, a, s) {
      return this.request(
        jo(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (Ao.prototype[t] = n()), (Ao.prototype[t + "Form"] = n(!0));
});
let rH = class x_ {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, s) {
        r.reason || ((r.reason = new ca(i, a, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new x_(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
};
function oH(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function iH(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const am = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(am).forEach(([e, t]) => {
  am[t] = e;
});
function w_(e) {
  const t = new Ao(e),
    n = Z5(Ao.prototype.request, t);
  return (
    O.extend(n, Ao.prototype, t, { allOwnKeys: !0 }),
    O.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return w_(jo(e, o));
    }),
    n
  );
}
const We = w_(gl);
We.Axios = Ao;
We.CanceledError = ca;
We.CancelToken = rH;
We.isCancel = p_;
We.VERSION = S_;
We.toFormData = Id;
We.AxiosError = Z;
We.Cancel = We.CanceledError;
We.all = function (t) {
  return Promise.all(t);
};
We.spread = oH;
We.isAxiosError = iH;
We.mergeConfig = jo;
We.AxiosHeaders = Mt;
We.formToJSON = (e) => f_(O.isHTMLForm(e) ? new FormData(e) : e);
We.getAdapter = b_.getAdapter;
We.HttpStatusCode = am;
We.default = We;
const {
    Axios: zH,
    AxiosError: FH,
    CanceledError: aH,
    isCancel: LH,
    CancelToken: jH,
    VERSION: NH,
    all: BH,
    Cancel: VH,
    isAxiosError: WH,
    spread: UH,
    toFormData: HH,
    AxiosHeaders: GH,
    HttpStatusCode: KH,
    formToJSON: qH,
    getAdapter: XH,
    mergeConfig: YH,
  } = We,
  sH = We.create({
    baseURL: "https://api.rawg.io/api",
    params: { key: "f4fea57f1c754839b031683530150844" },
  }),
  k_ = (e, t, n) => {
    const [r, o] = b.useState([]),
      [i, a] = b.useState(""),
      [s, l] = b.useState(!1);
    return (
      b.useEffect(
        () => {
          const u = new AbortController();
          return (
            l(!0),
            sH
              .get(e, { signal: u.signal, ...t })
              .then((c) => {
                o(c.data.results), l(!1);
              })
              .catch((c) => {
                c instanceof aH || (a(c.message), l(!1));
              }),
            () => u.abort()
          );
        },
        n ? [...n] : []
      ),
      { data: r, error: i, isLoading: s }
    );
  },
  lH = (e) => {
    var t, n;
    return k_(
      "/games",
      {
        params: {
          genres: (t = e.genre) == null ? void 0 : t.id,
          platforms: (n = e.platform) == null ? void 0 : n.id,
          ordering: e.sortOrder,
          search: e.searchText,
        },
      },
      [e]
    );
  };
function uH(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55",
        },
        child: [],
      },
    ],
  })(e);
}
function cH(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function dH(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function fH(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z",
        },
        child: [],
      },
    ],
  })(e);
}
function pH(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z",
        },
        child: [],
      },
    ],
  })(e);
}
function hH(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function mH(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z",
        },
        child: [],
      },
    ],
  })(e);
}
const vH = ({ platforms: e }) => {
    const t = {
      pc: pH,
      playstation: fH,
      xbox: hH,
      nintendo: PW,
      mac: cH,
      android: uH,
      linux: dH,
      ios: mH,
      web: TW,
    };
    return k.jsx(sa, {
      marginY: 1,
      children: e.map((n) =>
        k.jsx(Vo, { as: t[n.slug], color: "gray.500" }, n.id)
      ),
    });
  },
  gH = ({ score: e }) => {
    let t = e > 75 ? "green" : e > 60 ? "yellow" : "";
    return k.jsx(y5, {
      colorScheme: t,
      fontSize: "14px",
      paddingX: 2,
      borderRadius: "4px",
      children: e,
    });
  },
  yH = "no-image-placeholder.webp",
  C_ = (e) => {
    if (!e) return yH;
    const t = "media/",
      n = e.indexOf(t) + t.length;
    return e.slice(0, n) + "crop/600/400/" + e.slice(n);
  },
  bH = ({ game: e }) =>
    k.jsxs(_C, {
      children: [
        k.jsx(_d, { src: C_(e.background_image) }),
        k.jsxs(CC, {
          children: [
            k.jsxs(sa, {
              justifyContent: "space-between",
              marginBottom: 3,
              children: [
                k.jsx(vH, {
                  platforms: e.parent_platforms.map((t) => t.platform),
                }),
                k.jsx(gH, { score: e.metacritic }),
              ],
            }),
            k.jsx(Ad, { fontSize: "2xl", children: e.name }),
          ],
        }),
      ],
    }),
  SH = () =>
    k.jsxs(_C, {
      children: [
        k.jsx(Ag, { height: { base: "18em", md: "16em", lg: "14em" } }),
        k.jsx(CC, { children: k.jsx(K5, {}) }),
      ],
    }),
  ES = ({ children: e }) =>
    k.jsx(Hs, { borderRadius: 10, overflow: "hidden", children: e }),
  xH = ({ gameQuery: e }) => {
    const { data: t, error: n, isLoading: r } = lH(e),
      o = [1, 2, 3, 4, 5, 6, 7, 8];
    return n
      ? k.jsx(gg, { children: n })
      : k.jsxs(h5, {
          columns: { sm: 1, md: 2, lg: 3, xl: 4 },
          padding: "10px",
          spacing: 5,
          children: [
            r && o.map((i) => k.jsx(ES, { children: k.jsx(SH, {}) }, i)),
            t.map((i) => k.jsx(ES, { children: k.jsx(bH, { game: i }) }, i.id)),
          ],
        });
  },
  wH = {
    results: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 181834,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        games: [
          {
            id: 3498,
            slug: "grand-theft-auto-v",
            name: "Grand Theft Auto V",
            added: 21102,
          },
          {
            id: 3328,
            slug: "the-witcher-3-wild-hunt",
            name: "The Witcher 3: Wild Hunt",
            added: 20585,
          },
          {
            id: 5286,
            slug: "tomb-raider",
            name: "Tomb Raider (2013)",
            added: 16769,
          },
          { id: 13536, slug: "portal", name: "Portal", added: 16572 },
          {
            id: 12020,
            slug: "left-4-dead-2",
            name: "Left 4 Dead 2",
            added: 16456,
          },
          {
            id: 5679,
            slug: "the-elder-scrolls-v-skyrim",
            name: "The Elder Scrolls V: Skyrim",
            added: 15889,
          },
        ],
      },
      {
        id: 51,
        name: "Indie",
        slug: "indie",
        games_count: 68416,
        image_background:
          "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
        games: [
          { id: 1030, slug: "limbo", name: "Limbo", added: 13475 },
          { id: 422, slug: "terraria", name: "Terraria", added: 12664 },
          {
            id: 3272,
            slug: "rocket-league",
            name: "Rocket League",
            added: 12387,
          },
          {
            id: 9767,
            slug: "hollow-knight",
            name: "Hollow Knight",
            added: 10962,
          },
          {
            id: 3612,
            slug: "hotline-miami",
            name: "Hotline Miami",
            added: 10400,
          },
          { id: 3790, slug: "outlast", name: "Outlast", added: 10346 },
        ],
      },
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 141523,
        image_background:
          "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg",
        games: [
          {
            id: 3439,
            slug: "life-is-strange-episode-1-2",
            name: "Life is Strange",
            added: 15176,
          },
          {
            id: 23027,
            slug: "the-walking-dead",
            name: "The Walking Dead: Season 1",
            added: 11204,
          },
          {
            id: 41,
            slug: "little-nightmares",
            name: "Little Nightmares",
            added: 10884,
          },
          {
            id: 13668,
            slug: "amnesia-the-dark-descent",
            name: "Amnesia: The Dark Descent",
            added: 9998,
          },
          { id: 19487, slug: "alan-wake", name: "Alan Wake", added: 9977 },
          {
            id: 4386,
            slug: "saints-row-the-third",
            name: "Saints Row: The Third",
            added: 9889,
          },
        ],
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
        games_count: 56908,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
        games: [
          {
            id: 3328,
            slug: "the-witcher-3-wild-hunt",
            name: "The Witcher 3: Wild Hunt",
            added: 20585,
          },
          {
            id: 5679,
            slug: "the-elder-scrolls-v-skyrim",
            name: "The Elder Scrolls V: Skyrim",
            added: 15889,
          },
          {
            id: 802,
            slug: "borderlands-2",
            name: "Borderlands 2",
            added: 15170,
          },
          { id: 3070, slug: "fallout-4", name: "Fallout 4", added: 13481 },
          {
            id: 41494,
            slug: "cyberpunk-2077",
            name: "Cyberpunk 2077",
            added: 12805,
          },
          {
            id: 278,
            slug: "horizon-zero-dawn",
            name: "Horizon Zero Dawn",
            added: 12485,
          },
        ],
      },
      {
        id: 10,
        name: "Strategy",
        slug: "strategy",
        games_count: 57178,
        image_background:
          "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg",
        games: [
          {
            id: 10243,
            slug: "company-of-heroes-2",
            name: "Company of Heroes 2",
            added: 9412,
          },
          {
            id: 13633,
            slug: "civilization-v",
            name: "Sid Meier's Civilization V",
            added: 9365,
          },
          {
            id: 11147,
            slug: "ark-survival-of-the-fittest",
            name: "ARK: Survival Of The Fittest",
            added: 8329,
          },
          {
            id: 10065,
            slug: "cities-skylines",
            name: "Cities: Skylines",
            added: 8245,
          },
          {
            id: 13910,
            slug: "xcom-enemy-unknown",
            name: "XCOM: Enemy Unknown",
            added: 8222,
          },
          {
            id: 5525,
            slug: "brutal-legend",
            name: "Brutal Legend",
            added: 8149,
          },
        ],
      },
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59498,
        image_background:
          "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        games: [
          { id: 4200, slug: "portal-2", name: "Portal 2", added: 19467 },
          {
            id: 4291,
            slug: "counter-strike-global-offensive",
            name: "Counter-Strike: Global Offensive",
            added: 17154,
          },
          {
            id: 12020,
            slug: "left-4-dead-2",
            name: "Left 4 Dead 2",
            added: 16456,
          },
          {
            id: 4062,
            slug: "bioshock-infinite",
            name: "BioShock Infinite",
            added: 15352,
          },
          {
            id: 802,
            slug: "borderlands-2",
            name: "Borderlands 2",
            added: 15170,
          },
          { id: 13537, slug: "half-life-2", name: "Half-Life 2", added: 14708 },
        ],
      },
      {
        id: 40,
        name: "Casual",
        slug: "casual",
        games_count: 55478,
        image_background:
          "https://media.rawg.io/media/games/f86/f869253c68b38fa789f58cc5be2cb996.jpg",
        games: [
          { id: 9721, slug: "garrys-mod", name: "Garry's Mod", added: 9824 },
          {
            id: 326292,
            slug: "fall-guys",
            name: "Fall Guys: Ultimate Knockout",
            added: 8565,
          },
          { id: 9830, slug: "brawlhalla", name: "Brawlhalla", added: 7704 },
          { id: 356714, slug: "among-us", name: "Among Us", added: 7327 },
          {
            id: 1959,
            slug: "goat-simulator",
            name: "Goat Simulator",
            added: 6280,
          },
          { id: 42187, slug: "the-sims-4", name: "The Sims 4", added: 5978 },
        ],
      },
      {
        id: 14,
        name: "Simulation",
        slug: "simulation",
        games_count: 70654,
        image_background:
          "https://media.rawg.io/media/games/fd2/fd20a68d7ef195855588c937865dd0a7.jpg",
        games: [
          { id: 10035, slug: "hitman", name: "Hitman", added: 10524 },
          {
            id: 654,
            slug: "stardew-valley",
            name: "Stardew Valley",
            added: 10077,
          },
          { id: 9721, slug: "garrys-mod", name: "Garry's Mod", added: 9824 },
          {
            id: 9882,
            slug: "dont-starve-together",
            name: "Don't Starve Together",
            added: 9324,
          },
          { id: 22509, slug: "minecraft", name: "Minecraft", added: 8365 },
          {
            id: 10065,
            slug: "cities-skylines",
            name: "Cities: Skylines",
            added: 8245,
          },
        ],
      },
      {
        id: 7,
        name: "Puzzle",
        slug: "puzzle",
        games_count: 97293,
        image_background:
          "https://media.rawg.io/media/games/51c/51c430f1795c79b78f863a9f22dc422d.jpg",
        games: [
          { id: 4200, slug: "portal-2", name: "Portal 2", added: 19467 },
          { id: 13536, slug: "portal", name: "Portal", added: 16572 },
          { id: 1030, slug: "limbo", name: "Limbo", added: 13475 },
          {
            id: 19709,
            slug: "half-life-2-episode-two",
            name: "Half-Life 2: Episode Two",
            added: 11004,
          },
          { id: 1450, slug: "inside", name: "INSIDE", added: 7936 },
          {
            id: 3853,
            slug: "trine-2-complete-story",
            name: "Trine 2: Complete Story",
            added: 7196,
          },
        ],
      },
      {
        id: 11,
        name: "Arcade",
        slug: "arcade",
        games_count: 22658,
        image_background:
          "https://media.rawg.io/media/games/297/297a51aa1f0999016d5a35e2e1d6d8ab.jpg",
        games: [
          {
            id: 3612,
            slug: "hotline-miami",
            name: "Hotline Miami",
            added: 10400,
          },
          {
            id: 17540,
            slug: "injustice-gods-among-us-ultimate-edition",
            name: "Injustice: Gods Among Us Ultimate Edition",
            added: 9474,
          },
          { id: 22509, slug: "minecraft", name: "Minecraft", added: 8365 },
          { id: 4003, slug: "grid-2", name: "GRID 2", added: 7445 },
          {
            id: 3408,
            slug: "hotline-miami-2-wrong-number",
            name: "Hotline Miami 2: Wrong Number",
            added: 6113,
          },
          {
            id: 58753,
            slug: "forza-horizon-4",
            name: "Forza Horizon 4",
            added: 5964,
          },
        ],
      },
      {
        id: 83,
        name: "Platformer",
        slug: "platformer",
        games_count: 100795,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        games: [
          { id: 1030, slug: "limbo", name: "Limbo", added: 13475 },
          { id: 422, slug: "terraria", name: "Terraria", added: 12664 },
          {
            id: 9767,
            slug: "hollow-knight",
            name: "Hollow Knight",
            added: 10962,
          },
          {
            id: 41,
            slug: "little-nightmares",
            name: "Little Nightmares",
            added: 10884,
          },
          {
            id: 3144,
            slug: "super-meat-boy",
            name: "Super Meat Boy",
            added: 9351,
          },
          {
            id: 17572,
            slug: "batman-aa-goty",
            name: "Batman: Arkham Asylum Game of the Year Edition",
            added: 8118,
          },
        ],
      },
      {
        id: 1,
        name: "Racing",
        slug: "racing",
        games_count: 24915,
        image_background:
          "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg",
        games: [
          {
            id: 3272,
            slug: "rocket-league",
            name: "Rocket League",
            added: 12387,
          },
          { id: 4003, slug: "grid-2", name: "GRID 2", added: 7445 },
          { id: 2572, slug: "dirt-rally", name: "DiRT Rally", added: 6739 },
          {
            id: 58753,
            slug: "forza-horizon-4",
            name: "Forza Horizon 4",
            added: 5964,
          },
          { id: 5578, slug: "grid", name: "GRID (2008)", added: 5334 },
          {
            id: 19491,
            slug: "burnout-paradise-the-ultimate-box",
            name: "Burnout Paradise: The Ultimate Box",
            added: 4687,
          },
        ],
      },
      {
        id: 59,
        name: "Massively Multiplayer",
        slug: "massively-multiplayer",
        games_count: 3741,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        games: [
          { id: 10213, slug: "dota-2", name: "Dota 2", added: 12456 },
          { id: 766, slug: "warframe", name: "Warframe", added: 12407 },
          {
            id: 10533,
            slug: "path-of-exile",
            name: "Path of Exile",
            added: 10019,
          },
          {
            id: 10142,
            slug: "playerunknowns-battlegrounds",
            name: "PlayerUnknown’s Battlegrounds",
            added: 9948,
          },
          { id: 362, slug: "for-honor", name: "For Honor", added: 9335 },
          {
            id: 326292,
            slug: "fall-guys",
            name: "Fall Guys: Ultimate Knockout",
            added: 8565,
          },
        ],
      },
      {
        id: 15,
        name: "Sports",
        slug: "sports",
        games_count: 21656,
        image_background:
          "https://media.rawg.io/media/games/d16/d160819f22de73d29813f7b6dad815f9.jpg",
        games: [
          {
            id: 3272,
            slug: "rocket-league",
            name: "Rocket League",
            added: 12387,
          },
          {
            id: 326292,
            slug: "fall-guys",
            name: "Fall Guys: Ultimate Knockout",
            added: 8565,
          },
          { id: 2572, slug: "dirt-rally", name: "DiRT Rally", added: 6739 },
          {
            id: 53341,
            slug: "jet-set-radio-2012",
            name: "Jet Set Radio",
            added: 5136,
          },
          { id: 9575, slug: "vrchat", name: "VRChat", added: 4746 },
          { id: 36, slug: "tekken-7", name: "TEKKEN 7", added: 4011 },
        ],
      },
      {
        id: 6,
        name: "Fighting",
        slug: "fighting",
        games_count: 11756,
        image_background:
          "https://media.rawg.io/media/games/450/450ccffea136d06ef8d18802d583f8e5.jpg",
        games: [
          {
            id: 5286,
            slug: "tomb-raider",
            name: "Tomb Raider (2013)",
            added: 16769,
          },
          {
            id: 17540,
            slug: "injustice-gods-among-us-ultimate-edition",
            name: "Injustice: Gods Among Us Ultimate Edition",
            added: 9474,
          },
          {
            id: 108,
            slug: "mortal-kombat-x",
            name: "Mortal Kombat X",
            added: 8699,
          },
          {
            id: 28179,
            slug: "sega-mega-drive-and-genesis-classics",
            name: "SEGA Mega Drive and Genesis Classics",
            added: 8075,
          },
          { id: 9830, slug: "brawlhalla", name: "Brawlhalla", added: 7704 },
          {
            id: 274480,
            slug: "mortal-kombat-11",
            name: "Mortal Kombat 11",
            added: 5420,
          },
        ],
      },
      {
        id: 19,
        name: "Family",
        slug: "family",
        games_count: 5396,
        image_background:
          "https://media.rawg.io/media/screenshots/b1b/b1bde44ad4c3164f81d1249f866ad83c.jpeg",
        games: [
          { id: 3254, slug: "journey", name: "Journey", added: 8358 },
          {
            id: 3729,
            slug: "lego-the-hobbit",
            name: "LEGO The Hobbit",
            added: 5058,
          },
          { id: 3350, slug: "broken-age", name: "Broken Age", added: 5005 },
          { id: 1259, slug: "machinarium", name: "Machinarium", added: 4518 },
          { id: 1140, slug: "world-of-goo", name: "World of Goo", added: 4429 },
          {
            id: 4331,
            slug: "sonic-generations",
            name: "Sonic Generations",
            added: 4160,
          },
        ],
      },
      {
        id: 28,
        name: "Board Games",
        slug: "board-games",
        games_count: 8378,
        image_background:
          "https://media.rawg.io/media/games/3af/3af386b6e26be6741b711ae6215ef42f.jpg",
        games: [
          {
            id: 23557,
            slug: "gwent-the-witcher-card-game",
            name: "Gwent: The Witcher Card Game",
            added: 4789,
          },
          {
            id: 327999,
            slug: "dota-underlords",
            name: "Dota Underlords",
            added: 4045,
          },
          {
            id: 2055,
            slug: "adventure-capitalist",
            name: "AdVenture Capitalist",
            added: 3399,
          },
          { id: 758, slug: "hue", name: "Hue", added: 2538 },
          {
            id: 2306,
            slug: "poker-night-2",
            name: "Poker Night 2",
            added: 2051,
          },
          { id: 3187, slug: "armello", name: "Armello", added: 2028 },
        ],
      },
      {
        id: 34,
        name: "Educational",
        slug: "educational",
        games_count: 15681,
        image_background:
          "https://media.rawg.io/media/screenshots/6cd/6cd13ed3dcb6b44b8bc995850f2861e6.jpg",
        games: [
          {
            id: 1358,
            slug: "papers-please",
            name: "Papers, Please",
            added: 6843,
          },
          { id: 1140, slug: "world-of-goo", name: "World of Goo", added: 4429 },
          {
            id: 2778,
            slug: "surgeon-simulator-cpr",
            name: "Surgeon Simulator",
            added: 3929,
          },
          { id: 9768, slug: "gameguru", name: "GameGuru", added: 2566 },
          {
            id: 13777,
            slug: "sid-meiers-civilization-iv-colonization",
            name: "Sid Meier's Civilization IV: Colonization",
            added: 2324,
          },
          {
            id: 6885,
            slug: "pirates-3",
            name: "Sid Meier's Pirates!",
            added: 2260,
          },
        ],
      },
      {
        id: 17,
        name: "Card",
        slug: "card",
        games_count: 4529,
        image_background:
          "https://media.rawg.io/media/games/431/4317e294e88e4c9d77327693b15f499a.jpg",
        games: [
          {
            id: 28121,
            slug: "slay-the-spire",
            name: "Slay the Spire",
            added: 4873,
          },
          {
            id: 23557,
            slug: "gwent-the-witcher-card-game",
            name: "Gwent: The Witcher Card Game",
            added: 4789,
          },
          {
            id: 18852,
            slug: "poker-night-at-the-inventory",
            name: "Poker Night at the Inventory",
            added: 2739,
          },
          {
            id: 332,
            slug: "the-elder-scrolls-legends",
            name: "The Elder Scrolls: Legends",
            added: 2175,
          },
          { id: 8923, slug: "faeria", name: "Faeria", added: 2157 },
          {
            id: 2306,
            slug: "poker-night-2",
            name: "Poker Night 2",
            added: 2051,
          },
        ],
      },
    ],
  },
  kH = () => ({ data: wH, isLoading: !1, error: null }),
  TS = ({ selectedGenre: e, onSelectGenre: t }) => {
    const { data: n, isLoading: r, error: o } = kH();
    return o
      ? null
      : r
      ? k.jsx(Cd, {})
      : k.jsxs(k.Fragment, {
          children: [
            k.jsx(Pc, {
              above: "md",
              children: k.jsx(Ad, {
                fontSize: "2xl",
                marginBottom: 3,
                children: "Genres",
              }),
            }),
            k.jsx(Td, {
              children:
                n == null
                  ? void 0
                  : n.results.map((i) =>
                      k.jsx(
                        f5,
                        {
                          paddingY: "5px",
                          children: k.jsxs(sa, {
                            children: [
                              k.jsx(_d, {
                                boxSize: "32px",
                                borderRadius: 8,
                                objectFit: "cover",
                                src: C_(i.image_background),
                              }),
                              k.jsx(ul, {
                                whiteSpace: "normal",
                                textAlign: "left",
                                fontWeight:
                                  i.id === (e == null ? void 0 : e.id)
                                    ? "bold"
                                    : "normal",
                                onClick: () => t(i),
                                fontSize: "large",
                                variant: "link",
                                children: i.name,
                              }),
                            ],
                          }),
                        },
                        i.id
                      )
                    ),
            }),
          ],
        });
  },
  CH = () => k_("/platforms/lists/parents"),
  _H = ({ onSelectPlatform: e, selectedPlatform: t }) => {
    const { data: n, error: r } = CH();
    return r
      ? null
      : k.jsxs(_g, {
          children: [
            k.jsx(Pg, {
              as: ul,
              rightIcon: k.jsx(Q5, {}),
              children: (t == null ? void 0 : t.name) || "Platforms",
            }),
            k.jsx(Tg, {
              children: n.map((o) =>
                k.jsx(Eg, { onClick: () => e(o), children: o.name }, o.id)
              ),
            }),
          ],
        });
  },
  EH = ({ onSelectSortOrder: e, sortOrder: t }) => {
    const n = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-relased", label: "Relase date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
      ],
      r = n.find((o) => o.value === t);
    return k.jsxs(_g, {
      children: [
        k.jsxs(Pg, {
          as: ul,
          rightIcon: k.jsx(Q5, {}),
          children: [
            "Order by: ",
            (r == null ? void 0 : r.label) || "Relevance",
          ],
        }),
        k.jsx(Tg, {
          children: n.map((o) =>
            k.jsx(
              Eg,
              { onClick: () => e(o.value), value: o.value, children: o.label },
              o.value
            )
          ),
        }),
      ],
    });
  },
  TH = ({ gameQuery: e }) => {
    var n, r;
    const t = `${((n = e.platform) == null ? void 0 : n.name) || ""} ${
      ((r = e.genre) == null ? void 0 : r.name) || ""
    } Games`;
    return k.jsx(Ad, { as: "h1", children: t });
  };
function PH() {
  const [e, t] = b.useState({}),
    { isOpen: n, onOpen: r, onClose: o } = nN();
  return k.jsxs(vg, {
    templateAreas: { base: '"nav" "main"', lg: '"nav nav" "aside main"' },
    templateColumns: { base: "1fr", lg: "200px 1fr" },
    children: [
      k.jsx(Iu, {
        area: "nav",
        children: k.jsx(OW, { onSearch: (i) => t({ ...e, searchText: i }) }),
      }),
      k.jsx(Pc, {
        above: "lg",
        children: k.jsx(Iu, {
          area: "aside",
          paddingX: 5,
          children: k.jsx(TS, {
            selectedGenre: e.genre,
            onSelectGenre: (i) => t({ ...e, genre: i }),
          }),
        }),
      }),
      k.jsxs(Iu, {
        area: "main",
        children: [
          k.jsxs(Hs, {
            paddingLeft: 2,
            children: [
              k.jsxs(Gh, {
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 5,
                children: [
                  k.jsx(TH, { gameQuery: e }),
                  k.jsx(Pc, {
                    below: "lg",
                    children: k.jsx(ul, {
                      onClick: r,
                      marginRight: 3,
                      children: "Show Genres",
                    }),
                  }),
                ],
              }),
              k.jsxs(Gh, {
                marginBottom: 5,
                children: [
                  k.jsx(Hs, {
                    marginRight: 5,
                    children: k.jsx(_H, {
                      selectedPlatform: e.platform,
                      onSelectPlatform: (i) => t({ ...e, platform: i }),
                    }),
                  }),
                  k.jsx(EH, {
                    sortOrder: e.sortOrder,
                    onSelectSortOrder: (i) => t({ ...e, sortOrder: i }),
                  }),
                ],
              }),
            ],
          }),
          k.jsx(xH, { gameQuery: e }),
        ],
      }),
      k.jsxs(uW, {
        isOpen: n,
        placement: "left",
        onClose: o,
        children: [
          k.jsx(U5, {}),
          k.jsxs(V5, {
            children: [
              k.jsx(G5, {}),
              k.jsx(W5, { children: "Genres" }),
              k.jsx(H5, {
                children: k.jsx(TS, {
                  selectedGenre: e.genre,
                  onSelectGenre: (i) => {
                    t({ ...e, genre: i }), o();
                  },
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const AH = { initialColorMode: "dark" },
  PS = uD({ config: AH });
Bw(document.getElementById("root")).render(
  k.jsx(b.StrictMode, {
    children: k.jsxs(FF, {
      theme: PS,
      children: [
        k.jsx(gP, { initialColorMode: PS.config.initialColorMode }),
        k.jsx(PH, {}),
      ],
    }),
  })
);
