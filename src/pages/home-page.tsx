import { useState } from "react";
import CafeList from "../components/cafe-list";
import { AppHeader } from "../components/header";
import { LevelProgress } from "../components/level-progress";
import { PromoDeals } from "../components/promos";
import QrModal from "../components/qr-modal";

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-lg gap-10 pb-20 p-5 mx-auto overflow-y-scroll relative h-full flex flex-1 flex-col">
      <AppHeader />
      <h1 className="text-white text-2xl mx-auto text-center">
        Good morning, <br />
        <b className="font-semibold">James</b>
      </h1>
      <div className="bg-white mt-24 border-2 flex flex-col gap-4 shadow-md p-3 rounded-[21px]">
        {/* <DataAccessTest /> */}
        <LevelProgress />
        <h2 className="font-semibold text-sm text-black">Your promos</h2>
        <PromoDeals />
        <h2 className="font-semibold text-sm text-black">Your latest visits</h2>
        <CafeList />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-red-700 text-white rounded-xl p-2 py-3 font-semibold text-center"
        >
          Show QR Code
        </button>
      </div>
      <QrModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
}
