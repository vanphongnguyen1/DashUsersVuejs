<template>
  <div>
    <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
      <a-tabs default-active-key="1">

        <a-tab-pane key="1" tab="Information">
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

        <a-tab-pane key="2" tab="Images">
          <a-form-item :wrapper-col="{ span: 16 }">

            <div class="clearfix">
              <a-upload
                :file-list="fileList"
                :remove="handleRemove"
                :before-upload="beforeUpload"
                :multiple="true"
              >
                <a-button>
                  <a-icon type="upload" />

                  Select File
                </a-button>
              </a-upload>
            </div>
          </a-form-item>
        </a-tab-pane>

        <a-tab-pane key="3" tab="Description">
          <a-form-item :wrapper-col="{ span: 16 }">
            <vue-editor v-model="contentEditor" />
          </a-form-item>
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
import { getBase64 } from '../../../../assets/logic/base64'
import { VueEditor } from "vue2-editor"
import { POST_API } from '../../../../store/usersService'
import removeVietnameseTones from '../../../../assets/logic/remoVietNameseTones'

const key = 'updatable'

export default {
  data() {
    return {
      dataForm: {
        isStatus: false,
        isHot: true,
        isNew: false,
        lineageId: '',
      },

      fileList: [],
      contentEditor: '',

      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },

  components: {
    VueEditor
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
      const { fileList, contentEditor } = this

      this.form.validateFields(async (err, values) => {
        if (err || !fileList.length || !contentEditor) {
          this.error('Hãy điền đầy đủ thông tin form !')
        }

        if (!err && fileList.length && contentEditor) {

          // const dataFiles = new FormData() //data files gửi server
          const fileBase64 = []

          for (let i = 0; i < fileList.length; i++) {
            fileBase64.push(await getBase64(fileList[i]))
          }

          const newData = {
            ...this.dataForm,
            ...values,
            url: removeVietnameseTones(values.name)
          }

          POST_API('images', { files: fileBase64 })
            .then(response => {
              const imageId = response.data.id

              POST_API('typeProducts' , { description: contentEditor })
                .then(response => {
                  const typeProductId = response.data.id

                  POST_API('products', {
                    ...newData,
                    imageId,
                    typeProductId
                  })
                    .then(() => {
                      this.openMessage('Created Success !')
                      this.form.resetFields()
                      this.contentEditor = ''
                      this.fileList = []
                    })
                    .catch(() => {
                      this.error('product')
                    })
                })
                .catch(() => {
                  this.error('type')
                })
            })
            .catch((rej) => {
              console.log('asdasd', rej);
              this.error('image')
            })
        }
      })
    },

    handleChangeSelectGroup (value) {
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

// Methos Upload products
    handleRemove (file) {
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()

      newFileList.splice(index, 1)
      this.fileList = newFileList
    },

    beforeUpload (file) {
      this.fileList = [...this.fileList, file]
      return false
    },

// valided form
    error (text) {
      this.$message.error(text)
    },

    openMessage (text) {
      this.$message.loading({ content: 'Loading...', key })

      setTimeout(() => {
        this.$message.success({ content: text, key, duration: 2 })
      }, 1000);
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

// css upload
.clearfix {
  min-height: 20rem;
  background: #f0f0f0;
  padding: 1rem;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.ant-btn.ant-btn {
  display: flex;
  align-items: center;
}

.ant-btn > .anticon.anticon {
  line-height: 0;
}
</style>
