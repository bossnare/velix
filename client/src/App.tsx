import { ListIcon } from '@phosphor-icons/react';
import './App.css';
import { tabs } from './app/tab';

function App() {
  return (
    <>
      <div>
        <header className="max-w-6xl mx-auto">
          <nav className="flex gap-10 p-2">
            <div className="flex items-center gap-2 min-w-20 shrink-0">
              <div className="p-2 rounded-full bg-primary">
                <div className="text-2xl font-extrabold text-center rounded-full size-6 bg-background text-primary">
                  V
                </div>
              </div>{' '}
              <span className="text-2xl font-extrabold text-primary font-tighter">
                Velix
              </span>
            </div>
            <div className="flex items-center justify-between px-2 py-3 rounded-lg shadow-md grow">
              <ul className="flex gap-8 font-semibold">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button className="flex gap-1">
                      <tab.icon className="size-5" /> {tab.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="h-10 rounded-md outline w-90 outline-border has-[:focus-visible]:shadow-xl transition">
                <input
                  type="search"
                  name="current-search"
                  className="px-2 size-full focus:outline-none"
                  placeholder="Search by title, date, genre..."
                />
              </div>
            </div>
            <div className="flex items-center shrink-0">
              <button className="p-3 border rounded-sm border-border">
                <ListIcon className="size-6" />
              </button>
            </div>
          </nav>
        </header>
        <main className="py-10">
          <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto">
            <div className="h-20 rounded bg-muted-foreground"></div>
            <div className="h-20 rounded bg-muted-foreground"></div>
          </div>
          <div className="grid max-w-6xl grid-cols-4 gap-4 pt-4 mx-auto">
            <div className="h-40 bg-muted-foreground animate-pulse"></div>
            <div className="h-40 bg-muted-foreground animate-pulse"></div>
            <div className="h-40 bg-muted-foreground animate-pulse"></div>
            <div className="h-40 bg-muted-foreground animate-pulse"></div>
            <div className="h-40 bg-muted-foreground animate-pulse"></div>
            <div className="h-40 bg-muted-foreground animate-pulse"></div>
            <div className="h-40 bg-muted-foreground animate-pulse"></div>
            <div className="h-40 bg-muted-foreground animate-pulse"></div>
          </div>
        </main>
        <footer className="py-10 text-center bg-foreground text-background">
          <span className="text-muted-foreground">Powered by</span>{' '}
          <a href="https://github.com/bossnare" className="hover:underline">
            Christo Razafimanga
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
