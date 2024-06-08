import { DataAccessTest } from "./DataAccessTest";
import { AppHeader } from "../components/header";
import { LevelProgress } from "../components/level-progress";

export function HomePage() {
  return (
    <div className="max-w-lg gap-10 p-5 mx-auto relative h-full flex flex-1 flex-col">
      <AppHeader />
      <h1 className="text-white text-2xl mx-auto text-center">
        Good morning, <br />
        <b className="font-semibold">Oliver</b>
      </h1>
      {/* <DataAccessTest /> */}
      <div className="bg-white mt-24 border-2 shadow-md p-3 rounded-[21px]">
        <LevelProgress />
      </div>
    </div>
  );
}
