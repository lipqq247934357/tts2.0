import bindEvent from "@/views/vue/interviewer/bindEvent.vue";
import compApi from "@/views/vue/compApi/index.vue";

export default [
  {
    path: "/bindEvent",
    name: "bindEvent",
    component: bindEvent,
  },
  {
    path: "/CompApi",
    name: "compApi",
    component: compApi,
  },
];
