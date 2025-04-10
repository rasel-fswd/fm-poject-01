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

const data = [
  {
    logo: devLens,
    name: 'DevLens',
    description:
      'Quickly inspect page layouts and visualize element boundaries.',
    isActive: true,
  },
  {
    logo: styleSky,
    name: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    isActive: true,
  },
  {
    logo: speedBoost,
    name: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    isActive: false,
  },
  {
    logo: jsonWizard,
    name: 'JSONWizard',
    description:
      'Formats, validates, and prettifies JSON responses in-browser.',
    isActive: true,
  },
  {
    logo: tabMaster,
    name: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    isActive: true,
  },
  {
    logo: viewporBuddy,
    name: 'ViewportBuddy',
    description:
      'Simulates various screen resolutions directly within the browser.',
    isActive: false,
  },
  {
    logo: markupNotes,
    name: 'Markup Notes',
    description:
      'Enables annotation and notes directly onto webpages for collaborative debugging.',
    isActive: true,
  },
  {
    logo: gridGuides,
    name: 'GridGuides',
    description:
      'Overlay customizable grids and alignment guides on any webpage.',
    isActive: false,
  },
  {
    logo: palletePicker,
    name: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    isActive: true,
  },
  {
    logo: linkChecker,
    name: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    isActive: true,
  },
  {
    logo: domSnapShot,
    name: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    isActive: false,
  },
  {
    logo: consolePlus,
    name: 'ConsolePlus',
    description:
      'Enhanced developer console with advanced filtering and logging.',
    isActive: true,
  },
];

let displayData;

function ExtensionList({ filter }) {
  if (filter === 'all') displayData = data;
  if (filter === 'active') displayData = data.filter(ext => ext.isActive);
  if (filter === 'inactive') displayData = data.filter(ext => !ext.isActive);

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-normal mt-8">
      {displayData?.map(ext => (
        <li
          key={ext.name}
          className=" flex flex-col justify-between p-5 bg-neutral-100 border border-neutral-200 rounded-2xl shadow"
        >
          <div className=" flex items-start gap-3 mb-8">
            <Image src={ext.logo} height={48} width={48} alt={ext.name} />
            <div>
              <h2 className="font-bold text-[var(--text-dark)]">{ext.name}</h2>
              <p className="mt-1 text-[var(--text-dim)]">{ext.description}</p>
            </div>
          </div>
          <ExtensionAction isActive={ext.isActive} />
        </li>
      ))}
    </ul>
  );
}

export default ExtensionList;
