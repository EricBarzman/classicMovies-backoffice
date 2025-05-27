import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Firebase
import { useKeywords } from "@/firebase/movies/keywordHooks";

import toast from "react-hot-toast";
import { KeywordSentDto } from "@/types/movies.type";
import slugify from "@/utils/slugify";

function KeywordForm({ id }: { id: null | string; }) {

  const [keyword, setKeyword] = useState<KeywordSentDto>({
    label: "",
  });

  const { getKeywordById, createKeyword, updateKeyword } = useKeywords();
  
  const router = useRouter();
  const [labelError, setLabelError] = useState<string | null>();
  
  useEffect(() => {
    if (id) {
      getKeywordById(id).then(data => setKeyword(data));
    }
  }, [])

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setLabelError(null);
    
    try {
      if (keyword.label.length < 1 || keyword.label === '') {
        setLabelError("You must type a label");
        return;
      }
      
      if (!id) {
        await createKeyword({
          label: keyword.label,
        });
        router.push("/movies/keywords");
        toast.success("Keyword successfully created");

      }
      else {
        await updateKeyword(id, {
          label: keyword.label,
        });
        router.push("/movies/keywords");
        toast.success("Keyword successfully edited");
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
          name="label"
          placeholder="Name..."
          className="mb-4"
          value={keyword.label}
          onChange={(e) => setKeyword({ ...keyword, label: e.target.value })}
        />
      </div>

      <div>
        <button
          className={`w-1/2 text-white ${!id ? "bg-amber-400 hover:bg-amber-500" : "bg-teal-200 hover:bg-teal-300"} rounded-2xl p-2`}
          type="submit"
        >
          {!id ? "Create" : "Update"}
        </button>
      </div>
    </form>
  )
}

export default KeywordForm