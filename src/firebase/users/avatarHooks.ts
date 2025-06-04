import {
  type DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../client";


export function useAvatars() {

  const getAvatars = async () => {
    const ref = collection(db, 'avatars');
    const snap = await getDocs(
      query(ref, orderBy('avatarId'))
    );
    return snap.docs.map(doc => Object.assign({}, { id: doc.id }, doc.data()));
  };

  const getAvatarById = async (id: string) => {
    const ref = doc(db, 'avatars', id);
    const snap = await getDoc(ref);
    return { ...snap.data(), id }
  };

  const createAvatar = async (data: DocumentData) => {
    const ref = collection(db, 'avatars');
    return addDoc(ref, data)
  };

  const updateAvatar = async (id: string, data: DocumentData) => {
    const ref = doc(db, 'avatars', id);
    return updateDoc(ref, data);
  };

  const deleteAvatar = async (id: string) => {
    const ref = doc(db, 'avatars', id);
    return deleteDoc(ref);
  };

  return {
    getAvatars,
    getAvatarById,
    createAvatar,
    updateAvatar,
    deleteAvatar,
  }
}