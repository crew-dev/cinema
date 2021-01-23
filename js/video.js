"object" == typeof navigator &&
  (function () {
    "use strict";
    var e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
    function t(e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    }
    function n(e) {
      return e && e.Math == Math && e;
    }
    function f(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    }
    function s(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    }
    function i(e) {
      return c.call(e).slice(8, -1);
    }
    function h(e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    }
    function u(e) {
      return w(h(e));
    }
    function O(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    }
    function l(e, t) {
      if (!O(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !O((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !O((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !O((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    }
    function P(e, t) {
      return m.call(e, t);
    }
    function r(e) {
      return y ? v.createElement(e) : {};
    }
    function x(e) {
      if (!O(e)) throw TypeError(String(e) + " is not an object");
      return e;
    }
    function p(t, n) {
      try {
        L(I, t, n);
      } catch (e) {
        I[t] = n;
      }
      return n;
    }
    var I =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        Function("return this")(),
      j = !f(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      }),
      o = {}.propertyIsEnumerable,
      a = Object.getOwnPropertyDescriptor,
      d = {
        f:
          a && !o.call({ 1: 2 }, 1)
            ? function (e) {
                var t = a(this, e);
                return !!t && t.enumerable;
              }
            : o,
      },
      c = {}.toString,
      g = "".split,
      w = f(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == i(e) ? g.call(e, "") : Object(e);
          }
        : Object,
      m = {}.hasOwnProperty,
      v = I.document,
      y = O(v) && O(v.createElement),
      b =
        !j &&
        !f(function () {
          return (
            7 !=
            Object.defineProperty(r("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
      _ = Object.getOwnPropertyDescriptor,
      C = {
        f: j
          ? _
          : function (e, t) {
              if (((e = u(e)), (t = l(t, !0)), b))
                try {
                  return _(e, t);
                } catch (e) {}
              if (P(e, t)) return s(!d.f.call(e, t), e[t]);
            },
      },
      k = Object.defineProperty,
      R = {
        f: j
          ? k
          : function (e, t, n) {
              if ((x(e), (t = l(t, !0)), x(n), b))
                try {
                  return k(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            },
      },
      L = j
        ? function (e, t, n) {
            return R.f(e, t, s(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          },
      E = I["__core-js_shared__"] || p("__core-js_shared__", {}),
      S = Function.toString;
    "function" != typeof E.inspectSource &&
      (E.inspectSource = function (e) {
        return S.call(e);
      });
    function T(e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++$ + G).toString(36)
      );
    }
    function A(e) {
      return K[e] || (K[e] = T(e));
    }
    var N,
      M,
      U,
      D,
      F,
      q,
      B,
      H,
      V = E.inspectSource,
      W = I.WeakMap,
      z = "function" == typeof W && /native code/.test(V(W)),
      Y = t(function (e) {
        (e.exports = function (e, t) {
          return E[e] || (E[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.6.5",
          mode: "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
      }),
      $ = 0,
      G = Math.random(),
      K = Y("keys"),
      X = {},
      J = I.WeakMap;
    B = z
      ? ((N = new J()),
        (M = N.get),
        (U = N.has),
        (D = N.set),
        (F = function (e, t) {
          return D.call(N, e, t), t;
        }),
        (q = function (e) {
          return M.call(N, e) || {};
        }),
        function (e) {
          return U.call(N, e);
        })
      : ((H = A("state")),
        (X[H] = !0),
        (F = function (e, t) {
          return L(e, H, t), t;
        }),
        (q = function (e) {
          return P(e, H) ? e[H] : {};
        }),
        function (e) {
          return P(e, H);
        });
    function Q(e) {
      return "function" == typeof e ? e : void 0;
    }
    function Z(e, t) {
      return arguments.length < 2
        ? Q(be[e]) || Q(I[e])
        : (be[e] && be[e][t]) || (I[e] && I[e][t]);
    }
    function ee(e) {
      return isNaN((e = +e)) ? 0 : (0 < e ? _e : we)(e);
    }
    function te(e) {
      return 0 < e ? ke(ee(e), 9007199254740991) : 0;
    }
    function ne(e, t) {
      var n = ee(e);
      return n < 0 ? Ee(n + t, 0) : Se(n, t);
    }
    function re(s) {
      return function (e, t, n) {
        var r,
          i = u(e),
          o = te(i.length),
          a = ne(n, o);
        if (s && t != t) {
          for (; a < o; ) if ((r = i[a++]) != r) return !0;
        } else
          for (; a < o; a++)
            if ((s || a in i) && i[a] === t) return s || a || 0;
        return !s && -1;
      };
    }
    function ie(e, t) {
      var n,
        r = u(e),
        i = 0,
        o = [];
      for (n in r) !P(X, n) && P(r, n) && o.push(n);
      for (; t.length > i; ) P(r, (n = t[i++])) && (~xe(o, n) || o.push(n));
      return o;
    }
    function oe(e, t) {
      for (var n = je(t), r = R.f, i = C.f, o = 0; o < n.length; o++) {
        var a = n[o];
        P(e, a) || r(e, a, i(t, a));
      }
    }
    function ae(e, t) {
      var n = Le[Re(e)];
      return n == Me || (n != Ne && ("function" == typeof t ? f(t) : !!t));
    }
    function se(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = e.target,
        c = e.global,
        u = e.stat;
      if ((n = c ? I : u ? I[s] || p(s, {}) : (I[s] || {}).prototype))
        for (r in t) {
          if (
            ((o = t[r]),
            (i = e.noTargetGet ? (a = De(n, r)) && a.value : n[r]),
            !Ue(c ? r : s + (u ? "." : "#") + r, e.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            oe(o, i);
          }
          (e.sham || (i && i.sham)) && L(o, "sham", !0), ye(n, r, o, e);
        }
    }
    function ce(e) {
      if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function");
      return e;
    }
    function ue(r, i, e) {
      if ((ce(r), void 0 === i)) return r;
      switch (e) {
        case 0:
          return function () {
            return r.call(i);
          };
        case 1:
          return function (e) {
            return r.call(i, e);
          };
        case 2:
          return function (e, t) {
            return r.call(i, e, t);
          };
        case 3:
          return function (e, t, n) {
            return r.call(i, e, t, n);
          };
      }
      return function () {
        return r.apply(i, arguments);
      };
    }
    function le(e) {
      return Object(h(e));
    }
    function fe(e) {
      return (
        P(He, e) ||
          (qe && P(Ve, e) ? (He[e] = Ve[e]) : (He[e] = We("Symbol." + e))),
        He[e]
      );
    }
    function he(e, t) {
      var n;
      return (
        Fe(e) &&
          (("function" == typeof (n = e.constructor) &&
            (n === Array || Fe(n.prototype))) ||
            (O(n) && null === (n = n[ze]))) &&
          (n = void 0),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    }
    function pe(p) {
      var d = 1 == p,
        g = 2 == p,
        m = 3 == p,
        v = 4 == p,
        y = 6 == p,
        b = 5 == p || y;
      return function (e, t, n, r) {
        for (
          var i,
            o,
            a = le(e),
            s = w(a),
            c = ue(t, n, 3),
            u = te(s.length),
            l = 0,
            f = r || he,
            h = d ? f(e, u) : g ? f(e, 0) : void 0;
          l < u;
          l++
        )
          if ((b || l in s) && ((o = c((i = s[l]), l, a)), p))
            if (d) h[l] = o;
            else if (o)
              switch (p) {
                case 3:
                  return !0;
                case 5:
                  return i;
                case 6:
                  return l;
                case 2:
                  Ye.call(h, i);
              }
            else if (v) return !1;
        return y ? -1 : m || v ? v : h;
      };
    }
    function de(e, t) {
      var n = [][e];
      return (
        !!n &&
        f(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    }
    function ge(e) {
      throw e;
    }
    function me(e, t) {
      if (P(Ke, e)) return Ke[e];
      var n = [][e],
        r = !!P((t = t || {}), "ACCESSORS") && t.ACCESSORS,
        i = P(t, 0) ? t[0] : ge,
        o = P(t, 1) ? t[1] : void 0;
      return (Ke[e] =
        !!n &&
        !f(function () {
          if (r && !j) return 1;
          var e = { length: -1 };
          r ? Ge(e, 1, { enumerable: !0, get: ge }) : (e[1] = 1),
            n.call(e, i, o);
        }));
    }
    var ve = {
        set: F,
        get: q,
        has: B,
        enforce: function (e) {
          return B(e) ? q(e) : F(e, {});
        },
        getterFor: function (n) {
          return function (e) {
            var t;
            if (!O(e) || (t = q(e)).type !== n)
              throw TypeError("Incompatible receiver, " + n + " required");
            return t;
          };
        },
      },
      ye = t(function (e) {
        var t = ve.get,
          s = ve.enforce,
          c = String(String).split("String");
        (e.exports = function (e, t, n, r) {
          var i = !!r && !!r.unsafe,
            o = !!r && !!r.enumerable,
            a = !!r && !!r.noTargetGet;
          "function" == typeof n &&
            ("string" != typeof t || P(n, "name") || L(n, "name", t),
            (s(n).source = c.join("string" == typeof t ? t : ""))),
            e !== I
              ? (i ? !a && e[t] && (o = !0) : delete e[t],
                o ? (e[t] = n) : L(e, t, n))
              : o
              ? (e[t] = n)
              : p(t, n);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && t(this).source) || V(this);
        });
      }),
      be = I,
      we = Math.ceil,
      _e = Math.floor,
      ke = Math.min,
      Ee = Math.max,
      Se = Math.min,
      Te = { includes: re(!0), indexOf: re(!1) },
      xe = Te.indexOf,
      Ae = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ],
      Oe = Ae.concat("length", "prototype"),
      Pe = {
        f:
          Object.getOwnPropertyNames ||
          function (e) {
            return ie(e, Oe);
          },
      },
      Ie = { f: Object.getOwnPropertySymbols },
      je =
        Z("Reflect", "ownKeys") ||
        function (e) {
          var t = Pe.f(x(e)),
            n = Ie.f;
          return n ? t.concat(n(e)) : t;
        },
      Ce = /#|\.prototype\./,
      Re = (ae.normalize = function (e) {
        return String(e).replace(Ce, ".").toLowerCase();
      }),
      Le = (ae.data = {}),
      Ne = (ae.NATIVE = "N"),
      Me = (ae.POLYFILL = "P"),
      Ue = ae,
      De = C.f,
      Fe =
        Array.isArray ||
        function (e) {
          return "Array" == i(e);
        },
      qe =
        !!Object.getOwnPropertySymbols &&
        !f(function () {
          return !String(Symbol());
        }),
      Be = qe && !Symbol.sham && "symbol" == typeof Symbol.iterator,
      He = Y("wks"),
      Ve = I.Symbol,
      We = Be ? Ve : (Ve && Ve.withoutSetter) || T,
      ze = fe("species"),
      Ye = [].push,
      $e = {
        forEach: pe(0),
        map: pe(1),
        filter: pe(2),
        some: pe(3),
        every: pe(4),
        find: pe(5),
        findIndex: pe(6),
      },
      Ge = Object.defineProperty,
      Ke = {},
      Xe = $e.forEach,
      Je = de("forEach"),
      Qe = me("forEach"),
      Ze =
        Je && Qe
          ? [].forEach
          : function (e) {
              return Xe(this, e, 1 < arguments.length ? arguments[1] : void 0);
            };
    se(
      { target: "Array", proto: !0, forced: [].forEach != Ze },
      { forEach: Ze }
    );
    function et(e, t, n, r) {
      try {
        return r ? t(x(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = e.return;
        throw (void 0 !== i && x(i.call(e)), t);
      }
    }
    function tt(e) {
      return void 0 !== e && (rt.Array === e || ot[it] === e);
    }
    function nt(e, t, n) {
      var r = l(t);
      r in e ? R.f(e, r, s(0, n)) : (e[r] = n);
    }
    var rt = {},
      it = fe("iterator"),
      ot = Array.prototype,
      at = {};
    at[fe("toStringTag")] = "z";
    function st(e) {
      if (null != e) return e[pt] || e["@@iterator"] || rt[ht(e)];
    }
    function ct(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = le(e),
        c = "function" == typeof this ? this : Array,
        u = arguments.length,
        l = 1 < u ? arguments[1] : void 0,
        f = void 0 !== l,
        h = st(s),
        p = 0;
      if (
        (f && (l = ue(l, 2 < u ? arguments[2] : void 0, 2)),
        null == h || (c == Array && tt(h)))
      )
        for (n = new c((t = te(s.length))); p < t; p++)
          (a = f ? l(s[p], p) : s[p]), nt(n, p, a);
      else
        for (o = (i = h.call(s)).next, n = new c(); !(r = o.call(i)).done; p++)
          (a = f ? et(i, l, [r.value, p], !0) : r.value), nt(n, p, a);
      return (n.length = p), n;
    }
    var ut = "[object z]" === String(at),
      lt = fe("toStringTag"),
      ft =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        ),
      ht = ut
        ? i
        : function (e) {
            var t, n, r;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = Object(e)), lt))
              ? n
              : ft
              ? i(t)
              : "Object" == (r = i(t)) && "function" == typeof t.callee
              ? "Arguments"
              : r;
          },
      pt = fe("iterator"),
      dt = fe("iterator"),
      gt = !1;
    try {
      var mt = 0,
        vt = {
          next: function () {
            return { done: !!mt++ };
          },
          return: function () {
            gt = !0;
          },
        };
      (vt[dt] = function () {
        return this;
      }),
        Array.from(vt, function () {
          throw 2;
        });
    } catch (e) {}
    function yt(e, t) {
      if (!t && !gt) return !1;
      var n = !1;
      try {
        var r = {};
        (r[dt] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(r);
      } catch (e) {}
      return n;
    }
    var bt = !yt(function (e) {
      Array.from(e);
    });
    se({ target: "Array", stat: !0, forced: bt }, { from: ct });
    function wt() {}
    function _t(e) {
      return "<script>" + e + "</script>";
    }
    var kt,
      Et =
        Object.keys ||
        function (e) {
          return ie(e, Ae);
        },
      St = j
        ? Object.defineProperties
        : function (e, t) {
            x(e);
            for (var n, r = Et(t), i = r.length, o = 0; o < i; )
              R.f(e, (n = r[o++]), t[n]);
            return e;
          },
      Tt = Z("document", "documentElement"),
      xt = A("IE_PROTO"),
      At = function () {
        try {
          kt = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        At = kt
          ? (function (e) {
              e.write(_t("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            })(kt)
          : (((t = r("iframe")).style.display = "none"),
            Tt.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(_t("document.F=Object")),
            e.close(),
            e.F);
        for (var n = Ae.length; n--; ) delete At.prototype[Ae[n]];
        return At();
      };
    X[xt] = !0;
    var Ot =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((wt.prototype = x(e)),
                (n = new wt()),
                (wt.prototype = null),
                (n[xt] = e))
              : (n = At()),
            void 0 === t ? n : St(n, t)
          );
        },
      Pt = fe("unscopables"),
      It = Array.prototype;
    null == It[Pt] && R.f(It, Pt, { configurable: !0, value: Ot(null) });
    function jt(e) {
      It[Pt][e] = !0;
    }
    var Ct = Te.includes,
      Rt = me("indexOf", { ACCESSORS: !0, 1: 0 });
    se(
      { target: "Array", proto: !0, forced: !Rt },
      {
        includes: function (e) {
          return Ct(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    ),
      jt("includes");
    var Lt,
      Nt,
      Mt = Z("navigator", "userAgent") || "",
      Ut = I.process,
      Dt = Ut && Ut.versions,
      Ft = Dt && Dt.v8;
    Ft
      ? (Nt = (Lt = Ft.split("."))[0] + Lt[1])
      : Mt &&
        (!(Lt = Mt.match(/Edge\/(\d+)/)) || 74 <= Lt[1]) &&
        (Lt = Mt.match(/Chrome\/(\d+)/)) &&
        (Nt = Lt[1]);
    function qt(t) {
      return (
        51 <= Bt ||
        !f(function () {
          var e = [];
          return (
            ((e.constructor = {})[Ht] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    }
    var Bt = Nt && +Nt,
      Ht = fe("species"),
      Vt = $e.map,
      Wt = qt("map"),
      zt = me("map");
    se(
      { target: "Array", proto: !0, forced: !Wt || !zt },
      {
        map: function (e) {
          return Vt(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    var Yt = f(function () {
      Et(1);
    });
    se(
      { target: "Object", stat: !0, forced: Yt },
      {
        keys: function (e) {
          return Et(le(e));
        },
      }
    );
    function $t(e, t, n) {
      var r, i;
      return (
        Xt &&
          "function" == typeof (r = t.constructor) &&
          r !== n &&
          O((i = r.prototype)) &&
          i !== n.prototype &&
          Xt(e, i),
        e
      );
    }
    function Gt(e) {
      var t;
      return O(e) && (void 0 !== (t = e[Jt]) ? !!t : "RegExp" == i(e));
    }
    function Kt() {
      var e = x(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    }
    var Xt =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var n,
                r = !1,
                e = {};
              try {
                (n = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(e, []),
                  (r = e instanceof Array);
              } catch (n) {}
              return function (e, t) {
                return (
                  x(e),
                  (function () {
                    if (!O(t) && null !== t)
                      throw TypeError(
                        "Can't set " + String(t) + " as a prototype"
                      );
                  })(),
                  r ? n.call(e, t) : (e.__proto__ = t),
                  e
                );
              };
            })()
          : void 0),
      Jt = fe("match");
    function Qt(e, t) {
      return RegExp(e, t);
    }
    function Zt(e) {
      var t = Z(e),
        n = R.f;
      j &&
        t &&
        !t[tn] &&
        n(t, tn, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    }
    var en = {
        UNSUPPORTED_Y: f(function () {
          var e = Qt("a", "y");
          return (e.lastIndex = 2), null != e.exec("abcd");
        }),
        BROKEN_CARET: f(function () {
          var e = Qt("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        }),
      },
      tn = fe("species"),
      nn = R.f,
      rn = Pe.f,
      on = ve.set,
      an = fe("match"),
      sn = I.RegExp,
      cn = sn.prototype,
      un = /a/g,
      ln = /a/g,
      fn = new sn(un) !== un,
      hn = en.UNSUPPORTED_Y;
    if (
      j &&
      Ue(
        "RegExp",
        !fn ||
          hn ||
          f(function () {
            return (
              (ln[an] = !1),
              sn(un) != un || sn(ln) == ln || "/a/i" != sn(un, "i")
            );
          })
      )
    ) {
      for (
        var pn = function (e, t) {
            var n,
              r = this instanceof pn,
              i = Gt(e),
              o = void 0 === t;
            if (!r && i && e.constructor === pn && o) return e;
            fn
              ? i && !o && (e = e.source)
              : e instanceof pn && (o && (t = Kt.call(e)), (e = e.source)),
              hn &&
                (n = !!t && -1 < t.indexOf("y")) &&
                (t = t.replace(/y/g, ""));
            var a = $t(fn ? new sn(e, t) : sn(e, t), r ? this : cn, pn);
            return hn && n && on(a, { sticky: n }), a;
          },
          dn = rn(sn),
          gn = 0;
        dn.length > gn;

      )
        !(function (t) {
          t in pn ||
            nn(pn, t, {
              configurable: !0,
              get: function () {
                return sn[t];
              },
              set: function (e) {
                sn[t] = e;
              },
            });
        })(dn[gn++]);
      ((cn.constructor = pn).prototype = cn), ye(I, "RegExp", pn);
    }
    Zt("RegExp");
    var mn,
      vn,
      yn = RegExp.prototype.exec,
      bn = String.prototype.replace,
      wn = yn,
      _n =
        ((mn = /a/),
        (vn = /b*/g),
        yn.call(mn, "a"),
        yn.call(vn, "a"),
        0 !== mn.lastIndex || 0 !== vn.lastIndex),
      kn = en.UNSUPPORTED_Y || en.BROKEN_CARET,
      En = void 0 !== /()??/.exec("")[1];
    (_n || En || kn) &&
      (wn = function (e) {
        var t,
          n,
          r,
          i,
          o = this,
          a = kn && o.sticky,
          s = Kt.call(o),
          c = o.source,
          u = 0,
          l = e;
        return (
          a &&
            (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
            (l = String(e).slice(o.lastIndex)),
            0 < o.lastIndex &&
              (!o.multiline || (o.multiline && "\n" !== e[o.lastIndex - 1])) &&
              ((c = "(?: " + c + ")"), (l = " " + l), u++),
            (n = new RegExp("^(?:" + c + ")", s))),
          En && (n = new RegExp("^" + c + "$(?!\\s)", s)),
          _n && (t = o.lastIndex),
          (r = yn.call(a ? n : o, l)),
          a
            ? r
              ? ((r.input = r.input.slice(u)),
                (r[0] = r[0].slice(u)),
                (r.index = o.lastIndex),
                (o.lastIndex += r[0].length))
              : (o.lastIndex = 0)
            : _n && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
          En &&
            r &&
            1 < r.length &&
            bn.call(r[0], n, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      });
    var Sn = wn;
    se({ target: "RegExp", proto: !0, forced: /./.exec !== Sn }, { exec: Sn });
    var Tn = RegExp.prototype,
      xn = Tn.toString,
      An = f(function () {
        return "/a/b" != xn.call({ source: "a", flags: "b" });
      }),
      On = "toString" != xn.name;
    (An || On) &&
      ye(
        RegExp.prototype,
        "toString",
        function () {
          var e = x(this),
            t = String(e.source),
            n = e.flags;
          return (
            "/" +
            t +
            "/" +
            String(
              void 0 === n && e instanceof RegExp && !("flags" in Tn)
                ? Kt.call(e)
                : n
            )
          );
        },
        { unsafe: !0 }
      );
    var Pn = fe("match");
    se(
      {
        target: "String",
        proto: !0,
        forced: !(function (t) {
          var n = /./;
          try {
            "/./"[t](n);
          } catch (e) {
            try {
              return (n[Pn] = !1), "/./"[t](n);
            } catch (t) {}
          }
        })("includes"),
      },
      {
        includes: function (e) {
          return !!~String(h(this)).indexOf(
            (function (e) {
              if (Gt(e))
                throw TypeError(
                  "The method doesn't accept regular expressions"
                );
              return e;
            })(e),
            1 < arguments.length ? arguments[1] : void 0
          );
        },
      }
    );
    function In(s) {
      return function (e, t) {
        var n,
          r,
          i = String(h(e)),
          o = ee(t),
          a = i.length;
        return o < 0 || a <= o
          ? s
            ? ""
            : void 0
          : (n = i.charCodeAt(o)) < 55296 ||
            56319 < n ||
            o + 1 === a ||
            (r = i.charCodeAt(o + 1)) < 56320 ||
            57343 < r
          ? s
            ? i.charAt(o)
            : n
          : s
          ? i.slice(o, o + 2)
          : r - 56320 + ((n - 55296) << 10) + 65536;
      };
    }
    var jn,
      Cn,
      Rn,
      Ln = { codeAt: In(!1), charAt: In(!0) },
      Nn = !f(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      }),
      Mn = A("IE_PROTO"),
      Un = Object.prototype,
      Dn = Nn
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = le(e)),
              P(e, Mn)
                ? e[Mn]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? Un
                : null
            );
          },
      Fn = fe("iterator"),
      qn = !1;
    [].keys &&
      ("next" in (Rn = [].keys())
        ? (Cn = Dn(Dn(Rn))) !== Object.prototype && (jn = Cn)
        : (qn = !0)),
      null == jn && (jn = {}),
      P(jn, Fn) ||
        L(jn, Fn, function () {
          return this;
        });
    function Bn(e, t, n) {
      e &&
        !P((e = n ? e : e.prototype), Gn) &&
        $n(e, Gn, { configurable: !0, value: t });
    }
    function Hn() {
      return this;
    }
    function Vn(e, t, n) {
      var r = t + " Iterator";
      return (
        (e.prototype = Ot(Kn, { next: s(1, n) })), Bn(e, r, !1), (rt[r] = Hn), e
      );
    }
    function Wn() {
      return this;
    }
    function zn(e, t, n, r, i, o, a) {
      function s(e) {
        if (e === i && g) return g;
        if (!Jn && e in p) return p[e];
        switch (e) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      }
      Vn(n, t, r);
      var c,
        u,
        l,
        f = t + " Iterator",
        h = !1,
        p = e.prototype,
        d = p[Qn] || p["@@iterator"] || (i && p[i]),
        g = (!Jn && d) || s(i),
        m = ("Array" == t && p.entries) || d;
      if (
        (m &&
          ((c = Dn(m.call(new e()))),
          Xn !== Object.prototype &&
            c.next &&
            (Dn(c) !== Xn &&
              (Xt ? Xt(c, Xn) : "function" != typeof c[Qn] && L(c, Qn, Wn)),
            Bn(c, f, !0))),
        "values" == i &&
          d &&
          "values" !== d.name &&
          ((h = !0),
          (g = function () {
            return d.call(this);
          })),
        p[Qn] !== g && L(p, Qn, g),
        (rt[t] = g),
        i)
      )
        if (
          ((u = {
            values: s("values"),
            keys: o ? g : s("keys"),
            entries: s("entries"),
          }),
          a)
        )
          for (l in u) (!Jn && !h && l in p) || ye(p, l, u[l]);
        else se({ target: t, proto: !0, forced: Jn || h }, u);
      return u;
    }
    var Yn = { IteratorPrototype: jn, BUGGY_SAFARI_ITERATORS: qn },
      $n = R.f,
      Gn = fe("toStringTag"),
      Kn = Yn.IteratorPrototype,
      Xn = Yn.IteratorPrototype,
      Jn = Yn.BUGGY_SAFARI_ITERATORS,
      Qn = fe("iterator"),
      Zn = Ln.charAt,
      er = ve.set,
      tr = ve.getterFor("String Iterator");
    zn(
      String,
      "String",
      function (e) {
        er(this, { type: "String Iterator", string: String(e), index: 0 });
      },
      function () {
        var e,
          t = tr(this),
          n = t.string,
          r = t.index;
        return r >= n.length
          ? { value: void 0, done: !0 }
          : ((e = Zn(n, r)), (t.index += e.length), { value: e, done: !1 });
      }
    );
    var nr = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
    for (var rr in nr) {
      var ir = I[rr],
        or = ir && ir.prototype;
      if (or && or.forEach !== Ze)
        try {
          L(or, "forEach", Ze);
        } catch (e) {
          or.forEach = Ze;
        }
    }
    var ar = document.getElementById("container");
    document.addEventListener("focusout", function (e) {
      e.target.classList &&
        !ar.contains(e.target) &&
        e.target.classList.remove("tab-focus");
    }),
      document.addEventListener("keydown", function (e) {
        9 === e.keyCode &&
          setTimeout(function () {
            var e = document.activeElement;
            e && e.classList && !ar.contains(e) && e.classList.add("tab-focus");
          }, 10);
      }),
      (function () {
        if ("undefined" != typeof window)
          try {
            var e = new window.CustomEvent("test", { cancelable: !0 });
            if ((e.preventDefault(), !0 !== e.defaultPrevented))
              throw new Error("Could not prevent default");
          } catch (e) {
            var t = function (e, t) {
              var n, r;
              return (
                ((t = t || {}).bubbles = !!t.bubbles),
                (t.cancelable = !!t.cancelable),
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  e,
                  t.bubbles,
                  t.cancelable,
                  t.detail
                ),
                (r = n.preventDefault),
                (n.preventDefault = function () {
                  r.call(this);
                  try {
                    Object.defineProperty(this, "defaultPrevented", {
                      get: function () {
                        return !0;
                      },
                    });
                  } catch (e) {
                    this.defaultPrevented = !0;
                  }
                }),
                n
              );
            };
            (t.prototype = window.Event.prototype), (window.CustomEvent = t);
          }
      })();
    function sr(e) {
      var t = be.Symbol || (be.Symbol = {});
      P(t, e) || yr(t, e, { value: vr.f(e) });
    }
    function cr(e, t) {
      var n = (jr[e] = Ot(Tr.prototype));
      return (
        kr(n, { type: "Symbol", tag: e, description: t }),
        j || (n.description = t),
        n
      );
    }
    function ur(t, e) {
      x(t);
      var n = u(e),
        r = Et(n).concat(Hr(n));
      return (
        br(r, function (e) {
          (j && !Br.call(n, e)) || qr(t, e, n[e]);
        }),
        t
      );
    }
    function lr(e, t) {
      var n = u(e),
        r = l(t, !0);
      if (n !== Sr || !P(jr, r) || P(Cr, r)) {
        var i = Ar(n, r);
        return (
          !i || !P(jr, r) || (P(n, wr) && n[wr][r]) || (i.enumerable = !0), i
        );
      }
    }
    function fr(e) {
      var t = Pr(u(e)),
        n = [];
      return (
        br(t, function (e) {
          P(jr, e) || P(X, e) || n.push(e);
        }),
        n
      );
    }
    var hr,
      pr = Pe.f,
      dr = {}.toString,
      gr =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [],
      mr = {
        f: function (e) {
          return gr && "[object Window]" == dr.call(e)
            ? (function (e) {
                try {
                  return pr(e);
                } catch (e) {
                  return gr.slice();
                }
              })(e)
            : pr(u(e));
        },
      },
      vr = { f: fe },
      yr = R.f,
      br = $e.forEach,
      wr = A("hidden"),
      _r = fe("toPrimitive"),
      kr = ve.set,
      Er = ve.getterFor("Symbol"),
      Sr = Object.prototype,
      Tr = I.Symbol,
      xr = Z("JSON", "stringify"),
      Ar = C.f,
      Or = R.f,
      Pr = mr.f,
      Ir = d.f,
      jr = Y("symbols"),
      Cr = Y("op-symbols"),
      Rr = Y("string-to-symbol-registry"),
      Lr = Y("symbol-to-string-registry"),
      Nr = Y("wks"),
      Mr = I.QObject,
      Ur = !Mr || !Mr.prototype || !Mr.prototype.findChild,
      Dr =
        j &&
        f(function () {
          return (
            7 !=
            Ot(
              Or({}, "a", {
                get: function () {
                  return Or(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (e, t, n) {
              var r = Ar(Sr, t);
              r && delete Sr[t], Or(e, t, n), r && e !== Sr && Or(Sr, t, r);
            }
          : Or,
      Fr = Be
        ? function (e) {
            return "symbol" == typeof e;
          }
        : function (e) {
            return Object(e) instanceof Tr;
          },
      qr = function (e, t, n) {
        e === Sr && qr(Cr, t, n), x(e);
        var r = l(t, !0);
        return (
          x(n),
          P(jr, r)
            ? (n.enumerable
                ? (P(e, wr) && e[wr][r] && (e[wr][r] = !1),
                  (n = Ot(n, { enumerable: s(0, !1) })))
                : (P(e, wr) || Or(e, wr, s(1, {})), (e[wr][r] = !0)),
              Dr(e, r, n))
            : Or(e, r, n)
        );
      },
      Br = function (e) {
        var t = l(e, !0),
          n = Ir.call(this, t);
        return (
          !(this === Sr && P(jr, t) && !P(Cr, t)) &&
          (!(n || !P(this, t) || !P(jr, t) || (P(this, wr) && this[wr][t])) ||
            n)
        );
      },
      Hr = function (e) {
        var t = e === Sr,
          n = Pr(t ? Cr : u(e)),
          r = [];
        return (
          br(n, function (e) {
            !P(jr, e) || (t && !P(Sr, e)) || r.push(jr[e]);
          }),
          r
        );
      };
    qe ||
      (ye(
        (Tr = function () {
          if (this instanceof Tr)
            throw TypeError("Symbol is not a constructor");
          var e =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            t = T(e),
            n = function (e) {
              this === Sr && n.call(Cr, e),
                P(this, wr) && P(this[wr], t) && (this[wr][t] = !1),
                Dr(this, t, s(1, e));
            };
          return j && Ur && Dr(Sr, t, { configurable: !0, set: n }), cr(t, e);
        }).prototype,
        "toString",
        function () {
          return Er(this).tag;
        }
      ),
      ye(Tr, "withoutSetter", function (e) {
        return cr(T(e), e);
      }),
      (d.f = Br),
      (R.f = qr),
      (C.f = lr),
      (Pe.f = mr.f = fr),
      (Ie.f = Hr),
      (vr.f = function (e) {
        return cr(fe(e), e);
      }),
      j &&
        (Or(Tr.prototype, "description", {
          configurable: !0,
          get: function () {
            return Er(this).description;
          },
        }),
        ye(Sr, "propertyIsEnumerable", Br, { unsafe: !0 }))),
      se({ global: !0, wrap: !0, forced: !qe, sham: !qe }, { Symbol: Tr }),
      br(Et(Nr), function (e) {
        sr(e);
      }),
      se(
        { target: "Symbol", stat: !0, forced: !qe },
        {
          for: function (e) {
            var t = String(e);
            if (P(Rr, t)) return Rr[t];
            var n = Tr(t);
            return (Rr[t] = n), (Lr[n] = t), n;
          },
          keyFor: function (e) {
            if (!Fr(e)) throw TypeError(e + " is not a symbol");
            if (P(Lr, e)) return Lr[e];
          },
          useSetter: function () {
            Ur = !0;
          },
          useSimple: function () {
            Ur = !1;
          },
        }
      ),
      se(
        { target: "Object", stat: !0, forced: !qe, sham: !j },
        {
          create: function (e, t) {
            return void 0 === t ? Ot(e) : ur(Ot(e), t);
          },
          defineProperty: qr,
          defineProperties: ur,
          getOwnPropertyDescriptor: lr,
        }
      ),
      se(
        { target: "Object", stat: !0, forced: !qe },
        { getOwnPropertyNames: fr, getOwnPropertySymbols: Hr }
      ),
      se(
        {
          target: "Object",
          stat: !0,
          forced: f(function () {
            Ie.f(1);
          }),
        },
        {
          getOwnPropertySymbols: function (e) {
            return Ie.f(le(e));
          },
        }
      ),
      xr &&
        ((hr =
          !qe ||
          f(function () {
            var e = Tr();
            return (
              "[null]" != xr([e]) ||
              "{}" != xr({ a: e }) ||
              "{}" != xr(Object(e))
            );
          })),
        se(
          { target: "JSON", stat: !0, forced: hr },
          {
            stringify: function (e, t, n) {
              for (var r, i = [e], o = 1; o < arguments.length; )
                i.push(arguments[o++]);
              if ((O((r = t)) || void 0 !== e) && !Fr(e))
                return (
                  Fe(t) ||
                    (t = function (e, t) {
                      if (
                        ("function" == typeof r && (t = r.call(this, e, t)),
                        !Fr(t))
                      )
                        return t;
                    }),
                  (i[1] = t),
                  xr.apply(null, i)
                );
            },
          }
        )),
      Tr.prototype[_r] || L(Tr.prototype, _r, Tr.prototype.valueOf),
      Bn(Tr, "Symbol"),
      (X[wr] = !0);
    var Vr,
      Wr,
      zr,
      Yr,
      $r,
      Gr,
      Kr = R.f,
      Xr = I.Symbol;
    !j ||
      "function" != typeof Xr ||
      ("description" in Xr.prototype && void 0 === Xr().description) ||
      ((Vr = {}),
      oe(
        (Wr = function () {
          var e =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            t = this instanceof Wr ? new Xr(e) : void 0 === e ? Xr() : Xr(e);
          return "" === e && (Vr[t] = !0), t;
        }),
        Xr
      ),
      ((zr = Wr.prototype = Xr.prototype).constructor = Wr),
      (Yr = zr.toString),
      ($r = "Symbol(test)" == String(Xr("test"))),
      (Gr = /^Symbol\((.*)\)[^)]+$/),
      Kr(zr, "description", {
        configurable: !0,
        get: function () {
          var e = O(this) ? this.valueOf() : this,
            t = Yr.call(e);
          if (P(Vr, e)) return "";
          var n = $r ? t.slice(7, -1) : t.replace(Gr, "$1");
          return "" === n ? void 0 : n;
        },
      }),
      se({ global: !0, forced: !0 }, { Symbol: Wr })),
      sr("iterator");
    var Jr = Te.indexOf,
      Qr = [].indexOf,
      Zr = !!Qr && 1 / [1].indexOf(1, -0) < 0,
      ei = de("indexOf"),
      ti = me("indexOf", { ACCESSORS: !0, 1: 0 });
    se(
      { target: "Array", proto: !0, forced: Zr || !ei || !ti },
      {
        indexOf: function (e) {
          return Zr
            ? Qr.apply(this, arguments) || 0
            : Jr(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    var ni = ve.set,
      ri = ve.getterFor("Array Iterator"),
      ii = zn(
        Array,
        "Array",
        function (e, t) {
          ni(this, { type: "Array Iterator", target: u(e), index: 0, kind: t });
        },
        function () {
          var e = ri(this),
            t = e.target,
            n = e.kind,
            r = e.index++;
          return !t || r >= t.length
            ? { value: (e.target = void 0), done: !0 }
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: t[r], done: !1 }
            : { value: [r, t[r]], done: !1 };
        },
        "values"
      );
    (rt.Arguments = rt.Array), jt("keys"), jt("values"), jt("entries");
    var oi = [].join,
      ai = w != Object,
      si = de("join", ",");
    se(
      { target: "Array", proto: !0, forced: ai || !si },
      {
        join: function (e) {
          return oi.call(u(this), void 0 === e ? "," : e);
        },
      }
    );
    var ci = qt("slice"),
      ui = me("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      li = fe("species"),
      fi = [].slice,
      hi = Math.max;
    se(
      { target: "Array", proto: !0, forced: !ci || !ui },
      {
        slice: function (e, t) {
          var n,
            r,
            i,
            o = u(this),
            a = te(o.length),
            s = ne(e, a),
            c = ne(void 0 === t ? a : t, a);
          if (
            Fe(o) &&
            ((("function" == typeof (n = o.constructor) &&
              (n === Array || Fe(n.prototype))) ||
              (O(n) && null === (n = n[li]))) &&
              (n = void 0),
            n === Array || void 0 === n)
          )
            return fi.call(o, s, c);
          for (
            r = new (void 0 === n ? Array : n)(hi(c - s, 0)), i = 0;
            s < c;
            s++, i++
          )
            s in o && nt(r, i, o[s]);
          return (r.length = i), r;
        },
      }
    );
    var pi = ut
      ? {}.toString
      : function () {
          return "[object " + ht(this) + "]";
        };
    ut || ye(Object.prototype, "toString", pi, { unsafe: !0 });
    function di(n, e, t, r) {
      var o,
        i,
        a,
        s,
        c = fe(n),
        u = !f(function () {
          var e = {};
          return (
            (e[c] = function () {
              return 7;
            }),
            7 != ""[n](e)
          );
        }),
        l =
          u &&
          !f(function () {
            var e = !1,
              t = /a/;
            return (
              "split" === n &&
                (((t = {}).constructor = {}),
                (t.constructor[vi] = function () {
                  return t;
                }),
                (t.flags = ""),
                (t[c] = /./[c])),
              (t.exec = function () {
                return (e = !0), null;
              }),
              t[c](""),
              !e
            );
          });
      (u &&
        l &&
        ("replace" !== n || (yi && bi && !_i)) &&
        ("split" !== n || ki)) ||
        ((o = /./[c]),
        (a = (i = t(
          c,
          ""[n],
          function (e, t, n, r, i) {
            return t.exec === Sn
              ? u && !i
                ? { done: !0, value: o.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 };
          },
          {
            REPLACE_KEEPS_$0: bi,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: _i,
          }
        ))[0]),
        (s = i[1]),
        ye(String.prototype, n, a),
        ye(
          RegExp.prototype,
          c,
          2 == e
            ? function (e, t) {
                return s.call(e, this, t);
              }
            : function (e) {
                return s.call(e, this);
              }
        )),
        r && L(RegExp.prototype[c], "sham", !0);
    }
    function gi(e, t, n) {
      return t + (n ? Ei(e, t).length : 1);
    }
    function mi(e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var r = n.call(e, t);
        if ("object" != typeof r)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return r;
      }
      if ("RegExp" !== i(e))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Sn.call(e, t);
    }
    var vi = fe("species"),
      yi = !f(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      bi = "$0" === "a".replace(/./, "$0"),
      wi = fe("replace"),
      _i = !!/./[wi] && "" === /./[wi]("a", "$0"),
      ki = !f(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      }),
      Ei = Ln.charAt,
      Si = Math.max,
      Ti = Math.min,
      xi = Math.floor,
      Ai = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      Oi = /\$([$&'`]|\d\d?)/g;
    di("replace", 2, function (i, _, k, e) {
      var E = e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        S = e.REPLACE_KEEPS_$0,
        T = E ? "$" : "$0";
      return [
        function (e, t) {
          var n = h(this),
            r = null == e ? void 0 : e[i];
          return void 0 !== r ? r.call(e, n, t) : _.call(String(n), e, t);
        },
        function (e, t) {
          if ((!E && S) || ("string" == typeof t && -1 === t.indexOf(T))) {
            var n = k(_, e, this, t);
            if (n.done) return n.value;
          }
          var r = x(e),
            i = String(this),
            o = "function" == typeof t;
          o || (t = String(t));
          var a,
            s = r.global;
          s && ((a = r.unicode), (r.lastIndex = 0));
          for (var c = []; ; ) {
            var u = mi(r, i);
            if (null === u) break;
            if ((c.push(u), !s)) break;
            "" === String(u[0]) && (r.lastIndex = gi(i, te(r.lastIndex), a));
          }
          for (var l, f = "", h = 0, p = 0; p < c.length; p++) {
            u = c[p];
            for (
              var d = String(u[0]),
                g = Si(Ti(ee(u.index), i.length), 0),
                m = [],
                v = 1;
              v < u.length;
              v++
            )
              m.push(void 0 === (l = u[v]) ? l : String(l));
            var y,
              b = u.groups,
              w = o
                ? ((y = [d].concat(m, g, i)),
                  void 0 !== b && y.push(b),
                  String(t.apply(void 0, y)))
                : (function (o, a, s, c, u, e) {
                    var l = s + o.length,
                      f = c.length,
                      t = Oi;
                    return (
                      void 0 !== u && ((u = le(u)), (t = Ai)),
                      _.call(e, t, function (e, t) {
                        var n;
                        switch (t.charAt(0)) {
                          case "$":
                            return "$";
                          case "&":
                            return o;
                          case "`":
                            return a.slice(0, s);
                          case "'":
                            return a.slice(l);
                          case "<":
                            n = u[t.slice(1, -1)];
                            break;
                          default:
                            var r = +t;
                            if (0 == r) return e;
                            if (f < r) {
                              var i = xi(r / 10);
                              return 0 !== i && i <= f
                                ? void 0 === c[i - 1]
                                  ? t.charAt(1)
                                  : c[i - 1] + t.charAt(1)
                                : e;
                            }
                            n = c[r - 1];
                        }
                        return void 0 === n ? "" : n;
                      })
                    );
                  })(d, i, g, m, b, t);
            h <= g && ((f += i.slice(h, g) + w), (h = g + d.length));
          }
          return f + i.slice(h);
        },
      ];
    });
    var Pi =
      Object.is ||
      function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      };
    di("search", 1, function (r, a, s) {
      return [
        function (e) {
          var t = h(this),
            n = null == e ? void 0 : e[r];
          return void 0 !== n ? n.call(e, t) : new RegExp(e)[r](String(t));
        },
        function (e) {
          var t = s(a, e, this);
          if (t.done) return t.value;
          var n = x(e),
            r = String(this),
            i = n.lastIndex;
          Pi(i, 0) || (n.lastIndex = 0);
          var o = mi(n, r);
          return (
            Pi(n.lastIndex, i) || (n.lastIndex = i), null === o ? -1 : o.index
          );
        },
      ];
    });
    function Ii(e, t) {
      var n,
        r = x(e).constructor;
      return void 0 === r || null == (n = x(r)[ji]) ? t : ce(n);
    }
    var ji = fe("species"),
      Ci = [].push,
      Ri = Math.min,
      Li = !f(function () {
        return !RegExp(4294967295, "y");
      });
    di(
      "split",
      2,
      function (i, m, v) {
        var y =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          1 < ".".split(/()()/).length ||
          "".split(/.?/).length
            ? function (e, t) {
                var n = String(h(this)),
                  r = void 0 === t ? 4294967295 : t >>> 0;
                if (0 == r) return [];
                if (void 0 === e) return [n];
                if (!Gt(e)) return m.call(n, e, r);
                for (
                  var i,
                    o,
                    a,
                    s = [],
                    c =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    u = 0,
                    l = new RegExp(e.source, c + "g");
                  (i = Sn.call(l, n)) &&
                  !(
                    (o = l.lastIndex) > u &&
                    (s.push(n.slice(u, i.index)),
                    1 < i.length &&
                      i.index < n.length &&
                      Ci.apply(s, i.slice(1)),
                    (a = i[0].length),
                    (u = o),
                    s.length >= r)
                  );

                )
                  l.lastIndex === i.index && l.lastIndex++;
                return (
                  u === n.length
                    ? (!a && l.test("")) || s.push("")
                    : s.push(n.slice(u)),
                  s.length > r ? s.slice(0, r) : s
                );
              }
            : "0".split(void 0, 0).length
            ? function (e, t) {
                return void 0 === e && 0 === t ? [] : m.call(this, e, t);
              }
            : m;
        return [
          function (e, t) {
            var n = h(this),
              r = null == e ? void 0 : e[i];
            return void 0 !== r ? r.call(e, n, t) : y.call(String(n), e, t);
          },
          function (e, t) {
            var n = v(y, e, this, t, y !== m);
            if (n.done) return n.value;
            var r = x(e),
              i = String(this),
              o = Ii(r, RegExp),
              a = r.unicode,
              s =
                (r.ignoreCase ? "i" : "") +
                (r.multiline ? "m" : "") +
                (r.unicode ? "u" : "") +
                (Li ? "y" : "g"),
              c = new o(Li ? r : "^(?:" + r.source + ")", s),
              u = void 0 === t ? 4294967295 : t >>> 0;
            if (0 == u) return [];
            if (0 === i.length) return null === mi(c, i) ? [i] : [];
            for (var l = 0, f = 0, h = []; f < i.length; ) {
              c.lastIndex = Li ? f : 0;
              var p,
                d = mi(c, Li ? i : i.slice(f));
              if (
                null === d ||
                (p = Ri(te(c.lastIndex + (Li ? 0 : f)), i.length)) === l
              )
                f = gi(i, f, a);
              else {
                if ((h.push(i.slice(l, f)), h.length === u)) return h;
                for (var g = 1; g <= d.length - 1; g++)
                  if ((h.push(d[g]), h.length === u)) return h;
                f = l = p;
              }
            }
            return h.push(i.slice(l)), h;
          },
        ];
      },
      !Li
    );
    var Ni = fe("iterator"),
      Mi = fe("toStringTag"),
      Ui = ii.values;
    for (var Di in nr) {
      var Fi = I[Di],
        qi = Fi && Fi.prototype;
      if (qi) {
        if (qi[Ni] !== Ui)
          try {
            L(qi, Ni, Ui);
          } catch (e) {
            qi[Ni] = Ui;
          }
        if ((qi[Mi] || L(qi, Mi, Di), nr[Di]))
          for (var Bi in ii)
            if (qi[Bi] !== ii[Bi])
              try {
                L(qi, Bi, ii[Bi]);
              } catch (e) {
                qi[Bi] = ii[Bi];
              }
      }
    }
    function Hi(e, t, n) {
      if (!(e instanceof t))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    }
    function Vi(e) {
      return e + 22 + 75 * (e < 26);
    }
    function Wi(e) {
      var t,
        n = [],
        r = (e = (function (e) {
          for (var t = [], n = 0, r = e.length; n < r; ) {
            var i,
              o = e.charCodeAt(n++);
            55296 <= o && o <= 56319 && n < r
              ? 56320 == (64512 & (i = e.charCodeAt(n++)))
                ? t.push(((1023 & o) << 10) + (1023 & i) + 65536)
                : (t.push(o), n--)
              : t.push(o);
          }
          return t;
        })(e)).length,
        i = 128,
        o = 0,
        a = 72;
      for (l = 0; l < e.length; l++) (t = e[l]) < 128 && n.push(uo(t));
      var s = n.length,
        c = s;
      for (s && n.push("-"); c < r; ) {
        for (var u = 2147483647, l = 0; l < e.length; l++)
          (t = e[l]) >= i && t < u && (u = t);
        var f = c + 1;
        if (u - i > co((2147483647 - o) / f)) throw RangeError(so);
        for (o += (u - i) * f, i = u, l = 0; l < e.length; l++) {
          if ((t = e[l]) < i && 2147483647 < ++o) throw RangeError(so);
          if (t == i) {
            for (var h = o, p = 36; ; p += 36) {
              var d = p <= a ? 1 : a + 26 <= p ? 26 : p - a;
              if (h < d) break;
              var g = h - d,
                m = 36 - d;
              n.push(uo(Vi(d + (g % m)))), (h = co(g / m));
            }
            n.push(uo(Vi(h))),
              (a = (function (e, t, n) {
                var r = 0;
                for (
                  e = n ? co(e / 700) : e >> 1, e += co(e / t);
                  455 < e;
                  r += 36
                )
                  e = co(e / 35);
                return co(r + (36 * e) / (e + 38));
              })(o, f, c == s)),
              (o = 0),
              ++c;
          }
        }
        ++o, ++i;
      }
      return n.join("");
    }
    function zi(e, t, n) {
      for (var r in t) ye(e, r, t[r], n);
      return e;
    }
    function Yi(e) {
      var t = st(e);
      if ("function" != typeof t)
        throw TypeError(String(e) + " is not iterable");
      return x(t.call(e));
    }
    function $i(t) {
      try {
        return decodeURIComponent(t);
      } catch (e) {
        return t;
      }
    }
    function Gi(e) {
      var t = e.replace(vo, " "),
        n = 4;
      try {
        return decodeURIComponent(t);
      } catch (e) {
        for (; n; )
          t = t.replace(
            (function (e) {
              return (
                yo[e - 1] ||
                (yo[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
              );
            })(n--),
            $i
          );
        return t;
      }
    }
    function Ki(e) {
      return wo[e];
    }
    function Xi(e) {
      return encodeURIComponent(e).replace(bo, Ki);
    }
    function Ji(e, t) {
      if (t)
        for (var n, r, i = t.split("&"), o = 0; o < i.length; )
          (n = i[o++]).length &&
            ((r = n.split("=")),
            e.push({ key: Gi(r.shift()), value: Gi(r.join("=")) }));
    }
    function Qi(e) {
      (this.entries.length = 0), Ji(this.entries, e);
    }
    function Zi(e, t) {
      if (e < t) throw TypeError("Not enough arguments");
    }
    var eo = fe("iterator"),
      to = !f(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
          n = e.searchParams,
          r = "";
        return (
          (e.pathname = "c%20d"),
          n.forEach(function (e, t) {
            n.delete("b"), (r += t + e);
          }),
          !n.sort ||
            "http://a/c%20d?a=1&c=3" !== e.href ||
            "3" !== n.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !n[eo] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== r ||
            "x" !== new URL("http://x", void 0).host
        );
      }),
      no = Object.assign,
      ro = Object.defineProperty,
      io =
        !no ||
        f(function () {
          if (
            j &&
            1 !==
              no(
                { b: 1 },
                no(
                  ro({}, "a", {
                    enumerable: !0,
                    get: function () {
                      ro(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return 1;
          var e = {},
            t = {},
            n = Symbol();
          return (
            (e[n] = 7),
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != no({}, e)[n] ||
              "abcdefghijklmnopqrst" != Et(no({}, t)).join("")
          );
        })
          ? function (e, t) {
              for (
                var n = le(e), r = arguments.length, i = 1, o = Ie.f, a = d.f;
                i < r;

              )
                for (
                  var s,
                    c = w(arguments[i++]),
                    u = o ? Et(c).concat(o(c)) : Et(c),
                    l = u.length,
                    f = 0;
                  f < l;

                )
                  (s = u[f++]), (j && !a.call(c, s)) || (n[s] = c[s]);
              return n;
            }
          : no,
      oo = /[^\0-\u007E]/,
      ao = /[.\u3002\uFF0E\uFF61]/g,
      so = "Overflow: input needs wider integers to process",
      co = Math.floor,
      uo = String.fromCharCode,
      lo = Z("fetch"),
      fo = Z("Headers"),
      ho = fe("iterator"),
      po = ve.set,
      go = ve.getterFor("URLSearchParams"),
      mo = ve.getterFor("URLSearchParamsIterator"),
      vo = /\+/g,
      yo = Array(4),
      bo = /[!'()~]|%20/g,
      wo = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      _o = Vn(
        function (e, t) {
          po(this, {
            type: "URLSearchParamsIterator",
            iterator: Yi(go(e).entries),
            kind: t,
          });
        },
        "Iterator",
        function () {
          var e = mo(this),
            t = e.kind,
            n = e.iterator.next(),
            r = n.value;
          return (
            n.done ||
              (n.value =
                "keys" === t
                  ? r.key
                  : "values" === t
                  ? r.value
                  : [r.key, r.value]),
            n
          );
        }
      ),
      ko = function () {
        Hi(this, ko, "URLSearchParams");
        var e,
          t,
          n,
          r,
          i,
          o,
          a,
          s,
          c,
          u = 0 < arguments.length ? arguments[0] : void 0,
          l = [];
        if (
          (po(this, {
            type: "URLSearchParams",
            entries: l,
            updateURL: function () {},
            updateSearchParams: Qi,
          }),
          void 0 !== u)
        )
          if (O(u))
            if ("function" == typeof (e = st(u)))
              for (n = (t = e.call(u)).next; !(r = n.call(t)).done; ) {
                if (
                  (a = (o = (i = Yi(x(r.value))).next).call(i)).done ||
                  (s = o.call(i)).done ||
                  !o.call(i).done
                )
                  throw TypeError("Expected sequence with length 2");
                l.push({ key: a.value + "", value: s.value + "" });
              }
            else for (c in u) P(u, c) && l.push({ key: c, value: u[c] + "" });
          else
            Ji(
              l,
              "string" == typeof u
                ? "?" === u.charAt(0)
                  ? u.slice(1)
                  : u
                : u + ""
            );
      },
      Eo = ko.prototype;
    zi(
      Eo,
      {
        append: function (e, t) {
          Zi(arguments.length, 2);
          var n = go(this);
          n.entries.push({ key: e + "", value: t + "" }), n.updateURL();
        },
        delete: function (e) {
          Zi(arguments.length, 1);
          for (
            var t = go(this), n = t.entries, r = e + "", i = 0;
            i < n.length;

          )
            n[i].key === r ? n.splice(i, 1) : i++;
          t.updateURL();
        },
        get: function (e) {
          Zi(arguments.length, 1);
          for (var t = go(this).entries, n = e + "", r = 0; r < t.length; r++)
            if (t[r].key === n) return t[r].value;
          return null;
        },
        getAll: function (e) {
          Zi(arguments.length, 1);
          for (
            var t = go(this).entries, n = e + "", r = [], i = 0;
            i < t.length;
            i++
          )
            t[i].key === n && r.push(t[i].value);
          return r;
        },
        has: function (e) {
          Zi(arguments.length, 1);
          for (var t = go(this).entries, n = e + "", r = 0; r < t.length; )
            if (t[r++].key === n) return !0;
          return !1;
        },
        set: function (e, t) {
          Zi(arguments.length, 1);
          for (
            var n,
              r = go(this),
              i = r.entries,
              o = !1,
              a = e + "",
              s = t + "",
              c = 0;
            c < i.length;
            c++
          )
            (n = i[c]).key === a &&
              (o ? i.splice(c--, 1) : ((o = !0), (n.value = s)));
          o || i.push({ key: a, value: s }), r.updateURL();
        },
        sort: function () {
          for (
            var e,
              t,
              n = go(this),
              r = n.entries,
              i = r.slice(),
              o = (r.length = 0);
            o < i.length;
            o++
          ) {
            for (e = i[o], t = 0; t < o; t++)
              if (r[t].key > e.key) {
                r.splice(t, 0, e);
                break;
              }
            t === o && r.push(e);
          }
          n.updateURL();
        },
        forEach: function (e) {
          for (
            var t,
              n = go(this).entries,
              r = ue(e, 1 < arguments.length ? arguments[1] : void 0, 3),
              i = 0;
            i < n.length;

          )
            r((t = n[i++]).value, t.key, this);
        },
        keys: function () {
          return new _o(this, "keys");
        },
        values: function () {
          return new _o(this, "values");
        },
        entries: function () {
          return new _o(this, "entries");
        },
      },
      { enumerable: !0 }
    ),
      ye(Eo, ho, Eo.entries),
      ye(
        Eo,
        "toString",
        function () {
          for (var e, t = go(this).entries, n = [], r = 0; r < t.length; )
            (e = t[r++]), n.push(Xi(e.key) + "=" + Xi(e.value));
          return n.join("&");
        },
        { enumerable: !0 }
      ),
      Bn(ko, "URLSearchParams"),
      se({ global: !0, forced: !to }, { URLSearchParams: ko }),
      to ||
        "function" != typeof lo ||
        "function" != typeof fo ||
        se(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (e) {
              var t,
                n,
                r,
                i = [e];
              return (
                1 < arguments.length &&
                  (O((t = arguments[1])) &&
                    ((n = t.body),
                    "URLSearchParams" === ht(n) &&
                      ((r = t.headers ? new fo(t.headers) : new fo()).has(
                        "content-type"
                      ) ||
                        r.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ),
                      (t = Ot(t, {
                        body: s(0, String(n)),
                        headers: s(0, r),
                      })))),
                  i.push(t)),
                lo.apply(this, i)
              );
            },
          }
        );
    function So(e, i) {
      var t, n, r;
      if ("[" == i.charAt(0)) {
        if ("]" != i.charAt(i.length - 1)) return "Invalid host";
        if (!(t = ra(i.slice(1, -1)))) return "Invalid host";
        e.host = t;
      } else if (la(e)) {
        if (
          ((i = (function () {
            for (
              var e,
                t = [],
                n = i.toLowerCase().replace(ao, ".").split("."),
                r = 0;
              r < n.length;
              r++
            )
              (e = n[r]), t.push(oo.test(e) ? "xn--" + Wi(e) : e);
            return t.join(".");
          })()),
          Qo.test(i))
        )
          return "Invalid host";
        if (null === (t = na(i))) return "Invalid host";
        e.host = t;
      } else {
        if (Zo.test(i)) return "Invalid host";
        for (t = "", n = ct(i), r = 0; r < n.length; r++) t += ca(n[r], ia);
        e.host = t;
      }
    }
    function To(e) {
      var t, n, r, i;
      if ("number" == typeof e) {
        for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), (e = Vo(e / 256));
        return t.join(".");
      }
      if ("object" != typeof e) return e;
      for (
        t = "",
          r = (function (e) {
            for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
              0 !== e[o]
                ? (n < i && ((t = r), (n = i)), (r = null), (i = 0))
                : (null === r && (r = o), ++i);
            return n < i && ((t = r), (n = i)), t;
          })(e),
          n = 0;
        n < 8;
        n++
      )
        (i && 0 === e[n]) ||
          ((i = i && !1),
          r === n
            ? ((t += n ? ":" : "::"), (i = !0))
            : ((t += e[n].toString(16)), n < 7 && (t += ":")));
      return "[" + t + "]";
    }
    function xo(e) {
      return "" != e.username || "" != e.password;
    }
    function Ao(e) {
      return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
    }
    function Oo(e, t) {
      var n;
      return (
        2 == e.length &&
        zo.test(e.charAt(0)) &&
        (":" == (n = e.charAt(1)) || (!t && "|" == n))
      );
    }
    function Po(e) {
      var t;
      return (
        1 < e.length &&
        Oo(e.slice(0, 2)) &&
        (2 == e.length ||
          "/" === (t = e.charAt(2)) ||
          "\\" === t ||
          "?" === t ||
          "#" === t)
      );
    }
    function Io(e) {
      var t = e.path,
        n = t.length;
      !n || ("file" == e.scheme && 1 == n && Oo(t[0], !0)) || t.pop();
    }
    function jo(e, t, n, r) {
      var i,
        o,
        a,
        s,
        c,
        u,
        l = n || fa,
        f = 0,
        h = "",
        p = !1,
        d = !1,
        g = !1;
      for (
        n ||
          ((e.scheme = ""),
          (e.username = ""),
          (e.password = ""),
          (e.host = null),
          (e.port = null),
          (e.path = []),
          (e.query = null),
          (e.fragment = null),
          (e.cannotBeABaseURL = !1),
          (t = t.replace(ea, ""))),
          t = t.replace(ta, ""),
          i = ct(t);
        f <= i.length;

      ) {
        switch (((o = i[f]), l)) {
          case fa:
            if (!o || !zo.test(o)) {
              if (n) return "Invalid scheme";
              l = pa;
              continue;
            }
            (h += o.toLowerCase()), (l = ha);
            break;
          case ha:
            if (o && (Yo.test(o) || "+" == o || "-" == o || "." == o))
              h += o.toLowerCase();
            else {
              if (":" != o) {
                if (n) return "Invalid scheme";
                (h = ""), (l = pa), (f = 0);
                continue;
              }
              if (
                n &&
                (la(e) != P(ua, h) ||
                  ("file" == h && (xo(e) || null !== e.port)) ||
                  ("file" == e.scheme && !e.host))
              )
                return;
              if (((e.scheme = h), n))
                return void (
                  la(e) &&
                  ua[e.scheme] == e.port &&
                  (e.port = null)
                );
              (h = ""),
                "file" == e.scheme
                  ? (l = Sa)
                  : la(e) && r && r.scheme == e.scheme
                  ? (l = da)
                  : la(e)
                  ? (l = ya)
                  : "/" == i[f + 1]
                  ? ((l = ga), f++)
                  : ((e.cannotBeABaseURL = !0), e.path.push(""), (l = Pa));
            }
            break;
          case pa:
            if (!r || (r.cannotBeABaseURL && "#" != o)) return "Invalid scheme";
            if (r.cannotBeABaseURL && "#" == o) {
              (e.scheme = r.scheme),
                (e.path = r.path.slice()),
                (e.query = r.query),
                (e.fragment = ""),
                (e.cannotBeABaseURL = !0),
                (l = ja);
              break;
            }
            l = "file" == r.scheme ? Sa : ma;
            continue;
          case da:
            if ("/" != o || "/" != i[f + 1]) {
              l = ma;
              continue;
            }
            (l = ba), f++;
            break;
          case ga:
            if ("/" == o) {
              l = wa;
              break;
            }
            l = Oa;
            continue;
          case ma:
            if (((e.scheme = r.scheme), o == Ro))
              (e.username = r.username),
                (e.password = r.password),
                (e.host = r.host),
                (e.port = r.port),
                (e.path = r.path.slice()),
                (e.query = r.query);
            else if ("/" == o || ("\\" == o && la(e))) l = va;
            else if ("?" == o)
              (e.username = r.username),
                (e.password = r.password),
                (e.host = r.host),
                (e.port = r.port),
                (e.path = r.path.slice()),
                (e.query = ""),
                (l = Ia);
            else {
              if ("#" != o) {
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (e.path = r.path.slice()),
                  e.path.pop(),
                  (l = Oa);
                continue;
              }
              (e.username = r.username),
                (e.password = r.password),
                (e.host = r.host),
                (e.port = r.port),
                (e.path = r.path.slice()),
                (e.query = r.query),
                (e.fragment = ""),
                (l = ja);
            }
            break;
          case va:
            if (!la(e) || ("/" != o && "\\" != o)) {
              if ("/" != o) {
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (l = Oa);
                continue;
              }
              l = wa;
            } else l = ba;
            break;
          case ya:
            if (((l = ba), "/" != o || "/" != h.charAt(f + 1))) continue;
            f++;
            break;
          case ba:
            if ("/" == o || "\\" == o) break;
            l = wa;
            continue;
          case wa:
            if ("@" == o) {
              p && (h = "%40" + h), (p = !0), (a = ct(h));
              for (var m = 0; m < a.length; m++) {
                var v,
                  y = a[m];
                ":" != y || g
                  ? ((v = ca(y, sa)), g ? (e.password += v) : (e.username += v))
                  : (g = !0);
              }
              h = "";
            } else if (
              o == Ro ||
              "/" == o ||
              "?" == o ||
              "#" == o ||
              ("\\" == o && la(e))
            ) {
              if (p && "" == h) return "Invalid authority";
              (f -= ct(h).length + 1), (h = ""), (l = _a);
            } else h += o;
            break;
          case _a:
          case ka:
            if (n && "file" == e.scheme) {
              l = xa;
              continue;
            }
            if (":" != o || d) {
              if (
                o == Ro ||
                "/" == o ||
                "?" == o ||
                "#" == o ||
                ("\\" == o && la(e))
              ) {
                if (la(e) && "" == h) return "Invalid host";
                if (n && "" == h && (xo(e) || null !== e.port)) return;
                if ((s = So(e, h))) return s;
                if (((h = ""), (l = Aa), n)) return;
                continue;
              }
              "[" == o ? (d = !0) : "]" == o && (d = !1), (h += o);
            } else {
              if ("" == h) return "Invalid host";
              if ((s = So(e, h))) return s;
              if (((h = ""), (l = Ea), n == ka)) return;
            }
            break;
          case Ea:
            if (!$o.test(o)) {
              if (
                o == Ro ||
                "/" == o ||
                "?" == o ||
                "#" == o ||
                ("\\" == o && la(e)) ||
                n
              ) {
                if ("" != h) {
                  var b = parseInt(h, 10);
                  if (65535 < b) return "Invalid port";
                  (e.port = la(e) && b === ua[e.scheme] ? null : b), (h = "");
                }
                if (n) return;
                l = Aa;
                continue;
              }
              return "Invalid port";
            }
            h += o;
            break;
          case Sa:
            if (((e.scheme = "file"), "/" == o || "\\" == o)) l = Ta;
            else {
              if (!r || "file" != r.scheme) {
                l = Oa;
                continue;
              }
              if (o == Ro)
                (e.host = r.host),
                  (e.path = r.path.slice()),
                  (e.query = r.query);
              else if ("?" == o)
                (e.host = r.host),
                  (e.path = r.path.slice()),
                  (e.query = ""),
                  (l = Ia);
              else {
                if ("#" != o) {
                  Po(i.slice(f).join("")) ||
                    ((e.host = r.host), (e.path = r.path.slice()), Io(e)),
                    (l = Oa);
                  continue;
                }
                (e.host = r.host),
                  (e.path = r.path.slice()),
                  (e.query = r.query),
                  (e.fragment = ""),
                  (l = ja);
              }
            }
            break;
          case Ta:
            if ("/" == o || "\\" == o) {
              l = xa;
              break;
            }
            r &&
              "file" == r.scheme &&
              !Po(i.slice(f).join("")) &&
              (Oo(r.path[0], !0) ? e.path.push(r.path[0]) : (e.host = r.host)),
              (l = Oa);
            continue;
          case xa:
            if (o == Ro || "/" == o || "\\" == o || "?" == o || "#" == o) {
              if (!n && Oo(h)) l = Oa;
              else if ("" == h) {
                if (((e.host = ""), n)) return;
                l = Aa;
              } else {
                if ((s = So(e, h))) return s;
                if (("localhost" == e.host && (e.host = ""), n)) return;
                (h = ""), (l = Aa);
              }
              continue;
            }
            h += o;
            break;
          case Aa:
            if (la(e)) {
              if (((l = Oa), "/" != o && "\\" != o)) continue;
            } else if (n || "?" != o)
              if (n || "#" != o) {
                if (o != Ro && ((l = Oa), "/" != o)) continue;
              } else (e.fragment = ""), (l = ja);
            else (e.query = ""), (l = Ia);
            break;
          case Oa:
            if (
              o == Ro ||
              "/" == o ||
              ("\\" == o && la(e)) ||
              (!n && ("?" == o || "#" == o))
            ) {
              if (
                (".." === (c = (c = h).toLowerCase()) ||
                "%2e." === c ||
                ".%2e" === c ||
                "%2e%2e" === c
                  ? (Io(e), "/" == o || ("\\" == o && la(e)) || e.path.push(""))
                  : "." === (u = h) || "%2e" === u.toLowerCase()
                  ? "/" == o || ("\\" == o && la(e)) || e.path.push("")
                  : ("file" == e.scheme &&
                      !e.path.length &&
                      Oo(h) &&
                      (e.host && (e.host = ""), (h = h.charAt(0) + ":")),
                    e.path.push(h)),
                (h = ""),
                "file" == e.scheme && (o == Ro || "?" == o || "#" == o))
              )
                for (; 1 < e.path.length && "" === e.path[0]; ) e.path.shift();
              "?" == o
                ? ((e.query = ""), (l = Ia))
                : "#" == o && ((e.fragment = ""), (l = ja));
            } else h += ca(o, aa);
            break;
          case Pa:
            "?" == o
              ? ((e.query = ""), (l = Ia))
              : "#" == o
              ? ((e.fragment = ""), (l = ja))
              : o != Ro && (e.path[0] += ca(o, ia));
            break;
          case Ia:
            n || "#" != o
              ? o != Ro &&
                ("'" == o && la(e)
                  ? (e.query += "%27")
                  : (e.query += "#" == o ? "%23" : ca(o, ia)))
              : ((e.fragment = ""), (l = ja));
            break;
          case ja:
            o != Ro && (e.fragment += ca(o, oa));
        }
        f++;
      }
    }
    function Co(e, t) {
      return { get: e, set: t, configurable: !0, enumerable: !0 };
    }
    var Ro,
      Lo,
      No,
      Mo = { URLSearchParams: ko, getState: go },
      Uo = Ln.codeAt,
      Do = I.URL,
      Fo = Mo.URLSearchParams,
      qo = Mo.getState,
      Bo = ve.set,
      Ho = ve.getterFor("URL"),
      Vo = Math.floor,
      Wo = Math.pow,
      zo = /[A-Za-z]/,
      Yo = /[\d+-.A-Za-z]/,
      $o = /\d/,
      Go = /^(0x|0X)/,
      Ko = /^[0-7]+$/,
      Xo = /^\d+$/,
      Jo = /^[\dA-Fa-f]+$/,
      Qo = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      Zo = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      ea = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      ta = /[\u0009\u000A\u000D]/g,
      na = function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          c = e.split(".");
        if ((c.length && "" == c[c.length - 1] && c.pop(), 4 < (t = c.length)))
          return e;
        for (n = [], r = 0; r < t; r++) {
          if ("" == (i = c[r])) return e;
          if (
            ((o = 10),
            1 < i.length &&
              "0" == i.charAt(0) &&
              ((o = Go.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
            "" === i)
          )
            a = 0;
          else {
            if (!(10 == o ? Xo : 8 == o ? Ko : Jo).test(i)) return e;
            a = parseInt(i, o);
          }
          n.push(a);
        }
        for (r = 0; r < t; r++)
          if (((a = n[r]), r == t - 1)) {
            if (a >= Wo(256, 5 - t)) return null;
          } else if (255 < a) return null;
        for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * Wo(256, 3 - r);
        return s;
      },
      ra = function (e) {
        function t() {
          return e.charAt(h);
        }
        var n,
          r,
          i,
          o,
          a,
          s,
          c,
          u = [0, 0, 0, 0, 0, 0, 0, 0],
          l = 0,
          f = null,
          h = 0;
        if (":" == t()) {
          if (":" != e.charAt(1)) return;
          (h += 2), (f = ++l);
        }
        for (; t(); ) {
          if (8 == l) return;
          if (":" != t()) {
            for (n = r = 0; r < 4 && Jo.test(t()); )
              (n = 16 * n + parseInt(t(), 16)), h++, r++;
            if ("." == t()) {
              if (0 == r) return;
              if (((h -= r), 6 < l)) return;
              for (i = 0; t(); ) {
                if (((o = null), 0 < i)) {
                  if (!("." == t() && i < 4)) return;
                  h++;
                }
                if (!$o.test(t())) return;
                for (; $o.test(t()); ) {
                  if (((a = parseInt(t(), 10)), null === o)) o = a;
                  else {
                    if (0 == o) return;
                    o = 10 * o + a;
                  }
                  if (255 < o) return;
                  h++;
                }
                (u[l] = 256 * u[l] + o), (2 != ++i && 4 != i) || l++;
              }
              if (4 != i) return;
              break;
            }
            if (":" == t()) {
              if ((h++, !t())) return;
            } else if (t()) return;
            u[l++] = n;
          } else {
            if (null !== f) return;
            h++, (f = ++l);
          }
        }
        if (null !== f)
          for (s = l - f, l = 7; 0 != l && 0 < s; )
            (c = u[l]), (u[l--] = u[f + s - 1]), (u[f + --s] = c);
        else if (8 != l) return;
        return u;
      },
      ia = {},
      oa = io({}, ia, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
      aa = io({}, oa, { "#": 1, "?": 1, "{": 1, "}": 1 }),
      sa = io({}, aa, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      ca = function (e, t) {
        var n = Uo(e, 0);
        return 32 < n && n < 127 && !P(t, e) ? e : encodeURIComponent(e);
      },
      ua = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      la = function (e) {
        return P(ua, e.scheme);
      },
      fa = {},
      ha = {},
      pa = {},
      da = {},
      ga = {},
      ma = {},
      va = {},
      ya = {},
      ba = {},
      wa = {},
      _a = {},
      ka = {},
      Ea = {},
      Sa = {},
      Ta = {},
      xa = {},
      Aa = {},
      Oa = {},
      Pa = {},
      Ia = {},
      ja = {},
      Ca = function (e) {
        var t,
          n,
          r = Hi(this, Ca, "URL"),
          i = 1 < arguments.length ? arguments[1] : void 0,
          o = String(e),
          a = Bo(r, { type: "URL" });
        if (void 0 !== i)
          if (i instanceof Ca) t = Ho(i);
          else if ((n = jo((t = {}), String(i)))) throw TypeError(n);
        if ((n = jo(a, o, null, t))) throw TypeError(n);
        var s = (a.searchParams = new Fo()),
          c = qo(s);
        c.updateSearchParams(a.query),
          (c.updateURL = function () {
            a.query = String(s) || null;
          }),
          j ||
            ((r.href = La.call(r)),
            (r.origin = Na.call(r)),
            (r.protocol = Ma.call(r)),
            (r.username = Ua.call(r)),
            (r.password = Da.call(r)),
            (r.host = Fa.call(r)),
            (r.hostname = qa.call(r)),
            (r.port = Ba.call(r)),
            (r.pathname = Ha.call(r)),
            (r.search = Va.call(r)),
            (r.searchParams = Wa.call(r)),
            (r.hash = za.call(r)));
      },
      Ra = Ca.prototype,
      La = function () {
        var e = Ho(this),
          t = e.scheme,
          n = e.username,
          r = e.password,
          i = e.host,
          o = e.port,
          a = e.path,
          s = e.query,
          c = e.fragment,
          u = t + ":";
        return (
          null !== i
            ? ((u += "//"),
              xo(e) && (u += n + (r ? ":" + r : "") + "@"),
              (u += To(i)),
              null !== o && (u += ":" + o))
            : "file" == t && (u += "//"),
          (u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : ""),
          null !== s && (u += "?" + s),
          null !== c && (u += "#" + c),
          u
        );
      },
      Na = function () {
        var e = Ho(this),
          t = e.scheme,
          n = e.port;
        if ("blob" == t)
          try {
            return new URL(t.path[0]).origin;
          } catch (e) {
            return "null";
          }
        return "file" != t && la(e)
          ? t + "://" + To(e.host) + (null !== n ? ":" + n : "")
          : "null";
      },
      Ma = function () {
        return Ho(this).scheme + ":";
      },
      Ua = function () {
        return Ho(this).username;
      },
      Da = function () {
        return Ho(this).password;
      },
      Fa = function () {
        var e = Ho(this),
          t = e.host,
          n = e.port;
        return null === t ? "" : null === n ? To(t) : To(t) + ":" + n;
      },
      qa = function () {
        var e = Ho(this).host;
        return null === e ? "" : To(e);
      },
      Ba = function () {
        var e = Ho(this).port;
        return null === e ? "" : String(e);
      },
      Ha = function () {
        var e = Ho(this),
          t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
      },
      Va = function () {
        var e = Ho(this).query;
        return e ? "?" + e : "";
      },
      Wa = function () {
        return Ho(this).searchParams;
      },
      za = function () {
        var e = Ho(this).fragment;
        return e ? "#" + e : "";
      };
    function Ya(e) {
      return (Ya =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function $a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ga(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ka(e, t, n) {
      return t && Ga(e.prototype, t), n && Ga(e, n), e;
    }
    function Xa(e, t, n) {
      return (
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
    function Ja(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function Qa(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ja(Object(n), !0).forEach(function (e) {
              Xa(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ja(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Za(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          }
        })(e, t) ||
        ts(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function es(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return ns(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        ts(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function ts(e, t) {
      if (e) {
        if ("string" == typeof e) return ns(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? ns(e, t)
            : void 0
        );
      }
    }
    function ns(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    j &&
      St(Ra, {
        href: Co(La, function (e) {
          var t = Ho(this),
            n = String(e),
            r = jo(t, n);
          if (r) throw TypeError(r);
          qo(t.searchParams).updateSearchParams(t.query);
        }),
        origin: Co(Na),
        protocol: Co(Ma, function (e) {
          var t = Ho(this);
          jo(t, String(e) + ":", fa);
        }),
        username: Co(Ua, function (e) {
          var t = Ho(this),
            n = ct(String(e));
          if (!Ao(t)) {
            t.username = "";
            for (var r = 0; r < n.length; r++) t.username += ca(n[r], sa);
          }
        }),
        password: Co(Da, function (e) {
          var t = Ho(this),
            n = ct(String(e));
          if (!Ao(t)) {
            t.password = "";
            for (var r = 0; r < n.length; r++) t.password += ca(n[r], sa);
          }
        }),
        host: Co(Fa, function (e) {
          var t = Ho(this);
          t.cannotBeABaseURL || jo(t, String(e), _a);
        }),
        hostname: Co(qa, function (e) {
          var t = Ho(this);
          t.cannotBeABaseURL || jo(t, String(e), ka);
        }),
        port: Co(Ba, function (e) {
          var t = Ho(this);
          Ao(t) || ("" == (e = String(e)) ? (t.port = null) : jo(t, e, Ea));
        }),
        pathname: Co(Ha, function (e) {
          var t = Ho(this);
          t.cannotBeABaseURL || ((t.path = []), jo(t, e + "", Aa));
        }),
        search: Co(Va, function (e) {
          var t = Ho(this);
          "" == (e = String(e))
            ? (t.query = null)
            : ("?" == e.charAt(0) && (e = e.slice(1)),
              (t.query = ""),
              jo(t, e, Ia)),
            qo(t.searchParams).updateSearchParams(t.query);
        }),
        searchParams: Co(Wa),
        hash: Co(za, function (e) {
          var t = Ho(this);
          "" != (e = String(e))
            ? ("#" == e.charAt(0) && (e = e.slice(1)),
              (t.fragment = ""),
              jo(t, e, ja))
            : (t.fragment = null);
        }),
      }),
      ye(
        Ra,
        "toJSON",
        function () {
          return La.call(this);
        },
        { enumerable: !0 }
      ),
      ye(
        Ra,
        "toString",
        function () {
          return La.call(this);
        },
        { enumerable: !0 }
      ),
      Do &&
        ((Lo = Do.createObjectURL),
        (No = Do.revokeObjectURL),
        Lo &&
          ye(Ca, "createObjectURL", function (e) {
            return Lo.apply(Do, arguments);
          }),
        No &&
          ye(Ca, "revokeObjectURL", function (e) {
            return No.apply(Do, arguments);
          })),
      Bn(Ca, "URL"),
      se({ global: !0, forced: !to, sham: !j }, { URL: Ca }),
      (function (t) {
        function e(t) {
          var e = {
            next: function () {
              var e = t.shift();
              return { done: void 0 === e, value: e };
            },
          };
          return (
            i &&
              (e[Symbol.iterator] = function () {
                return e;
              }),
            e
          );
        }
        function r(e) {
          return encodeURIComponent(e).replace(/%20/g, "+");
        }
        function o(e) {
          return decodeURIComponent(String(e).replace(/\+/g, " "));
        }
        var n,
          i = (function () {
            try {
              return !!Symbol.iterator;
            } catch (e) {
              return !1;
            }
          })();
        function a(e) {
          Object.defineProperty(this, "_entries", { writable: !0, value: {} });
          var t = Ya(e);
          if ("undefined" !== t)
            if ("string" === t) "" !== e && this._fromString(e);
            else if (e instanceof a) {
              var n = this;
              e.forEach(function (e, t) {
                n.append(t, e);
              });
            } else {
              if (null === e || "object" !== t)
                throw new TypeError(
                  "Unsupported input's type for URLSearchParams"
                );
              if ("[object Array]" === Object.prototype.toString.call(e))
                for (var r = 0; r < e.length; r++) {
                  var i = e[r];
                  if (
                    "[object Array]" !== Object.prototype.toString.call(i) &&
                    2 === i.length
                  )
                    throw new TypeError(
                      "Expected [string, any] as entry at index " +
                        r +
                        " of URLSearchParams's input"
                    );
                  this.append(i[0], i[1]);
                }
              else for (var o in e) e.hasOwnProperty(o) && this.append(o, e[o]);
            }
        }
        !(function () {
          try {
            var e = t.URLSearchParams;
            return (
              "a=1" === new e("?a=1").toString() &&
              "function" == typeof e.prototype.set
            );
          } catch (e) {
            return;
          }
        })() &&
          (((n = a.prototype).append = function (e, t) {
            e in this._entries
              ? this._entries[e].push(String(t))
              : (this._entries[e] = [String(t)]);
          }),
          (n.delete = function (e) {
            delete this._entries[e];
          }),
          (n.get = function (e) {
            return e in this._entries ? this._entries[e][0] : null;
          }),
          (n.getAll = function (e) {
            return e in this._entries ? this._entries[e].slice(0) : [];
          }),
          (n.has = function (e) {
            return e in this._entries;
          }),
          (n.set = function (e, t) {
            this._entries[e] = [String(t)];
          }),
          (n.forEach = function (e, t) {
            var n;
            for (var r in this._entries)
              if (this._entries.hasOwnProperty(r)) {
                n = this._entries[r];
                for (var i = 0; i < n.length; i++) e.call(t, n[i], r, this);
              }
          }),
          (n.keys = function () {
            var n = [];
            return (
              this.forEach(function (e, t) {
                n.push(t);
              }),
              e(n)
            );
          }),
          (n.values = function () {
            var t = [];
            return (
              this.forEach(function (e) {
                t.push(e);
              }),
              e(t)
            );
          }),
          (n.entries = function () {
            var n = [];
            return (
              this.forEach(function (e, t) {
                n.push([t, e]);
              }),
              e(n)
            );
          }),
          i && (n[Symbol.iterator] = n.entries),
          (n.toString = function () {
            var n = [];
            return (
              this.forEach(function (e, t) {
                n.push(r(t) + "=" + r(e));
              }),
              n.join("&")
            );
          }),
          (t.URLSearchParams = a));
        var s = t.URLSearchParams.prototype;
        "function" != typeof s.sort &&
          (s.sort = function () {
            var n = this,
              r = [];
            this.forEach(function (e, t) {
              r.push([t, e]), n._entries || n.delete(t);
            }),
              r.sort(function (e, t) {
                return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
              }),
              n._entries && (n._entries = {});
            for (var e = 0; e < r.length; e++) this.append(r[e][0], r[e][1]);
          }),
          "function" != typeof s._fromString &&
            Object.defineProperty(s, "_fromString", {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: function (e) {
                if (this._entries) this._entries = {};
                else {
                  var n = [];
                  this.forEach(function (e, t) {
                    n.push(t);
                  });
                  for (var t = 0; t < n.length; t++) this.delete(n[t]);
                }
                for (
                  var r, i = (e = e.replace(/^\?/, "")).split("&"), t = 0;
                  t < i.length;
                  t++
                )
                  (r = i[t].split("=")),
                    this.append(o(r[0]), 1 < r.length ? o(r[1]) : "");
              },
            });
      })(e),
      (function (l) {
        if (
          ((function () {
            try {
              var e = new l.URL("b", "http://a");
              return (
                (e.pathname = "c d"),
                "http://a/c%20d" === e.href && e.searchParams
              );
            } catch (e) {
              return;
            }
          })() ||
            ((n = l.URL),
            (r = e.prototype),
            ["hash", "host", "hostname", "port", "protocol"].forEach(function (
              e
            ) {
              var t;
              (t = e),
                Object.defineProperty(r, t, {
                  get: function () {
                    return this._anchorElement[t];
                  },
                  set: function (e) {
                    this._anchorElement[t] = e;
                  },
                  enumerable: !0,
                });
            }),
            Object.defineProperty(r, "search", {
              get: function () {
                return this._anchorElement.search;
              },
              set: function (e) {
                (this._anchorElement.search = e), this._updateSearchParams();
              },
              enumerable: !0,
            }),
            Object.defineProperties(r, {
              toString: {
                get: function () {
                  var e = this;
                  return function () {
                    return e.href;
                  };
                },
              },
              href: {
                get: function () {
                  return this._anchorElement.href.replace(/\?$/, "");
                },
                set: function (e) {
                  (this._anchorElement.href = e), this._updateSearchParams();
                },
                enumerable: !0,
              },
              pathname: {
                get: function () {
                  return this._anchorElement.pathname.replace(/(^\/?)/, "/");
                },
                set: function (e) {
                  this._anchorElement.pathname = e;
                },
                enumerable: !0,
              },
              origin: {
                get: function () {
                  var e = { "http:": 80, "https:": 443, "ftp:": 21 }[
                      this._anchorElement.protocol
                    ],
                    t =
                      this._anchorElement.port != e &&
                      "" !== this._anchorElement.port;
                  return (
                    this._anchorElement.protocol +
                    "//" +
                    this._anchorElement.hostname +
                    (t ? ":" + this._anchorElement.port : "")
                  );
                },
                enumerable: !0,
              },
              password: {
                get: function () {
                  return "";
                },
                set: function (e) {},
                enumerable: !0,
              },
              username: {
                get: function () {
                  return "";
                },
                set: function (e) {},
                enumerable: !0,
              },
            }),
            (e.createObjectURL = function (e) {
              return n.createObjectURL.apply(n, arguments);
            }),
            (e.revokeObjectURL = function (e) {
              return n.revokeObjectURL.apply(n, arguments);
            }),
            (l.URL = e)),
          void 0 !== l.location && !("origin" in l.location))
        ) {
          var t = function () {
            return (
              l.location.protocol +
              "//" +
              l.location.hostname +
              (l.location.port ? ":" + l.location.port : "")
            );
          };
          try {
            Object.defineProperty(l.location, "origin", {
              get: t,
              enumerable: !0,
            });
          } catch (e) {
            setInterval(function () {
              l.location.origin = t();
            }, 100);
          }
        }
        function e(e, t) {
          "string" != typeof e && (e = String(e));
          var n,
            r = document;
          if (t && (void 0 === l.location || t !== l.location.href)) {
            ((n = (r = document.implementation.createHTMLDocument(
              ""
            )).createElement("base")).href = t),
              r.head.appendChild(n);
            try {
              if (0 !== n.href.indexOf(t)) throw new Error(n.href);
            } catch (e) {
              throw new Error("URL unable to set base " + t + " due to " + e);
            }
          }
          var i = r.createElement("a");
          if (
            ((i.href = e),
            n && (r.body.appendChild(i), i.href),
            ":" === i.protocol || !/:/.test(i.href))
          )
            throw new TypeError("Invalid URL");
          Object.defineProperty(this, "_anchorElement", { value: i });
          var o = new l.URLSearchParams(this.search),
            a = !0,
            s = !0,
            c = this;
          ["append", "delete", "set"].forEach(function (e) {
            var t = o[e];
            o[e] = function () {
              t.apply(o, arguments),
                a && ((s = !1), (c.search = o.toString()), (s = !0));
            };
          }),
            Object.defineProperty(this, "searchParams", {
              value: o,
              enumerable: !0,
            });
          var u = void 0;
          Object.defineProperty(this, "_updateSearchParams", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function () {
              this.search !== u &&
                ((u = this.search),
                s &&
                  ((a = !1),
                  this.searchParams._fromString(this.search),
                  (a = !0)));
            },
          });
        }
        var n, r;
      })(e),
      sr("asyncIterator");
    var rs = fe("isConcatSpreadable"),
      is =
        51 <= Bt ||
        !f(function () {
          var e = [];
          return (e[rs] = !1), e.concat()[0] !== e;
        }),
      os = qt("concat");
    se(
      { target: "Array", proto: !0, forced: !is || !os },
      {
        concat: function (e) {
          for (
            var t,
              n,
              r,
              i = le(this),
              o = he(i, 0),
              a = 0,
              s = -1,
              c = arguments.length;
            s < c;
            s++
          )
            if (
              (function (e) {
                if (!O(e)) return !1;
                var t = e[rs];
                return void 0 !== t ? !!t : Fe(e);
              })((r = -1 === s ? i : arguments[s]))
            ) {
              if (9007199254740991 < a + (n = te(r.length)))
                throw TypeError("Maximum allowed index exceeded");
              for (t = 0; t < n; t++, a++) t in r && nt(o, a, r[t]);
            } else {
              if (9007199254740991 <= a)
                throw TypeError("Maximum allowed index exceeded");
              nt(o, a++, r);
            }
          return (o.length = a), o;
        },
      }
    ),
      se(
        { target: "Object", stat: !0, forced: Object.assign !== io },
        { assign: io }
      );
    var as = C.f,
      ss = f(function () {
        as(1);
      });
    se(
      { target: "Object", stat: !0, forced: !j || ss, sham: !j },
      {
        getOwnPropertyDescriptor: function (e, t) {
          return as(u(e), t);
        },
      }
    );
    function cs(e) {
      var t;
      Ts.hasOwnProperty(e) && ((t = Ts[e]), delete Ts[e], t());
    }
    function us(e) {
      return function () {
        cs(e);
      };
    }
    function ls(e) {
      cs(e.data);
    }
    function fs(e) {
      I.postMessage(e + "", ys.protocol + "//" + ys.host);
    }
    var hs,
      ps,
      ds,
      gs = I.Promise,
      ms = t(function (e) {
        function p(e, t) {
          (this.stopped = e), (this.result = t);
        }
        (e.exports = function (e, t, n, r, i) {
          var o,
            a,
            s,
            c,
            u,
            l,
            f,
            h = ue(t, n, r ? 2 : 1);
          if (i) o = e;
          else {
            if ("function" != typeof (a = st(e)))
              throw TypeError("Target is not iterable");
            if (tt(a)) {
              for (s = 0, c = te(e.length); s < c; s++)
                if (
                  (u = r ? h(x((f = e[s]))[0], f[1]) : h(e[s])) &&
                  u instanceof p
                )
                  return u;
              return new p(!1);
            }
            o = a.call(e);
          }
          for (l = o.next; !(f = l.call(o)).done; )
            if (
              "object" == typeof (u = et(o, h, f.value, r)) &&
              u &&
              u instanceof p
            )
              return u;
          return new p(!1);
        }).stop = function (e) {
          return new p(!0, e);
        };
      }),
      vs = /(iphone|ipod|ipad).*applewebkit/i.test(Mt),
      ys = I.location,
      bs = I.setImmediate,
      ws = I.clearImmediate,
      _s = I.process,
      ks = I.MessageChannel,
      Es = I.Dispatch,
      Ss = 0,
      Ts = {};
    (bs && ws) ||
      ((bs = function (e) {
        for (var t = [], n = 1; n < arguments.length; ) t.push(arguments[n++]);
        return (
          (Ts[++Ss] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t);
          }),
          hs(Ss),
          Ss
        );
      }),
      (ws = function (e) {
        delete Ts[e];
      }),
      "process" == i(_s)
        ? (hs = function (e) {
            _s.nextTick(us(e));
          })
        : Es && Es.now
        ? (hs = function (e) {
            Es.now(us(e));
          })
        : ks && !vs
        ? ((ds = (ps = new ks()).port2),
          (ps.port1.onmessage = ls),
          (hs = ue(ds.postMessage, ds, 1)))
        : !I.addEventListener ||
          "function" != typeof postMessage ||
          I.importScripts ||
          f(fs) ||
          "file:" === ys.protocol
        ? (hs =
            "onreadystatechange" in r("script")
              ? function (e) {
                  Tt.appendChild(r("script")).onreadystatechange = function () {
                    Tt.removeChild(this), cs(e);
                  };
                }
              : function (e) {
                  setTimeout(us(e), 0);
                })
        : ((hs = fs), I.addEventListener("message", ls, !1)));
    var xs,
      As,
      Os,
      Ps,
      Is,
      js,
      Cs,
      Rs,
      Ls = { set: bs, clear: ws },
      Ns = C.f,
      Ms = Ls.set,
      Us = I.MutationObserver || I.WebKitMutationObserver,
      Ds = I.process,
      Fs = I.Promise,
      qs = "process" == i(Ds),
      Bs = Ns(I, "queueMicrotask"),
      Hs = Bs && Bs.value;
    Hs ||
      ((xs = function () {
        var e, t;
        for (qs && (e = Ds.domain) && e.exit(); As; ) {
          (t = As.fn), (As = As.next);
          try {
            t();
          } catch (e) {
            throw (As ? Ps() : (Os = void 0), e);
          }
        }
        (Os = void 0), e && e.enter();
      }),
      (Ps = qs
        ? function () {
            Ds.nextTick(xs);
          }
        : Us && !vs
        ? ((Is = !0),
          (js = document.createTextNode("")),
          new Us(xs).observe(js, { characterData: !0 }),
          function () {
            js.data = Is = !Is;
          })
        : Fs && Fs.resolve
        ? ((Cs = Fs.resolve(void 0)),
          (Rs = Cs.then),
          function () {
            Rs.call(Cs, xs);
          })
        : function () {
            Ms.call(I, xs);
          }));
    function Vs(e) {
      var n, r;
      (this.promise = new e(function (e, t) {
        if (void 0 !== n || void 0 !== r)
          throw TypeError("Bad Promise constructor");
        (n = e), (r = t);
      })),
        (this.resolve = ce(n)),
        (this.reject = ce(r));
    }
    function Ws(e, t) {
      if ((x(e), O(t) && t.constructor === e)) return t;
      var n = nc.f(e);
      return (0, n.resolve)(t), n.promise;
    }
    function zs(e) {
      try {
        return { error: !1, value: e() };
      } catch (e) {
        return { error: !0, value: e };
      }
    }
    function Ys(e) {
      var t;
      return !(!O(e) || "function" != typeof (t = e.then)) && t;
    }
    function $s(f, h, p) {
      var d;
      h.notified ||
        ((h.notified = !0),
        (d = h.reactions),
        tc(function () {
          for (var e = h.value, t = 1 == h.state, n = 0; d.length > n; ) {
            var r,
              i,
              o,
              a = d[n++],
              s = t ? a.ok : a.fail,
              c = a.resolve,
              u = a.reject,
              l = a.domain;
            try {
              s
                ? (t || (2 === h.rejection && kc(f, h), (h.rejection = 1)),
                  !0 === s
                    ? (r = e)
                    : (l && l.enter(), (r = s(e)), l && (l.exit(), (o = !0))),
                  r === a.promise
                    ? u(lc("Promise-chain cycle"))
                    : (i = Ys(r))
                    ? i.call(r, c, u)
                    : c(r))
                : u(e);
            } catch (e) {
              l && !o && l.exit(), u(e);
            }
          }
          (h.reactions = []), (h.notified = !1), p && !h.rejection && wc(f, h);
        }));
    }
    function Gs(e, t, n) {
      var r, i;
      vc
        ? (((r = fc.createEvent("Event")).promise = t),
          (r.reason = n),
          r.initEvent(e, !1, !0),
          I.dispatchEvent(r))
        : (r = { promise: t, reason: n }),
        (i = I["on" + e])
          ? i(r)
          : "unhandledrejection" === e &&
            (function (e, t) {
              var n = I.console;
              n &&
                n.error &&
                (1 === arguments.length ? n.error(e) : n.error(e, t));
            })("Unhandled promise rejection", n);
    }
    function Ks(t, n, r, i) {
      return function (e) {
        t(n, r, e, i);
      };
    }
    function Xs(e, t, n, r) {
      t.done ||
        ((t.done = !0),
        r && (t = r),
        (t.value = n),
        (t.state = 2),
        $s(e, t, !0));
    }
    var Js,
      Qs,
      Zs,
      ec,
      tc =
        Hs ||
        function (e) {
          var t = { fn: e, next: void 0 };
          Os && (Os.next = t), As || ((As = t), Ps()), (Os = t);
        },
      nc = {
        f: function (e) {
          return new Vs(e);
        },
      },
      rc = Ls.set,
      ic = fe("species"),
      oc = "Promise",
      ac = ve.get,
      sc = ve.set,
      cc = ve.getterFor(oc),
      uc = gs,
      lc = I.TypeError,
      fc = I.document,
      hc = I.process,
      pc = Z("fetch"),
      dc = nc.f,
      gc = dc,
      mc = "process" == i(hc),
      vc = !!(fc && fc.createEvent && I.dispatchEvent),
      yc = Ue(oc, function () {
        if (V(uc) === String(uc)) {
          if (66 === Bt) return !0;
          if (!mc && "function" != typeof PromiseRejectionEvent) return !0;
        }
        if (51 <= Bt && /native code/.test(uc)) return !1;
        function e(e) {
          e(
            function () {},
            function () {}
          );
        }
        var t = uc.resolve(1);
        return (
          ((t.constructor = {})[ic] = e), !(t.then(function () {}) instanceof e)
        );
      }),
      bc =
        yc ||
        !yt(function (e) {
          uc.all(e).catch(function () {});
        }),
      wc = function (n, r) {
        rc.call(I, function () {
          var e,
            t = r.value;
          if (
            _c(r) &&
            ((e = zs(function () {
              mc
                ? hc.emit("unhandledRejection", t, n)
                : Gs("unhandledrejection", n, t);
            })),
            (r.rejection = mc || _c(r) ? 2 : 1),
            e.error)
          )
            throw e.value;
        });
      },
      _c = function (e) {
        return 1 !== e.rejection && !e.parent;
      },
      kc = function (e, t) {
        rc.call(I, function () {
          mc
            ? hc.emit("rejectionHandled", e)
            : Gs("rejectionhandled", e, t.value);
        });
      },
      Ec = function (n, r, e, t) {
        if (!r.done) {
          (r.done = !0), t && (r = t);
          try {
            if (n === e) throw lc("Promise can't be resolved itself");
            var i = Ys(e);
            i
              ? tc(function () {
                  var t = { done: !1 };
                  try {
                    i.call(e, Ks(Ec, n, t, r), Ks(Xs, n, t, r));
                  } catch (e) {
                    Xs(n, t, e, r);
                  }
                })
              : ((r.value = e), (r.state = 1), $s(n, r, !1));
          } catch (e) {
            Xs(n, { done: !1 }, e, r);
          }
        }
      };
    yc &&
      ((uc = function (e) {
        Hi(this, uc, oc), ce(e), Js.call(this);
        var t = ac(this);
        try {
          e(Ks(Ec, this, t), Ks(Xs, this, t));
        } catch (e) {
          Xs(this, t, e);
        }
      }),
      ((Js = function (e) {
        sc(this, {
          type: oc,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = zi(uc.prototype, {
        then: function (e, t) {
          var n = cc(this),
            r = dc(Ii(this, uc));
          return (
            (r.ok = "function" != typeof e || e),
            (r.fail = "function" == typeof t && t),
            (r.domain = mc ? hc.domain : void 0),
            (n.parent = !0),
            n.reactions.push(r),
            0 != n.state && $s(this, n, !1),
            r.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (Qs = function () {
        var e = new Js(),
          t = ac(e);
        (this.promise = e),
          (this.resolve = Ks(Ec, e, t)),
          (this.reject = Ks(Xs, e, t));
      }),
      (nc.f = dc = function (e) {
        return e === uc || e === Zs ? new Qs() : gc(e);
      }),
      "function" == typeof gs &&
        ((ec = gs.prototype.then),
        ye(
          gs.prototype,
          "then",
          function (e, t) {
            var n = this;
            return new uc(function (e, t) {
              ec.call(n, e, t);
            }).then(e, t);
          },
          { unsafe: !0 }
        ),
        "function" == typeof pc &&
          se(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (e) {
                return Ws(uc, pc.apply(I, arguments));
              },
            }
          ))),
      se({ global: !0, wrap: !0, forced: yc }, { Promise: uc }),
      Bn(uc, oc, !1),
      Zt(oc),
      (Zs = Z(oc)),
      se(
        { target: oc, stat: !0, forced: yc },
        {
          reject: function (e) {
            var t = dc(this);
            return t.reject.call(void 0, e), t.promise;
          },
        }
      ),
      se(
        { target: oc, stat: !0, forced: yc },
        {
          resolve: function (e) {
            return Ws(this, e);
          },
        }
      ),
      se(
        { target: oc, stat: !0, forced: bc },
        {
          all: function (e) {
            var s = this,
              t = dc(s),
              c = t.resolve,
              u = t.reject,
              n = zs(function () {
                var r = ce(s.resolve),
                  i = [],
                  o = 0,
                  a = 1;
                ms(e, function (e) {
                  var t = o++,
                    n = !1;
                  i.push(void 0),
                    a++,
                    r.call(s, e).then(function (e) {
                      n || ((n = !0), (i[t] = e), --a || c(i));
                    }, u);
                }),
                  --a || c(i);
              });
            return n.error && u(n.value), t.promise;
          },
          race: function (e) {
            var n = this,
              r = dc(n),
              i = r.reject,
              t = zs(function () {
                var t = ce(n.resolve);
                ms(e, function (e) {
                  t.call(n, e).then(r.resolve, i);
                });
              });
            return t.error && i(t.value), r.promise;
          },
        }
      );
    var Sc = function (e, t) {
      return (Sc =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function Tc(e, t) {
      function n() {
        this.constructor = e;
      }
      Sc(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var xc,
      Ac,
      Oc,
      Pc,
      Ic,
      jc,
      Cc = function () {
        return (Cc =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
    function Rc(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        o = n.call(e),
        a = [];
      try {
        for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
          a.push(r.value);
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return a;
    }
    function Lc() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(Rc(arguments[t]));
      return e;
    }
    ((jc = xc = xc || {}).Fatal = "fatal"),
      (jc.Error = "error"),
      (jc.Warning = "warning"),
      (jc.Log = "log"),
      (jc.Info = "info"),
      (jc.Debug = "debug"),
      (jc.Critical = "critical"),
      ((Ic = xc = xc || {}).fromString = function (e) {
        switch (e) {
          case "debug":
            return Ic.Debug;
          case "info":
            return Ic.Info;
          case "warn":
          case "warning":
            return Ic.Warning;
          case "error":
            return Ic.Error;
          case "fatal":
            return Ic.Fatal;
          case "critical":
            return Ic.Critical;
          case "log":
          default:
            return Ic.Log;
        }
      }),
      ((Pc = Ac = Ac || {}).Unknown = "unknown"),
      (Pc.Skipped = "skipped"),
      (Pc.Success = "success"),
      (Pc.RateLimit = "rate_limit"),
      (Pc.Invalid = "invalid"),
      (Pc.Failed = "failed"),
      ((Oc = Ac = Ac || {}).fromHttpCode = function (e) {
        return 200 <= e && e < 300
          ? Oc.Success
          : 429 === e
          ? Oc.RateLimit
          : 400 <= e && e < 500
          ? Oc.Invalid
          : 500 <= e
          ? Oc.Failed
          : Oc.Unknown;
      });
    var Nc = R.f,
      Mc = Function.prototype,
      Uc = Mc.toString,
      Dc = /^\s*function ([^ (]*)/;
    !j ||
      "name" in Mc ||
      Nc(Mc, "name", {
        configurable: !0,
        get: function () {
          try {
            return Uc.call(this).match(Dc)[1];
          } catch (e) {
            return "";
          }
        },
      });
    var Fc,
      qc =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array
          ? function (e, t) {
              return (e.__proto__ = t), e;
            }
          : function (e, t) {
              for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
              return e;
            }),
      Bc = (Tc(Hc, (Fc = Error)), Hc);
    function Hc(e) {
      var t = this.constructor,
        n = Fc.call(this, e) || this;
      return (
        (n.message = e),
        (n.name = t.prototype.constructor.name),
        qc(n, t.prototype),
        n
      );
    }
    function Vc(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return 1;
        default:
          return Qc(e, Error);
      }
    }
    function Wc(e) {
      return "[object ErrorEvent]" === Object.prototype.toString.call(e);
    }
    function zc(e) {
      return "[object DOMError]" === Object.prototype.toString.call(e);
    }
    function Yc(e) {
      return "[object String]" === Object.prototype.toString.call(e);
    }
    function $c(e) {
      return null === e || ("object" !== Ya(e) && "function" != typeof e);
    }
    function Gc(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function Kc(e) {
      return "undefined" != typeof Event && Qc(e, Event);
    }
    function Xc(e) {
      return "undefined" != typeof Element && Qc(e, Element);
    }
    function Jc(e) {
      return Boolean(e && e.then && "function" == typeof e.then);
    }
    function Qc(e, t) {
      try {
        return e instanceof t;
      } catch (e) {
        return !1;
      }
    }
    di("match", 1, function (r, u, l) {
      return [
        function (e) {
          var t = h(this),
            n = null == e ? void 0 : e[r];
          return void 0 !== n ? n.call(e, t) : new RegExp(e)[r](String(t));
        },
        function (e) {
          var t = l(u, e, this);
          if (t.done) return t.value;
          var n = x(e),
            r = String(this);
          if (!n.global) return mi(n, r);
          for (
            var i, o = n.unicode, a = [], s = (n.lastIndex = 0);
            null !== (i = mi(n, r));

          ) {
            var c = String(i[0]);
            "" === (a[s] = c) && (n.lastIndex = gi(r, te(n.lastIndex), o)), s++;
          }
          return 0 === s ? null : a;
        },
      ];
    });
    function Zc(e) {
      return O(e) && P(gu, ht(e));
    }
    var eu,
      tu = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
      nu = R.f,
      ru = I.Int8Array,
      iu = ru && ru.prototype,
      ou = I.Uint8ClampedArray,
      au = ou && ou.prototype,
      su = ru && Dn(ru),
      cu = iu && Dn(iu),
      uu = Object.prototype,
      lu = uu.isPrototypeOf,
      fu = fe("toStringTag"),
      hu = T("TYPED_ARRAY_TAG"),
      pu = tu && !!Xt && "Opera" !== ht(I.opera),
      du = !1,
      gu = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
      };
    for (eu in gu) I[eu] || (pu = !1);
    if (
      (!pu || "function" != typeof su || su === Function.prototype) &&
      ((su = function () {
        throw TypeError("Incorrect invocation");
      }),
      pu)
    )
      for (eu in gu) I[eu] && Xt(I[eu], su);
    if ((!pu || !cu || cu === uu) && ((cu = su.prototype), pu))
      for (eu in gu) I[eu] && Xt(I[eu].prototype, cu);
    if ((pu && Dn(au) !== cu && Xt(au, cu), j && !P(cu, fu)))
      for (eu in ((du = !0),
      nu(cu, fu, {
        get: function () {
          return O(this) ? this[hu] : void 0;
        },
      }),
      gu))
        I[eu] && L(I[eu], hu, eu);
    function mu(e) {
      if (void 0 === e) return 0;
      var t = ee(e),
        n = te(t);
      if (t !== n) throw RangeError("Wrong length or index");
      return n;
    }
    function vu(e) {
      for (
        var t = le(this),
          n = te(t.length),
          r = arguments.length,
          i = ne(1 < r ? arguments[1] : void 0, n),
          o = 2 < r ? arguments[2] : void 0,
          a = void 0 === o ? n : ne(o, n);
        i < a;

      )
        t[i++] = e;
      return t;
    }
    function yu(e) {
      return [255 & e];
    }
    function bu(e) {
      return [255 & e, (e >> 8) & 255];
    }
    function wu(e) {
      return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    }
    function _u(e) {
      return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    }
    function ku(e) {
      return $u(e, 23, 4);
    }
    function Eu(e) {
      return $u(e, 52, 8);
    }
    function Su(e, t) {
      Du(e.prototype, t, {
        get: function () {
          return Fu(this)[t];
        },
      });
    }
    function Tu(e, t, n, r) {
      var i = mu(n),
        o = Fu(e);
      if (i + t > o.byteLength) throw Yu("Wrong index");
      var a = Fu(o.buffer).bytes,
        s = i + o.byteOffset,
        c = a.slice(s, s + t);
      return r ? c : c.reverse();
    }
    function xu(e, t, n, r, i, o) {
      var a = mu(n),
        s = Fu(e);
      if (a + t > s.byteLength) throw Yu("Wrong index");
      for (
        var c = Fu(s.buffer).bytes, u = a + s.byteOffset, l = r(+i), f = 0;
        f < t;
        f++
      )
        c[u + f] = l[o ? f : t - f - 1];
    }
    var Au = {
        NATIVE_ARRAY_BUFFER_VIEWS: pu,
        TYPED_ARRAY_TAG: du && hu,
        aTypedArray: function (e) {
          if (Zc(e)) return e;
          throw TypeError("Target is not a typed array");
        },
        aTypedArrayConstructor: function (e) {
          if (Xt) {
            if (lu.call(su, e)) return e;
          } else
            for (var t in gu)
              if (P(gu, eu)) {
                var n = I[t];
                if (n && (e === n || lu.call(n, e))) return e;
              }
          throw TypeError("Target is not a typed array constructor");
        },
        exportTypedArrayMethod: function (e, t, n) {
          if (j) {
            if (n)
              for (var r in gu) {
                var i = I[r];
                i && P(i.prototype, e) && delete i.prototype[e];
              }
            (cu[e] && !n) || ye(cu, e, (!n && pu && iu[e]) || t);
          }
        },
        exportTypedArrayStaticMethod: function (e, t, n) {
          var r, i;
          if (j) {
            if (Xt) {
              if (n) for (r in gu) (i = I[r]) && P(i, e) && delete i[e];
              if (su[e] && !n) return;
              try {
                return ye(su, e, (!n && pu && ru[e]) || t);
              } catch (e) {}
            }
            for (r in gu) !(i = I[r]) || (i[e] && !n) || ye(i, e, t);
          }
        },
        isView: function (e) {
          var t = ht(e);
          return "DataView" === t || P(gu, t);
        },
        isTypedArray: Zc,
        TypedArray: su,
        TypedArrayPrototype: cu,
      },
      Ou = Au.NATIVE_ARRAY_BUFFER_VIEWS,
      Pu = I.ArrayBuffer,
      Iu = I.Int8Array,
      ju =
        !Ou ||
        !f(function () {
          Iu(1);
        }) ||
        !f(function () {
          new Iu(-1);
        }) ||
        !yt(function (e) {
          new Iu(), new Iu(null), new Iu(1.5), new Iu(e);
        }, !0) ||
        f(function () {
          return 1 !== new Iu(new Pu(2), 1, void 0).length;
        }),
      Cu = Math.abs,
      Ru = Math.pow,
      Lu = Math.floor,
      Nu = Math.log,
      Mu = Math.LN2,
      Uu = Pe.f,
      Du = R.f,
      Fu = ve.get,
      qu = ve.set,
      Bu = I.ArrayBuffer,
      Hu = Bu,
      Vu = I.DataView,
      Wu = Vu && Vu.prototype,
      zu = Object.prototype,
      Yu = I.RangeError,
      $u = function (e, t, n) {
        var r,
          i,
          o,
          a = new Array(n),
          s = 8 * n - t - 1,
          c = (1 << s) - 1,
          u = c >> 1,
          l = 23 === t ? Ru(2, -24) - Ru(2, -77) : 0,
          f = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
          h = 0;
        for (
          (e = Cu(e)) != e || e === 1 / 0
            ? ((i = e != e ? 1 : 0), (r = c))
            : ((r = Lu(Nu(e) / Mu)),
              e * (o = Ru(2, -r)) < 1 && (r--, (o *= 2)),
              2 <= (e += 1 <= r + u ? l / o : l * Ru(2, 1 - u)) * o &&
                (r++, (o /= 2)),
              c <= r + u
                ? ((i = 0), (r = c))
                : 1 <= r + u
                ? ((i = (e * o - 1) * Ru(2, t)), (r += u))
                : ((i = e * Ru(2, u - 1) * Ru(2, t)), (r = 0)));
          8 <= t;
          a[h++] = 255 & i, i /= 256, t -= 8
        );
        for (
          r = (r << t) | i, s += t;
          0 < s;
          a[h++] = 255 & r, r /= 256, s -= 8
        );
        return (a[--h] |= 128 * f), a;
      },
      Gu = function (e, t) {
        var n,
          r = e.length,
          i = 8 * r - t - 1,
          o = (1 << i) - 1,
          a = o >> 1,
          s = i - 7,
          c = r - 1,
          u = e[c--],
          l = 127 & u;
        for (u >>= 7; 0 < s; l = 256 * l + e[c], c--, s -= 8);
        for (
          n = l & ((1 << -s) - 1), l >>= -s, s += t;
          0 < s;
          n = 256 * n + e[c], c--, s -= 8
        );
        if (0 === l) l = 1 - a;
        else {
          if (l === o) return n ? NaN : u ? -1 / 0 : 1 / 0;
          (n += Ru(2, t)), (l -= a);
        }
        return (u ? -1 : 1) * n * Ru(2, l - t);
      };
    if (tu) {
      if (
        !f(function () {
          Bu(1);
        }) ||
        !f(function () {
          new Bu(-1);
        }) ||
        f(function () {
          return new Bu(), new Bu(1.5), new Bu(NaN), "ArrayBuffer" != Bu.name;
        })
      ) {
        for (
          var Ku,
            Xu = ((Hu = function (e) {
              return Hi(this, Hu), new Bu(mu(e));
            }).prototype = Bu.prototype),
            Ju = Uu(Bu),
            Qu = 0;
          Ju.length > Qu;

        )
          (Ku = Ju[Qu++]) in Hu || L(Hu, Ku, Bu[Ku]);
        Xu.constructor = Hu;
      }
      Xt && Dn(Wu) !== zu && Xt(Wu, zu);
      var Zu = new Vu(new Hu(2)),
        el = Wu.setInt8;
      Zu.setInt8(0, 2147483648),
        Zu.setInt8(1, 2147483649),
        (!Zu.getInt8(0) && Zu.getInt8(1)) ||
          zi(
            Wu,
            {
              setInt8: function (e, t) {
                el.call(this, e, (t << 24) >> 24);
              },
              setUint8: function (e, t) {
                el.call(this, e, (t << 24) >> 24);
              },
            },
            { unsafe: !0 }
          );
    } else
      (Hu = function (e) {
        Hi(this, Hu, "ArrayBuffer");
        var t = mu(e);
        qu(this, { bytes: vu.call(new Array(t), 0), byteLength: t }),
          j || (this.byteLength = t);
      }),
        (Vu = function (e, t, n) {
          Hi(this, Vu, "DataView"), Hi(e, Hu, "DataView");
          var r = Fu(e).byteLength,
            i = ee(t);
          if (i < 0 || r < i) throw Yu("Wrong offset");
          if (i + (n = void 0 === n ? r - i : te(n)) > r)
            throw Yu("Wrong length");
          qu(this, { buffer: e, byteLength: n, byteOffset: i }),
            j ||
              ((this.buffer = e), (this.byteLength = n), (this.byteOffset = i));
        }),
        j &&
          (Su(Hu, "byteLength"),
          Su(Vu, "buffer"),
          Su(Vu, "byteLength"),
          Su(Vu, "byteOffset")),
        zi(Vu.prototype, {
          getInt8: function (e) {
            return (Tu(this, 1, e)[0] << 24) >> 24;
          },
          getUint8: function (e) {
            return Tu(this, 1, e)[0];
          },
          getInt16: function (e) {
            var t = Tu(
              this,
              2,
              e,
              1 < arguments.length ? arguments[1] : void 0
            );
            return (((t[1] << 8) | t[0]) << 16) >> 16;
          },
          getUint16: function (e) {
            var t = Tu(
              this,
              2,
              e,
              1 < arguments.length ? arguments[1] : void 0
            );
            return (t[1] << 8) | t[0];
          },
          getInt32: function (e) {
            return _u(
              Tu(this, 4, e, 1 < arguments.length ? arguments[1] : void 0)
            );
          },
          getUint32: function (e) {
            return (
              _u(
                Tu(this, 4, e, 1 < arguments.length ? arguments[1] : void 0)
              ) >>> 0
            );
          },
          getFloat32: function (e) {
            return Gu(
              Tu(this, 4, e, 1 < arguments.length ? arguments[1] : void 0),
              23
            );
          },
          getFloat64: function (e) {
            return Gu(
              Tu(this, 8, e, 1 < arguments.length ? arguments[1] : void 0),
              52
            );
          },
          setInt8: function (e, t) {
            xu(this, 1, e, yu, t);
          },
          setUint8: function (e, t) {
            xu(this, 1, e, yu, t);
          },
          setInt16: function (e, t) {
            xu(this, 2, e, bu, t, 2 < arguments.length ? arguments[2] : void 0);
          },
          setUint16: function (e, t) {
            xu(this, 2, e, bu, t, 2 < arguments.length ? arguments[2] : void 0);
          },
          setInt32: function (e, t) {
            xu(this, 4, e, wu, t, 2 < arguments.length ? arguments[2] : void 0);
          },
          setUint32: function (e, t) {
            xu(this, 4, e, wu, t, 2 < arguments.length ? arguments[2] : void 0);
          },
          setFloat32: function (e, t) {
            xu(this, 4, e, ku, t, 2 < arguments.length ? arguments[2] : void 0);
          },
          setFloat64: function (e, t) {
            xu(this, 8, e, Eu, t, 2 < arguments.length ? arguments[2] : void 0);
          },
        });
    Bn(Hu, "ArrayBuffer"), Bn(Vu, "DataView");
    function tl(t, e) {
      var n = (function () {
        var e = ee(t);
        if (e < 0) throw RangeError("The argument can't be less than 0");
        return e;
      })();
      if (n % e) throw RangeError("Wrong offset");
      return n;
    }
    function nl(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = le(e),
        c = arguments.length,
        u = 1 < c ? arguments[1] : void 0,
        l = void 0 !== u,
        f = st(s);
      if (null != f && !tt(f))
        for (a = (o = f.call(s)).next, s = []; !(i = a.call(o)).done; )
          s.push(i.value);
      for (
        l && 2 < c && (u = ue(u, arguments[2], 2)),
          n = te(s.length),
          r = new (il(this))(n),
          t = 0;
        t < n;
        t++
      )
        r[t] = l ? u(s[t], t) : s[t];
      return r;
    }
    var rl = { ArrayBuffer: Hu, DataView: Vu },
      il = Au.aTypedArrayConstructor;
    t(function (e) {
      function d(e, t) {
        for (var n = 0, r = t.length, i = new (a(e))(r); n < r; ) i[n] = t[n++];
        return i;
      }
      function t(e, t) {
        y(e, t, {
          get: function () {
            return m(this)[t];
          },
        });
      }
      function g(e) {
        var t;
        return (
          e instanceof _ ||
          "ArrayBuffer" == (t = ht(e)) ||
          "SharedArrayBuffer" == t
        );
      }
      function r(e, t) {
        return (
          A(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
        );
      }
      function n(e, t) {
        return r(e, (t = l(t, !0))) ? s(2, e[t]) : o(e, t);
      }
      function i(e, t, n) {
        return !(r(e, (t = l(t, !0))) && O(n) && P(n, "value")) ||
          P(n, "get") ||
          P(n, "set") ||
          n.configurable ||
          (P(n, "writable") && !n.writable) ||
          (P(n, "enumerable") && !n.enumerable)
          ? y(e, t, n)
          : ((e[t] = n.value), e);
      }
      var c = Pe.f,
        u = $e.forEach,
        m = ve.get,
        v = ve.set,
        y = R.f,
        o = C.f,
        b = Math.round,
        w = I.RangeError,
        _ = rl.ArrayBuffer,
        k = rl.DataView,
        E = Au.NATIVE_ARRAY_BUFFER_VIEWS,
        S = Au.TYPED_ARRAY_TAG,
        T = Au.TypedArray,
        x = Au.TypedArrayPrototype,
        a = Au.aTypedArrayConstructor,
        A = Au.isTypedArray;
      j
        ? (E ||
            ((C.f = n),
            (R.f = i),
            t(x, "buffer"),
            t(x, "byteOffset"),
            t(x, "byteLength"),
            t(x, "length")),
          se(
            { target: "Object", stat: !0, forced: !E },
            { getOwnPropertyDescriptor: n, defineProperty: i }
          ),
          (e.exports = function (e, t, o) {
            function l(e, i) {
              y(e, i, {
                get: function () {
                  return (
                    (e = i), (t = m(this)).view[n](e * f + t.byteOffset, !0)
                  );
                  var e, t;
                },
                set: function (e) {
                  return (
                    (t = i),
                    (n = e),
                    (r = m(this)),
                    o && (n = (n = b(n)) < 0 ? 0 : 255 < n ? 255 : 255 & n),
                    void r.view[a](t * f + r.byteOffset, n, !0)
                  );
                  var t, n, r;
                },
                enumerable: !0,
              });
            }
            var f = e.match(/\d+$/)[0] / 8,
              h = e + (o ? "Clamped" : "") + "Array",
              n = "get" + e,
              a = "set" + e,
              i = I[h],
              p = i,
              r = p && p.prototype,
              s = {};
            E
              ? ju &&
                ((p = t(function (e, t, n, r) {
                  return (
                    Hi(e, p, h),
                    $t(
                      O(t)
                        ? g(t)
                          ? void 0 !== r
                            ? new i(t, tl(n, f), r)
                            : void 0 !== n
                            ? new i(t, tl(n, f))
                            : new i(t)
                          : A(t)
                          ? d(p, t)
                          : nl.call(p, t)
                        : new i(mu(t)),
                      e,
                      p
                    )
                  );
                })),
                Xt && Xt(p, T),
                u(c(i), function (e) {
                  e in p || L(p, e, i[e]);
                }),
                (p.prototype = r))
              : ((p = t(function (e, t, n, r) {
                  Hi(e, p, h);
                  var i,
                    o,
                    a,
                    s = 0,
                    c = 0;
                  if (O(t)) {
                    if (!g(t)) return A(t) ? d(p, t) : nl.call(p, t);
                    (i = t), (c = tl(n, f));
                    var u = t.byteLength;
                    if (void 0 === r) {
                      if (u % f) throw w("Wrong length");
                      if ((o = u - c) < 0) throw w("Wrong length");
                    } else if ((o = te(r) * f) + c > u) throw w("Wrong length");
                    a = o / f;
                  } else (a = mu(t)), (i = new _((o = a * f)));
                  for (
                    v(e, {
                      buffer: i,
                      byteOffset: c,
                      byteLength: o,
                      length: a,
                      view: new k(i),
                    });
                    s < a;

                  )
                    l(e, s++);
                })),
                Xt && Xt(p, T),
                (r = p.prototype = Ot(x))),
              r.constructor !== p && L(r, "constructor", p),
              S && L(r, S, h),
              (s[h] = p),
              se({ global: !0, forced: p != i, sham: !E }, s),
              "BYTES_PER_ELEMENT" in p || L(p, "BYTES_PER_ELEMENT", f),
              "BYTES_PER_ELEMENT" in r || L(r, "BYTES_PER_ELEMENT", f),
              Zt(h);
          }))
        : (e.exports = function () {});
    })("Uint16", function (r) {
      return function (e, t, n) {
        return r(this, e, t, n);
      };
    });
    var ol = Math.min,
      al =
        [].copyWithin ||
        function (e, t) {
          var n = le(this),
            r = te(n.length),
            i = ne(e, r),
            o = ne(t, r),
            a = 2 < arguments.length ? arguments[2] : void 0,
            s = ol((void 0 === a ? r : ne(a, r)) - o, r - i),
            c = 1;
          for (
            o < i && i < o + s && ((c = -1), (o += s - 1), (i += s - 1));
            0 < s--;

          )
            o in n ? (n[i] = n[o]) : delete n[i], (i += c), (o += c);
          return n;
        },
      sl = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("copyWithin", function (e, t) {
      return al.call(
        sl(this),
        e,
        t,
        2 < arguments.length ? arguments[2] : void 0
      );
    });
    var cl = $e.every,
      ul = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("every", function (e) {
      return cl(ul(this), e, 1 < arguments.length ? arguments[1] : void 0);
    });
    var ll = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("fill", function (e) {
      return vu.apply(ll(this), arguments);
    });
    var fl = $e.filter,
      hl = Au.aTypedArray,
      pl = Au.aTypedArrayConstructor;
    (0, Au.exportTypedArrayMethod)("filter", function (e) {
      for (
        var t = fl(hl(this), e, 1 < arguments.length ? arguments[1] : void 0),
          n = Ii(this, this.constructor),
          r = 0,
          i = t.length,
          o = new (pl(n))(i);
        r < i;

      )
        o[r] = t[r++];
      return o;
    });
    var dl = $e.find,
      gl = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("find", function (e) {
      return dl(gl(this), e, 1 < arguments.length ? arguments[1] : void 0);
    });
    var ml = $e.findIndex,
      vl = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("findIndex", function (e) {
      return ml(vl(this), e, 1 < arguments.length ? arguments[1] : void 0);
    });
    var yl = $e.forEach,
      bl = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("forEach", function (e) {
      yl(bl(this), e, 1 < arguments.length ? arguments[1] : void 0);
    });
    var wl = Te.includes,
      _l = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("includes", function (e) {
      return wl(_l(this), e, 1 < arguments.length ? arguments[1] : void 0);
    });
    var kl = Te.indexOf,
      El = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("indexOf", function (e) {
      return kl(El(this), e, 1 < arguments.length ? arguments[1] : void 0);
    });
    function Sl() {
      return Al.call(Il(this));
    }
    var Tl = fe("iterator"),
      xl = I.Uint8Array,
      Al = ii.values,
      Ol = ii.keys,
      Pl = ii.entries,
      Il = Au.aTypedArray,
      jl = Au.exportTypedArrayMethod,
      Cl = xl && xl.prototype[Tl],
      Rl = !!Cl && ("values" == Cl.name || null == Cl.name);
    jl("entries", function () {
      return Pl.call(Il(this));
    }),
      jl("keys", function () {
        return Ol.call(Il(this));
      }),
      jl("values", Sl, !Rl),
      jl(Tl, Sl, !Rl);
    var Ll = Au.aTypedArray,
      Nl = [].join;
    (0, Au.exportTypedArrayMethod)("join", function (e) {
      return Nl.apply(Ll(this), arguments);
    });
    var Ml = Math.min,
      Ul = [].lastIndexOf,
      Dl = !!Ul && 1 / [1].lastIndexOf(1, -0) < 0,
      Fl = de("lastIndexOf"),
      ql = me("indexOf", { ACCESSORS: !0, 1: 0 }),
      Bl =
        !Dl && Fl && ql
          ? Ul
          : function (e) {
              if (Dl) return Ul.apply(this, arguments) || 0;
              var t = u(this),
                n = te(t.length),
                r = n - 1;
              for (
                1 < arguments.length && (r = Ml(r, ee(arguments[1]))),
                  r < 0 && (r = n + r);
                0 <= r;
                r--
              )
                if (r in t && t[r] === e) return r || 0;
              return -1;
            },
      Hl = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("lastIndexOf", function (e) {
      return Bl.apply(Hl(this), arguments);
    });
    var Vl = $e.map,
      Wl = Au.aTypedArray,
      zl = Au.aTypedArrayConstructor;
    (0, Au.exportTypedArrayMethod)("map", function (e) {
      return Vl(
        Wl(this),
        e,
        1 < arguments.length ? arguments[1] : void 0,
        function (e, t) {
          return new (zl(Ii(e, e.constructor)))(t);
        }
      );
    });
    function Yl(u) {
      return function (e, t, n, r) {
        ce(t);
        var i = le(e),
          o = w(i),
          a = te(i.length),
          s = u ? a - 1 : 0,
          c = u ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (s in o) {
              (r = o[s]), (s += c);
              break;
            }
            if (((s += c), u ? s < 0 : a <= s))
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; u ? 0 <= s : s < a; s += c) s in o && (r = t(r, o[s], s, i));
        return r;
      };
    }
    var $l = { left: Yl(!1), right: Yl(!0) },
      Gl = $l.left,
      Kl = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("reduce", function (e) {
      return Gl(
        Kl(this),
        e,
        arguments.length,
        1 < arguments.length ? arguments[1] : void 0
      );
    });
    var Xl = $l.right,
      Jl = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("reduceRight", function (e) {
      return Xl(
        Jl(this),
        e,
        arguments.length,
        1 < arguments.length ? arguments[1] : void 0
      );
    });
    var Ql = Au.aTypedArray,
      Zl = Au.exportTypedArrayMethod,
      ef = Math.floor;
    Zl("reverse", function () {
      for (var e, t = Ql(this).length, n = ef(t / 2), r = 0; r < n; )
        (e = this[r]), (this[r++] = this[--t]), (this[t] = e);
      return this;
    });
    var tf = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)(
      "set",
      function (e) {
        tf(this);
        var t = tl(1 < arguments.length ? arguments[1] : void 0, 1),
          n = this.length,
          r = le(e),
          i = te(r.length),
          o = 0;
        if (n < i + t) throw RangeError("Wrong length");
        for (; o < i; ) this[t + o] = r[o++];
      },
      f(function () {
        new Int8Array(1).set({});
      })
    );
    var nf = Au.aTypedArray,
      rf = Au.aTypedArrayConstructor,
      of = [].slice;
    (0, Au.exportTypedArrayMethod)(
      "slice",
      function (e, t) {
        for (
          var n = of.call(nf(this), e, t),
            r = Ii(this, this.constructor),
            i = 0,
            o = n.length,
            a = new (rf(r))(o);
          i < o;

        )
          a[i] = n[i++];
        return a;
      },
      f(function () {
        new Int8Array(1).slice();
      })
    );
    var af = $e.some,
      sf = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("some", function (e) {
      return af(sf(this), e, 1 < arguments.length ? arguments[1] : void 0);
    });
    var cf = Au.aTypedArray,
      uf = [].sort;
    (0, Au.exportTypedArrayMethod)("sort", function (e) {
      return uf.call(cf(this), e);
    });
    var lf = Au.aTypedArray;
    (0, Au.exportTypedArrayMethod)("subarray", function (e, t) {
      var n = lf(this),
        r = n.length,
        i = ne(e, r);
      return new (Ii(n, n.constructor))(
        n.buffer,
        n.byteOffset + i * n.BYTES_PER_ELEMENT,
        te((void 0 === t ? r : ne(t, r)) - i)
      );
    });
    var ff = I.Int8Array,
      hf = Au.aTypedArray,
      pf = Au.exportTypedArrayMethod,
      df = [].toLocaleString,
      gf = [].slice,
      mf =
        !!ff &&
        f(function () {
          df.call(new ff(1));
        });
    pf(
      "toLocaleString",
      function () {
        return df.apply(mf ? gf.call(hf(this)) : hf(this), arguments);
      },
      f(function () {
        return [1, 2].toLocaleString() != new ff([1, 2]).toLocaleString();
      }) ||
        !f(function () {
          ff.prototype.toLocaleString.call([1, 2]);
        })
    );
    var vf = Au.exportTypedArrayMethod,
      yf = I.Uint8Array,
      bf = (yf && yf.prototype) || {},
      wf = [].toString,
      _f = [].join;
    function kf(e, t) {
      return (
        void 0 === t && (t = 0),
        "string" != typeof e || 0 === t || e.length <= t
          ? e
          : e.substr(0, t) + "..."
      );
    }
    function Ef(e, t) {
      if (!Array.isArray(e)) return "";
      for (var n = [], r = 0; r < e.length; r++) {
        var i = e[r];
        try {
          n.push(String(i));
        } catch (e) {
          n.push("[value cannot be serialized]");
        }
      }
      return n.join(t);
    }
    function Sf(e, t) {
      return (
        !!Yc(e) &&
        ("[object RegExp]" === Object.prototype.toString.call(t)
          ? t.test(e)
          : "string" == typeof t && -1 !== e.indexOf(t))
      );
    }
    function Tf() {
      return (
        "[object process]" ===
        Object.prototype.toString.call(
          "undefined" != typeof process ? process : 0
        )
      );
    }
    f(function () {
      wf.call({});
    }) &&
      (wf = function () {
        return _f.call(this);
      }),
      vf("toString", wf, bf.toString != wf);
    var xf = {};
    function Af() {
      return Tf()
        ? global
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : xf;
    }
    function Of() {
      var e = Af(),
        t = e.crypto || e.msCrypto;
      if (void 0 !== t && t.getRandomValues) {
        var n = new Uint16Array(8);
        t.getRandomValues(n),
          (n[3] = (4095 & n[3]) | 16384),
          (n[4] = (16383 & n[4]) | 32768);
        var r = function (e) {
          for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
          return t;
        };
        return (
          r(n[0]) +
          r(n[1]) +
          r(n[2]) +
          r(n[3]) +
          r(n[4]) +
          r(n[5]) +
          r(n[6]) +
          r(n[7])
        );
      }
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = (16 * Math.random()) | 0;
        return ("x" === e ? t : (3 & t) | 8).toString(16);
      });
    }
    function Pf(e) {
      if (!e) return {};
      var t = e.match(
        /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
      );
      if (!t) return {};
      var n = t[6] || "",
        r = t[8] || "";
      return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + r };
    }
    function If(e) {
      if (e.message) return e.message;
      if (e.exception && e.exception.values && e.exception.values[0]) {
        var t = e.exception.values[0];
        return t.type && t.value
          ? t.type + ": " + t.value
          : t.type || t.value || e.event_id || "<unknown>";
      }
      return e.event_id || "<unknown>";
    }
    function jf(e) {
      var t = Af();
      if (!("console" in t)) return e();
      var n = t.console,
        r = {};
      ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
        e in t.console &&
          n[e].__sentry_original__ &&
          ((r[e] = n[e]), (n[e] = n[e].__sentry_original__));
      });
      var i = e();
      return (
        Object.keys(r).forEach(function (e) {
          n[e] = r[e];
        }),
        i
      );
    }
    function Cf(e, t, n) {
      (e.exception = e.exception || {}),
        (e.exception.values = e.exception.values || []),
        (e.exception.values[0] = e.exception.values[0] || {}),
        (e.exception.values[0].value = e.exception.values[0].value || t || ""),
        (e.exception.values[0].type =
          e.exception.values[0].type || n || "Error");
    }
    function Rf(t, n) {
      void 0 === n && (n = {});
      try {
        (t.exception.values[0].mechanism =
          t.exception.values[0].mechanism || {}),
          Object.keys(n).forEach(function (e) {
            t.exception.values[0].mechanism[e] = n[e];
          });
      } catch (t) {}
    }
    function Lf(e) {
      try {
        for (
          var t = e, n = [], r = 0, i = 0, o = " > ".length, a = void 0;
          t &&
          r++ < 5 &&
          !(
            "html" ===
              (a = (function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a = e,
                  s = [];
                if (!a || !a.tagName) return "";
                if (
                  (s.push(a.tagName.toLowerCase()),
                  a.id && s.push("#" + a.id),
                  (t = a.className) && Yc(t))
                )
                  for (n = t.split(/\s+/), o = 0; o < n.length; o++)
                    s.push("." + n[o]);
                var c = ["type", "name", "title", "alt"];
                for (o = 0; o < c.length; o++)
                  (r = c[o]),
                    (i = a.getAttribute(r)) &&
                      s.push("[" + r + '="' + i + '"]');
                return s.join("");
              })(t)) ||
            (1 < r && 80 <= i + n.length * o + a.length)
          );

        )
          n.push(a), (i += a.length), (t = t.parentNode);
        return n.reverse().join(" > ");
      } catch (e) {
        return "<unknown>";
      }
    }
    var Nf = Date.now(),
      Mf = 0,
      Uf = {
        now: function () {
          var e = Date.now() - Nf;
          return e < Mf && (e = Mf), (Mf = e);
        },
        timeOrigin: Nf,
      },
      Df = (function () {
        if (Tf())
          try {
            return (e = module), e.require("perf_hooks").performance;
          } catch (e) {
            return Uf;
          }
        var e;
        return (
          Af().performance &&
            void 0 === performance.timeOrigin &&
            (performance.timeOrigin =
              (performance.timing && performance.timing.navigationStart) || Nf),
          Af().performance || Uf
        );
      })();
    function Ff() {
      return (Df.timeOrigin + Df.now()) / 1e3;
    }
    function qf(e, t) {
      if (!t) return 6e4;
      var n = parseInt("" + t, 10);
      if (!isNaN(n)) return 1e3 * n;
      var r = Date.parse("" + t);
      return isNaN(r) ? 6e4 : r - e;
    }
    function Bf(e) {
      try {
        return (e && "function" == typeof e && e.name) || "<anonymous>";
      } catch (e) {
        return "<anonymous>";
      }
    }
    var Hf = Af(),
      Vf = "Sentry Logger ",
      Wf =
        ((zf.prototype.disable = function () {
          this._enabled = !1;
        }),
        (zf.prototype.enable = function () {
          this._enabled = !0;
        }),
        (zf.prototype.log = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          this._enabled &&
            jf(function () {
              Hf.console.log(Vf + "[Log]: " + e.join(" "));
            });
        }),
        (zf.prototype.warn = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          this._enabled &&
            jf(function () {
              Hf.console.warn(Vf + "[Warn]: " + e.join(" "));
            });
        }),
        (zf.prototype.error = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          this._enabled &&
            jf(function () {
              Hf.console.error(Vf + "[Error]: " + e.join(" "));
            });
        }),
        zf);
    function zf() {
      this._enabled = !1;
    }
    Hf.__SENTRY__ = Hf.__SENTRY__ || {};
    var Yf = Hf.__SENTRY__.logger || (Hf.__SENTRY__.logger = new Wf()),
      $f = qt("splice"),
      Gf = me("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      Kf = Math.max,
      Xf = Math.min;
    se(
      { target: "Array", proto: !0, forced: !$f || !Gf },
      {
        splice: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            c = le(this),
            u = te(c.length),
            l = ne(e, u),
            f = arguments.length;
          if (
            (0 === f
              ? (n = r = 0)
              : (r =
                  1 === f
                    ? ((n = 0), u - l)
                    : ((n = f - 2), Xf(Kf(ee(t), 0), u - l))),
            9007199254740991 < u + n - r)
          )
            throw TypeError("Maximum allowed length exceeded");
          for (i = he(c, r), o = 0; o < r; o++)
            (a = l + o) in c && nt(i, o, c[a]);
          if (n < (i.length = r)) {
            for (o = l; o < u - r; o++)
              (s = o + n), (a = o + r) in c ? (c[s] = c[a]) : delete c[s];
            for (o = u; u - r + n < o; o--) delete c[o - 1];
          } else if (r < n)
            for (o = u - r; l < o; o--)
              (s = o + n - 1),
                (a = o + r - 1) in c ? (c[s] = c[a]) : delete c[s];
          for (o = 0; o < n; o++) c[o + l] = arguments[o + 2];
          return (c.length = u - r + n), i;
        },
      }
    );
    function Jf(e) {
      return e.frozen || (e.frozen = new kh());
    }
    function Qf(e, t) {
      return bh(e.entries, function (e) {
        return e[0] === t;
      });
    }
    var Zf,
      eh,
      th,
      nh,
      rh,
      ih,
      oh,
      ah,
      sh,
      ch,
      uh,
      lh,
      fh,
      hh,
      ph,
      dh = !f(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      }),
      gh = t(function (e) {
        function n(e) {
          t(e, r, { value: { objectID: "O" + ++i, weakData: {} } });
        }
        var t = R.f,
          r = T("meta"),
          i = 0,
          o =
            Object.isExtensible ||
            function () {
              return !0;
            },
          a = (e.exports = {
            REQUIRED: !1,
            fastKey: function (e, t) {
              if (!O(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!P(e, r)) {
                if (!o(e)) return "F";
                if (!t) return "E";
                n(e);
              }
              return e[r].objectID;
            },
            getWeakData: function (e, t) {
              if (!P(e, r)) {
                if (!o(e)) return !0;
                if (!t) return !1;
                n(e);
              }
              return e[r].weakData;
            },
            onFreeze: function (e) {
              return dh && a.REQUIRED && o(e) && !P(e, r) && n(e), e;
            },
          });
        X[r] = !0;
      }),
      mh =
        (gh.REQUIRED, gh.fastKey, gh.getWeakData, gh.onFreeze, gh.getWeakData),
      vh = ve.set,
      yh = ve.getterFor,
      bh = $e.find,
      wh = $e.findIndex,
      _h = 0,
      kh = function () {
        this.entries = [];
      };
    function Eh(e) {
      var n = fh[e];
      ye(
        fh,
        e,
        "add" == e
          ? function (e) {
              return n.call(this, 0 === e ? 0 : e), this;
            }
          : "delete" == e
          ? function (e) {
              return !(ch && !O(e)) && n.call(this, 0 === e ? 0 : e);
            }
          : "get" == e
          ? function (e) {
              return ch && !O(e) ? void 0 : n.call(this, 0 === e ? 0 : e);
            }
          : "has" == e
          ? function (e) {
              return !(ch && !O(e)) && n.call(this, 0 === e ? 0 : e);
            }
          : function (e, t) {
              return n.call(this, 0 === e ? 0 : e, t), this;
            }
      );
    }
    (kh.prototype = {
      get: function (e) {
        var t = Qf(this, e);
        if (t) return t[1];
      },
      has: function (e) {
        return !!Qf(this, e);
      },
      set: function (e, t) {
        var n = Qf(this, e);
        n ? (n[1] = t) : this.entries.push([e, t]);
      },
      delete: function (t) {
        var e = wh(this.entries, function (e) {
          return e[0] === t;
        });
        return ~e && this.entries.splice(e, 1), !!~e;
      },
    }),
      (eh = function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      }),
      (th = {
        getConstructor: function (e, n, r, i) {
          function o(e, t, n) {
            var r = s(e),
              i = mh(x(t), !0);
            return !0 === i ? Jf(r).set(t, n) : (i[r.id] = n), e;
          }
          var a = e(function (e, t) {
              Hi(e, a, n),
                vh(e, { type: n, id: _h++, frozen: void 0 }),
                null != t && ms(t, e[i], e, r);
            }),
            s = yh(n);
          return (
            zi(a.prototype, {
              delete: function (e) {
                var t = s(this);
                if (!O(e)) return !1;
                var n = mh(e);
                return !0 === n
                  ? Jf(t).delete(e)
                  : n && P(n, t.id) && delete n[t.id];
              },
              has: function (e) {
                var t = s(this);
                if (!O(e)) return !1;
                var n = mh(e);
                return !0 === n ? Jf(t).has(e) : n && P(n, t.id);
              },
            }),
            zi(
              a.prototype,
              r
                ? {
                    get: function (e) {
                      var t = s(this);
                      if (O(e)) {
                        var n = mh(e);
                        return !0 === n ? Jf(t).get(e) : n ? n[t.id] : void 0;
                      }
                    },
                    set: function (e, t) {
                      return o(this, e, t);
                    },
                  }
                : {
                    add: function (e) {
                      return o(this, e, !0);
                    },
                  }
            ),
            a
          );
        },
      }),
      (sh = -1 !== (Zf = "WeakSet").indexOf("Map")),
      (ch = -1 !== Zf.indexOf("Weak")),
      (uh = sh ? "set" : "add"),
      (lh = I[Zf]),
      (fh = lh && lh.prototype),
      (ph = {}),
      Ue(
        Zf,
        "function" != typeof (hh = lh) ||
          !(
            ch ||
            (fh.forEach &&
              !f(function () {
                new lh().entries().next();
              }))
          )
      )
        ? ((hh = th.getConstructor(eh, Zf, sh, uh)), (gh.REQUIRED = !0))
        : Ue(Zf, !0) &&
          ((rh = (nh = new hh())[uh](ch ? {} : -0, 1) != nh),
          (ih = f(function () {
            nh.has(1);
          })),
          (oh = yt(function (e) {
            new lh(e);
          })),
          (ah =
            !ch &&
            f(function () {
              for (var e = new lh(), t = 5; t--; ) e[uh](t, t);
              return !e.has(-0);
            })),
          oh ||
            (((hh = eh(function (e, t) {
              Hi(e, hh, Zf);
              var n = $t(new lh(), e, hh);
              return null != t && ms(t, n[uh], n, sh), n;
            })).prototype = fh).constructor = hh),
          (ih || ah) && (Eh("delete"), Eh("has"), sh && Eh("get")),
          (ah || rh) && Eh(uh),
          ch && fh.clear && delete fh.clear),
      (ph[Zf] = hh),
      se({ global: !0, forced: hh != lh }, ph),
      Bn(hh, Zf),
      ch || th.setStrong(hh, Zf, sh);
    var Sh =
      ((Th.prototype.memoize = function (e) {
        if (this._hasWeakSet)
          return !!this._inner.has(e) || (this._inner.add(e), !1);
        for (var t = 0; t < this._inner.length; t++)
          if (this._inner[t] === e) return !0;
        return this._inner.push(e), !1;
      }),
      (Th.prototype.unmemoize = function (e) {
        if (this._hasWeakSet) this._inner.delete(e);
        else
          for (var t = 0; t < this._inner.length; t++)
            if (this._inner[t] === e) {
              this._inner.splice(t, 1);
              break;
            }
      }),
      Th);
    function Th() {
      (this._hasWeakSet = "function" == typeof WeakSet),
        (this._inner = this._hasWeakSet ? new WeakSet() : []);
    }
    function xh(e, t, n) {
      if (t in e) {
        var r = e[t],
          i = n(r);
        if ("function" == typeof i)
          try {
            (i.prototype = i.prototype || {}),
              Object.defineProperties(i, {
                __sentry_original__: { enumerable: !1, value: r },
              });
          } catch (e) {}
        e[t] = i;
      }
    }
    function Ah(e) {
      if (Vc(e)) {
        var t = e,
          n = { message: t.message, name: t.name, stack: t.stack };
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n;
      }
      if (Kc(e)) {
        var i = e,
          o = {};
        o.type = i.type;
        try {
          o.target = Xc(i.target)
            ? Lf(i.target)
            : Object.prototype.toString.call(i.target);
        } catch (e) {
          o.target = "<unknown>";
        }
        try {
          o.currentTarget = Xc(i.currentTarget)
            ? Lf(i.currentTarget)
            : Object.prototype.toString.call(i.currentTarget);
        } catch (e) {
          o.currentTarget = "<unknown>";
        }
        for (var r in ("undefined" != typeof CustomEvent &&
          Qc(e, CustomEvent) &&
          (o.detail = i.detail),
        i))
          Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
        return o;
      }
      return e;
    }
    function Oh(e, t, n) {
      void 0 === t && (t = 3), void 0 === n && (n = 102400);
      var r,
        i,
        o = Ih(e, t);
      return (
        (r = o),
        (i = JSON.stringify(r)),
        ~-encodeURI(i).split(/%..|./).length > n ? Oh(e, t - 1, n) : o
      );
    }
    function Ph(e, t) {
      return "domain" === t && e && "object" === Ya(e) && e._events
        ? "[Domain]"
        : "domainEmitter" === t
        ? "[DomainEmitter]"
        : "undefined" != typeof global && e === global
        ? "[Global]"
        : "undefined" != typeof window && e === window
        ? "[Window]"
        : "undefined" != typeof document && e === document
        ? "[Document]"
        : Gc((n = e)) &&
          "nativeEvent" in n &&
          "preventDefault" in n &&
          "stopPropagation" in n
        ? "[SyntheticEvent]"
        : "number" == typeof e && e != e
        ? "[NaN]"
        : void 0 === e
        ? "[undefined]"
        : "function" == typeof e
        ? "[Function: " + Bf(e) + "]"
        : e;
      var n;
    }
    function Ih(e, n) {
      try {
        return JSON.parse(
          JSON.stringify(e, function (e, t) {
            return (function e(t, n, r, i) {
              if (
                (void 0 === r && (r = 1 / 0),
                void 0 === i && (i = new Sh()),
                0 === r)
              )
                return (function (e) {
                  var t = Object.prototype.toString.call(e);
                  if ("string" == typeof e) return e;
                  if ("[object Object]" === t) return "[Object]";
                  if ("[object Array]" === t) return "[Array]";
                  var n = Ph(e);
                  return $c(n) ? n : t;
                })(n);
              if (null != n && "function" == typeof n.toJSON) return n.toJSON();
              var o = Ph(n, t);
              if ($c(o)) return o;
              var a = Ah(n),
                s = Array.isArray(n) ? [] : {};
              if (i.memoize(n)) return "[Circular ~]";
              for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) &&
                  (s[c] = e(c, a[c], r - 1, i));
              return i.unmemoize(n), s;
            })(e, t, n);
          })
        );
      } catch (e) {
        return "**non-serializable**";
      }
    }
    se(
      { target: "URL", proto: !0, enumerable: !0 },
      {
        toJSON: function () {
          return URL.prototype.toString.call(this);
        },
      }
    );
    var jh = $e.filter,
      Ch = qt("filter"),
      Rh = me("filter");
    se(
      { target: "Array", proto: !0, forced: !Ch || !Rh },
      {
        filter: function (e) {
          return jh(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    var Lh,
      Nh,
      Mh =
        !!gs &&
        f(function () {
          gs.prototype.finally.call({ then: function () {} }, function () {});
        });
    se(
      { target: "Promise", proto: !0, real: !0, forced: Mh },
      {
        finally: function (t) {
          var n = Ii(this, Z("Promise")),
            e = "function" == typeof t;
          return this.then(
            e
              ? function (e) {
                  return Ws(n, t()).then(function () {
                    return e;
                  });
                }
              : t,
            e
              ? function (e) {
                  return Ws(n, t()).then(function () {
                    throw e;
                  });
                }
              : t
          );
        },
      }
    ),
      "function" != typeof gs ||
        gs.prototype.finally ||
        ye(gs.prototype, "finally", Z("Promise").prototype.finally),
      ((Nh = Lh = Lh || {}).PENDING = "PENDING"),
      (Nh.RESOLVED = "RESOLVED"),
      (Nh.REJECTED = "REJECTED");
    var Uh =
        ((qh.prototype.toString = function () {
          return "[object SyncPromise]";
        }),
        (qh.resolve = function (t) {
          return new qh(function (e) {
            e(t);
          });
        }),
        (qh.reject = function (n) {
          return new qh(function (e, t) {
            t(n);
          });
        }),
        (qh.all = function (e) {
          return new qh(function (n, r) {
            var i, o;
            Array.isArray(e)
              ? 0 !== e.length
                ? ((i = e.length),
                  (o = []),
                  e.forEach(function (e, t) {
                    qh.resolve(e)
                      .then(function (e) {
                        (o[t] = e), 0 == --i && n(o);
                      })
                      .then(null, r);
                  }))
                : n([])
              : r(new TypeError("Promise.all requires an array as input."));
          });
        }),
        (qh.prototype.then = function (r, i) {
          var e = this;
          return new qh(function (t, n) {
            e._attachHandler({
              done: !1,
              onfulfilled: function (e) {
                if (r)
                  try {
                    return void t(r(e));
                  } catch (e) {
                    return void n(e);
                  }
                else t(e);
              },
              onrejected: function (e) {
                if (i)
                  try {
                    return void t(i(e));
                  } catch (e) {
                    return void n(e);
                  }
                else n(e);
              },
            });
          });
        }),
        (qh.prototype.catch = function (e) {
          return this.then(function (e) {
            return e;
          }, e);
        }),
        (qh.prototype.finally = function (i) {
          var o = this;
          return new qh(function (e, t) {
            var n, r;
            return o
              .then(
                function (e) {
                  (r = !1), (n = e), i && i();
                },
                function (e) {
                  (r = !0), (n = e), i && i();
                }
              )
              .then(function () {
                (r ? t : e)(n);
              });
          });
        }),
        qh),
      Dh =
        ((Fh.prototype.isReady = function () {
          return void 0 === this._limit || this.length() < this._limit;
        }),
        (Fh.prototype.add = function (e) {
          var t = this;
          return this.isReady()
            ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e),
              e
                .then(function () {
                  return t.remove(e);
                })
                .then(null, function () {
                  return t.remove(e).then(null, function () {});
                }),
              e)
            : Uh.reject(
                new Bc("Not adding Promise due to buffer limit reached.")
              );
        }),
        (Fh.prototype.remove = function (e) {
          return this._buffer.splice(this._buffer.indexOf(e), 1)[0];
        }),
        (Fh.prototype.length = function () {
          return this._buffer.length;
        }),
        (Fh.prototype.drain = function (n) {
          var r = this;
          return new Uh(function (e) {
            var t = setTimeout(function () {
              n && 0 < n && e(!1);
            }, n);
            Uh.all(r._buffer)
              .then(function () {
                clearTimeout(t), e(!0);
              })
              .then(null, function () {
                e(!0);
              });
          });
        }),
        Fh);
    function Fh(e) {
      (this._limit = e), (this._buffer = []);
    }
    function qh(e) {
      var n = this;
      (this._state = Lh.PENDING),
        (this._handlers = []),
        (this._resolve = function (e) {
          n._setResult(Lh.RESOLVED, e);
        }),
        (this._reject = function (e) {
          n._setResult(Lh.REJECTED, e);
        }),
        (this._setResult = function (e, t) {
          n._state === Lh.PENDING &&
            (Jc(t)
              ? t.then(n._resolve, n._reject)
              : ((n._state = e), (n._value = t), n._executeHandlers()));
        }),
        (this._attachHandler = function (e) {
          (n._handlers = n._handlers.concat(e)), n._executeHandlers();
        }),
        (this._executeHandlers = function () {
          var e;
          n._state !== Lh.PENDING &&
            ((e = n._handlers.slice()),
            (n._handlers = []),
            e.forEach(function (e) {
              e.done ||
                (n._state === Lh.RESOLVED &&
                  e.onfulfilled &&
                  e.onfulfilled(n._value),
                n._state === Lh.REJECTED &&
                  e.onrejected &&
                  e.onrejected(n._value),
                (e.done = !0));
            }));
        });
      try {
        e(this._resolve, this._reject);
      } catch (e) {
        this._reject(e);
      }
    }
    function Bh() {
      if ("fetch" in Af())
        try {
          return new Headers(), new Request(""), new Response(), 1;
        } catch (e) {
          return;
        }
    }
    function Hh(e) {
      return (
        e &&
        /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
      );
    }
    var Vh,
      Wh = Af(),
      zh = {},
      Yh = {};
    function $h(e) {
      if (!Yh[e])
        switch (((Yh[e] = !0), e)) {
          case "console":
            "console" in Wh &&
              ["debug", "info", "warn", "error", "log", "assert"].forEach(
                function (r) {
                  r in Wh.console &&
                    xh(Wh.console, r, function (n) {
                      return function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                        Kh("console", { args: e, level: r }),
                          n && Function.prototype.apply.call(n, Wh.console, e);
                      };
                    });
                }
              );
            break;
          case "dom":
            "document" in Wh &&
              (Wh.document.addEventListener(
                "click",
                Zh("click", Kh.bind(null, "dom")),
                !1
              ),
              Wh.document.addEventListener(
                "keypress",
                ep(Kh.bind(null, "dom")),
                !1
              ),
              ["EventTarget", "Node"].forEach(function (e) {
                var t = Wh[e] && Wh[e].prototype;
                t &&
                  t.hasOwnProperty &&
                  t.hasOwnProperty("addEventListener") &&
                  (xh(t, "addEventListener", function (r) {
                    return function (e, t, n) {
                      return (
                        t && t.handleEvent
                          ? ("click" === e &&
                              xh(t, "handleEvent", function (t) {
                                return function (e) {
                                  return (
                                    Zh("click", Kh.bind(null, "dom"))(e),
                                    t.call(this, e)
                                  );
                                };
                              }),
                            "keypress" === e &&
                              xh(t, "handleEvent", function (t) {
                                return function (e) {
                                  return (
                                    ep(Kh.bind(null, "dom"))(e), t.call(this, e)
                                  );
                                };
                              }))
                          : ("click" === e &&
                              Zh("click", Kh.bind(null, "dom"), !0)(this),
                            "keypress" === e && ep(Kh.bind(null, "dom"))(this)),
                        r.call(this, e, t, n)
                      );
                    };
                  }),
                  xh(t, "removeEventListener", function (i) {
                    return function (e, t, n) {
                      var r = t;
                      try {
                        r = r && (r.__sentry_wrapped__ || r);
                      } catch (e) {}
                      return i.call(this, e, r, n);
                    };
                  }));
              }));
            break;
          case "xhr":
            "XMLHttpRequest" in Wh &&
              (xh((s = XMLHttpRequest.prototype), "open", function (r) {
                return function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var n = e[1];
                  return (
                    (this.__sentry_xhr__ = {
                      method: Yc(e[0]) ? e[0].toUpperCase() : e[0],
                      url: e[1],
                    }),
                    Yc(n) &&
                      "POST" === this.__sentry_xhr__.method &&
                      n.match(/sentry_key/) &&
                      (this.__sentry_own_request__ = !0),
                    r.apply(this, e)
                  );
                };
              }),
              xh(s, "send", function (i) {
                return function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var n = this,
                    r = { args: e, startTimestamp: Date.now(), xhr: n };
                  return (
                    Kh("xhr", Cc({}, r)),
                    n.addEventListener("readystatechange", function () {
                      if (4 === n.readyState) {
                        try {
                          n.__sentry_xhr__ &&
                            (n.__sentry_xhr__.status_code = n.status);
                        } catch (e) {}
                        Kh("xhr", Cc({}, r, { endTimestamp: Date.now() }));
                      }
                    }),
                    i.apply(this, e)
                  );
                };
              }));
            break;
          case "fetch":
            !(function () {
              if (Bh()) {
                var e = Af();
                if (Hh(e.fetch)) return 1;
                var t = !1,
                  n = e.document;
                if (n && "function" == typeof n.createElement)
                  try {
                    var r = n.createElement("iframe");
                    (r.hidden = !0),
                      n.head.appendChild(r),
                      r.contentWindow &&
                        r.contentWindow.fetch &&
                        (t = Hh(r.contentWindow.fetch)),
                      n.head.removeChild(r);
                  } catch (e) {
                    Yf.warn(
                      "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                      e
                    );
                  }
                return t;
              }
            })() ||
              xh(Wh, "fetch", function (o) {
                return function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var n,
                    r,
                    i = {
                      args: e,
                      fetchData: {
                        method:
                          (void 0 === (r = e) && (r = []),
                          "Request" in Wh && Qc(r[0], Request) && r[0].method
                            ? String(r[0].method).toUpperCase()
                            : r[1] && r[1].method
                            ? String(r[1].method).toUpperCase()
                            : "GET"),
                        url:
                          (void 0 === (n = e) && (n = []),
                          "string" == typeof n[0]
                            ? n[0]
                            : "Request" in Wh && Qc(n[0], Request)
                            ? n[0].url
                            : String(n[0])),
                      },
                      startTimestamp: Date.now(),
                    };
                  return (
                    Kh("fetch", Cc({}, i)),
                    o.apply(Wh, e).then(
                      function (e) {
                        return (
                          Kh(
                            "fetch",
                            Cc({}, i, { endTimestamp: Date.now(), response: e })
                          ),
                          e
                        );
                      },
                      function (e) {
                        throw (
                          (Kh(
                            "fetch",
                            Cc({}, i, { endTimestamp: Date.now(), error: e })
                          ),
                          e)
                        );
                      }
                    )
                  );
                };
              });
            break;
          case "history":
            (n = Af()),
              (r = n.chrome),
              (i = r && r.app && r.app.runtime),
              (o =
                "history" in n &&
                !!n.history.pushState &&
                !!n.history.replaceState),
              !i &&
                o &&
                ((a = Wh.onpopstate),
                (Wh.onpopstate = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var n = Wh.location.href;
                  if ((Kh("history", { from: Vh, to: (Vh = n) }), a))
                    return a.apply(this, e);
                }),
                xh(Wh.history, "pushState", t),
                xh(Wh.history, "replaceState", t));
            break;
          case "error":
            (tp = Wh.onerror),
              (Wh.onerror = function (e, t, n, r, i) {
                return (
                  Kh("error", { column: r, error: i, line: n, msg: e, url: t }),
                  !!tp && tp.apply(this, arguments)
                );
              });
            break;
          case "unhandledrejection":
            (np = Wh.onunhandledrejection),
              (Wh.onunhandledrejection = function (e) {
                return (
                  Kh("unhandledrejection", e), !np || np.apply(this, arguments)
                );
              });
            break;
          default:
            Yf.warn("unknown instrumentation type:", e);
        }
      function t(o) {
        return function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n,
            r,
            i = 2 < e.length ? e[2] : void 0;
          return (
            i &&
              ((n = Vh),
              (r = String(i)),
              Kh("history", { from: n, to: (Vh = r) })),
            o.apply(this, e)
          );
        };
      }
      var n, r, i, o, a, s;
    }
    function Gh(e) {
      e &&
        "string" == typeof e.type &&
        "function" == typeof e.callback &&
        ((zh[e.type] = zh[e.type] || []),
        zh[e.type].push(e.callback),
        $h(e.type));
    }
    function Kh(e, t) {
      var n, r;
      if (e && zh[e])
        try {
          for (
            var i = (function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length)
                  return {
                    next: function () {
                      return (
                        e && r >= e.length && (e = void 0),
                        { value: e && e[r++], done: !e }
                      );
                    },
                  };
                throw new TypeError(
                  t
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              })(zh[e] || []),
              o = i.next();
            !o.done;
            o = i.next()
          ) {
            var a = o.value;
            try {
              a(t);
            } catch (t) {
              Yf.error(
                "Error while triggering instrumentation handler.\nType: " +
                  e +
                  "\nName: " +
                  Bf(a) +
                  "\nError: " +
                  t
              );
            }
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            o && !o.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
    }
    var Xh,
      Jh,
      Qh = 0;
    function Zh(t, n, r) {
      return (
        void 0 === r && (r = !1),
        function (e) {
          (Xh = void 0),
            e &&
              Jh !== e &&
              ((Jh = e),
              Qh && clearTimeout(Qh),
              r
                ? (Qh = setTimeout(function () {
                    n({ event: e, name: t });
                  }))
                : n({ event: e, name: t }));
        }
      );
    }
    function ep(r) {
      return function (e) {
        var t;
        try {
          t = e.target;
        } catch (e) {
          return;
        }
        var n = t && t.tagName;
        n &&
          ("INPUT" === n || "TEXTAREA" === n || t.isContentEditable) &&
          (Xh || Zh("input", r)(e),
          clearTimeout(Xh),
          (Xh = setTimeout(function () {
            Xh = void 0;
          }, 1e3)));
      };
    }
    var tp = null,
      np = null,
      rp = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
      ip =
        ((sp.prototype.toString = function (e) {
          void 0 === e && (e = !1);
          var t = this,
            n = t.host,
            r = t.path,
            i = t.pass,
            o = t.port,
            a = t.projectId;
          return (
            t.protocol +
            "://" +
            t.user +
            (e && i ? ":" + i : "") +
            "@" +
            n +
            (o ? ":" + o : "") +
            "/" +
            (r ? r + "/" : r) +
            a
          );
        }),
        (sp.prototype._fromString = function (e) {
          var t = rp.exec(e);
          if (!t) throw new Bc("Invalid Dsn");
          var n = Rc(t.slice(1), 6),
            r = n[0],
            i = n[1],
            o = n[2],
            a = void 0 === o ? "" : o,
            s = n[3],
            c = n[4],
            u = void 0 === c ? "" : c,
            l = "",
            f = n[5],
            h = f.split("/");
          1 < h.length && ((l = h.slice(0, -1).join("/")), (f = h.pop())),
            this._fromComponents({
              host: s,
              pass: a,
              path: l,
              projectId: f,
              port: u,
              protocol: r,
              user: i,
            });
        }),
        (sp.prototype._fromComponents = function (e) {
          (this.protocol = e.protocol),
            (this.user = e.user),
            (this.pass = e.pass || ""),
            (this.host = e.host),
            (this.port = e.port || ""),
            (this.path = e.path || ""),
            (this.projectId = e.projectId);
        }),
        (sp.prototype._validate = function () {
          var t = this;
          if (
            (["protocol", "user", "host", "projectId"].forEach(function (e) {
              if (!t[e]) throw new Bc("Invalid Dsn");
            }),
            "http" !== this.protocol && "https" !== this.protocol)
          )
            throw new Bc("Invalid Dsn");
          if (this.port && isNaN(parseInt(this.port, 10)))
            throw new Bc("Invalid Dsn");
        }),
        sp),
      op =
        ((ap.prototype.addScopeListener = function (e) {
          this._scopeListeners.push(e);
        }),
        (ap.prototype.addEventProcessor = function (e) {
          return this._eventProcessors.push(e), this;
        }),
        (ap.prototype._notifyScopeListeners = function () {
          var t = this;
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            setTimeout(function () {
              t._scopeListeners.forEach(function (e) {
                e(t);
              }),
                (t._notifyingListeners = !1);
            }));
        }),
        (ap.prototype._notifyEventProcessors = function (i, o, a, s) {
          var c = this;
          return (
            void 0 === s && (s = 0),
            new Uh(function (t, e) {
              var n,
                r = i[s];
              null === o || "function" != typeof r
                ? t(o)
                : Jc((n = r(Cc({}, o), a)))
                ? n
                    .then(function (e) {
                      return c._notifyEventProcessors(i, e, a, s + 1).then(t);
                    })
                    .then(null, e)
                : c
                    ._notifyEventProcessors(i, n, a, s + 1)
                    .then(t)
                    .then(null, e);
            })
          );
        }),
        (ap.prototype.setUser = function (e) {
          return (this._user = e || {}), this._notifyScopeListeners(), this;
        }),
        (ap.prototype.setTags = function (e) {
          return (
            (this._tags = Cc({}, this._tags, e)),
            this._notifyScopeListeners(),
            this
          );
        }),
        (ap.prototype.setTag = function (e, t) {
          var n;
          return (
            (this._tags = Cc({}, this._tags, (((n = {})[e] = t), n))),
            this._notifyScopeListeners(),
            this
          );
        }),
        (ap.prototype.setExtras = function (e) {
          return (
            (this._extra = Cc({}, this._extra, e)),
            this._notifyScopeListeners(),
            this
          );
        }),
        (ap.prototype.setExtra = function (e, t) {
          var n;
          return (
            (this._extra = Cc({}, this._extra, (((n = {})[e] = t), n))),
            this._notifyScopeListeners(),
            this
          );
        }),
        (ap.prototype.setFingerprint = function (e) {
          return (this._fingerprint = e), this._notifyScopeListeners(), this;
        }),
        (ap.prototype.setLevel = function (e) {
          return (this._level = e), this._notifyScopeListeners(), this;
        }),
        (ap.prototype.setTransaction = function (e) {
          return (
            (this._transaction = e),
            this._span && (this._span.transaction = e),
            this._notifyScopeListeners(),
            this
          );
        }),
        (ap.prototype.setContext = function (e, t) {
          var n;
          return (
            (this._context = Cc({}, this._context, (((n = {})[e] = t), n))),
            this._notifyScopeListeners(),
            this
          );
        }),
        (ap.prototype.setSpan = function (e) {
          return (this._span = e), this._notifyScopeListeners(), this;
        }),
        (ap.prototype.getSpan = function () {
          return this._span;
        }),
        (ap.clone = function (e) {
          var t = new ap();
          return (
            e &&
              ((t._breadcrumbs = Lc(e._breadcrumbs)),
              (t._tags = Cc({}, e._tags)),
              (t._extra = Cc({}, e._extra)),
              (t._context = Cc({}, e._context)),
              (t._user = e._user),
              (t._level = e._level),
              (t._span = e._span),
              (t._transaction = e._transaction),
              (t._fingerprint = e._fingerprint),
              (t._eventProcessors = Lc(e._eventProcessors))),
            t
          );
        }),
        (ap.prototype.clear = function () {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._context = {}),
            (this._level = void 0),
            (this._transaction = void 0),
            (this._fingerprint = void 0),
            (this._span = void 0),
            this._notifyScopeListeners(),
            this
          );
        }),
        (ap.prototype.addBreadcrumb = function (e, t) {
          var n = Cc({ timestamp: Ff() }, e);
          return (
            (this._breadcrumbs =
              void 0 !== t && 0 <= t
                ? Lc(this._breadcrumbs, [n]).slice(-t)
                : Lc(this._breadcrumbs, [n])),
            this._notifyScopeListeners(),
            this
          );
        }),
        (ap.prototype.clearBreadcrumbs = function () {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }),
        (ap.prototype._applyFingerprint = function (e) {
          (e.fingerprint = e.fingerprint
            ? Array.isArray(e.fingerprint)
              ? e.fingerprint
              : [e.fingerprint]
            : []),
            this._fingerprint &&
              (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
        }),
        (ap.prototype.applyToEvent = function (e, t) {
          return (
            this._extra &&
              Object.keys(this._extra).length &&
              (e.extra = Cc({}, this._extra, e.extra)),
            this._tags &&
              Object.keys(this._tags).length &&
              (e.tags = Cc({}, this._tags, e.tags)),
            this._user &&
              Object.keys(this._user).length &&
              (e.user = Cc({}, this._user, e.user)),
            this._context &&
              Object.keys(this._context).length &&
              (e.contexts = Cc({}, this._context, e.contexts)),
            this._level && (e.level = this._level),
            this._transaction && (e.transaction = this._transaction),
            this._span &&
              (e.contexts = Cc(
                { trace: this._span.getTraceContext() },
                e.contexts
              )),
            this._applyFingerprint(e),
            (e.breadcrumbs = Lc(e.breadcrumbs || [], this._breadcrumbs)),
            (e.breadcrumbs = 0 < e.breadcrumbs.length ? e.breadcrumbs : void 0),
            this._notifyEventProcessors(Lc(cp(), this._eventProcessors), e, t)
          );
        }),
        ap);
    function ap() {
      (this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._context = {});
    }
    function sp(e) {
      "string" == typeof e ? this._fromString(e) : this._fromComponents(e),
        this._validate();
    }
    function cp() {
      var e = Af();
      return (
        (e.__SENTRY__ = e.__SENTRY__ || {}),
        (e.__SENTRY__.globalEventProcessors =
          e.__SENTRY__.globalEventProcessors || []),
        e.__SENTRY__.globalEventProcessors
      );
    }
    function up(e) {
      cp().push(e);
    }
    var lp =
      ((fp.prototype._invokeClient = function (e) {
        for (var t, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        var i = this.getStackTop();
        i &&
          i.client &&
          i.client[e] &&
          (t = i.client)[e].apply(t, Lc(n, [i.scope]));
      }),
      (fp.prototype.isOlderThan = function (e) {
        return this._version < e;
      }),
      (fp.prototype.bindClient = function (e) {
        (this.getStackTop().client = e) &&
          e.setupIntegrations &&
          e.setupIntegrations();
      }),
      (fp.prototype.pushScope = function () {
        var e = this.getStack(),
          t = 0 < e.length ? e[e.length - 1].scope : void 0,
          n = op.clone(t);
        return this.getStack().push({ client: this.getClient(), scope: n }), n;
      }),
      (fp.prototype.popScope = function () {
        return void 0 !== this.getStack().pop();
      }),
      (fp.prototype.withScope = function (e) {
        var t = this.pushScope();
        try {
          e(t);
        } finally {
          this.popScope();
        }
      }),
      (fp.prototype.getClient = function () {
        return this.getStackTop().client;
      }),
      (fp.prototype.getScope = function () {
        return this.getStackTop().scope;
      }),
      (fp.prototype.getStack = function () {
        return this._stack;
      }),
      (fp.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
      }),
      (fp.prototype.captureException = function (e, t) {
        var n = (this._lastEventId = Of()),
          r = t;
        if (!t) {
          var i = void 0;
          try {
            throw new Error("Sentry syntheticException");
          } catch (e) {
            i = e;
          }
          r = { originalException: e, syntheticException: i };
        }
        return (
          this._invokeClient("captureException", e, Cc({}, r, { event_id: n })),
          n
        );
      }),
      (fp.prototype.captureMessage = function (e, t, n) {
        var r = (this._lastEventId = Of()),
          i = n;
        if (!n) {
          var o = void 0;
          try {
            throw new Error(e);
          } catch (e) {
            o = e;
          }
          i = { originalException: e, syntheticException: o };
        }
        return (
          this._invokeClient(
            "captureMessage",
            e,
            t,
            Cc({}, i, { event_id: r })
          ),
          r
        );
      }),
      (fp.prototype.captureEvent = function (e, t) {
        var n = (this._lastEventId = Of());
        return (
          this._invokeClient("captureEvent", e, Cc({}, t, { event_id: n })), n
        );
      }),
      (fp.prototype.lastEventId = function () {
        return this._lastEventId;
      }),
      (fp.prototype.addBreadcrumb = function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          c,
          u,
          l = this.getStackTop();
        l.scope &&
          l.client &&
          ((n = (l.client.getOptions && l.client.getOptions()) || {}),
          (i = void 0 === (r = n.beforeBreadcrumb) ? null : r),
          (a = void 0 === (o = n.maxBreadcrumbs) ? 100 : o) <= 0 ||
            ((s = Ff()),
            (c = Cc({ timestamp: s }, e)),
            null !==
              (u = i
                ? jf(function () {
                    return i(c, t);
                  })
                : c) && l.scope.addBreadcrumb(u, Math.min(a, 100))));
      }),
      (fp.prototype.setUser = function (e) {
        var t = this.getStackTop();
        t.scope && t.scope.setUser(e);
      }),
      (fp.prototype.setTags = function (e) {
        var t = this.getStackTop();
        t.scope && t.scope.setTags(e);
      }),
      (fp.prototype.setExtras = function (e) {
        var t = this.getStackTop();
        t.scope && t.scope.setExtras(e);
      }),
      (fp.prototype.setTag = function (e, t) {
        var n = this.getStackTop();
        n.scope && n.scope.setTag(e, t);
      }),
      (fp.prototype.setExtra = function (e, t) {
        var n = this.getStackTop();
        n.scope && n.scope.setExtra(e, t);
      }),
      (fp.prototype.setContext = function (e, t) {
        var n = this.getStackTop();
        n.scope && n.scope.setContext(e, t);
      }),
      (fp.prototype.configureScope = function (e) {
        var t = this.getStackTop();
        t.scope && t.client && e(t.scope);
      }),
      (fp.prototype.run = function (e) {
        var t = pp(this);
        try {
          e(this);
        } finally {
          pp(t);
        }
      }),
      (fp.prototype.getIntegration = function (e) {
        var t = this.getClient();
        if (!t) return null;
        try {
          return t.getIntegration(e);
        } catch (t) {
          return (
            Yf.warn(
              "Cannot retrieve integration " + e.id + " from the current Hub"
            ),
            null
          );
        }
      }),
      (fp.prototype.startSpan = function (e, t) {
        return (
          void 0 === t && (t = !1), this._callExtensionMethod("startSpan", e, t)
        );
      }),
      (fp.prototype.traceHeaders = function () {
        return this._callExtensionMethod("traceHeaders");
      }),
      (fp.prototype._callExtensionMethod = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = hp().__SENTRY__;
        if (r && r.extensions && "function" == typeof r.extensions[e])
          return r.extensions[e].apply(this, t);
        Yf.warn("Extension method " + e + " couldn't be found, doing nothing.");
      }),
      fp);
    function fp(e, t, n) {
      void 0 === t && (t = new op()),
        void 0 === n && (n = 3),
        (this._version = n),
        (this._stack = []),
        this._stack.push({ client: e, scope: t });
    }
    function hp() {
      var e = Af();
      return (
        (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e
      );
    }
    function pp(e) {
      var t = hp(),
        n = mp(t);
      return vp(t, e), n;
    }
    function dp() {
      var e = hp();
      return (
        (gp(e) && !mp(e).isOlderThan(3)) || vp(e, new lp()),
        (Tf()
          ? function (e) {
              try {
                var t = hp().__SENTRY__;
                if (!t || !t.extensions || !t.extensions.domain) return mp(e);
                var n,
                  r = t.extensions.domain.active;
                return r
                  ? ((gp(r) && !mp(r).isOlderThan(3)) ||
                      ((n = mp(e).getStackTop()),
                      vp(r, new lp(n.client, op.clone(n.scope)))),
                    mp(r))
                  : mp(e);
              } catch (t) {
                return mp(e);
              }
            }
          : mp)(e)
      );
    }
    function gp(e) {
      return e && e.__SENTRY__ && e.__SENTRY__.hub;
    }
    function mp(e) {
      return (
        (e && e.__SENTRY__ && e.__SENTRY__.hub) ||
          ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new lp())),
        e.__SENTRY__.hub
      );
    }
    function vp(e, t) {
      return (
        e && ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), 1)
      );
    }
    function yp(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = dp();
      if (r && r[e]) return r[e].apply(r, Lc(t));
      throw new Error(
        "No hub defined or " +
          e +
          " was not found on the hub, please open a bug report."
      );
    }
    var bp =
        ((_p.prototype.getDsn = function () {
          return this._dsnObject;
        }),
        (_p.prototype.getStoreEndpoint = function () {
          return "" + this._getBaseUrl() + this.getStoreEndpointPath();
        }),
        (_p.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
          var t,
            e = { sentry_key: this._dsnObject.user, sentry_version: "7" };
          return (
            this.getStoreEndpoint() +
            "?" +
            ((t = e),
            Object.keys(t)
              .map(function (e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
              })
              .join("&"))
          );
        }),
        (_p.prototype._getBaseUrl = function () {
          var e = this._dsnObject,
            t = e.protocol ? e.protocol + ":" : "",
            n = e.port ? ":" + e.port : "";
          return t + "//" + e.host + n;
        }),
        (_p.prototype.getStoreEndpointPath = function () {
          var e = this._dsnObject;
          return (
            (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
          );
        }),
        (_p.prototype.getRequestHeaders = function (e, t) {
          var n = this._dsnObject,
            r = ["Sentry sentry_version=7"];
          return (
            r.push("sentry_client=" + e + "/" + t),
            r.push("sentry_key=" + n.user),
            n.pass && r.push("sentry_secret=" + n.pass),
            {
              "Content-Type": "application/json",
              "X-Sentry-Auth": r.join(", "),
            }
          );
        }),
        (_p.prototype.getReportDialogEndpoint = function (e) {
          void 0 === e && (e = {});
          var t = this._dsnObject,
            n =
              this._getBaseUrl() +
              (t.path ? "/" + t.path : "") +
              "/api/embed/error-page/",
            r = [];
          for (var i in (r.push("dsn=" + t.toString()), e))
            if ("user" === i) {
              if (!e.user) continue;
              e.user.name && r.push("name=" + encodeURIComponent(e.user.name)),
                e.user.email &&
                  r.push("email=" + encodeURIComponent(e.user.email));
            } else
              r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
          return r.length ? n + "?" + r.join("&") : n;
        }),
        _p),
      wp = [];
    function _p(e) {
      (this.dsn = e), (this._dsnObject = new ip(e));
    }
    function kp(e) {
      var n = {};
      return (
        (function (e) {
          var t,
            n,
            r = (e.defaultIntegrations && Lc(e.defaultIntegrations)) || [],
            i = e.integrations,
            o = [];
          Array.isArray(i)
            ? ((t = i.map(function (e) {
                return e.name;
              })),
              (n = []),
              r.forEach(function (e) {
                -1 === t.indexOf(e.name) &&
                  -1 === n.indexOf(e.name) &&
                  (o.push(e), n.push(e.name));
              }),
              i.forEach(function (e) {
                -1 === n.indexOf(e.name) && (o.push(e), n.push(e.name));
              }))
            : (o =
                "function" == typeof i
                  ? ((o = i(r)), Array.isArray(o) ? o : [o])
                  : Lc(r));
          var a = o.map(function (e) {
            return e.name;
          });
          return (
            -1 !== a.indexOf("Debug") &&
              o.push.apply(o, Lc(o.splice(a.indexOf("Debug"), 1))),
            o
          );
        })(e).forEach(function (e) {
          var t;
          (n[e.name] = e),
            (t = e),
            -1 === wp.indexOf(t.name) &&
              (t.setupOnce(up, dp),
              wp.push(t.name),
              Yf.log("Integration installed: " + t.name));
        }),
        n
      );
    }
    var Ep,
      Sp =
        ((Pp.prototype.captureException = function (e, t, n) {
          var r = this,
            i = t && t.event_id;
          return (
            (this._processing = !0),
            this._getBackend()
              .eventFromException(e, t)
              .then(function (e) {
                return r._processEvent(e, t, n);
              })
              .then(function (e) {
                (i = e && e.event_id), (r._processing = !1);
              })
              .then(null, function (e) {
                Yf.error(e), (r._processing = !1);
              }),
            i
          );
        }),
        (Pp.prototype.captureMessage = function (e, t, n, r) {
          var i = this,
            o = n && n.event_id;
          return (
            (this._processing = !0),
            ($c(e)
              ? this._getBackend().eventFromMessage("" + e, t, n)
              : this._getBackend().eventFromException(e, n)
            )
              .then(function (e) {
                return i._processEvent(e, n, r);
              })
              .then(function (e) {
                (o = e && e.event_id), (i._processing = !1);
              })
              .then(null, function (e) {
                Yf.error(e), (i._processing = !1);
              }),
            o
          );
        }),
        (Pp.prototype.captureEvent = function (e, t, n) {
          var r = this,
            i = t && t.event_id;
          return (
            (this._processing = !0),
            this._processEvent(e, t, n)
              .then(function (e) {
                (i = e && e.event_id), (r._processing = !1);
              })
              .then(null, function (e) {
                Yf.error(e), (r._processing = !1);
              }),
            i
          );
        }),
        (Pp.prototype.getDsn = function () {
          return this._dsn;
        }),
        (Pp.prototype.getOptions = function () {
          return this._options;
        }),
        (Pp.prototype.flush = function (e) {
          var n = this;
          return this._isClientProcessing(e).then(function (t) {
            return (
              clearInterval(t.interval),
              n
                ._getBackend()
                .getTransport()
                .close(e)
                .then(function (e) {
                  return t.ready && e;
                })
            );
          });
        }),
        (Pp.prototype.close = function (e) {
          var t = this;
          return this.flush(e).then(function (e) {
            return (t.getOptions().enabled = !1), e;
          });
        }),
        (Pp.prototype.setupIntegrations = function () {
          this._isEnabled() && (this._integrations = kp(this._options));
        }),
        (Pp.prototype.getIntegration = function (t) {
          try {
            return this._integrations[t.id] || null;
          } catch (e) {
            return (
              Yf.warn(
                "Cannot retrieve integration " +
                  t.id +
                  " from the current Client"
              ),
              null
            );
          }
        }),
        (Pp.prototype._isClientProcessing = function (r) {
          var i = this;
          return new Uh(function (e) {
            var t = 0,
              n = 0;
            clearInterval(n),
              (n = setInterval(function () {
                i._processing
                  ? ((t += 1), r && r <= t && e({ interval: n, ready: !1 }))
                  : e({ interval: n, ready: !0 });
              }, 1));
          });
        }),
        (Pp.prototype._getBackend = function () {
          return this._backend;
        }),
        (Pp.prototype._isEnabled = function () {
          return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
        }),
        (Pp.prototype._prepareEvent = function (e, t, n) {
          var r = this,
            i = this.getOptions(),
            o = i.environment,
            a = i.release,
            s = i.dist,
            c = i.maxValueLength,
            u = void 0 === c ? 250 : c,
            l = i.normalizeDepth,
            f = void 0 === l ? 3 : l,
            h = Cc({}, e);
          void 0 === h.environment && void 0 !== o && (h.environment = o),
            void 0 === h.release && void 0 !== a && (h.release = a),
            void 0 === h.dist && void 0 !== s && (h.dist = s),
            h.message && (h.message = kf(h.message, u));
          var p = h.exception && h.exception.values && h.exception.values[0];
          p && p.value && (p.value = kf(p.value, u));
          var d = h.request;
          d && d.url && (d.url = kf(d.url, u)),
            void 0 === h.event_id &&
              (h.event_id = n && n.event_id ? n.event_id : Of()),
            this._addIntegrations(h.sdk);
          var g = Uh.resolve(h);
          return (
            t && (g = t.applyToEvent(h, n)),
            g.then(function (e) {
              return "number" == typeof f && 0 < f
                ? r._normalizeEvent(e, f)
                : e;
            })
          );
        }),
        (Pp.prototype._normalizeEvent = function (e, t) {
          return e
            ? Cc(
                {},
                e,
                e.breadcrumbs && {
                  breadcrumbs: e.breadcrumbs.map(function (e) {
                    return Cc({}, e, e.data && { data: Ih(e.data, t) });
                  }),
                },
                e.user && { user: Ih(e.user, t) },
                e.contexts && { contexts: Ih(e.contexts, t) },
                e.extra && { extra: Ih(e.extra, t) }
              )
            : null;
        }),
        (Pp.prototype._addIntegrations = function (e) {
          var t = Object.keys(this._integrations);
          e && 0 < t.length && (e.integrations = t);
        }),
        (Pp.prototype._processEvent = function (e, o, t) {
          var a = this,
            n = this.getOptions(),
            s = n.beforeSend,
            r = n.sampleRate;
          return this._isEnabled()
            ? "number" == typeof r && Math.random() > r
              ? Uh.reject("This event has been sampled, will not send event.")
              : new Uh(function (r, i) {
                  a._prepareEvent(e, t, o)
                    .then(function (e) {
                      if (null !== e) {
                        var t = e;
                        if ((o && o.data && !0 === o.data.__sentry__) || !s)
                          return a._getBackend().sendEvent(t), void r(t);
                        var n = s(e, o);
                        if (void 0 === n)
                          Yf.error(
                            "`beforeSend` method has to return `null` or a valid event."
                          );
                        else if (Jc(n)) a._handleAsyncBeforeSend(n, r, i);
                        else {
                          if (null === (t = n))
                            return (
                              Yf.log(
                                "`beforeSend` returned `null`, will not send event."
                              ),
                              void r(null)
                            );
                          a._getBackend().sendEvent(t), r(t);
                        }
                      } else i("An event processor returned null, will not send event.");
                    })
                    .then(null, function (e) {
                      a.captureException(e, {
                        data: { __sentry__: !0 },
                        originalException: e,
                      }),
                        i(
                          "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                            e
                        );
                    });
                })
            : Uh.reject("SDK not enabled, will not send event.");
        }),
        (Pp.prototype._handleAsyncBeforeSend = function (e, t, n) {
          var r = this;
          e.then(function (e) {
            null !== e
              ? (r._getBackend().sendEvent(e), t(e))
              : n("`beforeSend` returned `null`, will not send event.");
          }).then(null, function (e) {
            n("beforeSend rejected with " + e);
          });
        }),
        Pp),
      Tp =
        ((Op.prototype.sendEvent = function (e) {
          return Uh.resolve({
            reason:
              "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: Ac.Skipped,
          });
        }),
        (Op.prototype.close = function (e) {
          return Uh.resolve(!0);
        }),
        Op),
      xp =
        ((Ap.prototype._setupTransport = function () {
          return new Tp();
        }),
        (Ap.prototype.eventFromException = function (e, t) {
          throw new Bc("Backend has to implement `eventFromException` method");
        }),
        (Ap.prototype.eventFromMessage = function (e, t, n) {
          throw new Bc("Backend has to implement `eventFromMessage` method");
        }),
        (Ap.prototype.sendEvent = function (e) {
          this._transport.sendEvent(e).then(null, function (e) {
            Yf.error("Error while sending event: " + e);
          });
        }),
        (Ap.prototype.getTransport = function () {
          return this._transport;
        }),
        Ap);
    function Ap(e) {
      (this._options = e),
        this._options.dsn ||
          Yf.warn("No DSN provided, backend will not do anything."),
        (this._transport = this._setupTransport());
    }
    function Op() {}
    function Pp(e, t) {
      (this._integrations = {}),
        (this._processing = !1),
        (this._backend = new e(t)),
        (this._options = t).dsn && (this._dsn = new ip(t.dsn));
    }
    var Ip =
        ((Lp.prototype.setupOnce = function () {
          (Ep = Function.prototype.toString),
            (Function.prototype.toString = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = this.__sentry_original__ || this;
              return Ep.apply(n, e);
            });
        }),
        (Lp.id = "FunctionToString"),
        Lp),
      jp = $e.some,
      Cp = de("some"),
      Rp = me("some");
    function Lp() {
      this.name = Lp.id;
    }
    se(
      { target: "Array", proto: !0, forced: !Cp || !Rp },
      {
        some: function (e) {
          return jp(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    var Np = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
      ],
      Mp =
        ((Hp.prototype.setupOnce = function () {
          up(function (e) {
            var t = dp();
            if (!t) return e;
            var n = t.getIntegration(Hp);
            if (n) {
              var r = t.getClient(),
                i = r ? r.getOptions() : {},
                o = n._mergeOptions(i);
              if (n._shouldDropEvent(e, o)) return null;
            }
            return e;
          });
        }),
        (Hp.prototype._shouldDropEvent = function (e, t) {
          return this._isSentryError(e, t)
            ? (Yf.warn(
                "Event dropped due to being internal Sentry Error.\nEvent: " +
                  If(e)
              ),
              !0)
            : this._isIgnoredError(e, t)
            ? (Yf.warn(
                "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                  If(e)
              ),
              !0)
            : this._isBlacklistedUrl(e, t)
            ? (Yf.warn(
                "Event dropped due to being matched by `blacklistUrls` option.\nEvent: " +
                  If(e) +
                  ".\nUrl: " +
                  this._getEventFilterUrl(e)
              ),
              !0)
            : !this._isWhitelistedUrl(e, t) &&
              (Yf.warn(
                "Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " +
                  If(e) +
                  ".\nUrl: " +
                  this._getEventFilterUrl(e)
              ),
              !0);
        }),
        (Hp.prototype._isSentryError = function (e, t) {
          if ((void 0 === t && (t = {}), !t.ignoreInternal)) return !1;
          try {
            return (
              (e &&
                e.exception &&
                e.exception.values &&
                e.exception.values[0] &&
                "SentryError" === e.exception.values[0].type) ||
              !1
            );
          } catch (e) {
            return !1;
          }
        }),
        (Hp.prototype._isIgnoredError = function (e, n) {
          return (
            void 0 === n && (n = {}),
            !(!n.ignoreErrors || !n.ignoreErrors.length) &&
              this._getPossibleEventMessages(e).some(function (t) {
                return n.ignoreErrors.some(function (e) {
                  return Sf(t, e);
                });
              })
          );
        }),
        (Hp.prototype._isBlacklistedUrl = function (e, t) {
          if (
            (void 0 === t && (t = {}),
            !t.blacklistUrls || !t.blacklistUrls.length)
          )
            return !1;
          var n = this._getEventFilterUrl(e);
          return (
            !!n &&
            t.blacklistUrls.some(function (e) {
              return Sf(n, e);
            })
          );
        }),
        (Hp.prototype._isWhitelistedUrl = function (e, t) {
          if (
            (void 0 === t && (t = {}),
            !t.whitelistUrls || !t.whitelistUrls.length)
          )
            return !0;
          var n = this._getEventFilterUrl(e);
          return (
            !n ||
            t.whitelistUrls.some(function (e) {
              return Sf(n, e);
            })
          );
        }),
        (Hp.prototype._mergeOptions = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              blacklistUrls: Lc(
                this._options.blacklistUrls || [],
                e.blacklistUrls || []
              ),
              ignoreErrors: Lc(
                this._options.ignoreErrors || [],
                e.ignoreErrors || [],
                Np
              ),
              ignoreInternal:
                void 0 === this._options.ignoreInternal ||
                this._options.ignoreInternal,
              whitelistUrls: Lc(
                this._options.whitelistUrls || [],
                e.whitelistUrls || []
              ),
            }
          );
        }),
        (Hp.prototype._getPossibleEventMessages = function (e) {
          if (e.message) return [e.message];
          if (e.exception)
            try {
              var t = (e.exception.values && e.exception.values[0]) || {},
                n = t.type,
                r = t.value,
                i = void 0 === r ? "" : r;
              return ["" + i, (void 0 === n ? "" : n) + ": " + i];
            } catch (t) {
              return Yf.error("Cannot extract message for event " + If(e)), [];
            }
          return [];
        }),
        (Hp.prototype._getEventFilterUrl = function (e) {
          try {
            if (e.stacktrace) {
              var t = e.stacktrace.frames;
              return (t && t[t.length - 1].filename) || null;
            }
            if (e.exception) {
              var n =
                e.exception.values &&
                e.exception.values[0].stacktrace &&
                e.exception.values[0].stacktrace.frames;
              return (n && n[n.length - 1].filename) || null;
            }
            return null;
          } catch (t) {
            return Yf.error("Cannot extract url for event " + If(e)), null;
          }
        }),
        (Hp.id = "InboundFilters"),
        Hp),
      Up = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Dp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
      Fp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      qp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Bp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function Hp(e) {
      void 0 === e && (e = {}), (this._options = e), (this.name = Hp.id);
    }
    function Vp(e) {
      var t = null,
        n = e && e.framesToPop;
      try {
        if (
          (t = (function (e) {
            if (!e || !e.stacktrace) return null;
            for (
              var t,
                n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                r = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                i = e.stacktrace.split("\n"),
                o = [],
                a = 0;
              a < i.length;
              a += 2
            ) {
              var s = null;
              (t = n.exec(i[a]))
                ? (s = {
                    url: t[2],
                    func: t[3],
                    args: [],
                    line: +t[1],
                    column: null,
                  })
                : (t = r.exec(i[a])) &&
                  (s = {
                    url: t[6],
                    func: t[3] || t[4],
                    args: t[5] ? t[5].split(",") : [],
                    line: +t[1],
                    column: +t[2],
                  }),
                s && (!s.func && s.line && (s.func = "?"), o.push(s));
            }
            return o.length ? { message: zp(e), name: e.name, stack: o } : null;
          })(e))
        )
          return Wp(t, n);
      } catch (e) {}
      try {
        if (
          (t = (function (e) {
            if (!e || !e.stack) return null;
            for (
              var t, n, r, i = [], o = e.stack.split("\n"), a = 0;
              a < o.length;
              ++a
            ) {
              if ((n = Up.exec(o[a]))) {
                var s = n[2] && 0 === n[2].indexOf("native");
                n[2] &&
                  0 === n[2].indexOf("eval") &&
                  (t = Bp.exec(n[2])) &&
                  ((n[2] = t[1]), (n[3] = t[2]), (n[4] = t[3])),
                  (r = {
                    url:
                      n[2] && 0 === n[2].indexOf("address at ")
                        ? n[2].substr("address at ".length)
                        : n[2],
                    func: n[1] || "?",
                    args: s ? [n[2]] : [],
                    line: n[3] ? +n[3] : null,
                    column: n[4] ? +n[4] : null,
                  });
              } else if ((n = Fp.exec(o[a])))
                r = {
                  url: n[2],
                  func: n[1] || "?",
                  args: [],
                  line: +n[3],
                  column: n[4] ? +n[4] : null,
                };
              else {
                if (!(n = Dp.exec(o[a]))) continue;
                n[3] && -1 < n[3].indexOf(" > eval") && (t = qp.exec(n[3]))
                  ? ((n[1] = n[1] || "eval"),
                    (n[3] = t[1]),
                    (n[4] = t[2]),
                    (n[5] = ""))
                  : 0 !== a ||
                    n[5] ||
                    void 0 === e.columnNumber ||
                    (i[0].column = e.columnNumber + 1),
                  (r = {
                    url: n[3],
                    func: n[1] || "?",
                    args: n[2] ? n[2].split(",") : [],
                    line: n[4] ? +n[4] : null,
                    column: n[5] ? +n[5] : null,
                  });
              }
              !r.func && r.line && (r.func = "?"), i.push(r);
            }
            return i.length ? { message: zp(e), name: e.name, stack: i } : null;
          })(e))
        )
          return Wp(t, n);
      } catch (e) {}
      return { message: zp(e), name: e && e.name, stack: [], failed: !0 };
    }
    function Wp(e, t) {
      try {
        return Cc({}, e, { stack: e.stack.slice(t) });
      } catch (t) {
        return e;
      }
    }
    function zp(e) {
      var t = e && e.message;
      return t
        ? t.error && "string" == typeof t.error.message
          ? t.error.message
          : t
        : "No error message";
    }
    function Yp(e) {
      var t = Gp(e.stack),
        n = { type: e.name, value: e.message };
      return (
        t && t.length && (n.stacktrace = { frames: t }),
        void 0 === n.type &&
          "" === n.value &&
          (n.value = "Unrecoverable error caught"),
        n
      );
    }
    function $p(e) {
      return { exception: { values: [Yp(e)] } };
    }
    function Gp(e) {
      if (!e || !e.length) return [];
      var t = e,
        n = t[0].func || "",
        r = t[t.length - 1].func || "";
      return (
        (-1 === n.indexOf("captureMessage") &&
          -1 === n.indexOf("captureException")) ||
          (t = t.slice(1)),
        -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
        t
          .map(function (e) {
            return {
              colno: null === e.column ? void 0 : e.column,
              filename: e.url || t[0].url,
              function: e.func || "?",
              in_app: !0,
              lineno: null === e.line ? void 0 : e.line,
            };
          })
          .slice(0, 50)
          .reverse()
      );
    }
    function Kp(e, t, n) {
      var r, i, o, a, s, c;
      if ((void 0 === n && (n = {}), Wc(e) && e.error))
        return $p(Vp((e = e.error)));
      if (
        zc(e) ||
        "[object DOMException]" === Object.prototype.toString.call(e)
      ) {
        var u = e,
          l = u.name || (zc(u) ? "DOMError" : "DOMException"),
          f = u.message ? l + ": " + u.message : l;
        return Cf((r = Xp(f, t, n)), f), r;
      }
      return Vc(e)
        ? (r = $p(Vp(e)))
        : (Gc(e) || Kc(e)
            ? Rf(
                ((i = e),
                (o = t),
                (a = n.rejection),
                (c = {
                  exception: {
                    values: [
                      {
                        type: Kc(i)
                          ? i.constructor.name
                          : a
                          ? "UnhandledRejection"
                          : "Error",
                        value:
                          "Non-Error " +
                          (a ? "promise rejection" : "exception") +
                          " captured with keys: " +
                          (function (e, t) {
                            void 0 === t && (t = 40);
                            var n = Object.keys(Ah(e));
                            if ((n.sort(), !n.length))
                              return "[object has no keys]";
                            if (n[0].length >= t) return kf(n[0], t);
                            for (var r = n.length; 0 < r; r--) {
                              var i = n.slice(0, r).join(", ");
                              if (!(i.length > t))
                                return r === n.length ? i : kf(i, t);
                            }
                            return "";
                          })(i),
                      },
                    ],
                  },
                  extra: { __serialized__: Oh(i) },
                }),
                o && ((s = Gp(Vp(o).stack)), (c.stacktrace = { frames: s })),
                (r = c)),
                { synthetic: !0 }
              )
            : (Cf((r = Xp(e, t, n)), "" + e, void 0), Rf(r, { synthetic: !0 })),
          r);
    }
    function Xp(e, t, n) {
      void 0 === n && (n = {});
      var r,
        i = { message: e };
      return (
        n.attachStacktrace &&
          t &&
          ((r = Gp(Vp(t).stack)), (i.stacktrace = { frames: r })),
        i
      );
    }
    var Jp,
      Qp,
      Zp,
      ed,
      td =
        ((hd.prototype.sendEvent = function (e) {
          throw new Bc("Transport Class has to implement `sendEvent` method");
        }),
        (hd.prototype.close = function (e) {
          return this._buffer.drain(e);
        }),
        hd),
      nd = Af(),
      rd =
        (Tc(fd, (ed = td)),
        (fd.prototype.sendEvent = function (e) {
          var o = this;
          if (new Date(Date.now()) < this._disabledUntil)
            return Promise.reject({
              event: e,
              reason:
                "Transport locked till " +
                this._disabledUntil +
                " due to too many requests.",
              status: 429,
            });
          var t = {
            body: JSON.stringify(e),
            method: "POST",
            referrerPolicy: (function () {
              if (Bh())
                try {
                  return new Request("_", { referrerPolicy: "origin" }), 1;
                } catch (e) {
                  return;
                }
            })()
              ? "origin"
              : "",
          };
          return (
            void 0 !== this.options.headers &&
              (t.headers = this.options.headers),
            this._buffer.add(
              new Uh(function (r, i) {
                nd.fetch(o.url, t)
                  .then(function (e) {
                    var t,
                      n = Ac.fromHttpCode(e.status);
                    n !== Ac.Success
                      ? (n === Ac.RateLimit &&
                          ((t = Date.now()),
                          (o._disabledUntil = new Date(
                            t + qf(t, e.headers.get("Retry-After"))
                          )),
                          Yf.warn(
                            "Too many requests, backing off till: " +
                              o._disabledUntil
                          )),
                        i(e))
                      : r({ status: n });
                  })
                  .catch(i);
              })
            )
          );
        }),
        fd),
      id =
        (Tc(ld, (Zp = td)),
        (ld.prototype.sendEvent = function (t) {
          var o = this;
          return new Date(Date.now()) < this._disabledUntil
            ? Promise.reject({
                event: t,
                reason:
                  "Transport locked till " +
                  this._disabledUntil +
                  " due to too many requests.",
                status: 429,
              })
            : this._buffer.add(
                new Uh(function (n, r) {
                  var i = new XMLHttpRequest();
                  for (var e in ((i.onreadystatechange = function () {
                    var e, t;
                    4 === i.readyState &&
                      ((e = Ac.fromHttpCode(i.status)) !== Ac.Success
                        ? (e === Ac.RateLimit &&
                            ((t = Date.now()),
                            (o._disabledUntil = new Date(
                              t + qf(t, i.getResponseHeader("Retry-After"))
                            )),
                            Yf.warn(
                              "Too many requests, backing off till: " +
                                o._disabledUntil
                            )),
                          r(i))
                        : n({ status: e }));
                  }),
                  i.open("POST", o.url),
                  o.options.headers))
                    o.options.headers.hasOwnProperty(e) &&
                      i.setRequestHeader(e, o.options.headers[e]);
                  i.send(JSON.stringify(t));
                })
              );
        }),
        ld),
      od =
        (Tc(ud, (Qp = xp)),
        (ud.prototype._setupTransport = function () {
          if (!this._options.dsn)
            return Qp.prototype._setupTransport.call(this);
          var e = Cc({}, this._options.transportOptions, {
            dsn: this._options.dsn,
          });
          return this._options.transport
            ? new this._options.transport(e)
            : new (Bh() ? rd : id)(e);
        }),
        (ud.prototype.eventFromException = function (e, t) {
          var n = Kp(e, (t && t.syntheticException) || void 0, {
            attachStacktrace: this._options.attachStacktrace,
          });
          return (
            Rf(n, { handled: !0, type: "generic" }),
            (n.level = xc.Error),
            t && t.event_id && (n.event_id = t.event_id),
            Uh.resolve(n)
          );
        }),
        (ud.prototype.eventFromMessage = function (e, t, n) {
          void 0 === t && (t = xc.Info);
          var r = Xp(e, (n && n.syntheticException) || void 0, {
            attachStacktrace: this._options.attachStacktrace,
          });
          return (
            (r.level = t),
            n && n.event_id && (r.event_id = n.event_id),
            Uh.resolve(r)
          );
        }),
        ud),
      ad =
        (Tc(cd, (Jp = Sp)),
        (cd.prototype._prepareEvent = function (e, t, n) {
          return (
            (e.platform = e.platform || "javascript"),
            (e.sdk = Cc({}, e.sdk, {
              name: "sentry.javascript.browser",
              packages: Lc((e.sdk && e.sdk.packages) || [], [
                { name: "npm:@sentry/browser", version: "5.15.5" },
              ]),
              version: "5.15.5",
            })),
            Jp.prototype._prepareEvent.call(this, e, t, n)
          );
        }),
        (cd.prototype.showReportDialog = function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r = Af().document;
          r &&
            (this._isEnabled()
              ? ((t = e.dsn || this.getDsn()),
                e.eventId
                  ? t
                    ? (((n = r.createElement("script")).async = !0),
                      (n.src = new bp(t).getReportDialogEndpoint(e)),
                      e.onLoad && (n.onload = e.onLoad),
                      (r.head || r.body).appendChild(n))
                    : Yf.error("Missing `Dsn` option in showReportDialog call")
                  : Yf.error(
                      "Missing `eventId` option in showReportDialog call"
                    ))
              : Yf.error(
                  "Trying to call showReportDialog with Sentry Client is disabled"
                ));
        }),
        cd),
      sd = 0;
    function cd(e) {
      return void 0 === e && (e = {}), Jp.call(this, od, e) || this;
    }
    function ud() {
      return (null !== Qp && Qp.apply(this, arguments)) || this;
    }
    function ld() {
      var e = (null !== Zp && Zp.apply(this, arguments)) || this;
      return (e._disabledUntil = new Date(Date.now())), e;
    }
    function fd() {
      var e = (null !== ed && ed.apply(this, arguments)) || this;
      return (e._disabledUntil = new Date(Date.now())), e;
    }
    function hd(e) {
      (this.options = e),
        (this._buffer = new Dh(30)),
        (this.url = new bp(
          this.options.dsn
        ).getStoreEndpointWithUrlEncodedAuth());
    }
    function pd() {
      return 0 < sd;
    }
    function dd(t, r, i) {
      if ((void 0 === r && (r = {}), "function" != typeof t)) return t;
      try {
        if (t.__sentry__) return t;
        if (t.__sentry_wrapped__) return t.__sentry_wrapped__;
      } catch (r) {
        return t;
      }
      function e() {
        var n = Array.prototype.slice.call(arguments);
        try {
          i && "function" == typeof i && i.apply(this, arguments);
          var e = n.map(function (e) {
            return dd(e, r);
          });
          return t.handleEvent
            ? t.handleEvent.apply(this, e)
            : t.apply(this, e);
        } catch (t) {
          throw (
            ((sd += 1),
            setTimeout(function () {
              --sd;
            }),
            (function (e) {
              yp("withScope", e);
            })(function (e) {
              e.addEventProcessor(function (e) {
                var t = Cc({}, e);
                return (
                  r.mechanism && (Cf(t, void 0, void 0), Rf(t, r.mechanism)),
                  (t.extra = Cc({}, t.extra, { arguments: n })),
                  t
                );
              }),
                (function (e) {
                  var t;
                  try {
                    throw new Error("Sentry syntheticException");
                  } catch (e) {
                    t = e;
                  }
                  yp("captureException", e, {
                    originalException: e,
                    syntheticException: t,
                  });
                })(t);
            }),
            t)
          );
        }
      }
      try {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      } catch (t) {}
      (t.prototype = t.prototype || {}),
        (e.prototype = t.prototype),
        Object.defineProperty(t, "__sentry_wrapped__", {
          enumerable: !1,
          value: e,
        }),
        Object.defineProperties(e, {
          __sentry__: { enumerable: !1, value: !0 },
          __sentry_original__: { enumerable: !1, value: t },
        });
      try {
        Object.getOwnPropertyDescriptor(e, "name").configurable &&
          Object.defineProperty(e, "name", {
            get: function () {
              return t.name;
            },
          });
      } catch (t) {}
      return e;
    }
    var gd =
        ((wd.prototype.setupOnce = function () {
          (Error.stackTraceLimit = 50),
            this._options.onerror &&
              (Yf.log("Global Handler attached: onerror"),
              this._installGlobalOnErrorHandler()),
            this._options.onunhandledrejection &&
              (Yf.log("Global Handler attached: onunhandledrejection"),
              this._installGlobalOnUnhandledRejectionHandler());
        }),
        (wd.prototype._installGlobalOnErrorHandler = function () {
          var s = this;
          this._onErrorHandlerInstalled ||
            (Gh({
              callback: function (e) {
                var t,
                  n,
                  r = e.error,
                  i = dp(),
                  o = i.getIntegration(wd),
                  a = r && !0 === r.__sentry_own_request__;
                !o ||
                  pd() ||
                  a ||
                  ((t = i.getClient()),
                  Rf(
                    (n = $c(r)
                      ? s._eventFromIncompleteOnError(
                          e.msg,
                          e.url,
                          e.line,
                          e.column
                        )
                      : s._enhanceEventWithInitialFrame(
                          Kp(r, void 0, {
                            attachStacktrace:
                              t && t.getOptions().attachStacktrace,
                            rejection: !1,
                          }),
                          e.url,
                          e.line,
                          e.column
                        )),
                    { handled: !1, type: "onerror" }
                  ),
                  i.captureEvent(n, { originalException: r }));
              },
              type: "error",
            }),
            (this._onErrorHandlerInstalled = !0));
        }),
        (wd.prototype._installGlobalOnUnhandledRejectionHandler = function () {
          var s = this;
          this._onUnhandledRejectionHandlerInstalled ||
            (Gh({
              callback: function (e) {
                var t = e;
                try {
                  "reason" in e
                    ? (t = e.reason)
                    : "detail" in e &&
                      "reason" in e.detail &&
                      (t = e.detail.reason);
                } catch (e) {}
                var n = dp(),
                  r = n.getIntegration(wd),
                  i = t && !0 === t.__sentry_own_request__;
                if (!r || pd() || i) return !0;
                var o = n.getClient(),
                  a = $c(t)
                    ? s._eventFromIncompleteRejection(t)
                    : Kp(t, void 0, {
                        attachStacktrace: o && o.getOptions().attachStacktrace,
                        rejection: !0,
                      });
                (a.level = xc.Error),
                  Rf(a, { handled: !1, type: "onunhandledrejection" }),
                  n.captureEvent(a, { originalException: t });
              },
              type: "unhandledrejection",
            }),
            (this._onUnhandledRejectionHandlerInstalled = !0));
        }),
        (wd.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
          var i,
            o,
            a = Wc(e) ? e.message : e;
          !Yc(a) ||
            ((o = a.match(
              /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
            )) &&
              ((i = o[1]), (a = o[2])));
          var s = { exception: { values: [{ type: i || "Error", value: a }] } };
          return this._enhanceEventWithInitialFrame(s, t, n, r);
        }),
        (wd.prototype._eventFromIncompleteRejection = function (e) {
          return {
            exception: {
              values: [
                {
                  type: "UnhandledRejection",
                  value:
                    "Non-Error promise rejection captured with value: " + e,
                },
              ],
            },
          };
        }),
        (wd.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
          (e.exception = e.exception || {}),
            (e.exception.values = e.exception.values || []),
            (e.exception.values[0] = e.exception.values[0] || {}),
            (e.exception.values[0].stacktrace =
              e.exception.values[0].stacktrace || {}),
            (e.exception.values[0].stacktrace.frames =
              e.exception.values[0].stacktrace.frames || []);
          var i = isNaN(parseInt(r, 10)) ? void 0 : r,
            o = isNaN(parseInt(n, 10)) ? void 0 : n,
            a =
              Yc(t) && 0 < t.length
                ? t
                : (function () {
                    try {
                      return document.location.href;
                    } catch (e) {
                      return "";
                    }
                  })();
          return (
            0 === e.exception.values[0].stacktrace.frames.length &&
              e.exception.values[0].stacktrace.frames.push({
                colno: i,
                filename: a,
                function: "?",
                in_app: !0,
                lineno: o,
              }),
            e
          );
        }),
        (wd.id = "GlobalHandlers"),
        wd),
      md =
        ((bd.prototype._wrapTimeFunction = function (r) {
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = e[0];
            return (
              (e[0] = dd(n, {
                mechanism: {
                  data: { function: Bf(r) },
                  handled: !0,
                  type: "instrument",
                },
              })),
              r.apply(this, e)
            );
          };
        }),
        (bd.prototype._wrapRAF = function (t) {
          return function (e) {
            return t(
              dd(e, {
                mechanism: {
                  data: { function: "requestAnimationFrame", handler: Bf(t) },
                  handled: !0,
                  type: "instrument",
                },
              })
            );
          };
        }),
        (bd.prototype._wrapEventTarget = function (i) {
          var e = Af(),
            t = e[i] && e[i].prototype;
          t &&
            t.hasOwnProperty &&
            t.hasOwnProperty("addEventListener") &&
            (xh(t, "addEventListener", function (r) {
              return function (e, t, n) {
                try {
                  "function" == typeof t.handleEvent &&
                    (t.handleEvent = dd(t.handleEvent.bind(t), {
                      mechanism: {
                        data: {
                          function: "handleEvent",
                          handler: Bf(t),
                          target: i,
                        },
                        handled: !0,
                        type: "instrument",
                      },
                    }));
                } catch (e) {}
                return r.call(
                  this,
                  e,
                  dd(t, {
                    mechanism: {
                      data: {
                        function: "addEventListener",
                        handler: Bf(t),
                        target: i,
                      },
                      handled: !0,
                      type: "instrument",
                    },
                  }),
                  n
                );
              };
            }),
            xh(t, "removeEventListener", function (i) {
              return function (e, t, n) {
                var r = t;
                try {
                  r = r && (r.__sentry_wrapped__ || r);
                } catch (e) {}
                return i.call(this, e, r, n);
              };
            }));
        }),
        (bd.prototype._wrapXHR = function (n) {
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = this;
            return (
              ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
                function (n) {
                  n in r &&
                    "function" == typeof r[n] &&
                    xh(r, n, function (e) {
                      var t = {
                        mechanism: {
                          data: { function: n, handler: Bf(e) },
                          handled: !0,
                          type: "instrument",
                        },
                      };
                      return (
                        e.__sentry_original__ &&
                          (t.mechanism.data.handler = Bf(
                            e.__sentry_original__
                          )),
                        dd(e, t)
                      );
                    });
                }
              ),
              n.apply(this, e)
            );
          };
        }),
        (bd.prototype.setupOnce = function () {
          this._ignoreOnError;
          var e = Af();
          xh(e, "setTimeout", this._wrapTimeFunction.bind(this)),
            xh(e, "setInterval", this._wrapTimeFunction.bind(this)),
            xh(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
            "XMLHttpRequest" in e &&
              xh(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
            [
              "EventTarget",
              "Window",
              "Node",
              "ApplicationCache",
              "AudioTrackList",
              "ChannelMergerNode",
              "CryptoOperation",
              "EventSource",
              "FileReader",
              "HTMLUnknownElement",
              "IDBDatabase",
              "IDBRequest",
              "IDBTransaction",
              "KeyOperation",
              "MediaController",
              "MessagePort",
              "ModalWindow",
              "Notification",
              "SVGElementInstance",
              "Screen",
              "TextTrack",
              "TextTrackCue",
              "TextTrackList",
              "WebSocket",
              "WebSocketWorker",
              "Worker",
              "XMLHttpRequest",
              "XMLHttpRequestEventTarget",
              "XMLHttpRequestUpload",
            ].forEach(this._wrapEventTarget.bind(this));
        }),
        (bd.id = "TryCatch"),
        bd),
      vd =
        ((yd.prototype._consoleBreadcrumb = function (e) {
          var t = {
            category: "console",
            data: { arguments: e.args, logger: "console" },
            level: xc.fromString(e.level),
            message: Ef(e.args, " "),
          };
          if ("assert" === e.level) {
            if (!1 !== e.args[0]) return;
            (t.message =
              "Assertion failed: " +
              (Ef(e.args.slice(1), " ") || "console.assert")),
              (t.data.arguments = e.args.slice(1));
          }
          dp().addBreadcrumb(t, { input: e.args, level: e.level });
        }),
        (yd.prototype._domBreadcrumb = function (e) {
          var t;
          try {
            t = e.event.target ? Lf(e.event.target) : Lf(e.event);
          } catch (e) {
            t = "<unknown>";
          }
          0 !== t.length &&
            dp().addBreadcrumb(
              { category: "ui." + e.name, message: t },
              { event: e.event, name: e.name }
            );
        }),
        (yd.prototype._xhrBreadcrumb = function (e) {
          if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            dp().addBreadcrumb(
              { category: "xhr", data: e.xhr.__sentry_xhr__, type: "http" },
              { xhr: e.xhr }
            );
          } else
            this._options.sentry &&
              e.xhr.__sentry_own_request__ &&
              _d(e.args[0]);
        }),
        (yd.prototype._fetchBreadcrumb = function (e) {
          if (e.endTimestamp) {
            var t = dp().getClient(),
              n = t && t.getDsn();
            if (this._options.sentry && n) {
              var r = new bp(n).getStoreEndpoint();
              if (
                r &&
                -1 !== e.fetchData.url.indexOf(r) &&
                "POST" === e.fetchData.method &&
                e.args[1] &&
                e.args[1].body
              )
                return void _d(e.args[1].body);
            }
            e.error
              ? dp().addBreadcrumb(
                  {
                    category: "fetch",
                    data: Cc({}, e.fetchData, {
                      status_code: e.response.status,
                    }),
                    level: xc.Error,
                    type: "http",
                  },
                  { data: e.error, input: e.args }
                )
              : dp().addBreadcrumb(
                  {
                    category: "fetch",
                    data: Cc({}, e.fetchData, {
                      status_code: e.response.status,
                    }),
                    type: "http",
                  },
                  { input: e.args, response: e.response }
                );
          }
        }),
        (yd.prototype._historyBreadcrumb = function (e) {
          var t = Af(),
            n = e.from,
            r = e.to,
            i = Pf(t.location.href),
            o = Pf(n),
            a = Pf(r);
          o.path || (o = i),
            i.protocol === a.protocol && i.host === a.host && (r = a.relative),
            i.protocol === o.protocol && i.host === o.host && (n = o.relative),
            dp().addBreadcrumb({
              category: "navigation",
              data: { from: n, to: r },
            });
        }),
        (yd.prototype.setupOnce = function () {
          var n = this;
          this._options.console &&
            Gh({
              callback: function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                n._consoleBreadcrumb.apply(n, Lc(e));
              },
              type: "console",
            }),
            this._options.dom &&
              Gh({
                callback: function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  n._domBreadcrumb.apply(n, Lc(e));
                },
                type: "dom",
              }),
            this._options.xhr &&
              Gh({
                callback: function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  n._xhrBreadcrumb.apply(n, Lc(e));
                },
                type: "xhr",
              }),
            this._options.fetch &&
              Gh({
                callback: function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  n._fetchBreadcrumb.apply(n, Lc(e));
                },
                type: "fetch",
              }),
            this._options.history &&
              Gh({
                callback: function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  n._historyBreadcrumb.apply(n, Lc(e));
                },
                type: "history",
              });
        }),
        (yd.id = "Breadcrumbs"),
        yd);
    function yd(e) {
      (this.name = yd.id),
        (this._options = Cc(
          { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 },
          e
        ));
    }
    function bd() {
      (this._ignoreOnError = 0), (this.name = bd.id);
    }
    function wd(e) {
      (this.name = wd.id),
        (this._onErrorHandlerInstalled = !1),
        (this._onUnhandledRejectionHandlerInstalled = !1),
        (this._options = Cc({ onerror: !0, onunhandledrejection: !0 }, e));
    }
    function _d(e) {
      try {
        var t = JSON.parse(e);
        dp().addBreadcrumb(
          {
            category:
              "sentry." + ("transaction" === t.type ? "transaction" : "event"),
            event_id: t.event_id,
            level: t.level || xc.fromString("error"),
            message: If(t),
          },
          { event: t }
        );
      } catch (e) {
        Yf.error("Error while adding sentry type breadcrumb");
      }
    }
    var kd =
        ((Ad.prototype.setupOnce = function () {
          up(function (e, t) {
            var n = dp().getIntegration(Ad);
            return n ? n._handler(e, t) : e;
          });
        }),
        (Ad.prototype._handler = function (e, t) {
          if (
            !(
              e.exception &&
              e.exception.values &&
              t &&
              Qc(t.originalException, Error)
            )
          )
            return e;
          var n = this._walkErrorTree(t.originalException, this._key);
          return (e.exception.values = Lc(n, e.exception.values)), e;
        }),
        (Ad.prototype._walkErrorTree = function (e, t, n) {
          if (
            (void 0 === n && (n = []),
            !Qc(e[t], Error) || n.length + 1 >= this._limit)
          )
            return n;
          var r = Yp(Vp(e[t]));
          return this._walkErrorTree(e[t], t, Lc([r], n));
        }),
        (Ad.id = "LinkedErrors"),
        Ad),
      Ed = Af(),
      Sd =
        ((xd.prototype.setupOnce = function () {
          up(function (e) {
            if (dp().getIntegration(xd)) {
              if (!Ed.navigator || !Ed.location) return e;
              var t = e.request || {};
              return (
                (t.url = t.url || Ed.location.href),
                (t.headers = t.headers || {}),
                (t.headers["User-Agent"] = Ed.navigator.userAgent),
                Cc({}, e, { request: t })
              );
            }
            return e;
          });
        }),
        (xd.id = "UserAgent"),
        xd),
      Td = [
        new Mp(),
        new Ip(),
        new md(),
        new vd(),
        new gd(),
        new kd(),
        new Sd(),
      ];
    function xd() {
      this.name = xd.id;
    }
    function Ad(e) {
      void 0 === e && (e = {}),
        (this.name = Ad.id),
        (this._key = e.key || "cause"),
        (this._limit = e.limit || 5);
    }
    var Od = $e.find,
      Pd = !0,
      Id = me("find");
    "find" in [] &&
      Array(1).find(function () {
        Pd = !1;
      }),
      se(
        { target: "Array", proto: !0, forced: Pd || !Id },
        {
          find: function (e) {
            return Od(this, e, 1 < arguments.length ? arguments[1] : void 0);
          },
        }
      ),
      jt("find");
    function jd(n) {
      return function (e) {
        var t = String(h(e));
        return (
          1 & n && (t = t.replace(Ld, "")), 2 & n && (t = t.replace(Nd, "")), t
        );
      };
    }
    function Cd(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        c,
        u = l(e, !1);
      if ("string" == typeof u && 2 < u.length)
        if (43 === (t = (u = qd(u)).charCodeAt(0)) || 45 === t) {
          if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === t) {
          switch (u.charCodeAt(1)) {
            case 66:
            case 98:
              (r = 2), (i = 49);
              break;
            case 79:
            case 111:
              (r = 8), (i = 55);
              break;
            default:
              return +u;
          }
          for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
            if ((c = o.charCodeAt(s)) < 48 || i < c) return NaN;
          return parseInt(o, r);
        }
      return +u;
    }
    var Rd = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
      Ld = RegExp("^" + Rd + Rd + "*"),
      Nd = RegExp(Rd + Rd + "*$"),
      Md = { start: jd(1), end: jd(2), trim: jd(3) },
      Ud = Pe.f,
      Dd = C.f,
      Fd = R.f,
      qd = Md.trim,
      Bd = I.Number,
      Hd = Bd.prototype,
      Vd = "Number" == i(Ot(Hd));
    if (Ue("Number", !Bd(" 0o1") || !Bd("0b1") || Bd("+0x1"))) {
      for (
        var Wd,
          zd = function (e) {
            var t = arguments.length < 1 ? 0 : e,
              n = this;
            return n instanceof zd &&
              (Vd
                ? f(function () {
                    Hd.valueOf.call(n);
                  })
                : "Number" != i(n))
              ? $t(new Bd(Cd(t)), n, zd)
              : Cd(t);
          },
          Yd = j
            ? Ud(Bd)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          $d = 0;
        Yd.length > $d;
        $d++
      )
        P(Bd, (Wd = Yd[$d])) && !P(zd, Wd) && Fd(zd, Wd, Dd(Bd, Wd));
      ((zd.prototype = Hd).constructor = zd), ye(I, "Number", zd);
    }
    se(
      { target: "Number", stat: !0 },
      {
        isNaN: function (e) {
          return e != e;
        },
      }
    );
    function Gd(s) {
      return function (e) {
        for (var t, n = u(e), r = Et(n), i = r.length, o = 0, a = []; o < i; )
          (t = r[o++]), (j && !Kd.call(n, t)) || a.push(s ? [t, n[t]] : n[t]);
        return a;
      };
    }
    var Kd = d.f,
      Xd = [Gd(!0), Gd(!1)][0];
    function Jd(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Qd(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Zd(e, t, n) {
      return t && Qd(e.prototype, t), n && Qd(e, n), e;
    }
    function eg(e, t, n) {
      return (
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
    function tg(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    se(
      { target: "Object", stat: !0 },
      {
        entries: function (e) {
          return Xd(e);
        },
      }
    );
    function ng(e) {
      return null != e ? e.constructor : null;
    }
    function rg(e, t) {
      return !!(e && t && e instanceof t);
    }
    function ig(e) {
      return null == e;
    }
    function og(e) {
      return ng(e) === Object;
    }
    function ag(e) {
      return ng(e) === String;
    }
    function sg(e) {
      return Array.isArray(e);
    }
    function cg(e) {
      return rg(e, NodeList);
    }
    function ug(e) {
      return ng(e) === Number && !Number.isNaN(e);
    }
    var lg = ig,
      fg = og,
      hg = ag,
      pg = sg,
      dg = cg,
      gg = function (e) {
        return rg(e, Element);
      },
      mg = function (e) {
        return (
          ig(e) ||
          ((ag(e) || sg(e) || cg(e)) && !e.length) ||
          (og(e) && !Object.keys(e).length)
        );
      },
      vg = {
        facebook: {
          domain: "facebook.com",
          url: function (e) {
            return "https://graph.facebook.com/?id=".concat(
              e,
              "&fields=og_object{engagement}"
            );
          },
          shareCount: function (e) {
            return e.og_object.engagement.count;
          },
          popup: { width: 640, height: 360 },
        },
        twitter: {
          domain: "twitter.com",
          url: function () {
            return null;
          },
          shareCount: function () {
            return null;
          },
          popup: { width: 640, height: 240 },
        },
        pinterest: {
          domain: "pinterest.com",
          url: function (e) {
            return "https://widgets.pinterest.com/v1/urls/count.json?url=".concat(
              e
            );
          },
          shareCount: function (e) {
            return e.count;
          },
          popup: { width: 830, height: 700 },
        },
        github: {
          domain: "github.com",
          url: function (e, t) {
            return "https://api.github.com/repos/"
              .concat(e)
              .concat(hg(t) ? "?access_token=".concat(t) : "");
          },
          shareCount: function (e) {
            return e.data.stargazers_count;
          },
        },
        youtube: {
          domain: "youtube.com",
          url: function (e, t) {
            return "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="
              .concat(e, "&key=")
              .concat(t);
          },
          shareCount: function (e) {
            if (!mg(e.error)) return null;
            var t = tg(e.items, 1)[0];
            return mg(t) ? null : t.statistics.subscriberCount;
          },
        },
      },
      yg = {
        debug: !1,
        wrapper: { className: "shr" },
        count: {
          className: "shr__count",
          displayZero: !1,
          format: !0,
          position: "after",
          increment: !0,
        },
        tokens: { github: "", youtube: "" },
        storage: { enabled: !0, key: "shr", ttl: 3e5 },
      };
    function bg() {}
    var wg =
      (Zd(_g, [
        {
          key: "log",
          get: function () {
            return this.enabled
              ? Function.prototype.bind.call(console.log, console)
              : bg;
          },
        },
        {
          key: "warn",
          get: function () {
            return this.enabled
              ? Function.prototype.bind.call(console.warn, console)
              : bg;
          },
        },
        {
          key: "error",
          get: function () {
            return this.enabled
              ? Function.prototype.bind.call(console.error, console)
              : bg;
          },
        },
      ]),
      _g);
    function _g() {
      var e =
        !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
      Jd(this, _g),
        (this.enabled = window.console && e),
        this.enabled && this.log("Debugging enabled");
    }
    function kg(e, t, n) {
      var i,
        r,
        o = document.createElement(e);
      return (
        fg(t) &&
          ((r = t),
          !gg((i = o)) ||
            mg(r) ||
            Object.entries(r)
              .filter(function (e) {
                var t = tg(e, 2)[1];
                return !lg(t);
              })
              .forEach(function (e) {
                var t = tg(e, 2),
                  n = t[0],
                  r = t[1];
                return i.setAttribute(n, r);
              })),
        hg(n) && (o.innerText = n),
        o
      );
    }
    function Eg() {
      for (
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length,
          n = Array(1 < e ? e - 1 : 0),
          r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      if (!n.length) return t;
      var i = n.shift();
      return fg(i)
        ? (Object.keys(i).forEach(function (e) {
            fg(i[e])
              ? (Object.keys(t).includes(e) || Object.assign(t, eg({}, e, {})),
                Eg(t[e], i[e]))
              : Object.assign(t, eg({}, e, i[e]));
          }),
          Eg.apply(void 0, [t].concat(n)))
        : t;
    }
    var Sg =
      (Zd(
        Tg,
        [
          {
            key: "get",
            value: function (e) {
              if (!Tg.supported || !this.enabled) return null;
              var t = window.localStorage.getItem(this.key);
              if (mg(t)) return null;
              var n = window.localStorage.getItem("".concat(this.key, "_ttl"));
              if (mg(n) || n < Date.now()) return null;
              var r = JSON.parse(t);
              return hg(e) && e.length ? r[e] : r;
            },
          },
          {
            key: "set",
            value: function (e) {
              var t;
              Tg.supported &&
                this.enabled &&
                fg(e) &&
                ((t = this.get()),
                mg(t) && (t = {}),
                Eg(t, e),
                window.localStorage.setItem(this.key, JSON.stringify(t)),
                window.localStorage.setItem(
                  "".concat(this.key, "_ttl"),
                  Date.now() + this.ttl
                ));
            },
          },
        ],
        [
          {
            key: "supported",
            get: function () {
              try {
                return (
                  "localStorage" in window &&
                  (window.localStorage.setItem("___test", "___test"),
                  window.localStorage.removeItem("___test"),
                  !0)
                );
              } catch (e) {
                return !1;
              }
            },
          },
        ]
      ),
      Tg);
    function Tg(e, t) {
      var n =
        !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
      Jd(this, Tg),
        (this.enabled = n && Tg.supported),
        (this.key = e),
        (this.ttl = t);
    }
    function xg(e) {
      return e && e.Math == Math && e;
    }
    function Ag(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    }
    function Og(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    }
    function Pg(e) {
      return Wg.call(e).slice(8, -1);
    }
    function Ig(e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    }
    function jg(e) {
      return Yg(Ig(e));
    }
    function Cg(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    }
    function Rg(e, t) {
      if (!Cg(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !Cg((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !Cg((r = n.call(e))))
        return r;
      if (!t && "function" == typeof (n = e.toString) && !Cg((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    }
    function Lg(e, t) {
      return $g.call(e, t);
    }
    function Ng(e) {
      return Kg ? Gg.createElement(e) : {};
    }
    function Mg(e) {
      if (!Cg(e)) throw TypeError(String(e) + " is not an object");
      return e;
    }
    function Ug(t, n) {
      try {
        tm(Fg, t, n);
      } catch (e) {
        Fg[t] = n;
      }
      return n;
    }
    var Dg =
        (Zd(
          im,
          [
            {
              key: "destroy",
              value: function () {
                this.listeners(!1);
              },
            },
            {
              key: "listeners",
              value: function () {
                var t = this,
                  e =
                    0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                      ? "addEventListener"
                      : "removeEventListener";
                this.elements.trigger[e](
                  "click",
                  function (e) {
                    return t.share(e);
                  },
                  !1
                );
              },
            },
            {
              key: "share",
              value: function (e) {
                var t = this;
                this.openPopup(e);
                var n = this.config.count.increment;
                this.getCount()
                  .then(function (e) {
                    return t.updateDisplay(e, n);
                  })
                  .catch(function () {});
              },
            },
            {
              key: "openPopup",
              value: function (e) {
                var t, n, r, i, o, a, s, c, u;
                !mg(this.network) &&
                  this.networkConfig.popup &&
                  (rg(e, Event) && e.preventDefault(),
                  (n = (t = this.networkConfig.popup).width),
                  (r = t.height),
                  (i = "shr-popup--".concat(this.network)),
                  this.popup && !this.popup.closed
                    ? (this.popup.focus(),
                      this.console.log("Popup re-focused."))
                    : ((o =
                        void 0 === window.screenLeft
                          ? window.screen.left
                          : window.screenLeft),
                      (a =
                        void 0 === window.screenTop
                          ? window.screen.top
                          : window.screenTop),
                      (s = window.screen.width / 2 - n / 2 + o),
                      (c = window.screen.height / 2 - r / 2 + a),
                      (this.popup = window.open(
                        this.href,
                        i,
                        "top="
                          .concat(c, ",left=")
                          .concat(s, ",width=")
                          .concat(n, ",height=")
                          .concat(r)
                      )),
                      this.popup &&
                      !this.popup.closed &&
                      ((u = this.popup.closed), ng(u) === Boolean)
                        ? (this.popup.focus(),
                          this.console.log("Popup opened."))
                        : this.console.error("Popup blocked.")));
              },
            },
            {
              key: "getCount",
              value: function () {
                var a = this,
                  s =
                    !(0 < arguments.length && void 0 !== arguments[0]) ||
                    arguments[0];
                return new Promise(function (r, e) {
                  var o,
                    t = a.apiUrl;
                  if (mg(t))
                    e(
                      new Error("No URL available for ".concat(a.network, "."))
                    );
                  else {
                    if (s) {
                      var n = a.storage.get(a.target);
                      if (!mg(n) && Object.keys(n).includes(a.network)) {
                        var i = n[a.network];
                        return (
                          r(ug(i) ? i : 0),
                          void a.console.log(
                            "getCount for '"
                              .concat(a.target, "' for '")
                              .concat(a.network, "' resolved from cache.")
                          )
                        );
                      }
                    }
                    (o = t),
                      new Promise(function (t, n) {
                        var r = "jsonp_callback_".concat(
                            Math.round(1e5 * Math.random())
                          ),
                          i = document.createElement("script");
                        i.addEventListener("error", function (e) {
                          return n(e);
                        }),
                          (window[r] = function (e) {
                            delete window[r],
                              document.body.removeChild(i),
                              t(e);
                          });
                        var e = new URL(o);
                        e.searchParams.set("callback", r),
                          i.setAttribute("src", e.toString()),
                          document.body.appendChild(i);
                      })
                        .then(function (e) {
                          var t = 0,
                            n = a.elements.trigger.getAttribute(
                              "data-shr-display"
                            ),
                            t = mg(n) ? a.networkConfig.shareCount(e) : e[n];
                          mg(t)
                            ? (t = 0)
                            : ((t = parseInt(t, 10)), ug(t) || (t = 0)),
                            a.storage.set(
                              eg({}, a.target, eg({}, a.network, t))
                            ),
                            r(t);
                        })
                        .catch(e);
                  }
                });
              },
            },
            {
              key: "updateDisplay",
              value: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  c,
                  u =
                    !!(1 < arguments.length && void 0 !== arguments[1]) &&
                    arguments[1],
                  l = this.config,
                  f = l.count,
                  h = l.wrapper,
                  p = u ? e + 1 : e,
                  d = f.position.toLowerCase();
                (0 < p || f.displayZero) &&
                  ((t = function (e) {
                    return Math.round((p / e) * 10) / 10;
                  }),
                  (a = p),
                  (s = /\./.test((1.1).toLocaleString()) ? "." : ","),
                  (c = new RegExp("\\".concat(s, "\\d+$"))),
                  (n = Math.round(a).toLocaleString().replace(c, "")),
                  f.format &&
                    (1e6 < p
                      ? (n = "".concat(t(1e6), "M"))
                      : 1e3 < p && (n = "".concat(t(1e3), "K"))),
                  gg(this.elements.count)
                    ? (this.elements.count.textContent = n)
                    : ((r = this.elements.trigger),
                      (o = kg("span", { class: h.className })),
                      (i = r.length ? r : [r]),
                      Array.from(i)
                        .reverse()
                        .forEach(function (e, t) {
                          var n = 0 < t ? o.cloneNode(!0) : o,
                            r = e.parentNode,
                            i = e.nextSibling;
                          n.appendChild(e),
                            i ? r.insertBefore(n, i) : r.appendChild(n);
                        }),
                      (this.elements.count = kg(
                        "span",
                        {
                          class: ""
                            .concat(f.className, " ")
                            .concat(f.className, "--")
                            .concat(d),
                        },
                        n
                      )),
                      this.elements.trigger.insertAdjacentElement(
                        "after" === d ? "afterend" : "beforebegin",
                        this.elements.count
                      )));
              },
            },
            {
              key: "href",
              get: function () {
                return gg(this.elements.trigger)
                  ? this.elements.trigger.href
                  : null;
              },
            },
            {
              key: "network",
              get: function () {
                var o = this;
                if (!gg(this.elements.trigger)) return null;
                var a = this.config.networks;
                return Object.keys(a).find(function (e) {
                  return (
                    (t = o.href),
                    (n = new URL(t).hostname),
                    (r = n.split(".")),
                    2 < (i = r.length) &&
                      ((n = "".concat(r[i - 2], ".").concat(r[i - 1])),
                      2 === r[i - 2].length &&
                        2 === r[i - 1].length &&
                        (n = "".concat(r[i - 3], ".").concat(n))),
                    n === a[e].domain
                  );
                  var t, n, r, i;
                });
              },
            },
            {
              key: "networkConfig",
              get: function () {
                return mg(this.network)
                  ? null
                  : this.config.networks[this.network];
              },
            },
            {
              key: "target",
              get: function () {
                if (mg(this.network)) return null;
                var e = new URL(this.href);
                switch (this.network) {
                  case "facebook":
                    return e.searchParams.get("u");
                  case "github":
                    return e.pathname.substring(1);
                  case "youtube":
                    return e.pathname.split("/").pop();
                  default:
                    return e.searchParams.get("url");
                }
              },
            },
            {
              key: "apiUrl",
              get: function () {
                if (mg(this.network)) return null;
                var e = this.config.tokens;
                switch (this.network) {
                  case "github":
                    return this.networkConfig.url(this.target, e.github);
                  case "youtube":
                    return this.networkConfig.url(this.target, e.youtube);
                  default:
                    return this.networkConfig.url(
                      encodeURIComponent(this.target)
                    );
                }
              },
            },
          ],
          [
            {
              key: "setup",
              value: function (n) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  e = null;
                if (
                  (hg(n)
                    ? (e = Array.from(document.querySelectorAll(n)))
                    : gg(n)
                    ? (e = [n])
                    : dg(n)
                    ? (e = Array.from(n))
                    : pg(n) && (e = n.filter(gg)),
                  mg(e))
                )
                  return null;
                var r = Object.assign({}, yg, t);
                return (
                  hg(n) &&
                    r.watch &&
                    new MutationObserver(function (e) {
                      Array.from(e).forEach(function (e) {
                        Array.from(e.addedNodes).forEach(function (e) {
                          var t;
                          gg(e) &&
                            function () {
                              return Array.from(
                                document.querySelectorAll(t)
                              ).includes(this);
                            }.call(e, (t = n)) &&
                            new im(e, r);
                        });
                      });
                    }).observe(document.body, { childList: !0, subtree: !0 }),
                  e.map(function (e) {
                    return new im(e, t);
                  })
                );
              },
            },
          ]
        ),
        im),
      Fg =
        xg("object" == typeof globalThis && globalThis) ||
        xg("object" == typeof window && window) ||
        xg("object" == typeof self && self) ||
        xg("object" == typeof e && e) ||
        Function("return this")(),
      qg = !Ag(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      }),
      Bg = {}.propertyIsEnumerable,
      Hg = Object.getOwnPropertyDescriptor,
      Vg = {
        f:
          Hg && !Bg.call({ 1: 2 }, 1)
            ? function (e) {
                var t = Hg(this, e);
                return !!t && t.enumerable;
              }
            : Bg,
      },
      Wg = {}.toString,
      zg = "".split,
      Yg = Ag(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == Pg(e) ? zg.call(e, "") : Object(e);
          }
        : Object,
      $g = {}.hasOwnProperty,
      Gg = Fg.document,
      Kg = Cg(Gg) && Cg(Gg.createElement),
      Xg =
        !qg &&
        !Ag(function () {
          return (
            7 !=
            Object.defineProperty(Ng("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
      Jg = Object.getOwnPropertyDescriptor,
      Qg = {
        f: qg
          ? Jg
          : function (e, t) {
              if (((e = jg(e)), (t = Rg(t, !0)), Xg))
                try {
                  return Jg(e, t);
                } catch (e) {}
              if (Lg(e, t)) return Og(!Vg.f.call(e, t), e[t]);
            },
      },
      Zg = Object.defineProperty,
      em = {
        f: qg
          ? Zg
          : function (e, t, n) {
              if ((Mg(e), (t = Rg(t, !0)), Mg(n), Xg))
                try {
                  return Zg(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            },
      },
      tm = qg
        ? function (e, t, n) {
            return em.f(e, t, Og(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          },
      nm = Fg["__core-js_shared__"] || Ug("__core-js_shared__", {}),
      rm = Function.toString;
    function im(e, t) {
      var n = this;
      Jd(this, im),
        (this.elements = { count: null, trigger: null, popup: null }),
        gg(e)
          ? (this.elements.trigger = e)
          : hg(e) && (this.elements.trigger = document.querySelector(e)),
        gg(this.elements.trigger) &&
          mg(this.elements.trigger.shr) &&
          ((this.config = Eg({}, yg, t, { networks: vg })),
          (this.console = new wg(this.config.debug)),
          (this.storage = new Sg(
            this.config.storage.key,
            this.config.storage.ttl,
            this.config.storage.enabled
          )),
          this.getCount()
            .then(function (e) {
              return n.updateDisplay(e);
            })
            .catch(function () {}),
          this.listeners(!0),
          (this.elements.trigger.shr = this));
    }
    "function" != typeof nm.inspectSource &&
      (nm.inspectSource = function (e) {
        return rm.call(e);
      });
    function om(e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++bm + wm).toString(36)
      );
    }
    function am(e) {
      return _m[e] || (_m[e] = om(e));
    }
    var sm,
      cm,
      um,
      lm,
      fm,
      hm,
      pm,
      dm,
      gm = nm.inspectSource,
      mm = Fg.WeakMap,
      vm = "function" == typeof mm && /native code/.test(gm(mm)),
      ym = t(function (e) {
        (e.exports = function (e, t) {
          return nm[e] || (nm[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.6.5",
          mode: "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
      }),
      bm = 0,
      wm = Math.random(),
      _m = ym("keys"),
      km = {},
      Em = Fg.WeakMap;
    pm = vm
      ? ((sm = new Em()),
        (cm = sm.get),
        (um = sm.has),
        (lm = sm.set),
        (fm = function (e, t) {
          return lm.call(sm, e, t), t;
        }),
        (hm = function (e) {
          return cm.call(sm, e) || {};
        }),
        function (e) {
          return um.call(sm, e);
        })
      : ((dm = am("state")),
        (km[dm] = !0),
        (fm = function (e, t) {
          return tm(e, dm, t), t;
        }),
        (hm = function (e) {
          return Lg(e, dm) ? e[dm] : {};
        }),
        function (e) {
          return Lg(e, dm);
        });
    function Sm(e) {
      return "function" == typeof e ? e : void 0;
    }
    function Tm(e, t) {
      return arguments.length < 2
        ? Sm(Bm[e]) || Sm(Fg[e])
        : (Bm[e] && Bm[e][t]) || (Fg[e] && Fg[e][t]);
    }
    function xm(e) {
      return isNaN((e = +e)) ? 0 : (0 < e ? Vm : Hm)(e);
    }
    function Am(e) {
      return 0 < e ? Wm(xm(e), 9007199254740991) : 0;
    }
    function Om(e, t) {
      var n = xm(e);
      return n < 0 ? zm(n + t, 0) : Ym(n, t);
    }
    function Pm(s) {
      return function (e, t, n) {
        var r,
          i = jg(e),
          o = Am(i.length),
          a = Om(n, o);
        if (s && t != t) {
          for (; a < o; ) if ((r = i[a++]) != r) return !0;
        } else
          for (; a < o; a++)
            if ((s || a in i) && i[a] === t) return s || a || 0;
        return !s && -1;
      };
    }
    function Im(e, t) {
      var n,
        r = jg(e),
        i = 0,
        o = [];
      for (n in r) !Lg(km, n) && Lg(r, n) && o.push(n);
      for (; t.length > i; ) Lg(r, (n = t[i++])) && (~Gm(o, n) || o.push(n));
      return o;
    }
    function jm(e, t) {
      var n = nv[tv(e)];
      return n == iv || (n != rv && ("function" == typeof t ? Ag(t) : !!t));
    }
    function Cm(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = e.target,
        c = e.global,
        u = e.stat;
      if ((n = c ? Fg : u ? Fg[s] || Ug(s, {}) : (Fg[s] || {}).prototype))
        for (r in t) {
          if (
            ((o = t[r]),
            (i = e.noTargetGet ? (a = av(n, r)) && a.value : n[r]),
            !ov(c ? r : s + (u ? "." : "#") + r, e.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            !(function (e, t) {
              for (
                var n = Zm(t), r = em.f, i = Qg.f, o = 0;
                o < n.length;
                o++
              ) {
                var a = n[o];
                Lg(e, a) || r(e, a, i(t, a));
              }
            })(o, i);
          }
          (e.sham || (i && i.sham)) && tm(o, "sham", !0), qm(n, r, o, e);
        }
    }
    function Rm(e) {
      return Object(Ig(e));
    }
    function Lm(e, t, n) {
      var r = Rg(t);
      r in e ? em.f(e, r, Og(0, n)) : (e[r] = n);
    }
    function Nm(e) {
      return (
        Lg(lv, e) ||
          (cv && Lg(fv, e) ? (lv[e] = fv[e]) : (lv[e] = hv("Symbol." + e))),
        lv[e]
      );
    }
    function Mm(e, t) {
      var n;
      return (
        sv(e) &&
          (("function" == typeof (n = e.constructor) &&
            (n === Array || sv(n.prototype))) ||
            (Cg(n) && null === (n = n[pv]))) &&
          (n = void 0),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    }
    var Um,
      Dm,
      Fm = {
        set: fm,
        get: hm,
        has: pm,
        enforce: function (e) {
          return pm(e) ? hm(e) : fm(e, {});
        },
        getterFor: function (n) {
          return function (e) {
            var t;
            if (!Cg(e) || (t = hm(e)).type !== n)
              throw TypeError("Incompatible receiver, " + n + " required");
            return t;
          };
        },
      },
      qm = t(function (e) {
        var t = Fm.get,
          s = Fm.enforce,
          c = String(String).split("String");
        (e.exports = function (e, t, n, r) {
          var i = !!r && !!r.unsafe,
            o = !!r && !!r.enumerable,
            a = !!r && !!r.noTargetGet;
          "function" == typeof n &&
            ("string" != typeof t || Lg(n, "name") || tm(n, "name", t),
            (s(n).source = c.join("string" == typeof t ? t : ""))),
            e !== Fg
              ? (i ? !a && e[t] && (o = !0) : delete e[t],
                o ? (e[t] = n) : tm(e, t, n))
              : o
              ? (e[t] = n)
              : Ug(t, n);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && t(this).source) || gm(this);
        });
      }),
      Bm = Fg,
      Hm = Math.ceil,
      Vm = Math.floor,
      Wm = Math.min,
      zm = Math.max,
      Ym = Math.min,
      $m = { includes: Pm(!0), indexOf: Pm(!1) },
      Gm = $m.indexOf,
      Km = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ],
      Xm = Km.concat("length", "prototype"),
      Jm = {
        f:
          Object.getOwnPropertyNames ||
          function (e) {
            return Im(e, Xm);
          },
      },
      Qm = { f: Object.getOwnPropertySymbols },
      Zm =
        Tm("Reflect", "ownKeys") ||
        function (e) {
          var t = Jm.f(Mg(e)),
            n = Qm.f;
          return n ? t.concat(n(e)) : t;
        },
      ev = /#|\.prototype\./,
      tv = (jm.normalize = function (e) {
        return String(e).replace(ev, ".").toLowerCase();
      }),
      nv = (jm.data = {}),
      rv = (jm.NATIVE = "N"),
      iv = (jm.POLYFILL = "P"),
      ov = jm,
      av = Qg.f,
      sv =
        Array.isArray ||
        function (e) {
          return "Array" == Pg(e);
        },
      cv =
        !!Object.getOwnPropertySymbols &&
        !Ag(function () {
          return !String(Symbol());
        }),
      uv = cv && !Symbol.sham && "symbol" == typeof Symbol.iterator,
      lv = ym("wks"),
      fv = Fg.Symbol,
      hv = uv ? fv : (fv && fv.withoutSetter) || om,
      pv = Nm("species"),
      dv = Tm("navigator", "userAgent") || "",
      gv = Fg.process,
      mv = gv && gv.versions,
      vv = mv && mv.v8;
    vv
      ? (Dm = (Um = vv.split("."))[0] + Um[1])
      : dv &&
        (!(Um = dv.match(/Edge\/(\d+)/)) || 74 <= Um[1]) &&
        (Um = dv.match(/Chrome\/(\d+)/)) &&
        (Dm = Um[1]);
    function yv(t) {
      return (
        51 <= bv ||
        !Ag(function () {
          var e = [];
          return (
            ((e.constructor = {})[wv] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    }
    var bv = Dm && +Dm,
      wv = Nm("species"),
      _v = Nm("isConcatSpreadable"),
      kv =
        51 <= bv ||
        !Ag(function () {
          var e = [];
          return (e[_v] = !1), e.concat()[0] !== e;
        }),
      Ev = yv("concat");
    Cm(
      { target: "Array", proto: !0, forced: !kv || !Ev },
      {
        concat: function (e) {
          for (
            var t,
              n,
              r,
              i = Rm(this),
              o = Mm(i, 0),
              a = 0,
              s = -1,
              c = arguments.length;
            s < c;
            s++
          )
            if (
              (function (e) {
                if (!Cg(e)) return !1;
                var t = e[_v];
                return void 0 !== t ? !!t : sv(e);
              })((r = -1 === s ? i : arguments[s]))
            ) {
              if (9007199254740991 < a + (n = Am(r.length)))
                throw TypeError("Maximum allowed index exceeded");
              for (t = 0; t < n; t++, a++) t in r && Lm(o, a, r[t]);
            } else {
              if (9007199254740991 <= a)
                throw TypeError("Maximum allowed index exceeded");
              Lm(o, a++, r);
            }
          return (o.length = a), o;
        },
      }
    );
    function Sv(e) {
      if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function");
      return e;
    }
    function Tv(r, i, e) {
      if ((Sv(r), void 0 === i)) return r;
      switch (e) {
        case 0:
          return function () {
            return r.call(i);
          };
        case 1:
          return function (e) {
            return r.call(i, e);
          };
        case 2:
          return function (e, t) {
            return r.call(i, e, t);
          };
        case 3:
          return function (e, t, n) {
            return r.call(i, e, t, n);
          };
      }
      return function () {
        return r.apply(i, arguments);
      };
    }
    function xv(p) {
      var d = 1 == p,
        g = 2 == p,
        m = 3 == p,
        v = 4 == p,
        y = 6 == p,
        b = 5 == p || y;
      return function (e, t, n, r) {
        for (
          var i,
            o,
            a = Rm(e),
            s = Yg(a),
            c = Tv(t, n, 3),
            u = Am(s.length),
            l = 0,
            f = r || Mm,
            h = d ? f(e, u) : g ? f(e, 0) : void 0;
          l < u;
          l++
        )
          if ((b || l in s) && ((o = c((i = s[l]), l, a)), p))
            if (d) h[l] = o;
            else if (o)
              switch (p) {
                case 3:
                  return !0;
                case 5:
                  return i;
                case 6:
                  return l;
                case 2:
                  Pv.call(h, i);
              }
            else if (v) return !1;
        return y ? -1 : m || v ? v : h;
      };
    }
    function Av(e) {
      throw e;
    }
    function Ov(e, t) {
      if (Lg(Cv, e)) return Cv[e];
      var n = [][e],
        r = !!Lg((t = t || {}), "ACCESSORS") && t.ACCESSORS,
        i = Lg(t, 0) ? t[0] : Av,
        o = Lg(t, 1) ? t[1] : void 0;
      return (Cv[e] =
        !!n &&
        !Ag(function () {
          if (r && !qg) return 1;
          var e = { length: -1 };
          r ? jv(e, 1, { enumerable: !0, get: Av }) : (e[1] = 1),
            n.call(e, i, o);
        }));
    }
    var Pv = [].push,
      Iv = {
        forEach: xv(0),
        map: xv(1),
        filter: xv(2),
        some: xv(3),
        every: xv(4),
        find: xv(5),
        findIndex: xv(6),
      },
      jv = Object.defineProperty,
      Cv = {},
      Rv = Iv.filter,
      Lv = yv("filter"),
      Nv = Ov("filter");
    Cm(
      { target: "Array", proto: !0, forced: !Lv || !Nv },
      {
        filter: function (e) {
          return Rv(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    function Mv() {}
    function Uv(e) {
      return "<script>" + e + "</script>";
    }
    var Dv,
      Fv =
        Object.keys ||
        function (e) {
          return Im(e, Km);
        },
      qv = qg
        ? Object.defineProperties
        : function (e, t) {
            Mg(e);
            for (var n, r = Fv(t), i = r.length, o = 0; o < i; )
              em.f(e, (n = r[o++]), t[n]);
            return e;
          },
      Bv = Tm("document", "documentElement"),
      Hv = am("IE_PROTO"),
      Vv = function () {
        try {
          Dv = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        Vv = Dv
          ? (function (e) {
              e.write(Uv("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            })(Dv)
          : (((t = Ng("iframe")).style.display = "none"),
            Bv.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(Uv("document.F=Object")),
            e.close(),
            e.F);
        for (var n = Km.length; n--; ) delete Vv.prototype[Km[n]];
        return Vv();
      };
    km[Hv] = !0;
    var Wv =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((Mv.prototype = Mg(e)),
                (n = new Mv()),
                (Mv.prototype = null),
                (n[Hv] = e))
              : (n = Vv()),
            void 0 === t ? n : qv(n, t)
          );
        },
      zv = Nm("unscopables"),
      Yv = Array.prototype;
    null == Yv[zv] && em.f(Yv, zv, { configurable: !0, value: Wv(null) });
    function $v(e) {
      Yv[zv][e] = !0;
    }
    var Gv = Iv.find,
      Kv = !0,
      Xv = Ov("find");
    "find" in [] &&
      Array(1).find(function () {
        Kv = !1;
      }),
      Cm(
        { target: "Array", proto: !0, forced: Kv || !Xv },
        {
          find: function (e) {
            return Gv(this, e, 1 < arguments.length ? arguments[1] : void 0);
          },
        }
      ),
      $v("find");
    function Jv(e, t, n, r) {
      try {
        return r ? t(Mg(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = e.return;
        throw (void 0 !== i && Mg(i.call(e)), t);
      }
    }
    function Qv(e) {
      return void 0 !== e && (Zv.Array === e || ty[ey] === e);
    }
    var Zv = {},
      ey = Nm("iterator"),
      ty = Array.prototype,
      ny = {};
    ny[Nm("toStringTag")] = "z";
    function ry(e) {
      if (null != e) return e[uy] || e["@@iterator"] || Zv[cy(e)];
    }
    function iy(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = Rm(e),
        c = "function" == typeof this ? this : Array,
        u = arguments.length,
        l = 1 < u ? arguments[1] : void 0,
        f = void 0 !== l,
        h = ry(s),
        p = 0;
      if (
        (f && (l = Tv(l, 2 < u ? arguments[2] : void 0, 2)),
        null == h || (c == Array && Qv(h)))
      )
        for (n = new c((t = Am(s.length))); p < t; p++)
          (a = f ? l(s[p], p) : s[p]), Lm(n, p, a);
      else
        for (o = (i = h.call(s)).next, n = new c(); !(r = o.call(i)).done; p++)
          (a = f ? Jv(i, l, [r.value, p], !0) : r.value), Lm(n, p, a);
      return (n.length = p), n;
    }
    var oy = "[object z]" === String(ny),
      ay = Nm("toStringTag"),
      sy =
        "Arguments" ==
        Pg(
          (function () {
            return arguments;
          })()
        ),
      cy = oy
        ? Pg
        : function (e) {
            var t, n, r;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = Object(e)), ay))
              ? n
              : sy
              ? Pg(t)
              : "Object" == (r = Pg(t)) && "function" == typeof t.callee
              ? "Arguments"
              : r;
          },
      uy = Nm("iterator"),
      ly = Nm("iterator"),
      fy = !1;
    try {
      var hy = 0,
        py = {
          next: function () {
            return { done: !!hy++ };
          },
          return: function () {
            fy = !0;
          },
        };
      (py[ly] = function () {
        return this;
      }),
        Array.from(py, function () {
          throw 2;
        });
    } catch (e) {}
    function dy(e, t) {
      if (!t && !fy) return !1;
      var n = !1;
      try {
        var r = {};
        (r[ly] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(r);
      } catch (e) {}
      return n;
    }
    var gy = !dy(function (e) {
      Array.from(e);
    });
    Cm({ target: "Array", stat: !0, forced: gy }, { from: iy });
    var my = $m.includes,
      vy = Ov("indexOf", { ACCESSORS: !0, 1: 0 });
    Cm(
      { target: "Array", proto: !0, forced: !vy },
      {
        includes: function (e) {
          return my(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    ),
      $v("includes");
    var yy,
      by,
      wy,
      _y = !Ag(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      }),
      ky = am("IE_PROTO"),
      Ey = Object.prototype,
      Sy = _y
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = Rm(e)),
              Lg(e, ky)
                ? e[ky]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? Ey
                : null
            );
          },
      Ty = Nm("iterator"),
      xy = !1;
    [].keys &&
      ("next" in (wy = [].keys())
        ? (by = Sy(Sy(wy))) !== Object.prototype && (yy = by)
        : (xy = !0)),
      null == yy && (yy = {}),
      Lg(yy, Ty) ||
        tm(yy, Ty, function () {
          return this;
        });
    function Ay(e, t, n) {
      e &&
        !Lg((e = n ? e : e.prototype), Ly) &&
        Ry(e, Ly, { configurable: !0, value: t });
    }
    function Oy() {
      return this;
    }
    function Py(e, t, n) {
      var r = t + " Iterator";
      return (
        (e.prototype = Wv(Ny, { next: Og(1, n) })),
        Ay(e, r, !1),
        (Zv[r] = Oy),
        e
      );
    }
    function Iy() {
      return this;
    }
    function jy(e, t, n, r, i, o, a) {
      function s(e) {
        if (e === i && g) return g;
        if (!Dy && e in p) return p[e];
        switch (e) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      }
      Py(n, t, r);
      var c,
        u,
        l,
        f = t + " Iterator",
        h = !1,
        p = e.prototype,
        d = p[Fy] || p["@@iterator"] || (i && p[i]),
        g = (!Dy && d) || s(i),
        m = ("Array" == t && p.entries) || d;
      if (
        (m &&
          ((c = Sy(m.call(new e()))),
          Uy !== Object.prototype &&
            c.next &&
            (Sy(c) !== Uy &&
              (My ? My(c, Uy) : "function" != typeof c[Fy] && tm(c, Fy, Iy)),
            Ay(c, f, !0))),
        "values" == i &&
          d &&
          "values" !== d.name &&
          ((h = !0),
          (g = function () {
            return d.call(this);
          })),
        p[Fy] !== g && tm(p, Fy, g),
        (Zv[t] = g),
        i)
      )
        if (
          ((u = {
            values: s("values"),
            keys: o ? g : s("keys"),
            entries: s("entries"),
          }),
          a)
        )
          for (l in u) (!Dy && !h && l in p) || qm(p, l, u[l]);
        else Cm({ target: t, proto: !0, forced: Dy || h }, u);
      return u;
    }
    var Cy = { IteratorPrototype: yy, BUGGY_SAFARI_ITERATORS: xy },
      Ry = em.f,
      Ly = Nm("toStringTag"),
      Ny = Cy.IteratorPrototype,
      My =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var n,
                r = !1,
                e = {};
              try {
                (n = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(e, []),
                  (r = e instanceof Array);
              } catch (n) {}
              return function (e, t) {
                return (
                  Mg(e),
                  (function () {
                    if (!Cg(t) && null !== t)
                      throw TypeError(
                        "Can't set " + String(t) + " as a prototype"
                      );
                  })(),
                  r ? n.call(e, t) : (e.__proto__ = t),
                  e
                );
              };
            })()
          : void 0),
      Uy = Cy.IteratorPrototype,
      Dy = Cy.BUGGY_SAFARI_ITERATORS,
      Fy = Nm("iterator"),
      qy = Fm.set,
      By = Fm.getterFor("Array Iterator"),
      Hy = jy(
        Array,
        "Array",
        function (e, t) {
          qy(this, {
            type: "Array Iterator",
            target: jg(e),
            index: 0,
            kind: t,
          });
        },
        function () {
          var e = By(this),
            t = e.target,
            n = e.kind,
            r = e.index++;
          return !t || r >= t.length
            ? { value: (e.target = void 0), done: !0 }
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: t[r], done: !1 }
            : { value: [r, t[r]], done: !1 };
        },
        "values"
      );
    (Zv.Arguments = Zv.Array), $v("keys"), $v("values"), $v("entries");
    function Vy(e, t) {
      var n = [][e];
      return (
        !!n &&
        Ag(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    }
    var Wy = [].join,
      zy = Yg != Object,
      Yy = Vy("join", ",");
    Cm(
      { target: "Array", proto: !0, forced: zy || !Yy },
      {
        join: function (e) {
          return Wy.call(jg(this), void 0 === e ? "," : e);
        },
      }
    );
    var $y = Iv.map,
      Gy = yv("map"),
      Ky = Ov("map");
    Cm(
      { target: "Array", proto: !0, forced: !Gy || !Ky },
      {
        map: function (e) {
          return $y(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    function Xy(e, t, n) {
      var r, i;
      return (
        My &&
          "function" == typeof (r = t.constructor) &&
          r !== n &&
          Cg((i = r.prototype)) &&
          i !== n.prototype &&
          My(e, i),
        e
      );
    }
    function Jy(n) {
      return function (e) {
        var t = String(Ig(e));
        return (
          1 & n && (t = t.replace(eb, "")), 2 & n && (t = t.replace(tb, "")), t
        );
      };
    }
    function Qy(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        c,
        u = Rg(e, !1);
      if ("string" == typeof u && 2 < u.length)
        if (43 === (t = (u = ab(u)).charCodeAt(0)) || 45 === t) {
          if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === t) {
          switch (u.charCodeAt(1)) {
            case 66:
            case 98:
              (r = 2), (i = 49);
              break;
            case 79:
            case 111:
              (r = 8), (i = 55);
              break;
            default:
              return +u;
          }
          for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
            if ((c = o.charCodeAt(s)) < 48 || i < c) return NaN;
          return parseInt(o, r);
        }
      return +u;
    }
    var Zy = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
      eb = RegExp("^" + Zy + Zy + "*"),
      tb = RegExp(Zy + Zy + "*$"),
      nb = { start: Jy(1), end: Jy(2), trim: Jy(3) },
      rb = Jm.f,
      ib = Qg.f,
      ob = em.f,
      ab = nb.trim,
      sb = Fg.Number,
      cb = sb.prototype,
      ub = "Number" == Pg(Wv(cb));
    if (ov("Number", !sb(" 0o1") || !sb("0b1") || sb("+0x1"))) {
      for (
        var lb,
          fb = function (e) {
            var t = arguments.length < 1 ? 0 : e,
              n = this;
            return n instanceof fb &&
              (ub
                ? Ag(function () {
                    cb.valueOf.call(n);
                  })
                : "Number" != Pg(n))
              ? Xy(new sb(Qy(t)), n, fb)
              : Qy(t);
          },
          hb = qg
            ? rb(sb)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          pb = 0;
        hb.length > pb;
        pb++
      )
        Lg(sb, (lb = hb[pb])) && !Lg(fb, lb) && ob(fb, lb, ib(sb, lb));
      ((fb.prototype = cb).constructor = fb), qm(Fg, "Number", fb);
    }
    var db = Ag(function () {
      Fv(1);
    });
    Cm(
      { target: "Object", stat: !0, forced: db },
      {
        keys: function (e) {
          return Fv(Rm(e));
        },
      }
    );
    var gb = oy
      ? {}.toString
      : function () {
          return "[object " + cy(this) + "]";
        };
    oy || qm(Object.prototype, "toString", gb, { unsafe: !0 });
    function mb() {
      var e = Mg(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    }
    function vb(e, t) {
      return RegExp(e, t);
    }
    var yb,
      bb,
      wb = {
        UNSUPPORTED_Y: Ag(function () {
          var e = vb("a", "y");
          return (e.lastIndex = 2), null != e.exec("abcd");
        }),
        BROKEN_CARET: Ag(function () {
          var e = vb("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        }),
      },
      _b = RegExp.prototype.exec,
      kb = String.prototype.replace,
      Eb = _b,
      Sb =
        ((yb = /a/),
        (bb = /b*/g),
        _b.call(yb, "a"),
        _b.call(bb, "a"),
        0 !== yb.lastIndex || 0 !== bb.lastIndex),
      Tb = wb.UNSUPPORTED_Y || wb.BROKEN_CARET,
      xb = void 0 !== /()??/.exec("")[1];
    (Sb || xb || Tb) &&
      (Eb = function (e) {
        var t,
          n,
          r,
          i,
          o = this,
          a = Tb && o.sticky,
          s = mb.call(o),
          c = o.source,
          u = 0,
          l = e;
        return (
          a &&
            (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
            (l = String(e).slice(o.lastIndex)),
            0 < o.lastIndex &&
              (!o.multiline || (o.multiline && "\n" !== e[o.lastIndex - 1])) &&
              ((c = "(?: " + c + ")"), (l = " " + l), u++),
            (n = new RegExp("^(?:" + c + ")", s))),
          xb && (n = new RegExp("^" + c + "$(?!\\s)", s)),
          Sb && (t = o.lastIndex),
          (r = _b.call(a ? n : o, l)),
          a
            ? r
              ? ((r.input = r.input.slice(u)),
                (r[0] = r[0].slice(u)),
                (r.index = o.lastIndex),
                (o.lastIndex += r[0].length))
              : (o.lastIndex = 0)
            : Sb && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
          xb &&
            r &&
            1 < r.length &&
            kb.call(r[0], n, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      });
    var Ab = Eb;
    Cm({ target: "RegExp", proto: !0, forced: /./.exec !== Ab }, { exec: Ab });
    var Ob = RegExp.prototype,
      Pb = Ob.toString,
      Ib = Ag(function () {
        return "/a/b" != Pb.call({ source: "a", flags: "b" });
      }),
      jb = "toString" != Pb.name;
    (Ib || jb) &&
      qm(
        RegExp.prototype,
        "toString",
        function () {
          var e = Mg(this),
            t = String(e.source),
            n = e.flags;
          return (
            "/" +
            t +
            "/" +
            String(
              void 0 === n && e instanceof RegExp && !("flags" in Ob)
                ? mb.call(e)
                : n
            )
          );
        },
        { unsafe: !0 }
      );
    function Cb(e) {
      var t;
      return Cg(e) && (void 0 !== (t = e[Nb]) ? !!t : "RegExp" == Pg(e));
    }
    function Rb(e) {
      if (Cb(e))
        throw TypeError("The method doesn't accept regular expressions");
      return e;
    }
    function Lb(t) {
      var n = /./;
      try {
        "/./"[t](n);
      } catch (e) {
        try {
          return (n[Mb] = !1), "/./"[t](n);
        } catch (t) {}
      }
      return !1;
    }
    var Nb = Nm("match"),
      Mb = Nm("match");
    Cm(
      { target: "String", proto: !0, forced: !Lb("includes") },
      {
        includes: function (e) {
          return !!~String(Ig(this)).indexOf(
            Rb(e),
            1 < arguments.length ? arguments[1] : void 0
          );
        },
      }
    );
    function Ub(s) {
      return function (e, t) {
        var n,
          r,
          i = String(Ig(e)),
          o = xm(t),
          a = i.length;
        return o < 0 || a <= o
          ? s
            ? ""
            : void 0
          : (n = i.charCodeAt(o)) < 55296 ||
            56319 < n ||
            o + 1 === a ||
            (r = i.charCodeAt(o + 1)) < 56320 ||
            57343 < r
          ? s
            ? i.charAt(o)
            : n
          : s
          ? i.slice(o, o + 2)
          : r - 56320 + ((n - 55296) << 10) + 65536;
      };
    }
    var Db = { codeAt: Ub(!1), charAt: Ub(!0) },
      Fb = Db.charAt,
      qb = Fm.set,
      Bb = Fm.getterFor("String Iterator");
    jy(
      String,
      "String",
      function (e) {
        qb(this, { type: "String Iterator", string: String(e), index: 0 });
      },
      function () {
        var e,
          t = Bb(this),
          n = t.string,
          r = t.index;
        return r >= n.length
          ? { value: void 0, done: !0 }
          : ((e = Fb(n, r)), (t.index += e.length), { value: e, done: !1 });
      }
    );
    function Hb(n, e, t, r) {
      var o,
        i,
        a,
        s,
        c = Nm(n),
        u = !Ag(function () {
          var e = {};
          return (
            (e[c] = function () {
              return 7;
            }),
            7 != ""[n](e)
          );
        }),
        l =
          u &&
          !Ag(function () {
            var e = !1,
              t = /a/;
            return (
              "split" === n &&
                (((t = {}).constructor = {}),
                (t.constructor[Wb] = function () {
                  return t;
                }),
                (t.flags = ""),
                (t[c] = /./[c])),
              (t.exec = function () {
                return (e = !0), null;
              }),
              t[c](""),
              !e
            );
          });
      (u &&
        l &&
        ("replace" !== n || (zb && Yb && !Gb)) &&
        ("split" !== n || Kb)) ||
        ((o = /./[c]),
        (a = (i = t(
          c,
          ""[n],
          function (e, t, n, r, i) {
            return t.exec === Ab
              ? u && !i
                ? { done: !0, value: o.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 };
          },
          {
            REPLACE_KEEPS_$0: Yb,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Gb,
          }
        ))[0]),
        (s = i[1]),
        qm(String.prototype, n, a),
        qm(
          RegExp.prototype,
          c,
          2 == e
            ? function (e, t) {
                return s.call(e, this, t);
              }
            : function (e) {
                return s.call(e, this);
              }
        )),
        r && tm(RegExp.prototype[c], "sham", !0);
    }
    function Vb(e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var r = n.call(e, t);
        if ("object" != typeof r)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return r;
      }
      if ("RegExp" !== Pg(e))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Ab.call(e, t);
    }
    var Wb = Nm("species"),
      zb = !Ag(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      Yb = "$0" === "a".replace(/./, "$0"),
      $b = Nm("replace"),
      Gb = !!/./[$b] && "" === /./[$b]("a", "$0"),
      Kb = !Ag(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      }),
      Xb =
        Object.is ||
        function (e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        };
    Hb("search", 1, function (r, a, s) {
      return [
        function (e) {
          var t = Ig(this),
            n = null == e ? void 0 : e[r];
          return void 0 !== n ? n.call(e, t) : new RegExp(e)[r](String(t));
        },
        function (e) {
          var t = s(a, e, this);
          if (t.done) return t.value;
          var n = Mg(e),
            r = String(this),
            i = n.lastIndex;
          Xb(i, 0) || (n.lastIndex = 0);
          var o = Vb(n, r);
          return (
            Xb(n.lastIndex, i) || (n.lastIndex = i), null === o ? -1 : o.index
          );
        },
      ];
    });
    function Jb(e, t, n) {
      for (var r in t) qm(e, r, t[r], n);
      return e;
    }
    function Qb(e, t, n) {
      if (!(e instanceof t))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    }
    function Zb(e) {
      return e.frozen || (e.frozen = new lw());
    }
    function ew(e, t) {
      return sw(e.entries, function (e) {
        return e[0] === t;
      });
    }
    var tw = !Ag(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      }),
      nw = t(function (e) {
        function n(e) {
          t(e, r, { value: { objectID: "O" + ++i, weakData: {} } });
        }
        var t = em.f,
          r = om("meta"),
          i = 0,
          o =
            Object.isExtensible ||
            function () {
              return !0;
            },
          a = (e.exports = {
            REQUIRED: !1,
            fastKey: function (e, t) {
              if (!Cg(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!Lg(e, r)) {
                if (!o(e)) return "F";
                if (!t) return "E";
                n(e);
              }
              return e[r].objectID;
            },
            getWeakData: function (e, t) {
              if (!Lg(e, r)) {
                if (!o(e)) return !0;
                if (!t) return !1;
                n(e);
              }
              return e[r].weakData;
            },
            onFreeze: function (e) {
              return tw && a.REQUIRED && o(e) && !Lg(e, r) && n(e), e;
            },
          });
        km[r] = !0;
      }),
      rw =
        (nw.REQUIRED,
        nw.fastKey,
        nw.getWeakData,
        nw.onFreeze,
        t(function (e) {
          function p(e, t) {
            (this.stopped = e), (this.result = t);
          }
          (e.exports = function (e, t, n, r, i) {
            var o,
              a,
              s,
              c,
              u,
              l,
              f,
              h = Tv(t, n, r ? 2 : 1);
            if (i) o = e;
            else {
              if ("function" != typeof (a = ry(e)))
                throw TypeError("Target is not iterable");
              if (Qv(a)) {
                for (s = 0, c = Am(e.length); s < c; s++)
                  if (
                    (u = r ? h(Mg((f = e[s]))[0], f[1]) : h(e[s])) &&
                    u instanceof p
                  )
                    return u;
                return new p(!1);
              }
              o = a.call(e);
            }
            for (l = o.next; !(f = l.call(o)).done; )
              if (
                "object" == typeof (u = Jv(o, h, f.value, r)) &&
                u &&
                u instanceof p
              )
                return u;
            return new p(!1);
          }).stop = function (e) {
            return new p(!0, e);
          };
        })),
      iw = nw.getWeakData,
      ow = Fm.set,
      aw = Fm.getterFor,
      sw = Iv.find,
      cw = Iv.findIndex,
      uw = 0,
      lw = function () {
        this.entries = [];
      };
    lw.prototype = {
      get: function (e) {
        var t = ew(this, e);
        if (t) return t[1];
      },
      has: function (e) {
        return !!ew(this, e);
      },
      set: function (e, t) {
        var n = ew(this, e);
        n ? (n[1] = t) : this.entries.push([e, t]);
      },
      delete: function (t) {
        var e = cw(this.entries, function (e) {
          return e[0] === t;
        });
        return ~e && this.entries.splice(e, 1), !!~e;
      },
    };
    var fw = {
        getConstructor: function (e, n, r, i) {
          function o(e, t, n) {
            var r = s(e),
              i = iw(Mg(t), !0);
            return !0 === i ? Zb(r).set(t, n) : (i[r.id] = n), e;
          }
          var a = e(function (e, t) {
              Qb(e, a, n),
                ow(e, { type: n, id: uw++, frozen: void 0 }),
                null != t && rw(t, e[i], e, r);
            }),
            s = aw(n);
          return (
            Jb(a.prototype, {
              delete: function (e) {
                var t = s(this);
                if (!Cg(e)) return !1;
                var n = iw(e);
                return !0 === n
                  ? Zb(t).delete(e)
                  : n && Lg(n, t.id) && delete n[t.id];
              },
              has: function (e) {
                var t = s(this);
                if (!Cg(e)) return !1;
                var n = iw(e);
                return !0 === n ? Zb(t).has(e) : n && Lg(n, t.id);
              },
            }),
            Jb(
              a.prototype,
              r
                ? {
                    get: function (e) {
                      var t = s(this);
                      if (Cg(e)) {
                        var n = iw(e);
                        return !0 === n ? Zb(t).get(e) : n ? n[t.id] : void 0;
                      }
                    },
                    set: function (e, t) {
                      return o(this, e, t);
                    },
                  }
                : {
                    add: function (e) {
                      return o(this, e, !0);
                    },
                  }
            ),
            a
          );
        },
      },
      hw =
        (t(function (e) {
          function t(e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          }
          var r,
            i,
            n,
            o,
            a,
            s,
            c,
            u,
            l,
            f,
            h,
            p,
            d,
            g,
            m,
            v,
            y,
            b,
            w,
            _,
            k,
            E = Fm.enforce,
            S = !Fg.ActiveXObject && "ActiveXObject" in Fg,
            T = Object.isExtensible,
            x = (e.exports =
              ((n = t),
              (o = fw),
              (f = -1 !== (i = "WeakMap").indexOf("Map")),
              (h = -1 !== i.indexOf("Weak")),
              (p = f ? "set" : "add"),
              (d = Fg[i]),
              (g = d && d.prototype),
              (v = {}),
              ov(
                i,
                "function" != typeof (m = d) ||
                  !(
                    h ||
                    (g.forEach &&
                      !Ag(function () {
                        new d().entries().next();
                      }))
                  )
              )
                ? ((m = o.getConstructor(n, i, f, p)), (nw.REQUIRED = !0))
                : ov(i, !0) &&
                  ((s = (a = new m())[p](h ? {} : -0, 1) != a),
                  (c = Ag(function () {
                    a.has(1);
                  })),
                  (u = dy(function (e) {
                    new d(e);
                  })),
                  (l =
                    !h &&
                    Ag(function () {
                      for (var e = new d(), t = 5; t--; ) e[p](t, t);
                      return !e.has(-0);
                    })),
                  u ||
                    (((m = n(function (e, t) {
                      Qb(e, m, i);
                      var n = Xy(new d(), e, m);
                      return null != t && rw(t, n[p], n, f), n;
                    })).prototype = g).constructor = m),
                  (c || l) && (A("delete"), A("has"), f && A("get")),
                  (l || s) && A(p),
                  h && g.clear && delete g.clear),
              (v[i] = m),
              Cm({ global: !0, forced: m != d }, v),
              Ay(m, i),
              h || o.setStrong(m, i, f),
              m));
          function A(e) {
            var n = g[e];
            qm(
              g,
              e,
              "add" == e
                ? function (e) {
                    return n.call(this, 0 === e ? 0 : e), this;
                  }
                : "delete" == e
                ? function (e) {
                    return !(h && !Cg(e)) && n.call(this, 0 === e ? 0 : e);
                  }
                : "get" == e
                ? function (e) {
                    return h && !Cg(e) ? void 0 : n.call(this, 0 === e ? 0 : e);
                  }
                : "has" == e
                ? function (e) {
                    return !(h && !Cg(e)) && n.call(this, 0 === e ? 0 : e);
                  }
                : function (e, t) {
                    return n.call(this, 0 === e ? 0 : e, t), this;
                  }
            );
          }
          vm &&
            S &&
            ((r = fw.getConstructor(t, "WeakMap", !0)),
            (nw.REQUIRED = !0),
            (y = x.prototype),
            (b = y.delete),
            (w = y.has),
            (_ = y.get),
            (k = y.set),
            Jb(y, {
              delete: function (e) {
                if (!Cg(e) || T(e)) return b.call(this, e);
                var t = E(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  b.call(this, e) || t.frozen.delete(e)
                );
              },
              has: function (e) {
                if (!Cg(e) || T(e)) return w.call(this, e);
                var t = E(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  w.call(this, e) || t.frozen.has(e)
                );
              },
              get: function (e) {
                if (!Cg(e) || T(e)) return _.call(this, e);
                var t = E(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  w.call(this, e) ? _.call(this, e) : t.frozen.get(e)
                );
              },
              set: function (e, t) {
                var n;
                return (
                  Cg(e) && !T(e)
                    ? ((n = E(this)).frozen || (n.frozen = new r()),
                      w.call(this, e) ? k.call(this, e, t) : n.frozen.set(e, t))
                    : k.call(this, e, t),
                  this
                );
              },
            }));
        }),
        {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        }),
      pw = Nm("iterator"),
      dw = Nm("toStringTag"),
      gw = Hy.values;
    for (var mw in hw) {
      var vw = Fg[mw],
        yw = vw && vw.prototype;
      if (yw) {
        if (yw[pw] !== gw)
          try {
            tm(yw, pw, gw);
          } catch (e) {
            yw[pw] = gw;
          }
        if ((yw[dw] || tm(yw, dw, mw), hw[mw]))
          for (var bw in Hy)
            if (yw[bw] !== Hy[bw])
              try {
                tm(yw, bw, Hy[bw]);
              } catch (e) {
                yw[bw] = Hy[bw];
              }
      }
    }
    var ww = Iv.every,
      _w = Vy("every"),
      kw = Ov("every");
    Cm(
      { target: "Array", proto: !0, forced: !_w || !kw },
      {
        every: function (e) {
          return ww(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    var Ew = Iv.forEach,
      Sw = Vy("forEach"),
      Tw = Ov("forEach"),
      xw =
        Sw && Tw
          ? [].forEach
          : function (e) {
              return Ew(this, e, 1 < arguments.length ? arguments[1] : void 0);
            };
    Cm(
      { target: "Array", proto: !0, forced: [].forEach != xw },
      { forEach: xw }
    );
    var Aw = $m.indexOf,
      Ow = [].indexOf,
      Pw = !!Ow && 1 / [1].indexOf(1, -0) < 0,
      Iw = Vy("indexOf"),
      jw = Ov("indexOf", { ACCESSORS: !0, 1: 0 });
    Cm(
      { target: "Array", proto: !0, forced: Pw || !Iw || !jw },
      {
        indexOf: function (e) {
          return Pw
            ? Ow.apply(this, arguments) || 0
            : Aw(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    var Cw = Object.assign,
      Rw = Object.defineProperty,
      Lw =
        !Cw ||
        Ag(function () {
          if (
            qg &&
            1 !==
              Cw(
                { b: 1 },
                Cw(
                  Rw({}, "a", {
                    enumerable: !0,
                    get: function () {
                      Rw(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return 1;
          var e = {},
            t = {},
            n = Symbol();
          return (
            (e[n] = 7),
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != Cw({}, e)[n] ||
              "abcdefghijklmnopqrst" != Fv(Cw({}, t)).join("")
          );
        })
          ? function (e, t) {
              for (
                var n = Rm(e), r = arguments.length, i = 1, o = Qm.f, a = Vg.f;
                i < r;

              )
                for (
                  var s,
                    c = Yg(arguments[i++]),
                    u = o ? Fv(c).concat(o(c)) : Fv(c),
                    l = u.length,
                    f = 0;
                  f < l;

                )
                  (s = u[f++]), (qg && !a.call(c, s)) || (n[s] = c[s]);
              return n;
            }
          : Cw;
    Cm(
      { target: "Object", stat: !0, forced: Object.assign !== Lw },
      { assign: Lw }
    );
    function Nw(e, t) {
      var n,
        r = Mg(e).constructor;
      return void 0 === r || null == (n = Mg(r)[Uw]) ? t : Sv(n);
    }
    function Mw(e, t, n) {
      return t + (n ? Dw(e, t).length : 1);
    }
    var Uw = Nm("species"),
      Dw = Db.charAt,
      Fw = [].push,
      qw = Math.min,
      Bw = !Ag(function () {
        return !RegExp(4294967295, "y");
      });
    Hb(
      "split",
      2,
      function (i, m, v) {
        var y =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          1 < ".".split(/()()/).length ||
          "".split(/.?/).length
            ? function (e, t) {
                var n = String(Ig(this)),
                  r = void 0 === t ? 4294967295 : t >>> 0;
                if (0 == r) return [];
                if (void 0 === e) return [n];
                if (!Cb(e)) return m.call(n, e, r);
                for (
                  var i,
                    o,
                    a,
                    s = [],
                    c =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    u = 0,
                    l = new RegExp(e.source, c + "g");
                  (i = Ab.call(l, n)) &&
                  !(
                    (o = l.lastIndex) > u &&
                    (s.push(n.slice(u, i.index)),
                    1 < i.length &&
                      i.index < n.length &&
                      Fw.apply(s, i.slice(1)),
                    (a = i[0].length),
                    (u = o),
                    s.length >= r)
                  );

                )
                  l.lastIndex === i.index && l.lastIndex++;
                return (
                  u === n.length
                    ? (!a && l.test("")) || s.push("")
                    : s.push(n.slice(u)),
                  s.length > r ? s.slice(0, r) : s
                );
              }
            : "0".split(void 0, 0).length
            ? function (e, t) {
                return void 0 === e && 0 === t ? [] : m.call(this, e, t);
              }
            : m;
        return [
          function (e, t) {
            var n = Ig(this),
              r = null == e ? void 0 : e[i];
            return void 0 !== r ? r.call(e, n, t) : y.call(String(n), e, t);
          },
          function (e, t) {
            var n = v(y, e, this, t, y !== m);
            if (n.done) return n.value;
            var r = Mg(e),
              i = String(this),
              o = Nw(r, RegExp),
              a = r.unicode,
              s =
                (r.ignoreCase ? "i" : "") +
                (r.multiline ? "m" : "") +
                (r.unicode ? "u" : "") +
                (Bw ? "y" : "g"),
              c = new o(Bw ? r : "^(?:" + r.source + ")", s),
              u = void 0 === t ? 4294967295 : t >>> 0;
            if (0 == u) return [];
            if (0 === i.length) return null === Vb(c, i) ? [i] : [];
            for (var l = 0, f = 0, h = []; f < i.length; ) {
              c.lastIndex = Bw ? f : 0;
              var p,
                d = Vb(c, Bw ? i : i.slice(f));
              if (
                null === d ||
                (p = qw(Am(c.lastIndex + (Bw ? 0 : f)), i.length)) === l
              )
                f = Mw(i, f, a);
              else {
                if ((h.push(i.slice(l, f)), h.length === u)) return h;
                for (var g = 1; g <= d.length - 1; g++)
                  if ((h.push(d[g]), h.length === u)) return h;
                f = l = p;
              }
            }
            return h.push(i.slice(l)), h;
          },
        ];
      },
      !Bw
    );
    var Hw,
      Vw = nb.trim;
    for (var Ww in (Cm(
      {
        target: "String",
        proto: !0,
        forced:
          ((Hw = "trim"),
          Ag(function () {
            return (
              "\t\n\v\f\r                　\u2028\u2029\ufeff".trim() ||
              "​᠎" != "​᠎".trim() ||
              "\t\n\v\f\r                　\u2028\u2029\ufeff".trim.name !== Hw
            );
          })),
      },
      {
        trim: function () {
          return Vw(this);
        },
      }
    ),
    hw)) {
      var zw = Fg[Ww],
        Yw = zw && zw.prototype;
      if (Yw && Yw.forEach !== xw)
        try {
          tm(Yw, "forEach", xw);
        } catch (e) {
          Yw.forEach = xw;
        }
    }
    function $w(e) {
      return e + 22 + 75 * (e < 26);
    }
    function Gw(e) {
      var t,
        n = [],
        r = (e = (function (e) {
          for (var t = [], n = 0, r = e.length; n < r; ) {
            var i,
              o = e.charCodeAt(n++);
            55296 <= o && o <= 56319 && n < r
              ? 56320 == (64512 & (i = e.charCodeAt(n++)))
                ? t.push(((1023 & o) << 10) + (1023 & i) + 65536)
                : (t.push(o), n--)
              : t.push(o);
          }
          return t;
        })(e)).length,
        i = 128,
        o = 0,
        a = 72;
      for (l = 0; l < e.length; l++) (t = e[l]) < 128 && n.push(c_(t));
      var s = n.length,
        c = s;
      for (s && n.push("-"); c < r; ) {
        for (var u = 2147483647, l = 0; l < e.length; l++)
          (t = e[l]) >= i && t < u && (u = t);
        var f = c + 1;
        if (u - i > s_((2147483647 - o) / f))
          throw RangeError("Overflow: input needs wider integers to process");
        for (o += (u - i) * f, i = u, l = 0; l < e.length; l++) {
          if ((t = e[l]) < i && 2147483647 < ++o)
            throw RangeError("Overflow: input needs wider integers to process");
          if (t == i) {
            for (var h = o, p = 36; ; p += 36) {
              var d = p <= a ? 1 : a + 26 <= p ? 26 : p - a;
              if (h < d) break;
              var g = h - d,
                m = 36 - d;
              n.push(c_($w(d + (g % m)))), (h = s_(g / m));
            }
            n.push(c_($w(h))),
              (a = (function (e, t, n) {
                var r = 0;
                for (
                  e = n ? s_(e / 700) : e >> 1, e += s_(e / t);
                  455 < e;
                  r += 36
                )
                  e = s_(e / 35);
                return s_(r + (36 * e) / (e + 38));
              })(o, f, c == s)),
              (o = 0),
              ++c;
          }
        }
        ++o, ++i;
      }
      return n.join("");
    }
    function Kw(e) {
      var t = ry(e);
      if ("function" != typeof t)
        throw TypeError(String(e) + " is not iterable");
      return Mg(t.call(e));
    }
    function Xw(t) {
      try {
        return decodeURIComponent(t);
      } catch (e) {
        return t;
      }
    }
    function Jw(e) {
      var t = e.replace(g_, " "),
        n = 4;
      try {
        return decodeURIComponent(t);
      } catch (e) {
        for (; n; )
          t = t.replace(
            (function (e) {
              return (
                m_[e - 1] ||
                (m_[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
              );
            })(n--),
            Xw
          );
        return t;
      }
    }
    function Qw(e) {
      return y_[e];
    }
    function Zw(e) {
      return encodeURIComponent(e).replace(v_, Qw);
    }
    function e_(e, t) {
      if (t)
        for (var n, r, i = t.split("&"), o = 0; o < i.length; )
          (n = i[o++]).length &&
            ((r = n.split("=")),
            e.push({ key: Jw(r.shift()), value: Jw(r.join("=")) }));
    }
    function t_(e) {
      (this.entries.length = 0), e_(this.entries, e);
    }
    function n_(e, t) {
      if (e < t) throw TypeError("Not enough arguments");
    }
    var r_ = Nm("iterator"),
      i_ = !Ag(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
          n = e.searchParams,
          r = "";
        return (
          (e.pathname = "c%20d"),
          n.forEach(function (e, t) {
            n.delete("b"), (r += t + e);
          }),
          !n.sort ||
            "http://a/c%20d?a=1&c=3" !== e.href ||
            "3" !== n.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !n[r_] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== r ||
            "x" !== new URL("http://x", void 0).host
        );
      }),
      o_ = /[^\0-\u007E]/,
      a_ = /[.\u3002\uFF0E\uFF61]/g,
      s_ = Math.floor,
      c_ = String.fromCharCode,
      u_ = Tm("fetch"),
      l_ = Tm("Headers"),
      f_ = Nm("iterator"),
      h_ = Fm.set,
      p_ = Fm.getterFor("URLSearchParams"),
      d_ = Fm.getterFor("URLSearchParamsIterator"),
      g_ = /\+/g,
      m_ = Array(4),
      v_ = /[!'()~]|%20/g,
      y_ = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      b_ = Py(
        function (e, t) {
          h_(this, {
            type: "URLSearchParamsIterator",
            iterator: Kw(p_(e).entries),
            kind: t,
          });
        },
        "Iterator",
        function () {
          var e = d_(this),
            t = e.kind,
            n = e.iterator.next(),
            r = n.value;
          return (
            n.done ||
              (n.value =
                "keys" === t
                  ? r.key
                  : "values" === t
                  ? r.value
                  : [r.key, r.value]),
            n
          );
        }
      ),
      w_ = function () {
        Qb(this, w_, "URLSearchParams");
        var e,
          t,
          n,
          r,
          i,
          o,
          a,
          s,
          c,
          u = 0 < arguments.length ? arguments[0] : void 0,
          l = [];
        if (
          (h_(this, {
            type: "URLSearchParams",
            entries: l,
            updateURL: function () {},
            updateSearchParams: t_,
          }),
          void 0 !== u)
        )
          if (Cg(u))
            if ("function" == typeof (e = ry(u)))
              for (n = (t = e.call(u)).next; !(r = n.call(t)).done; ) {
                if (
                  (a = (o = (i = Kw(Mg(r.value))).next).call(i)).done ||
                  (s = o.call(i)).done ||
                  !o.call(i).done
                )
                  throw TypeError("Expected sequence with length 2");
                l.push({ key: a.value + "", value: s.value + "" });
              }
            else for (c in u) Lg(u, c) && l.push({ key: c, value: u[c] + "" });
          else
            e_(
              l,
              "string" == typeof u
                ? "?" === u.charAt(0)
                  ? u.slice(1)
                  : u
                : u + ""
            );
      },
      __ = w_.prototype;
    Jb(
      __,
      {
        append: function (e, t) {
          n_(arguments.length, 2);
          var n = p_(this);
          n.entries.push({ key: e + "", value: t + "" }), n.updateURL();
        },
        delete: function (e) {
          n_(arguments.length, 1);
          for (
            var t = p_(this), n = t.entries, r = e + "", i = 0;
            i < n.length;

          )
            n[i].key === r ? n.splice(i, 1) : i++;
          t.updateURL();
        },
        get: function (e) {
          n_(arguments.length, 1);
          for (var t = p_(this).entries, n = e + "", r = 0; r < t.length; r++)
            if (t[r].key === n) return t[r].value;
          return null;
        },
        getAll: function (e) {
          n_(arguments.length, 1);
          for (
            var t = p_(this).entries, n = e + "", r = [], i = 0;
            i < t.length;
            i++
          )
            t[i].key === n && r.push(t[i].value);
          return r;
        },
        has: function (e) {
          n_(arguments.length, 1);
          for (var t = p_(this).entries, n = e + "", r = 0; r < t.length; )
            if (t[r++].key === n) return !0;
          return !1;
        },
        set: function (e, t) {
          n_(arguments.length, 1);
          for (
            var n,
              r = p_(this),
              i = r.entries,
              o = !1,
              a = e + "",
              s = t + "",
              c = 0;
            c < i.length;
            c++
          )
            (n = i[c]).key === a &&
              (o ? i.splice(c--, 1) : ((o = !0), (n.value = s)));
          o || i.push({ key: a, value: s }), r.updateURL();
        },
        sort: function () {
          for (
            var e,
              t,
              n = p_(this),
              r = n.entries,
              i = r.slice(),
              o = (r.length = 0);
            o < i.length;
            o++
          ) {
            for (e = i[o], t = 0; t < o; t++)
              if (r[t].key > e.key) {
                r.splice(t, 0, e);
                break;
              }
            t === o && r.push(e);
          }
          n.updateURL();
        },
        forEach: function (e) {
          for (
            var t,
              n = p_(this).entries,
              r = Tv(e, 1 < arguments.length ? arguments[1] : void 0, 3),
              i = 0;
            i < n.length;

          )
            r((t = n[i++]).value, t.key, this);
        },
        keys: function () {
          return new b_(this, "keys");
        },
        values: function () {
          return new b_(this, "values");
        },
        entries: function () {
          return new b_(this, "entries");
        },
      },
      { enumerable: !0 }
    ),
      qm(__, f_, __.entries),
      qm(
        __,
        "toString",
        function () {
          for (var e, t = p_(this).entries, n = [], r = 0; r < t.length; )
            (e = t[r++]), n.push(Zw(e.key) + "=" + Zw(e.value));
          return n.join("&");
        },
        { enumerable: !0 }
      ),
      Ay(w_, "URLSearchParams"),
      Cm({ global: !0, forced: !i_ }, { URLSearchParams: w_ }),
      i_ ||
        "function" != typeof u_ ||
        "function" != typeof l_ ||
        Cm(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (e) {
              var t,
                n,
                r,
                i = [e];
              return (
                1 < arguments.length &&
                  (Cg((t = arguments[1])) &&
                    ((n = t.body),
                    "URLSearchParams" === cy(n) &&
                      ((r = t.headers ? new l_(t.headers) : new l_()).has(
                        "content-type"
                      ) ||
                        r.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ),
                      (t = Wv(t, {
                        body: Og(0, String(n)),
                        headers: Og(0, r),
                      })))),
                  i.push(t)),
                u_.apply(this, i)
              );
            },
          }
        );
    function k_(e, i) {
      var t, n, r;
      if ("[" == i.charAt(0)) {
        if ("]" != i.charAt(i.length - 1)) return "Invalid host";
        if (!(t = ek(i.slice(1, -1)))) return "Invalid host";
        e.host = t;
      } else if (sk(e)) {
        if (
          ((i = (function () {
            for (
              var e,
                t = [],
                n = i.toLowerCase().replace(a_, ".").split("."),
                r = 0;
              r < n.length;
              r++
            )
              (e = n[r]), t.push(o_.test(e) ? "xn--" + Gw(e) : e);
            return t.join(".");
          })()),
          K_.test(i))
        )
          return "Invalid host";
        if (null === (t = Z_(i))) return "Invalid host";
        e.host = t;
      } else {
        if (X_.test(i)) return "Invalid host";
        for (t = "", n = iy(i), r = 0; r < n.length; r++) t += ok(n[r], tk);
        e.host = t;
      }
    }
    function E_(e) {
      var t, n, r, i;
      if ("number" == typeof e) {
        for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), (e = q_(e / 256));
        return t.join(".");
      }
      if ("object" != typeof e) return e;
      for (
        t = "",
          r = (function (e) {
            for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
              0 !== e[o]
                ? (n < i && ((t = r), (n = i)), (r = null), (i = 0))
                : (null === r && (r = o), ++i);
            return n < i && ((t = r), (n = i)), t;
          })(e),
          n = 0;
        n < 8;
        n++
      )
        (i && 0 === e[n]) ||
          ((i = i && !1),
          r === n
            ? ((t += n ? ":" : "::"), (i = !0))
            : ((t += e[n].toString(16)), n < 7 && (t += ":")));
      return "[" + t + "]";
    }
    function S_(e) {
      return "" != e.username || "" != e.password;
    }
    function T_(e) {
      return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
    }
    function x_(e, t) {
      var n;
      return (
        2 == e.length &&
        H_.test(e.charAt(0)) &&
        (":" == (n = e.charAt(1)) || (!t && "|" == n))
      );
    }
    function A_(e) {
      var t;
      return (
        1 < e.length &&
        x_(e.slice(0, 2)) &&
        (2 == e.length ||
          "/" === (t = e.charAt(2)) ||
          "\\" === t ||
          "?" === t ||
          "#" === t)
      );
    }
    function O_(e) {
      var t = e.path,
        n = t.length;
      !n || ("file" == e.scheme && 1 == n && x_(t[0], !0)) || t.pop();
    }
    function P_(e, t, n, r) {
      var i,
        o,
        a,
        s,
        c,
        u,
        l = n || ck,
        f = 0,
        h = "",
        p = !1,
        d = !1,
        g = !1;
      for (
        n ||
          ((e.scheme = ""),
          (e.username = ""),
          (e.password = ""),
          (e.host = null),
          (e.port = null),
          (e.path = []),
          (e.query = null),
          (e.fragment = null),
          (e.cannotBeABaseURL = !1),
          (t = t.replace(J_, ""))),
          t = t.replace(Q_, ""),
          i = iy(t);
        f <= i.length;

      ) {
        switch (((o = i[f]), l)) {
          case ck:
            if (!o || !H_.test(o)) {
              if (n) return "Invalid scheme";
              l = lk;
              continue;
            }
            (h += o.toLowerCase()), (l = uk);
            break;
          case uk:
            if (o && (V_.test(o) || "+" == o || "-" == o || "." == o))
              h += o.toLowerCase();
            else {
              if (":" != o) {
                if (n) return "Invalid scheme";
                (h = ""), (l = lk), (f = 0);
                continue;
              }
              if (
                n &&
                (sk(e) != Lg(ak, h) ||
                  ("file" == h && (S_(e) || null !== e.port)) ||
                  ("file" == e.scheme && !e.host))
              )
                return;
              if (((e.scheme = h), n))
                return void (
                  sk(e) &&
                  ak[e.scheme] == e.port &&
                  (e.port = null)
                );
              (h = ""),
                "file" == e.scheme
                  ? (l = _k)
                  : sk(e) && r && r.scheme == e.scheme
                  ? (l = fk)
                  : sk(e)
                  ? (l = gk)
                  : "/" == i[f + 1]
                  ? ((l = hk), f++)
                  : ((e.cannotBeABaseURL = !0), e.path.push(""), (l = xk));
            }
            break;
          case lk:
            if (!r || (r.cannotBeABaseURL && "#" != o)) return "Invalid scheme";
            if (r.cannotBeABaseURL && "#" == o) {
              (e.scheme = r.scheme),
                (e.path = r.path.slice()),
                (e.query = r.query),
                (e.fragment = ""),
                (e.cannotBeABaseURL = !0),
                (l = Ok);
              break;
            }
            l = "file" == r.scheme ? _k : pk;
            continue;
          case fk:
            if ("/" != o || "/" != i[f + 1]) {
              l = pk;
              continue;
            }
            (l = mk), f++;
            break;
          case hk:
            if ("/" == o) {
              l = vk;
              break;
            }
            l = Tk;
            continue;
          case pk:
            if (((e.scheme = r.scheme), null == o))
              (e.username = r.username),
                (e.password = r.password),
                (e.host = r.host),
                (e.port = r.port),
                (e.path = r.path.slice()),
                (e.query = r.query);
            else if ("/" == o || ("\\" == o && sk(e))) l = dk;
            else if ("?" == o)
              (e.username = r.username),
                (e.password = r.password),
                (e.host = r.host),
                (e.port = r.port),
                (e.path = r.path.slice()),
                (e.query = ""),
                (l = Ak);
            else {
              if ("#" != o) {
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (e.path = r.path.slice()),
                  e.path.pop(),
                  (l = Tk);
                continue;
              }
              (e.username = r.username),
                (e.password = r.password),
                (e.host = r.host),
                (e.port = r.port),
                (e.path = r.path.slice()),
                (e.query = r.query),
                (e.fragment = ""),
                (l = Ok);
            }
            break;
          case dk:
            if (!sk(e) || ("/" != o && "\\" != o)) {
              if ("/" != o) {
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (l = Tk);
                continue;
              }
              l = vk;
            } else l = mk;
            break;
          case gk:
            if (((l = mk), "/" != o || "/" != h.charAt(f + 1))) continue;
            f++;
            break;
          case mk:
            if ("/" == o || "\\" == o) break;
            l = vk;
            continue;
          case vk:
            if ("@" == o) {
              p && (h = "%40" + h), (p = !0), (a = iy(h));
              for (var m = 0; m < a.length; m++) {
                var v,
                  y = a[m];
                ":" != y || g
                  ? ((v = ok(y, ik)), g ? (e.password += v) : (e.username += v))
                  : (g = !0);
              }
              h = "";
            } else if (
              null == o ||
              "/" == o ||
              "?" == o ||
              "#" == o ||
              ("\\" == o && sk(e))
            ) {
              if (p && "" == h) return "Invalid authority";
              (f -= iy(h).length + 1), (h = ""), (l = yk);
            } else h += o;
            break;
          case yk:
          case bk:
            if (n && "file" == e.scheme) {
              l = Ek;
              continue;
            }
            if (":" != o || d) {
              if (
                null == o ||
                "/" == o ||
                "?" == o ||
                "#" == o ||
                ("\\" == o && sk(e))
              ) {
                if (sk(e) && "" == h) return "Invalid host";
                if (n && "" == h && (S_(e) || null !== e.port)) return;
                if ((s = k_(e, h))) return s;
                if (((h = ""), (l = Sk), n)) return;
                continue;
              }
              "[" == o ? (d = !0) : "]" == o && (d = !1), (h += o);
            } else {
              if ("" == h) return "Invalid host";
              if ((s = k_(e, h))) return s;
              if (((h = ""), (l = wk), n == bk)) return;
            }
            break;
          case wk:
            if (!W_.test(o)) {
              if (
                null == o ||
                "/" == o ||
                "?" == o ||
                "#" == o ||
                ("\\" == o && sk(e)) ||
                n
              ) {
                if ("" != h) {
                  var b = parseInt(h, 10);
                  if (65535 < b) return "Invalid port";
                  (e.port = sk(e) && b === ak[e.scheme] ? null : b), (h = "");
                }
                if (n) return;
                l = Sk;
                continue;
              }
              return "Invalid port";
            }
            h += o;
            break;
          case _k:
            if (((e.scheme = "file"), "/" == o || "\\" == o)) l = kk;
            else {
              if (!r || "file" != r.scheme) {
                l = Tk;
                continue;
              }
              if (null == o)
                (e.host = r.host),
                  (e.path = r.path.slice()),
                  (e.query = r.query);
              else if ("?" == o)
                (e.host = r.host),
                  (e.path = r.path.slice()),
                  (e.query = ""),
                  (l = Ak);
              else {
                if ("#" != o) {
                  A_(i.slice(f).join("")) ||
                    ((e.host = r.host), (e.path = r.path.slice()), O_(e)),
                    (l = Tk);
                  continue;
                }
                (e.host = r.host),
                  (e.path = r.path.slice()),
                  (e.query = r.query),
                  (e.fragment = ""),
                  (l = Ok);
              }
            }
            break;
          case kk:
            if ("/" == o || "\\" == o) {
              l = Ek;
              break;
            }
            r &&
              "file" == r.scheme &&
              !A_(i.slice(f).join("")) &&
              (x_(r.path[0], !0) ? e.path.push(r.path[0]) : (e.host = r.host)),
              (l = Tk);
            continue;
          case Ek:
            if (null == o || "/" == o || "\\" == o || "?" == o || "#" == o) {
              if (!n && x_(h)) l = Tk;
              else if ("" == h) {
                if (((e.host = ""), n)) return;
                l = Sk;
              } else {
                if ((s = k_(e, h))) return s;
                if (("localhost" == e.host && (e.host = ""), n)) return;
                (h = ""), (l = Sk);
              }
              continue;
            }
            h += o;
            break;
          case Sk:
            if (sk(e)) {
              if (((l = Tk), "/" != o && "\\" != o)) continue;
            } else if (n || "?" != o)
              if (n || "#" != o) {
                if (null != o && ((l = Tk), "/" != o)) continue;
              } else (e.fragment = ""), (l = Ok);
            else (e.query = ""), (l = Ak);
            break;
          case Tk:
            if (
              null == o ||
              "/" == o ||
              ("\\" == o && sk(e)) ||
              (!n && ("?" == o || "#" == o))
            ) {
              if (
                (".." === (c = (c = h).toLowerCase()) ||
                "%2e." === c ||
                ".%2e" === c ||
                "%2e%2e" === c
                  ? (O_(e), "/" == o || ("\\" == o && sk(e)) || e.path.push(""))
                  : "." === (u = h) || "%2e" === u.toLowerCase()
                  ? "/" == o || ("\\" == o && sk(e)) || e.path.push("")
                  : ("file" == e.scheme &&
                      !e.path.length &&
                      x_(h) &&
                      (e.host && (e.host = ""), (h = h.charAt(0) + ":")),
                    e.path.push(h)),
                (h = ""),
                "file" == e.scheme && (null == o || "?" == o || "#" == o))
              )
                for (; 1 < e.path.length && "" === e.path[0]; ) e.path.shift();
              "?" == o
                ? ((e.query = ""), (l = Ak))
                : "#" == o && ((e.fragment = ""), (l = Ok));
            } else h += ok(o, rk);
            break;
          case xk:
            "?" == o
              ? ((e.query = ""), (l = Ak))
              : "#" == o
              ? ((e.fragment = ""), (l = Ok))
              : null != o && (e.path[0] += ok(o, tk));
            break;
          case Ak:
            n || "#" != o
              ? null != o &&
                ("'" == o && sk(e)
                  ? (e.query += "%27")
                  : (e.query += "#" == o ? "%23" : ok(o, tk)))
              : ((e.fragment = ""), (l = Ok));
            break;
          case Ok:
            null != o && (e.fragment += ok(o, nk));
        }
        f++;
      }
    }
    function I_(e, t) {
      return { get: e, set: t, configurable: !0, enumerable: !0 };
    }
    var j_,
      C_,
      R_ = { URLSearchParams: w_, getState: p_ },
      L_ = Db.codeAt,
      N_ = Fg.URL,
      M_ = R_.URLSearchParams,
      U_ = R_.getState,
      D_ = Fm.set,
      F_ = Fm.getterFor("URL"),
      q_ = Math.floor,
      B_ = Math.pow,
      H_ = /[A-Za-z]/,
      V_ = /[\d+-.A-Za-z]/,
      W_ = /\d/,
      z_ = /^(0x|0X)/,
      Y_ = /^[0-7]+$/,
      $_ = /^\d+$/,
      G_ = /^[\dA-Fa-f]+$/,
      K_ = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      X_ = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      J_ = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      Q_ = /[\u0009\u000A\u000D]/g,
      Z_ = function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          c = e.split(".");
        if ((c.length && "" == c[c.length - 1] && c.pop(), 4 < (t = c.length)))
          return e;
        for (n = [], r = 0; r < t; r++) {
          if ("" == (i = c[r])) return e;
          if (
            ((o = 10),
            1 < i.length &&
              "0" == i.charAt(0) &&
              ((o = z_.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
            "" === i)
          )
            a = 0;
          else {
            if (!(10 == o ? $_ : 8 == o ? Y_ : G_).test(i)) return e;
            a = parseInt(i, o);
          }
          n.push(a);
        }
        for (r = 0; r < t; r++)
          if (((a = n[r]), r == t - 1)) {
            if (a >= B_(256, 5 - t)) return null;
          } else if (255 < a) return null;
        for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * B_(256, 3 - r);
        return s;
      },
      ek = function (e) {
        function t() {
          return e.charAt(h);
        }
        var n,
          r,
          i,
          o,
          a,
          s,
          c,
          u = [0, 0, 0, 0, 0, 0, 0, 0],
          l = 0,
          f = null,
          h = 0;
        if (":" == t()) {
          if (":" != e.charAt(1)) return;
          (h += 2), (f = ++l);
        }
        for (; t(); ) {
          if (8 == l) return;
          if (":" != t()) {
            for (n = r = 0; r < 4 && G_.test(t()); )
              (n = 16 * n + parseInt(t(), 16)), h++, r++;
            if ("." == t()) {
              if (0 == r) return;
              if (((h -= r), 6 < l)) return;
              for (i = 0; t(); ) {
                if (((o = null), 0 < i)) {
                  if (!("." == t() && i < 4)) return;
                  h++;
                }
                if (!W_.test(t())) return;
                for (; W_.test(t()); ) {
                  if (((a = parseInt(t(), 10)), null === o)) o = a;
                  else {
                    if (0 == o) return;
                    o = 10 * o + a;
                  }
                  if (255 < o) return;
                  h++;
                }
                (u[l] = 256 * u[l] + o), (2 != ++i && 4 != i) || l++;
              }
              if (4 != i) return;
              break;
            }
            if (":" == t()) {
              if ((h++, !t())) return;
            } else if (t()) return;
            u[l++] = n;
          } else {
            if (null !== f) return;
            h++, (f = ++l);
          }
        }
        if (null !== f)
          for (s = l - f, l = 7; 0 != l && 0 < s; )
            (c = u[l]), (u[l--] = u[f + s - 1]), (u[f + --s] = c);
        else if (8 != l) return;
        return u;
      },
      tk = {},
      nk = Lw({}, tk, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
      rk = Lw({}, nk, { "#": 1, "?": 1, "{": 1, "}": 1 }),
      ik = Lw({}, rk, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      ok = function (e, t) {
        var n = L_(e, 0);
        return 32 < n && n < 127 && !Lg(t, e) ? e : encodeURIComponent(e);
      },
      ak = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      sk = function (e) {
        return Lg(ak, e.scheme);
      },
      ck = {},
      uk = {},
      lk = {},
      fk = {},
      hk = {},
      pk = {},
      dk = {},
      gk = {},
      mk = {},
      vk = {},
      yk = {},
      bk = {},
      wk = {},
      _k = {},
      kk = {},
      Ek = {},
      Sk = {},
      Tk = {},
      xk = {},
      Ak = {},
      Ok = {},
      Pk = function (e) {
        var t,
          n,
          r = Qb(this, Pk, "URL"),
          i = 1 < arguments.length ? arguments[1] : void 0,
          o = String(e),
          a = D_(r, { type: "URL" });
        if (void 0 !== i)
          if (i instanceof Pk) t = F_(i);
          else if ((n = P_((t = {}), String(i)))) throw TypeError(n);
        if ((n = P_(a, o, null, t))) throw TypeError(n);
        var s = (a.searchParams = new M_()),
          c = U_(s);
        c.updateSearchParams(a.query),
          (c.updateURL = function () {
            a.query = String(s) || null;
          }),
          qg ||
            ((r.href = jk.call(r)),
            (r.origin = Ck.call(r)),
            (r.protocol = Rk.call(r)),
            (r.username = Lk.call(r)),
            (r.password = Nk.call(r)),
            (r.host = Mk.call(r)),
            (r.hostname = Uk.call(r)),
            (r.port = Dk.call(r)),
            (r.pathname = Fk.call(r)),
            (r.search = qk.call(r)),
            (r.searchParams = Bk.call(r)),
            (r.hash = Hk.call(r)));
      },
      Ik = Pk.prototype,
      jk = function () {
        var e = F_(this),
          t = e.scheme,
          n = e.username,
          r = e.password,
          i = e.host,
          o = e.port,
          a = e.path,
          s = e.query,
          c = e.fragment,
          u = t + ":";
        return (
          null !== i
            ? ((u += "//"),
              S_(e) && (u += n + (r ? ":" + r : "") + "@"),
              (u += E_(i)),
              null !== o && (u += ":" + o))
            : "file" == t && (u += "//"),
          (u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : ""),
          null !== s && (u += "?" + s),
          null !== c && (u += "#" + c),
          u
        );
      },
      Ck = function () {
        var e = F_(this),
          t = e.scheme,
          n = e.port;
        if ("blob" == t)
          try {
            return new URL(t.path[0]).origin;
          } catch (e) {
            return "null";
          }
        return "file" != t && sk(e)
          ? t + "://" + E_(e.host) + (null !== n ? ":" + n : "")
          : "null";
      },
      Rk = function () {
        return F_(this).scheme + ":";
      },
      Lk = function () {
        return F_(this).username;
      },
      Nk = function () {
        return F_(this).password;
      },
      Mk = function () {
        var e = F_(this),
          t = e.host,
          n = e.port;
        return null === t ? "" : null === n ? E_(t) : E_(t) + ":" + n;
      },
      Uk = function () {
        var e = F_(this).host;
        return null === e ? "" : E_(e);
      },
      Dk = function () {
        var e = F_(this).port;
        return null === e ? "" : String(e);
      },
      Fk = function () {
        var e = F_(this),
          t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
      },
      qk = function () {
        var e = F_(this).query;
        return e ? "?" + e : "";
      },
      Bk = function () {
        return F_(this).searchParams;
      },
      Hk = function () {
        var e = F_(this).fragment;
        return e ? "#" + e : "";
      };
    qg &&
      qv(Ik, {
        href: I_(jk, function (e) {
          var t = F_(this),
            n = String(e),
            r = P_(t, n);
          if (r) throw TypeError(r);
          U_(t.searchParams).updateSearchParams(t.query);
        }),
        origin: I_(Ck),
        protocol: I_(Rk, function (e) {
          var t = F_(this);
          P_(t, String(e) + ":", ck);
        }),
        username: I_(Lk, function (e) {
          var t = F_(this),
            n = iy(String(e));
          if (!T_(t)) {
            t.username = "";
            for (var r = 0; r < n.length; r++) t.username += ok(n[r], ik);
          }
        }),
        password: I_(Nk, function (e) {
          var t = F_(this),
            n = iy(String(e));
          if (!T_(t)) {
            t.password = "";
            for (var r = 0; r < n.length; r++) t.password += ok(n[r], ik);
          }
        }),
        host: I_(Mk, function (e) {
          var t = F_(this);
          t.cannotBeABaseURL || P_(t, String(e), yk);
        }),
        hostname: I_(Uk, function (e) {
          var t = F_(this);
          t.cannotBeABaseURL || P_(t, String(e), bk);
        }),
        port: I_(Dk, function (e) {
          var t = F_(this);
          T_(t) || ("" == (e = String(e)) ? (t.port = null) : P_(t, e, wk));
        }),
        pathname: I_(Fk, function (e) {
          var t = F_(this);
          t.cannotBeABaseURL || ((t.path = []), P_(t, e + "", Sk));
        }),
        search: I_(qk, function (e) {
          var t = F_(this);
          "" == (e = String(e))
            ? (t.query = null)
            : ("?" == e.charAt(0) && (e = e.slice(1)),
              (t.query = ""),
              P_(t, e, Ak)),
            U_(t.searchParams).updateSearchParams(t.query);
        }),
        searchParams: I_(Bk),
        hash: I_(Hk, function (e) {
          var t = F_(this);
          "" != (e = String(e))
            ? ("#" == e.charAt(0) && (e = e.slice(1)),
              (t.fragment = ""),
              P_(t, e, Ok))
            : (t.fragment = null);
        }),
      }),
      qm(
        Ik,
        "toJSON",
        function () {
          return jk.call(this);
        },
        { enumerable: !0 }
      ),
      qm(
        Ik,
        "toString",
        function () {
          return jk.call(this);
        },
        { enumerable: !0 }
      ),
      N_ &&
        ((j_ = N_.createObjectURL),
        (C_ = N_.revokeObjectURL),
        j_ &&
          qm(Pk, "createObjectURL", function (e) {
            return j_.apply(N_, arguments);
          }),
        C_ &&
          qm(Pk, "revokeObjectURL", function (e) {
            return C_.apply(N_, arguments);
          })),
      Ay(Pk, "URL"),
      Cm({ global: !0, forced: !i_, sham: !qg }, { URL: Pk });
    var Vk = Iv.some,
      Wk = Vy("some"),
      zk = Ov("some");
    Cm(
      { target: "Array", proto: !0, forced: !Wk || !zk },
      {
        some: function (e) {
          return Vk(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    var Yk =
        "".repeat ||
        function (e) {
          var t = String(Ig(this)),
            n = "",
            r = xm(e);
          if (r < 0 || r == 1 / 0)
            throw RangeError("Wrong number of repetitions");
          for (; 0 < r; (r >>>= 1) && (t += t)) 1 & r && (n += t);
          return n;
        },
      $k = (1).toFixed,
      Gk = Math.floor,
      Kk = function (e, t, n) {
        return 0 === t
          ? n
          : t % 2 == 1
          ? Kk(e, t - 1, n * e)
          : Kk(e * e, t / 2, n);
      },
      Xk =
        ($k &&
          ("0.000" !== (8e-5).toFixed(3) ||
            "1" !== (0.9).toFixed(0) ||
            "1.25" !== (1.255).toFixed(2) ||
            "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
        !Ag(function () {
          $k.call({});
        });
    Cm(
      { target: "Number", proto: !0, forced: Xk },
      {
        toFixed: function (e) {
          function t(e, t) {
            for (var n = -1, r = t; ++n < 6; )
              (r += e * l[n]), (l[n] = r % 1e7), (r = Gk(r / 1e7));
          }
          function n(e) {
            for (var t = 6, n = 0; 0 <= --t; )
              (n += l[t]), (l[t] = Gk(n / e)), (n = (n % e) * 1e7);
          }
          function r() {
            for (var e, t = 6, n = ""; 0 <= --t; ) {
              ("" === n && 0 !== t && 0 === l[t]) ||
                ((e = String(l[t])),
                (n = "" === n ? e : n + Yk.call("0", 7 - e.length) + e));
            }
            return n;
          }
          var i,
            o,
            a,
            s,
            c = (function (e) {
              if ("number" != typeof e && "Number" != Pg(e))
                throw TypeError("Incorrect invocation");
              return +e;
            })(this),
            u = xm(e),
            l = [0, 0, 0, 0, 0, 0],
            f = "",
            h = "0";
          if (u < 0 || 20 < u) throw RangeError("Incorrect fraction digits");
          if (c != c) return "NaN";
          if (c <= -1e21 || 1e21 <= c) return String(c);
          if ((c < 0 && ((f = "-"), (c = -c)), 1e-21 < c))
            if (
              ((o =
                (i =
                  (function () {
                    for (var e = 0, t = c * Kk(2, 69, 1); 4096 <= t; )
                      (e += 12), (t /= 4096);
                    for (; 2 <= t; ) (e += 1), (t /= 2);
                    return e;
                  })() - 69) < 0
                  ? c * Kk(2, -i, 1)
                  : c / Kk(2, i, 1)),
              (o *= 4503599627370496),
              0 < (i = 52 - i))
            ) {
              for (t(0, o), a = u; 7 <= a; ) t(1e7, 0), (a -= 7);
              for (t(Kk(10, a, 1), 0), a = i - 1; 23 <= a; )
                n(1 << 23), (a -= 23);
              n(1 << a), t(1, 1), n(2), (h = r());
            } else t(0, o), t(1 << -i, 0), (h = r() + Yk.call("0", u));
          return 0 < u
            ? f +
                ((s = h.length) <= u
                  ? "0." + Yk.call("0", u - s) + h
                  : h.slice(0, s - u) + "." + h.slice(s - u))
            : f + h;
        },
      }
    );
    function Jk(s) {
      return function (e) {
        for (var t, n = jg(e), r = Fv(n), i = r.length, o = 0, a = []; o < i; )
          (t = r[o++]), (qg && !Qk.call(n, t)) || a.push(s ? [t, n[t]] : n[t]);
        return a;
      };
    }
    var Qk = Vg.f,
      Zk = { entries: Jk(!0), values: Jk(!1) },
      eE = Zk.entries;
    Cm(
      { target: "Object", stat: !0 },
      {
        entries: function (e) {
          return eE(e);
        },
      }
    );
    var tE = Zk.values;
    Cm(
      { target: "Object", stat: !0 },
      {
        values: function (e) {
          return tE(e);
        },
      }
    );
    var nE = Math.max,
      rE = Math.min,
      iE = Math.floor,
      oE = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      aE = /\$([$&'`]|\d\d?)/g;
    Hb("replace", 2, function (i, _, k, e) {
      var E = e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        S = e.REPLACE_KEEPS_$0,
        T = E ? "$" : "$0";
      return [
        function (e, t) {
          var n = Ig(this),
            r = null == e ? void 0 : e[i];
          return void 0 !== r ? r.call(e, n, t) : _.call(String(n), e, t);
        },
        function (e, t) {
          if ((!E && S) || ("string" == typeof t && -1 === t.indexOf(T))) {
            var n = k(_, e, this, t);
            if (n.done) return n.value;
          }
          var r = Mg(e),
            i = String(this),
            o = "function" == typeof t;
          o || (t = String(t));
          var a,
            s = r.global;
          s && ((a = r.unicode), (r.lastIndex = 0));
          for (var c = []; ; ) {
            var u = Vb(r, i);
            if (null === u) break;
            if ((c.push(u), !s)) break;
            "" === String(u[0]) && (r.lastIndex = Mw(i, Am(r.lastIndex), a));
          }
          for (var l, f = "", h = 0, p = 0; p < c.length; p++) {
            u = c[p];
            for (
              var d = String(u[0]),
                g = nE(rE(xm(u.index), i.length), 0),
                m = [],
                v = 1;
              v < u.length;
              v++
            )
              m.push(void 0 === (l = u[v]) ? l : String(l));
            var y,
              b = u.groups,
              w = o
                ? ((y = [d].concat(m, g, i)),
                  void 0 !== b && y.push(b),
                  String(t.apply(void 0, y)))
                : (function (o, a, s, c, u, e) {
                    var l = s + o.length,
                      f = c.length,
                      t = aE;
                    return (
                      void 0 !== u && ((u = Rm(u)), (t = oE)),
                      _.call(e, t, function (e, t) {
                        var n;
                        switch (t.charAt(0)) {
                          case "$":
                            return "$";
                          case "&":
                            return o;
                          case "`":
                            return a.slice(0, s);
                          case "'":
                            return a.slice(l);
                          case "<":
                            n = u[t.slice(1, -1)];
                            break;
                          default:
                            var r = +t;
                            if (0 == r) return e;
                            if (f < r) {
                              var i = iE(r / 10);
                              return 0 !== i && i <= f
                                ? void 0 === c[i - 1]
                                  ? t.charAt(1)
                                  : c[i - 1] + t.charAt(1)
                                : e;
                            }
                            n = c[r - 1];
                        }
                        return void 0 === n ? "" : n;
                      })
                    );
                  })(d, i, g, m, b, t);
            h <= g && ((f += i.slice(h, g) + w), (h = g + d.length));
          }
          return f + i.slice(h);
        },
      ];
    });
    function sE(e, t) {
      var n = (IE[e] = Wv(SE.prototype));
      return (
        _E(n, { type: "Symbol", tag: e, description: t }),
        qg || (n.description = t),
        n
      );
    }
    function cE(t, e) {
      Mg(t);
      var n = jg(e),
        r = Fv(n).concat(BE(n));
      return (
        yE(r, function (e) {
          (qg && !qE.call(n, e)) || FE(t, e, n[e]);
        }),
        t
      );
    }
    function uE(e, t) {
      var n = jg(e),
        r = Rg(t, !0);
      if (n !== EE || !Lg(IE, r) || Lg(jE, r)) {
        var i = xE(n, r);
        return (
          !i || !Lg(IE, r) || (Lg(n, bE) && n[bE][r]) || (i.enumerable = !0), i
        );
      }
    }
    function lE(e) {
      var t = OE(jg(e)),
        n = [];
      return (
        yE(t, function (e) {
          Lg(IE, e) || Lg(km, e) || n.push(e);
        }),
        n
      );
    }
    var fE,
      hE = Jm.f,
      pE = {}.toString,
      dE =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [],
      gE = {
        f: function (e) {
          return dE && "[object Window]" == pE.call(e)
            ? (function (e) {
                try {
                  return hE(e);
                } catch (e) {
                  return dE.slice();
                }
              })(e)
            : hE(jg(e));
        },
      },
      mE = { f: Nm },
      vE = em.f,
      yE = Iv.forEach,
      bE = am("hidden"),
      wE = Nm("toPrimitive"),
      _E = Fm.set,
      kE = Fm.getterFor("Symbol"),
      EE = Object.prototype,
      SE = Fg.Symbol,
      TE = Tm("JSON", "stringify"),
      xE = Qg.f,
      AE = em.f,
      OE = gE.f,
      PE = Vg.f,
      IE = ym("symbols"),
      jE = ym("op-symbols"),
      CE = ym("string-to-symbol-registry"),
      RE = ym("symbol-to-string-registry"),
      LE = ym("wks"),
      NE = Fg.QObject,
      ME = !NE || !NE.prototype || !NE.prototype.findChild,
      UE =
        qg &&
        Ag(function () {
          return (
            7 !=
            Wv(
              AE({}, "a", {
                get: function () {
                  return AE(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (e, t, n) {
              var r = xE(EE, t);
              r && delete EE[t], AE(e, t, n), r && e !== EE && AE(EE, t, r);
            }
          : AE,
      DE = uv
        ? function (e) {
            return "symbol" == typeof e;
          }
        : function (e) {
            return Object(e) instanceof SE;
          },
      FE = function (e, t, n) {
        e === EE && FE(jE, t, n), Mg(e);
        var r = Rg(t, !0);
        return (
          Mg(n),
          Lg(IE, r)
            ? (n.enumerable
                ? (Lg(e, bE) && e[bE][r] && (e[bE][r] = !1),
                  (n = Wv(n, { enumerable: Og(0, !1) })))
                : (Lg(e, bE) || AE(e, bE, Og(1, {})), (e[bE][r] = !0)),
              UE(e, r, n))
            : AE(e, r, n)
        );
      },
      qE = function (e) {
        var t = Rg(e, !0),
          n = PE.call(this, t);
        return (
          !(this === EE && Lg(IE, t) && !Lg(jE, t)) &&
          (!(
            n ||
            !Lg(this, t) ||
            !Lg(IE, t) ||
            (Lg(this, bE) && this[bE][t])
          ) ||
            n)
        );
      },
      BE = function (e) {
        var t = e === EE,
          n = OE(t ? jE : jg(e)),
          r = [];
        return (
          yE(n, function (e) {
            !Lg(IE, e) || (t && !Lg(EE, e)) || r.push(IE[e]);
          }),
          r
        );
      };
    cv ||
      (qm(
        (SE = function () {
          if (this instanceof SE)
            throw TypeError("Symbol is not a constructor");
          var e =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            t = om(e),
            n = function (e) {
              this === EE && n.call(jE, e),
                Lg(this, bE) && Lg(this[bE], t) && (this[bE][t] = !1),
                UE(this, t, Og(1, e));
            };
          return qg && ME && UE(EE, t, { configurable: !0, set: n }), sE(t, e);
        }).prototype,
        "toString",
        function () {
          return kE(this).tag;
        }
      ),
      qm(SE, "withoutSetter", function (e) {
        return sE(om(e), e);
      }),
      (Vg.f = qE),
      (em.f = FE),
      (Qg.f = uE),
      (Jm.f = gE.f = lE),
      (Qm.f = BE),
      (mE.f = function (e) {
        return sE(Nm(e), e);
      }),
      qg &&
        (AE(SE.prototype, "description", {
          configurable: !0,
          get: function () {
            return kE(this).description;
          },
        }),
        qm(EE, "propertyIsEnumerable", qE, { unsafe: !0 }))),
      Cm({ global: !0, wrap: !0, forced: !cv, sham: !cv }, { Symbol: SE }),
      yE(Fv(LE), function (e) {
        var t, n;
        (t = e),
          (n = Bm.Symbol || (Bm.Symbol = {})),
          Lg(n, t) || vE(n, t, { value: mE.f(t) });
      }),
      Cm(
        { target: "Symbol", stat: !0, forced: !cv },
        {
          for: function (e) {
            var t = String(e);
            if (Lg(CE, t)) return CE[t];
            var n = SE(t);
            return (CE[t] = n), (RE[n] = t), n;
          },
          keyFor: function (e) {
            if (!DE(e)) throw TypeError(e + " is not a symbol");
            if (Lg(RE, e)) return RE[e];
          },
          useSetter: function () {
            ME = !0;
          },
          useSimple: function () {
            ME = !1;
          },
        }
      ),
      Cm(
        { target: "Object", stat: !0, forced: !cv, sham: !qg },
        {
          create: function (e, t) {
            return void 0 === t ? Wv(e) : cE(Wv(e), t);
          },
          defineProperty: FE,
          defineProperties: cE,
          getOwnPropertyDescriptor: uE,
        }
      ),
      Cm(
        { target: "Object", stat: !0, forced: !cv },
        { getOwnPropertyNames: lE, getOwnPropertySymbols: BE }
      ),
      Cm(
        {
          target: "Object",
          stat: !0,
          forced: Ag(function () {
            Qm.f(1);
          }),
        },
        {
          getOwnPropertySymbols: function (e) {
            return Qm.f(Rm(e));
          },
        }
      ),
      TE &&
        ((fE =
          !cv ||
          Ag(function () {
            var e = SE();
            return (
              "[null]" != TE([e]) ||
              "{}" != TE({ a: e }) ||
              "{}" != TE(Object(e))
            );
          })),
        Cm(
          { target: "JSON", stat: !0, forced: fE },
          {
            stringify: function (e, t, n) {
              for (var r, i = [e], o = 1; o < arguments.length; )
                i.push(arguments[o++]);
              if ((Cg((r = t)) || void 0 !== e) && !DE(e))
                return (
                  sv(t) ||
                    (t = function (e, t) {
                      if (
                        ("function" == typeof r && (t = r.call(this, e, t)),
                        !DE(t))
                      )
                        return t;
                    }),
                  (i[1] = t),
                  TE.apply(null, i)
                );
            },
          }
        )),
      SE.prototype[wE] || tm(SE.prototype, wE, SE.prototype.valueOf),
      Ay(SE, "Symbol"),
      (km[bE] = !0),
      Cm(
        { target: "Number", stat: !0 },
        {
          isNaN: function (e) {
            return e != e;
          },
        }
      );
    var HE = Qg.f,
      VE = Ag(function () {
        HE(1);
      });
    function WE(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function zE(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function YE(i) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? zE(Object(o), !0).forEach(function (e) {
              var t, n, r;
              (t = i),
                (r = o[(n = e)]),
                n in t
                  ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[n] = r);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
          : zE(Object(o)).forEach(function (e) {
              Object.defineProperty(
                i,
                e,
                Object.getOwnPropertyDescriptor(o, e)
              );
            });
      }
      return i;
    }
    Cm(
      { target: "Object", stat: !0, forced: !qg || VE, sham: !qg },
      {
        getOwnPropertyDescriptor: function (e, t) {
          return HE(jg(e), t);
        },
      }
    ),
      Cm(
        { target: "Object", stat: !0, sham: !qg },
        {
          getOwnPropertyDescriptors: function (e) {
            for (
              var t, n, r = jg(e), i = Qg.f, o = Zm(r), a = {}, s = 0;
              o.length > s;

            )
              void 0 !== (n = i(r, (t = o[s++]))) && Lm(a, t, n);
            return a;
          },
        }
      ),
      Hb("match", 1, function (r, u, l) {
        return [
          function (e) {
            var t = Ig(this),
              n = null == e ? void 0 : e[r];
            return void 0 !== n ? n.call(e, t) : new RegExp(e)[r](String(t));
          },
          function (e) {
            var t = l(u, e, this);
            if (t.done) return t.value;
            var n = Mg(e),
              r = String(this);
            if (!n.global) return Vb(n, r);
            for (
              var i, o = n.unicode, a = [], s = (n.lastIndex = 0);
              null !== (i = Vb(n, r));

            ) {
              var c = String(i[0]);
              "" === (a[s] = c) && (n.lastIndex = Mw(r, Am(n.lastIndex), o)),
                s++;
            }
            return 0 === s ? null : a;
          },
        ];
      });
    var $E = { addCSS: !0, thumbWidth: 15, watch: !0 };
    function GE(e) {
      return null != e ? e.constructor : null;
    }
    function KE(e, t) {
      return !!(e && t && e instanceof t);
    }
    function XE(e) {
      return GE(e) === String;
    }
    function JE(e) {
      return Array.isArray(e);
    }
    function QE(e) {
      return KE(e, NodeList);
    }
    function ZE(e) {
      return KE(e, Event);
    }
    var eS = XE,
      tS = JE,
      nS = QE,
      rS = function (e) {
        return KE(e, Element);
      },
      iS = function (e) {
        return (
          null == e ||
          ((XE(e) || JE(e) || QE(e)) && !e.length) ||
          (GE(e) === Object && !Object.keys(e).length)
        );
      };
    function oS(e) {
      var t = Tm(e),
        n = em.f;
      qg &&
        t &&
        !t[vS] &&
        n(t, vS, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    }
    function aS(e) {
      var t;
      xS.hasOwnProperty(e) && ((t = xS[e]), delete xS[e], t());
    }
    function sS(e) {
      return function () {
        aS(e);
      };
    }
    function cS(e) {
      aS(e.data);
    }
    function uS(e) {
      Fg.postMessage(e + "", bS.protocol + "//" + bS.host);
    }
    var lS,
      fS,
      hS,
      pS,
      dS,
      gS =
        ((dS = [
          {
            key: "setup",
            value: function (n) {
              var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                e = null;
              if (
                (iS(n) || eS(n)
                  ? (e = Array.from(
                      document.querySelectorAll(
                        eS(n) ? n : 'input[type="range"]'
                      )
                    ))
                  : rS(n)
                  ? (e = [n])
                  : nS(n)
                  ? (e = Array.from(n))
                  : tS(n) && (e = n.filter(rS)),
                iS(e))
              )
                return null;
              var r = YE({}, $E, {}, t);
              return (
                eS(n) &&
                  r.watch &&
                  new MutationObserver(function (e) {
                    Array.from(e).forEach(function (e) {
                      Array.from(e.addedNodes).forEach(function (e) {
                        var t;
                        rS(e) &&
                          function () {
                            return Array.from(
                              document.querySelectorAll(t)
                            ).includes(this);
                          }.call(e, (t = n)) &&
                          new AS(e, r);
                      });
                    });
                  }).observe(document.body, { childList: !0, subtree: !0 }),
                e.map(function (e) {
                  return new AS(e, t);
                })
              );
            },
          },
          {
            key: "enabled",
            get: function () {
              return "ontouchstart" in document.documentElement;
            },
          },
        ]),
        WE((pS = AS).prototype, [
          {
            key: "init",
            value: function () {
              AS.enabled &&
                (this.config.addCSS &&
                  ((this.element.style.userSelect = "none"),
                  (this.element.style.webKitUserSelect = "none"),
                  (this.element.style.touchAction = "manipulation")),
                this.listeners(!0),
                (this.element.rangeTouch = this));
            },
          },
          {
            key: "destroy",
            value: function () {
              AS.enabled &&
                (this.config.addCSS &&
                  ((this.element.style.userSelect = ""),
                  (this.element.style.webKitUserSelect = ""),
                  (this.element.style.touchAction = "")),
                this.listeners(!1),
                (this.element.rangeTouch = null));
            },
          },
          {
            key: "listeners",
            value: function (e) {
              var t = this,
                n = e ? "addEventListener" : "removeEventListener";
              ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                t.element[n](
                  e,
                  function (e) {
                    return t.set(e);
                  },
                  !1
                );
              });
            },
          },
          {
            key: "get",
            value: function (e) {
              if (!AS.enabled || !ZE(e)) return null;
              var t,
                n = e.target,
                r = e.changedTouches[0],
                i = parseFloat(n.getAttribute("min")) || 0,
                o = parseFloat(n.getAttribute("max")) || 100,
                a = parseFloat(n.getAttribute("step")) || 1,
                s = n.getBoundingClientRect(),
                c = ((100 / s.width) * (this.config.thumbWidth / 2)) / 100;
              return (
                (t = (100 / s.width) * (r.clientX - s.left)) < 0
                  ? (t = 0)
                  : 100 < t && (t = 100),
                t < 50
                  ? (t -= (100 - 2 * t) * c)
                  : 50 < t && (t += 2 * (t - 50) * c),
                i +
                  (function (e, t) {
                    if (t < 1) {
                      var n = (r = ""
                        .concat(t)
                        .match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))
                        ? Math.max(
                            0,
                            (r[1] ? r[1].length : 0) - (r[2] ? +r[2] : 0)
                          )
                        : 0;
                      return parseFloat(e.toFixed(n));
                    }
                    var r;
                    return Math.round(e / t) * t;
                  })((t / 100) * (o - i), a)
              );
            },
          },
          {
            key: "set",
            value: function (e) {
              AS.enabled &&
                ZE(e) &&
                !e.target.disabled &&
                (e.preventDefault(),
                (e.target.value = this.get(e)),
                (function (e, t) {
                  var n;
                  e &&
                    t &&
                    ((n = new Event(t, { bubbles: !0 })), e.dispatchEvent(n));
                })(e.target, "touchend" === e.type ? "change" : "input"));
            },
          },
        ]),
        WE(pS, dS),
        AS),
      mS = Fg.Promise,
      vS = Nm("species"),
      yS = /(iphone|ipod|ipad).*applewebkit/i.test(dv),
      bS = Fg.location,
      wS = Fg.setImmediate,
      _S = Fg.clearImmediate,
      kS = Fg.process,
      ES = Fg.MessageChannel,
      SS = Fg.Dispatch,
      TS = 0,
      xS = {};
    function AS(e, t) {
      (function (e) {
        if (!(e instanceof AS))
          throw new TypeError("Cannot call a class as a function");
      })(this),
        rS(e)
          ? (this.element = e)
          : eS(e) && (this.element = document.querySelector(e)),
        rS(this.element) &&
          iS(this.element.rangeTouch) &&
          ((this.config = YE({}, $E, {}, t)), this.init());
    }
    (wS && _S) ||
      ((wS = function (e) {
        for (var t = [], n = 1; n < arguments.length; ) t.push(arguments[n++]);
        return (
          (xS[++TS] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t);
          }),
          lS(TS),
          TS
        );
      }),
      (_S = function (e) {
        delete xS[e];
      }),
      "process" == Pg(kS)
        ? (lS = function (e) {
            kS.nextTick(sS(e));
          })
        : SS && SS.now
        ? (lS = function (e) {
            SS.now(sS(e));
          })
        : ES && !yS
        ? ((hS = (fS = new ES()).port2),
          (fS.port1.onmessage = cS),
          (lS = Tv(hS.postMessage, hS, 1)))
        : !Fg.addEventListener ||
          "function" != typeof postMessage ||
          Fg.importScripts ||
          Ag(uS) ||
          "file:" === bS.protocol
        ? (lS =
            "onreadystatechange" in Ng("script")
              ? function (e) {
                  Bv.appendChild(
                    Ng("script")
                  ).onreadystatechange = function () {
                    Bv.removeChild(this), aS(e);
                  };
                }
              : function (e) {
                  setTimeout(sS(e), 0);
                })
        : ((lS = uS), Fg.addEventListener("message", cS, !1)));
    var OS,
      PS,
      IS,
      jS,
      CS,
      RS,
      LS,
      NS,
      MS = { set: wS, clear: _S },
      US = Qg.f,
      DS = MS.set,
      FS = Fg.MutationObserver || Fg.WebKitMutationObserver,
      qS = Fg.process,
      BS = Fg.Promise,
      HS = "process" == Pg(qS),
      VS = US(Fg, "queueMicrotask"),
      WS = VS && VS.value;
    WS ||
      ((OS = function () {
        var e, t;
        for (HS && (e = qS.domain) && e.exit(); PS; ) {
          (t = PS.fn), (PS = PS.next);
          try {
            t();
          } catch (e) {
            throw (PS ? jS() : (IS = void 0), e);
          }
        }
        (IS = void 0), e && e.enter();
      }),
      (jS = HS
        ? function () {
            qS.nextTick(OS);
          }
        : FS && !yS
        ? ((CS = !0),
          (RS = document.createTextNode("")),
          new FS(OS).observe(RS, { characterData: !0 }),
          function () {
            RS.data = CS = !CS;
          })
        : BS && BS.resolve
        ? ((LS = BS.resolve(void 0)),
          (NS = LS.then),
          function () {
            NS.call(LS, OS);
          })
        : function () {
            DS.call(Fg, OS);
          }));
    function zS(e) {
      var n, r;
      (this.promise = new e(function (e, t) {
        if (void 0 !== n || void 0 !== r)
          throw TypeError("Bad Promise constructor");
        (n = e), (r = t);
      })),
        (this.resolve = Sv(n)),
        (this.reject = Sv(r));
    }
    function YS(e, t) {
      if ((Mg(e), Cg(t) && t.constructor === e)) return t;
      var n = iT.f(e);
      return (0, n.resolve)(t), n.promise;
    }
    function $S(e) {
      try {
        return { error: !1, value: e() };
      } catch (e) {
        return { error: !0, value: e };
      }
    }
    function GS(e) {
      var t;
      return !(!Cg(e) || "function" != typeof (t = e.then)) && t;
    }
    function KS(f, h, p) {
      var d;
      h.notified ||
        ((h.notified = !0),
        (d = h.reactions),
        rT(function () {
          for (var e = h.value, t = 1 == h.state, n = 0; d.length > n; ) {
            var r,
              i,
              o,
              a = d[n++],
              s = t ? a.ok : a.fail,
              c = a.resolve,
              u = a.reject,
              l = a.domain;
            try {
              s
                ? (t || (2 === h.rejection && ET(f, h), (h.rejection = 1)),
                  !0 === s
                    ? (r = e)
                    : (l && l.enter(), (r = s(e)), l && (l.exit(), (o = !0))),
                  r === a.promise
                    ? u(fT("Promise-chain cycle"))
                    : (i = GS(r))
                    ? i.call(r, c, u)
                    : c(r))
                : u(e);
            } catch (e) {
              l && !o && l.exit(), u(e);
            }
          }
          (h.reactions = []), (h.notified = !1), p && !h.rejection && _T(f, h);
        }));
    }
    function XS(e, t, n) {
      var r, i;
      yT
        ? (((r = hT.createEvent("Event")).promise = t),
          (r.reason = n),
          r.initEvent(e, !1, !0),
          Fg.dispatchEvent(r))
        : (r = { promise: t, reason: n }),
        (i = Fg["on" + e])
          ? i(r)
          : "unhandledrejection" === e &&
            (function (e, t) {
              var n = Fg.console;
              n &&
                n.error &&
                (1 === arguments.length ? n.error(e) : n.error(e, t));
            })("Unhandled promise rejection", n);
    }
    function JS(t, n, r, i) {
      return function (e) {
        t(n, r, e, i);
      };
    }
    function QS(e, t, n, r) {
      t.done ||
        ((t.done = !0),
        r && (t = r),
        (t.value = n),
        (t.state = 2),
        KS(e, t, !0));
    }
    var ZS,
      eT,
      tT,
      nT,
      rT =
        WS ||
        function (e) {
          var t = { fn: e, next: void 0 };
          IS && (IS.next = t), PS || ((PS = t), jS()), (IS = t);
        },
      iT = {
        f: function (e) {
          return new zS(e);
        },
      },
      oT = MS.set,
      aT = Nm("species"),
      sT = Fm.get,
      cT = Fm.set,
      uT = Fm.getterFor("Promise"),
      lT = mS,
      fT = Fg.TypeError,
      hT = Fg.document,
      pT = Fg.process,
      dT = Tm("fetch"),
      gT = iT.f,
      mT = gT,
      vT = "process" == Pg(pT),
      yT = !!(hT && hT.createEvent && Fg.dispatchEvent),
      bT = ov("Promise", function () {
        if (gm(lT) === String(lT)) {
          if (66 === bv) return !0;
          if (!vT && "function" != typeof PromiseRejectionEvent) return !0;
        }
        if (51 <= bv && /native code/.test(lT)) return !1;
        function e(e) {
          e(
            function () {},
            function () {}
          );
        }
        var t = lT.resolve(1);
        return (
          ((t.constructor = {})[aT] = e), !(t.then(function () {}) instanceof e)
        );
      }),
      wT =
        bT ||
        !dy(function (e) {
          lT.all(e).catch(function () {});
        }),
      _T = function (n, r) {
        oT.call(Fg, function () {
          var e,
            t = r.value;
          if (
            kT(r) &&
            ((e = $S(function () {
              vT
                ? pT.emit("unhandledRejection", t, n)
                : XS("unhandledrejection", n, t);
            })),
            (r.rejection = vT || kT(r) ? 2 : 1),
            e.error)
          )
            throw e.value;
        });
      },
      kT = function (e) {
        return 1 !== e.rejection && !e.parent;
      },
      ET = function (e, t) {
        oT.call(Fg, function () {
          vT
            ? pT.emit("rejectionHandled", e)
            : XS("rejectionhandled", e, t.value);
        });
      },
      ST = function (n, r, e, t) {
        if (!r.done) {
          (r.done = !0), t && (r = t);
          try {
            if (n === e) throw fT("Promise can't be resolved itself");
            var i = GS(e);
            i
              ? rT(function () {
                  var t = { done: !1 };
                  try {
                    i.call(e, JS(ST, n, t, r), JS(QS, n, t, r));
                  } catch (e) {
                    QS(n, t, e, r);
                  }
                })
              : ((r.value = e), (r.state = 1), KS(n, r, !1));
          } catch (e) {
            QS(n, { done: !1 }, e, r);
          }
        }
      };
    bT &&
      ((lT = function (e) {
        Qb(this, lT, "Promise"), Sv(e), ZS.call(this);
        var t = sT(this);
        try {
          e(JS(ST, this, t), JS(QS, this, t));
        } catch (e) {
          QS(this, t, e);
        }
      }),
      ((ZS = function (e) {
        cT(this, {
          type: "Promise",
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = Jb(lT.prototype, {
        then: function (e, t) {
          var n = uT(this),
            r = gT(Nw(this, lT));
          return (
            (r.ok = "function" != typeof e || e),
            (r.fail = "function" == typeof t && t),
            (r.domain = vT ? pT.domain : void 0),
            (n.parent = !0),
            n.reactions.push(r),
            0 != n.state && KS(this, n, !1),
            r.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (eT = function () {
        var e = new ZS(),
          t = sT(e);
        (this.promise = e),
          (this.resolve = JS(ST, e, t)),
          (this.reject = JS(QS, e, t));
      }),
      (iT.f = gT = function (e) {
        return e === lT || e === tT ? new eT() : mT(e);
      }),
      "function" == typeof mS &&
        ((nT = mS.prototype.then),
        qm(
          mS.prototype,
          "then",
          function (e, t) {
            var n = this;
            return new lT(function (e, t) {
              nT.call(n, e, t);
            }).then(e, t);
          },
          { unsafe: !0 }
        ),
        "function" == typeof dT &&
          Cm(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (e) {
                return YS(lT, dT.apply(Fg, arguments));
              },
            }
          ))),
      Cm({ global: !0, wrap: !0, forced: bT }, { Promise: lT }),
      Ay(lT, "Promise", !1),
      oS("Promise"),
      (tT = Tm("Promise")),
      Cm(
        { target: "Promise", stat: !0, forced: bT },
        {
          reject: function (e) {
            var t = gT(this);
            return t.reject.call(void 0, e), t.promise;
          },
        }
      ),
      Cm(
        { target: "Promise", stat: !0, forced: bT },
        {
          resolve: function (e) {
            return YS(this, e);
          },
        }
      ),
      Cm(
        { target: "Promise", stat: !0, forced: wT },
        {
          all: function (e) {
            var s = this,
              t = gT(s),
              c = t.resolve,
              u = t.reject,
              n = $S(function () {
                var r = Sv(s.resolve),
                  i = [],
                  o = 0,
                  a = 1;
                rw(e, function (e) {
                  var t = o++,
                    n = !1;
                  i.push(void 0),
                    a++,
                    r.call(s, e).then(function (e) {
                      n || ((n = !0), (i[t] = e), --a || c(i));
                    }, u);
                }),
                  --a || c(i);
              });
            return n.error && u(n.value), t.promise;
          },
          race: function (e) {
            var n = this,
              r = gT(n),
              i = r.reject,
              t = $S(function () {
                var t = Sv(n.resolve);
                rw(e, function (e) {
                  t.call(n, e).then(r.resolve, i);
                });
              });
            return t.error && i(t.value), r.promise;
          },
        }
      );
    var TT,
      xT = Qg.f,
      AT = "".startsWith,
      OT = Math.min,
      PT = Lb("startsWith"),
      IT = !(PT || !(TT = xT(String.prototype, "startsWith")) || TT.writable);
    Cm(
      { target: "String", proto: !0, forced: !IT && !PT },
      {
        startsWith: function (e) {
          var t = String(Ig(this));
          Rb(e);
          var n = Am(
              OT(1 < arguments.length ? arguments[1] : void 0, t.length)
            ),
            r = String(e);
          return AT ? AT.call(t, r, n) : t.slice(n, n + r.length) === r;
        },
      }
    );
    function jT(e) {
      return null != e ? e.constructor : null;
    }
    function CT(e, t) {
      return Boolean(e && t && e instanceof t);
    }
    function RT(e) {
      return null == e;
    }
    function LT(e) {
      return jT(e) === Object;
    }
    function NT(e) {
      return jT(e) === String;
    }
    function MT(e) {
      return jT(e) === Function;
    }
    function UT(e) {
      return Array.isArray(e);
    }
    function DT(e) {
      return CT(e, NodeList);
    }
    function FT(e) {
      return (
        RT(e) ||
        ((NT(e) || UT(e) || DT(e)) && !e.length) ||
        (LT(e) && !Object.keys(e).length)
      );
    }
    function qT(e) {
      return jT(e) === Boolean;
    }
    function BT(e) {
      return CT(e, Event);
    }
    function HT(e) {
      return CT(e, KeyboardEvent);
    }
    function VT(e) {
      return CT(e, TextTrack) || (!RT(e) && NT(e.kind));
    }
    function WT(e) {
      if (CT(e, window.URL)) return !0;
      if (!NT(e)) return !1;
      var t = e;
      (e.startsWith("http://") && e.startsWith("https://")) ||
        (t = "http://".concat(e));
      try {
        return !FT(new URL(t).hostname);
      } catch (e) {
        return !1;
      }
    }
    var zT,
      YT,
      $T,
      GT = RT,
      KT = LT,
      XT = function (e) {
        return jT(e) === Number && !Number.isNaN(e);
      },
      JT = NT,
      QT = MT,
      ZT = UT,
      ex = DT,
      tx = function (e) {
        return CT(e, Element);
      },
      nx = function (e) {
        return CT(e, Promise) && MT(e.then);
      },
      rx = FT,
      ix =
        ((zT = document.createElement("span")),
        (YT = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        }),
        ($T = Object.keys(YT).find(function (e) {
          return void 0 !== zT.style[e];
        })),
        !!JT($T) && YT[$T]);
    function ox(e, t) {
      setTimeout(function () {
        try {
          (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
        } catch (e) {}
      }, t);
    }
    function ax(u) {
      return function (e, t, n, r) {
        Sv(t);
        var i = Rm(e),
          o = Yg(i),
          a = Am(i.length),
          s = u ? a - 1 : 0,
          c = u ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (s in o) {
              (r = o[s]), (s += c);
              break;
            }
            if (((s += c), u ? s < 0 : a <= s))
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; u ? 0 <= s : s < a; s += c) s in o && (r = t(r, o[s], s, i));
        return r;
      };
    }
    var sx = {
        isIE: !!document.documentMode,
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit:
          "WebkitAppearance" in document.documentElement.style &&
          !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
      },
      cx = [ax(!1), ax(!0)][0],
      ux = Vy("reduce"),
      lx = Ov("reduce", { 1: 0 });
    function fx(e, t) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, e);
    }
    function hx() {
      for (
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length,
          n = new Array(1 < e ? e - 1 : 0),
          r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      if (!n.length) return t;
      var i = n.shift();
      return KT(i)
        ? (Object.keys(i).forEach(function (e) {
            KT(i[e])
              ? (Object.keys(t).includes(e) || Object.assign(t, Xa({}, e, {})),
                hx(t[e], i[e]))
              : Object.assign(t, Xa({}, e, i[e]));
          }),
          hx.apply(void 0, [t].concat(n)))
        : t;
    }
    function px(e, o) {
      var t = e.length ? e : [e];
      Array.from(t)
        .reverse()
        .forEach(function (e, t) {
          var n = 0 < t ? o.cloneNode(!0) : o,
            r = e.parentNode,
            i = e.nextSibling;
          n.appendChild(e), i ? r.insertBefore(n, i) : r.appendChild(n);
        });
    }
    function dx(i, e) {
      tx(i) &&
        !rx(e) &&
        Object.entries(e)
          .filter(function (e) {
            var t = Za(e, 2)[1];
            return !GT(t);
          })
          .forEach(function (e) {
            var t = Za(e, 2),
              n = t[0],
              r = t[1];
            return i.setAttribute(n, r);
          });
    }
    function gx(e, t, n) {
      var r = document.createElement(e);
      return KT(t) && dx(r, t), JT(n) && (r.innerText = n), r;
    }
    function mx(e, t, n, r) {
      tx(t) && t.appendChild(gx(e, n, r));
    }
    function vx(e) {
      ex(e) || ZT(e)
        ? Array.from(e).forEach(vx)
        : tx(e) && tx(e.parentNode) && e.parentNode.removeChild(e);
    }
    function yx(e) {
      if (tx(e))
        for (var t = e.childNodes.length; 0 < t; )
          e.removeChild(e.lastChild), --t;
    }
    function bx(e, t) {
      return tx(t) && tx(t.parentNode) && tx(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function wx(e, t) {
      if (!JT(e) || rx(e)) return {};
      var a = {},
        s = hx({}, t);
      return (
        e.split(",").forEach(function (e) {
          var t = e.trim(),
            n = t.replace(".", ""),
            r = t.replace(/[[\]]/g, "").split("="),
            i = Za(r, 1)[0],
            o = 1 < r.length ? r[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              JT(s.class)
                ? (a.class = "".concat(s.class, " ").concat(n))
                : (a.class = n);
              break;
            case "#":
              a.id = t.replace("#", "");
              break;
            case "[":
              a[i] = o;
          }
        }),
        hx(s, a)
      );
    }
    function _x(e, t) {
      var n;
      tx(e) && (qT((n = t)) || (n = !e.hidden), (e.hidden = n));
    }
    function kx(e, t, n) {
      if (ex(e))
        return Array.from(e).map(function (e) {
          return kx(e, t, n);
        });
      if (tx(e)) {
        var r = void 0 !== n ? (n ? "add" : "remove") : "toggle";
        return e.classList[r](t), e.classList.contains(t);
      }
      return !1;
    }
    function Ex(e, t) {
      return tx(e) && e.classList.contains(t);
    }
    function Sx(e, t) {
      var n = Element.prototype;
      return (
        n.matches ||
        n.webkitMatchesSelector ||
        n.mozMatchesSelector ||
        n.msMatchesSelector ||
        function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }
      ).call(e, t);
    }
    function Tx(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function xx(e) {
      return this.elements.container.querySelector(e);
    }
    function Ax() {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
        t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
      tx(e) &&
        (e.focus({ preventScroll: !0 }),
        t && kx(e, this.config.classNames.tabFocus));
    }
    Cm(
      { target: "Array", proto: !0, forced: !ux || !lx },
      {
        reduce: function (e) {
          return cx(
            this,
            e,
            arguments.length,
            1 < arguments.length ? arguments[1] : void 0
          );
        },
      }
    );
    var Ox,
      Px = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      Ix = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check: function (e, t, n) {
          var r = sx.isIPhone && n && Ix.playsinline,
            i = Ix[e] || "html5" !== t;
          return {
            api: i,
            ui: i && Ix.rangeInput && ("video" !== e || !sx.isIPhone || r),
          };
        },
        pip: !(
          sx.isIPhone ||
          (!QT(gx("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              gx("video").disablePictureInPicture))
        ),
        airplay: QT(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime: function (e) {
          if (rx(e)) return !1;
          var t = Za(e.split("/"), 1)[0],
            n = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(Px).includes(n) && (n += '; codecs="'.concat(Px[e], '"'));
          try {
            return Boolean(n && this.media.canPlayType(n).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput:
          ((Ox = document.createElement("input")).type = "range") === Ox.type,
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== ix,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      },
      jx = (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              return (e = !0), null;
            },
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function Cx(t, e, n) {
      var r,
        i,
        o = this,
        a = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
        s = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
        c = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
      t &&
        "addEventListener" in t &&
        !rx(e) &&
        QT(n) &&
        ((r = e.split(" ")),
        (i = jx ? { passive: s, capture: c } : c),
        r.forEach(function (e) {
          o &&
            o.eventListeners &&
            a &&
            o.eventListeners.push({
              element: t,
              type: e,
              callback: n,
              options: i,
            }),
            t[a ? "addEventListener" : "removeEventListener"](e, n, i);
        }));
    }
    function Rx(e) {
      Cx.call(
        this,
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
        2 < arguments.length ? arguments[2] : void 0,
        !0,
        !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
        4 < arguments.length && void 0 !== arguments[4] && arguments[4]
      );
    }
    function Lx(e) {
      Cx.call(
        this,
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
        2 < arguments.length ? arguments[2] : void 0,
        !1,
        !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
        4 < arguments.length && void 0 !== arguments[4] && arguments[4]
      );
    }
    function Nx(i) {
      var o = this,
        a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
        s = 2 < arguments.length ? arguments[2] : void 0,
        c = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
        u = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
      Cx.call(
        this,
        i,
        a,
        function e() {
          Lx(i, a, e, c, u);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          s.apply(o, n);
        },
        !0,
        c,
        u
      );
    }
    function Mx(e) {
      var t,
        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
        r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
      tx(e) &&
        !rx(n) &&
        ((t = new CustomEvent(n, {
          bubbles: r,
          detail: Qa(Qa({}, i), {}, { plyr: this }),
        })),
        e.dispatchEvent(t));
    }
    function Ux(e) {
      nx(e) && e.then(null, function () {});
    }
    function Dx(e) {
      return (
        (ZT(e) || (JT(e) && e.includes(":"))) &&
        (ZT(e) ? e : e.split(":")).map(Number).every(XT)
      );
    }
    function Fx(e) {
      if (!ZT(e) || !e.every(XT)) return null;
      var t = Za(e, 2),
        n = t[0],
        r = t[1],
        i = (function e(t, n) {
          return 0 === n ? t : e(n, t % n);
        })(n, r);
      return [n / i, r / i];
    }
    function qx(e) {
      function t(e) {
        return Dx(e) ? e.split(":").map(Number) : null;
      }
      var n,
        r = t(e);
      return (
        null === r && (r = t(this.config.ratio)),
        null === r &&
          !rx(this.embed) &&
          ZT(this.embed.ratio) &&
          (r = this.embed.ratio),
        null === r &&
          this.isHTML5 &&
          (r = Fx([(n = this.media).videoWidth, n.videoHeight])),
        r
      );
    }
    function Bx(e) {
      if (!this.isVideo) return {};
      var t,
        n,
        r = this.elements.wrapper,
        i = qx.call(this, e),
        o = Za(ZT(i) ? i : [0, 0], 2),
        a = (100 / o[0]) * o[1];
      return (
        (r.style.paddingBottom = "".concat(a, "%")),
        this.isVimeo && !this.config.vimeo.premium && this.supported.ui
          ? ((n =
              ((t =
                (100 / this.media.offsetWidth) *
                parseInt(
                  window.getComputedStyle(this.media).paddingBottom,
                  10
                )) -
                a) /
              (t / 50)),
            (this.media.style.transform = "translateY(-".concat(n, "%)")))
          : this.isHTML5 &&
            r.classList.toggle(
              this.config.classNames.videoFixedRatio,
              null !== i
            ),
        { padding: a, ratio: i }
      );
    }
    var Hx = {
      getSources: function () {
        var n = this;
        return this.isHTML5
          ? Array.from(this.media.querySelectorAll("source")).filter(function (
              e
            ) {
              var t = e.getAttribute("type");
              return !!rx(t) || Ix.mime.call(n, t);
            })
          : [];
      },
      getQualityOptions: function () {
        return this.config.quality.forced
          ? this.config.quality.options
          : Hx.getSources
              .call(this)
              .map(function (e) {
                return Number(e.getAttribute("size"));
              })
              .filter(Boolean);
      },
      setup: function () {
        var c;
        this.isHTML5 &&
          (((c = this).options.speed = c.config.speed.options),
          rx(this.config.ratio) || Bx.call(c),
          Object.defineProperty(c.media, "quality", {
            get: function () {
              var e = Hx.getSources.call(c).find(function (e) {
                return e.getAttribute("src") === c.source;
              });
              return e && Number(e.getAttribute("size"));
            },
            set: function (t) {
              if (c.quality !== t) {
                if (c.config.quality.forced && QT(c.config.quality.onChange))
                  c.config.quality.onChange(t);
                else {
                  var e = Hx.getSources.call(c).find(function (e) {
                    return Number(e.getAttribute("size")) === t;
                  });
                  if (!e) return;
                  var n = c.media,
                    r = n.currentTime,
                    i = n.paused,
                    o = n.preload,
                    a = n.readyState,
                    s = n.playbackRate;
                  (c.media.src = e.getAttribute("src")),
                    ("none" === o && !a) ||
                      (c.once("loadedmetadata", function () {
                        (c.speed = s), (c.currentTime = r), i || Ux(c.play());
                      }),
                      c.media.load());
                }
                Mx.call(c, c.media, "qualitychange", !1, { quality: t });
              }
            },
          }));
      },
      cancelRequests: function () {
        this.isHTML5 &&
          (vx(Hx.getSources.call(this)),
          this.media.setAttribute("src", this.config.blankVideo),
          this.media.load(),
          this.debug.log("Cancelled network requests"));
      },
    };
    function Vx(n) {
      return ZT(n)
        ? n.filter(function (e, t) {
            return n.indexOf(e) === t;
          })
        : n;
    }
    var Wx = yv("slice"),
      zx = Ov("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      Yx = Nm("species"),
      $x = [].slice,
      Gx = Math.max;
    Cm(
      { target: "Array", proto: !0, forced: !Wx || !zx },
      {
        slice: function (e, t) {
          var n,
            r,
            i,
            o = jg(this),
            a = Am(o.length),
            s = Om(e, a),
            c = Om(void 0 === t ? a : t, a);
          if (
            sv(o) &&
            ((("function" == typeof (n = o.constructor) &&
              (n === Array || sv(n.prototype))) ||
              (Cg(n) && null === (n = n[Yx]))) &&
              (n = void 0),
            n === Array || void 0 === n)
          )
            return $x.call(o, s, c);
          for (
            r = new (void 0 === n ? Array : n)(Gx(c - s, 0)), i = 0;
            s < c;
            s++, i++
          )
            s in o && Lm(r, i, o[s]);
          return (r.length = i), r;
        },
      }
    );
    var Kx = em.f,
      Xx = Jm.f,
      Jx = Fm.set,
      Qx = Nm("match"),
      Zx = Fg.RegExp,
      eA = Zx.prototype,
      tA = /a/g,
      nA = /a/g,
      rA = new Zx(tA) !== tA,
      iA = wb.UNSUPPORTED_Y;
    if (
      qg &&
      ov(
        "RegExp",
        !rA ||
          iA ||
          Ag(function () {
            return (
              (nA[Qx] = !1),
              Zx(tA) != tA || Zx(nA) == nA || "/a/i" != Zx(tA, "i")
            );
          })
      )
    ) {
      for (
        var oA = function (e, t) {
            var n,
              r = this instanceof oA,
              i = Cb(e),
              o = void 0 === t;
            if (!r && i && e.constructor === oA && o) return e;
            rA
              ? i && !o && (e = e.source)
              : e instanceof oA && (o && (t = mb.call(e)), (e = e.source)),
              iA &&
                (n = !!t && -1 < t.indexOf("y")) &&
                (t = t.replace(/y/g, ""));
            var a = Xy(rA ? new Zx(e, t) : Zx(e, t), r ? this : eA, oA);
            return iA && n && Jx(a, { sticky: n }), a;
          },
          aA = Xx(Zx),
          sA = 0;
        aA.length > sA;

      )
        !(function (t) {
          t in oA ||
            Kx(oA, t, {
              configurable: !0,
              get: function () {
                return Zx[t];
              },
              set: function (e) {
                Zx[t] = e;
              },
            });
        })(aA[sA++]);
      ((eA.constructor = oA).prototype = eA), qm(Fg, "RegExp", oA);
    }
    function cA(e) {
      for (
        var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return rx(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, function (e, t) {
            return n[t].toString();
          });
    }
    oS("RegExp");
    function uA() {
      var e =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
        t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
      return (0 < arguments.length && void 0 !== arguments[0]
        ? arguments[0]
        : ""
      ).replace(
        new RegExp(
          e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
          "g"
        ),
        t.toString()
      );
    }
    function lA() {
      return (0 < arguments.length && void 0 !== arguments[0]
        ? arguments[0]
        : ""
      )
        .toString()
        .replace(/\w\S*/g, function (e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        });
    }
    function fA(e) {
      var t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    function hA() {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      if (rx(e) || rx(t)) return "";
      var i = fx(t.i18n, e);
      if (rx(i)) return Object.keys(pA).includes(e) ? pA[e] : "";
      var n = { "{seektime}": t.seekTime, "{title}": t.title };
      return (
        Object.entries(n).forEach(function (e) {
          var t = Za(e, 2),
            n = t[0],
            r = t[1];
          i = uA(i, n, r);
        }),
        i
      );
    }
    var pA = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      dA =
        (Ka(
          gA,
          [
            {
              key: "get",
              value: function (e) {
                if (!gA.supported || !this.enabled) return null;
                var t = window.localStorage.getItem(this.key);
                if (rx(t)) return null;
                var n = JSON.parse(t);
                return JT(e) && e.length ? n[e] : n;
              },
            },
            {
              key: "set",
              value: function (e) {
                var t;
                gA.supported &&
                  this.enabled &&
                  KT(e) &&
                  ((t = this.get()),
                  rx(t) && (t = {}),
                  hx(t, e),
                  window.localStorage.setItem(this.key, JSON.stringify(t)));
              },
            },
          ],
          [
            {
              key: "supported",
              get: function () {
                try {
                  return (
                    "localStorage" in window &&
                    (window.localStorage.setItem("___test", "___test"),
                    window.localStorage.removeItem("___test"),
                    !0)
                  );
                } catch (e) {
                  return !1;
                }
              },
            },
          ]
        ),
        gA);
    function gA(e) {
      $a(this, gA),
        (this.enabled = e.config.storage.enabled),
        (this.key = e.config.storage.key);
    }
    function mA(e, t) {
      var i = 1 < arguments.length && void 0 !== t ? t : "text";
      return new Promise(function (t, n) {
        try {
          var r = new XMLHttpRequest();
          if (!("withCredentials" in r)) return;
          r.addEventListener("load", function () {
            if ("text" === i)
              try {
                t(JSON.parse(r.responseText));
              } catch (e) {
                t(r.responseText);
              }
            else t(r.response);
          }),
            r.addEventListener("error", function () {
              throw new Error(r.status);
            }),
            r.open("GET", e, !0),
            (r.responseType = i),
            r.send();
        } catch (e) {
          n(e);
        }
      });
    }
    function vA(e, t) {
      var n, r, i, o, a, s, c;
      JT(e) &&
        ((n = JT(t)),
        (r = function () {
          return null !== document.getElementById(t);
        }),
        (i = function (e, t) {
          (e.innerHTML = t),
            (n && r()) || document.body.insertAdjacentElement("afterbegin", e);
        }),
        (n && r()) ||
          ((o = dA.supported),
          (a = document.createElement("div")).setAttribute("hidden", ""),
          n && a.setAttribute("id", t),
          o &&
            null !==
              (s = window.localStorage.getItem(
                "".concat("cache", "-").concat(t)
              )) &&
            ((c = JSON.parse(s)), i(a, c.content)),
          mA(e)
            .then(function (e) {
              rx(e) ||
                (o &&
                  window.localStorage.setItem(
                    "".concat("cache", "-").concat(t),
                    JSON.stringify({ content: e })
                  ),
                i(a, e));
            })
            .catch(function () {})));
    }
    var yA = Math.ceil,
      bA = Math.floor;
    Cm(
      { target: "Math", stat: !0 },
      {
        trunc: function (e) {
          return (0 < e ? bA : yA)(e);
        },
      }
    );
    var wA = function (e) {
        return Math.trunc((e / 60 / 60) % 60, 10);
      },
      _A = function (e) {
        return Math.trunc((e / 60) % 60, 10);
      },
      kA = function (e) {
        return Math.trunc(e % 60, 10);
      };
    function EA(e, t, n) {
      var r = 0 < arguments.length && void 0 !== e ? e : 0,
        i = 1 < arguments.length && void 0 !== t && t,
        o = 2 < arguments.length && void 0 !== n && n;
      if (!XT(r)) return EA(void 0, i, o);
      function a(e) {
        return "0".concat(e).slice(-2);
      }
      var s = wA(r),
        c = _A(r),
        u = kA(r),
        s = i || 0 < s ? "".concat(s, ":") : "";
      return ""
        .concat(o && 0 < r ? "-" : "")
        .concat(s)
        .concat(a(c), ":")
        .concat(a(u));
    }
    var SA = {
      getIconUrl: function () {
        var e =
          new URL(this.config.iconUrl, window.location).host !==
            window.location.host ||
          (sx.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: e };
      },
      findElements: function () {
        try {
          return (
            (this.elements.controls = xx.call(
              this,
              this.config.selectors.controls.wrapper
            )),
            (this.elements.buttons = {
              play: Tx.call(this, this.config.selectors.buttons.play),
              pause: xx.call(this, this.config.selectors.buttons.pause),
              restart: xx.call(this, this.config.selectors.buttons.restart),
              rewind: xx.call(this, this.config.selectors.buttons.rewind),
              fastForward: xx.call(
                this,
                this.config.selectors.buttons.fastForward
              ),
              mute: xx.call(this, this.config.selectors.buttons.mute),
              pip: xx.call(this, this.config.selectors.buttons.pip),
              airplay: xx.call(this, this.config.selectors.buttons.airplay),
              settings: xx.call(this, this.config.selectors.buttons.settings),
              captions: xx.call(this, this.config.selectors.buttons.captions),
              fullscreen: xx.call(
                this,
                this.config.selectors.buttons.fullscreen
              ),
            }),
            (this.elements.progress = xx.call(
              this,
              this.config.selectors.progress
            )),
            (this.elements.inputs = {
              seek: xx.call(this, this.config.selectors.inputs.seek),
              volume: xx.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: xx.call(this, this.config.selectors.display.buffer),
              currentTime: xx.call(
                this,
                this.config.selectors.display.currentTime
              ),
              duration: xx.call(this, this.config.selectors.display.duration),
            }),
            tx(this.elements.progress) &&
              (this.elements.display.seekTooltip = this.elements.progress.querySelector(
                ".".concat(this.config.classNames.tooltip)
              )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon: function (e, t) {
        var n = SA.getIconUrl.call(this),
          r = ""
            .concat(n.cors ? "" : n.url, "#")
            .concat(this.config.iconPrefix),
          i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        dx(i, hx(t, { "aria-hidden": "true", focusable: "false" }));
        var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          a = "".concat(r, "-").concat(e);
        return (
          "href" in o &&
            o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
          o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a),
          i.appendChild(o),
          i
        );
      },
      createLabel: function (e) {
        var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = hA(e, this.config);
        return gx(
          "span",
          Qa(
            Qa({}, t),
            {},
            {
              class: [t.class, this.config.classNames.hidden]
                .filter(Boolean)
                .join(" "),
            }
          ),
          n
        );
      },
      createBadge: function (e) {
        if (rx(e)) return null;
        var t = gx("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            gx("span", { class: this.config.classNames.menu.badge }, e)
          ),
          t
        );
      },
      createButton: function (e, t) {
        var n = this,
          r = hx({}, t),
          i = (function (e) {
            var t = (0 < arguments.length && void 0 !== e ? e : "").toString();
            return (
              (t = (function (e) {
                var t = (0 < arguments.length && void 0 !== e
                    ? e
                    : ""
                  ).toString(),
                  t = uA(t, "-", " ");
                return (t = uA(t, "_", " ")), (t = lA(t)), uA(t, " ", "");
              })(t))
                .charAt(0)
                .toLowerCase() + t.slice(1)
            );
          })(e),
          o = {
            element: "button",
            toggle: !1,
            label: null,
            icon: null,
            labelPressed: null,
            iconPressed: null,
          };
        switch (
          (["element", "icon", "label"].forEach(function (e) {
            Object.keys(r).includes(e) && ((o[e] = r[e]), delete r[e]);
          }),
          "button" !== o.element ||
            Object.keys(r).includes("type") ||
            (r.type = "button"),
          Object.keys(r).includes("class")
            ? r.class.split(" ").some(function (e) {
                return e === n.config.classNames.control;
              }) ||
              hx(r, {
                class: ""
                  .concat(r.class, " ")
                  .concat(this.config.classNames.control),
              })
            : (r.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (o.toggle = !0),
              (o.label = "play"),
              (o.labelPressed = "pause"),
              (o.icon = "play"),
              (o.iconPressed = "pause");
            break;
          case "mute":
            (o.toggle = !0),
              (o.label = "mute"),
              (o.labelPressed = "unmute"),
              (o.icon = "volume"),
              (o.iconPressed = "muted");
            break;
          case "captions":
            (o.toggle = !0),
              (o.label = "enableCaptions"),
              (o.labelPressed = "disableCaptions"),
              (o.icon = "captions-off"),
              (o.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (o.toggle = !0),
              (o.label = "enterFullscreen"),
              (o.labelPressed = "exitFullscreen"),
              (o.icon = "enter-fullscreen"),
              (o.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (r.class += " ".concat(
              this.config.classNames.control,
              "--overlaid"
            )),
              (i = "play"),
              (o.label = "play"),
              (o.icon = "play");
            break;
          default:
            rx(o.label) && (o.label = i), rx(o.icon) && (o.icon = e);
        }
        var a = gx(o.element);
        return (
          o.toggle
            ? (a.appendChild(
                SA.createIcon.call(this, o.iconPressed, {
                  class: "icon--pressed",
                })
              ),
              a.appendChild(
                SA.createIcon.call(this, o.icon, { class: "icon--not-pressed" })
              ),
              a.appendChild(
                SA.createLabel.call(this, o.labelPressed, {
                  class: "label--pressed",
                })
              ),
              a.appendChild(
                SA.createLabel.call(this, o.label, {
                  class: "label--not-pressed",
                })
              ))
            : (a.appendChild(SA.createIcon.call(this, o.icon)),
              a.appendChild(SA.createLabel.call(this, o.label))),
          hx(r, wx(this.config.selectors.buttons[i], r)),
          dx(a, r),
          "play" === i
            ? (ZT(this.elements.buttons[i]) || (this.elements.buttons[i] = []),
              this.elements.buttons[i].push(a))
            : (this.elements.buttons[i] = a),
          a
        );
      },
      createRange: function (e, t) {
        var n = gx(
          "input",
          hx(
            wx(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": hA(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t
          )
        );
        return (
          (this.elements.inputs[e] = n),
          SA.updateRangeFill.call(this, n),
          gS.setup(n),
          n
        );
      },
      createProgress: function (e, t) {
        var n,
          r,
          i = gx(
            "progress",
            hx(
              wx(this.config.selectors.display[e]),
              {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0,
              },
              t
            )
          );
        return (
          "volume" !== e &&
            (i.appendChild(gx("span", null, "0")),
            (r = (n = { played: "played", buffer: "buffered" }[e])
              ? hA(n, this.config)
              : ""),
            (i.innerText = "% ".concat(r.toLowerCase()))),
          (this.elements.display[e] = i)
        );
      },
      createTime: function (e, t) {
        var n = wx(this.config.selectors.display[e], t),
          r = gx(
            "div",
            hx(n, {
              class: ""
                .concat(n.class ? n.class : "", " ")
                .concat(this.config.classNames.display.time, " ")
                .trim(),
              "aria-label": hA(e, this.config),
            }),
            "00:00"
          );
        return (this.elements.display[e] = r);
      },
      bindMenuItemShortcuts: function (r, i) {
        var o = this;
        Rx.call(
          this,
          r,
          "keydown keyup",
          function (e) {
            var t, n;
            [32, 38, 39, 40].includes(e.which) &&
              (e.preventDefault(), e.stopPropagation(), "keydown" !== e.type) &&
              (!(n = Sx(r, '[role="menuitemradio"]')) &&
              [32, 39].includes(e.which)
                ? SA.showMenuPanel.call(o, i, !0)
                : 32 !== e.which &&
                  (40 === e.which || (n && 39 === e.which)
                    ? ((t = r.nextElementSibling),
                      tx(t) || (t = r.parentNode.firstElementChild))
                    : ((t = r.previousElementSibling),
                      tx(t) || (t = r.parentNode.lastElementChild)),
                  Ax.call(o, t, !0)));
          },
          !1
        ),
          Rx.call(this, r, "keyup", function (e) {
            13 === e.which && SA.focusFirstMenuItem.call(o, null, !0);
          });
      },
      createMenuItem: function (e) {
        var t = this,
          n = e.value,
          r = e.list,
          i = e.type,
          o = e.title,
          a = e.badge,
          s = void 0 === a ? null : a,
          c = e.checked,
          u = void 0 !== c && c,
          l = wx(this.config.selectors.inputs[i]),
          f = gx(
            "button",
            hx(l, {
              type: "button",
              role: "menuitemradio",
              class: ""
                .concat(this.config.classNames.control, " ")
                .concat(l.class ? l.class : "")
                .trim(),
              "aria-checked": u,
              value: n,
            })
          ),
          h = gx("span");
        (h.innerHTML = o),
          tx(s) && h.appendChild(s),
          f.appendChild(h),
          Object.defineProperty(f, "checked", {
            enumerable: !0,
            get: function () {
              return "true" === f.getAttribute("aria-checked");
            },
            set: function (e) {
              e &&
                Array.from(f.parentNode.children)
                  .filter(function (e) {
                    return Sx(e, '[role="menuitemradio"]');
                  })
                  .forEach(function (e) {
                    return e.setAttribute("aria-checked", "false");
                  }),
                f.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            f,
            "click keyup",
            function (e) {
              if (!HT(e) || 32 === e.which) {
                switch (
                  (e.preventDefault(), e.stopPropagation(), (f.checked = !0), i)
                ) {
                  case "language":
                    t.currentTrack = Number(n);
                    break;
                  case "quality":
                    t.quality = n;
                    break;
                  case "speed":
                    t.speed = parseFloat(n);
                }
                SA.showMenuPanel.call(t, "home", HT(e));
              }
            },
            i,
            !1
          ),
          SA.bindMenuItemShortcuts.call(this, f, i),
          r.appendChild(f);
      },
      formatTime: function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
          t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        return XT(e) ? EA(e, 0 < wA(this.duration), t) : e;
      },
      updateTimeDisplay: function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
          n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        tx(e) && XT(t) && (e.innerText = SA.formatTime(t, n));
      },
      updateVolume: function () {
        this.supported.ui &&
          (tx(this.elements.inputs.volume) &&
            SA.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume
            ),
          tx(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange: function (e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
        tx(e) && ((e.value = t), SA.updateRangeFill.call(this, e));
      },
      updateProgress: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          c = this;
        if (this.supported.ui && BT(e)) {
          var u = 0;
          if (e)
            switch (e.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                (a = this.currentTime),
                  (s = this.duration),
                  (u =
                    0 === a || 0 === s || Number.isNaN(a) || Number.isNaN(s)
                      ? 0
                      : ((a / s) * 100).toFixed(2)),
                  "timeupdate" === e.type &&
                    SA.setRange.call(this, this.elements.inputs.seek, u);
                break;
              case "playing":
              case "progress":
                (t = this.elements.display.buffer),
                  (n = 100 * this.buffered),
                  (i = XT(n) ? n : 0),
                  (o = tx(t) ? t : c.elements.display.buffer),
                  tx(o) &&
                    ((o.value = i),
                    (r = o.getElementsByTagName("span")[0]),
                    tx(r) && (r.childNodes[0].nodeValue = i));
            }
        }
      },
      updateRangeFill: function (e) {
        var t,
          n,
          r,
          i,
          o = BT(e) ? e.target : e;
        tx(o) &&
          "range" === o.getAttribute("type") &&
          (Sx(o, this.config.selectors.inputs.seek)
            ? (o.setAttribute("aria-valuenow", this.currentTime),
              (t = SA.formatTime(this.currentTime)),
              (n = SA.formatTime(this.duration)),
              (r = hA("seekLabel", this.config)),
              o.setAttribute(
                "aria-valuetext",
                r.replace("{currentTime}", t).replace("{duration}", n)
              ))
            : Sx(o, this.config.selectors.inputs.volume)
            ? ((i = 100 * o.value),
              o.setAttribute("aria-valuenow", i),
              o.setAttribute("aria-valuetext", "".concat(i.toFixed(1), "%")))
            : o.setAttribute("aria-valuenow", o.value),
          sx.isWebkit &&
            o.style.setProperty(
              "--value",
              "".concat((o.value / o.max) * 100, "%")
            ));
      },
      updateSeekTooltip: function (e) {
        var t = this;
        if (
          this.config.tooltips.seek &&
          tx(this.elements.inputs.seek) &&
          tx(this.elements.display.seekTooltip) &&
          0 !== this.duration
        ) {
          var n = "".concat(this.config.classNames.tooltip, "--visible"),
            r = function (e) {
              return kx(t.elements.display.seekTooltip, n, e);
            };
          if (this.touch) r(!1);
          else {
            var i = 0,
              o = this.elements.progress.getBoundingClientRect();
            if (BT(e)) i = (100 / o.width) * (e.pageX - o.left);
            else {
              if (!Ex(this.elements.display.seekTooltip, n)) return;
              i = parseFloat(this.elements.display.seekTooltip.style.left, 10);
            }
            i < 0 ? (i = 0) : 100 < i && (i = 100),
              SA.updateTimeDisplay.call(
                this,
                this.elements.display.seekTooltip,
                (this.duration / 100) * i
              ),
              (this.elements.display.seekTooltip.style.left = "".concat(
                i,
                "%"
              )),
              BT(e) &&
                ["mouseenter", "mouseleave"].includes(e.type) &&
                r("mouseenter" === e.type);
          }
        }
      },
      timeUpdate: function (e) {
        var t = !tx(this.elements.display.duration) && this.config.invertTime;
        SA.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            SA.updateProgress.call(this, e);
      },
      durationUpdate: function () {
        if (
          this.supported.ui &&
          (this.config.invertTime || !this.currentTime)
        ) {
          if (this.duration >= Math.pow(2, 32))
            return (
              _x(this.elements.display.currentTime, !0),
              void _x(this.elements.progress, !0)
            );
          tx(this.elements.inputs.seek) &&
            this.elements.inputs.seek.setAttribute(
              "aria-valuemax",
              this.duration
            );
          var e = tx(this.elements.display.duration);
          !e &&
            this.config.displayDuration &&
            this.paused &&
            SA.updateTimeDisplay.call(
              this,
              this.elements.display.currentTime,
              this.duration
            ),
            e &&
              SA.updateTimeDisplay.call(
                this,
                this.elements.display.duration,
                this.duration
              ),
            SA.updateSeekTooltip.call(this);
        }
      },
      toggleMenuButton: function (e, t) {
        _x(this.elements.settings.buttons[e], !t);
      },
      updateSetting: function (e, t, n) {
        var r,
          i = this.elements.settings.panels[e],
          o = null,
          a = t;
        if ("captions" === e) o = this.currentTrack;
        else {
          if (
            ((o = rx(n) ? this[e] : n),
            rx(o) && (o = this.config[e].default),
            !rx(this.options[e]) && !this.options[e].includes(o))
          )
            return void this.debug.warn(
              "Unsupported value of '".concat(o, "' for ").concat(e)
            );
          if (!this.config[e].options.includes(o))
            return void this.debug.warn(
              "Disabled value of '".concat(o, "' for ").concat(e)
            );
        }
        tx(a) || (a = i && i.querySelector('[role="menu"]')),
          tx(a) &&
            ((this.elements.settings.buttons[e].querySelector(
              ".".concat(this.config.classNames.menu.value)
            ).innerHTML = SA.getLabel.call(this, e, o)),
            (r = a && a.querySelector('[value="'.concat(o, '"]'))),
            tx(r) && (r.checked = !0));
      },
      getLabel: function (e, t) {
        switch (e) {
          case "speed":
            return 1 === t
              ? hA("normal", this.config)
              : "".concat(t, "&times;");
          case "quality":
            if (XT(t)) {
              var n = hA("qualityLabel.".concat(t), this.config);
              return n.length ? n : "".concat(t, "p");
            }
            return lA(t);
          case "captions":
            return OA.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu: function (e) {
        var n,
          t,
          r = this;
        tx(this.elements.settings.panels.quality) &&
          ((n = this.elements.settings.panels.quality.querySelector(
            '[role="menu"]'
          )),
          ZT(e) &&
            (this.options.quality = Vx(e).filter(function (e) {
              return r.config.quality.options.includes(e);
            })),
          (t = !rx(this.options.quality) && 1 < this.options.quality.length),
          SA.toggleMenuButton.call(this, "quality", t),
          yx(n),
          SA.checkMenu.call(this),
          t &&
            (this.options.quality
              .sort(function (e, t) {
                var n = r.config.quality.options;
                return n.indexOf(e) > n.indexOf(t) ? 1 : -1;
              })
              .forEach(function (e) {
                var t;
                SA.createMenuItem.call(r, {
                  value: e,
                  list: n,
                  type: "quality",
                  title: SA.getLabel.call(r, "quality", e),
                  badge: (t = hA("qualityBadge.".concat(e), r.config)).length
                    ? SA.createBadge.call(r, t)
                    : null,
                });
              }),
            SA.updateSetting.call(this, "quality", n)));
      },
      setCaptionsMenu: function () {
        var n,
          e,
          t,
          r,
          i = this;
        tx(this.elements.settings.panels.captions) &&
          ((n = this.elements.settings.panels.captions.querySelector(
            '[role="menu"]'
          )),
          (e = OA.getTracks.call(this)),
          (t = Boolean(e.length)),
          SA.toggleMenuButton.call(this, "captions", t),
          yx(n),
          SA.checkMenu.call(this),
          t &&
            ((r = e.map(function (e, t) {
              return {
                value: t,
                checked: i.captions.toggled && i.currentTrack === t,
                title: OA.getLabel.call(i, e),
                badge:
                  e.language &&
                  SA.createBadge.call(i, e.language.toUpperCase()),
                list: n,
                type: "language",
              };
            })).unshift({
              value: -1,
              checked: !this.captions.toggled,
              title: hA("disabled", this.config),
              list: n,
              type: "language",
            }),
            r.forEach(SA.createMenuItem.bind(this)),
            SA.updateSetting.call(this, "captions", n)));
      },
      setSpeedMenu: function () {
        var t,
          e,
          n = this;
        tx(this.elements.settings.panels.speed) &&
          ((t = this.elements.settings.panels.speed.querySelector(
            '[role="menu"]'
          )),
          (this.options.speed = this.options.speed.filter(function (e) {
            return e >= n.minimumSpeed && e <= n.maximumSpeed;
          })),
          (e = !rx(this.options.speed) && 1 < this.options.speed.length),
          SA.toggleMenuButton.call(this, "speed", e),
          yx(t),
          SA.checkMenu.call(this),
          e &&
            (this.options.speed.forEach(function (e) {
              SA.createMenuItem.call(n, {
                value: e,
                list: t,
                type: "speed",
                title: SA.getLabel.call(n, "speed", e),
              });
            }),
            SA.updateSetting.call(this, "speed", t)));
      },
      checkMenu: function () {
        var e = this.elements.settings.buttons,
          t =
            !rx(e) &&
            Object.values(e).some(function (e) {
              return !e.hidden;
            });
        _x(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem: function (e) {
        var t,
          n,
          r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        this.elements.settings.popup.hidden ||
          (tx((t = e)) ||
            (t = Object.values(this.elements.settings.panels).find(function (
              e
            ) {
              return !e.hidden;
            })),
          (n = t.querySelector('[role^="menuitem"]')),
          Ax.call(this, n, r));
      },
      toggleMenu: function (e) {
        var t = this.elements.settings.popup,
          n = this.elements.buttons.settings;
        if (tx(t) && tx(n)) {
          var r = t.hidden,
            i = r;
          if (qT(e)) i = e;
          else if (HT(e) && 27 === e.which) i = !1;
          else if (BT(e)) {
            var o = QT(e.composedPath) ? e.composedPath()[0] : e.target,
              a = t.contains(o);
            if (a || (!a && e.target !== n && i)) return;
          }
          n.setAttribute("aria-expanded", i),
            _x(t, !i),
            kx(this.elements.container, this.config.classNames.menu.open, i),
            i && HT(e)
              ? SA.focusFirstMenuItem.call(this, null, !0)
              : i || r || Ax.call(this, n, HT(e));
        }
      },
      getMenuSize: function (e) {
        var t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        var n = t.scrollWidth,
          r = t.scrollHeight;
        return vx(t), { width: n, height: r };
      },
      showMenuPanel: function () {
        var n,
          e,
          t,
          r = this,
          i =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          a = this.elements.container.querySelector(
            "#plyr-settings-".concat(this.id, "-").concat(i)
          );
        tx(a) &&
          ((n = a.parentNode),
          (e = Array.from(n.children).find(function (e) {
            return !e.hidden;
          })),
          Ix.transitions &&
            !Ix.reducedMotion &&
            ((n.style.width = "".concat(e.scrollWidth, "px")),
            (n.style.height = "".concat(e.scrollHeight, "px")),
            (t = SA.getMenuSize.call(this, a)),
            Rx.call(this, n, ix, function e(t) {
              t.target === n &&
                ["width", "height"].includes(t.propertyName) &&
                ((n.style.width = ""),
                (n.style.height = ""),
                Lx.call(r, n, ix, e));
            }),
            (n.style.width = "".concat(t.width, "px")),
            (n.style.height = "".concat(t.height, "px"))),
          _x(e, !0),
          _x(a, !1),
          SA.focusFirstMenuItem.call(this, a, o));
      },
      setDownloadUrl: function () {
        var e = this.elements.buttons.download;
        tx(e) && e.setAttribute("href", this.download);
      },
      create: function (p) {
        var d = this,
          g = SA.bindMenuItemShortcuts,
          m = SA.createButton,
          v = SA.createProgress,
          y = SA.createRange,
          b = SA.createTime,
          e = SA.setQualityMenu,
          t = SA.setSpeedMenu,
          w = SA.showMenuPanel;
        (this.elements.controls = null),
          ZT(this.config.controls) &&
            this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(m.call(this, "play-large"));
        var _ = gx("div", wx(this.config.selectors.controls.wrapper));
        this.elements.controls = _;
        var k = { class: "plyr__controls__item" };
        return (
          Vx(ZT(this.config.controls) ? this.config.controls : []).forEach(
            function (e) {
              var t, n, r, i, o, a, s, c, u, l, f, h;
              "restart" === e && _.appendChild(m.call(d, "restart", k)),
                "rewind" === e && _.appendChild(m.call(d, "rewind", k)),
                "play" === e && _.appendChild(m.call(d, "play", k)),
                "fast-forward" === e &&
                  _.appendChild(m.call(d, "fast-forward", k)),
                "progress" === e &&
                  ((t = gx("div", {
                    class: "".concat(k.class, " plyr__progress__container"),
                  })),
                  (n = gx("div", wx(d.config.selectors.progress))).appendChild(
                    y.call(d, "seek", { id: "plyr-seek-".concat(p.id) })
                  ),
                  n.appendChild(v.call(d, "buffer")),
                  d.config.tooltips.seek &&
                    ((r = gx(
                      "span",
                      { class: d.config.classNames.tooltip },
                      "00:00"
                    )),
                    n.appendChild(r),
                    (d.elements.display.seekTooltip = r)),
                  (d.elements.progress = n),
                  t.appendChild(d.elements.progress),
                  _.appendChild(t)),
                "current-time" === e &&
                  _.appendChild(b.call(d, "currentTime", k)),
                "duration" === e && _.appendChild(b.call(d, "duration", k)),
                ("mute" !== e && "volume" !== e) ||
                  ((i = d.elements.volume),
                  (tx(i) && _.contains(i)) ||
                    ((i = gx(
                      "div",
                      hx({}, k, {
                        class: "".concat(k.class, " plyr__volume").trim(),
                      })
                    )),
                    (d.elements.volume = i),
                    _.appendChild(i)),
                  "mute" === e && i.appendChild(m.call(d, "mute")),
                  "volume" !== e ||
                    sx.isIos ||
                    ((o = { max: 1, step: 0.05, value: d.config.volume }),
                    i.appendChild(
                      y.call(
                        d,
                        "volume",
                        hx(o, { id: "plyr-volume-".concat(p.id) })
                      )
                    ))),
                "captions" === e && _.appendChild(m.call(d, "captions", k)),
                "settings" !== e ||
                  rx(d.config.settings) ||
                  ((a = gx(
                    "div",
                    hx({}, k, {
                      class: "".concat(k.class, " plyr__menu").trim(),
                      hidden: "",
                    })
                  )).appendChild(
                    m.call(d, "settings", {
                      "aria-haspopup": !0,
                      "aria-controls": "plyr-settings-".concat(p.id),
                      "aria-expanded": !1,
                    })
                  ),
                  (s = gx("div", {
                    class: "plyr__menu__container",
                    id: "plyr-settings-".concat(p.id),
                    hidden: "",
                  })),
                  (c = gx("div")),
                  (u = gx("div", {
                    id: "plyr-settings-".concat(p.id, "-home"),
                  })),
                  (l = gx("div", { role: "menu" })),
                  u.appendChild(l),
                  c.appendChild(u),
                  (d.elements.settings.panels.home = u),
                  d.config.settings.forEach(function (e) {
                    var t = gx(
                      "button",
                      hx(wx(d.config.selectors.buttons.settings), {
                        type: "button",
                        class: ""
                          .concat(d.config.classNames.control, " ")
                          .concat(d.config.classNames.control, "--forward"),
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: "",
                      })
                    );
                    g.call(d, t, e),
                      Rx.call(d, t, "click", function () {
                        w.call(d, e, !1);
                      });
                    var n = gx("span", null, hA(e, d.config)),
                      r = gx("span", { class: d.config.classNames.menu.value });
                    (r.innerHTML = p[e]),
                      n.appendChild(r),
                      t.appendChild(n),
                      l.appendChild(t);
                    var i = gx("div", {
                        id: "plyr-settings-".concat(p.id, "-").concat(e),
                        hidden: "",
                      }),
                      o = gx("button", {
                        type: "button",
                        class: ""
                          .concat(d.config.classNames.control, " ")
                          .concat(d.config.classNames.control, "--back"),
                      });
                    o.appendChild(
                      gx("span", { "aria-hidden": !0 }, hA(e, d.config))
                    ),
                      o.appendChild(
                        gx(
                          "span",
                          { class: d.config.classNames.hidden },
                          hA("menuBack", d.config)
                        )
                      ),
                      Rx.call(
                        d,
                        i,
                        "keydown",
                        function (e) {
                          37 === e.which &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            w.call(d, "home", !0));
                        },
                        !1
                      ),
                      Rx.call(d, o, "click", function () {
                        w.call(d, "home", !1);
                      }),
                      i.appendChild(o),
                      i.appendChild(gx("div", { role: "menu" })),
                      c.appendChild(i),
                      (d.elements.settings.buttons[e] = t),
                      (d.elements.settings.panels[e] = i);
                  }),
                  s.appendChild(c),
                  a.appendChild(s),
                  _.appendChild(a),
                  (d.elements.settings.popup = s),
                  (d.elements.settings.menu = a)),
                "pip" === e && Ix.pip && _.appendChild(m.call(d, "pip", k)),
                "airplay" === e &&
                  Ix.airplay &&
                  _.appendChild(m.call(d, "airplay", k)),
                "download" === e &&
                  ((f = hx({}, k, {
                    element: "a",
                    href: d.download,
                    target: "_blank",
                  })),
                  d.isHTML5 && (f.download = ""),
                  (h = d.config.urls.download),
                  !WT(h) &&
                    d.isEmbed &&
                    hx(f, {
                      icon: "logo-".concat(d.provider),
                      label: d.provider,
                    }),
                  _.appendChild(m.call(d, "download", f))),
                "fullscreen" === e && _.appendChild(m.call(d, "fullscreen", k));
            }
          ),
          this.isHTML5 && e.call(this, Hx.getQualityOptions.call(this)),
          t.call(this),
          _
        );
      },
      inject: function () {
        var e,
          n = this;
        !this.config.loadSprite ||
          ((e = SA.getIconUrl.call(this)).cors && vA(e.url, "sprite-plyr")),
          (this.id = Math.floor(1e4 * Math.random()));
        var t = null;
        this.elements.controls = null;
        var i,
          r,
          o,
          a,
          s,
          c,
          u,
          l,
          f = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title,
          },
          h = !0;
        QT(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, f)),
          this.config.controls || (this.config.controls = []),
          tx(this.config.controls) || JT(this.config.controls)
            ? (t = this.config.controls)
            : ((t = SA.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: OA.getLabel.call(this),
              })),
              (h = !1)),
          h &&
            JT(this.config.controls) &&
            ((i = t),
            Object.entries(f).forEach(function (e) {
              var t = Za(e, 2),
                n = t[0],
                r = t[1];
              i = uA(i, "{".concat(n, "}"), r);
            }),
            (t = i)),
          JT(this.config.selectors.controls.container) &&
            (r = document.querySelector(
              this.config.selectors.controls.container
            )),
          tx(r) || (r = this.elements.container),
          r[tx(t) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            t
          ),
          tx(this.elements.controls) || SA.findElements.call(this),
          rx(this.elements.buttons) ||
            ((o = function (e) {
              var t = n.config.classNames.controlPressed;
              Object.defineProperty(e, "pressed", {
                enumerable: !0,
                get: function () {
                  return Ex(e, t);
                },
                set: function () {
                  kx(
                    e,
                    t,
                    0 < arguments.length &&
                      void 0 !== arguments[0] &&
                      arguments[0]
                  );
                },
              });
            }),
            Object.values(this.elements.buttons)
              .filter(Boolean)
              .forEach(function (e) {
                ZT(e) || ex(e)
                  ? Array.from(e).filter(Boolean).forEach(o)
                  : o(e);
              })),
          sx.isEdge && ox(r),
          this.config.tooltips.controls &&
            ((s = (a = this.config).classNames),
            (c = a.selectors),
            (u = ""
              .concat(c.controls.wrapper, " ")
              .concat(c.labels, " .")
              .concat(s.hidden)),
            (l = Tx.call(this, u)),
            Array.from(l).forEach(function (e) {
              kx(e, n.config.classNames.hidden, !1),
                kx(e, n.config.classNames.tooltip, !0);
            }));
      },
    };
    function TA(e, t) {
      var n,
        r = e;
      (1 < arguments.length && void 0 !== t && !t) ||
        (((n = document.createElement("a")).href = r), (r = n.href));
      try {
        return new URL(r);
      } catch (e) {
        return null;
      }
    }
    function xA(e) {
      var i = new URLSearchParams();
      return (
        KT(e) &&
          Object.entries(e).forEach(function (e) {
            var t = Za(e, 2),
              n = t[0],
              r = t[1];
            i.set(n, r);
          }),
        i
      );
    }
    function AA() {}
    var OA = {
        setup: function () {
          var e, t, n, r, i, o, a;
          this.supported.ui &&
            (!this.isVideo || this.isYouTube || (this.isHTML5 && !Ix.textTracks)
              ? ZT(this.config.controls) &&
                this.config.controls.includes("settings") &&
                this.config.settings.includes("captions") &&
                SA.setCaptionsMenu.call(this)
              : (tx(this.elements.captions) ||
                  ((this.elements.captions = gx(
                    "div",
                    wx(this.config.selectors.captions)
                  )),
                  (o = this.elements.captions),
                  (a = this.elements.wrapper),
                  tx(o) &&
                    tx(a) &&
                    a.parentNode.insertBefore(o, a.nextSibling)),
                sx.isIE &&
                  window.URL &&
                  ((e = this.media.querySelectorAll("track")),
                  Array.from(e).forEach(function (t) {
                    var e = t.getAttribute("src"),
                      n = TA(e);
                    null !== n &&
                      n.hostname !== window.location.href.hostname &&
                      ["http:", "https:"].includes(n.protocol) &&
                      mA(e, "blob")
                        .then(function (e) {
                          t.setAttribute("src", window.URL.createObjectURL(e));
                        })
                        .catch(function () {
                          vx(t);
                        });
                  })),
                (t = Vx(
                  (
                    navigator.languages || [
                      navigator.language || navigator.userLanguage || "en",
                    ]
                  ).map(function (e) {
                    return e.split("-")[0];
                  })
                )),
                "auto" ===
                  (n = (
                    this.storage.get("language") ||
                    this.config.captions.language ||
                    "auto"
                  ).toLowerCase()) && (n = Za(t, 1)[0]),
                (r = this.storage.get("captions")),
                qT(r) || (r = this.config.captions.active),
                Object.assign(this.captions, {
                  toggled: !1,
                  active: r,
                  language: n,
                  languages: t,
                }),
                this.isHTML5 &&
                  ((i = this.config.captions.update
                    ? "addtrack removetrack"
                    : "removetrack"),
                  Rx.call(
                    this,
                    this.media.textTracks,
                    i,
                    OA.update.bind(this)
                  )),
                setTimeout(OA.update.bind(this), 0)));
        },
        update: function () {
          var t = this,
            e = OA.getTracks.call(this, !0),
            n = this.captions,
            r = n.active,
            i = n.language,
            o = n.meta,
            a = n.currentTrackNode,
            s = Boolean(
              e.find(function (e) {
                return e.language === i;
              })
            );
          this.isHTML5 &&
            this.isVideo &&
            e
              .filter(function (e) {
                return !o.get(e);
              })
              .forEach(function (e) {
                t.debug.log("Track added", e),
                  o.set(e, { default: "showing" === e.mode }),
                  "showing" === e.mode && (e.mode = "hidden"),
                  Rx.call(t, e, "cuechange", function () {
                    return OA.updateCues.call(t);
                  });
              }),
            ((s && this.language !== i) || !e.includes(a)) &&
              (OA.setLanguage.call(this, i), OA.toggle.call(this, r && s)),
            kx(
              this.elements.container,
              this.config.classNames.captions.enabled,
              !rx(e)
            ),
            ZT(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              SA.setCaptionsMenu.call(this);
        },
        toggle: function (e) {
          var t = this,
            n =
              !(1 < arguments.length && void 0 !== arguments[1]) ||
              arguments[1];
          if (this.supported.ui) {
            var r = this.captions.toggled,
              i = this.config.classNames.captions.active,
              o = GT(e) ? !r : e;
            if (o !== r) {
              if (
                (n ||
                  ((this.captions.active = o),
                  this.storage.set({ captions: o })),
                !this.language && o && !n)
              ) {
                var a = OA.getTracks.call(this),
                  s = OA.findTrack.call(
                    this,
                    [this.captions.language].concat(
                      es(this.captions.languages)
                    ),
                    !0
                  );
                return (
                  (this.captions.language = s.language),
                  void OA.set.call(this, a.indexOf(s))
                );
              }
              this.elements.buttons.captions &&
                (this.elements.buttons.captions.pressed = o),
                kx(this.elements.container, i, o),
                (this.captions.toggled = o),
                SA.updateSetting.call(this, "captions"),
                Mx.call(
                  this,
                  this.media,
                  o ? "captionsenabled" : "captionsdisabled"
                );
            }
            setTimeout(function () {
              o &&
                t.captions.toggled &&
                (t.captions.currentTrackNode.mode = "hidden");
            });
          }
        },
        set: function (e) {
          var t,
            n,
            r =
              !(1 < arguments.length && void 0 !== arguments[1]) ||
              arguments[1],
            i = OA.getTracks.call(this);
          -1 !== e
            ? XT(e)
              ? e in i
                ? (this.captions.currentTrack !== e &&
                    ((n = ((t = i[(this.captions.currentTrack = e)]) || {})
                      .language),
                    (this.captions.currentTrackNode = t),
                    SA.updateSetting.call(this, "captions"),
                    r ||
                      ((this.captions.language = n),
                      this.storage.set({ language: n })),
                    this.isVimeo && this.embed.enableTextTrack(n),
                    Mx.call(this, this.media, "languagechange")),
                  OA.toggle.call(this, !0, r),
                  this.isHTML5 && this.isVideo && OA.updateCues.call(this))
                : this.debug.warn("Track not found", e)
              : this.debug.warn("Invalid caption argument", e)
            : OA.toggle.call(this, !1, r);
        },
        setLanguage: function (e) {
          var t,
            n,
            r,
            i =
              !(1 < arguments.length && void 0 !== arguments[1]) ||
              arguments[1];
          JT(e)
            ? ((t = e.toLowerCase()),
              (this.captions.language = t),
              (n = OA.getTracks.call(this)),
              (r = OA.findTrack.call(this, [t])),
              OA.set.call(this, n.indexOf(r), i))
            : this.debug.warn("Invalid language argument", e);
        },
        getTracks: function () {
          var t = this,
            n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
          return Array.from((this.media || {}).textTracks || [])
            .filter(function (e) {
              return !t.isHTML5 || n || t.captions.meta.has(e);
            })
            .filter(function (e) {
              return ["captions", "subtitles"].includes(e.kind);
            });
        },
        findTrack: function (e) {
          function n(e) {
            return Number((t.captions.meta.get(e) || {}).default);
          }
          var r,
            t = this,
            i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = OA.getTracks.call(this),
            a = Array.from(o).sort(function (e, t) {
              return n(t) - n(e);
            });
          return (
            e.every(function (t) {
              return !(r = a.find(function (e) {
                return e.language === t;
              }));
            }),
            r || (i ? a[0] : void 0)
          );
        },
        getCurrentTrack: function () {
          return OA.getTracks.call(this)[this.currentTrack];
        },
        getLabel: function (e) {
          var t = e;
          return (
            !VT(t) &&
              Ix.textTracks &&
              this.captions.toggled &&
              (t = OA.getCurrentTrack.call(this)),
            VT(t)
              ? rx(t.label)
                ? rx(t.language)
                  ? hA("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : hA("disabled", this.config)
          );
        },
        updateCues: function (e) {
          var t, n, r, i;
          this.supported.ui &&
            (tx(this.elements.captions)
              ? GT(e) || Array.isArray(e)
                ? ((n = e) ||
                    ((t = OA.getCurrentTrack.call(this)),
                    (n = Array.from((t || {}).activeCues || [])
                      .map(function (e) {
                        return e.getCueAsHTML();
                      })
                      .map(fA))),
                  (r = n
                    .map(function (e) {
                      return e.trim();
                    })
                    .join("\n")) !== this.elements.captions.innerHTML &&
                    (yx(this.elements.captions),
                    ((i = gx(
                      "span",
                      wx(this.config.selectors.caption)
                    )).innerHTML = r),
                    this.elements.captions.appendChild(i),
                    Mx.call(this, this.media, "cuechange")))
                : this.debug.warn("updateCues: Invalid input", e)
              : this.debug.warn("No captions element to render to"));
        },
      },
      PA = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.6.2/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
          forced: !1,
          onChange: null,
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Перезапустить",
          rewind: "Rewind {seektime}s",
          play: "Смотреть",
          pause: "Пауза",
          fastForward: "Forward {seektime}s",
          seek: "Поиск",
          seekLabel: "{currentTime} of {duration}",
          played: "Проигрываемый",
          buffered: "Буфферизация",
          currentTime: "Выбранное время",
          duration: "Продолжительность",
          volume: "Звук",
          mute: "Выключить",
          unmute: "Включить",
          enableCaptions: "Включить субтитры",
          disableCaptions: "Выключить субтитры",
          download: "Загрузить",
          enterFullscreen: "Полноэкранный режим",
          exitFullscreen: "Выход из полноэкранного режима",
          frameTitle: "Player for {title}",
          captions: "Субтитры",
          settings: "Настройки",
          pip: "В отдельное окно",
          menuBack: "Go back to previous menu",
          speed: "Скорость",
          normal: "1x",
          quality: "Качество",
          loop: "Loop",
          start: "Старт",
          end: "Конец",
          all: "Все",
          reset: "Сброс",
          disabled: "Заблокировано",
          enabled: "Разблокировано",
          advertisement: "Реклама",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/v2/video/{0}.json",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api:
              "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isIos: "plyr--is-ios",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          tabFocus: "plyr__tab-focus",
        },
        attributes: {
          embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" },
        },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
          premium: !1,
          referrerPolicy: null,
        },
        youtube: {
          noCookie: !0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
      },
      IA = "picture-in-picture",
      jA = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      CA = "video",
      RA =
        (Ka(UA, [
          {
            key: "log",
            get: function () {
              return this.enabled
                ? Function.prototype.bind.call(console.log, console)
                : AA;
            },
          },
          {
            key: "warn",
            get: function () {
              return this.enabled
                ? Function.prototype.bind.call(console.warn, console)
                : AA;
            },
          },
          {
            key: "error",
            get: function () {
              return this.enabled
                ? Function.prototype.bind.call(console.error, console)
                : AA;
            },
          },
        ]),
        UA),
      LA =
        (Ka(
          MA,
          [
            {
              key: "onChange",
              value: function () {
                var e;
                this.enabled &&
                  ((e = this.player.elements.buttons.fullscreen),
                  tx(e) && (e.pressed = this.active),
                  Mx.call(
                    this.player,
                    this.target,
                    this.active ? "enterfullscreen" : "exitfullscreen",
                    !0
                  ));
              },
            },
            {
              key: "toggleFallback",
              value: function () {
                var e,
                  t,
                  n,
                  r =
                    0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                r
                  ? (this.scrollPosition = {
                      x: window.scrollX || 0,
                      y: window.scrollY || 0,
                    })
                  : window.scrollTo(
                      this.scrollPosition.x,
                      this.scrollPosition.y
                    ),
                  (document.body.style.overflow = r ? "hidden" : ""),
                  kx(
                    this.target,
                    this.player.config.classNames.fullscreen.fallback,
                    r
                  ),
                  sx.isIos &&
                    ((e = document.head.querySelector('meta[name="viewport"]')),
                    (t = "viewport-fit=cover"),
                    e ||
                      (e = document.createElement("meta")).setAttribute(
                        "name",
                        "viewport"
                      ),
                    (n = JT(e.content) && e.content.includes(t)),
                    r
                      ? ((this.cleanupViewport = !n),
                        n || (e.content += ",".concat(t)))
                      : this.cleanupViewport &&
                        (e.content = e.content
                          .split(",")
                          .filter(function (e) {
                            return e.trim() !== t;
                          })
                          .join(","))),
                  this.onChange();
              },
            },
            {
              key: "trapFocus",
              value: function (e) {
                var t, n, r, i;
                !sx.isIos &&
                  this.active &&
                  "Tab" === e.key &&
                  9 === e.keyCode &&
                  ((t = document.activeElement),
                  (r = Za(
                    (n = Tx.call(
                      this.player,
                      "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                    )),
                    1
                  )[0]),
                  t !== (i = n[n.length - 1]) || e.shiftKey
                    ? t === r && e.shiftKey && (i.focus(), e.preventDefault())
                    : (r.focus(), e.preventDefault()));
              },
            },
            {
              key: "update",
              value: function () {
                var e;
                this.enabled
                  ? ((e = this.forceFallback
                      ? "Fallback (forced)"
                      : MA.native
                      ? "Native"
                      : "Fallback"),
                    this.player.debug.log("".concat(e, " fullscreen enabled")))
                  : this.player.debug.log(
                      "Fullscreen not supported and fallback disabled"
                    ),
                  kx(
                    this.player.elements.container,
                    this.player.config.classNames.fullscreen.enabled,
                    this.enabled
                  );
              },
            },
            {
              key: "enter",
              value: function () {
                this.enabled &&
                  (sx.isIos && this.player.config.fullscreen.iosNative
                    ? this.target.webkitEnterFullscreen()
                    : !MA.native || this.forceFallback
                    ? this.toggleFallback(!0)
                    : this.prefix
                    ? rx(this.prefix) ||
                      this.target[
                        "".concat(this.prefix, "Request").concat(this.property)
                      ]()
                    : this.target.requestFullscreen({ navigationUI: "hide" }));
              },
            },
            {
              key: "exit",
              value: function () {
                var e;
                this.enabled &&
                  (sx.isIos && this.player.config.fullscreen.iosNative
                    ? (this.target.webkitExitFullscreen(),
                      Ux(this.player.play()))
                    : !MA.native || this.forceFallback
                    ? this.toggleFallback(!1)
                    : this.prefix
                    ? rx(this.prefix) ||
                      ((e = "moz" === this.prefix ? "Cancel" : "Exit"),
                      document[
                        "".concat(this.prefix).concat(e).concat(this.property)
                      ]())
                    : (
                        document.cancelFullScreen || document.exitFullscreen
                      ).call(document));
              },
            },
            {
              key: "toggle",
              value: function () {
                this.active ? this.exit() : this.enter();
              },
            },
            {
              key: "usingNative",
              get: function () {
                return MA.native && !this.forceFallback;
              },
            },
            {
              key: "enabled",
              get: function () {
                return (
                  (MA.native || this.player.config.fullscreen.fallback) &&
                  this.player.config.fullscreen.enabled &&
                  this.player.supported.ui &&
                  this.player.isVideo
                );
              },
            },
            {
              key: "active",
              get: function () {
                if (!this.enabled) return !1;
                if (!MA.native || this.forceFallback)
                  return Ex(
                    this.target,
                    this.player.config.classNames.fullscreen.fallback
                  );
                var e = this.prefix
                  ? document[
                      "".concat(this.prefix).concat(this.property, "Element")
                    ]
                  : document.fullscreenElement;
                return e && e.shadowRoot
                  ? e === this.target.getRootNode().host
                  : e === this.target;
              },
            },
            {
              key: "target",
              get: function () {
                return sx.isIos && this.player.config.fullscreen.iosNative
                  ? this.player.media
                  : this.player.elements.fullscreen ||
                      this.player.elements.container;
              },
            },
          ],
          [
            {
              key: "native",
              get: function () {
                return !!(
                  document.fullscreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.msFullscreenEnabled
                );
              },
            },
            {
              key: "prefix",
              get: function () {
                if (QT(document.exitFullscreen)) return "";
                var t = "";
                return (
                  ["webkit", "moz", "ms"].some(function (e) {
                    return !(
                      (!QT(document["".concat(e, "ExitFullscreen")]) &&
                        !QT(document["".concat(e, "CancelFullScreen")])) ||
                      ((t = e), 0)
                    );
                  }),
                  t
                );
              },
            },
            {
              key: "property",
              get: function () {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
              },
            },
          ]
        ),
        MA),
      NA =
        Math.sign ||
        function (e) {
          return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
        };
    function MA(e) {
      var t,
        n,
        r = this;
      $a(this, MA),
        (this.player = e),
        (this.prefix = MA.prefix),
        (this.property = MA.property),
        (this.scrollPosition = { x: 0, y: 0 }),
        (this.forceFallback = "force" === e.config.fullscreen.fallback),
        (this.player.elements.fullscreen =
          e.config.fullscreen.container &&
          ((t = this.player.elements.container),
          (n = e.config.fullscreen.container),
          (
            Element.prototype.closest ||
            function () {
              var e = this;
              do {
                if (Sx.matches(e, n)) return e;
                e = e.parentElement || e.parentNode;
              } while (null !== e && 1 === e.nodeType);
              return null;
            }
          ).call(t, n))),
        Rx.call(
          this.player,
          document,
          "ms" === this.prefix
            ? "MSFullscreenChange"
            : "".concat(this.prefix, "fullscreenchange"),
          function () {
            r.onChange();
          }
        ),
        Rx.call(
          this.player,
          this.player.elements.container,
          "dblclick",
          function (e) {
            (tx(r.player.elements.controls) &&
              r.player.elements.controls.contains(e.target)) ||
              r.toggle();
          }
        ),
        Rx.call(this, this.player.elements.container, "keydown", function (e) {
          return r.trapFocus(e);
        }),
        this.update();
    }
    function UA() {
      var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
      $a(this, UA),
        (this.enabled = window.console && e),
        this.enabled && this.log("Debugging enabled");
    }
    function DA(i, e) {
      var o = 1 < arguments.length && void 0 !== e ? e : 1;
      return new Promise(function (e, t) {
        function n() {
          delete r.onload, delete r.onerror, (r.naturalWidth >= o ? e : t)(r);
        }
        var r = new Image();
        Object.assign(r, { onload: n, onerror: n, src: i });
      });
    }
    Cm({ target: "Math", stat: !0 }, { sign: NA });
    var FA = {
        addStyleHook: function () {
          kx(
            this.elements.container,
            this.config.selectors.container.replace(".", ""),
            !0
          ),
            kx(
              this.elements.container,
              this.config.classNames.uiSupported,
              this.supported.ui
            );
        },
        toggleNativeControls: function () {
          0 < arguments.length &&
          void 0 !== arguments[0] &&
          arguments[0] &&
          this.isHTML5
            ? this.media.setAttribute("controls", "")
            : this.media.removeAttribute("controls");
        },
        build: function () {
          var e = this;
          if ((this.listeners.media(), !this.supported.ui))
            return (
              this.debug.warn(
                "Basic support only for "
                  .concat(this.provider, " ")
                  .concat(this.type)
              ),
              void FA.toggleNativeControls.call(this, !0)
            );
          tx(this.elements.controls) ||
            (SA.inject.call(this), this.listeners.controls()),
            FA.toggleNativeControls.call(this),
            this.isHTML5 && OA.setup.call(this),
            (this.volume = null),
            (this.muted = null),
            (this.loop = null),
            (this.quality = null),
            (this.speed = null),
            SA.updateVolume.call(this),
            SA.timeUpdate.call(this),
            FA.checkPlaying.call(this),
            kx(
              this.elements.container,
              this.config.classNames.pip.supported,
              Ix.pip && this.isHTML5 && this.isVideo
            ),
            kx(
              this.elements.container,
              this.config.classNames.airplay.supported,
              Ix.airplay && this.isHTML5
            ),
            kx(this.elements.container, this.config.classNames.isIos, sx.isIos),
            kx(
              this.elements.container,
              this.config.classNames.isTouch,
              this.touch
            ),
            (this.ready = !0),
            setTimeout(function () {
              Mx.call(e, e.media, "ready");
            }, 0),
            FA.setTitle.call(this),
            this.poster &&
              FA.setPoster.call(this, this.poster, !1).catch(function () {}),
            this.config.duration && SA.durationUpdate.call(this);
        },
        setTitle: function () {
          var t = hA("play", this.config);
          if (
            (JT(this.config.title) &&
              !rx(this.config.title) &&
              (t += ", ".concat(this.config.title)),
            Array.from(this.elements.buttons.play || []).forEach(function (e) {
              e.setAttribute("aria-label", t);
            }),
            this.isEmbed)
          ) {
            var e = xx.call(this, "iframe");
            if (!tx(e)) return;
            var n = rx(this.config.title) ? "video" : this.config.title,
              r = hA("frameTitle", this.config);
            e.setAttribute("title", r.replace("{title}", n));
          }
        },
        togglePoster: function (e) {
          kx(this.elements.container, this.config.classNames.posterEnabled, e);
        },
        setPoster: function (t) {
          var n = this;
          return (!(1 < arguments.length && void 0 !== arguments[1]) ||
            arguments[1]) &&
            this.poster
            ? Promise.reject(new Error("Poster already set"))
            : (this.media.setAttribute("data-poster", t),
              function () {
                var t = this;
                return new Promise(function (e) {
                  return t.ready
                    ? setTimeout(e, 0)
                    : Rx.call(t, t.elements.container, "ready", e);
                }).then(function () {});
              }
                .call(this)
                .then(function () {
                  return DA(t);
                })
                .catch(function (e) {
                  throw (t === n.poster && FA.togglePoster.call(n, !1), e);
                })
                .then(function () {
                  if (t !== n.poster)
                    throw new Error(
                      "setPoster cancelled by later call to setPoster"
                    );
                })
                .then(function () {
                  return (
                    Object.assign(n.elements.poster.style, {
                      backgroundImage: "url('".concat(t, "')"),
                      backgroundSize: "",
                    }),
                    FA.togglePoster.call(n, !0),
                    t
                  );
                }));
        },
        checkPlaying: function (e) {
          var t = this;
          kx(
            this.elements.container,
            this.config.classNames.playing,
            this.playing
          ),
            kx(
              this.elements.container,
              this.config.classNames.paused,
              this.paused
            ),
            kx(
              this.elements.container,
              this.config.classNames.stopped,
              this.stopped
            ),
            Array.from(this.elements.buttons.play || []).forEach(function (e) {
              Object.assign(e, { pressed: t.playing }),
                e.setAttribute(
                  "aria-label",
                  hA(t.playing ? "pause" : "play", t.config)
                );
            }),
            (BT(e) && "timeupdate" === e.type) || FA.toggleControls.call(this);
        },
        checkLoading: function (e) {
          var t = this;
          (this.loading = ["stalled", "waiting"].includes(e.type)),
            clearTimeout(this.timers.loading),
            (this.timers.loading = setTimeout(
              function () {
                kx(
                  t.elements.container,
                  t.config.classNames.loading,
                  t.loading
                ),
                  FA.toggleControls.call(t);
              },
              this.loading ? 250 : 0
            ));
        },
        toggleControls: function (e) {
          var t,
            n = this.elements.controls;
          n &&
            this.config.hideControls &&
            ((t = this.touch && this.lastSeekTime + 2e3 > Date.now()),
            this.toggleControls(
              Boolean(
                e || this.loading || this.paused || n.pressed || n.hover || t
              )
            ));
        },
        migrateStyles: function () {
          var t = this;
          Object.values(Qa({}, this.media.style))
            .filter(function (e) {
              return !rx(e) && e.startsWith("--plyr");
            })
            .forEach(function (e) {
              t.elements.container.style.setProperty(
                e,
                t.media.style.getPropertyValue(e)
              ),
                t.media.style.removeProperty(e);
            }),
            rx(this.media.style) && this.media.removeAttribute("style");
        },
      },
      qA =
        (Ka(zA, [
          {
            key: "handleKey",
            value: function (e) {
              var t = this.player,
                n = t.elements,
                r = e.keyCode ? e.keyCode : e.which,
                i = "keydown" === e.type,
                o = i && r === this.lastKey;
              if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && XT(r))
                if (i) {
                  var a = document.activeElement;
                  if (tx(a)) {
                    var s = t.config.selectors.editable;
                    if (a !== n.inputs.seek && Sx(a, s)) return;
                    if (32 === e.which && Sx(a, 'button, [role^="menuitem"]'))
                      return;
                  }
                  switch (
                    ([
                      32,
                      37,
                      38,
                      39,
                      40,
                      48,
                      49,
                      50,
                      51,
                      52,
                      53,
                      54,
                      56,
                      57,
                      67,
                      70,
                      73,
                      75,
                      76,
                      77,
                      79,
                    ].includes(r) && (e.preventDefault(), e.stopPropagation()),
                    r)
                  ) {
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      o || (t.currentTime = (t.duration / 10) * (r - 48));
                      break;
                    case 32:
                    case 75:
                      o || Ux(t.togglePlay());
                      break;
                    case 38:
                      t.increaseVolume(0.1);
                      break;
                    case 40:
                      t.decreaseVolume(0.1);
                      break;
                    case 77:
                      o || (t.muted = !t.muted);
                      break;
                    case 39:
                      t.forward();
                      break;
                    case 37:
                      t.rewind();
                      break;
                    case 70:
                      t.fullscreen.toggle();
                      break;
                    case 67:
                      o || t.toggleCaptions();
                      break;
                    case 76:
                      t.loop = !t.loop;
                  }
                  27 === r &&
                    !t.fullscreen.usingNative &&
                    t.fullscreen.active &&
                    t.fullscreen.toggle(),
                    (this.lastKey = r);
                } else this.lastKey = null;
            },
          },
          {
            key: "toggleMenu",
            value: function (e) {
              SA.toggleMenu.call(this.player, e);
            },
          },
          {
            key: "firstTouch",
            value: function () {
              var e = this.player,
                t = e.elements;
              (e.touch = !0), kx(t.container, e.config.classNames.isTouch, !0);
            },
          },
          {
            key: "setTabFocus",
            value: function (e) {
              var t,
                n,
                r = this.player,
                i = r.elements;
              clearTimeout(this.focusTimer),
                ("keydown" === e.type && 9 !== e.which) ||
                  ("keydown" === e.type && (this.lastKeyDown = e.timeStamp),
                  (n = e.timeStamp - this.lastKeyDown <= 20),
                  ("focus" === e.type && !n) ||
                    ((t = r.config.classNames.tabFocus),
                    kx(Tx.call(r, ".".concat(t)), t, !1),
                    "focusout" !== e.type &&
                      (this.focusTimer = setTimeout(function () {
                        var e = document.activeElement;
                        i.container.contains(e) &&
                          kx(
                            document.activeElement,
                            r.config.classNames.tabFocus,
                            !0
                          );
                      }, 10))));
            },
          },
          {
            key: "global",
            value: function () {
              var e =
                  !(0 < arguments.length && void 0 !== arguments[0]) ||
                  arguments[0],
                t = this.player;
              t.config.keyboard.global &&
                Cx.call(t, window, "keydown keyup", this.handleKey, e, !1),
                Cx.call(t, document.body, "click", this.toggleMenu, e),
                Nx.call(t, document.body, "touchstart", this.firstTouch),
                Cx.call(
                  t,
                  document.body,
                  "keydown focus blur focusout",
                  this.setTabFocus,
                  e,
                  !1,
                  !0
                );
            },
          },
          {
            key: "container",
            value: function () {
              var p = this.player,
                e = p.config,
                d = p.elements,
                r = p.timers;
              function g(e) {
                if (!e) return Bx.call(p);
                var t = d.container.getBoundingClientRect(),
                  n = t.width,
                  r = t.height;
                return Bx.call(p, "".concat(n, ":").concat(r));
              }
              function m() {
                clearTimeout(r.resized), (r.resized = setTimeout(g, 50));
              }
              !e.keyboard.global &&
                e.keyboard.focused &&
                Rx.call(p, d.container, "keydown keyup", this.handleKey, !1),
                Rx.call(
                  p,
                  d.container,
                  "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                  function (e) {
                    var t = d.controls;
                    t &&
                      "enterfullscreen" === e.type &&
                      ((t.pressed = !1), (t.hover = !1));
                    var n = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(e.type) &&
                      (FA.toggleControls.call(p, !0),
                      (n = p.touch ? 3e3 : 2e3)),
                      clearTimeout(r.controls),
                      (r.controls = setTimeout(function () {
                        return FA.toggleControls.call(p, !1);
                      }, n));
                  }
                ),
                Rx.call(
                  p,
                  d.container,
                  "enterfullscreen exitfullscreen",
                  function (e) {
                    var t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      c,
                      u,
                      l = p.fullscreen,
                      f = l.target,
                      h = l.usingNative;
                    f !== d.container ||
                      (!p.isEmbed && rx(p.config.ratio)) ||
                      ((t = "enterfullscreen" === e.type),
                      (n = g(t)).padding,
                      (r = n.ratio),
                      (i = t),
                      p.isVimeo &&
                        !p.config.vimeo.premium &&
                        ((o = p.elements.wrapper.firstChild),
                        (a = Za(r, 2)[1]),
                        (c = (s = Za(qx.call(p), 2))[0]),
                        (u = s[1]),
                        (o.style.maxWidth = i
                          ? "".concat((a / u) * c, "px")
                          : null),
                        (o.style.margin = i ? "0 auto" : null)),
                      h ||
                        (t
                          ? Rx.call(p, window, "resize", m)
                          : Lx.call(p, window, "resize", m)));
                  }
                );
            },
          },
          {
            key: "media",
            value: function () {
              var t = this,
                r = this.player,
                i = r.elements;
              if (
                (Rx.call(r, r.media, "timeupdate seeking seeked", function (e) {
                  return SA.timeUpdate.call(r, e);
                }),
                Rx.call(
                  r,
                  r.media,
                  "durationchange loadeddata loadedmetadata",
                  function (e) {
                    return SA.durationUpdate.call(r, e);
                  }
                ),
                Rx.call(r, r.media, "ended", function () {
                  r.isHTML5 &&
                    r.isVideo &&
                    r.config.resetOnEnd &&
                    (r.restart(), r.pause());
                }),
                Rx.call(
                  r,
                  r.media,
                  "progress playing seeking seeked",
                  function (e) {
                    return SA.updateProgress.call(r, e);
                  }
                ),
                Rx.call(r, r.media, "volumechange", function (e) {
                  return SA.updateVolume.call(r, e);
                }),
                Rx.call(
                  r,
                  r.media,
                  "playing play pause ended emptied timeupdate",
                  function (e) {
                    return FA.checkPlaying.call(r, e);
                  }
                ),
                Rx.call(
                  r,
                  r.media,
                  "waiting canplay seeked playing",
                  function (e) {
                    return FA.checkLoading.call(r, e);
                  }
                ),
                r.supported.ui && r.config.clickToPlay && !r.isAudio)
              ) {
                var n = xx.call(r, ".".concat(r.config.classNames.video));
                if (!tx(n)) return;
                Rx.call(r, i.container, "click", function (e) {
                  ([i.container, n].includes(e.target) ||
                    n.contains(e.target)) &&
                    ((r.touch && r.config.hideControls) ||
                      (r.ended
                        ? (t.proxy(e, r.restart, "restart"),
                          t.proxy(
                            e,
                            function () {
                              Ux(r.play());
                            },
                            "play"
                          ))
                        : t.proxy(
                            e,
                            function () {
                              Ux(r.togglePlay());
                            },
                            "play"
                          )));
                });
              }
              r.supported.ui &&
                r.config.disableContextMenu &&
                Rx.call(
                  r,
                  i.wrapper,
                  "contextmenu",
                  function (e) {
                    e.preventDefault();
                  },
                  !1
                ),
                Rx.call(r, r.media, "volumechange", function () {
                  r.storage.set({ volume: r.volume, muted: r.muted });
                }),
                Rx.call(r, r.media, "ratechange", function () {
                  SA.updateSetting.call(r, "speed"),
                    r.storage.set({ speed: r.speed });
                }),
                Rx.call(r, r.media, "qualitychange", function (e) {
                  SA.updateSetting.call(r, "quality", null, e.detail.quality);
                }),
                Rx.call(r, r.media, "ready qualitychange", function () {
                  SA.setDownloadUrl.call(r);
                });
              var e = r.config.events.concat(["keyup", "keydown"]).join(" ");
              Rx.call(r, r.media, e, function (e) {
                var t = e.detail,
                  n = void 0 === t ? {} : t;
                "error" === e.type && (n = r.media.error),
                  Mx.call(r, i.container, e.type, !0, n);
              });
            },
          },
          {
            key: "proxy",
            value: function (e, t, n) {
              var r = this.player,
                i = r.config.listeners[n],
                o = !0;
              QT(i) && (o = i.call(r, e)), !1 !== o && QT(t) && t.call(r, e);
            },
          },
          {
            key: "bind",
            value: function (e, t, n, r) {
              var i = this,
                o =
                  !(4 < arguments.length && void 0 !== arguments[4]) ||
                  arguments[4],
                a = this.player,
                s = a.config.listeners[r],
                c = QT(s);
              Rx.call(
                a,
                e,
                t,
                function (e) {
                  return i.proxy(e, n, r);
                },
                o && !c
              );
            },
          },
          {
            key: "controls",
            value: function () {
              var e,
                r = this,
                s = this.player,
                i = s.elements,
                t = sx.isIE ? "change" : "input";
              i.buttons.play &&
                Array.from(i.buttons.play).forEach(function (e) {
                  r.bind(
                    e,
                    "click",
                    function () {
                      Ux(s.togglePlay());
                    },
                    "play"
                  );
                }),
                this.bind(i.buttons.restart, "click", s.restart, "restart"),
                this.bind(i.buttons.rewind, "click", s.rewind, "rewind"),
                this.bind(
                  i.buttons.fastForward,
                  "click",
                  s.forward,
                  "fastForward"
                ),
                this.bind(
                  i.buttons.mute,
                  "click",
                  function () {
                    s.muted = !s.muted;
                  },
                  "mute"
                ),
                this.bind(i.buttons.captions, "click", function () {
                  return s.toggleCaptions();
                }),
                this.bind(
                  i.buttons.download,
                  "click",
                  function () {
                    Mx.call(s, s.media, "download");
                  },
                  "download"
                ),
                this.bind(
                  i.buttons.fullscreen,
                  "click",
                  function () {
                    s.fullscreen.toggle();
                  },
                  "fullscreen"
                ),
                this.bind(
                  i.buttons.pip,
                  "click",
                  function () {
                    s.pip = "toggle";
                  },
                  "pip"
                ),
                this.bind(i.buttons.airplay, "click", s.airplay, "airplay"),
                this.bind(
                  i.buttons.settings,
                  "click",
                  function (e) {
                    e.stopPropagation(),
                      e.preventDefault(),
                      SA.toggleMenu.call(s, e);
                  },
                  null,
                  !1
                ),
                this.bind(
                  i.buttons.settings,
                  "keyup",
                  function (e) {
                    var t = e.which;
                    [13, 32].includes(t) &&
                      (13 !== t
                        ? (e.preventDefault(),
                          e.stopPropagation(),
                          SA.toggleMenu.call(s, e))
                        : SA.focusFirstMenuItem.call(s, null, !0));
                  },
                  null,
                  !1
                ),
                this.bind(i.settings.menu, "keydown", function (e) {
                  27 === e.which && SA.toggleMenu.call(s, e);
                }),
                this.bind(i.inputs.seek, "mousedown mousemove", function (e) {
                  var t = i.progress.getBoundingClientRect(),
                    n = (100 / t.width) * (e.pageX - t.left);
                  e.currentTarget.setAttribute("seek-value", n);
                }),
                this.bind(
                  i.inputs.seek,
                  "mousedown mouseup keydown keyup touchstart touchend",
                  function (e) {
                    var t,
                      n,
                      r = e.currentTarget,
                      i = e.keyCode ? e.keyCode : e.which;
                    (HT(e) && 39 !== i && 37 !== i) ||
                      ((s.lastSeekTime = Date.now()),
                      (t = r.hasAttribute("play-on-seeked")),
                      (n = ["mouseup", "touchend", "keyup"].includes(e.type)),
                      t && n
                        ? (r.removeAttribute("play-on-seeked"), Ux(s.play()))
                        : !n &&
                          s.playing &&
                          (r.setAttribute("play-on-seeked", ""), s.pause()));
                  }
                ),
                sx.isIos &&
                  ((e = Tx.call(s, 'input[type="range"]')),
                  Array.from(e).forEach(function (e) {
                    return r.bind(e, t, function (e) {
                      return ox(e.target);
                    });
                  })),
                this.bind(
                  i.inputs.seek,
                  t,
                  function (e) {
                    var t = e.currentTarget,
                      n = t.getAttribute("seek-value");
                    rx(n) && (n = t.value),
                      t.removeAttribute("seek-value"),
                      (s.currentTime = (n / t.max) * s.duration);
                  },
                  "seek"
                ),
                this.bind(
                  i.progress,
                  "mouseenter mouseleave mousemove",
                  function (e) {
                    return SA.updateSeekTooltip.call(s, e);
                  }
                ),
                this.bind(i.progress, "mousemove touchmove", function (e) {
                  var t = s.previewThumbnails;
                  t && t.loaded && t.startMove(e);
                }),
                this.bind(i.progress, "mouseleave touchend click", function () {
                  var e = s.previewThumbnails;
                  e && e.loaded && e.endMove(!1, !0);
                }),
                this.bind(i.progress, "mousedown touchstart", function (e) {
                  var t = s.previewThumbnails;
                  t && t.loaded && t.startScrubbing(e);
                }),
                this.bind(i.progress, "mouseup touchend", function (e) {
                  var t = s.previewThumbnails;
                  t && t.loaded && t.endScrubbing(e);
                }),
                sx.isWebkit &&
                  Array.from(Tx.call(s, 'input[type="range"]')).forEach(
                    function (e) {
                      r.bind(e, "input", function (e) {
                        return SA.updateRangeFill.call(s, e.target);
                      });
                    }
                  ),
                s.config.toggleInvert &&
                  !tx(i.display.duration) &&
                  this.bind(i.display.currentTime, "click", function () {
                    0 !== s.currentTime &&
                      ((s.config.invertTime = !s.config.invertTime),
                      SA.timeUpdate.call(s));
                  }),
                this.bind(
                  i.inputs.volume,
                  t,
                  function (e) {
                    s.volume = e.target.value;
                  },
                  "volume"
                ),
                this.bind(i.controls, "mouseenter mouseleave", function (e) {
                  i.controls.hover = !s.touch && "mouseenter" === e.type;
                }),
                i.fullscreen &&
                  Array.from(i.fullscreen.children)
                    .filter(function (e) {
                      return !e.contains(i.container);
                    })
                    .forEach(function (e) {
                      r.bind(e, "mouseenter mouseleave", function (e) {
                        i.controls.hover = !s.touch && "mouseenter" === e.type;
                      });
                    }),
                this.bind(
                  i.controls,
                  "mousedown mouseup touchstart touchend touchcancel",
                  function (e) {
                    i.controls.pressed = ["mousedown", "touchstart"].includes(
                      e.type
                    );
                  }
                ),
                this.bind(i.controls, "focusin", function () {
                  var e = s.config,
                    t = s.timers;
                  kx(i.controls, e.classNames.noTransition, !0),
                    FA.toggleControls.call(s, !0),
                    setTimeout(function () {
                      kx(i.controls, e.classNames.noTransition, !1);
                    }, 0);
                  var n = r.touch ? 3e3 : 4e3;
                  clearTimeout(t.controls),
                    (t.controls = setTimeout(function () {
                      return FA.toggleControls.call(s, !1);
                    }, n));
                }),
                this.bind(
                  i.inputs.volume,
                  "wheel",
                  function (e) {
                    var t = e.webkitDirectionInvertedFromDevice,
                      n = Za(
                        [e.deltaX, -e.deltaY].map(function (e) {
                          return t ? -e : e;
                        }),
                        2
                      ),
                      r = n[0],
                      i = n[1],
                      o = Math.sign(Math.abs(r) > Math.abs(i) ? r : i);
                    s.increaseVolume(o / 50);
                    var a = s.media.volume;
                    ((1 === o && a < 1) || (-1 === o && 0 < a)) &&
                      e.preventDefault();
                  },
                  "volume",
                  !1
                );
            },
          },
        ]),
        zA),
      BA = yv("splice"),
      HA = Ov("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      VA = Math.max,
      WA = Math.min;
    function zA(e) {
      $a(this, zA),
        (this.player = e),
        (this.lastKey = null),
        (this.focusTimer = null),
        (this.lastKeyDown = null),
        (this.handleKey = this.handleKey.bind(this)),
        (this.toggleMenu = this.toggleMenu.bind(this)),
        (this.setTabFocus = this.setTabFocus.bind(this)),
        (this.firstTouch = this.firstTouch.bind(this));
    }
    Cm(
      { target: "Array", proto: !0, forced: !BA || !HA },
      {
        splice: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            c = Rm(this),
            u = Am(c.length),
            l = Om(e, u),
            f = arguments.length;
          if (
            (0 === f
              ? (n = r = 0)
              : (r =
                  1 === f
                    ? ((n = 0), u - l)
                    : ((n = f - 2), WA(VA(xm(t), 0), u - l))),
            9007199254740991 < u + n - r)
          )
            throw TypeError("Maximum allowed length exceeded");
          for (i = Mm(c, r), o = 0; o < r; o++)
            (a = l + o) in c && Lm(i, o, c[a]);
          if (n < (i.length = r)) {
            for (o = l; o < u - r; o++)
              (s = o + n), (a = o + r) in c ? (c[s] = c[a]) : delete c[s];
            for (o = u; u - r + n < o; o--) delete c[o - 1];
          } else if (r < n)
            for (o = u - r; l < o; o--)
              (s = o + n - 1),
                (a = o + r - 1) in c ? (c[s] = c[a]) : delete c[s];
          for (o = 0; o < n; o++) c[o + l] = arguments[o + 2];
          return (c.length = u - r + n), i;
        },
      }
    );
    var YA = t(function (e, t) {
      function f(e, t) {
        if (e) {
          var n = u[e];
          if (((c[e] = t), n)) for (; n.length; ) n[0](e, t), n.splice(0, 1);
        }
      }
      function h(e, t) {
        e.call && (e = { success: e }),
          t.length ? (e.error || p)(t) : (e.success || p)(e);
      }
      function n(e, t, n) {
        var u, l;
        if ((t && t.trim && (u = t), (l = (u ? n : t) || {}), u)) {
          if (u in i) throw "LoadJS";
          i[u] = !0;
        }
        function r(s, c) {
          !(function (e, t) {
            for (
              var i = (e = e.push ? e : [e]).length,
                n = i,
                o = [],
                r = function (e, t, n) {
                  if (("e" == t && o.push(e), "b" == t)) {
                    if (!n) return;
                    o.push(e);
                  }
                  var r;
                  --i ||
                    (h(l, (r = o)),
                    s && h({ success: s, error: c }, r),
                    f(u, r));
                },
                a = 0;
              a < n;
              a++
            )
              !(function n(r, i, o, a) {
                var s,
                  c,
                  e = document,
                  t = o.async,
                  u = (o.numRetries || 0) + 1,
                  l = o.before || p,
                  f = r.replace(/[\?|#].*$/, ""),
                  h = r.replace(/^(css|img)!/, "");
                (a = a || 0),
                  /(^css!|\.css$)/.test(f)
                    ? (((c = e.createElement("link")).rel = "stylesheet"),
                      (c.href = h),
                      (s = "hideFocus" in c) &&
                        c.relList &&
                        ((s = 0), (c.rel = "preload"), (c.as = "style")))
                    : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f)
                    ? ((c = e.createElement("img")).src = h)
                    : (((c = e.createElement("script")).src = r),
                      (c.async = void 0 === t || t)),
                  (c.onload = c.onerror = c.onbeforeload = function (e) {
                    var t = e.type[0];
                    if (s)
                      try {
                        c.sheet.cssText.length || (t = "e");
                      } catch (e) {
                        18 != e.code && (t = "e");
                      }
                    if ("e" == t) {
                      if ((a += 1) < u) return n(r, i, o, a);
                    } else if ("preload" == c.rel && "style" == c.as)
                      return (c.rel = "stylesheet");
                    i(r, t, e.defaultPrevented);
                  }),
                  !1 !== l(r, c) && e.head.appendChild(c);
              })(e[a], r, t);
          })(e, l);
        }
        if (l.returnPromise) return new Promise(r);
        r();
      }
      var p, i, c, u;
      e.exports =
        ((p = function () {}),
        (i = {}),
        (c = {}),
        (u = {}),
        (n.ready = function (e, s) {
          return (
            (function (e) {
              e = e.push ? e : [e];
              for (
                var t,
                  n,
                  r = [],
                  i = e.length,
                  o = i,
                  a = function (e, t) {
                    t.length && r.push(e), --o || h(s, r);
                  };
                i--;

              )
                (t = e[i]), (n = c[t]) ? a(t, n) : (u[t] = u[t] || []).push(a);
            })(e),
            n
          );
        }),
        (n.done = function (e) {
          f(e, []);
        }),
        (n.reset = function () {
          (i = {}), (c = {}), (u = {});
        }),
        (n.isDefined = function (e) {
          return e in i;
        }),
        n);
    });
    function $A(n) {
      return new Promise(function (e, t) {
        YA(n, { success: e, error: t });
      });
    }
    function GA(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          Mx.call(this, this.media, e ? "play" : "pause"));
    }
    var KA = {
      setup: function () {
        var t = this;
        kx(t.elements.wrapper, t.config.classNames.embed, !0),
          (t.options.speed = t.config.speed.options),
          Bx.call(t),
          KT(window.Vimeo)
            ? KA.ready.call(t)
            : $A(t.config.urls.vimeo.sdk)
                .then(function () {
                  KA.ready.call(t);
                })
                .catch(function (e) {
                  t.debug.warn("Vimeo SDK (player.js) failed to load", e);
                });
      },
      ready: function () {
        var i = this,
          a = this,
          e = a.config.vimeo,
          t = e.premium,
          n = e.referrerPolicy,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              r = (function (e, t) {
                if (null == e) return {};
                for (
                  var n, r = {}, i = Object.keys(e), o = 0;
                  o < i.length;
                  o++
                )
                  (n = i[o]), 0 <= t.indexOf(n) || (r[n] = e[n]);
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols)
              for (
                var i = Object.getOwnPropertySymbols(e), o = 0;
                o < i.length;
                o++
              )
                (n = i[o]),
                  0 <= t.indexOf(n) ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (r[n] = e[n]));
            return r;
          })(e, ["premium", "referrerPolicy"]);
        t && Object.assign(r, { controls: !1, sidedock: !1 });
        var o = xA(
            Qa(
              {
                loop: a.config.loop.active,
                autoplay: a.autoplay,
                muted: a.muted,
                gesture: "media",
                playsinline: !this.config.fullscreen.iosNative,
              },
              r
            )
          ),
          s = a.media.getAttribute("src");
        rx(s) && (s = a.media.getAttribute(a.config.attributes.embed.id));
        var c,
          u = rx((c = s))
            ? null
            : !XT(Number(c)) && c.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
            ? RegExp.$2
            : c,
          l = gx("iframe"),
          f = cA(a.config.urls.vimeo.iframe, u, o);
        l.setAttribute("src", f),
          l.setAttribute("allowfullscreen", ""),
          l.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"),
          rx(n) || l.setAttribute("referrerPolicy", n);
        var h,
          p = a.poster;
        t
          ? (l.setAttribute("data-poster", p), (a.media = bx(l, a.media)))
          : ((h = gx("div", {
              class: a.config.classNames.embedContainer,
              "data-poster": p,
            })).appendChild(l),
            (a.media = bx(h, a.media))),
          mA(cA(a.config.urls.vimeo.api, u), "json").then(function (e) {
            var t;
            rx(e) ||
              (((t = new URL(e[0].thumbnail_large)).pathname = "".concat(
                t.pathname.split("_")[0],
                ".jpg"
              )),
              FA.setPoster.call(a, t.href).catch(function () {}));
          }),
          (a.embed = new window.Vimeo.Player(l, {
            autopause: a.config.autopause,
            muted: a.muted,
          })),
          (a.media.paused = !0),
          (a.media.currentTime = 0),
          a.supported.ui && a.embed.disableTextTrack(),
          (a.media.play = function () {
            return GA.call(a, !0), a.embed.play();
          }),
          (a.media.pause = function () {
            return GA.call(a, !1), a.embed.pause();
          }),
          (a.media.stop = function () {
            a.pause(), (a.currentTime = 0);
          });
        var d = a.media.currentTime;
        Object.defineProperty(a.media, "currentTime", {
          get: function () {
            return d;
          },
          set: function (e) {
            var t = a.embed,
              n = a.media,
              r = a.paused,
              i = a.volume,
              o = r && !t.hasPlayed;
            (n.seeking = !0),
              Mx.call(a, n, "seeking"),
              Promise.resolve(o && t.setVolume(0))
                .then(function () {
                  return t.setCurrentTime(e);
                })
                .then(function () {
                  return o && t.pause();
                })
                .then(function () {
                  return o && t.setVolume(i);
                })
                .catch(function () {});
          },
        });
        var g = a.config.speed.selected;
        Object.defineProperty(a.media, "playbackRate", {
          get: function () {
            return g;
          },
          set: function (e) {
            a.embed
              .setPlaybackRate(e)
              .then(function () {
                (g = e), Mx.call(a, a.media, "ratechange");
              })
              .catch(function () {
                a.options.speed = [1];
              });
          },
        });
        var m = a.config.volume;
        Object.defineProperty(a.media, "volume", {
          get: function () {
            return m;
          },
          set: function (e) {
            a.embed.setVolume(e).then(function () {
              (m = e), Mx.call(a, a.media, "volumechange");
            });
          },
        });
        var v = a.config.muted;
        Object.defineProperty(a.media, "muted", {
          get: function () {
            return v;
          },
          set: function (e) {
            var t = !!qT(e) && e;
            a.embed.setVolume(t ? 0 : a.config.volume).then(function () {
              (v = t), Mx.call(a, a.media, "volumechange");
            });
          },
        });
        var y,
          b = a.config.loop;
        Object.defineProperty(a.media, "loop", {
          get: function () {
            return b;
          },
          set: function (e) {
            var t = qT(e) ? e : a.config.loop.active;
            a.embed.setLoop(t).then(function () {
              b = t;
            });
          },
        }),
          a.embed
            .getVideoUrl()
            .then(function (e) {
              (y = e), SA.setDownloadUrl.call(a);
            })
            .catch(function (e) {
              i.debug.warn(e);
            }),
          Object.defineProperty(a.media, "currentSrc", {
            get: function () {
              return y;
            },
          }),
          Object.defineProperty(a.media, "ended", {
            get: function () {
              return a.currentTime === a.duration;
            },
          }),
          Promise.all([a.embed.getVideoWidth(), a.embed.getVideoHeight()]).then(
            function (e) {
              var t = Za(e, 2),
                n = t[0],
                r = t[1];
              (a.embed.ratio = [n, r]), Bx.call(i);
            }
          ),
          a.embed.setAutopause(a.config.autopause).then(function (e) {
            a.config.autopause = e;
          }),
          a.embed.getVideoTitle().then(function (e) {
            (a.config.title = e), FA.setTitle.call(i);
          }),
          a.embed.getCurrentTime().then(function (e) {
            (d = e), Mx.call(a, a.media, "timeupdate");
          }),
          a.embed.getDuration().then(function (e) {
            (a.media.duration = e), Mx.call(a, a.media, "durationchange");
          }),
          a.embed.getTextTracks().then(function (e) {
            (a.media.textTracks = e), OA.setup.call(a);
          }),
          a.embed.on("cuechange", function (e) {
            var t = e.cues,
              n = (void 0 === t ? [] : t).map(function (e) {
                return (
                  (t = e.text),
                  (n = document.createDocumentFragment()),
                  (r = document.createElement("div")),
                  n.appendChild(r),
                  (r.innerHTML = t),
                  n.firstChild.innerText
                );
                var t, n, r;
              });
            OA.updateCues.call(a, n);
          }),
          a.embed.on("loaded", function () {
            a.embed.getPaused().then(function (e) {
              GA.call(a, !e), e || Mx.call(a, a.media, "playing");
            }),
              tx(a.embed.element) &&
                a.supported.ui &&
                a.embed.element.setAttribute("tabindex", -1);
          }),
          a.embed.on("bufferstart", function () {
            Mx.call(a, a.media, "waiting");
          }),
          a.embed.on("bufferend", function () {
            Mx.call(a, a.media, "playing");
          }),
          a.embed.on("play", function () {
            GA.call(a, !0), Mx.call(a, a.media, "playing");
          }),
          a.embed.on("pause", function () {
            GA.call(a, !1);
          }),
          a.embed.on("timeupdate", function (e) {
            (a.media.seeking = !1),
              (d = e.seconds),
              Mx.call(a, a.media, "timeupdate");
          }),
          a.embed.on("progress", function (e) {
            (a.media.buffered = e.percent),
              Mx.call(a, a.media, "progress"),
              1 === parseInt(e.percent, 10) &&
                Mx.call(a, a.media, "canplaythrough"),
              a.embed.getDuration().then(function (e) {
                e !== a.media.duration &&
                  ((a.media.duration = e),
                  Mx.call(a, a.media, "durationchange"));
              });
          }),
          a.embed.on("seeked", function () {
            (a.media.seeking = !1), Mx.call(a, a.media, "seeked");
          }),
          a.embed.on("ended", function () {
            (a.media.paused = !0), Mx.call(a, a.media, "ended");
          }),
          a.embed.on("error", function (e) {
            (a.media.error = e), Mx.call(a, a.media, "error");
          }),
          setTimeout(function () {
            return FA.build.call(a);
          }, 0);
      },
    };
    function XA(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          Mx.call(this, this.media, e ? "play" : "pause"));
    }
    var JA = {
        setup: function () {
          var e,
            t = this;
          kx(this.elements.wrapper, this.config.classNames.embed, !0),
            KT(window.YT) && QT(window.YT.Player)
              ? JA.ready.call(this)
              : ((e = window.onYouTubeIframeAPIReady),
                (window.onYouTubeIframeAPIReady = function () {
                  QT(e) && e(), JA.ready.call(t);
                }),
                $A(this.config.urls.youtube.sdk).catch(function (e) {
                  t.debug.warn("YouTube API failed to load", e);
                }));
        },
        getTitle: function (e) {
          var i = this;
          mA(cA(this.config.urls.youtube.api, e))
            .then(function (e) {
              var t, n, r;
              KT(e) &&
                ((t = e.title),
                (n = e.height),
                (r = e.width),
                (i.config.title = t),
                FA.setTitle.call(i),
                (i.embed.ratio = [r, n])),
                Bx.call(i);
            })
            .catch(function () {
              Bx.call(i);
            });
        },
        ready: function () {
          var e,
            t,
            n,
            o,
            r,
            i,
            a,
            s,
            c = this,
            u = c.media && c.media.getAttribute("id");
          (!rx(u) && u.startsWith("youtube-")) ||
            ((e = c.media.getAttribute("src")),
            rx(e) &&
              (e = c.media.getAttribute(this.config.attributes.embed.id)),
            (o = rx((t = e))
              ? null
              : t.match(
                  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                )
              ? RegExp.$2
              : t),
            (n = c.provider),
            (i = gx("div", {
              id: (r = ""
                .concat(n, "-")
                .concat(Math.floor(1e4 * Math.random()))),
              "data-poster": c.poster,
            })),
            (c.media = bx(i, c.media)),
            DA(
              (a = function (e) {
                return "https://i.ytimg.com/vi/"
                  .concat(o, "/")
                  .concat(e, "default.jpg");
              })("maxres"),
              121
            )
              .catch(function () {
                return DA(a("sd"), 121);
              })
              .catch(function () {
                return DA(a("hq"));
              })
              .then(function (e) {
                return FA.setPoster.call(c, e.src);
              })
              .then(function (e) {
                e.includes("maxres") ||
                  (c.elements.poster.style.backgroundSize = "cover");
              })
              .catch(function () {}),
            (s = c.config.youtube),
            (c.embed = new window.YT.Player(r, {
              videoId: o,
              host: s.noCookie
                ? "https://www.youtube-nocookie.com"
                : "http:" === window.location.protocol
                ? "http://www.youtube.com"
                : void 0,
              playerVars: hx(
                {},
                {
                  autoplay: c.config.autoplay ? 1 : 0,
                  hl: c.config.hl,
                  controls: c.supported.ui ? 0 : 1,
                  disablekb: 1,
                  playsinline: c.config.fullscreen.iosNative ? 0 : 1,
                  cc_load_policy: c.captions.active ? 1 : 0,
                  cc_lang_pref: c.config.captions.language,
                  widget_referrer: window ? window.location.href : null,
                },
                s
              ),
              events: {
                onError: function (e) {
                  var t, n;
                  c.media.error ||
                    ((n =
                      {
                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                        150: "The owner of the requested video does not allow it to be played in embedded players.",
                      }[(t = e.data)] || "An unknown error occured"),
                    (c.media.error = { code: t, message: n }),
                    Mx.call(c, c.media, "error"));
                },
                onPlaybackRateChange: function (e) {
                  var t = e.target;
                  (c.media.playbackRate = t.getPlaybackRate()),
                    Mx.call(c, c.media, "ratechange");
                },
                onReady: function (e) {
                  var n, t, r, i;
                  QT(c.media.play) ||
                    ((n = e.target),
                    JA.getTitle.call(c, o),
                    (c.media.play = function () {
                      XA.call(c, !0), n.playVideo();
                    }),
                    (c.media.pause = function () {
                      XA.call(c, !1), n.pauseVideo();
                    }),
                    (c.media.stop = function () {
                      n.stopVideo();
                    }),
                    (c.media.duration = n.getDuration()),
                    (c.media.paused = !0),
                    (c.media.currentTime = 0),
                    Object.defineProperty(c.media, "currentTime", {
                      get: function () {
                        return Number(n.getCurrentTime());
                      },
                      set: function (e) {
                        c.paused && !c.embed.hasPlayed && c.embed.mute(),
                          (c.media.seeking = !0),
                          Mx.call(c, c.media, "seeking"),
                          n.seekTo(e);
                      },
                    }),
                    Object.defineProperty(c.media, "playbackRate", {
                      get: function () {
                        return n.getPlaybackRate();
                      },
                      set: function (e) {
                        n.setPlaybackRate(e);
                      },
                    }),
                    (t = c.config.volume),
                    Object.defineProperty(c.media, "volume", {
                      get: function () {
                        return t;
                      },
                      set: function (e) {
                        (t = e),
                          n.setVolume(100 * t),
                          Mx.call(c, c.media, "volumechange");
                      },
                    }),
                    (r = c.config.muted),
                    Object.defineProperty(c.media, "muted", {
                      get: function () {
                        return r;
                      },
                      set: function (e) {
                        var t = qT(e) ? e : r;
                        n[(r = t) ? "mute" : "unMute"](),
                          Mx.call(c, c.media, "volumechange");
                      },
                    }),
                    Object.defineProperty(c.media, "currentSrc", {
                      get: function () {
                        return n.getVideoUrl();
                      },
                    }),
                    Object.defineProperty(c.media, "ended", {
                      get: function () {
                        return c.currentTime === c.duration;
                      },
                    }),
                    (i = n.getAvailablePlaybackRates()),
                    (c.options.speed = i.filter(function (e) {
                      return c.config.speed.options.includes(e);
                    })),
                    c.supported.ui && c.media.setAttribute("tabindex", -1),
                    Mx.call(c, c.media, "timeupdate"),
                    Mx.call(c, c.media, "durationchange"),
                    clearInterval(c.timers.buffering),
                    (c.timers.buffering = setInterval(function () {
                      (c.media.buffered = n.getVideoLoadedFraction()),
                        (null === c.media.lastBuffered ||
                          c.media.lastBuffered < c.media.buffered) &&
                          Mx.call(c, c.media, "progress"),
                        (c.media.lastBuffered = c.media.buffered),
                        1 === c.media.buffered &&
                          (clearInterval(c.timers.buffering),
                          Mx.call(c, c.media, "canplaythrough"));
                    }, 200)),
                    setTimeout(function () {
                      return FA.build.call(c);
                    }, 50));
                },
                onStateChange: function (e) {
                  var t = e.target;
                  switch (
                    (clearInterval(c.timers.playing),
                    c.media.seeking &&
                      [1, 2].includes(e.data) &&
                      ((c.media.seeking = !1), Mx.call(c, c.media, "seeked")),
                    e.data)
                  ) {
                    case -1:
                      Mx.call(c, c.media, "timeupdate"),
                        (c.media.buffered = t.getVideoLoadedFraction()),
                        Mx.call(c, c.media, "progress");
                      break;
                    case 0:
                      XA.call(c, !1),
                        c.media.loop
                          ? (t.stopVideo(), t.playVideo())
                          : Mx.call(c, c.media, "ended");
                      break;
                    case 1:
                      c.config.autoplay || !c.media.paused || c.embed.hasPlayed
                        ? (XA.call(c, !0),
                          Mx.call(c, c.media, "playing"),
                          (c.timers.playing = setInterval(function () {
                            Mx.call(c, c.media, "timeupdate");
                          }, 50)),
                          c.media.duration !== t.getDuration() &&
                            ((c.media.duration = t.getDuration()),
                            Mx.call(c, c.media, "durationchange")))
                        : c.media.pause();
                      break;
                    case 2:
                      c.muted || c.embed.unMute(), XA.call(c, !1);
                      break;
                    case 3:
                      Mx.call(c, c.media, "waiting");
                  }
                  Mx.call(c, c.elements.container, "statechange", !1, {
                    code: e.data,
                  });
                },
              },
            })));
        },
      },
      QA = {
        setup: function () {
          this.media
            ? (kx(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0
              ),
              kx(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0
              ),
              this.isEmbed &&
                kx(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0
                ),
              this.isVideo &&
                ((this.elements.wrapper = gx("div", {
                  class: this.config.classNames.video,
                })),
                px(this.media, this.elements.wrapper),
                (this.elements.poster = gx("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? Hx.setup.call(this)
                : this.isYouTube
                ? JA.setup.call(this)
                : this.isVimeo && KA.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      },
      ZA =
        (Ka(rO, [
          {
            key: "load",
            value: function () {
              var e = this;
              this.enabled &&
                (KT(window.google) && KT(window.google.ima)
                  ? this.ready()
                  : $A(this.player.config.urls.googleIMA.sdk)
                      .then(function () {
                        e.ready();
                      })
                      .catch(function () {
                        e.trigger(
                          "error",
                          new Error("Google IMA SDK failed to load")
                        );
                      }));
            },
          },
          {
            key: "ready",
            value: function () {
              var e = this;
              this.enabled ||
                (this.manager && this.manager.destroy(),
                this.elements.displayContainer &&
                  this.elements.displayContainer.destroy(),
                this.elements.container.remove()),
                this.startSafetyTimer(12e3, "ready()"),
                this.managerPromise.then(function () {
                  e.clearSafetyTimer("onAdsManagerLoaded()");
                }),
                this.listeners(),
                this.setupIMA();
            },
          },
          {
            key: "setupIMA",
            value: function () {
              var t = this;
              (this.elements.container = gx("div", {
                class: this.player.config.classNames.ads,
              })),
                this.player.elements.container.appendChild(
                  this.elements.container
                ),
                google.ima.settings.setVpaidMode(
                  google.ima.ImaSdkSettings.VpaidMode.ENABLED
                ),
                google.ima.settings.setLocale(this.player.config.ads.language),
                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                  this.player.config.playsinline
                ),
                (this.elements.displayContainer = new google.ima.AdDisplayContainer(
                  this.elements.container,
                  this.player.media
                )),
                (this.loader = new google.ima.AdsLoader(
                  this.elements.displayContainer
                )),
                this.loader.addEventListener(
                  google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                  function (e) {
                    return t.onAdsManagerLoaded(e);
                  },
                  !1
                ),
                this.loader.addEventListener(
                  google.ima.AdErrorEvent.Type.AD_ERROR,
                  function (e) {
                    return t.onAdError(e);
                  },
                  !1
                ),
                this.requestAds();
            },
          },
          {
            key: "requestAds",
            value: function () {
              var e = this.player.elements.container;
              try {
                var t = new google.ima.AdsRequest();
                (t.adTagUrl = this.tagUrl),
                  (t.linearAdSlotWidth = e.offsetWidth),
                  (t.linearAdSlotHeight = e.offsetHeight),
                  (t.nonLinearAdSlotWidth = e.offsetWidth),
                  (t.nonLinearAdSlotHeight = e.offsetHeight),
                  (t.forceNonLinearFullSlot = !1),
                  t.setAdWillPlayMuted(!this.player.muted),
                  this.loader.requestAds(t);
              } catch (e) {
                this.onAdError(e);
              }
            },
          },
          {
            key: "pollCountdown",
            value: function () {
              var n = this;
              if (
                !(
                  0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0]
                )
              )
                return (
                  clearInterval(this.countdownTimer),
                  void this.elements.container.removeAttribute(
                    "data-badge-text"
                  )
                );
              this.countdownTimer = setInterval(function () {
                var e = EA(Math.max(n.manager.getRemainingTime(), 0)),
                  t = ""
                    .concat(hA("advertisement", n.player.config), " - ")
                    .concat(e);
                n.elements.container.setAttribute("data-badge-text", t);
              }, 100);
            },
          },
          {
            key: "onAdsManagerLoaded",
            value: function (e) {
              var t,
                n = this;
              this.enabled &&
                (((t = new google.ima.AdsRenderingSettings()).restoreCustomPlaybackStateOnAdBreakComplete = !0),
                (t.enablePreloading = !0),
                (this.manager = e.getAdsManager(this.player, t)),
                (this.cuePoints = this.manager.getCuePoints()),
                this.manager.addEventListener(
                  google.ima.AdErrorEvent.Type.AD_ERROR,
                  function (e) {
                    return n.onAdError(e);
                  }
                ),
                Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                  n.manager.addEventListener(
                    google.ima.AdEvent.Type[e],
                    function (e) {
                      return n.onAdEvent(e);
                    }
                  );
                }),
                this.trigger("loaded"));
            },
          },
          {
            key: "addCuePoints",
            value: function () {
              var i = this;
              rx(this.cuePoints) ||
                this.cuePoints.forEach(function (e) {
                  var t, n, r;
                  0 !== e &&
                    -1 !== e &&
                    e < i.player.duration &&
                    ((t = i.player.elements.progress),
                    tx(t) &&
                      ((n = (100 / i.player.duration) * e),
                      ((r = gx("span", {
                        class: i.player.config.classNames.cues,
                      })).style.left = "".concat(n.toString(), "%")),
                      t.appendChild(r)));
                });
            },
          },
          {
            key: "onAdEvent",
            value: function (e) {
              var t,
                n = this,
                r = this.player.elements.container,
                i = e.getAd(),
                o = e.getAdData();
              switch (
                ((t = e.type),
                Mx.call(
                  n.player,
                  n.player.media,
                  "ads".concat(t.replace(/_/g, "").toLowerCase())
                ),
                e.type)
              ) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"),
                    this.pollCountdown(!0),
                    i.isLinear() ||
                      ((i.width = r.offsetWidth), (i.height = r.offsetHeight));
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended
                    ? this.loadAds()
                    : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  o.adError &&
                    this.player.debug.warn(
                      "Non-fatal ad error: ".concat(o.adError.getMessage())
                    );
              }
            },
          },
          {
            key: "onAdError",
            value: function (e) {
              this.cancel(), this.player.debug.warn("Ads error", e);
            },
          },
          {
            key: "listeners",
            value: function () {
              var r,
                i = this,
                e = this.player.elements.container;
              this.player.on("canplay", function () {
                i.addCuePoints();
              }),
                this.player.on("ended", function () {
                  i.loader.contentComplete();
                }),
                this.player.on("timeupdate", function () {
                  r = i.player.currentTime;
                }),
                this.player.on("seeked", function () {
                  var n = i.player.currentTime;
                  rx(i.cuePoints) ||
                    i.cuePoints.forEach(function (e, t) {
                      r < e &&
                        e < n &&
                        (i.manager.discardAdBreak(), i.cuePoints.splice(t, 1));
                    });
                }),
                window.addEventListener("resize", function () {
                  i.manager &&
                    i.manager.resize(
                      e.offsetWidth,
                      e.offsetHeight,
                      google.ima.ViewMode.NORMAL
                    );
                });
            },
          },
          {
            key: "play",
            value: function () {
              var t = this,
                e = this.player.elements.container;
              this.managerPromise || this.resumeContent(),
                this.managerPromise
                  .then(function () {
                    t.manager.setVolume(t.player.volume),
                      t.elements.displayContainer.initialize();
                    try {
                      t.initialized ||
                        (t.manager.init(
                          e.offsetWidth,
                          e.offsetHeight,
                          google.ima.ViewMode.NORMAL
                        ),
                        t.manager.start()),
                        (t.initialized = !0);
                    } catch (e) {
                      t.onAdError(e);
                    }
                  })
                  .catch(function () {});
            },
          },
          {
            key: "resumeContent",
            value: function () {
              (this.elements.container.style.zIndex = ""),
                (this.playing = !1),
                Ux(this.player.media.play());
            },
          },
          {
            key: "pauseContent",
            value: function () {
              (this.elements.container.style.zIndex = 3),
                (this.playing = !0),
                this.player.media.pause();
            },
          },
          {
            key: "cancel",
            value: function () {
              this.initialized && this.resumeContent(),
                this.trigger("error"),
                this.loadAds();
            },
          },
          {
            key: "loadAds",
            value: function () {
              var t = this;
              this.managerPromise
                .then(function () {
                  t.manager && t.manager.destroy(),
                    (t.managerPromise = new Promise(function (e) {
                      t.on("loaded", e), t.player.debug.log(t.manager);
                    })),
                    (t.initialized = !1),
                    t.requestAds();
                })
                .catch(function () {});
            },
          },
          {
            key: "trigger",
            value: function (e) {
              for (
                var t = this,
                  n = arguments.length,
                  r = new Array(1 < n ? n - 1 : 0),
                  i = 1;
                i < n;
                i++
              )
                r[i - 1] = arguments[i];
              var o = this.events[e];
              ZT(o) &&
                o.forEach(function (e) {
                  QT(e) && e.apply(t, r);
                });
            },
          },
          {
            key: "on",
            value: function (e, t) {
              return (
                ZT(this.events[e]) || (this.events[e] = []),
                this.events[e].push(t),
                this
              );
            },
          },
          {
            key: "startSafetyTimer",
            value: function (e, t) {
              var n = this;
              this.player.debug.log("Safety timer invoked from: ".concat(t)),
                (this.safetyTimer = setTimeout(function () {
                  n.cancel(), n.clearSafetyTimer("startSafetyTimer()");
                }, e));
            },
          },
          {
            key: "clearSafetyTimer",
            value: function (e) {
              GT(this.safetyTimer) ||
                (this.player.debug.log("Safety timer cleared from: ".concat(e)),
                clearTimeout(this.safetyTimer),
                (this.safetyTimer = null));
            },
          },
          {
            key: "enabled",
            get: function () {
              var e = this.config;
              return (
                this.player.isHTML5 &&
                this.player.isVideo &&
                e.enabled &&
                (!rx(e.publisherId) || WT(e.tagUrl))
              );
            },
          },
          {
            key: "tagUrl",
            get: function () {
              var e = this.config;
              if (WT(e.tagUrl)) return e.tagUrl;
              var t = {
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: e.publisherId,
              };
              return ""
                .concat("https://go.aniview.com/api/adserver6/vast/", "?")
                .concat(xA(t));
            },
          },
        ]),
        rO),
      eO = Iv.findIndex,
      tO = !0,
      nO = Ov("findIndex");
    function rO(e) {
      var n = this;
      $a(this, rO),
        (this.player = e),
        (this.config = e.config.ads),
        (this.playing = !1),
        (this.initialized = !1),
        (this.elements = { container: null, displayContainer: null }),
        (this.manager = null),
        (this.loader = null),
        (this.cuePoints = null),
        (this.events = {}),
        (this.safetyTimer = null),
        (this.countdownTimer = null),
        (this.managerPromise = new Promise(function (e, t) {
          n.on("loaded", e), n.on("error", t);
        })),
        this.load();
    }
    "findIndex" in [] &&
      Array(1).findIndex(function () {
        tO = !1;
      }),
      Cm(
        { target: "Array", proto: !0, forced: tO || !nO },
        {
          findIndex: function (e) {
            return eO(this, e, 1 < arguments.length ? arguments[1] : void 0);
          },
        }
      ),
      $v("findIndex");
    var iO = Math.min,
      oO = [].lastIndexOf,
      aO = !!oO && 1 / [1].lastIndexOf(1, -0) < 0,
      sO = Vy("lastIndexOf"),
      cO = Ov("indexOf", { ACCESSORS: !0, 1: 0 }),
      uO =
        !aO && sO && cO
          ? oO
          : function (e) {
              if (aO) return oO.apply(this, arguments) || 0;
              var t = jg(this),
                n = Am(t.length),
                r = n - 1;
              for (
                1 < arguments.length && (r = iO(r, xm(arguments[1]))),
                  r < 0 && (r = n + r);
                0 <= r;
                r--
              )
                if (r in t && t[r] === e) return r || 0;
              return -1;
            };
    Cm(
      { target: "Array", proto: !0, forced: uO !== [].lastIndexOf },
      { lastIndexOf: uO }
    );
    function lO(e, t) {
      var n = {};
      return (
        e > t.width / t.height
          ? ((n.width = t.width), (n.height = (1 / e) * t.width))
          : ((n.height = t.height), (n.width = e * t.height)),
        n
      );
    }
    var fO =
        (Ka(pO, [
          {
            key: "load",
            value: function () {
              var e = this;
              this.player.elements.display.seekTooltip &&
                (this.player.elements.display.seekTooltip.hidden = this.enabled),
                this.enabled &&
                  this.getThumbnails().then(function () {
                    e.enabled &&
                      (e.render(),
                      e.determineContainerAutoSizing(),
                      (e.loaded = !0));
                  });
            },
          },
          {
            key: "getThumbnails",
            value: function () {
              var i = this;
              return new Promise(function (e) {
                var t,
                  n = i.player.config.previewThumbnails.src;
                if (rx(n))
                  throw new Error(
                    "Missing previewThumbnails.src config attribute"
                  );
                function r() {
                  i.thumbnails.sort(function (e, t) {
                    return e.height - t.height;
                  }),
                    i.player.debug.log("Preview thumbnails", i.thumbnails),
                    e();
                }
                QT(n)
                  ? n(function (e) {
                      (i.thumbnails = e), r();
                    })
                  : ((t = (JT(n) ? [n] : n).map(function (e) {
                      return i.getThumbnail(e);
                    })),
                    Promise.all(t).then(r));
              });
            },
          },
          {
            key: "getThumbnail",
            value: function (o) {
              var a = this;
              return new Promise(function (i) {
                mA(o).then(function (e) {
                  var t,
                    n = {
                      frames:
                        ((t = []),
                        e.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                          var o = {};
                          e.split(/\r\n|\n|\r/).forEach(function (e) {
                            var t, n, r, i;
                            XT(o.startTime)
                              ? !rx(e.trim()) &&
                                rx(o.text) &&
                                ((n = Za((t = e.trim().split("#xywh=")), 1)),
                                (o.text = n[0]),
                                t[1] &&
                                  ((r = Za(t[1].split(","), 4)),
                                  (o.x = r[0]),
                                  (o.y = r[1]),
                                  (o.w = r[2]),
                                  (o.h = r[3])))
                              : (i = e.match(
                                  /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                                )) &&
                                ((o.startTime =
                                  60 * Number(i[1] || 0) * 60 +
                                  60 * Number(i[2]) +
                                  Number(i[3]) +
                                  Number("0.".concat(i[4]))),
                                (o.endTime =
                                  60 * Number(i[6] || 0) * 60 +
                                  60 * Number(i[7]) +
                                  Number(i[8]) +
                                  Number("0.".concat(i[9]))));
                          }),
                            o.text && t.push(o);
                        }),
                        t),
                      height: null,
                      urlPrefix: "",
                    };
                  n.frames[0].text.startsWith("http://") ||
                    n.frames[0].text.startsWith("http://") ||
                    n.frames[0].text.startsWith("https://") ||
                    (n.urlPrefix = o.substring(0, o.lastIndexOf("http://") + 1));
                  var r = new Image();
                  (r.onload = function () {
                    (n.height = r.naturalHeight),
                      (n.width = r.naturalWidth),
                      a.thumbnails.push(n),
                      i();
                  }),
                    (r.src = n.urlPrefix + n.frames[0].text);
                });
              });
            },
          },
          {
            key: "startMove",
            value: function (e) {
              var t, n;
              this.loaded &&
                BT(e) &&
                ["touchmove", "mousemove"].includes(e.type) &&
                this.player.media.duration &&
                ("touchmove" === e.type
                  ? (this.seekTime =
                      this.player.media.duration *
                      (this.player.elements.inputs.seek.value / 100))
                  : ((n =
                      (100 /
                        (t = this.player.elements.progress.getBoundingClientRect())
                          .width) *
                      (e.pageX - t.left)),
                    (this.seekTime = this.player.media.duration * (n / 100)),
                    this.seekTime < 0 && (this.seekTime = 0),
                    this.seekTime > this.player.media.duration - 1 &&
                      (this.seekTime = this.player.media.duration - 1),
                    (this.mousePosX = e.pageX),
                    (this.elements.thumb.time.innerText = EA(this.seekTime))),
                this.showImageAtCurrentTime());
            },
          },
          {
            key: "endMove",
            value: function () {
              this.toggleThumbContainer(!1, !0);
            },
          },
          {
            key: "startScrubbing",
            value: function (e) {
              (!GT(e.button) && !1 !== e.button && 0 !== e.button) ||
                ((this.mouseDown = !0),
                this.player.media.duration &&
                  (this.toggleScrubbingContainer(!0),
                  this.toggleThumbContainer(!1, !0),
                  this.showImageAtCurrentTime()));
            },
          },
          {
            key: "endScrubbing",
            value: function () {
              var e = this;
              (this.mouseDown = !1),
                Math.ceil(this.lastTime) ===
                Math.ceil(this.player.media.currentTime)
                  ? this.toggleScrubbingContainer(!1)
                  : Nx.call(
                      this.player,
                      this.player.media,
                      "timeupdate",
                      function () {
                        e.mouseDown || e.toggleScrubbingContainer(!1);
                      }
                    );
            },
          },
          {
            key: "listeners",
            value: function () {
              var e = this;
              this.player.on("play", function () {
                e.toggleThumbContainer(!1, !0);
              }),
                this.player.on("seeked", function () {
                  e.toggleThumbContainer(!1);
                }),
                this.player.on("timeupdate", function () {
                  e.lastTime = e.player.media.currentTime;
                });
            },
          },
          {
            key: "render",
            value: function () {
              (this.elements.thumb.container = gx("div", {
                class: this.player.config.classNames.previewThumbnails
                  .thumbContainer,
              })),
                (this.elements.thumb.imageContainer = gx("div", {
                  class: this.player.config.classNames.previewThumbnails
                    .imageContainer,
                })),
                this.elements.thumb.container.appendChild(
                  this.elements.thumb.imageContainer
                );
              var e = gx("div", {
                class: this.player.config.classNames.previewThumbnails
                  .timeContainer,
              });
              (this.elements.thumb.time = gx("span", {}, "00:00")),
                e.appendChild(this.elements.thumb.time),
                this.elements.thumb.container.appendChild(e),
                tx(this.player.elements.progress) &&
                  this.player.elements.progress.appendChild(
                    this.elements.thumb.container
                  ),
                (this.elements.scrubbing.container = gx("div", {
                  class: this.player.config.classNames.previewThumbnails
                    .scrubbingContainer,
                })),
                this.player.elements.wrapper.appendChild(
                  this.elements.scrubbing.container
                );
            },
          },
          {
            key: "destroy",
            value: function () {
              this.elements.thumb.container &&
                this.elements.thumb.container.remove(),
                this.elements.scrubbing.container &&
                  this.elements.scrubbing.container.remove();
            },
          },
          {
            key: "showImageAtCurrentTime",
            value: function () {
              var n = this;
              this.mouseDown
                ? this.setScrubbingContainerSize()
                : this.setThumbContainerSizeAndPos();
              var r = this.thumbnails[0].frames.findIndex(function (e) {
                  return n.seekTime >= e.startTime && n.seekTime <= e.endTime;
                }),
                e = 0 <= r,
                i = 0;
              this.mouseDown || this.toggleThumbContainer(e),
                e &&
                  (this.thumbnails.forEach(function (e, t) {
                    n.loadedImages.includes(e.frames[r].text) && (i = t);
                  }),
                  r !== this.showingThumb &&
                    ((this.showingThumb = r), this.loadImage(i)));
            },
          },
          {
            key: "loadImage",
            value: function () {
              var e,
                t = this,
                n =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                r = this.showingThumb,
                i = this.thumbnails[n],
                o = i.urlPrefix,
                a = i.frames[r],
                s = i.frames[r].text,
                c = o + s;
              this.currentImageElement &&
              this.currentImageElement.dataset.filename === s
                ? (this.showImage(this.currentImageElement, a, n, r, s, !1),
                  (this.currentImageElement.dataset.index = r),
                  this.removeOldImages(this.currentImageElement))
                : (this.loadingImage &&
                    this.usingSprites &&
                    (this.loadingImage.onload = null),
                  ((e = new Image()).src = c),
                  (e.dataset.index = r),
                  (e.dataset.filename = s),
                  (this.showingThumbFilename = s),
                  this.player.debug.log("Loading image: ".concat(c)),
                  (e.onload = function () {
                    return t.showImage(e, a, n, r, s, !0);
                  }),
                  (this.loadingImage = e),
                  this.removeOldImages(e));
            },
          },
          {
            key: "showImage",
            value: function (e, t, n, r, i) {
              var o =
                !(5 < arguments.length && void 0 !== arguments[5]) ||
                arguments[5];
              this.player.debug.log(
                "Showing thumb: "
                  .concat(i, ". num: ")
                  .concat(r, ". qual: ")
                  .concat(n, ". newimg: ")
                  .concat(o)
              ),
                this.setImageSizeAndOffset(e, t),
                o &&
                  (this.currentImageContainer.appendChild(e),
                  (this.currentImageElement = e),
                  this.loadedImages.includes(i) || this.loadedImages.push(i)),
                this.preloadNearby(r, !0)
                  .then(this.preloadNearby(r, !1))
                  .then(this.getHigherQuality(n, e, t, i));
            },
          },
          {
            key: "removeOldImages",
            value: function (r) {
              var i = this;
              Array.from(this.currentImageContainer.children).forEach(function (
                e
              ) {
                var t, n;
                "img" === e.tagName.toLowerCase() &&
                  ((t = i.usingSprites ? 500 : 1e3),
                  e.dataset.index === r.dataset.index ||
                    e.dataset.deleting ||
                    ((e.dataset.deleting = !0),
                    (n = i.currentImageContainer),
                    setTimeout(function () {
                      n.removeChild(e),
                        i.player.debug.log(
                          "Removing thumb: ".concat(e.dataset.filename)
                        );
                    }, t)));
              });
            },
          },
          {
            key: "preloadNearby",
            value: function (t) {
              var s = this,
                n =
                  !(1 < arguments.length && void 0 !== arguments[1]) ||
                  arguments[1];
              return new Promise(function (a) {
                setTimeout(function () {
                  var e,
                    i,
                    o = s.thumbnails[0].frames[t].text;
                  s.showingThumbFilename === o &&
                    ((e = n
                      ? s.thumbnails[0].frames.slice(t)
                      : s.thumbnails[0].frames.slice(0, t).reverse()),
                    (i = !1),
                    e.forEach(function (e) {
                      var t,
                        n,
                        r = e.text;
                      r === o ||
                        s.loadedImages.includes(r) ||
                        ((i = !0),
                        s.player.debug.log(
                          "Preloading thumb filename: ".concat(r)
                        ),
                        (t = s.thumbnails[0].urlPrefix + r),
                        ((n = new Image()).src = t),
                        (n.onload = function () {
                          s.player.debug.log(
                            "Preloaded thumb filename: ".concat(r)
                          ),
                            s.loadedImages.includes(r) ||
                              s.loadedImages.push(r),
                            a();
                        }));
                    }),
                    i || a());
                }, 300);
              });
            },
          },
          {
            key: "getHigherQuality",
            value: function (e, t, n, r) {
              var i,
                o = this;
              e < this.thumbnails.length - 1 &&
                ((i = t.naturalHeight),
                this.usingSprites && (i = n.h),
                i < this.thumbContainerHeight &&
                  setTimeout(function () {
                    o.showingThumbFilename === r &&
                      (o.player.debug.log(
                        "Showing higher quality thumb for: ".concat(r)
                      ),
                      o.loadImage(e + 1));
                  }, 300));
            },
          },
          {
            key: "toggleThumbContainer",
            value: function () {
              var e =
                  0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t =
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = this.player.config.classNames.previewThumbnails
                  .thumbContainerShown;
              this.elements.thumb.container.classList.toggle(n, e),
                !e &&
                  t &&
                  ((this.showingThumb = null),
                  (this.showingThumbFilename = null));
            },
          },
          {
            key: "toggleScrubbingContainer",
            value: function () {
              var e =
                  0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = this.player.config.classNames.previewThumbnails
                  .scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t, e),
                e ||
                  ((this.showingThumb = null),
                  (this.showingThumbFilename = null));
            },
          },
          {
            key: "determineContainerAutoSizing",
            value: function () {
              (20 < this.elements.thumb.imageContainer.clientHeight ||
                20 < this.elements.thumb.imageContainer.clientWidth) &&
                (this.sizeSpecifiedInCSS = !0);
            },
          },
          {
            key: "setThumbContainerSizeAndPos",
            value: function () {
              var e, t, n;
              this.sizeSpecifiedInCSS
                ? 20 < this.elements.thumb.imageContainer.clientHeight &&
                  this.elements.thumb.imageContainer.clientWidth < 20
                  ? ((e = Math.floor(
                      this.elements.thumb.imageContainer.clientHeight *
                        this.thumbAspectRatio
                    )),
                    (this.elements.thumb.imageContainer.style.width = "".concat(
                      e,
                      "px"
                    )))
                  : this.elements.thumb.imageContainer.clientHeight < 20 &&
                    20 < this.elements.thumb.imageContainer.clientWidth &&
                    ((t = Math.floor(
                      this.elements.thumb.imageContainer.clientWidth /
                        this.thumbAspectRatio
                    )),
                    (this.elements.thumb.imageContainer.style.height = "".concat(
                      t,
                      "px"
                    )))
                : ((n = Math.floor(
                    this.thumbContainerHeight * this.thumbAspectRatio
                  )),
                  (this.elements.thumb.imageContainer.style.height = "".concat(
                    this.thumbContainerHeight,
                    "px"
                  )),
                  (this.elements.thumb.imageContainer.style.width = "".concat(
                    n,
                    "px"
                  ))),
                this.setThumbContainerPos();
            },
          },
          {
            key: "setThumbContainerPos",
            value: function () {
              var e = this.player.elements.progress.getBoundingClientRect(),
                t = this.player.elements.container.getBoundingClientRect(),
                n = this.elements.thumb.container,
                r = t.left - e.left + 10,
                i = t.right - e.left - n.clientWidth - 10,
                o = this.mousePosX - e.left - n.clientWidth / 2;
              o < r && (o = r),
                i < o && (o = i),
                (n.style.left = "".concat(o, "px"));
            },
          },
          {
            key: "setScrubbingContainerSize",
            value: function () {
              var e = lO(this.thumbAspectRatio, {
                  width: this.player.media.clientWidth,
                  height: this.player.media.clientHeight,
                }),
                t = e.width,
                n = e.height;
              (this.elements.scrubbing.container.style.width = "".concat(
                t,
                "px"
              )),
                (this.elements.scrubbing.container.style.height = "".concat(
                  n,
                  "px"
                ));
            },
          },
          {
            key: "setImageSizeAndOffset",
            value: function (e, t) {
              var n;
              this.usingSprites &&
                ((n = this.thumbContainerHeight / t.h),
                (e.style.height = "".concat(e.naturalHeight * n, "px")),
                (e.style.width = "".concat(e.naturalWidth * n, "px")),
                (e.style.left = "-".concat(t.x * n, "px")),
                (e.style.top = "-".concat(t.y * n, "px")));
            },
          },
          {
            key: "enabled",
            get: function () {
              return (
                this.player.isHTML5 &&
                this.player.isVideo &&
                this.player.config.previewThumbnails.enabled
              );
            },
          },
          {
            key: "currentImageContainer",
            get: function () {
              return this.mouseDown
                ? this.elements.scrubbing.container
                : this.elements.thumb.imageContainer;
            },
          },
          {
            key: "usingSprites",
            get: function () {
              return Object.keys(this.thumbnails[0].frames[0]).includes("w");
            },
          },
          {
            key: "thumbAspectRatio",
            get: function () {
              return this.usingSprites
                ? this.thumbnails[0].frames[0].w /
                    this.thumbnails[0].frames[0].h
                : this.thumbnails[0].width / this.thumbnails[0].height;
            },
          },
          {
            key: "thumbContainerHeight",
            get: function () {
              return this.mouseDown
                ? lO(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight,
                  }).height
                : this.sizeSpecifiedInCSS
                ? this.elements.thumb.imageContainer.clientHeight
                : Math.floor(
                    this.player.media.clientWidth / this.thumbAspectRatio / 4
                  );
            },
          },
          {
            key: "currentImageElement",
            get: function () {
              return this.mouseDown
                ? this.currentScrubbingImageElement
                : this.currentThumbnailImageElement;
            },
            set: function (e) {
              this.mouseDown
                ? (this.currentScrubbingImageElement = e)
                : (this.currentThumbnailImageElement = e);
            },
          },
        ]),
        pO),
      hO = {
        insertElements: function (t, e) {
          var n = this;
          JT(e)
            ? mx(t, this.media, { src: e })
            : ZT(e) &&
              e.forEach(function (e) {
                mx(t, n.media, e);
              });
        },
        change: function (c) {
          var u = this;
          fx(c, "sources.length")
            ? (Hx.cancelRequests.call(this),
              this.destroy.call(
                this,
                function () {
                  (u.options.quality = []),
                    vx(u.media),
                    (u.media = null),
                    tx(u.elements.container) &&
                      u.elements.container.removeAttribute("class");
                  var e = c.sources,
                    t = c.type,
                    n = Za(e, 1)[0],
                    r = n.provider,
                    i = void 0 === r ? jA.html5 : r,
                    o = n.src,
                    a = "html5" === i ? t : "div",
                    s = "html5" === i ? {} : { src: o };
                  Object.assign(u, {
                    provider: i,
                    type: t,
                    supported: Ix.check(t, i, u.config.playsinline),
                    media: gx(a, s),
                  }),
                    u.elements.container.appendChild(u.media),
                    qT(c.autoplay) && (u.config.autoplay = c.autoplay),
                    u.isHTML5 &&
                      (u.config.crossorigin &&
                        u.media.setAttribute("crossorigin", ""),
                      u.config.autoplay && u.media.setAttribute("autoplay", ""),
                      rx(c.poster) || (u.poster = c.poster),
                      u.config.loop.active && u.media.setAttribute("loop", ""),
                      u.config.muted && u.media.setAttribute("muted", ""),
                      u.config.playsinline &&
                        u.media.setAttribute("playsinline", "")),
                    FA.addStyleHook.call(u),
                    u.isHTML5 && hO.insertElements.call(u, "source", e),
                    (u.config.title = c.title),
                    QA.setup.call(u),
                    u.isHTML5 &&
                      Object.keys(c).includes("tracks") &&
                      hO.insertElements.call(u, "track", c.tracks),
                    (u.isHTML5 || (u.isEmbed && !u.supported.ui)) &&
                      FA.build.call(u),
                    u.isHTML5 && u.media.load(),
                    rx(c.previewThumbnails) ||
                      (Object.assign(
                        u.config.previewThumbnails,
                        c.previewThumbnails
                      ),
                      u.previewThumbnails &&
                        u.previewThumbnails.loaded &&
                        (u.previewThumbnails.destroy(),
                        (u.previewThumbnails = null)),
                      u.config.previewThumbnails.enabled &&
                        (u.previewThumbnails = new fO(u))),
                    u.fullscreen.update();
                },
                !0
              ))
            : this.debug.warn("Invalid source format");
        },
      };
    function pO(e) {
      $a(this, pO),
        (this.player = e),
        (this.thumbnails = []),
        (this.loaded = !1),
        (this.lastMouseMoveTime = Date.now()),
        (this.mouseDown = !1),
        (this.loadedImages = []),
        (this.elements = { thumb: {}, scrubbing: {} }),
        this.load();
    }
    var dO =
      (Ka(
        gO,
        [
          {
            key: "play",
            value: function () {
              var e = this;
              return QT(this.media.play)
                ? (this.ads &&
                    this.ads.enabled &&
                    this.ads.managerPromise
                      .then(function () {
                        return e.ads.play();
                      })
                      .catch(function () {
                        return Ux(e.media.play());
                      }),
                  this.media.play())
                : null;
            },
          },
          {
            key: "pause",
            value: function () {
              return this.playing && QT(this.media.pause)
                ? this.media.pause()
                : null;
            },
          },
          {
            key: "togglePlay",
            value: function (e) {
              return (qT(e) ? e : !this.playing) ? this.play() : this.pause();
            },
          },
          {
            key: "stop",
            value: function () {
              this.isHTML5
                ? (this.pause(), this.restart())
                : QT(this.media.stop) && this.media.stop();
            },
          },
          {
            key: "restart",
            value: function () {
              this.currentTime = 0;
            },
          },
          {
            key: "rewind",
            value: function (e) {
              this.currentTime -= XT(e) ? e : this.config.seekTime;
            },
          },
          {
            key: "forward",
            value: function (e) {
              this.currentTime += XT(e) ? e : this.config.seekTime;
            },
          },
          {
            key: "increaseVolume",
            value: function (e) {
              var t = this.media.muted ? 0 : this.volume;
              this.volume = t + (XT(e) ? e : 0);
            },
          },
          {
            key: "decreaseVolume",
            value: function (e) {
              this.increaseVolume(-e);
            },
          },
          {
            key: "toggleCaptions",
            value: function (e) {
              OA.toggle.call(this, e, !1);
            },
          },
          {
            key: "airplay",
            value: function () {
              Ix.airplay && this.media.webkitShowPlaybackTargetPicker();
            },
          },
          {
            key: "toggleControls",
            value: function (e) {
              if (!this.supported.ui || this.isAudio) return !1;
              var t,
                n = Ex(
                  this.elements.container,
                  this.config.classNames.hideControls
                ),
                r = void 0 === e ? void 0 : !e,
                i = kx(
                  this.elements.container,
                  this.config.classNames.hideControls,
                  r
                );
              return (
                i &&
                  ZT(this.config.controls) &&
                  this.config.controls.includes("settings") &&
                  !rx(this.config.settings) &&
                  SA.toggleMenu.call(this, !1),
                i !== n &&
                  ((t = i ? "controlshidden" : "controlsshown"),
                  Mx.call(this, this.media, t)),
                !i
              );
            },
          },
          {
            key: "on",
            value: function (e, t) {
              Rx.call(this, this.elements.container, e, t);
            },
          },
          {
            key: "once",
            value: function (e, t) {
              Nx.call(this, this.elements.container, e, t);
            },
          },
          {
            key: "off",
            value: function (e, t) {
              Lx(this.elements.container, e, t);
            },
          },
          {
            key: "destroy",
            value: function (e) {
              var t,
                n = this,
                r =
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              this.ready &&
                ((t = function () {
                  (document.body.style.overflow = ""),
                    (n.embed = null),
                    r
                      ? (Object.keys(n.elements).length &&
                          (vx(n.elements.buttons.play),
                          vx(n.elements.captions),
                          vx(n.elements.controls),
                          vx(n.elements.wrapper),
                          (n.elements.buttons.play = null),
                          (n.elements.captions = null),
                          (n.elements.controls = null),
                          (n.elements.wrapper = null)),
                        QT(e) && e())
                      : (function () {
                          this &&
                            this.eventListeners &&
                            (this.eventListeners.forEach(function (e) {
                              var t = e.element,
                                n = e.type,
                                r = e.callback,
                                i = e.options;
                              t.removeEventListener(n, r, i);
                            }),
                            (this.eventListeners = []));
                        }.call(n),
                        bx(n.elements.original, n.elements.container),
                        Mx.call(n, n.elements.original, "destroyed", !0),
                        QT(e) && e.call(n.elements.original),
                        (n.ready = !1),
                        setTimeout(function () {
                          (n.elements = null), (n.media = null);
                        }, 200));
                }),
                this.stop(),
                clearTimeout(this.timers.loading),
                clearTimeout(this.timers.controls),
                clearTimeout(this.timers.resized),
                this.isHTML5
                  ? (FA.toggleNativeControls.call(this, !0), t())
                  : this.isYouTube
                  ? (clearInterval(this.timers.buffering),
                    clearInterval(this.timers.playing),
                    null !== this.embed &&
                      QT(this.embed.destroy) &&
                      this.embed.destroy(),
                    t())
                  : this.isVimeo &&
                    (null !== this.embed && this.embed.unload().then(t),
                    setTimeout(t, 200)));
            },
          },
          {
            key: "supports",
            value: function (e) {
              return Ix.mime.call(this, e);
            },
          },
          {
            key: "isHTML5",
            get: function () {
              return this.provider === jA.html5;
            },
          },
          {
            key: "isEmbed",
            get: function () {
              return this.isYouTube || this.isVimeo;
            },
          },
          {
            key: "isYouTube",
            get: function () {
              return this.provider === jA.youtube;
            },
          },
          {
            key: "isVimeo",
            get: function () {
              return this.provider === jA.vimeo;
            },
          },
          {
            key: "isVideo",
            get: function () {
              return this.type === CA;
            },
          },
          {
            key: "isAudio",
            get: function () {
              return "audio" === this.type;
            },
          },
          {
            key: "playing",
            get: function () {
              return Boolean(this.ready && !this.paused && !this.ended);
            },
          },
          {
            key: "paused",
            get: function () {
              return Boolean(this.media.paused);
            },
          },
          {
            key: "stopped",
            get: function () {
              return Boolean(this.paused && 0 === this.currentTime);
            },
          },
          {
            key: "ended",
            get: function () {
              return Boolean(this.media.ended);
            },
          },
          {
            key: "currentTime",
            set: function (e) {
              var t;
              this.duration &&
                ((t = XT(e) && 0 < e),
                (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
                this.debug.log(
                  "Seeking to ".concat(this.currentTime, " seconds")
                ));
            },
            get: function () {
              return Number(this.media.currentTime);
            },
          },
          {
            key: "buffered",
            get: function () {
              var e = this.media.buffered;
              return XT(e)
                ? e
                : e && e.length && 0 < this.duration
                ? e.end(0) / this.duration
                : 0;
            },
          },
          {
            key: "seeking",
            get: function () {
              return Boolean(this.media.seeking);
            },
          },
          {
            key: "duration",
            get: function () {
              var e = parseFloat(this.config.duration),
                t = (this.media || {}).duration,
                n = XT(t) && t !== 1 / 0 ? t : 0;
              return e || n;
            },
          },
          {
            key: "volume",
            set: function (e) {
              var t = e;
              JT(t) && (t = Number(t)),
                XT(t) || (t = this.storage.get("volume")),
                XT(t) || (t = this.config.volume),
                1 < t && (t = 1),
                t < 0 && (t = 0),
                (this.config.volume = t),
                (this.media.volume = t),
                !rx(e) && this.muted && 0 < t && (this.muted = !1);
            },
            get: function () {
              return Number(this.media.volume);
            },
          },
          {
            key: "muted",
            set: function (e) {
              var t = e;
              qT(t) || (t = this.storage.get("muted")),
                qT(t) || (t = this.config.muted),
                (this.config.muted = t),
                (this.media.muted = t);
            },
            get: function () {
              return Boolean(this.media.muted);
            },
          },
          {
            key: "hasAudio",
            get: function () {
              return (
                !this.isHTML5 ||
                !!this.isAudio ||
                Boolean(this.media.mozHasAudio) ||
                Boolean(this.media.webkitAudioDecodedByteCount) ||
                Boolean(this.media.audioTracks && this.media.audioTracks.length)
              );
            },
          },
          {
            key: "speed",
            set: function (e) {
              var t = this,
                n = null;
              XT(e) && (n = e),
                XT(n) || (n = this.storage.get("speed")),
                XT(n) || (n = this.config.speed.selected);
              var r = this.minimumSpeed,
                i = this.maximumSpeed,
                n = (function (e, t, n) {
                  var r = 0 < arguments.length && void 0 !== e ? e : 0,
                    i = 1 < arguments.length && void 0 !== t ? t : 0,
                    o = 2 < arguments.length && void 0 !== n ? n : 255;
                  return Math.min(Math.max(r, i), o);
                })(n, r, i);
              (this.config.speed.selected = n),
                setTimeout(function () {
                  t.media.playbackRate = n;
                }, 0);
            },
            get: function () {
              return Number(this.media.playbackRate);
            },
          },
          {
            key: "minimumSpeed",
            get: function () {
              return this.isYouTube
                ? Math.min.apply(Math, es(this.options.speed))
                : this.isVimeo
                ? 0.5
                : 0.0625;
            },
          },
          {
            key: "maximumSpeed",
            get: function () {
              return this.isYouTube
                ? Math.max.apply(Math, es(this.options.speed))
                : this.isVimeo
                ? 2
                : 16;
            },
          },
          {
            key: "quality",
            set: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a = this.config.quality,
                s = this.options.quality;
              s.length &&
                ((t = [
                  !rx(e) && Number(e),
                  this.storage.get("quality"),
                  a.selected,
                  a.default,
                ].find(XT)),
                (n = !0),
                s.includes(t) ||
                  ((o = t),
                  (r =
                    ZT((i = s)) && i.length
                      ? i.reduce(function (e, t) {
                          return Math.abs(t - o) < Math.abs(e - o) ? t : e;
                        })
                      : null),
                  this.debug.warn(
                    "Unsupported quality option: "
                      .concat(t, ", using ")
                      .concat(r, " instead")
                  ),
                  (t = r),
                  (n = !1)),
                (a.selected = t),
                (this.media.quality = t),
                n && this.storage.set({ quality: t }));
            },
            get: function () {
              return this.media.quality;
            },
          },
          {
            key: "loop",
            set: function (e) {
              var t = qT(e) ? e : this.config.loop.active;
              (this.config.loop.active = t), (this.media.loop = t);
            },
            get: function () {
              return Boolean(this.media.loop);
            },
          },
          {
            key: "source",
            set: function (e) {
              hO.change.call(this, e);
            },
            get: function () {
              return this.media.currentSrc;
            },
          },
          {
            key: "download",
            get: function () {
              var e = this.config.urls.download;
              return WT(e) ? e : this.source;
            },
            set: function (e) {
              WT(e) &&
                ((this.config.urls.download = e), SA.setDownloadUrl.call(this));
            },
          },
          {
            key: "poster",
            set: function (e) {
              this.isVideo
                ? FA.setPoster.call(this, e, !1).catch(function () {})
                : this.debug.warn("Poster can only be set for video");
            },
            get: function () {
              return this.isVideo
                ? this.media.getAttribute("poster") ||
                    this.media.getAttribute("data-poster")
                : null;
            },
          },
          {
            key: "ratio",
            get: function () {
              if (!this.isVideo) return null;
              var e = Fx(qx.call(this));
              return ZT(e) ? e.join(":") : e;
            },
            set: function (e) {
              this.isVideo
                ? JT(e) && Dx(e)
                  ? ((this.config.ratio = e), Bx.call(this))
                  : this.debug.error(
                      "Invalid aspect ratio specified (".concat(e, ")")
                    )
                : this.debug.warn("Aspect ratio can only be set for video");
            },
          },
          {
            key: "autoplay",
            set: function (e) {
              var t = qT(e) ? e : this.config.autoplay;
              this.config.autoplay = t;
            },
            get: function () {
              return Boolean(this.config.autoplay);
            },
          },
          {
            key: "currentTrack",
            set: function (e) {
              OA.set.call(this, e, !1);
            },
            get: function () {
              var e = this.captions,
                t = e.toggled,
                n = e.currentTrack;
              return t ? n : -1;
            },
          },
          {
            key: "language",
            set: function (e) {
              OA.setLanguage.call(this, e, !1);
            },
            get: function () {
              return (OA.getCurrentTrack.call(this) || {}).language;
            },
          },
          {
            key: "pip",
            set: function (e) {
              var t;
              Ix.pip &&
                ((t = qT(e) ? e : !this.pip),
                QT(this.media.webkitSetPresentationMode) &&
                  this.media.webkitSetPresentationMode(t ? IA : "inline"),
                QT(this.media.requestPictureInPicture) &&
                  (!this.pip && t
                    ? this.media.requestPictureInPicture()
                    : this.pip && !t && document.exitPictureInPicture()));
            },
            get: function () {
              return Ix.pip
                ? rx(this.media.webkitPresentationMode)
                  ? this.media === document.pictureInPictureElement
                  : this.media.webkitPresentationMode === IA
                : null;
            },
          },
        ],
        [
          {
            key: "supported",
            value: function (e, t, n) {
              return Ix.check(e, t, n);
            },
          },
          { key: "loadSprite", value: vA },
          {
            key: "setup",
            value: function (e) {
              var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = null;
              return (
                JT(e)
                  ? (n = Array.from(document.querySelectorAll(e)))
                  : ex(e)
                  ? (n = Array.from(e))
                  : ZT(e) && (n = e.filter(tx)),
                rx(n)
                  ? null
                  : n.map(function (e) {
                      return new gO(e, t);
                    })
              );
            },
          },
        ]
      ),
      gO);
    function gO(e, t) {
      var n,
        r = this;
      if (
        ($a(this, gO),
        (this.timers = {}),
        (this.ready = !1),
        (this.loading = !1),
        (this.failed = !1),
        (this.touch = Ix.touch),
        (this.media = e),
        JT(this.media) && (this.media = document.querySelectorAll(this.media)),
        ((window.jQuery && this.media instanceof jQuery) ||
          ex(this.media) ||
          ZT(this.media)) &&
          (this.media = this.media[0]),
        (this.config = hx(
          {},
          PA,
          gO.defaults,
          t || {},
          (function () {
            try {
              return JSON.parse(r.media.getAttribute("data-plyr-config"));
            } catch (e) {
              return {};
            }
          })()
        )),
        (this.elements = {
          container: null,
          fullscreen: null,
          captions: null,
          buttons: {},
          display: {},
          progress: {},
          inputs: {},
          settings: { popup: null, menu: null, panels: {}, buttons: {} },
        }),
        (this.captions = {
          active: null,
          currentTrack: -1,
          meta: new WeakMap(),
        }),
        (this.fullscreen = { active: !1 }),
        (this.options = { speed: [], quality: [] }),
        (this.debug = new RA(this.config.debug)),
        this.debug.log("Config", this.config),
        this.debug.log("Support", Ix),
        !GT(this.media) && tx(this.media))
      )
        if (this.media.plyr) this.debug.warn("Target already setup");
        else if (this.config.enabled)
          if (Ix.check().api) {
            var i = this.media.cloneNode(!0);
            (i.autoplay = !1), (this.elements.original = i);
            var o = this.media.tagName.toLowerCase(),
              a = null,
              s = null;
            switch (o) {
              case "div":
                var c,
                  a = this.media.querySelector("iframe");
                if (
                  (tx(a)
                    ? ((s = TA(a.getAttribute("src"))),
                      (this.provider =
                        ((n = s.toString()),
                        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                          n
                        )
                          ? jA.youtube
                          : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                              n
                            )
                          ? jA.vimeo
                          : null)),
                      (this.elements.container = this.media),
                      (this.media = a),
                      (this.elements.container.className = ""),
                      s.search.length &&
                        ((c = ["1", "true"]).includes(
                          s.searchParams.get("autoplay")
                        ) && (this.config.autoplay = !0),
                        c.includes(s.searchParams.get("loop")) &&
                          (this.config.loop.active = !0),
                        this.isYouTube
                          ? ((this.config.playsinline = c.includes(
                              s.searchParams.get("playsinline")
                            )),
                            (this.config.youtube.hl = s.searchParams.get("hl")))
                          : (this.config.playsinline = !0)))
                    : ((this.provider = this.media.getAttribute(
                        this.config.attributes.embed.provider
                      )),
                      this.media.removeAttribute(
                        this.config.attributes.embed.provider
                      )),
                  rx(this.provider) || !Object.keys(jA).includes(this.provider))
                )
                  return void this.debug.error(
                    "Setup failed: Invalid provider"
                  );
                this.type = CA;
                break;
              case "video":
              case "audio":
                (this.type = o),
                  (this.provider = jA.html5),
                  this.media.hasAttribute("crossorigin") &&
                    (this.config.crossorigin = !0),
                  this.media.hasAttribute("autoplay") &&
                    (this.config.autoplay = !0),
                  (this.media.hasAttribute("playsinline") ||
                    this.media.hasAttribute("webkit-playsinline")) &&
                    (this.config.playsinline = !0),
                  this.media.hasAttribute("muted") && (this.config.muted = !0),
                  this.media.hasAttribute("loop") &&
                    (this.config.loop.active = !0);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            (this.supported = Ix.check(
              this.type,
              this.provider,
              this.config.playsinline
            )),
              this.supported.api
                ? ((this.eventListeners = []),
                  (this.listeners = new qA(this)),
                  (this.storage = new dA(this)),
                  (this.media.plyr = this),
                  tx(this.elements.container) ||
                    ((this.elements.container = gx("div", { tabindex: 0 })),
                    px(this.media, this.elements.container)),
                  FA.migrateStyles.call(this),
                  FA.addStyleHook.call(this),
                  QA.setup.call(this),
                  this.config.debug &&
                    Rx.call(
                      this,
                      this.elements.container,
                      this.config.events.join(" "),
                      function (e) {
                        r.debug.log("event: ".concat(e.type));
                      }
                    ),
                  (this.fullscreen = new LA(this)),
                  (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                    FA.build.call(this),
                  this.listeners.container(),
                  this.listeners.global(),
                  this.config.ads.enabled && (this.ads = new ZA(this)),
                  this.isHTML5 &&
                    this.config.autoplay &&
                    setTimeout(function () {
                      return Ux(r.play());
                    }, 10),
                  (this.lastSeekTime = 0),
                  this.config.previewThumbnails.enabled &&
                    (this.previewThumbnails = new fO(this)))
                : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        else this.debug.error("Setup failed: disabled by config");
      else this.debug.error("Setup failed: no suitable element passed");
    }
    dO.defaults = JSON.parse(JSON.stringify(PA));
    function mO(e) {
      var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
        n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
      return e && e.classList[n ? "add" : "remove"](t);
    }
    var vO,
      yO,
      bO = {
        video: {
          type: "video",
          title: "Черная Вдова",
          sources: [
            { src: "video/black-widow.webm", type: "video/webm", size: 576 },
            { src: "video/black-widow.webm", type: "video/webm", size: 720 },
            { src: "video/black-widow.mp4", type: "video/mp4", size: 1080 },
            { src: "video/black-widow.mp4", type: "video/mp4", size: 1440 },
          ],
        },
        audio: {
          type: "audio",
          title: "Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",
          sources: [
            { src: "", type: "audio/mp3" },
            { src: "", type: "audio/ogg" },
          ],
        },
        youtube: { type: "video", sources: [{ src: "", provider: "youtube" }] },
        vimeo: { type: "video", sources: [{ src: "", provider: "vimeo" }] },
      },
      wO = "plyr.io";
    window.location.host === wO &&
      (void 0 ===
        (vO = {
          dsn: "https://d4ad9866ad834437a4754e23937071e4@sentry.io/305555",
          whitelistUrls: [wO].map(function (e) {
            return new RegExp("https://(([a-z0-9])+(.))*".concat(e));
          }),
        }) && (vO = {}),
      void 0 === vO.defaultIntegrations && (vO.defaultIntegrations = Td),
      void 0 === vO.release &&
        (yO = Af()).SENTRY_RELEASE &&
        yO.SENTRY_RELEASE.id &&
        (vO.release = yO.SENTRY_RELEASE.id),
      (function (e, t) {
        !0 === t.debug && Yf.enable();
        var n = dp(),
          r = new e(t);
        n.bindClient(r);
      })(ad, vO)),
      document.addEventListener("DOMContentLoaded", function () {
        Dg.setup(".js-shr", {
          count: { className: "button__count" },
          wrapper: { className: "button--with-count" },
        });
        var n = new dO("#player", {
          debug: !0,
          title: "",
          iconUrl: "https://cdn.plyr.io/3.6.2/demo.svg",
          keyboard: { global: !0 },
          tooltips: { controls: !0 },
          captions: { active: !0 },
          ads: {
            enabled: window.location.host.includes(wO),
            publisherId: "918848828995742",
          },
          previewThumbnails: { enabled: !0, src: ["", ""] },
          vimeo: { referrerPolicy: "no-referrer" },
        });
        window.player = n;
        var t = document.querySelectorAll("[data-source]"),
          r = Object.keys(bO),
          i = Boolean(window.history && window.history.pushState),
          o = window.location.hash.substring(1),
          e = o.length;
        function a(e) {
          Array.from(t).forEach(function (e) {
            return mO(e.parentElement, "active", !1);
          }),
            mO(
              document.querySelector('[data-source="'.concat(e, '"]')),
              "active",
              !0
            ),
            Array.from(document.querySelectorAll(".plyr__cite")).forEach(
              function (e) {
                e.hidden = !0;
              }
            ),
            (document.querySelector(".plyr__cite".concat(e)).hidden = !1);
        }
        function s(e, t) {
          !r.includes(e) ||
            (!t && e === o) ||
            (!o.length && "video" === e) ||
            ((n.source = bO[e]), a((o = e)));
        }
        Array.from(t).forEach(function (t) {
          t.addEventListener("click", function () {
            var e = t.getAttribute("data-source");
            s(e), i && window.history.pushState({ type: e }, "", "#".concat(e));
          });
        }),
          window.addEventListener("popstate", function (e) {
            e.state && Object.keys(e.state).includes("type") && s(e.state.type);
          }),
          e || (o = "video"),
          i &&
            r.includes(o) &&
            window.history.replaceState(
              { type: o },
              "",
              e ? "#".concat(o) : ""
            ),
          "video" !== o && s(o, !0),
          a(o);
      });
  })();
