'use client';

import { useState } from 'react';

function ExtensionAction({ isActive }) {
  const [active, setActive] = useState(false);
  function handleActive(e) {
    setActive(prev => !prev);
  }
  return (
    <div className="flex justify-between mt-4">
      <button className="px-5 py-2 cursor-pointer text-[var(--text-muted)] border border-neutral-300 hover:border-[var(--color-acent-400)] hover:bg-[var(--color-acent-400)] hover:text-neutral-100 focus:border-none focus:bg-neutral-300 focus:hover:bg-[var(--color-acent-400)] focus:ring-2 focus:ring-[var(--color-acent-400)] focus:ring-offset-2 focus:ring-offset-neutral-100 outline-none rounded-full transition-colors">
        Remove
      </button>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value={active}
          checked={active || isActive}
          className="sr-only peer"
          onChange={handleActive}
        />
        <div className="relative w-11 h-6 bg-neutral-300 dark:bg-neutral-600 rounded-full peer-focus:outline-none peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-acent-700 peer-checked:bg-[var(--color-acent-400)] peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-offset-neutral-100 peer-focus:ring-[var(--color-acent-400)]"></div>
      </label>
    </div>
  );
}

export default ExtensionAction;
