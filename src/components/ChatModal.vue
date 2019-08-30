<template>
  <div class="ChatModal">
    <ChatModalWindow :isOpen="isOpen" />
    <ChatModalTrigger @clicked="toggleOpenState" :isOpen="isOpen" />
  </div>
</template>

<script>
import ChatModalWindow from './ChatModalWindow.vue';
import ChatModalTrigger from './ChatModalTrigger.vue'

export default {
  name: 'ChatModal',
  components: {
    ChatModalWindow,
    ChatModalTrigger
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpenState() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="stylus" scoped>

@require '../styles/global/colors'

.ChatModal
  position: fixed
  bottom: 30px
  right: 30px

</style>
