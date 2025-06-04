import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Firebase
import { useAvatars } from "@/firebase/users/avatarHooks";

import toast from "react-hot-toast";
import { AvatarDto } from "@/types/users.type";

function AvatarForm({ id }: { id: null | string; }) {

  const [avatar, setAvatar] = useState<AvatarDto>({
    id: '',
    avatarId: 0,
    get_image: '',
  });
  const [avatars, setAvatars] = useState<AvatarDto[]>();

  const { getAvatars, getAvatarById, createAvatar, updateAvatar } = useAvatars();
  
  const router = useRouter();
  const [labelError, setLabelError] = useState<string | null>();
  
  useEffect(() => {
    if (id) getAvatarById(id).then(data => setAvatar(data));
    getAvatars().then(data => setAvatars(data));
  }, [])

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setLabelError(null);
    
    try {
      
      if (!id) {
        await createAvatar({
          avatarId: avatars?.length || 0,
          get_image: avatar.get_image
        });
        router.push("/users/avatars");
        toast.success("Avatar successfully created");

      }
      else {
        await updateAvatar(id, {
          avatarId: avatar.avatarId,
          get_image: avatar.get_image
        });
        router.push("/users/avatars");
        toast.success("Avatar successfully edited");
      };

    } catch (error) {
      toast.error("L'opération a échoué. Voir console.")
      console.error("Echec à créer/éditer: ", error);

    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 shadow-md w-full">
      <div className="flex flex-col mb-4">
        <label className="font-semibold text-sm">Label
          {labelError &&
            <span style={{ color: 'red' }}> {labelError}</span>}
        </label>
        <input
          type="text"
          name="get_image"
          placeholder="Image path..."
          className="mb-4"
          value={avatar.get_image}
          onChange={(e) => setAvatar({ ...avatar, get_image: e.target.value })}
        />
      </div>

      <div>
        <button
          className={`w-1/2 ${!id ? "bg-amber-400 hover:bg-amber-500" : "bg-teal-200 hover:bg-teal-300"} rounded-2xl p-2`}
          type="submit"
        >
          {!id ? "Créer" : "Mettre à jour"}
        </button>
      </div>
    </form>
  )
}

export default AvatarForm