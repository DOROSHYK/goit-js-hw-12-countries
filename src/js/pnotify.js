//   import {error} from 'node_modules/@pnotify/core/dist/PNotify.js';
//   import * as Confirm from "@pnotify/confirm";

//   defaultModules.set(PNotifyMobile, {});

// import PNotify from '../../node_modules/pnotify/node_modules/@pnotify/bootstrap4/dist/PNotifyBootstrap4'
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

// export default function Error() {
//  info({
//     text:
//       "Too many matches found. Please enter a more specific query.",
//     delay: 4000,
    
//   });
// };
export default function Error() {
  error({
    text:
      "Too many matches found. Please enter a more specific query.",
    delay: 4000,
  
   });
}
