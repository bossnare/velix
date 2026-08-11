import { tabs } from '../tab';
import { MagnifyingGlassIcon, ListIcon } from '@phosphor-icons/react';

export const Header = () => {
  return (
    <nav className="flex gap-10 p-2">
      <div className="flex items-center gap-2 min-w-20 shrink-0">
        <div className="p-2 rounded-full bg-primary">
          <div className="text-2xl font-extrabold text-center rounded-full size-6 bg-background text-primary">
            V
          </div>
        </div>{' '}
        <span className="text-3xl font-extrabold text-primary font-tighter">
          Velix
        </span>
      </div>
      <div className="flex items-center justify-between px-2 py-3 rounded-lg shadow-sm grow">
        <ul className="flex gap-8 font-semibold">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button className="flex gap-1 transition hover:text-primary">
                <tab.icon className="size-5" /> {tab.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center h-10 rounded-md outline w-90 outline-border has-[:focus-visible]:shadow-xl transition">
          <label htmlFor="input" className="h-full flex items-center pl-2">
            <MagnifyingGlassIcon />
          </label>
          <input
            id="input"
            type="search"
            name="current-search"
            className="px-2 size-full focus:outline-none"
            placeholder="Search by title, date, genre..."
          />
        </div>
      </div>
      <div className="flex items-center shrink-0">
        <button className="p-3 border rounded-sm border-border shadow">
          <ListIcon className="size-6" />
        </button>
      </div>
    </nav>
  );
};
