<script setup lang="ts">
const props = defineProps<{
  method?: string; // HTTP method, default GET
  path?: string; // endpoint path
}>();

// Compute dynamic CSS class for the method
const methodClass = `method ${props.method?.toLowerCase() || "get"}`;
</script>

<template>
  <section class="api-request">
    <h4>Request</h4>

    <!--
    <div class="api-endpoint">
      <span :class="methodClass">{{ props.method || 'GET' }}</span>
      <span class="path">{{ props.path || '/rpc' }}</span>
    </div>
     -->

    <slot />
  </section>
</template>
