<style scoped lang="scss">
.spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}

.ant-spin {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ant-spin-dot {
  font-size: 30px;
  width: 2em;
  height: 2em;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  background: rgba(#000000, 0.05);
}
</style>

<template>
  <div class="overlay">
    <a-spin tip="Loading..." size="large">
    </a-spin>
  </div>
</template>
