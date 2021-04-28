<template>
  <div>
    <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
      <a-tabs default-active-key="1">

        <a-tab-pane key="1" tab="Tab Title 1">
            <a-form-item label="Name">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [{
                    required: true,
                    message: 'Please input your name!'
                    }]
                  }
                ]"
              />
            </a-form-item>

            <a-form-item label="Price">
              <a-input-number

                v-decorator="[
                  'price',
                  {
                    rules: [{
                    required: true,
                    message: 'Please input your price!'
                    }]
                  }
                ]"

              />
            </a-form-item>

            <a-form-item label="Price Sale">
              <a-input-number
                id="inputNumber"
                v-decorator="[
                  'priceSale',
                  {
                    rules: [{
                    required: true,
                    message: 'Please input your price sale!'
                    }]
                  }
                ]"

              />
            </a-form-item>

            <a-form-item label="Gender">
              <a-select
                v-decorator="[
                  'genderId',
                  {
                    rules: [
                      { required: true, message: 'Please select your gender!' }
                    ]
                  },
                ]"
                placeholder="Select a option and change input text above"

              >
                <a-select-option
                  v-for="item in dataGender"
                  :value="item.id"
                  :key="item.id"
                >
                  {{ item.name }}
                </a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="Group">
              <a-select
                v-decorator="[
                  'groupId',
                  {
                    rules: [
                      { required: true, message: 'Please select your group!' }
                    ]
                  },
                ]"
                placeholder="Select a option and change input text above"
                @change="handleChangeSelectGroup"
              >
                <a-select-option
                  v-for="item in dataGroup"
                  :value="item.id"
                  :key="item.id"
                >
                  {{ item.name }}
                </a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="Lineage">

                   <!-- v-model="dataForm.lineageId" -->
              <a-select
                v-decorator="[
                  'lineageId',
                  {
                    initialValue: dataForm.lineageId,
                    rules: [
                      { required: true, message: 'Please select your lineage!' }
                    ]
                  },
                ]"
                placeholder="Select a option and change input text above"
                :disabled="dataLineageLoading !== 'success'"

              >
                <a-select-option
                  v-for="item in dataLineage"
                  :value="item.id"
                  :key="item.id"
                >
                  {{ item.name }}
                </a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 10, offset: 2 }">
              <div class="status">
              <div class="status__box">
                <label class="status__box--text" for="isStatus">
                  Show:
                </label>

                <a-switch
                  id="isStatus"
                  name="isStatus"
                  :default-checked="dataForm.isStatus"
                  @change="onChangeSwitch"
                />
              </div>

              <div class="status__box">
                <label class="status__box--text" for="isNew">
                  New:
                </label>

                <a-switch
                  id="isNew"
                  name="isNew"
                  :default-checked="dataForm.isNew"
                  @change="onChangeSwitch"
                />
              </div>

              <div class="status__box">
                <label class="status__box--text" for="isHot">
                  Hot:
                </label>

                <a-switch
                  id="isHot"
                  name="isHot"
                  :default-checked="dataForm.isHot"
                  @change="onChangeSwitch"
                />
              </div>
              </div>
            </a-form-item>
        </a-tab-pane>

        <a-tab-pane key="2" tab="Tab Title 2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </a-tab-pane>

        <a-tab-pane key="3" tab="Tab Title 3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </a-tab-pane>
      </a-tabs>

      <a-form-item :wrapper-col="{ span: 3, offset: 2 }">
        <a-button type="primary" html-type="submit" block>
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataForm: {
        isStatus: false,
        isHot: true,
        isNew: false,
        lineageId: '',
      },

      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },

  computed: {
    dataGender () {
      return this.$store.state.gender.list
    },

    dataGroup () {
      return this.$store.state.group.list
    },

    dataLineage () {
      return this.$store.state.lineage.list
    },
    dataLineageLoading () {
      return this.$store.state.lineage.loading
    },
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          const newData = {
            ...this.dataForm,
            ...values
          }

          console.log('asdasd', this.dataForm);
          console.log('Received values of form: ', newData);
        }
      });
    },

    handleChangeSelectGroup(value) {
      this.$store.commit('setDefaultLineage')

      setTimeout(() => {
        this.dataForm.lineageId = ''

        this.$store.dispatch('fetchLineageGroup', value)
      }, 300)
    },

    onChangeSwitch (checked, e) {
      const { name } = e.target

      this.dataForm = {
        ...this.dataForm,
        [name]: checked
      }
    },
  },

  created () {
    this.$store.dispatch('fetchGenders')
    this.$store.dispatch('fetchGroup')
  }
};
</script>

<style lang="scss" scope>
.ant-form-item-children {
  display: block;
}
.ant-input-number.ant-input-number {
  width: 100%;
}

.status {
  display: flex;
  flex-wrap: wrap;

  &__box {
    &--text {
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      margin-right: 0.5rem;
      margin-left: 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
