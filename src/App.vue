<script setup>
import { showConfirmDialog, showNotificationDialog } from '@/useDialogTw';

async function openConfirmDialog() {
  try {
    const result = await showConfirmDialog({
      title: 'Delete Item?',
      message: 'Are you sure you want to delete this item?',
      btnConfirmText: 'Yes, Delete',
      btnCancelText: 'Cancel',
      showCloseIcon: true
    });

    console.log('User confirmed:', result);
  } catch (error) {
    console.log('User canceled:', error.message);
  }
}

async function openNotificationDialog() {
  try {
    const result = await showNotificationDialog({
      title: 'hello',
      titleClass: '',
      message: 'This is a notification message.',
      messageClass: 'text-secondary',
      timer: 3000,
      showCloseIcon: false,
      disableAutoClose: false,
    });

    console.log('Notification closed:', result);
  } catch (error) {
    console.log('Notification error:', error.message);
  }
}

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-2">
    <button class="bg-primary rounded-lg p-2 mb-2 w-64 text-white" @click="openConfirmDialog">Open Confirm
      Dialog</button>
    <button class="bg-primary rounded-lg p-2 w-64 text-white" @click="openNotificationDialog">Open Notification
      Dialog</button>
  </div>
</template>
