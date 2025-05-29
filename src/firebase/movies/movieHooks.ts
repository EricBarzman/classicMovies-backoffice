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


export function useMovies() {

  const getMoviesWithDirectorInfo = async () => {
    const ref = collection(db, 'movies');
    const snap = await getDocs(ref);

    // Get directors
    const refDirectors = collection(db, "directors");
    const snapDirectors = await getDocs(refDirectors);
    const directorList = snapDirectors.docs.map(doc => Object.assign(
      {},
      { id: doc.id },
      doc.data()
    ))

    return snap.docs.map(doc => Object.assign(
      {},
      {
        id: doc.id,
        director: directorList.find(director => director.id === doc.data().directorId)
      },
      doc.data(),
    ));
  };

  const getMovieByIdWithAllInfo = async (id: string) => {
    const ref = doc(db, 'movies', id);
    const snap = await getDoc(ref);


    return { ...snap.data(), id }
  };

  const createMovie = async (data: DocumentData) => {
    const ref = collection(db, 'movies');
    return addDoc(ref, {
      ...data,
      createdAt: Timestamp.fromDate(new Date())
    })
  };

  const updateMovie = async (id: string, data: DocumentData) => {
    const ref = doc(db, 'movies', id);
    return updateDoc(ref, data);
  };

  const deleteMovie = async (id: string) => {
    const ref = doc(db, 'movies', id);
    return deleteDoc(ref);
  };

  return {
    getMoviesWithDirectorInfo,
    getMovieByIdWithAllInfo,
    createMovie,
    updateMovie,
    deleteMovie,
  }
}