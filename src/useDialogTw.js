import { createApp } from 'vue';
import ConfirmDialogTw from '@/components/ConfirmDialogTw.vue'; // Adjust the path as needed

export function showDialogTw(props) {
  return new Promise((resolve, reject) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const app = createApp(ConfirmDialogTw, {
      ...props,
      onConfirm: (value) => {
        resolve(value);
        cleanup();
      },
      onCancel: (value) => {
        // reject(new Error('User canceled'));
        let val = value || null;
        resolve(val); // Resolve with null (or 'cancel') instead of rejecting
        cleanup();
      },
    });

    app.mount(container);

    function cleanup() {
      if (document.body.contains(container)) {
        app.unmount();
        document.body.removeChild(container);
      }
    }
  });
}
