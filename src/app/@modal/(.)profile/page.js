"use client";
import { useRouter } from "next/navigation";

export default function ProfileModal() {
  const router = useRouter();
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center"
      onClick={() => {
        router.back();
      }}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 text-[#1A202C]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Profile Modal</h2>
        <p className="mb-4">This is the modal content.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            // router.push("/homeCarRent");
            router.back();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
