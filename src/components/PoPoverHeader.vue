<template>
  <div class="mypopover" :class="{'translate-scale': isPopover}">
    <router-link
      class="mypopover__link"
      to="/configuration"
      activeClassName="active-nav"
    >
      <span class="mypopover__link--icon fas fa-cog" />

      <span class="mypopover__link--text">Configuration</span>
    </router-link>

    <div class="mypopover__link">
      <span class="mypopover__link--icon fas fa-sign-out-alt"/>

      <span class="mypopover__link--text">LogOut</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isPopover: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" >
@import '../assets/scss/_mixin.scss';

  .mypopover {
    position: absolute;
    z-index: 5;
    top: 100%;
    right: 0rem;
    // width: 20rem;

    background: #fff;
    border-radius: 1rem;
    box-shadow: 0px 2px 3px 1px #ccc;

    overflow: hidden;
    transition: all 0.3s ease-in-out;
    transform-origin: 70% top;

    opacity: 0;
    visibility: hidden;
    transform: scale(0);

    &__link {
      display: flex;
      align-items: center;
      padding: 0.5rem 1.5rem;
      cursor: pointer;

      transition: all 0.3s ease-in-out;
      flex-wrap: nowrap;
      position: relative;

      &:hover {
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.04);
        color: #000;
      }

      &:hover &--sub-text {
        opacity: 0.5;
        visibility: inherit;
        display: block;
        // animation: show-pupo 0.3s;
        animation: all 0.3s ease-in-out;
      }

      &:active::after {
        @include btn-mixin;
      }

      &--icon {
        font-size: 2rem;
        margin-right: 0.5rem;
        width: 2.5rem;
        color: #747475;
      }

      &--text {
        font-weight: 500;
        color: #adadad;
        line-height: 3rem;
      }
    }
  }

  .translate-scale.translate-scale {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
</style>
