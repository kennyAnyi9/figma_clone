"use client";
import Live from "@/components/Live";
import { Room } from "./Room";

export default function Page() {
  return (
    <div className="h-[100vh] text-center w-full flex justify-center">
      <h1 className="text-2xl text-white"> Liveblocks Figma Clone</h1>
      <Live />
    </div>
  );
}
