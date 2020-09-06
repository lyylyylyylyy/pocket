<template>
    <div><cube-upload
        ref="upload"
        :action="action"
        :simultaneous-uploads="1"
        :process-file="processFile"
        @file-submitted="fileSubmitted" />
    </div>
</template>
<script>
import compress from '../utils/image'
export default {
  data () {
    return {
      action: {
        target: 'http://localhost:3000/avatar',
        prop: 'base64Value'
      }
    }
  },
  methods: {
    processFile (file, next) {
      compress(file, {
        compress: {
          width: 1600,
          height: 1600,
          quality: 0.5
        }
      }, next)
    },
    fileSubmitted (file) {
      file.base64Value = file.file.base64
      console.log(file.base64Value)
    }
  }
}
</script>
