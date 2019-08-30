<template>
  <div class="MessageList">
    <div class="MessageList-inner">
      <transition-group name="MessageList-fade" v-on:after-enter="itemAdded">
        <Message :class="getFadeDelayClass" :key="index" v-for="(message, index) in messages" :message="message" />
      </transition-group>
      <transition name="MessageList-empty-fade">
        <p class="MessageList-empty" v-if="!hasMessages">No messages has been posted</p>
      </transition>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'MessageList',
  components: {
    Message
  },
  props: {
    delay: {
      type: String,
      default: '1000'
    },
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
    hasMessages() {
      return this.$store.getters.messageCount !== 0;
    },
    getFadeDelayClass() {
      return `Message-fade-delay-${this.delay}`;
    }
  },
  methods: {
    itemAdded() {
      this.$emit('itemAdded');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

@require '../styles/global/colors'

.MessageList
  padding: 25px 15px

.MessageList-inner
  position: relative

.MessageList-empty
  font-style: italic
  font-size: 14px
  color: #bcbcbc
  position: absolute
  top: 0

/* Transition Classes */
  
.MessageList-empty-fade-leave-to,
.MessageList-empty-fade-enter
  opacity: 0

.MessageList-empty-fade-enter-to,
.MessageList-empty-fade-leave
  opacity: 1

.MessageList-empty-fade-enter-active,
.MessageList-empty-fade-leave-active
  transition: opacity 300ms

.MessageList-empty-fade-enter-active
  transition: opacity 300ms linear 300ms

.MessageList-fade-leave-to,
.MessageList-fade-enter
  opacity: 0
  visibility: hidden

.MessageList-fade-enter-to
  opacity: 1
  visibility: visible

.MessageList-fade-leave-active
  transition: visibility 300ms, opacity 300ms

.MessageList-fade-enter-active.Message-fade-delay-1000
  transition: visibility 0ms linear 1000ms, opacity 300ms linear 1000ms

.MessageList-fade-enter-active.Message-fade-delay-2000
  transition: visibility 0ms linear 2000ms, opacity 300ms linear 2000ms

</style>
