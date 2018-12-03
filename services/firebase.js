import * as firebase from 'firebase';
import { firebaseConfig } from '../configs/firebase';

let istance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initialize(firebaseConfig);
    }
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
