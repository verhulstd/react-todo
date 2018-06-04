var Rebase = require("re-base");
var firebase = require("firebase");
var app = firebase.initializeApp({
  apiKey: "",
  authDomain: "todo-app-7cbca.firebaseapp.com",
  databaseURL: "https://todo-app-7cbca.firebaseio.com"
});
var db = firebase.database(app);
const base = Rebase.createClass(db);

export { app };
export default base;
