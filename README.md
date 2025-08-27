# rms-vue3-dialog-tw

A simple, customizable Vue 3 confirmation dialog component built with Vue 3 and Tailwind CSS.

# 📦 Installation

```
npm install @rms/vue3-dialog-tw
```

# 📝 Usage Example

Here’s how to use both dialogs in your components:

## Confirmation Dialog Example

```vue
<script setup>
import { showConfirmDialog } from '@rms/vue3-dialog-tw'

async function openConfirmDialog() {
  const result = await showConfirmDialog({
    title: 'Delete Item?',
    message: 'Are you sure you want to delete this item?',
    btnConfirmText: 'Yes, Delete',
    btnCancelText: 'Cancel',
    showCloseIcon: true,
  })
  console.log('User confirmed:', result)
}
</script>

<template>
  <button @click="openConfirmDialog">Open Confirm Dialog</button>
</template>
```

## Notification Dialog Example (Autoclose)

```vue
<script setup>
import { showNotificationDialog } from '@rms/vue3-dialog-tw'

async function openNotificationDialog() {
  const result = await showNotificationDialog({
    title: 'Notification',
    message: 'This is a notification message.',
    timer: 5000, // closes after 5 seconds
    showCloseIcon: true,
  })
  console.log('Notification closed:', result)
}
</script>

<template>
  <button @click="openNotificationDialog">Open Notification Dialog</button>
</template>
```

## Notification Dialog Example (Manual Close)

```vue
<script setup>
import { showNotificationDialog } from '@rms/vue3-dialog-tw'

async function openNotificationDialogManual() {
  const result = await showNotificationDialog({
    title: 'Manual Notification',
    message: 'This notification will not autoclose.',
    disableAutoClose: true,
    showCloseIcon: true,
  })
  console.log('Notification closed:', result)
}
</script>

<template>
  <button @click="openNotificationDialogManual">Open Manual Notification Dialog</button>
</template>
```

# 💡 How it works:

showConfirmDialog() opens the confirmation dialog.
The dialog returns a Promise. If the user clicks Confirm, the promise resolves with true. If they click Cancel or close the dialog, the promise resolve to null.
You can customize the title, message, and button text via props.

# 🔧 Props for showConfirmDialog

The following props are available for the ConfirmDialog component:

## Props

The following props are available for the `ConfirmDialog` component:

- **`title`** (String, default: `""`): The title displayed in the dialog.
- **`message`** (String, default: `""`): The message/content displayed in the dialog.
- **`btnConfirmText`** (String, default: `"OK"`): The text for the confirm button.
- **`btnCancelText`** (String, default: `"Cancel"`): The text for the cancel button.
- **`dialogBoxMinWidth`** (String, default: `"300px"`): Minimum width for the dialog box.
- **`dialogBoxClasses`** (String, default: ""): Custom CSS classes for the dialog box (you can modify this for styling).
- **`btnConfirmClasses`** (String, default: `"bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"`): Custom CSS classes for the confirm button.
- **`btnCancelClasses`** (String, default: `"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"`): Custom CSS classes for the cancel button.
- **`showCloseIcon`** (Boolean, default: `true`): If `true`, a close button will be shown in the top-right corner of the dialog.
- **`closeIconClasses`** (String, default: ""): Custom CSS classes for the close icon (for styling the close button/icon).
- **`btnConfirmRes`** (String|Boolean, default: `true`): The response for the confirm button.
- **`btnCancelRes`** (String|Boolean, default: `false`): The response for the cancel button.

# 🔧 Props for showNotificationDialog

The following props are available for the NotificationDialog component:

## Props

- **`title`** (String, default: ""): The title displayed in the dialog.
- **`message`** (String, default: ""): The message/content displayed in the dialog.
- **`timer`** (Number, default: `null`): Time in milliseconds before the dialog auto-closes. If not set, dialog will not auto-close unless `disableAutoClose` is false.
- **`disableAutoClose`** (Boolean, default: `false`): If `true`, disables auto-close behavior.
- **`showCloseIcon`** (Boolean, default: `true`): If `true`, a close button will be shown in the top-right corner of the dialog.
- **`closeIconClasses`** (String, default: ""): Custom CSS classes for the close icon (for styling the close button/icon).
- **`dialogBoxMinWidth`** (String, default: "300px"): Minimum width for the dialog box.
- **`dialogBoxClasses`** (String, default: ""): Custom CSS classes for the dialog box.

# 📌 Styling

The library is styled with Tailwind CSS. Make sure Tailwind is installed and configured in your project. Also, include the confirmation dialog's CSS:

```
import '@rms/vue3-dialog-tw/dist/rms-vue3-dialog-tw.css';
```

# 💻 Customize the Dialog

You can customize the dialog appearance and button styles using props like btnConfirmText, btnCancelText, and additional classes (btnConfirmClasses, btnCancelClasses, etc.).

Example:

```
const result = await showConfirmDialog({
  title: 'Confirm Action',
  message: 'Are you sure you want to continue?',
  btnConfirmText: 'Save',
  btnCancelText: 'Cancel',
  btnConfirmClasses: 'bg-green-600 text-white',  // Tailwind classes
  btnCancelClasses: 'bg-red-600 text-white'      // Tailwind classes
});
```

# 🔧 API

showConfirmDialog(props) — Opens the dialog and returns a promise.
