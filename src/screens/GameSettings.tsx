// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Settings } from "lucide-react";


export type GameSettingsActionId = "terminate-session-1" | "reset-high-scores-2";

export interface GameSettingsProps {
  actions?: Partial<Record<GameSettingsActionId, () => void>>;
}

export function GameSettings({ actions }: GameSettingsProps) {
  return (
    <>
      {/* TopAppBar (Mobile) */}
      <header className="flex justify-between items-center w-full px-gutter h-touch_target bg-background border-b border-outline-variant md:hidden sticky top-0 z-50">
      <div className="font-headline-lg text-headline-lg font-extrabold text-primary drop-shadow-[0_0_8px_rgba(74,225,118,0.5)]">
                  TETRIS SUPERVISOR
              </div>
      <div className="flex items-center gap-2 text-primary">
      <Circle className="hover:bg-surface-variant hover:text-primary transition-colors cursor-pointer p-2 rounded" aria-hidden={true} focusable="false" />
      <Circle className="hover:bg-surface-variant hover:text-primary transition-colors cursor-pointer p-2 rounded" aria-hidden={true} focusable="false" />
      <Settings className="hover:bg-surface-variant hover:text-primary transition-colors cursor-pointer p-2 rounded" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full z-40 bg-surface-container-low border-r border-outline-variant w-64">
      <div className="p-6 border-b border-outline-variant">
      <h1 className="font-headline-lg text-headline-lg text-primary">SUPERVISOR</h1>
      <p className="font-status-label text-status-label uppercase tracking-widest text-on-surface-variant mt-1">ID: ARCADE-04</p>
      </div>
      <div className="flex-1 py-4 flex flex-col gap-1">
      <a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text uppercase">Command</span>
      </a>
      <a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text uppercase">Forecast</span>
      </a>
      <a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text uppercase">Analytics</span>
      </a>
      <a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text uppercase">Logs</span>
      </a>
      {/* Options/Settings semantic match */}
      <a className="bg-surface-variant text-primary border-l-4 border-primary px-4 py-3 flex items-center gap-3 scale-[0.98] transition-transform" href="#">
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text uppercase">Options</span>
      </a>
      </div>
      <div className="p-4 border-t border-outline-variant">
      <button className="w-full font-button-text text-button-text uppercase h-touch_target border border-outline-variant text-error hover:bg-error hover:text-on-error transition-colors flex items-center justify-center gap-2" type="button" data-action-id="terminate-session-1" onClick={actions?.["terminate-session-1"]}>
      <Circle aria-hidden={true} focusable="false" />
                      TERMINATE SESSION
                  </button>
      </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-gutter pb-24 md:pb-gutter flex flex-col max-w-container_max_width mx-auto w-full gap-8">
      <div className="mb-4">
      <h2 className="font-headline-lg text-headline-lg text-primary drop-shadow-[0_0_8px_rgba(74,225,118,0.3)]">CONFIGURATION</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Modify core system parameters and audio-visual feedback.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Audio / Visual Column */}
      <div className="flex flex-col gap-6">
      <div className="bg-surface-container border border-outline-variant rounded p-6">
      <h3 className="font-status-label text-status-label text-secondary mb-4 border-b border-outline-variant pb-2">AUDIO PROTOCOLS</h3>
      <div className="space-y-6">
      <div className="flex items-center justify-between">
      <div>
      <div className="font-button-text text-button-text text-on-surface">Music Track</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Background synthesized loops</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer h-touch_target">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <div className="font-button-text text-button-text text-on-surface">Sound Effects</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Block placement &amp; line clears</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer h-touch_target">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded p-6">
      <h3 className="font-status-label text-status-label text-secondary mb-4 border-b border-outline-variant pb-2">HAPTIC / VISUAL</h3>
      <div className="space-y-6">
      <div className="flex items-center justify-between">
      <div>
      <div className="font-button-text text-button-text text-on-surface">Screen Shake</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Impact feedback on hard drops</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer h-touch_target">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <div className="font-button-text text-button-text text-on-surface">Ghost Piece</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Display landing preview</div>
      </div>
      <select className="bg-surface-variant border border-outline-variant text-on-surface text-sm rounded focus:ring-primary focus:border-primary block p-2.5 h-touch_target outline-none">
      <option value="visible">Visible</option>
      <option value="hidden">Hidden</option>
      </select>
      </div>
      </div>
      </div>
      </div>
      {/* Gameplay / Data Column */}
      <div className="flex flex-col gap-6">
      <div className="bg-surface-container border border-outline-variant rounded p-6">
      <h3 className="font-status-label text-status-label text-secondary mb-4 border-b border-outline-variant pb-2">GAMEPLAY PARAMETERS</h3>
      <div className="space-y-6">
      <div className="flex items-center justify-between">
      <div>
      <div className="font-button-text text-button-text text-on-surface">Starting Level</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Initial drop speed modifier</div>
      </div>
      <select className="bg-surface-variant border border-outline-variant text-on-surface text-sm rounded focus:ring-primary focus:border-primary block p-2.5 h-touch_target outline-none min-w-[80px]">
      <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
      <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
      <option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>
      </select>
      </div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded p-6">
      <h3 className="font-status-label text-status-label text-secondary mb-4 border-b border-outline-variant pb-2">CONTROL MAPPING</h3>
      <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant">MOVE LEFT</span>
      <div className="bg-surface-variant border border-outline-variant rounded p-2 text-center font-button-text text-button-text text-primary">← / A</div>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant">MOVE RIGHT</span>
      <div className="bg-surface-variant border border-outline-variant rounded p-2 text-center font-button-text text-button-text text-primary">→ / D</div>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant">SOFT DROP</span>
      <div className="bg-surface-variant border border-outline-variant rounded p-2 text-center font-button-text text-button-text text-primary">↓ / S</div>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant">HARD DROP</span>
      <div className="bg-surface-variant border border-outline-variant rounded p-2 text-center font-button-text text-button-text text-primary">SPACE</div>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant">ROTATE CW</span>
      <div className="bg-surface-variant border border-outline-variant rounded p-2 text-center font-button-text text-button-text text-primary">↑ / W / X</div>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-status-label text-status-label text-on-surface-variant">HOLD</span>
      <div className="bg-surface-variant border border-outline-variant rounded p-2 text-center font-button-text text-button-text text-primary">C / SHIFT</div>
      </div>
      </div>
      </div>
      <div className="bg-surface-container border-t-2 border-error rounded p-6 mt-auto">
      <h3 className="font-status-label text-status-label text-error mb-2">DANGER ZONE</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4">This action cannot be undone. All local telemetry will be purged.</p>
      <button className="w-full font-button-text text-button-text uppercase h-touch_target border border-error text-error hover:bg-error hover:text-on-error transition-colors flex items-center justify-center gap-2" type="button" data-action-id="reset-high-scores-2" onClick={actions?.["reset-high-scores-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                              Reset High Scores
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="flex justify-between items-center w-full px-gutter py-2 fixed bottom-0 z-30 bg-surface-container-lowest border-t border-outline-variant">
      <div className="font-status-label text-status-label opacity-60 text-secondary">CORE SYSTEM v4.2.0 // COMMAND CENTER</div>
      <div className="flex gap-4">
      <span className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Manual</span>
      <span className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Protocol</span>
      <span className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Status</span>
      </div>
      </footer>
    </>
  );
}
