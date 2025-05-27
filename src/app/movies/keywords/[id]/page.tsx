"use client";

import BackButton from "@/components/MovieBackButton/BackButton";
import { useKeywords } from "@/firebase/movies/keywordHooks"
import { KeywordSentDto } from "@/types/movies.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import KeywordTable from "@/components/KeywordComponents/KeywordTable";

function KeywordPage() {

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { getKeywordById, deleteKeyword } = useKeywords();

  const [keyword, setKeyword] = useState<KeywordSentDto>({
    label: "",
  });

  useEffect(() => {
    getKeywordById(id)
      .then((response) => {
        setKeyword(response);
      });
  }, [])

  async function handleDeleteClick() {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await deleteKeyword(id);
      toast.success("Deleted");
      router.push("/movies/keywords");

    } catch (error) {
      toast.error("Something went wrong. Try again.")
      console.error("Error deleting: ", error);
    }

  }

  return (
    <div className='p-6 flex justify-center'>
      <div className="flex flex-col">
        <h2 className="text-xl mb-6 font-semibold">
          {keyword.label}
        </h2>
        <KeywordTable id={id} keyword={keyword} />
        <button
          className="block mt-10 rounded-2xl p-2 bg-red-500 hover:bg-red-600 text-white text-center"
          onClick={handleDeleteClick}
        >
          Delete keyword
        </button>
        <BackButton name="keywords" />
      </div>

    </div>
  )
}

export default KeywordPage