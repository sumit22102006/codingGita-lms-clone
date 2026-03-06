import React from "react";
import "./app.css";

const App = () => {
  return (
    <div>
      <main className="min-h-screen w-full flex items-center justify-center px-6">
        <section className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            <span className="block ">Coding</span>
            <span className="block bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Gita
            </span>
          </h1>
          <p className="mt-5 text-neutral-300 md:text-lg">
            Smart, simple, and reliable attendance for modern classrooms.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors bg-white text-black hover:bg-neutral-200" href="#">Login</a>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/3 p-5 text-left">
              <h3 className="text-white font-semibold">Role-based dashboards</h3>
              <p className="mt-2 text-sm text-neutral-300">Admin, Mentor, and Student experiences tailored to their needs.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/3 p-5 text-left">
             <h3 className="text-white font-semibold">Fast and secure access</h3>
              <p className="mt-2 text-sm text-neutral-300">Encrypted sessions and streamlined navigation.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;