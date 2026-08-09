<template>
  <details class="api-block">
    <summary>
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
        <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" />
      </svg>

     
        <!-- <span :class="methodClass">{{ method }}</span> -->
      <slot name="title" />
    </summary>

    <p><slot name="description" /></p>

    <div class="content">
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
const props = defineProps<{ method?: string;  }>()

const method = props.method || 'METHOD'

// dynamic class for styling GET, POST, etc.
const methodClass = `method ${method.toLowerCase()}`
</script>
