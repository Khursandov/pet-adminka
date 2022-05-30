<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3"
      y="3"
      width="1.25"
      height="20"
      rx="0.625"
      transform="rotate(-45 3 3)"
      fill="#B6B2F8"
    />
    <rect
      x="4"
      y="17"
      width="1.25"
      height="20"
      rx="0.625"
      transform="rotate(-135 4 17)"
      fill="#B6B2F8"
    />
  </svg>
</template>
<script>
export default {
  name: 'EksSvg',

  props: {
    color: {
      type: String,
      default: '#969696'
    }
  }
}
</script>
