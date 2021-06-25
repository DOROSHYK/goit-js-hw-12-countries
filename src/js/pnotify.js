//   import {error} from 'node_modules/@pnotify/core/dist/PNotify.js';
//   import * as Confirm from "@pnotify/confirm";

//   defaultModules.set(PNotifyMobile, {});
export default function Error() {
 error({
    text:
      "Too many matches found. Please enter a more specific query.",
    delay: 4000,
    
  });
};

