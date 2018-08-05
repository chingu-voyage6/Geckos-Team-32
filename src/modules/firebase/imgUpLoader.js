import firebase from 'firebase';
import {
  resolve
} from 'url';
import {
  rejects
} from 'assert';

class ImageUpload {
  constructor(storageRef) {
    this.storageRef = storageRef;
  }

  uploadTask(imageBlob, path) {
    const imagesRef = storageRef.child(path);
    this.storageRef.put(file)
  }
}


var promise = new
Promise((resolve, reject) => {
  uplodaTask.on('state_changed', (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');

    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }

  }, reject(error), () => uploadTask.snapshot.ref.getDownloadURL().then(resolve(downloadURL)));

})
