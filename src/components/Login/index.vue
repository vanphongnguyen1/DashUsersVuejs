<template>
  <div class=login>
    <div class="login__modal">
      <form action="" class="form">
        <div class="group">
          <label for="userName" class="group__label">User Name</label>
          <input type="text" class="group__input" id="userName">
        </div>

        <div class="group">
          <label for="password" class="group__label">Password</label>
          <input type="text" class="group__input" id="password">
        </div>

        <div class="flex">
          <div class="group">
            <input type="checkbox" class="group__checkbox" id="remember">
            <label for="remember" class="login__text">
              Remember
            </label>
          </div>

          <router-link to="/" class="login__text text-link group">Forgot Password?</router-link>
        </div>

        <button class="btn--login">Login</button>

        <p class="login__text"> Are you new?
          <router-link to="/" class="login__text text-link">
            Sign Up
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="scss" scope>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

label {
  margin: 0;
}

.login {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(#3BACFC, #D8EEFC);

  display: flex;
  justify-content: center;
  align-items: center;

  &__modal {
    width: 45rem;
    background: #fff;
    padding: 4rem 3rem;
  }

  .group {
    position: relative;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;

    &__label {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-weight: 500;
      color: #c3c3c3;
    }

    &__input {
      width: 100%;
      border: none;
      border-bottom: 2px solid #DEDEDE;
      padding: 0.5rem 0;
    }

    &__checkbox {
      margin-right: 0.5rem;
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  &__text {
    font-size: 1.5rem;
  }

  .text-link {
    color: #6BBFFB;
  }

  .btn--login {}

  p {
    text-align: center;
  }
}
</style>
