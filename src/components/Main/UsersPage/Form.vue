<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="UserName">
      <a-input
        v-decorator="[
          'name',
          {
            initialValue: this.getDataEdit.hasOwnProperty('name')
              ? this.getDataEdit.name
              : ''
            ,
            rules: [
              {
                required: true,
                message: 'Please input your UserName!',
              }
            ],
          },
        ]"
      />
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="E-mail">
      <a-input
        v-decorator="[
          'email',
          {
            initialValue: this.getDataEdit.hasOwnProperty('email')
              ? this.getDataEdit.email
              : ''
            ,
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
      />
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Phone Number">
      <a-input
        v-decorator="[
          'phone',
          {
            initialValue: this.getDataEdit.hasOwnProperty('phone')
              ? this.getDataEdit.phone
              : ''
            ,
            rules: [{ required: true, message: 'Please input your phone number!' }],
          },
        ]"
        style="width: 100%"
      >
      </a-input>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Address">
      <a-input
        v-decorator="[
          'address',
          {
            initialValue: this.getDataEdit.hasOwnProperty('address')
              ? this.getDataEdit.address
              : ''
            ,
            rules: [{ required: true, message: 'Please input your address!' }],
          },
        ]"
        style="width: 100%"
      >
      </a-input>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Age">
      <a-input
        v-decorator="[
          'age',
          {
            initialValue: this.getDataEdit.hasOwnProperty('age')
              ? this.getDataEdit.age
              : ''
            ,
          }
        ]"
      />
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Gender">
      <a-select
        v-bind="formItemLayout"
        v-decorator="[
          'gendersID',
          {
            initialValue: this.getDataEdit.hasOwnProperty('gendersID')
              ? this.getDataEdit.gendersID
              : 1
            ,
            rules: [{ required: true, message: 'Please select your gender!' }]
          },
        ]"
        placeholder="Select Gender"
      >

        <a-select-option  v-for="gender in getGenders" :key="gender.id">
          {{ gender.name }}
        </a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Roles">
      <a-select
        v-bind="formItemLayout"
        v-decorator="[
          'rolesID',
          {
            initialValue: this.getDataEdit.hasOwnProperty('rolesID')
              ? this.getDataEdit.rolesID
              : 1
            ,
            rules: [{ required: true, message: 'Please select your role!' }]
          },
        ]"
        placeholder="Select Role"
      >

      <a-select-option  v-for="role in getRoles" :key="role.id">
          {{ role.name }}
        </a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            initialValue: this.getDataEdit.hasOwnProperty('password')
              ? this.getDataEdit.password
              : ''
            ,
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            initialValue: this.getDataEdit.hasOwnProperty('password')
              ? this.getDataEdit.password
              : ''
            ,
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>

    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit" block>
        Register
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapActions } from 'vuex'
import { POST_API, PUT_API } from '../../../store/usersService'

const key = 'updatable'

export default {
  data() {
    return {
      confirmDirty: false,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
      form: this.$form.createForm(this, { name: 'advanced_search' }),
    };
  },

  created () {
    this.$store.dispatch('fetchRoles')
    this.$store.dispatch('fetchGenders')
  },

  props: {
    url: {
      type: String,
      default: ''
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },

  computed: {
    getGenders () {
      return this.$store.state.gender.list
    },

    getRoles () {
      return this.$store.state.roles.list
    },

    getDataEdit () {
      return this.$store.state.users.dataEdit.user
    }
  },

  methods: {
    ...mapActions([
      'fetchUsers'
    ]),

    openMessage (text) {
      this.$message.loading({ content: 'Loading...', key })

      setTimeout(() => {
        this.$message.success({ content: text, key, duration: 2 })
      }, 1000);
    },

     error (text) {
      this.$message.error(text)
    },

    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if (this.url === 'created') {
            POST_API('users', values)
              .then(async() => {
                this.fetchUsers();
                this.openMessage('Created Success !')
                this.form.resetFields()
              })
              .catch(rej => {
                this.error(rej.message)
              })
          } else {

            PUT_API(`users/${this.getDataEdit.id}`, values)
              .then(() => {
                this.fetchUsers();
                this.openMessage('Created Success !')
              })
              .then(() => {
                this.$store.commit('setDefaultEditUser')
              })
              .catch(rej => {
                this.error(rej.message)
              })
          }
        }
      })
    },

    handleConfirmBlur(e) {
      const { value } = e.target
      this.confirmDirty = this.confirmDirty || !!value
    },

    compareToFirstPassword(rule, value, callback) {
      const form = this.form

      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!')

      } else {
        callback()
      }
    },

    validateToNextPassword(rule, value, callback) {
      const form = this.form;

      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }

      callback()
    }
  }
}
</script>

<style lang="scss">
  .user-form {
    padding: 2rem 3rem;
  }

  .ant-form {
    width: 80%;
  }
</style>
