<template >
  <div class="rootPaper">
    <div class="rootPaper__box">
      <div class="rootPaper__box--bg-icon" />

      <!-- <span class={`rootPaper__box--icon ${icon}`} /> -->
      <span class="rootPaper__box--icon" :class="icon"/>
    </div>

    <div class="rootPaper__box">
      <h4 class="rootPaper__box--title">
        {{ title }}
      </h4>

      <p class="rootPaper__box--sub-total">
        {{ data || 0 }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    data: {
      type: [
        String,
        Number
      ],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .rootPaper {
    background: #fff;
    border-radius: 1rem;
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 1.5rem;

    border: 1px solid #e0e0e3;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 2px 2px 4px 1px #ccc;
    }

    &__box {
      &--bg-icon {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        -webkit-clip-path: ellipse(76% 60% at 0% 42%);
        clip-path: ellipse(76% 60% at 0% 42%);
        background-color: #fceaec;
        width: 50%;
        height: 100%;
      }

      &--icon {
        color: #dc2440;
        font-size: 3rem;
        position: relative;
        padding-left: 2rem;
      }

      &--title {
        font-weight: 400;
        color: #757575;
      }

      &--sub-total {
        font-size: 2.6rem;
        font-weight: 400;
        text-align: end;
      }
    }
  }
</style>
