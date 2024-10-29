<script lang="ts" setup>
import { EyeOpenIcon, EyeClosedIcon } from "@radix-icons/vue"
import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import { Button } from "@/components/shadcn/button"
import { loginFormSchema } from "@/schemas"

const { login } = useMyAuth()

const formSchema = toTypedSchema(loginFormSchema)

const {
  isFieldDirty,
  handleSubmit,
} = useForm({
  validationSchema: formSchema,
})

const isValidUsername = computed(() => isFieldDirty("username"))
const isValidPassword = computed(() => isFieldDirty("password"))

const isShowPassword = ref(false)
const passwordType = computed(() =>
  isShowPassword.value ? "text" : "password",
)

const toggleShowPassword = () => {
  isShowPassword.value = !isShowPassword.value
}

const onSubmitLogin = handleSubmit(async ({ username, password }) => {
  await login(username, password)
})
</script>

<template>
  <form @submit="onSubmitLogin">
    <div class="grid gap-2">
      <FormInputField
        v-model:is-valid="isValidUsername"
        label="Username"
        form-name="username"
        placeholder="Username"
      />
      <FormInputField
        v-model:is-valid="isValidPassword"
        label="Password"
        :type="passwordType"
        form-name="password"
        placeholder="Password"
        :inner-icon="isShowPassword ? EyeOpenIcon : EyeClosedIcon"
        icon-class="size-6 text-muted-foreground"
        @on-click-icon="toggleShowPassword"
      />
      <div class="flex py-6 justify-end">
        <Button
          type="submit"
        >
          Login
        </Button>
      </div>
    </div>
  </form>
</template>

<style></style>
