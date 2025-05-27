import {
  DocumentData,
  Timestamp,
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


export function useGenres() {

  const getGenres = async () => {
    const ref = collection(db, 'genres');
    const snap = await getDocs(
      query(ref, orderBy('name'))
    );
    return snap.docs.map(doc => Object.assign({}, { id: doc.id }, doc.data()));
  };

  const getGenreById = async (id: string) => {
    const ref = doc(db, 'genres', id);
    const snap = await getDoc(ref);
    return { ...snap.data(), id }
  };

  const createGenre = async (data: DocumentData) => {
    const ref = collection(db, 'genres');
    return addDoc(ref, {
      ...data,
      createdAt: Timestamp.fromDate(new Date())
    })
  };

  const updateGenre = async (id: string, data: DocumentData) => {
    const ref = doc(db, 'genres', id);
    return updateDoc(ref, data);
  };

  const deleteGenre = async (id: string) => {
    const ref = doc(db, 'genres', id);
    return deleteDoc(ref);
  };

  return {
    getGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre,
  }
}