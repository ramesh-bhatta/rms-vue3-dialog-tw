
import './assets/main.css';
import RmsConfirmDialogTw from './components/RmsConfirmDialogTw.vue';
import RmsNotificationDialogTw from './components/RmsNotificationDialogTw.vue';
import { showConfirmDialog, showNotificationDialog } from './useDialogTw.js';

export default {
  install(app) {
    app.component('RmsConfirmDialogTw', RmsConfirmDialogTw);
    app.component('RmsNotificationDialogTw', RmsNotificationDialogTw);
  },
};

export {
  RmsConfirmDialogTw,
  RmsNotificationDialogTw,
  showConfirmDialog,
  showNotificationDialog
};
