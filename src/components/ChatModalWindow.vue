<template>
  <transition name="ChatModalWindow-transform" v-on:after-enter="afterEnter">
    <div class="ChatModalWindow" v-if="isOpen">
      <MessageList ref="messageList" class="ChatModalWindow-messages" @itemAdded="itemAdded" />
      <form class="ChatModalWindow-form" @submit="onSubmit" disabled>
        <input ref="messageInput" class="ChatModalWindow-input" type="text" placeholder="Write a message" v-model="inputValue" />
        <button class="ChatModalWindow-submit" type="submit">
          <SendIcon class="ChatModalWindow-submitIcon" />
        </button>
      </form>
    </div>
  </transition>
</template>

<script>
import MessageList from './MessageList.vue'
import SendIcon from '../assets/icon-send.svg';

export default {
  name: 'ChatModal',
  components: {
    MessageList,
    SendIcon
  },
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      state: this.$store.state,
      inputValue: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      // Pass the value of the input field together with errormessages returned from the validation-function to the store
      this.$store.commit('addMessage', {
        text: this.inputValue,
        errors: this.checkValidation(this.inputValue),
        id: this.$store.getters.messageCount + 1
      });

      this.inputValue = '';
    },
    stringIsEmpty(string) {
      return !string.replace(/\s/g, '').length;
    },
    checkValidation(text) {
      let errorMsg = [];

      if (text.length > 100) {
        errorMsg.push('The number of characters exceeds the maximum limit of 100');
      }

      if (this.stringIsEmpty(text)) {
        errorMsg.push('The message must contain at least one character');
      }

      if (this.isEmoji(text)) {
        errorMsg.push('Emojis within the message is not allowed');
      }

      return errorMsg;
    },
    isEmoji(str) {
      // Regex to detect emojis within string
      var ranges = [
          '\ud83c[\udf00-\udfff]',
          '\ud83d[\udc00-\ude4f]',
          '\ud83d[\ude80-\udeff]'
      ];
      
      return str.match(ranges.join('|')) ? true : false;
    },
    itemAdded() {
      // When a new message is added, scroll to the bottom of the list
      this.$refs.messageList.$el.scrollTop = this.$refs.messageList.$el.scrollHeight;
    },
    afterEnter() {
      // Give focus to the message-input field once the modal opens
      this.$refs.messageInput.focus();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

@require '../styles/global/colors'

.ChatModalWindow
  background-color: $white
  box-shadow: 0px 7px 20px 2px rgba(148, 149, 150, 0.15)
  width: 360px
  position: absolute
  height: calc(100vh - 140px)
  max-height: 480px
  bottom: 80px
  right: 0
  border-radius: 5px
  display: flex
  flex-direction: column

  @media screen and (max-width: 640px)
    width: calc(100vw - 60px)

.ChatModalWindow-messages
  flex: 1
  overflow: scroll

.ChatModalWindow-form
  display: flex
  height: 60px
  border-top: solid 1px $border-color

.ChatModalWindow-input
  flex: 1
  font-size: 14px
  padding-left: 15px

.ChatModalWindow-submit
  background: transparent
  border: 0
  cursor: pointer
  height: 100%
  width: 60px
  padding: 0
  transition: transform 400ms cubic-bezier(0.215, 0.61, 0.355, 1)

  &:disabled
    opacity: 0.4

  &:hover
    transform: scale(1.15)

.ChatModalWindow-submitIcon
  width: 15px
  fill: $blue

.ChatModalWindow-transform-leave-to,
.ChatModalWindow-transform-enter
  opacity: 0
  transform: translateY(50px)

.ChatModalWindow-transform-enter-to
  opacity: 1
  transform: translateY(0px)

.ChatModalWindow-transform-enter-active,
.ChatModalWindow-transform-leave-active
  transition: transform 350ms cubic-bezier(0.215, 0.61, 0.355, 1), opacity 350ms linear

.ChatModalWindow-transform-leave-active
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19), linear

</style>
