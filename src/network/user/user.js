import firebase from '../../firebase/firebase';

const AddUser = async (name, email, uid) => {
  console.log('Input values : ', name + email + uid);
  try {
    return await firebase
      .database()
      .ref('users/' + uid)
      .set({
        name: name,
        email: email,
        uuid: uid,
        //profileImg: profileImg,
      });
  } catch (error) {
    return error;
  }
};

export default AddUser;
