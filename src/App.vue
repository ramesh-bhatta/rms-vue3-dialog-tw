<script setup>
import { showDialogTw } from '@/useDialogTw';

async function openConfirmDialog() {
  try {
    const result = await showDialogTw({
      title: 'Delete Item?',
      message: 'Are you sure you want to delete this item?',
      btnConfirmText: 'Yes, Delete',
      btnCancelText: 'Cancel',
      showCloseIcon: true,
    });

    console.log('User confirmed:', result);
  } catch (error) {
    console.log('User canceled:', error.message);
  }
}
</script>

<template>
  <h1 class="bg-primary text-white">Confirmation Dialog Example</h1>
  <button @click="openConfirmDialog">Open Confirm Dialog</button>
</template>
