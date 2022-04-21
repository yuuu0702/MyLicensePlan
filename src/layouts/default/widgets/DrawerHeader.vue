<template>
  <v-list-item class="mb-0 justify-space-between pl-3">
    <v-list-item-avatar tile>
      <v-img
        :src="
          require('@/assets/hfhd_logo.png')"
      />
    </v-list-item-avatar>

    <v-list-item-content class="pl-2">
      <v-list-item-title class="text-h3">
        <span class="mr-1 font-weight-black">資格管理</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawerHeader',

    computed: { version: get('app/version') },
  }
</script>
