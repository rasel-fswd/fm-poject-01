'use client';

import { act, useState } from 'react';

function ExtensionAction({ isActive }) {
  const [active, setActive] = useState(false);
  function handleActive(e) {
    setActive(prev => !prev);
  }
  return (
    <div className="flex justify-between mt-4">
      <button className="px-5 py-2 border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 hover:text-neutral-50 dark:hover:text-neutral-900 hover:border-acent-700 dark:hover:border-acent-400 dark:hover:bg-acent-400 hover:bg-acent-700 transition-colors rounded-full cursor-pointer outline-none focus:bg-neutral-100 focus:border-neutral-100 focus:ring-2 focus:ring-offset-3 focus:ring-acent-700">
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
        <div className="relative w-11 h-6 bg-neutral-300 dark:bg-neutral-600 rounded-full peer-focus:outline-none peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-acent-700 dark:peer-checked:bg-acent-400"></div>
      </label>
    </div>
  );
}

export default ExtensionAction;
