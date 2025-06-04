"use client";

import BackButton from "@/components/MovieBackButton/BackButton";
import AvatarTable from "@/components/AvatarComponents/AvatarTable";
import { useAvatars } from "@/firebase/users/avatarHooks"
import { AvatarDto } from "@/types/users.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AvatarPage() {

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { getAvatarById, deleteAvatar } = useAvatars();

  const [avatar, setAvatar] = useState<AvatarDto>();

  useEffect(() => {
    getAvatarById(id).then((response) => setAvatar(response));
  }, [])

  async function handleDeleteClick() {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await deleteAvatar(id);
      toast.success("Deleted");
      router.push("/users/avatars");

    } catch (error) {
      toast.error("Something went wrong. Try again.")
      console.error("Error deleting: ", error);
    }

  }

  if (!avatar) return <div>Not found.</div>

  return (
    <div className='p-6 flex justify-center'>
      <div className="flex flex-col">
        <h2 className="text-xl mb-6 font-semibold">
          {avatar.avatarId}
        </h2>
        <AvatarTable id={id} avatar={avatar} />
        <button
          className="block mt-10 rounded-2xl p-2 bg-red-500 hover:bg-red-600 text-white text-center"
          onClick={handleDeleteClick}
        >
          Delete avatar
        </button>
        <BackButton name="avatars" />
      </div>

    </div>
  )
}

export default AvatarPage