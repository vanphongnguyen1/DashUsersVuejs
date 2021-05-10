import Vue from 'vue';
export const eventBus = new Vue();

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return eventBus
    }
  }
})
