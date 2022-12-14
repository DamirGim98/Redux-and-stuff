import { COMMENT_CREATE } from "./types";
import {errorOn} from "./actions";

const badWords = ["fuck", "shit"];

export function spamFilter(store) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        console.log("spam filter >>>>", action.data.text);
        const hasBadWords = badWords.some(res => action.data.text.includes(res))
        if (hasBadWords) {
          return store.dispatch(errorOn("Плохое слово!"))
        }
      }
      return next(action);
    };
  };
}