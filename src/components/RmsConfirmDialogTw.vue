<template>
  <!-- Modal overlay with click listener for closing the dialog -->
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" @click="handleOverlayClick">
    <div :class="'bg-white rounded-lg shadow-lg w-full max-w-md relative text-center ' + dialogBoxClasses"
      :style="{ minWidth: dialogBoxMinWidth }" @click.stop>
      <button v-if="showCloseIcon"
        :class="'absolute top-1 right-2 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none ' + closeIconClasses"
        @click="cancel">&times;</button>
      <div class="px-4 py-6">
        <h2 v-if="title" :class="'text-lg font-semibold mb-2 ' + titleClass">{{ title }}</h2>
        <p v-if="message" :class="'mb-4 ' + messageClass">{{ message }}</p>
        <div class="flex justify-center gap-4 mt-6">
          <button @click="cancel" :class="btnCancelClasses">
            {{ btnCancelText }}
          </button>
          <button @click="confirm" :class="btnConfirmClasses">
            {{ btnConfirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>


// Define properties passed into the dialog component
const props = defineProps({
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  titleClass: { type: String, default: '' },
  messageClass: { type: String, default: '' },
  btnConfirmText: { type: String, default: 'OK' },
  btnCancelText: { type: String, default: 'Cancel' },
  onConfirm: { type: Function, required: true },
  onCancel: { type: Function, required: true },
  dialogBoxMinWidth: { type: String, default: '300px' },
  dialogBoxClasses: { type: String, default: '' },
  btnConfirmClasses: { type: String, default: 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded' },
  btnCancelClasses: { type: String, default: 'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded' },
  closeIconClasses: { type: String, default: '' },
  showCloseIcon: { type: Boolean, default: true },
  btnConfirmRes: { type: [String, Boolean], default: true },
  btnCancelRes: { type: [String, Boolean], default: false },
})

// Method for confirming the action
function confirm() {
  // props.onConfirm('OK')
  props.onConfirm(props.btnConfirmRes || true)
}

// Method for canceling the action
function cancel() {
  props.onCancel(props.btnCancelRes || false)
}

// Method to handle click outside the modal content to close it
function handleOverlayClick() {
  props.onCancel(props.btnCancelRes || false)
}
</script>
