<template>
  <div id="app">
    <header class="Header">
      <Logo class="Header-logo" />
    </header>
    <div class="MessageList-wrapper">
      <h1 class="MessageList-headline">Messages</h1>
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
@require 'styles/global/colors'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  *
    border-box: border-box

.Header
  padding: 30px
  border-bottom: solid 1px $border-color

.Header-logo
  width: 160px

.MessageList-wrapper
  width: 50%
  margin-top: 30px
  padding: 0 15px

  @media screen and (max-width: 640px)
    width: 100%

.MessageList-headline
  font-size: 24px
  font-weight: bold
  padding: 0 15px
  margin-bottom: 15px
  color: $blue

</style>
