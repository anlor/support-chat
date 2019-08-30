<template>
  <button @click="onClick" type="button" class="ChatModalTrigger">
    <transition name="Icon-scale">
      <ChatBubbleIcon class="ChatModalTrigger-icon" v-if="!isOpen" />
    </transition>
    <transition name="Icon-scale">
      <CloseIcon class="ChatModalTrigger-icon ChatModalTrigger-icon--close" v-if="isOpen" />
    </transition>
  </button>
</template>

<script>
import ChatBubbleIcon from '../assets/icon-bubble.svg';
import CloseIcon from '../assets/icon-close.svg';

export default {
  name: 'ChatModalTrigger',
  props: {
    isOpen: Boolean
  },
  components: {
    ChatBubbleIcon,
    CloseIcon
  },
  methods: {
    onClick() {
      this.$emit('clicked');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

@require '../styles/global/colors'

.ChatModalTrigger
  cursor: pointer
  padding: 0
  border: 0
  height: 60px
  width: 60px
  background-color: $celeste
  border-radius: 50%
  position: relative
  transform: scale(1)
  transition: transform 250ms

  &:hover
    transform: scale(1.05)

.ChatModalTrigger-icon
  width: 24px
  height: 24px
  position: absolute
  margin-left: -12px
  margin-top: -12px

  &--close
    width: 14px
    height: 14px
    margin-left: -7px
    margin-top: -7px
  
  path
    fill: $blue

.Icon-scale-leave-to,
.Icon-scale-enter
  opacity: 0
  transform: scale(0.8)

.Icon-scale-enter-to
  opacity: 1
  transform: scale(1)

.Icon-scale-leave-active
  transition: transform 300ms, opacity 150ms

.Icon-scale-enter-active
  transition: transform 300ms linear 200ms, opacity 150ms linear 200ms

</style>
