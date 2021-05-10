<template>
  <div>
    <transition name="slide-hidden">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
  .slide-hidden-leave-active {
    transition: all 0.5s ease-in-out;
    opacity: 0;
    animation: slide-out 0.5s forwards
  }

  .slide-hidden-leave {
    opacity: 1;
    transform: translateX(0);
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(10%);
    }
  }

</style>
