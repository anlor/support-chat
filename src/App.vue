<template>
  <div id="app">
    <header class="Header">
      <Logo class="Header-logo" />
    </header>
    <div class="MessageList-wrapper">
      <MessageList delay="2000" />
    </div>
    <ChatModal />
  </div>
</template>

<script>
import ChatModal from './components/ChatModal.vue'
import MessageList from './components/MessageList.vue'

import Logo from './assets/recordunion-logo.svg'

export default {
  name: 'app',
  components: {
    ChatModal,
    MessageList,
    Logo
  }
}
</script>

<style lang="stylus">

@require 'styles/global/reset'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 15px

  *
    border-box: border-box

.Header
  padding: 30px 15px

.Header-logo
  width: 160px

.MessageList-wrapper
  width: 50%;

  @media screen and (max-width: 640px)
    width: 100%

</style>
