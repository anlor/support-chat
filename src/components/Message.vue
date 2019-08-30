<template>
  <div class="Message">
    <div class="Message-wrapper">
      <div class="Message-text">
        {{ message.text }}
      </div>
      <ErrorMessages :errorMessages="message.errors" :showPopup="true" />
    </div>
    <button @click="remove(message)" class="Message-remove">
      <span></span>
    </button>
  </div>
</template>

<script>
import ErrorMessages from './ErrorMessages.vue';

export default {
  name: 'MessageList',
  components: {
    ErrorMessages
  },
  props: {
    message: Object
  },
  methods: {
    remove(message) {
      this.$store.commit('removeMessage', message);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

@require '../styles/global/colors'

.Message
  border-bottom: solid 1px $border-color
  display: flex
  align-items: center
  margin-bottom: 25px
  padding-bottom: 25px

  &:last-child
    margin-bottom: 0

.Message-wrapper
  flex: 1
  padding-right: 20px

.Message-text
  line-height: 1.4
  font-size: 14px
  overflow: hidden
  text-overflow: ellipsis

// .MessageList

.Message-remove
  background-color: red
  cursor: pointer
  width: 20px
  height: 20px
  border: 0
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  padding: 0

  span
    background-color: $white
    display: block
    height: 2px
    width: 10px

</style>
