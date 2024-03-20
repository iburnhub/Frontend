"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export default function MainSearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null); // 입력 필드 참조 생성

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // useRef를 사용하여 입력 필드에서 검색어를 가져옴
    const searchTerm = inputRef.current?.value;

    if (searchTerm) {
      router.push(`/summoner-page?nickname=${encodeURIComponent(searchTerm)}`);
      // 검색 후 입력 필드 초기화
      inputRef.current.value = "";
      // input 태그 focus 해제
      inputRef.current.blur();
    }
  };

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          ref={inputRef}
          pattern="^[A-Za-z가-힣0-9]+#[A-Za-z가-힣0-9]+$"
          className="block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="소환사명#태그"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
