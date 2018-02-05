<template>
  <div class="container-fluid">
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    </nav>
    <div style="margin-top:15px;">
      <slot name="content"></slot>
    </div>

  </div>

</template>
<script>
  // import Simplert from 'vue2-simplert';

  export default {
    name: 'Layout',
    data() {
      return {
        showMenu: false,
      };
    },
    computed: {
      user() {
        // return this.$store.state.auth.user;
      },
    },
    components: {
      // Simplert,
    },
    methods: {
      // showAlert(message) {
      //   const conf = {
      //     title: 'Attention',
      //     message,
      //     type: 'warning',
      //     customCloseBtnClass: 'btn btn-default',
      //   };
      //   this.$refs.alert.openSimplert(conf);
      // },
    },
    mounted() {
      // this.$store.subscribe((mutation) => {
      //   if (mutation.type === 'SHOW_ALERT') {
      //     this.showAlert(mutation.payload);
      //   }
      // });
    },
  };
</script>
<style>
  .navbar .badge {font-size: 1rem}
</style>
