// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "terminate-session-4" | "button-5-5";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* Top App Bar */}
      <header className="flex justify-between items-center w-full px-gutter h-touch_target bg-background border-b border-outline-variant dark:border-outline-variant shrink-0 z-50">
      <div className="font-headline-lg text-headline-lg font-extrabold text-primary dark:text-primary drop-shadow-[0_0_8px_rgba(74,225,118,0.5)] tracking-tighter">
                  TETRIS SUPERVISOR
              </div>
      <div className="flex items-center gap-4 hidden">
      {/* Search bar hidden per JSON */}
      </div>
      <div className="flex items-center gap-2">
      <button className="w-touch_target h-touch_target flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant hover:text-primary transition-colors rounded-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle  data-weight="regular" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-touch_target h-touch_target flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant hover:text-primary transition-colors rounded-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  data-weight="regular" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-touch_target h-touch_target flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant hover:text-primary transition-colors rounded-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Settings  data-weight="regular" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* Side Navigation (Left Sidebar) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full z-40 bg-surface-container-low border-r border-outline-variant dark:border-outline-variant w-64 pt-touch_target mt-[1px]">
      <div className="p-6 border-b border-outline-variant">
      <div className="font-headline-lg text-headline-lg text-primary truncate">SUPERVISOR</div>
      <div className="font-status-label text-status-label text-on-surface-variant mt-1">ID: ARCADE-04</div>
      </div>
      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-1">
      <a className="bg-surface-variant text-primary border-l-4 border-primary px-4 py-3 flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-status-label text-status-label uppercase tracking-widest">Command</span>
      </a>
      <a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 border-l-4 border-transparent hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-status-label text-status-label uppercase tracking-widest">Forecast</span>
      </a>
      <a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 border-l-4 border-transparent hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-status-label text-status-label uppercase tracking-widest">Analytics</span>
      </a>
      <a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 border-l-4 border-transparent hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-status-label text-status-label uppercase tracking-widest">Logs</span>
      </a>
      </div>
      <div className="p-6 mt-auto border-t border-outline-variant">
      <button className="w-full h-touch_target flex items-center justify-center border border-error text-error font-button-text text-button-text uppercase rounded-DEFAULT hover:bg-error hover:text-on-error transition-colors focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="terminate-session-4" onClick={actions?.["terminate-session-4"]}>
                          TERMINATE SESSION
                      </button>
      </div>
      </nav>
      {/* Main Game Area */}
      <main className="flex-1 flex items-center justify-center p-gutter md:ml-64 relative bg-[#0F172A] pb-20 md:pb-10">
      {/* Game HUD Container */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-[800px] h-[819px] min-h-[600px]">
      {/* Left Column: Status & Hold */}
      <div className="flex flex-col gap-6 w-32 shrink-0 justify-start pt-10">
      {/* Hold Piece */}
      <div className="bg-surface border border-[#334155] rounded-DEFAULT p-3 flex flex-col items-center">
      <div className="font-status-label text-status-label text-on-surface-variant uppercase mb-4 tracking-widest border-t-2 border-surface-variant pt-2 w-full text-center">HOLD</div>
      <div className="w-20 h-20 bg-background border border-outline-variant rounded-DEFAULT flex items-center justify-center relative overflow-hidden">
      {/* Ghosted I piece */}
      <div className="absolute w-16 h-4 flex">
      <div className="w-4 h-4 color-i tetromino-glow border-r border-[#00f0f0]/50"></div>
      <div className="w-4 h-4 color-i tetromino-glow border-r border-[#00f0f0]/50"></div>
      <div className="w-4 h-4 color-i tetromino-glow border-r border-[#00f0f0]/50"></div>
      <div className="w-4 h-4 color-i tetromino-glow"></div>
      </div>
      </div>
      </div>
      {/* Status Monitors */}
      <div className="bg-surface border border-[#334155] rounded-DEFAULT p-3 flex flex-col items-center">
      <div className="font-status-label text-status-label text-on-surface-variant uppercase mb-2 tracking-widest border-t-2 border-primary pt-2 w-full text-center">SCORE</div>
      <div className="font-data-value text-data-value text-on-surface tabular-nums">042,150</div>
      </div>
      <div className="bg-surface border border-[#334155] rounded-DEFAULT p-3 flex flex-col items-center">
      <div className="font-status-label text-status-label text-on-surface-variant uppercase mb-2 tracking-widest border-t-2 border-secondary pt-2 w-full text-center">LEVEL</div>
      <div className="font-data-value text-data-value text-on-surface tabular-nums">12</div>
      </div>
      <div className="bg-surface border border-[#334155] rounded-DEFAULT p-3 flex flex-col items-center">
      <div className="font-status-label text-status-label text-on-surface-variant uppercase mb-2 tracking-widest border-t-2 border-tertiary pt-2 w-full text-center">LINES</div>
      <div className="font-data-value text-data-value text-on-surface tabular-nums">114</div>
      </div>
      </div>
      {/* Central Game Well */}
      <div className="relative bg-surface border-2 border-[#334155] rounded-DEFAULT p-2 shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
      <div className="absolute top-4 right-4 z-10">
      <button className="w-10 h-10 rounded-full bg-surface-variant/80 border border-outline-variant flex items-center justify-center text-on-surface hover:text-primary hover:border-primary transition-colors backdrop-blur-sm focus:outline-none focus-ring-active" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Pause className="text-xl" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* The Grid (10x20) aspect ratio */}
      <div className="game-well-grid w-[300px] h-[600px] border border-outline-variant relative bg-[#0b1326] overflow-hidden">
      {/* Locked Blocks (Background Layer) */}
      <div className="absolute bottom-0 left-0 w-full flex">
      <div className="w-[30px] h-[30px] color-j block-locked"></div>
      <div className="w-[30px] h-[30px] color-j block-locked"></div>
      <div className="w-[30px] h-[30px] color-j block-locked"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] color-o block-locked"></div>
      <div className="w-[30px] h-[30px] color-o block-locked"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] color-s block-locked"></div>
      <div className="w-[30px] h-[30px] color-s block-locked"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      </div>
      <div className="absolute bottom-[30px] left-0 w-full flex">
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] color-j block-locked"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] color-o block-locked"></div>
      <div className="w-[30px] h-[30px] color-o block-locked"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] color-s block-locked"></div>
      <div className="w-[30px] h-[30px] color-s block-locked"></div>
      </div>
      {/* Active Falling Piece (Emissive Layer) - T-Piece */}
      <div className="absolute top-[180px] left-[120px] w-[90px] h-[60px]">
      <div className="flex w-full">
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] color-t tetromino-glow border-b border-[#a000f0]/50"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      </div>
      <div className="flex w-full">
      <div className="w-[30px] h-[30px] color-t tetromino-glow border-r border-[#a000f0]/50"></div>
      <div className="w-[30px] h-[30px] color-t tetromino-glow border-r border-[#a000f0]/50"></div>
      <div className="w-[30px] h-[30px] color-t tetromino-glow"></div>
      </div>
      </div>
      {/* Ghost Drop Indicator */}
      <div className="absolute bottom-[60px] left-[120px] w-[90px] h-[60px]">
      <div className="flex w-full">
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      <div className="w-[30px] h-[30px] color-t ghost-piece border-b border-[#a000f0]/50"></div>
      <div className="w-[30px] h-[30px] bg-transparent"></div>
      </div>
      <div className="flex w-full">
      <div className="w-[30px] h-[30px] color-t ghost-piece border-r border-[#a000f0]/50"></div>
      <div className="w-[30px] h-[30px] color-t ghost-piece border-r border-[#a000f0]/50"></div>
      <div className="w-[30px] h-[30px] color-t ghost-piece"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Forecast / Next */}
      <div className="flex flex-col gap-6 w-32 shrink-0 justify-start pt-10">
      <div className="bg-surface border border-[#334155] rounded-DEFAULT p-3 flex flex-col items-center">
      <div className="font-status-label text-status-label text-on-surface-variant uppercase mb-4 tracking-widest border-t-2 border-surface-variant pt-2 w-full text-center">NEXT</div>
      <div className="flex flex-col gap-3 w-full">
      {/* Next 1 (L Piece) */}
      <div className="w-full h-20 bg-background border border-outline-variant rounded-DEFAULT flex items-center justify-center relative">
      <div className="absolute w-[60px] h-[45px] flex flex-col">
      <div className="flex w-full justify-end">
      <div className="w-[15px] h-[15px] color-l ghost-piece border-b border-[#f0a000]/50"></div>
      </div>
      <div className="flex w-full">
      <div className="w-[15px] h-[15px] color-l ghost-piece border-r border-[#f0a000]/50"></div>
      <div className="w-[15px] h-[15px] color-l ghost-piece border-r border-[#f0a000]/50"></div>
      <div className="w-[15px] h-[15px] color-l ghost-piece"></div>
      </div>
      </div>
      </div>
      {/* Next 2 (Z Piece) */}
      <div className="w-full h-16 bg-background border border-outline-variant rounded-DEFAULT flex items-center justify-center relative opacity-70">
      <div className="absolute w-[45px] h-[30px] flex flex-col">
      <div className="flex w-full">
      <div className="w-[15px] h-[15px] color-z ghost-piece border-r border-[#f00000]/50"></div>
      <div className="w-[15px] h-[15px] color-z ghost-piece"></div>
      <div className="w-[15px] h-[15px] bg-transparent"></div>
      </div>
      <div className="flex w-full">
      <div className="w-[15px] h-[15px] bg-transparent"></div>
      <div className="w-[15px] h-[15px] color-z ghost-piece border-r border-[#f00000]/50"></div>
      <div className="w-[15px] h-[15px] color-z ghost-piece"></div>
      </div>
      </div>
      </div>
      {/* Next 3 (I Piece) */}
      <div className="w-full h-16 bg-background border border-outline-variant rounded-DEFAULT flex items-center justify-center relative opacity-40">
      <div className="absolute w-[60px] h-[15px] flex">
      <div className="w-[15px] h-[15px] color-i ghost-piece border-r border-[#00f0f0]/50"></div>
      <div className="w-[15px] h-[15px] color-i ghost-piece border-r border-[#00f0f0]/50"></div>
      <div className="w-[15px] h-[15px] color-i ghost-piece border-r border-[#00f0f0]/50"></div>
      <div className="w-[15px] h-[15px] color-i ghost-piece"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Keyboard Hints */}
      <div className="mt-auto p-3 bg-surface-container border border-outline-variant rounded-DEFAULT">
      <div className="font-status-label text-status-label text-on-surface-variant uppercase mb-3 text-center">CONTROLS</div>
      <div className="flex flex-col gap-2 font-button-text text-button-text text-on-surface text-[10px]">
      <div className="flex justify-between items-center">
      <span>MOVE</span>
      <div className="flex gap-1">
      <span className="px-1 border border-outline rounded bg-surface-variant">←</span>
      <span className="px-1 border border-outline rounded bg-surface-variant">→</span>
      </div>
      </div>
      <div className="flex justify-between items-center">
      <span>ROTATE</span>
      <span className="px-1 border border-outline rounded bg-surface-variant">↑</span>
      </div>
      <div className="flex justify-between items-center">
      <span>DROP</span>
      <span className="px-1 border border-outline rounded bg-surface-variant whitespace-nowrap">SPACE</span>
      </div>
      <div className="flex justify-between items-center">
      <span>HOLD</span>
      <span className="px-2 border border-outline rounded bg-surface-variant">C</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Footer */}
      <footer className="flex justify-between items-center w-full px-gutter py-2 fixed bottom-0 z-30 bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline-variant">
      <div className="font-status-label text-status-label opacity-60 text-secondary dark:text-secondary">
                  CORE SYSTEM v4.2.0 // COMMAND CENTER
              </div>
      <div className="flex items-center gap-4">
      <a className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Manual</a>
      <a className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Protocol</a>
      <a className="font-button-text text-button-text text-primary font-bold hover:text-primary transition-colors cursor-pointer" href="#">Status</a>
      </div>
      </footer>
    </>
  );
}
