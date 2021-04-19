<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="UserName">
      <a-input
        v-decorator="[
          'name',
          {
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
        ]"
      />
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Gender">
      <a-select
        v-bind="formItemLayout"
        v-decorator="[
          'gendersID',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
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
          { rules: [{ required: true, message: 'Please select your role!' }] },
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
      <a-button type="primary" html-type="submit">
        Register
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { POST_API } from '../../API'

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
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },

  computed: {
    getGenders () {
      return this.$store.state.users.genders
    },

    getRoles () {
      return this.$store.state.users.roles
    }
  },

  methods: {
    openMessage() {
      this.$message.loading({ content: 'Loading...', key });
      setTimeout(() => {
        this.$message.success({ content: 'Loaded!', key, duration: 2 });
      }, 1000);
    },

    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          // console.log('ada values', values)
          POST_API('users', values)
            .then(() => {
              this.openMessage()
              return this.$store.dispatch('fetchUsers')
            })
            .catch(rej => {
              console.log('rej.message', rej.message);
            })
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
    display: flex;
    width: 50%;
    padding: 2rem 3rem;
    border: 1px solid #e0e0e0;
    margin: 0 auto;
  }

  .ant-form {
    width: 80%;
  }
</style>
