# rms-vue3-confirm-dialog

A simple, customizable Vue 3 confirmation dialog component built with Vue 3 and Tailwind CSS.

# 📦 Installation

```
npm install rms-vue3-confirm-dialog
```

# 📝 Usage Example

Here’s a simple example of how to use the dialog in your components:

```
<template>
  <button class="bg-blue-600 text-white px-4 py-2 rounded" @click="openDialog">Primary</button>
</template>

<script setup>
import 'rms-vue3-confirm-dialog-tw/dist/rms-vue3-confirm-dialog.css'
import { showDialog } from 'rms-vue3-confirm-dialog-tw'

async function openDialog() {
  try {
    const result = await showDialog({
      title: 'Are you sure?',
      message: 'Do you really want to continue?',
      btnConfirmText: 'Save',
      btnCancelText: 'Cancel'
    })
    console.log('User confirmed with:', result)
    // proceed with the action
  } catch (err) {
    console.warn('User canceled or something went wrong:', err)
    // handle cancellation or error
  }
}
</script>
```

# 💡 How it works:

showDialog() opens the confirmation dialog.
The dialog returns a Promise. If the user clicks Confirm, the promise resolves with true. If they click Cancel or close the dialog, the promise resolve to null.
You can customize the title, message, and button text via props.

# 🔧 Props for showDialog

The following props are available for the ConfirmDialog component:

## Props

The following props are available for the `ConfirmDialog` component:

- **`title`** (String, default: `""`): The title displayed in the dialog.
- **`message`** (String, default: `""`): The message/content displayed in the dialog.
- **`btnConfirmText`** (String, default: `"OK"`): The text for the confirm button.
- **`btnCancelText`** (String, default: `"Cancel"`): The text for the cancel button.
- **`btnConfirmRes`** (String|Boolean, default: `true`): The response for the confirm button.
- **`btnCancelRes`** (String|Boolean, default: `false`): The response for the cancel button.
- **`dialogBoxMinWidth`** (String, default: `"300px"`): Minimum width for the dialog box.
- **`dialogBoxClasses`** (String, default: `"has-background-primary"`): Custom CSS classes for the dialog box (you can modify this for styling).
- **`btnConfirmClasses`** (String, default: `"is-primary is-outlined"`): Custom CSS classes for the confirm button.
- **`btnCancelClasses`** (String, default: `"is-danger is-outlined"`): Custom CSS classes for the cancel button.
- **`showCloseIcon`** (Boolean, default: `true`): If `true`, a close button will be shown in the top-right corner of the dialog.

# 📌 Styling

The library is styled with Tailwind CSS. Make sure Tailwind is installed and configured in your project. Also, include the confirmation dialog's CSS:

```
import 'rms-vue3-confirm-dialog-tw/dist/rms-vue3-confirm-dialog.css';
```

# 💻 Customize the Dialog

You can customize the dialog appearance and button styles using props like btnConfirmText, btnCancelText, and additional classes (btnConfirmClasses, btnCancelClasses, etc.).

Example:

```
const result = await showDialog({
  title: 'Confirm Action',
  message: 'Are you sure you want to continue?',
  btnConfirmText: 'Save',
  btnCancelText: 'Cancel',
  btnConfirmClasses: 'bg-green-600 text-white',  // Tailwind classes
  btnCancelClasses: 'bg-red-600 text-white'      // Tailwind classes
});
```

# 🔧 API

showDialog(props) — Opens the dialog and returns a promise.
