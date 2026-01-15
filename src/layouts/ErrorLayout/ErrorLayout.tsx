import { Outlet } from "react-router";

export function ErrorLayout() {
  return (
    <div className="antialiased">
      {/* Formes abstraites en arrière-plan */}
      <div className="absolute top-[10%] left-[5%] h-30 w-30 -rotate-30 rounded-3xl bg-gray-200/40 shadow-lg backdrop-blur-sm" />
      <div className="absolute top-[20%] left-[15%] h-37.5 w-37.5 -rotate-30 rounded-3xl bg-gray-200/40 opacity-50 backdrop-blur-sm" />
      <div className="absolute bottom-[25%] left-[20%] h-20 w-20 -rotate-30 rounded-3xl bg-gray-200/40 backdrop-blur-sm" />
      <div className="absolute right-[5%] bottom-[10%] h-25 w-25 -rotate-30 rounded-3xl bg-gray-200/40 backdrop-blur-sm" />
      <div className="absolute right-[15%] bottom-[30%] h-32.5 w-32.5 -rotate-30 rounded-3xl bg-gray-200/40 opacity-60 backdrop-blur-sm" />

      {/* Particules lumineuses */}
      <div
        className="bg-warning absolute top-[20%] left-[25%] h-5 w-5 animate-[float_6s_ease-in-out_infinite] rounded-full"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="bg-warning absolute top-[25%] left-[85%] h-8 w-8 animate-[float_6s_ease-in-out_infinite] rounded-full"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="bg-warning absolute top-[50%] left-[65%] h-6 w-6 animate-[float_6s_ease-in-out_infinite] rounded-full"
        style={{ animationDelay: "2s" }}
      />
      <main className="relative w-full">
        <Outlet />
      </main>
    </div>
  );
}
