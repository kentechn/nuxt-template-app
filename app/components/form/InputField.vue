<script lang="ts" setup>
import type { FunctionalComponent } from "vue"

interface Props {
  type?: "text" | "email" | "password" | "number" | "tel"
  placeholder?: string
  label: string
  formName: string
  innerIcon?: FunctionalComponent
  iconClass?: string
}

withDefaults(defineProps<Props>(), {
  type: "text",
})

defineEmits(["onClickIcon"])

const isValid = defineModel("isFieldDirty", {
  type: Boolean,
  default: false,
})
</script>

<template>
  <FormField
    v-slot="{ componentField }"
    :name="formName"
    :validate-on-blur="!isValid"
  >
    <FormItem>
      <FormLabel class="text-black">
        {{ label }}
      </FormLabel>
      <FormControl>
        <div class="relative w-full items-center">
          <Input
            :type="type"
            :placeholder="placeholder"
            v-bind="componentField"
          />
          <span
            v-if="innerIcon"
            class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
          >
            <inner-icon
              class="cursor-pointer"
              :class="iconClass"
              @click="$emit('onClickIcon')"
            />
          </span>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<style>
</style>
