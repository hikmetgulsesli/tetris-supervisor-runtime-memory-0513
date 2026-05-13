// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw } from "lucide-react";


export type PauseOverlayActionId = "resume-game-1" | "restart-level-2" | "quit-to-menu-3" | "view-terminal-controls-4";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Blurred Background Simulation (The 'Game Board' underneath) */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')] bg-cover bg-center filter blur-md opacity-30" data-alt="A dark, abstract digital interface resembling a high-tech command center or complex system. Faint geometric lines, grid structures, and terminal-like data streams are visible in the background, obscured by depth of field. The palette is dominated by deep Slate colors (#0F172A) with extremely subtle hints of muted Emerald and secondary blues. The lighting is low and moody, conveying a sense of intense focus and complex background processing in a modern, calculated style.">
      </div>
      {/* Semi-transparent Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-gutter">
      {/* Pause Menu Container */}
      <div className="w-full max-w-md bg-surface-container-low border border-outline-variant rounded-DEFAULT p-8 flex flex-col gap-8 shadow-2xl relative">
      {/* Decorative Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-5xl mb-2" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-lg text-headline-lg text-primary neon-glow uppercase tracking-widest">System Paused</h1>
      <p className="font-status-label text-status-label text-on-surface-variant uppercase">Interruption Protocol Active</p>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-4 w-full mt-4">
      {/* Resume Button (Primary Action) */}
      <button className="h-touch_target w-full bg-primary/10 border border-primary text-primary font-button-text text-button-text uppercase tracking-wider hover:bg-primary hover:text-background transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="resume-game-1" onClick={actions?.["resume-game-1"]}>
      <Play aria-hidden={true} focusable="false" />
                          Resume Game
                      </button>
      {/* Restart Button */}
      <button className="h-touch_target w-full bg-transparent border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary font-button-text text-button-text uppercase tracking-wider transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="restart-level-2" onClick={actions?.["restart-level-2"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
                          Restart Level
                      </button>
      {/* Quit Button */}
      <button className="h-touch_target w-full bg-transparent border border-outline-variant text-on-surface hover:border-error hover:text-error hover:bg-error/10 font-button-text text-button-text uppercase tracking-wider transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background mt-4" type="button" data-action-id="quit-to-menu-3" onClick={actions?.["quit-to-menu-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Quit to Menu
                      </button>
      </div>
      {/* Settings / Utilities Area */}
      <div className="mt-4 pt-6 border-t border-outline-variant flex flex-col gap-6">
      {/* Volume Control */}
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
      <label className="font-status-label text-status-label text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
                                  Master Audio Output
                              </label>
      <span className="font-data-value text-data-value text-primary text-sm">75%</span>
      </div>
      <div className="w-full flex items-center h-touch_target">
      <input className="w-full appearance-none bg-transparent" max="100" min="0" type="range" value="75" />
      </div>
      </div>
      {/* Controls Help Link */}
      <button className="text-secondary font-button-text text-button-text flex items-center justify-center gap-2 hover:text-primary transition-colors py-2 uppercase tracking-wide group" type="button" data-action-id="view-terminal-controls-4" onClick={actions?.["view-terminal-controls-4"]}>
      <Circle className="text-lg group-hover:scale-110 transition-transform" aria-hidden={true} focusable="false" />
                          View Terminal Controls
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
