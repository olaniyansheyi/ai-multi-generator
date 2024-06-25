<template>
  <Auth
    :supabaseClient="supabaseClient"
    :appearance="{
      theme: ThemeSupa,
    }"
  />
</template>

<script setup>
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@nuxtbase/auth-ui-vue";
import { definePageMeta } from "nuxt/dist/pages/runtime";
import { useSupabaseClient } from "@nuxtjs/supabase";
import Home from "../layouts/Home.vue";

const supabaseClient = useSupabaseClient();

definePageMeta({
  layout: Home,
});
</script>
