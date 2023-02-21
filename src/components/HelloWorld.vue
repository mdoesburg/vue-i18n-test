<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <i18n-t keypath="sign_up_disclaimer" tag="p" scope="global">
      <template #terms>
        <a href="#">
          {{ $t("terms_and_conditions") }}
        </a>
      </template>
      <template #privacy>
        <a href="#">
          {{ $t("privacy_policy") }}
        </a>
      </template>
    </i18n-t>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
