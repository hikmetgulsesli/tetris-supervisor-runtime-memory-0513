// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home } from "lucide-react";


export type GameOverActionId = "play-again-1" | "leaderboard-2" | "main-menu-3";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Subtle Background Grid to simulate game well */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: "linear-gradient(to right, #3d4a3d 1px, transparent 1px), linear-gradient(to bottom, #3d4a3d 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
      <div className="z-10 w-full max-w-md px-gutter relative flex flex-col gap-8">
      {/* Header */}
      <div className="text-center">
      <h1 className="font-headline-lg text-headline-lg text-error drop-shadow-[0_0_12px_rgba(255,180,171,0.6)] uppercase mb-2">GAME OVER</h1>
      <p className="font-status-label text-status-label text-on-surface-variant uppercase tracking-[0.2em]">Session Terminated</p>
      </div>
      {/* Stats Bento Box */}
      <div className="grid grid-cols-2 gap-4">
      {/* Score Card (Span full width) */}
      <div className="col-span-2 bg-surface-container border border-outline-variant p-6 relative overflow-hidden group">
      {/* New High Score Badge */}
      <div className="absolute top-0 right-0 bg-secondary text-on-secondary font-status-label text-status-label px-3 py-1 rounded-bl-lg">
                          NEW HIGH SCORE!
                      </div>
      <div className="flex flex-col items-center justify-center gap-2">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase">Final Score</span>
      <span className="font-headline-lg text-[48px] leading-[1] font-extrabold text-primary drop-shadow-[0_0_8px_rgba(75,226,119,0.5)]">42,069</span>
      </div>
      {/* Status Bar Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      </div>
      {/* Lines Card */}
      <div className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center justify-center gap-1 relative">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase">Lines</span>
      <span className="font-data-value text-data-value text-on-surface">142</span>
      {/* Status Bar Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-surface-variant"></div>
      </div>
      {/* Level Card */}
      <div className="bg-surface-container border border-outline-variant p-4 flex flex-col items-center justify-center gap-1 relative">
      <span className="font-status-label text-status-label text-on-surface-variant uppercase">Level</span>
      <span className="font-data-value text-data-value text-on-surface">12</span>
      {/* Status Bar Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-surface-variant"></div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-4 mt-4">
      {/* Primary Action */}
      <button className="h-touch_target bg-primary/10 border border-primary text-primary font-button-text text-button-text uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors duration-200 flex items-center justify-center gap-2 group" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      PLAY AGAIN
                  </button>
      {/* Secondary Actions Row */}
      <div className="grid grid-cols-2 gap-4">
      <button className="h-touch_target bg-transparent border border-outline-variant text-on-surface-variant font-button-text text-button-text uppercase tracking-wider hover:border-secondary hover:text-secondary transition-colors duration-200 flex items-center justify-center gap-2" type="button" data-action-id="leaderboard-2" onClick={actions?.["leaderboard-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                          LEADERBOARD
                      </button>
      <button className="h-touch_target bg-transparent border border-outline-variant text-on-surface-variant font-button-text text-button-text uppercase tracking-wider hover:border-surface-bright hover:text-on-surface transition-colors duration-200 flex items-center justify-center gap-2" type="button" data-action-id="main-menu-3" onClick={actions?.["main-menu-3"]}>
      <Home aria-hidden={true} focusable="false" />
                          MAIN MENU
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
