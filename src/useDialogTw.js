import { createApp } from 'vue';
import RmsConfirmDialogTw from '@/components/RmsConfirmDialogTw.vue';
import RmsNotificationDialogTw from '@/components/RmsNotificationDialogTw.vue';

export function showConfirmDialog(props) {
  return new Promise((resolve) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const app = createApp(RmsConfirmDialogTw, {
      ...props,
      onConfirm: (value) => {
        resolve(value);
        cleanup();
      },
      onCancel: (value) => {
        let val = value || null;
        resolve(val);
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

export function showNotificationDialog(props) {
  return new Promise((resolve) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    let timerId = null;
    const app = createApp(RmsNotificationDialogTw, {
      ...props,
      onClose: (value) => {
        resolve(value);
        cleanup();
      },
    });

    app.mount(container);

    if (!props.disableAutoClose && props.timer && typeof props.timer === 'number') {
      timerId = setTimeout(() => {
        resolve('timer-close');
        cleanup();
      }, props.timer);
    }

    function cleanup() {
      if (timerId) clearTimeout(timerId);
      if (document.body.contains(container)) {
        app.unmount();
        document.body.removeChild(container);
      }
    }
  });
}
