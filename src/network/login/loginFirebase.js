import firebase from '../../firebase/firebase';

const loginRequest = async (username, password) => {
  try {
    return await firebase.auth().signInWithEmailAndPassword(username, password);
  } catch (error) {
    return error;
  }
};

export default loginRequest;
