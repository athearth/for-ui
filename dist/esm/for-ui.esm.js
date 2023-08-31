import { jsx as i, jsxs as F, Fragment as se } from "react/jsx-runtime";
import kt from "@mui/material/Badge";
import * as H from "react";
import U, { Children as Tt, useRef as lt, useState as Ce, useCallback as ue, forwardRef as oe, memo as Pt, Fragment as pe, useMemo as Ee, createElement as Re, isValidElement as Fe, useLayoutEffect as Ot } from "react";
import Mt from "@mui/lab/LoadingButton";
import St from "@mui/material/Checkbox";
import ze from "@mui/material/FormControlLabel";
import dt from "@mui/material/Chip";
import Et from "@mui/material/Divider";
import Rt from "@mui/material/Drawer";
import { MdClose as It, MdMoreVert as _t, MdFileUpload as Nt, MdExpandMore as jt, MdCheck as At, MdArrowUpward as zt, MdArrowDownward as Wt } from "react-icons/md";
import { useDropzone as Dt } from "react-dropzone";
import Gt from "@mui/material/IconButton";
import Ft from "@mui/material/Menu";
import ut from "react-is";
import $t from "@mui/material/MenuItem";
import Lt from "@mui/material/Backdrop";
import qt from "@mui/material/Modal";
import Ht from "@mui/material/Radio";
import Vt from "@mui/material/FormControl";
import Bt from "@mui/material/FormHelperText";
import Ut from "@mui/material/RadioGroup";
import Yt from "@mui/material/Popper";
import Xt from "@mui/material/Fade";
import ct from "@mui/material/Paper";
import Jt, { createFilterOptions as Zt } from "@mui/material/Autocomplete";
import $e from "@mui/material/InputAdornment";
import Qt from "@mui/material/TextField";
import { NumericFormat as Kt } from "react-number-format";
import Ie from "@mui/material/Skeleton";
import { StepConnector as er, stepConnectorClasses as be } from "@mui/material";
import tr from "@mui/material/Stepper";
import rr from "@mui/material/Step";
import nr from "@mui/material/StepLabel";
import or from "@mui/material/Switch";
import { flushSync as ar } from "react-dom";
import ir from "@mui/material/Tab";
import { default as ha } from "@mui/lab/TabContext";
import sr from "@mui/lab/TabPanel";
import lr from "@mui/material/Tabs";
import dr from "@mui/lab/TabList";
import { useReactTable as ur, getCoreRowModel as cr, getSortedRowModel as fr, getFilteredRowModel as pr, getPaginationRowModel as hr, flexRender as _e } from "@tanstack/react-table";
import { createColumnHelper as ma } from "@tanstack/react-table";
import br from "@mui/material/Pagination";
const Wo = ({ className: e, badgeContent: t, children: r, ...n }) => /* @__PURE__ */ i(
  kt,
  {
    badgeContent: t,
    color: "primary",
    componentsProps: {
      root: {
        className: `text-shade-dark-default ${e}`
      }
    },
    ...n,
    children: r
  }
);
function ft(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = ft(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function mr() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = ft(e)) && (n && (n += " "), n += t);
  return n;
}
function gr() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = pt(t)) && (n && (n += " "), n += r);
  return n;
}
function pt(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = pt(e[n])) && (r && (r += " "), r += t);
  return r;
}
function Ne() {
  return Ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ne.apply(this, arguments);
}
function vr(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(a, l) {
    r.set(a, l), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var s = r.get(l);
      if (s !== void 0)
        return s;
      if ((s = n.get(l)) !== void 0)
        return o(l, s), s;
    },
    set: function(l, s) {
      r.has(l) ? r.set(l, s) : o(l, s);
    }
  };
}
var We = "-";
function yr(e) {
  var t = wr(e);
  function r(o) {
    var a = o.split(We);
    return a[0] === "" && a.length !== 1 && a.shift(), ht(a, t) || xr(o);
  }
  function n(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: r,
    getConflictingClassGroupIds: n
  };
}
function ht(e, t) {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], o = t.nextPart.get(n), a = o ? ht(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var l = e.join(We);
    return (r = t.validators.find(function(s) {
      var p = s.validator;
      return p(l);
    })) == null ? void 0 : r.classGroupId;
  }
}
var Le = /^\[(.+)\]$/;
function xr(e) {
  if (Le.test(e)) {
    var t = Le.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function wr(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = kr(Object.entries(e.classGroups), r);
  return o.forEach(function(a) {
    var l = a[0], s = a[1];
    je(s, n, l, t);
  }), n;
}
function je(e, t, r, n) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : qe(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Cr(o)) {
        je(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(function(l) {
      var s = l[0], p = l[1];
      je(p, qe(t, s), r, n);
    });
  });
}
function qe(e, t) {
  var r = e;
  return t.split(We).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Cr(e) {
  return e.isThemeGetter;
}
function kr(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], o = r[1], a = o.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(s) {
        var p = s[0], u = s[1];
        return [t + p, u];
      })) : l;
    });
    return [n, a];
  }) : e;
}
var bt = "!";
function Tr(e) {
  var t = e.separator || ":";
  return function(n) {
    for (var o = 0, a = [], l = 0, s = 0; s < n.length; s++) {
      var p = n[s];
      o === 0 && p === t[0] && (t.length === 1 || n.slice(s, s + t.length) === t) && (a.push(n.slice(l, s)), l = s + t.length), p === "[" ? o++ : p === "]" && o--;
    }
    var u = a.length === 0 ? n : n.substring(l), f = u.startsWith(bt), h = f ? u.substring(1) : u;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: h
    };
  };
}
function Pr(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var o = n[0] === "[";
    o ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function Or(e) {
  return Ne({
    cache: vr(e.cacheSize),
    splitModifiers: Tr(e)
  }, yr(e));
}
var Mr = /\s+/;
function Sr(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(Mr).map(function(l) {
    var s = r(l), p = s.modifiers, u = s.hasImportantModifier, f = s.baseClassName, h = n(f);
    if (!h)
      return {
        isTailwindClass: !1,
        originalClassName: l
      };
    var y = Pr(p).join(":"), b = u ? y + bt : y;
    return {
      isTailwindClass: !0,
      modifierId: b,
      classGroupId: h,
      originalClassName: l
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var s = l.modifierId, p = l.classGroupId, u = s + p;
    return a.has(u) ? !1 : (a.add(u), o(p).forEach(function(f) {
      return a.add(s + f);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function He() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, o, a, l = s;
  function s(u) {
    var f = t[0], h = t.slice(1), y = h.reduce(function(b, x) {
      return x(b);
    }, f());
    return n = Or(y), o = n.cache.get, a = n.cache.set, l = p, p(u);
  }
  function p(u) {
    var f = o(u);
    if (f)
      return f;
    var h = Sr(u, n);
    return a(u, h), h;
  }
  return function() {
    return l(gr.apply(null, arguments));
  };
}
function A(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ce = /^\[(.+)\]$/, Er = /^\d+\/\d+$/, Rr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ir = /^(\d+)?(xs|sm|md|lg|xl)$/, _r = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/, Nr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function re(e) {
  return !Number.isNaN(Number(e)) || Rr.has(e) || Er.test(e) || fe(e);
}
function fe(e) {
  var t, r = (t = ce.exec(e)) == null ? void 0 : t[1];
  return r ? r.startsWith("length:") || _r.test(r) : !1;
}
function jr(e) {
  var t, r = (t = ce.exec(e)) == null ? void 0 : t[1];
  return r ? r.startsWith("size:") : !1;
}
function Ar(e) {
  var t, r = (t = ce.exec(e)) == null ? void 0 : t[1];
  return r ? r.startsWith("position:") : !1;
}
function zr(e) {
  var t, r = (t = ce.exec(e)) == null ? void 0 : t[1];
  return r ? r.startsWith("url(") || r.startsWith("url:") : !1;
}
function Ve(e) {
  var t, r = (t = ce.exec(e)) == null ? void 0 : t[1];
  return r ? !Number.isNaN(Number(r)) || r.startsWith("number:") : !1;
}
function Y(e) {
  var t, r = (t = ce.exec(e)) == null ? void 0 : t[1];
  return r ? Number.isInteger(Number(r)) : Number.isInteger(Number(e));
}
function q(e) {
  return ce.test(e);
}
function me() {
  return !0;
}
function de(e) {
  return Ir.test(e);
}
function Wr(e) {
  var t, r = (t = ce.exec(e)) == null ? void 0 : t[1];
  return r ? Nr.test(r) : !1;
}
function Be() {
  var e = A("colors"), t = A("spacing"), r = A("blur"), n = A("brightness"), o = A("borderColor"), a = A("borderRadius"), l = A("borderSpacing"), s = A("borderWidth"), p = A("contrast"), u = A("grayscale"), f = A("hueRotate"), h = A("invert"), y = A("gap"), b = A("gradientColorStops"), x = A("inset"), g = A("margin"), v = A("opacity"), w = A("padding"), z = A("saturate"), Q = A("scale"), D = A("sepia"), C = A("skew"), k = A("space"), P = A("translate"), $ = function() {
    return ["auto", "contain", "none"];
  }, ae = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, te = function() {
    return ["auto", t];
  }, T = function() {
    return ["", re];
  }, W = function() {
    return ["auto", Y];
  }, X = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, G = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ie = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, B = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, J = function() {
    return ["", "0", q];
  }, le = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [me],
      spacing: [re],
      blur: ["none", "", de, fe],
      brightness: [Y],
      borderColor: [e],
      borderRadius: ["none", "", "full", de, fe],
      borderSpacing: [t],
      borderWidth: T(),
      contrast: [Y],
      grayscale: J(),
      hueRotate: [Y],
      invert: J(),
      gap: [t],
      gradientColorStops: [e],
      inset: te(),
      margin: te(),
      opacity: [Y],
      padding: [t],
      saturate: [Y],
      scale: [Y],
      sepia: J(),
      skew: [Y, q],
      space: [t],
      translate: [t]
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", q]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [de]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": le()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(X(), [q])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ae()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ae()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ae()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Y]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [t]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [me]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: [Y]
        }]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [me]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Y]
        }]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: B()
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: [].concat(B(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(B(), ["baseline", "stretch"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [k]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [k]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", re]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [de]
        }, de, fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", re]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", de, fe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ve]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [me]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", fe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", re]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(G(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", re]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", re]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [t]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", fe]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", q]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(X(), [Ar])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", jr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, zr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(G(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(G())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [re]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: T()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [re]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", de, Wr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [me]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Beldn Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": ie()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", de, q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [D]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", q]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [Q]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [Q]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [Q]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Y, q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": [t]
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": [t]
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": [t]
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": [t]
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": [t]
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": [t]
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": [t]
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": [t]
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": [t]
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": [t]
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": [t]
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": [t]
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": [t]
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": [t]
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", q]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [re, Ve]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      "col-start-end": ["col-start", "col-end"],
      "row-start-end": ["row-start", "row-end"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    }
  };
}
function Dr(e, t) {
  for (var r in t)
    mt(e, r, t[r]);
  return e;
}
var Gr = Object.prototype.hasOwnProperty, Fr = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function mt(e, t, r) {
  if (!Gr.call(e, t) || Fr.has(typeof r) || r === null) {
    e[t] = r;
    return;
  }
  if (Array.isArray(r) && Array.isArray(e[t])) {
    e[t] = e[t].concat(r);
    return;
  }
  if (typeof r == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = r;
      return;
    }
    for (var n in r)
      mt(e[t], n, r[n]);
  }
}
function $r(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return typeof e == "function" ? He.apply(void 0, [Be, e].concat(r)) : He.apply(void 0, [function() {
    return Dr(Be(), e);
  }].concat(r));
}
const Lr = $r({
  classGroups: {
    "font-size": [
      {
        text: ["xs", "s", "r", "xr", "l", "xl"]
      }
    ]
  }
}), d = (...e) => Lr(mr(e)), qr = {
  large: "px-6 py-2 text-r",
  medium: "px-4 py-1 text-s",
  small: "px-2 py-0 text-s hover:bg-transparent"
}, Hr = {
  contained: "text-shade-white-default bg-primary-dark-default",
  outlined: "bg-shade-white-default text-primary-dark-default border-primary-dark-default",
  text: "text-primary-dark-default bg-shade-white-default"
}, Vr = {
  contained: "hover:text-shade-white-default hover:bg-primary-dark-hover",
  outlined: "hover:bg-shade-white-hover hover:text-primary-dark-hover hover:border-primary-dark-hover",
  text: "hover:text-primary-dark-hover hover:bg-shade-white-hover"
}, Br = {
  contained: "text-shade-white-disabled bg-primary-dark-disabled",
  outlined: "bg-shade-white-disabled text-primary-dark-disabled border-primary-dark-disabled",
  text: "text-primary-dark-disabled bg-shade-white-disabled"
}, Ur = {
  contained: "text-primary-dark-default",
  outlined: "text-primary-dark-default",
  text: "text-primary-dark-default"
}, Yr = {
  contained: "text-shade-white-disabled",
  outlined: "",
  text: ""
}, Xr = {
  contained: "text-shade-white-disabled",
  outlined: "",
  text: ""
}, Jr = U.forwardRef((e, t) => {
  const {
    type: r = "button",
    variant: n = "filled",
    size: o = "large",
    color: a = "primary",
    loadingPosition: l = "center",
    disabled: s = !1,
    loading: p = !1,
    startIcon: u,
    endIcon: f,
    children: h,
    onClick: y,
    className: b,
    ...x
  } = e, g = Tt.toArray(e.children).reduce((w, z) => typeof z == "string" || typeof z == "number" ? w.concat(z.toString()) : w, ""), v = n === "filled" ? "contained" : n;
  return /* @__PURE__ */ i(
    Mt,
    {
      ref: t,
      type: r,
      variant: v,
      startIcon: u,
      endIcon: f,
      loading: p,
      loadingPosition: l,
      disabled: s,
      onClick: y,
      "aria-label": g || e["aria-label"] || "button",
      classes: {
        root: d([
          "h-max-content flex max-w-max cursor-pointer whitespace-nowrap rounded-lg px-6 py-2 font-sans font-bold shadow-none transition hover:shadow-none focus:outline-none disabled:cursor-not-allowed",
          Hr[v],
          Vr[v],
          qr[o],
          b
        ]),
        disabled: d([Br[v], p && l === "center" && "text-transparent"]),
        loadingIndicator: d([Ur[v]]),
        loadingIndicatorStart: d([Yr[v]]),
        loadingIndicatorEnd: d([Xr[v]])
      },
      ...x,
      children: h
    }
  );
}), Zr = (e, t, r) => d(
  {
    inherit: "",
    regular: "font-normal",
    bold: "font-bold"
  }[t],
  {
    inherit: "",
    sansSerif: "font-sans",
    monospaced: "font-mono"
  }[r],
  {
    inherit: "",
    xs: "text-xs",
    s: "text-s",
    r: "text-r",
    xr: "text-xr",
    l: "text-l",
    xl: "text-xl"
  }[e]
), ne = ({
  as: e,
  size: t = "inherit",
  weight: r = "inherit",
  typeface: n = "inherit",
  className: o,
  children: a,
  ...l
}) => /* @__PURE__ */ i(e || "span", { className: d(Zr(t, r, n), o), ...l, children: a }), Qr = ({ children: e }) => /* @__PURE__ */ i(ne, { as: "h4", className: "text-shade-dark-default border-none font-sans font-bold", children: e }), Kr = ({ children: e }) => /* @__PURE__ */ i("div", { children: e }), Do = ({ className: e, children: t }) => /* @__PURE__ */ i(
  "section",
  {
    className: `bg-shade-white-default shadow-main flex flex-col overflow-y-visible rounded-3xl font-sans ${e}`,
    children: t
  }
), Go = ({ className: e, title: t, action: r }) => /* @__PURE__ */ F("div", { className: `flex justify-between px-8 pt-8 font-sans ${e}`, children: [
  /* @__PURE__ */ i(Qr, { children: t }),
  r && /* @__PURE__ */ i(Kr, { children: r })
] }), Fo = ({ className: e, children: t }) => /* @__PURE__ */ i("div", { className: `p-8 pt-6 font-sans ${e}`, children: t }), Ue = ({ nopadding: e = !1, iconsize: t = 28, className: r, ...n }) => /* @__PURE__ */ i(
  St,
  {
    classes: {
      root: d("text-shade-medium-default", r, e ? "p-0" : "p-1"),
      checked: d("text-secondary-dark-default"),
      disabled: d("text-shade-dark-disabled")
    },
    sx: { "& .MuiSvgIcon-root": { fontSize: t } },
    ...n
  }
), Ye = ({ label: e, nopadding: t = !1, disabled: r, className: n, ...o }) => /* @__PURE__ */ i(se, { children: e ? /* @__PURE__ */ i(
  ze,
  {
    className: d("m-0", n),
    control: /* @__PURE__ */ i(Ue, { nopadding: t, ...o }),
    label: /* @__PURE__ */ i(ne, { size: "s", className: d("text-shade-dark-default ml-2", r && "text-shade-dark-disabled"), children: e })
  }
) : /* @__PURE__ */ i(Ue, { nopadding: t, className: n, ...o }) }), en = (e) => ({
  negative: d(["bg-negative-light-default", e && "hover:bg-negative-light-hover cursor-pointer"]),
  white: d([
    "border-shade-light-default bg-shade-white-default border-solid",
    e && "hover:bg-shade-light-hover cursor-pointer"
  ]),
  default: d([
    "border-shade-medium-default bg-shade-light-default",
    e && "hover:bg-shade-light-hover cursor-pointer"
  ])
}), tn = (e) => ({
  negative: d(["text-negative-medium-default"]),
  white: d(["text-shade-dark-default"]),
  default: d(["text-shade-dark-default"])
}), rn = (e) => ({
  negative: d(["icon-negative-medium-default"]),
  white: d(["icon-shade-dark-default"]),
  default: d(["icon-shade-dark-default"])
}), nn = (e) => ({
  negative: d(["text-negative-medium-default", e && "hover:opacity-70"]),
  white: d(["text-shade-dark-default", e && "hover:icon-primary-dark-hover"]),
  default: d(["text-shade-dark-default", e && "hover:icon-primary-dark-hover"])
}), gt = ({
  color: e = "default",
  leadingIcon: t,
  trailingIcon: r,
  clickable: n,
  onDelete: o,
  className: a,
  ...l
}) => /* @__PURE__ */ i(
  dt,
  {
    icon: o ? void 0 : t || r,
    deleteIcon: r,
    onDelete: o,
    classes: {
      root: d([
        "inline-flex h-7 gap-1 border px-3 py-1",
        t && "pl-2",
        (r || o) && "pr-2",
        !o && r ? "flex-row-reverse" : "",
        en(!!(n || o))[e],
        a
      ]),
      label: d(["text-s px-0 font-sans"], tn()[e]),
      icon: d(["m-0", rn()[e]]),
      deleteIcon: d(["m-0", nn(!!(n || o))[e]])
    },
    ...l
  }
), $o = ({ className: e }) => /* @__PURE__ */ i(
  Et,
  {
    light: !0,
    classes: {
      root: `border border-shade-medium-default ${e}`
    }
  }
), Xe = 240, xe = {
  left: "left",
  right: "right"
}, Lo = ({
  open: e,
  anchor: t = xe.right,
  headerChildren: r,
  defaultWidth: n = Xe,
  minWidth: o = Xe,
  children: a,
  onClose: l,
  className: s,
  ...p
}) => {
  const u = lt(null), [f, h] = Ce(n), y = ue(() => {
    l && l();
  }, [l]), b = ue(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (v) => {
      switch (t) {
        case xe.left: {
          const w = v.pageX;
          w > o && w < window.innerWidth && h(w);
          break;
        }
        case xe.right: {
          const w = window.innerWidth - v.pageX;
          w > o && w < window.innerWidth && h(w);
          break;
        }
      }
    },
    [t]
  ), x = ue(() => {
    document.removeEventListener("mouseup", x, !0), document.removeEventListener("mousemove", b, !0);
  }, []), g = ue(() => {
    document.addEventListener("mouseup", x, !0), document.addEventListener("mousemove", b, !0);
  }, []);
  return /* @__PURE__ */ F(
    Rt,
    {
      open: e,
      anchor: t,
      classes: {
        root: d("shadow-drawer z-modal", s),
        paper: d("p-6 [&.MuiBackdrop-root]:bg-transparent")
      },
      PaperProps: {
        sx: {
          width: f,
          height: "100%"
        }
      },
      onClose: y,
      ...p,
      children: [
        /* @__PURE__ */ F("div", { className: "flex items-center", children: [
          /* @__PURE__ */ i(Jr, { variant: "text", size: "small", startIcon: /* @__PURE__ */ i(It, { size: 16 }), onClick: y, children: "閉じる" }),
          r && /* @__PURE__ */ i("div", { className: "ml-auto", children: r })
        ] }),
        /* @__PURE__ */ i(
          "div",
          {
            onMouseDown: g,
            ref: u,
            className: d([
              "user-select[none] absolute top-0 h-full w-9 cursor-[ew-resize] px-3",
              t === "left" ? "-right-3" : "-left-3"
            ]),
            children: /* @__PURE__ */ i(
              "span",
              {
                className: d([
                  "border-shade-light-default hover:bg-shade-white-hover block h-full w-full",
                  t === xe.left ? "border-r" : "border-l"
                ]),
                children: /* @__PURE__ */ i(
                  _t,
                  {
                    size: "24",
                    className: d(["relative h-full", t === "left" ? "right-[6px]" : "-left-[6px]"])
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ i("div", { className: "overflow-wrap[break-word] mt-3", children: a })
      ]
    }
  );
}, qo = ({
  files: e,
  onDrop: t,
  onRemove: r,
  message: n = "ここにファイルをドロップしてアップロード",
  multiple: o = !1,
  className: a
}) => {
  const { getRootProps: l, getInputProps: s } = Dt({ onDrop: t, multiple: o });
  return /* @__PURE__ */ F(
    "div",
    {
      ...l(),
      className: d([
        "flex w-auto cursor-pointer flex-col flex-wrap justify-center py-3 px-5",
        "border-shade-medium-default rounded border border-dashed",
        a
      ]),
      children: [
        /* @__PURE__ */ i("input", { ...s() }),
        /* @__PURE__ */ F("div", { className: "text-shade-medium-default flex w-full flex-col items-center py-5 px-3", children: [
          /* @__PURE__ */ i(Nt, { size: 48, className: "text-shade-light-default mb-3" }),
          /* @__PURE__ */ i(ne, { size: "s", children: n })
        ] }),
        e.length > 0 && /* @__PURE__ */ i("div", { className: "flex w-full flex-wrap justify-start gap-2", children: e.map((p) => /* @__PURE__ */ i(gt, { label: p.name, onDelete: (u) => r(p)(u) }, p.name)) })
      ]
    }
  );
}, Ho = ({ className: e, children: t, ...r }) => /* @__PURE__ */ i(Gt, { className: `focus:outline-none ${e}`, ...r, children: t });
var ve = {}, L = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ke, Je;
function on() {
  if (Je)
    return ke;
  Je = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var p = Object.getOwnPropertyNames(l).map(function(f) {
        return l[f];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ke = o() ? Object.assign : function(a, l) {
    for (var s, p = n(a), u, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var h in s)
        t.call(s, h) && (p[h] = s[h]);
      if (e) {
        u = e(s);
        for (var y = 0; y < u.length; y++)
          r.call(s, u[y]) && (p[u[y]] = s[u[y]]);
      }
    }
    return p;
  }, ke;
}
var Te, Ze;
function De() {
  if (Ze)
    return Te;
  Ze = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Te = e, Te;
}
var Pe, Qe;
function vt() {
  return Qe || (Qe = 1, Pe = Function.call.bind(Object.prototype.hasOwnProperty)), Pe;
}
var Oe, Ke;
function an() {
  if (Ke)
    return Oe;
  Ke = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = De(), r = {}, n = vt();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(a, l, s, p, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var h;
          try {
            if (typeof a[f] != "function") {
              var y = Error(
                (p || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = a[f](l, f, p, s, null, t);
          } catch (x) {
            h = x;
          }
          if (h && !(h instanceof Error) && e(
            (p || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + s + " type: " + h.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Oe = o, Oe;
}
var Me, et;
function sn() {
  if (et)
    return Me;
  et = 1;
  var e = ut, t = on(), r = De(), n = vt(), o = an(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var p = "Warning: " + s;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Me = function(s, p) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(c) {
      var m = c && (u && c[u] || c[f]);
      if (typeof m == "function")
        return m;
    }
    var y = "<<anonymous>>", b = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: z(),
      arrayOf: Q,
      element: D(),
      elementType: C(),
      instanceOf: k,
      node: te(),
      objectOf: $,
      oneOf: P,
      oneOfType: ae,
      shape: W,
      exact: X
    };
    function x(c, m) {
      return c === m ? c !== 0 || 1 / c === 1 / m : c !== c && m !== m;
    }
    function g(c, m) {
      this.message = c, this.data = m && typeof m == "object" ? m : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function v(c) {
      if (process.env.NODE_ENV !== "production")
        var m = {}, R = 0;
      function S(I, M, E, _, j, N, ee) {
        if (_ = _ || y, N = N || E, ee !== r) {
          if (p) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = _ + ":" + E;
            !m[he] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), m[he] = !0, R++);
          }
        }
        return M[E] == null ? I ? M[E] === null ? new g("The " + j + " `" + N + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new g("The " + j + " `" + N + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : c(M, E, _, j, N);
      }
      var O = S.bind(null, !1);
      return O.isRequired = S.bind(null, !0), O;
    }
    function w(c) {
      function m(R, S, O, I, M, E) {
        var _ = R[S], j = B(_);
        if (j !== c) {
          var N = J(_);
          return new g(
            "Invalid " + I + " `" + M + "` of type " + ("`" + N + "` supplied to `" + O + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return v(m);
    }
    function z() {
      return v(l);
    }
    function Q(c) {
      function m(R, S, O, I, M) {
        if (typeof c != "function")
          return new g("Property `" + M + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var E = R[S];
        if (!Array.isArray(E)) {
          var _ = B(E);
          return new g("Invalid " + I + " `" + M + "` of type " + ("`" + _ + "` supplied to `" + O + "`, expected an array."));
        }
        for (var j = 0; j < E.length; j++) {
          var N = c(E, j, O, I, M + "[" + j + "]", r);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return v(m);
    }
    function D() {
      function c(m, R, S, O, I) {
        var M = m[R];
        if (!s(M)) {
          var E = B(M);
          return new g("Invalid " + O + " `" + I + "` of type " + ("`" + E + "` supplied to `" + S + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(c);
    }
    function C() {
      function c(m, R, S, O, I) {
        var M = m[R];
        if (!e.isValidElementType(M)) {
          var E = B(M);
          return new g("Invalid " + O + " `" + I + "` of type " + ("`" + E + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(c);
    }
    function k(c) {
      function m(R, S, O, I, M) {
        if (!(R[S] instanceof c)) {
          var E = c.name || y, _ = K(R[S]);
          return new g("Invalid " + I + " `" + M + "` of type " + ("`" + _ + "` supplied to `" + O + "`, expected ") + ("instance of `" + E + "`."));
        }
        return null;
      }
      return v(m);
    }
    function P(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function m(R, S, O, I, M) {
        for (var E = R[S], _ = 0; _ < c.length; _++)
          if (x(E, c[_]))
            return null;
        var j = JSON.stringify(c, function(ee, Z) {
          var he = J(Z);
          return he === "symbol" ? String(Z) : Z;
        });
        return new g("Invalid " + I + " `" + M + "` of value `" + String(E) + "` " + ("supplied to `" + O + "`, expected one of " + j + "."));
      }
      return v(m);
    }
    function $(c) {
      function m(R, S, O, I, M) {
        if (typeof c != "function")
          return new g("Property `" + M + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var E = R[S], _ = B(E);
        if (_ !== "object")
          return new g("Invalid " + I + " `" + M + "` of type " + ("`" + _ + "` supplied to `" + O + "`, expected an object."));
        for (var j in E)
          if (n(E, j)) {
            var N = c(E, j, O, I, M + "." + j, r);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return v(m);
    }
    function ae(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var m = 0; m < c.length; m++) {
        var R = c[m];
        if (typeof R != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(R) + " at index " + m + "."
          ), l;
      }
      function S(O, I, M, E, _) {
        for (var j = [], N = 0; N < c.length; N++) {
          var ee = c[N], Z = ee(O, I, M, E, _, r);
          if (Z == null)
            return null;
          Z.data && n(Z.data, "expectedType") && j.push(Z.data.expectedType);
        }
        var he = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new g("Invalid " + E + " `" + _ + "` supplied to " + ("`" + M + "`" + he + "."));
      }
      return v(S);
    }
    function te() {
      function c(m, R, S, O, I) {
        return G(m[R]) ? null : new g("Invalid " + O + " `" + I + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
      }
      return v(c);
    }
    function T(c, m, R, S, O) {
      return new g(
        (c || "React class") + ": " + m + " type `" + R + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function W(c) {
      function m(R, S, O, I, M) {
        var E = R[S], _ = B(E);
        if (_ !== "object")
          return new g("Invalid " + I + " `" + M + "` of type `" + _ + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var j in c) {
          var N = c[j];
          if (typeof N != "function")
            return T(O, I, M, j, J(N));
          var ee = N(E, j, O, I, M + "." + j, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return v(m);
    }
    function X(c) {
      function m(R, S, O, I, M) {
        var E = R[S], _ = B(E);
        if (_ !== "object")
          return new g("Invalid " + I + " `" + M + "` of type `" + _ + "` " + ("supplied to `" + O + "`, expected `object`."));
        var j = t({}, R[S], c);
        for (var N in j) {
          var ee = c[N];
          if (n(c, N) && typeof ee != "function")
            return T(O, I, M, N, J(ee));
          if (!ee)
            return new g(
              "Invalid " + I + " `" + M + "` key `" + N + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(R[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var Z = ee(E, N, O, I, M + "." + N, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return v(m);
    }
    function G(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(G);
          if (c === null || s(c))
            return !0;
          var m = h(c);
          if (m) {
            var R = m.call(c), S;
            if (m !== c.entries) {
              for (; !(S = R.next()).done; )
                if (!G(S.value))
                  return !1;
            } else
              for (; !(S = R.next()).done; ) {
                var O = S.value;
                if (O && !G(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ie(c, m) {
      return c === "symbol" ? !0 : m ? m["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && m instanceof Symbol : !1;
    }
    function B(c) {
      var m = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : ie(m, c) ? "symbol" : m;
    }
    function J(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var m = B(c);
      if (m === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return m;
    }
    function le(c) {
      var m = J(c);
      switch (m) {
        case "array":
        case "object":
          return "an " + m;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + m;
        default:
          return m;
      }
    }
    function K(c) {
      return !c.constructor || !c.constructor.name ? y : c.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Me;
}
var Se, tt;
function ln() {
  if (tt)
    return Se;
  tt = 1;
  var e = De();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Se = function() {
    function n(l, s, p, u, f, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Se;
}
if (process.env.NODE_ENV !== "production") {
  var dn = ut, un = !0;
  L.exports = sn()(dn.isElement, un);
} else
  L.exports = ln()();
var V = {};
Object.defineProperty(V, "__esModule", {
  value: !0
});
V.anchorRef = bn;
V.bindContextMenu = gn;
V.bindDialog = Pn;
V.bindDoubleClick = wn;
V.bindFocus = xn;
V.bindHover = yn;
V.bindMenu = kn;
V.bindPopover = Cn;
V.bindPopper = Tn;
V.bindToggle = vn;
V.bindTrigger = mn;
V.createPopupState = hn;
V.initCoreState = void 0;
cn(U);
function yt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (yt = function(n) {
    return n ? r : t;
  })(e);
}
function cn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = yt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
const rt = {};
function fn(e, t) {
  rt[e] || (rt[e] = !0, console.error("[material-ui-popup-state] WARNING", t));
}
const pn = {
  isOpen: !1,
  setAnchorElUsed: !1,
  anchorEl: null,
  anchorPosition: void 0,
  hovered: !1,
  focused: !1,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: !1,
  _deferNextClose: !1
};
V.initCoreState = pn;
function hn({
  state: e,
  setState: t,
  parentPopupState: r,
  popupId: n,
  variant: o,
  disableAutoFocus: a
}) {
  const {
    isOpen: l,
    setAnchorElUsed: s,
    anchorEl: p,
    anchorPosition: u,
    hovered: f,
    focused: h,
    _openEventType: y,
    _childPopupState: b,
    _deferNextOpen: x,
    _deferNextClose: g
  } = e;
  let v = e;
  const w = (T) => {
    Mn(v, T) && t(v = {
      ...v,
      ...T
    });
  }, z = (T) => {
    w({
      setAnchorElUsed: !0,
      anchorEl: T
    });
  }, Q = (T) => {
    l ? C(T) : D(T);
  }, D = (T) => {
    const W = T && T.type, X = T && T.currentTarget, G = T && T.clientX, ie = T && T.clientY, B = typeof G == "number" && typeof ie == "number" ? {
      left: G,
      top: ie
    } : void 0;
    if (W === "touchstart") {
      w({
        _deferNextOpen: !0
      });
      return;
    }
    const J = () => {
      if (!T && !s && fn("missingEventOrAnchorEl", "eventOrAnchorEl should be defined if setAnchorEl is not used"), r) {
        if (!r.isOpen)
          return;
        r._setChildPopupState(te);
      }
      const le = {
        isOpen: !0,
        anchorPosition: B,
        hovered: W === "mouseover" || f,
        focused: W === "focus" || h,
        _openEventType: W
      };
      X ? s || (le.anchorEl = X) : T && (le.anchorEl = T), w(le);
    };
    x ? (w({
      _deferNextOpen: !1
    }), setTimeout(J, 0)) : J();
  }, C = (T) => {
    switch (T && T.type) {
      case "touchstart":
        w({
          _deferNextClose: !0
        });
        return;
    }
    const X = () => {
      b && b.close(), r && r._setChildPopupState(null), w({
        isOpen: !1,
        hovered: !1,
        focused: !1
      });
    };
    g ? (w({
      _deferNextClose: !1
    }), setTimeout(X, 0)) : X();
  }, k = (T, W) => {
    T ? D(W) : C(W);
  }, P = (T) => {
    const W = T.relatedTarget;
    f && !Ae(W, te) && (h ? w({
      hovered: !1
    }) : C(T));
  }, $ = (T) => {
    const W = T.relatedTarget;
    h && !Ae(W, te) && (f ? w({
      focused: !1
    }) : C(T));
  }, ae = (T) => w({
    _childPopupState: T
  }), te = {
    anchorEl: p,
    anchorPosition: u,
    setAnchorEl: z,
    setAnchorElUsed: s,
    popupId: n,
    variant: o,
    isOpen: l,
    open: D,
    close: C,
    toggle: Q,
    setOpen: k,
    onBlur: $,
    onMouseLeave: P,
    disableAutoFocus: a ?? Boolean(f || h),
    _openEventType: y,
    _childPopupState: b,
    _setChildPopupState: ae
  };
  return te;
}
function bn({
  setAnchorEl: e
}) {
  return (t) => {
    t && e(t);
  };
}
function ye({
  isOpen: e,
  open: t,
  popupId: r,
  variant: n
}) {
  return {
    ...n === "popover" ? {
      "aria-haspopup": !0,
      "aria-controls": e && r != null ? r : void 0
    } : n === "popper" ? {
      "aria-describedby": e && r != null ? r : void 0
    } : void 0
  };
}
function mn(e) {
  return {
    ...ye(e),
    onClick: e.open,
    onTouchStart: e.open
  };
}
function gn(e) {
  return {
    ...ye(e),
    onContextMenu: (t) => {
      t.preventDefault(), e.open(t);
    }
  };
}
function vn(e) {
  return {
    ...ye(e),
    onClick: e.toggle,
    onTouchStart: e.toggle
  };
}
function yn(e) {
  const {
    open: t,
    onMouseLeave: r
  } = e;
  return {
    ...ye(e),
    onTouchStart: t,
    onMouseOver: t,
    onMouseLeave: r
  };
}
function xn(e) {
  const {
    open: t,
    onBlur: r
  } = e;
  return {
    ...ye(e),
    onFocus: t,
    onBlur: r
  };
}
function wn({
  isOpen: e,
  open: t,
  popupId: r,
  variant: n
}) {
  return {
    // $FlowFixMe
    [n === "popover" ? "aria-controls" : "aria-describedby"]: e ? r : null,
    "aria-haspopup": n === "popover" ? !0 : void 0,
    onDoubleClick: t
  };
}
function Cn({
  isOpen: e,
  anchorEl: t,
  anchorPosition: r,
  close: n,
  popupId: o,
  onMouseLeave: a,
  disableAutoFocus: l,
  _openEventType: s
}) {
  return {
    id: o,
    anchorEl: t,
    anchorPosition: r,
    anchorReference: s === "contextmenu" ? "anchorPosition" : "anchorEl",
    open: e,
    onClose: n,
    onMouseLeave: a,
    ...l && {
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      disableRestoreFocus: !0
    }
  };
}
function kn({
  isOpen: e,
  anchorEl: t,
  anchorPosition: r,
  close: n,
  popupId: o,
  onMouseLeave: a,
  disableAutoFocus: l,
  _openEventType: s
}) {
  return {
    id: o,
    anchorEl: t,
    anchorPosition: r,
    anchorReference: s === "contextmenu" ? "anchorPosition" : "anchorEl",
    open: e,
    onClose: n,
    onMouseLeave: a,
    ...l && {
      autoFocus: !1,
      disableAutoFocusItem: !0,
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      disableRestoreFocus: !0
    }
  };
}
function Tn({
  isOpen: e,
  anchorEl: t,
  popupId: r,
  onMouseLeave: n
}) {
  return {
    id: r,
    anchorEl: t,
    open: e,
    onMouseLeave: n
  };
}
function Pn({
  isOpen: e,
  close: t
}) {
  return {
    open: e,
    onClose: t
  };
}
function On({
  popupId: e
}) {
  return e && typeof document < "u" ? document.getElementById(e) : null;
}
function Ae(e, t) {
  const {
    anchorEl: r,
    _childPopupState: n
  } = t;
  return nt(r, e) || nt(On(t), e) || n != null && Ae(e, n);
}
function nt(e, t) {
  if (!e)
    return !1;
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function Mn(e, t) {
  for (let r in t)
    if (Object.prototype.hasOwnProperty.call(e, r) && e[r] !== t[r])
      return !0;
  return !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "anchorRef", {
    enumerable: !0,
    get: function() {
      return n.anchorRef;
    }
  }), Object.defineProperty(e, "bindContextMenu", {
    enumerable: !0,
    get: function() {
      return n.bindContextMenu;
    }
  }), Object.defineProperty(e, "bindDialog", {
    enumerable: !0,
    get: function() {
      return n.bindDialog;
    }
  }), Object.defineProperty(e, "bindDoubleClick", {
    enumerable: !0,
    get: function() {
      return n.bindDoubleClick;
    }
  }), Object.defineProperty(e, "bindFocus", {
    enumerable: !0,
    get: function() {
      return n.bindFocus;
    }
  }), Object.defineProperty(e, "bindHover", {
    enumerable: !0,
    get: function() {
      return n.bindHover;
    }
  }), Object.defineProperty(e, "bindMenu", {
    enumerable: !0,
    get: function() {
      return n.bindMenu;
    }
  }), Object.defineProperty(e, "bindPopover", {
    enumerable: !0,
    get: function() {
      return n.bindPopover;
    }
  }), Object.defineProperty(e, "bindPopper", {
    enumerable: !0,
    get: function() {
      return n.bindPopper;
    }
  }), Object.defineProperty(e, "bindToggle", {
    enumerable: !0,
    get: function() {
      return n.bindToggle;
    }
  }), Object.defineProperty(e, "bindTrigger", {
    enumerable: !0,
    get: function() {
      return n.bindTrigger;
    }
  }), e.default = void 0;
  var t = l(U), r = o(L.exports), n = V;
  function o(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u) {
    if (typeof WeakMap != "function")
      return null;
    var f = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (a = function(y) {
      return y ? h : f;
    })(u);
  }
  function l(u, f) {
    if (!f && u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var h = a(f);
    if (h && h.has(u))
      return h.get(u);
    var y = {}, b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var x in u)
      if (x !== "default" && Object.prototype.hasOwnProperty.call(u, x)) {
        var g = b ? Object.getOwnPropertyDescriptor(u, x) : null;
        g && (g.get || g.set) ? Object.defineProperty(y, x, g) : y[x] = u[x];
      }
    return y.default = u, h && h.set(u, y), y;
  }
  function s(u, f, h) {
    return f in u ? Object.defineProperty(u, f, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : u[f] = h, u;
  }
  class p extends t.Component {
    constructor(...f) {
      super(...f), s(this, "state", n.initCoreState), s(this, "_mounted", !0), s(this, "_setStateIfMounted", (h) => {
        this._mounted && this.setState(h);
      });
    }
    componentWillUnmount() {
      this._mounted = !1;
    }
    componentDidUpdate(f, h) {
      const {
        popupId: y,
        disableAutoFocus: b
      } = this.props;
      if (!b && typeof document == "object" && y && (y !== f.popupId || this.state.anchorEl !== h.anchorEl)) {
        const x = document.getElementById(y);
        x && x.focus();
      }
    }
    render() {
      const {
        children: f,
        popupId: h,
        variant: y,
        parentPopupState: b,
        disableAutoFocus: x
      } = this.props, g = (0, n.createPopupState)({
        state: this.state,
        setState: this._setStateIfMounted,
        popupId: h,
        variant: y,
        parentPopupState: b,
        disableAutoFocus: x
      }), v = f(g);
      return v ?? null;
    }
  }
  e.default = p, s(p, "propTypes", {
    /**
     * The render function.
     *
     * @param {object} props the properties injected by `PopupState`:
     * <ul>
     *   <li>`open(eventOrAnchorEl)`: opens the popup</li>
     *   <li>`close()`: closes the popup</li>
     *   <li>`toggle(eventOrAnchorEl)`: opens the popup if it is closed, or
     *     closes the popup if it is open.
     *   </li>
     *   <li>`setOpen(open, [eventOrAnchorEl])`: sets whether the popup is open.
     *     `eventOrAnchorEl` is required if `open` is truthy.
     *   </li>
     *   <li>`isOpen`: `true`/`false` if the popup is open/closed</li>
     *   <li>`anchorEl`: the current anchor element (`null` the popup is closed)</li>
     *   <li>`popupId`: the `popupId` prop you passed</li>
     * </ul>
     *
     * @returns {React.Node} the content to display
     */
    children: r.default.func.isRequired,
    /**
     * The `id` property to use for the popup.  Will be passed to the render
     * function as `bindPopup.id`, and also used for the `aria-controls` property
     * passed to the trigger component via `bindTrigger`.
     */
    popupId: r.default.string,
    /**
     * Which type of popup you are controlling.  Use `'popover'` for `Popover`
     * and `Menu`; use `'popper'` for `Popper`s.  Right now this only affects
     * whether `aria-controls` or `aria-describedby` is used on the trigger
     * component.
     */
    variant: r.default.oneOf(["popover", "popper"]).isRequired,
    /**
     * The popupState of the parent menu (for cascading menus)
     */
    parentPopupState: r.default.object,
    /**
     * Will focus the popup when it opens unless disableAutoFocus is explicitly false.
     */
    disableAutoFocus: r.default.bool
  });
})(ve);
var Ge = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "anchorRef", {
    enumerable: !0,
    get: function() {
      return r.anchorRef;
    }
  }), Object.defineProperty(e, "bindContextMenu", {
    enumerable: !0,
    get: function() {
      return r.bindContextMenu;
    }
  }), Object.defineProperty(e, "bindDialog", {
    enumerable: !0,
    get: function() {
      return r.bindDialog;
    }
  }), Object.defineProperty(e, "bindDoubleClick", {
    enumerable: !0,
    get: function() {
      return r.bindDoubleClick;
    }
  }), Object.defineProperty(e, "bindFocus", {
    enumerable: !0,
    get: function() {
      return r.bindFocus;
    }
  }), Object.defineProperty(e, "bindHover", {
    enumerable: !0,
    get: function() {
      return r.bindHover;
    }
  }), Object.defineProperty(e, "bindMenu", {
    enumerable: !0,
    get: function() {
      return r.bindMenu;
    }
  }), Object.defineProperty(e, "bindPopover", {
    enumerable: !0,
    get: function() {
      return r.bindPopover;
    }
  }), Object.defineProperty(e, "bindPopper", {
    enumerable: !0,
    get: function() {
      return r.bindPopper;
    }
  }), Object.defineProperty(e, "bindToggle", {
    enumerable: !0,
    get: function() {
      return r.bindToggle;
    }
  }), Object.defineProperty(e, "bindTrigger", {
    enumerable: !0,
    get: function() {
      return r.bindTrigger;
    }
  }), e.usePopupState = n;
  var t = U, r = V;
  if (!t.useState)
    throw new Error("React.useState (added in 16.8.0) must be defined to use the hooks API");
  function n({
    parentPopupState: o,
    popupId: a,
    variant: l,
    disableAutoFocus: s
  }) {
    const [p, u] = (0, t.useState)(r.initCoreState);
    return (0, t.useEffect)(() => {
      if (!s && a && typeof document == "object") {
        const f = document.getElementById(a);
        f && f.focus();
      }
    }, [a, p.anchorEl]), (0, t.useMemo)(() => (0, r.createPopupState)({
      state: p,
      setState: u,
      parentPopupState: o,
      popupId: a,
      variant: l,
      disableAutoFocus: s
    }), [p, u, o, a, l, s]);
  }
})(Ge);
const Vo = oe(
  ({
    anchorOrigin: e = {
      vertical: "bottom",
      horizontal: "right"
    },
    transformOrigin: t = {
      vertical: "top",
      horizontal: "right"
    },
    children: r,
    TriggerComponent: n,
    nopadding: o = !1,
    className: a,
    ...l
  }, s) => {
    const p = Ge.usePopupState({
      variant: "popover",
      popupId: void 0
    });
    let u = /* @__PURE__ */ i(se, {});
    return U.isValidElement(n) && (u = U.cloneElement(n, {
      ...ve.bindTrigger(p)
    })), /* @__PURE__ */ F(U.Fragment, { children: [
      u,
      /* @__PURE__ */ i(
        Ft,
        {
          ref: s,
          anchorOrigin: e,
          transformOrigin: t,
          classes: {
            root: d("translate-y-2", a),
            paper: d(["z-modal shadow-menu  min-w-min rounded-[4px]", o ? "p-0" : "p-1"]),
            list: d(["divide-shade-light-default grid grid-cols-1 divide-y py-0"]),
            ...l.classes
          },
          ...ve.bindMenu(p),
          ...l,
          children: r
        }
      )
    ] });
  }
), Sn = oe((e, t) => {
  const { children: r, className: n, ...o } = e;
  return /* @__PURE__ */ i(
    $t,
    {
      ref: t,
      classes: {
        root: d([
          "bg-shade-white-default text-r text-shade-dark-default hover:bg-shade-white-hover whitespace-nowrap border-solid py-2 pl-6 pr-12 font-sans",
          n
        ])
      },
      ...o,
      children: r
    }
  );
}), En = ({ open: e, children: t, onClick: r }) => /* @__PURE__ */ i(
  Lt,
  {
    open: e,
    onClick: r,
    classes: {
      root: "bg-[#001f3333]"
    },
    children: t
  }
), Bo = oe(({ open: e, onClose: t, children: r, className: n, ...o }, a) => /* @__PURE__ */ i(
  qt,
  {
    ref: a,
    open: e,
    onClose: t,
    slots: {
      backdrop: En
    },
    slotProps: {
      backdrop: { onClick: t }
    },
    className: n,
    ...o,
    children: /* @__PURE__ */ i("div", { className: "flex min-h-screen justify-center focus-visible:outline-none focus-visible:ring-0", children: /* @__PURE__ */ i("div", { className: "z-modal bg-shade-white-default shadow-modal m-auto flex flex-col break-all rounded-lg transition-all", children: r }) })
  }
)), Uo = ({ children: e }) => /* @__PURE__ */ i("div", { className: "p-4", children: e }), Yo = ({ children: e }) => /* @__PURE__ */ i("div", { className: "border-shade-light-default border-b p-4", children: /* @__PURE__ */ i(ne, { as: "p", className: "text-shade-dark-default font-bold", children: e }) }), Xo = ({ children: e }) => /* @__PURE__ */ i("div", { className: "border-shade-light-default flex flex-row-reverse border-t p-4", children: e }), ot = ({ checked: e, disabled: t }) => /* @__PURE__ */ i(
  "span",
  {
    className: d([
      "bg-shade-white-default h-5 w-5 rounded-full transition-[border-width] duration-100",
      e ? "border-7" : "group-hover:border-3 group-hover:border-secondary-dark-default border-2",
      t ? "border-shade-medium-disabled" : e ? "border-secondary-dark-default" : "border-shade-medium-default"
    ])
  }
), at = Pt(({ nopadding: e, disabled: t, ref: r, ...n }) => /* @__PURE__ */ i(
  Ht,
  {
    disableRipple: !0,
    icon: /* @__PURE__ */ i(ot, { checked: !1, disabled: !!t }),
    checkedIcon: /* @__PURE__ */ i(ot, { checked: !0, disabled: !!t }),
    disabled: t,
    classes: {
      root: d(["group hover:bg-transparent", e ? "p-0" : "p-1"])
    },
    inputRef: r,
    ...n
  }
)), Rn = oe(
  ({ label: e, value: t, disabled: r, className: n, ...o }, a) => /* @__PURE__ */ i(pe, { children: e ? /* @__PURE__ */ i(
    ze,
    {
      disabled: r,
      value: t,
      label: e,
      control: /* @__PURE__ */ i(at, { value: t, disabled: r, ref: a, ...o }),
      ref: a,
      classes: {
        root: d("group m-0 flex gap-2", n),
        label: d("text-s text-shade-dark-default font-sans"),
        disabled: d("text-shade-dark-disabled")
      }
    }
  ) : /* @__PURE__ */ i(at, { value: t, disabled: r, ref: a, ...o }) })
), Jo = ({
  className: e,
  name: t,
  label: r,
  defaultValue: n,
  row: o = !0,
  error: a,
  children: l,
  onChange: s,
  required: p = !1
}) => /* @__PURE__ */ F(Vt, { component: "fieldset", error: !!a, children: [
  r && /* @__PURE__ */ F("label", { className: "text-s text-shade-medium-default mb-2 font-sans", children: [
    r,
    p && /* @__PURE__ */ i("span", { className: "text-negative-medium-default", children: "*" })
  ] }),
  /* @__PURE__ */ i(
    Ut,
    {
      row: o,
      name: t,
      defaultValue: n,
      classes: {
        error: d(["text-negative-medium-default m-0 mt-1"])
      },
      className: d(["flex gap-x-6 gap-y-2", e]),
      onChange: s,
      children: l
    }
  ),
  a && /* @__PURE__ */ i(
    Bt,
    {
      classes: {
        root: d(["text-negative-medium-default"]),
        error: d(["text-negative-medium-default m-0 mt-1"])
      },
      children: a
    }
  )
] }), Zo = (e) => {
  const t = Ge.usePopupState({
    variant: "popover",
    popupId: void 0
  }), r = ve.bindTrigger(t);
  let n = /* @__PURE__ */ i(se, {});
  return H.isValidElement(e.TriggerComponent) && (n = H.cloneElement(e.TriggerComponent, {
    ...r
  })), /* @__PURE__ */ F(H.Fragment, { children: [
    n,
    /* @__PURE__ */ i(Yt, { ...ve.bindPopper(t), transition: !0, children: ({ TransitionProps: o }) => /* @__PURE__ */ i(Xt, { ...o, timeout: 350, children: /* @__PURE__ */ i(
      ct,
      {
        classes: {
          root: d(["z-modal shadow-menu  min-w-min rounded-[4px] p-1 translate-y-2"])
        },
        children: typeof e.children == "function" ? e.children({ onClick: t.close }) : e.children
      }
    ) }) })
  ] });
}, In = oe(
  ({ onChange: e, name: t, className: r, ...n }, o) => /* @__PURE__ */ i(
    Kt,
    {
      ...n,
      className: d(["text-right", r]),
      getInputRef: o,
      onValueChange: (a) => {
        e({
          target: {
            name: t,
            value: a.value
          }
        });
      },
      thousandSeparator: !0
    }
  )
), _n = oe(
  ({
    label: e,
    className: t,
    focused: r,
    placeholder: n,
    disabled: o,
    inputProps: a,
    required: l,
    inputRef: s,
    error: p,
    unitLabel: u = "",
    isPriceFormat: f = !1,
    prefix: h = "",
    InputProps: y,
    onFocus: b,
    onBlur: x,
    ...g
  }, v) => {
    const w = Ee(() => s || v, [v, s]), z = Ee(() => {
      const P = {
        endAdornment: /* @__PURE__ */ i(
          $e,
          {
            classes: {
              root: d(["text-r text-shade-dark-default mr-3 font-sans antialiased"])
            },
            position: "start",
            disableTypography: !0,
            children: u
          }
        )
      };
      return {
        ...u ? P : {},
        ...f ? { inputComponent: In } : {}
      };
    }, [u, f]), [Q, D] = Ce(r || !1), C = ue(
      (P) => {
        D(!0), b == null || b(P);
      },
      [D, b]
    ), k = ue(
      (P) => {
        D(!1), x == null || x(P);
      },
      [D, x]
    );
    return /* @__PURE__ */ i("div", { className: d("flex flex-col w-full", t), children: /* @__PURE__ */ F("label", { children: [
      e && /* @__PURE__ */ F(ne, { as: "label", className: d(["text-s text-shade-medium-default mb-1 font-bold antialiased"]), children: [
        e,
        l && /* @__PURE__ */ i(ne, { className: "text-negative-medium-default", children: "*" })
      ] }),
      /* @__PURE__ */ i(
        Qt,
        {
          disabled: o,
          error: p,
          inputRef: w,
          required: l,
          variant: "outlined",
          placeholder: n,
          sx: {
            "& .MuiInputBase-input:disabled::placeholder": {
              "-webkit-text-fill-color": "currentColor"
            }
          },
          className: d("w-full flex flex-col gap-1"),
          FormHelperTextProps: {
            classes: {
              root: d([p && "text-negative-medium-default m-0 text-s"])
            }
          },
          InputProps: {
            classes: {
              root: d(["group bg-shade-white-default text-shade-light-default px-0 antialiased"]),
              disabled: d(["bg-shade-white-disabled", "placeholder:text-shade-light-default"]),
              input: d([
                "text-r text-shade-dark-default placeholder:text-shade-light-default h-auto py-2.5 px-3 font-sans placeholder:opacity-100 focus:shadow-none"
              ]),
              focused: d(["border-primary-medium-active"]),
              notchedOutline: d([
                "border",
                o ? "border-shade-medium-disabled" : p ? "border-negative-medium-default" : Q ? "border-2 border-primary-medium-active group-hover:border-primary-dark-default" : "border-shade-medium-default group-hover:border-primary-dark-default"
              ]),
              inputAdornedEnd: d(["pr-2"])
            },
            startAdornment: h && /* @__PURE__ */ i(
              $e,
              {
                position: "start",
                classes: {
                  root: "border-r border-shade-light-default bg-shade-light-default max-h-[fit-content] h-full py-2.5 px-3 m-0"
                },
                children: /* @__PURE__ */ i(ne, { className: "text-shade-dark-default inline-flex", children: h })
              }
            ),
            ...y,
            ...z
          },
          inputProps: a,
          onFocus: C,
          onBlur: k,
          ...g
        }
      )
    ] }) });
  }
), Nn = (e) => /* @__PURE__ */ i(ct, { ...e, className: "rounded-md shadow-lg" }), jn = Zt(), Qo = oe(
  ({
    name: e,
    options: t = [],
    label: r,
    required: n = !1,
    className: o,
    placeholder: a,
    multiple: l,
    freeSolo: s,
    onChange: p,
    disabled: u = !1,
    disableFilter: f = !1,
    ...h
  }, y) => /* @__PURE__ */ i(
    Jt,
    {
      ref: y,
      disablePortal: !0,
      disableCloseOnSelect: l,
      disableClearable: !0,
      autoHighlight: !0,
      clearOnBlur: !0,
      disabled: u,
      includeInputInList: !0,
      handleHomeEndKeys: !0,
      multiple: l,
      freeSolo: s,
      options: t,
      onChange: p,
      PaperComponent: Nn,
      isOptionEqualToValue: (b, x) => b.inputValue === x.inputValue,
      noOptionsText: "データが見つかりません",
      popupIcon: /* @__PURE__ */ i(jt, { size: 24 }),
      filterOptions: (b, x) => {
        const g = jn(b, x), { inputValue: v } = x, w = b.some((z) => typeof z == "string" ? v === z : v === z.inputValue);
        return !s && !w || v !== "" && !w && g.push({
          inputValue: v,
          label: v
        }), g;
      },
      getOptionLabel: (b) => typeof b == "string" ? b : b.label ? b.label : b.inputValue,
      renderTags: (b, x) => b.map((g, v) => {
        const w = x({ index: v }), z = typeof g == "string" ? g : g.label;
        return /* @__PURE__ */ Re(gt, { ...w, key: w.key, label: z });
      }),
      renderOption: (b, x, { selected: g }) => {
        const v = typeof x == "string" ? x : x.label;
        return /* @__PURE__ */ Re(
          Sn,
          {
            ...b,
            key: x.inputValue,
            className: d([g && "text-primary-dark-default hover:bg-shade-white-hover text-base"])
          },
          v,
          g && /* @__PURE__ */ i(At, { size: 20, className: "text-primary-medium-default absolute right-4" })
        );
      },
      classes: {
        root: d(["bg-shade-white-default w-full", o]),
        paper: d(["min-w-min translate-y-4 rounded-2xl py-2"]),
        inputRoot: d([
          "group bg-shade-white-default text-shade-light-default p-0 antialiased",
          // 'group bg-shade-white-default text-shade-light-default antialiased !py-2',
          f && "cursor-pointer"
        ]),
        input: d([
          "text-r text-shade-dark-default placeholder:text-shade-light-default h-auto py-2.5 px-3 font-sans placeholder:opacity-100 focus:shadow-none",
          // 'text-r text-shade-dark-default placeholder:text-shade-light-default h-auto font-sans placeholder:opacity-100 focus:shadow-none !p-0',
          f && "cursor-pointer caret-transparent"
        ]),
        inputFocused: d(["border-primary-medium-active"]),
        focused: d(["[&_svg]:!icon-shade-medium-active"]),
        tag: d(["bg-shade-light-default [&.MuiChip-deleteIcon]:text-shade-dark-default border-none"]),
        endAdornment: d(["[&_svg]:icon-shade-medium-default"])
      },
      renderInput: (b) => /* @__PURE__ */ i(
        _n,
        {
          ...b,
          inputProps: f ? {
            ...b.inputProps,
            onChange: () => {
            }
          } : b.inputProps,
          autoComplete: "off",
          name: e,
          required: n,
          label: r,
          placeholder: a
        }
      ),
      ...h
    }
  )
), Ko = ({ loading: e = !1, count: t = 1, className: r, children: n, ...o }) => e ? /* @__PURE__ */ i(se, { children: [...Array(t)].map((a, l) => /* @__PURE__ */ Re(Ie, { className: r, ...o, key: l }, U.Children.count(n) > 0 && U.Children.toArray(n)[0])) }) : n, xt = (e, t) => e ? U.Children.map(e, (r) => U.isValidElement(r) ? U.isValidElement(t) ? U.Children.count(r.props.children) > 1 ? xt(r.props.children, t) : U.Children.count(r.props.children) === 0 ? /* @__PURE__ */ i(Ie, { children: U.cloneElement(t, t.props) }) : /* @__PURE__ */ i(Ie, { children: U.cloneElement(r, r.props) }) : t : r) : /* @__PURE__ */ i(se, {}), ea = ({
  loading: e = !1,
  empty: t = /* @__PURE__ */ i("div", { children: "xxxxxxxxxxxxxxx" }),
  children: r
}) => {
  if (e) {
    const n = xt(r, t);
    return /* @__PURE__ */ i(se, { children: n });
  }
  return r;
}, ta = oe(
  ({ activeStep: e, alternativeLabel: t, children: r, className: n, ...o }, a) => /* @__PURE__ */ i(
    tr,
    {
      ref: a,
      activeStep: e,
      alternativeLabel: t,
      connector: /* @__PURE__ */ i(
        er,
        {
          classes: {
            root: d("right-[calc(50%+1rem)] left-[calc(-50%+1rem)] top-6 px-0", n),
            line: d("border-t-2")
          },
          sx: {
            [`&.${be.active}`]: {
              [`& .${be.line}`]: {
                borderColor: "var(--shade-border-dark-default)"
              }
            },
            [`&.${be.completed}`]: {
              [`& .${be.line}`]: {
                borderColor: "var(--shade-border-dark-default)"
              }
            },
            [`&.${be.disabled}`]: {
              [`& .${be.line}`]: {
                borderColor: "var(--shade-border-dark-disabled)"
              }
            }
          }
        }
      ),
      ...o,
      children: r
    }
  )
), ra = oe((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ i(rr, { ref: t, ...n, children: /* @__PURE__ */ i(
    nr,
    {
      ref: t,
      StepIconComponent: An,
      classes: {
        root: d(["mt-0"]),
        label: d(["text-r text-shade-dark-default mt-2 font-normal"]),
        completed: d(["text-r text-shade-dark-default font-normal"]),
        active: d(["text-r text-shade-dark-default font-normal"]),
        iconContainer: d(["mt-2"])
      },
      children: r
    }
  ) });
}), An = (e) => {
  const { completed: t, active: r, icon: n } = e;
  return /* @__PURE__ */ i(se, { children: /* @__PURE__ */ i(
    "span",
    {
      className: d([
        "text-r relative h-8 w-8 rounded-full  border-2 font-bold",
        r ? "border-primary-dark-default bg-shade-white-default text-primary-dark-default border-2" : t ? "bg-primary-dark-default text-shade-white-default border-0" : "border-primary-dark-disabled bg-shade-white-disabled text-shade-dark-disabled"
      ]),
      children: /* @__PURE__ */ i("span", { className: d(["absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"]), children: n })
    }
  ) });
}, na = ({ value: e, checked: t, disabled: r, className: n, ...o }) => /* @__PURE__ */ i(
  ze,
  {
    control: /* @__PURE__ */ i(
      or,
      {
        value: e,
        checked: t,
        disabled: r,
        classes: {
          root: d("my-2 mr-2 h-6 w-11 p-0", n),
          track: d(
            "bg-primary-dark-default block h-full w-full rounded-xl opacity-100",
            t && "bg-secondary-dark-default opacity-100",
            r && "bg-primary-dark-disabled opacity-100",
            t && r && "bg-secondary-dark-disabled opacity-100"
          ),
          thumb: d(
            "bg-shade-white-default absolute top-1 left-1 h-4 w-4 rounded-2xl transition-all duration-200 ease-in"
          )
        }
      }
    ),
    ...o
  }
);
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ge.apply(this, arguments);
}
function zn(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Wn(e, t = 166) {
  let r;
  function n(...o) {
    const a = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(a, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Dn(e) {
  return e && e.ownerDocument || document;
}
function it(e) {
  return Dn(e).defaultView || window;
}
function Gn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Fn = typeof window < "u" ? H.useLayoutEffect : H.useEffect, $n = Fn;
function Ln(...e) {
  return H.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Gn(r, t);
    });
  }, e);
}
const qn = ["onChange", "maxRows", "minRows", "style", "value"];
function we(e, t) {
  return parseInt(e[t], 10) || 0;
}
const Hn = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function st(e) {
  return e == null || Object.keys(e).length === 0;
}
const wt = /* @__PURE__ */ H.forwardRef(function(t, r) {
  const {
    onChange: n,
    maxRows: o,
    minRows: a = 1,
    style: l,
    value: s
  } = t, p = zn(t, qn), {
    current: u
  } = H.useRef(s != null), f = H.useRef(null), h = Ln(r, f), y = H.useRef(null), b = H.useRef(0), [x, g] = H.useState({}), v = H.useCallback(() => {
    const C = f.current, P = it(C).getComputedStyle(C);
    if (P.width === "0px")
      return {};
    const $ = y.current;
    $.style.width = P.width, $.value = C.value || t.placeholder || "x", $.value.slice(-1) === `
` && ($.value += " ");
    const ae = P["box-sizing"], te = we(P, "padding-bottom") + we(P, "padding-top"), T = we(P, "border-bottom-width") + we(P, "border-top-width"), W = $.scrollHeight;
    $.value = "x";
    const X = $.scrollHeight;
    let G = W;
    a && (G = Math.max(Number(a) * X, G)), o && (G = Math.min(Number(o) * X, G)), G = Math.max(G, X);
    const ie = G + (ae === "border-box" ? te + T : 0), B = Math.abs(G - W) <= 1;
    return {
      outerHeightStyle: ie,
      overflow: B
    };
  }, [o, a, t.placeholder]), w = (C, k) => {
    const {
      outerHeightStyle: P,
      overflow: $
    } = k;
    return b.current < 20 && (P > 0 && Math.abs((C.outerHeightStyle || 0) - P) > 1 || C.overflow !== $) ? (b.current += 1, {
      overflow: $,
      outerHeightStyle: P
    }) : (process.env.NODE_ENV !== "production" && b.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), C);
  }, z = H.useCallback(() => {
    const C = v();
    st(C) || g((k) => w(k, C));
  }, [v]), Q = () => {
    const C = v();
    st(C) || ar(() => {
      g((k) => w(k, C));
    });
  };
  H.useEffect(() => {
    const C = Wn(() => {
      b.current = 0, f.current && Q();
    }), k = it(f.current);
    k.addEventListener("resize", C);
    let P;
    return typeof ResizeObserver < "u" && (P = new ResizeObserver(C), P.observe(f.current)), () => {
      C.clear(), k.removeEventListener("resize", C), P && P.disconnect();
    };
  }), $n(() => {
    z();
  }), H.useEffect(() => {
    b.current = 0;
  }, [s]);
  const D = (C) => {
    b.current = 0, u || z(), n && n(C);
  };
  return /* @__PURE__ */ F(H.Fragment, {
    children: [/* @__PURE__ */ i("textarea", ge({
      value: s,
      onChange: D,
      ref: h,
      rows: a,
      style: ge({
        height: x.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: x.overflow ? "hidden" : null
      }, l)
    }, p)), /* @__PURE__ */ i("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: y,
      tabIndex: -1,
      style: ge({}, Hn.shadow, l, {
        padding: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (wt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: L.exports.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: L.exports.oneOfType([L.exports.number, L.exports.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: L.exports.oneOfType([L.exports.number, L.exports.string]),
  /**
   * @ignore
   */
  onChange: L.exports.func,
  /**
   * @ignore
   */
  placeholder: L.exports.string,
  /**
   * @ignore
   */
  style: L.exports.object,
  /**
   * @ignore
   */
  value: L.exports.oneOfType([L.exports.arrayOf(L.exports.string), L.exports.number, L.exports.string])
});
const Vn = wt, oa = oe(
  ({ className: e, minRows: t, maxRows: r, rows: n, error: o, disabled: a, helperText: l, label: s, required: p, ...u }, f) => /* @__PURE__ */ F("div", { className: d("w-full flex flex-col gap-1", e), children: [
    /* @__PURE__ */ F(ne, { as: "label", size: "s", weight: "bold", className: "text-shade-medium-default flex flex-col gap-1", children: [
      /* @__PURE__ */ i(pe, { children: Fe(s) ? /* @__PURE__ */ i(pe, { children: s }) : /* @__PURE__ */ F(ne, { children: [
        s,
        s && p && /* @__PURE__ */ i(ne, { className: "text-negative-medium-default", weight: "regular", children: "*" })
      ] }) }),
      /* @__PURE__ */ i(
        Vn,
        {
          ...u,
          disabled: a,
          minRows: n || t,
          maxRows: n || r,
          className: d([
            "w-full bg-shade-white-default ring-shade-medium-default ring-inset ring-1 text-r text-shade-dark-default placeholder:text-shade-light-default rounded h-auto py-2.5 px-3 font-sans font-normal placeholder:opacity-100  focus-visible:outline-none focus-visible:ring-primary-medium-active focus-visible:ring-2",
            o && "ring-negative-medium-default focus-visible:ring-negative-medium-default",
            a && "bg-shade-white-disabled ring-shade-medium-disabled text-shade-dark-disabled placeholder:text-shade-light-disabled cursor-not-allowed"
          ]),
          ref: f
        }
      )
    ] }),
    /* @__PURE__ */ i(pe, { children: Fe(l) ? /* @__PURE__ */ i(pe, { children: l }) : /* @__PURE__ */ i(
      ne,
      {
        size: "s",
        weight: "regular",
        className: d(["text-shade-dark-default", o && "text-negative-medium-default"]),
        children: l
      }
    ) })
  ] })
), aa = ({ minWidth: e, tabIndex: t, className: r, ...n }) => /* @__PURE__ */ i(
  ir,
  {
    disableRipple: !0,
    className: d(
      "text-shade-medium-default font-bold text-r py-1.5 px-4 min-h-min border-transparent border-solid border-y-2 normal-case transition-all duration-100 [&:focus-visible]:bg-shade-white-active",
      r
    ),
    tabIndex: t ?? 0,
    sx: { minWidth: e },
    ...n
  }
), ia = ({ className: e, ...t }) => /* @__PURE__ */ i(sr, { className: d("px-0", e), ...t }), Ct = (e, t, r) => d([
  "border-solid h-10 min-h-min overflow-visible [&_.MuiTabs-indicator]:hidden [&_.MuiTabs-scroller]:h-10",
  t ? "border-transparent" : "border-shade-light-default",
  r ? "border-t" : "border-b",
  {
    primary: [
      "[&_[aria-selected=true]]:text-primary-dark-default",
      r ? "[&_[aria-selected=true]]:border-t-primary-dark-default" : "[&_[aria-selected=true]]:border-b-primary-dark-default"
    ],
    secondary: [
      "[&_[aria-selected=true]]:text-secondary-dark-default",
      r ? "[&_[aria-selected=true]]:border-t-secondary-dark-default" : "[&_[aria-selected=true]]:border-b-secondary-dark-default"
    ]
  }[e]
]), sa = ({ color: e = "primary", noBorder: t = !1, reverse: r = !1, className: n, ...o }) => /* @__PURE__ */ i(lr, { className: d(Ct(e, t, r), n), ...o }), la = ({
  color: e = "primary",
  noBorder: t = !1,
  reverse: r = !1,
  className: n,
  ...o
}) => /* @__PURE__ */ i(dr, { className: d(Ct(e, t, r), n), ...o }), Bn = ({ component: e = "td", className: t, children: r, ...n }) => /* @__PURE__ */ i(se, { children: e === "td" ? /* @__PURE__ */ i(
  "td",
  {
    className: d([
      "border-shade-light-default text-shade-dark-default border-b p-3 text-left font-normal",
      t
    ]),
    ...n,
    children: r
  }
) : /* @__PURE__ */ i(
  "th",
  {
    className: d([
      "border-shade-light-default text-shade-dark-default border-b p-3 text-left font-normal",
      t
    ]),
    ...n,
    children: r
  }
) }), Un = ({ table: e }) => {
  const { getPageCount: t, setPageIndex: r } = e;
  return /* @__PURE__ */ i("div", { className: "border-shade-light-default bg-shade-white-default flex items-center justify-between px-4 py-3 sm:px-6", children: /* @__PURE__ */ F("div", { className: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between", children: [
    /* @__PURE__ */ i("div", {}),
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      br,
      {
        size: "large",
        shape: "rounded",
        count: t(),
        showFirstButton: !0,
        showLastButton: !0,
        onChange: (n, o) => r(o - 1)
      }
    ) })
  ] }) });
}, da = ({
  data: e,
  disablePagination: t,
  defaultSortColumn: r,
  onSelectRow: n,
  onSelectRows: o,
  onRowClick: a,
  rowRenderer: l,
  getRowId: s,
  columns: p,
  pageSize: u = 20,
  className: f
}) => {
  const [h, y] = Ce(r ? [r] : []), [b, x] = Ce({}), g = lt({}), v = ue(
    (C) => {
      const k = typeof C == "function" ? C(b) : C;
      if (g.current === k)
        return;
      x(k), g.current = k;
      const P = Object.keys(k);
      n == null || n(P[0]), o == null || o(P);
    },
    [b, n, o]
  ), w = ue(
    (C) => {
      C.toggleSelected(o ? void 0 : !0);
    },
    [o]
  ), z = l || Yn, Q = Ee(() => n || o ? [{
    // FIXME: use useId instead
    id: "select",
    meta: {
      minWidth: "20px",
      width: "20px",
      maxWidth: "20px"
    },
    header: ({ table: k }) => /* @__PURE__ */ i(pe, { children: !!o && /* @__PURE__ */ i(
      Ye,
      {
        nopadding: !0,
        value: "required",
        checked: k.getIsAllRowsSelected(),
        indeterminate: !k.getIsAllRowsSelected() && k.getIsSomeRowsSelected(),
        onChange: k.getToggleAllRowsSelectedHandler()
      }
    ) }),
    cell: ({ row: k }) => /* @__PURE__ */ F(Bn, { children: [
      !!o && /* @__PURE__ */ i(
        Ye,
        {
          nopadding: !0,
          value: "required",
          checked: k.getIsSelected(),
          onClick: (P) => {
            w(k), P.stopPropagation();
          }
        }
      ),
      !!n && /* @__PURE__ */ i(
        Rn,
        {
          nopadding: !0,
          size: "small",
          value: "required",
          checked: k.getIsSelected(),
          onClick: (P) => {
            w(k), P.stopPropagation();
          }
        }
      )
    ] })
  }, ...p] : p, [n, o, w, p]), D = ur({
    data: e,
    columns: Q,
    state: {
      sorting: h,
      rowSelection: b
    },
    getRowId: s,
    onRowSelectionChange: v,
    onSortingChange: y,
    getCoreRowModel: cr(),
    getSortedRowModel: fr(),
    getFilteredRowModel: pr(),
    getPaginationRowModel: t ? void 0 : hr(),
    enableRowSelection: !!(n || o),
    enableMultiRowSelection: !!o
  });
  return Ot(() => {
    D.setPageSize(u);
  }, [D, u]), /* @__PURE__ */ F(se, { children: [
    /* @__PURE__ */ F(
      "table",
      {
        className: d(
          "border-shade-light-default w-full border-separate border-spacing-0 rounded-sm border",
          f
        ),
        children: [
          /* @__PURE__ */ i("thead", { className: "bg-shade-light-default table-header-group", children: D.getHeaderGroups().map((C) => /* @__PURE__ */ i("tr", { className: "table-row align-middle", children: C.headers.map((k) => {
            var P;
            return /* @__PURE__ */ i(
              "th",
              {
                className: "border-shade-light-default text-shade-dark-default z-30 whitespace-nowrap border-b p-3 text-left text-base",
                scope: "col",
                style: {
                  width: (P = k.column.columnDef.meta) == null ? void 0 : P.width,
                  cursor: k.column.getIsSorted() ? "pointer" : "auto"
                },
                children: k.column.getCanSort() ? /* @__PURE__ */ F(
                  "div",
                  {
                    className: d(["flex items-center", k.column.getCanSort() && "cursor-pointer select-none"]),
                    onClick: k.column.getToggleSortingHandler(),
                    children: [
                      _e(k.column.columnDef.header, k.getContext()),
                      {
                        asc: /* @__PURE__ */ i(zt, { className: "ml-1" }),
                        desc: /* @__PURE__ */ i(Wt, { className: "ml-1" })
                      }[k.column.getIsSorted()] ?? null
                    ]
                  }
                ) : /* @__PURE__ */ i("div", { className: "flex items-center", children: _e(k.column.columnDef.header, k.getContext()) })
              },
              k.id
            );
          }) }, C.id)) }),
          /* @__PURE__ */ i("tbody", { className: "bg-shade-white-default text-shade-dark-default", children: D.getRowModel().rows.map((C) => /* @__PURE__ */ i(
            z,
            {
              row: C,
              selectable: !!(n || o),
              onClick: (k) => {
                w(C), a == null || a(k, C);
              }
            },
            C.id
          )) })
        ]
      }
    ),
    !t && /* @__PURE__ */ i(Un, { table: D })
  ] });
}, Yn = ({ row: e, selectable: t, onClick: r, className: n }) => /* @__PURE__ */ i(
  "tr",
  {
    className: d([
      "border-shade-light-default border-b transition duration-300 ease-in-out",
      t && "hover:bg-shade-light-default cursor-pointer",
      n
    ]),
    onClick: (o) => r(o, e),
    children: e.getVisibleCells().map((o) => /* @__PURE__ */ i(pe, { children: _e(o.column.columnDef.cell, o.getContext()) }, o.id))
  },
  e.id
), ua = ({ height: e, children: t }) => /* @__PURE__ */ i(
  "div",
  {
    style: {
      height: typeof e == "string" ? e : typeof e == "number" ? `${e}px` : "auto"
    },
    className: d([
      "overflow-y-auto",
      "[&_table>thead_th]:z-table [&_table>thead_th]:sticky [&_table>thead_th]:top-0"
    ]),
    children: t
  }
), ca = ({ label: e, className: t, onDelete: r, ...n }) => /* @__PURE__ */ i(
  dt,
  {
    variant: "outlined",
    label: e,
    onDelete: r,
    classes: {
      root: `${t}`
    },
    ...n
  }
);
export {
  Wo as Badge,
  Jr as Button,
  Do as Card,
  Kr as CardAction,
  Fo as CardBody,
  Go as CardHeader,
  Qr as CardTitle,
  Ye as Checkbox,
  gt as Chip,
  $o as Divider,
  Lo as Drawer,
  xe as DrawerAnchor,
  qo as Dropzone,
  Ho as IconButton,
  Vo as Menu,
  Sn as MenuItem,
  Bo as Modal,
  Uo as ModalContent,
  Xo as ModalFooter,
  Yo as ModalHeader,
  Zo as Popper,
  Rn as Radio,
  Jo as RadioGroup,
  Yn as Row,
  Qo as Select,
  Ko as Skeleton,
  ea as SkeletonX,
  ra as Step,
  ta as Stepper,
  na as Switch,
  aa as Tab,
  ha as TabContext,
  la as TabList,
  ia as TabPanel,
  da as Table,
  Bn as TableCell,
  Un as TablePagination,
  ua as TableScroller,
  sa as Tabs,
  ca as Tag,
  ne as Text,
  oa as TextArea,
  _n as TextField,
  ma as createColumnHelper
};
