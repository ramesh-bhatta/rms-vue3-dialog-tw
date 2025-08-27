<template>
  <!-- Notification overlay with click listener for closing the dialog -->
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" @click="handleOverlayClick">
    <div :class="'bg-white rounded-lg shadow-lg w-full max-w-md relative text-center ' + dialogBoxClasses"
      :style="{ minWidth: dialogBoxMinWidth }" @click.stop>
      <button v-if="showCloseIcon"
        :class="'absolute top-1 right-2 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none ' + closeIconClasses"
        @click="close">&times;</button>
      <div class="px-4 py-6">
        <h2 :class="'text-lg font-semibold mb-2 ' + titleClass">{{ title }}</h2>
        <p :class="'mb-4 ' + messageClass">{{ message }}</p>
      </div>
    </div>
  </div>


</template>

<script setup>
// ...existing code...

// Define properties passed into the notification component
const props = defineProps({
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  titleClass: { type: String, default: '' },
  messageClass: { type: String, default: '' },
  onClose: { type: Function, required: true },
  dialogBoxMinWidth: { type: String, default: '300px' },
  dialogBoxClasses: { type: String, default: '' },
  closeIconClasses: { type: String, default: '' },
  showCloseIcon: { type: Boolean, default: true },
  timer: { type: Number, default: 3000 },
  disableAutoClose: { type: Boolean, default: false },
})

// Method to close the notification
function close() {
  props.onClose('close')
}

// Method to handle click outside the modal content to close it
function handleOverlayClick() {
  props.onClose('overlay')
}
</script>
