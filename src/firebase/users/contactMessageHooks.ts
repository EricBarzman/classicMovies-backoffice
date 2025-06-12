import {
  type DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../client";
import { ContactUsDto } from "@/types/users.type";


export function useContactMessage() {

  const getContactMessages = async () : Promise<ContactUsDto[]> => {
    const ref = collection(db, 'contactUs');
    const snap = await getDocs(
      query(ref, orderBy('email'))
    );
    return snap.docs.map(doc => Object.assign({}, { id: doc.id }, doc.data())) as ContactUsDto[]
  };

  const getContactMessagesByUserId = async (userId: string) : Promise<DocumentData | undefined> => {
    const ref = collection(db, "contactUs");
    const snap = await getDocs(
      query(ref, where("userId", "==", userId))
    );
    if (snap.docs) {
      return snap.docs.map(
        doc => Object.assign({}, doc.data(), { id: doc.id })
      ) as unknown as ContactUsDto;
    }
  };

  return {
    getContactMessages,
    getContactMessagesByUserId,
  }
}