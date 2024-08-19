import './index.css';
import { h as n, Transition as i } from "vue";
const a = (t) => {
  t.style.maxHeight = "", t.style.overflow = t.dataset.overflow, t.style.paddingTop = t.dataset.paddingTop, t.style.paddingBottom = t.dataset.paddingBottom;
}, p = {
  onBeforeEnter(t) {
    t.dataset || (t.dataset = {}), t.dataset.paddingTop = t.style.paddingTop, t.dataset.paddingBottom = t.style.paddingBottom, t.dataset.overflow = t.style.overflow, t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.overflow = "hidden";
  },
  onEnter(t) {
    t.style.maxHeight = `${t.scrollHeight || 0}px`, t.style.paddingTop = t.dataset.paddingTop, t.style.paddingBottom = t.dataset.paddingBottom;
  },
  onAfterEnter(t) {
    t.style.maxHeight = "", t.style.overflow = t.dataset.overflow;
  },
  onEnterCancelled(t) {
    a(t);
  },
  onBeforeLeave(t) {
    t.dataset || (t.dataset = {}), t.dataset.paddingTop = t.style.paddingTop, t.dataset.paddingBottom = t.style.paddingBottom, t.dataset.overflow = t.style.overflow, t.style.maxHeight = `${t.scrollHeight || 0}px`, t.style.overflow = "hidden";
  },
  onLeave(t) {
    t.scrollHeight !== 0 && (t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0);
  },
  onAfterLeave(t) {
    a(t);
  },
  onLeaveCancelled(t) {
    a(t);
  }
}, r = (t, { slots: o }) => n(
  i,
  {
    name: "collapse-transition",
    ...p
  },
  () => o.default()
), g = (t, o) => {
  const d = t.__vccOpts || t;
  for (const [e, s] of o)
    d[e] = s;
  return d;
}, f = /* @__PURE__ */ g(r, [["__scopeId", "data-v-0acc8d3e"]]);
export {
  f as default
};
