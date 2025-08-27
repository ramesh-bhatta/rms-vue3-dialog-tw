import ConfirmDialogTw from './components/ConfirmDialogTw.vue';
import { showDialogTw } from './useDialogTw.js'; // Import the function

export default {
  install(app) {
    app.component('ConfirmDialogTw', ConfirmDialogTw);
  },
};

export { ConfirmDialogTw, showDialogTw }; // Export both
