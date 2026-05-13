// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-new-game-1" | "resume-2" | "settings-3" | "how-to-play-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20">
      <div className="w-[320px] h-[640px] border border-outline-variant grid grid-cols-10 grid-rows-20 gap-px bg-surface-container-lowest">
      {/* Simulated Tetris Pieces */}
      <div className="col-start-4 row-start-15 col-span-2 row-span-2 bg-secondary opacity-50"></div>
      <div className="col-start-7 row-start-18 col-span-4 row-span-1 bg-primary opacity-50"></div>
      <div className="col-start-5 row-start-19 col-span-3 row-span-1 bg-error opacity-50"></div>
      <div className="col-start-6 row-start-18 col-span-1 row-span-2 bg-error opacity-50"></div>
      </div>
      </div>
      {/* Main Content Container */}
      <main className="z-10 flex flex-col items-center w-full max-w-md px-gutter space-y-12">
      {/* Header / Logo */}
      <header className="text-center w-full">
      <h1 className="font-headline-lg text-headline-lg text-primary drop-shadow-[0_0_12px_rgba(74,225,118,0.6)] uppercase tracking-widest mb-2">
                      TETRIS SUPERVISOR
                  </h1>
      <p className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest">
                      SYSTEM ID: ARCADE-04
                  </p>
      </header>
      {/* Navigation / Actions */}
      <nav className="flex flex-col w-full space-y-4">
      <button className="group w-full h-touch_target bg-surface border border-outline hover:border-primary hover:bg-primary transition-colors flex items-center justify-center space-x-3 rounded" type="button" data-action-id="start-new-game-1" onClick={actions?.["start-new-game-1"]}>
      <Play  data-icon="play_arrow" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-primary group-hover:text-background" aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text text-primary group-hover:text-background uppercase tracking-widest">
                          START NEW GAME
                      </span>
      </button>
      <button className="group w-full h-touch_target bg-surface border border-outline hover:border-primary hover:bg-primary transition-colors flex items-center justify-center space-x-3 rounded opacity-80" type="button" data-action-id="resume-2" onClick={actions?.["resume-2"]}>
      <Circle  data-icon="restore" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-primary group-hover:text-background" aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text text-primary group-hover:text-background uppercase tracking-widest">
                          RESUME
                      </span>
      </button>
      <button className="group w-full h-touch_target bg-surface border border-outline hover:border-primary hover:bg-primary transition-colors flex items-center justify-center space-x-3 rounded" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings  data-icon="settings" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-primary group-hover:text-background" aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text text-primary group-hover:text-background uppercase tracking-widest">
                          SETTINGS
                      </span>
      </button>
      <button className="group w-full h-touch_target bg-surface border border-outline hover:border-primary hover:bg-primary transition-colors flex items-center justify-center space-x-3 rounded" type="button" data-action-id="how-to-play-4" onClick={actions?.["how-to-play-4"]}>
      <Circle  data-icon="help" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-primary group-hover:text-background" aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text text-primary group-hover:text-background uppercase tracking-widest">
                          HOW TO PLAY
                      </span>
      </button>
      </nav>
      {/* System Status Footer */}
      <div className="w-full mt-12 flex justify-between items-center border-t border-outline-variant pt-4">
      <div className="flex items-center space-x-2">
      <div className="w-2 h-2 rounded-full bg-primary drop-shadow-[0_0_4px_rgba(74,225,118,0.8)]"></div>
      <span className="font-status-label text-status-label text-on-surface-variant uppercase">SYSTEM ONLINE</span>
      </div>
      <span className="font-status-label text-status-label text-on-surface-variant uppercase">v4.2.0</span>
      </div>
      </main>
    </>
  );
}
