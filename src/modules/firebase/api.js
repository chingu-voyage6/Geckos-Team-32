import firebase from "firebase";

function createUploader(firebase) {
  const storageRef = firebase.storage().ref();
  return function(imageName, prefix = "images") {
    const salt = Math.ceil(Date.now() * Math.random()).toString();
    const fullPath = `${prefix}/${salt + imageName}`;
    const imageRef = storageRef.child(fullPath);
    return function(file, stateChangeHandler = function() {}) {
      const uploadImagetask = imageRef.put(file);
      return runTask(uploadImagetask, stateChangeHandler);
    };
  };
}

function runTask(task, stateChangeHandler) {
  return new Promise((resolve, reject) => {
    task.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => stateChangeHandler(snapshot),
      error => onError(reject, error),
      () => onSucces(resolve, task)
    );
  });
}

function onError(reject, error) {
  reject(error);
}

function onSucces(resolve, task) {
  const ref = task.snapshot.ref;
  ref.getDownloadURL().then(imgUrl => resolve(imgUrl));
}

export { createUploader };
