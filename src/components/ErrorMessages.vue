<template>
  <div class="ErrorMessages" v-if="showErrors">
      <span :key="index" v-for="(errorMsg, index) in errorMessages">
      - {{ errorMsg }}
      </span>
  </div>
</template>

<script>

export default {
  name: 'ErrorMessages',
  props: {
    errorMessages: Array,
  },
  computed: {
    showErrors() {
      return this.errorMessages.length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

@require '../styles/global/colors'

.ErrorMessages
  background-color: $white
  width: 100%
  font-size: 12px
  color: $error
  font-weight: bold
  line-height: 1.3
  margin-top: 15px

  span
    display: block
    margin-bottom: 10px

    &:last-child
      margin-bottom: 0px

</style>