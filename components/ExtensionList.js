import Image from 'next/image';
import devLens from '../public/logo-devlens.svg';
import styleSky from '../public/logo-style-spy.svg';
import speedBoost from '../public/logo-speed-boost.svg';
import jsonWizard from '../public/logo-json-wizard.svg';
import tabMaster from '../public/logo-tab-master-pro.svg';
import viewporBuddy from '../public/logo-viewport-buddy.svg';
import markupNotes from '../public/logo-markup-notes.svg';
import gridGuides from '../public/logo-grid-guides.svg';
import palletePicker from '../public/logo-palette-picker.svg';
import linkChecker from '../public/logo-link-checker.svg';
import domSnapShot from '../public/logo-dom-snapshot.svg';
import consolePlus from '../public/logo-console-plus.svg';
import ExtensionAction from './ExtensionAction';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';

const data = [
  {
    id: 1,
    logo: devLens,
    name: 'DevLens',
    description:
      'Quickly inspect page layouts and visualize element boundaries.',
    isActive: true,
  },
  {
    id: 2,
    logo: styleSky,
    name: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    isActive: true,
  },
  {
    id: 3,
    logo: speedBoost,
    name: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    isActive: false,
  },
  {
    id: 4,
    logo: jsonWizard,
    name: 'JSONWizard',
    description:
      'Formats, validates, and prettifies JSON responses in-browser.',
    isActive: true,
  },
  {
    id: 5,
    logo: tabMaster,
    name: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    isActive: true,
  },
  {
    id: 6,
    logo: viewporBuddy,
    name: 'ViewportBuddy',
    description:
      'Simulates various screen resolutions directly within the browser.',
    isActive: false,
  },
  {
    id: 7,
    logo: markupNotes,
    name: 'Markup Notes',
    description:
      'Enables annotation and notes directly onto webpages for collaborative debugging.',
    isActive: true,
  },
  {
    id: 8,
    logo: gridGuides,
    name: 'GridGuides',
    description:
      'Overlay customizable grids and alignment guides on any webpage.',
    isActive: false,
  },
  {
    id: 9,
    logo: palletePicker,
    name: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    isActive: true,
  },
  {
    id: 10,
    logo: linkChecker,
    name: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    isActive: true,
  },
  {
    id: 11,
    logo: domSnapShot,
    name: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    isActive: false,
  },
  {
    id: 12,
    logo: consolePlus,
    name: 'ConsolePlus',
    description:
      'Enhanced developer console with advanced filtering and logging.',
    isActive: true,
  },
];

let displayData;

const cardVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

function ExtensionList({ filter }) {
  if (filter === 'all') displayData = data;
  if (filter === 'active') displayData = data.filter(ext => ext.isActive);
  if (filter === 'inactive') displayData = data.filter(ext => !ext.isActive);

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-normal mt-8">
      <AnimatePresence>
        {displayData?.map(ext => (
          <motion.li
            layout
            variants={cardVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            key={ext.id}
            className=" flex flex-col justify-between p-5 bg-neutral-100 border border-neutral-200 rounded-2xl shadow"
          >
            <div className=" flex items-start gap-3 mb-8">
              <Image src={ext.logo} height={48} width={48} alt={ext.name} />
              <div>
                <h2 className="font-bold text-[var(--text-dark)]">
                  {ext.name}
                </h2>
                <p className="mt-1 text-[var(--text-dim)]">{ext.description}</p>
              </div>
            </div>
            <ExtensionAction isActive={ext.isActive} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default ExtensionList;
