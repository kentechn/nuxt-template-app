<script setup lang="ts">
import { ExclamationTriangleIcon, CrossCircledIcon } from "@radix-icons/vue"
import { Alert as ShadcnAlert } from "@/components/shadcn/alert"

const { alertMsg, clearAlertMsg } = useAlertMsg()

const variant = computed(() =>
  alertMsg.value?.level === "error" ? "destructive" : "default",
)
</script>

<template>
  <ShadcnAlert
    v-if="alertMsg"
    :variant="variant"
  >
    <ExclamationTriangleIcon
      v-if="alertMsg.level === 'error'"
      class="w-4 h-4"
    />
    <div class="flex justify-between">
      <AlertTitle>
        {{ alertMsg.title }}
      </AlertTitle>
      <CrossCircledIcon
        class="w-4 h-4 cursor-pointer"
        @click="clearAlertMsg"
      />
    </div>

    <AlertDescription v-if="alertMsg.description">
      {{ alertMsg.description }}
    </AlertDescription>
  </ShadcnAlert>
</template>
