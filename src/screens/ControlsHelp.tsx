// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, ArrowRight, Circle, MousePointerClick, Settings } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-gutter h-touch_target bg-background border-b border-outline-variant dark:border-outline-variant fixed top-0 z-50">
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant hover:text-primary transition-colors flex items-center justify-center w-touch_target h-touch_target rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-headline-lg text-headline-lg font-extrabold text-primary dark:text-primary drop-shadow-[0_0_8px_rgba(74,225,118,0.5)]">TETRIS SUPERVISOR</h1>
      </div>
      <div className="flex items-center gap-2">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant hover:text-primary transition-colors flex items-center justify-center w-touch_target h-touch_target rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary dark:text-primary opacity-80 scale-95 transition-colors flex items-center justify-center w-touch_target h-touch_target rounded" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant hover:text-primary transition-colors flex items-center justify-center w-touch_target h-touch_target rounded" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 mt-[44px] mb-[60px] p-6 lg:p-12 overflow-y-auto">
      <div className="max-w-container_max_width mx-auto">
      <div className="mb-12">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Controls Overview</h2>
      <p className="text-on-surface-variant font-body-md">Master the terminal interface. Precision input is required for optimal performance.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Keyboard Mapping */}
      <section className="bg-surface-container rounded border border-outline-variant p-6">
      <h3 className="font-status-label text-status-label uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                              Hardware Input Mapping
                          </h3>
      <div className="space-y-6">
      {/* Movement */}
      <div className="flex items-center justify-between py-3 border-b border-surface-container-highest">
      <div className="flex flex-col">
      <span className="font-button-text text-button-text text-on-surface">Lateral Movement</span>
      <span className="font-status-label text-status-label text-on-surface-variant opacity-70">Shift piece left or right</span>
      </div>
      <div className="flex gap-2">
      <kbd className="kbd"><ArrowLeft className="text-[20px]" aria-hidden={true} focusable="false" /></kbd>
      <kbd className="kbd"><ArrowRight className="text-[20px]" aria-hidden={true} focusable="false" /></kbd>
      </div>
      </div>
      {/* Rotate */}
      <div className="flex items-center justify-between py-3 border-b border-surface-container-highest">
      <div className="flex flex-col">
      <span className="font-button-text text-button-text text-on-surface">Rotate Piece</span>
      <span className="font-status-label text-status-label text-on-surface-variant opacity-70">Rotate 90° clockwise</span>
      </div>
      <div className="flex gap-2">
      <kbd className="kbd"><Circle className="text-[20px]" aria-hidden={true} focusable="false" /></kbd>
      </div>
      </div>
      {/* Drops */}
      <div className="flex items-center justify-between py-3 border-b border-surface-container-highest">
      <div className="flex flex-col">
      <span className="font-button-text text-button-text text-on-surface">Soft Drop</span>
      <span className="font-status-label text-status-label text-on-surface-variant opacity-70">Accelerate descent</span>
      </div>
      <div className="flex gap-2">
      <kbd className="kbd"><Circle className="text-[20px]" aria-hidden={true} focusable="false" /></kbd>
      </div>
      </div>
      <div className="flex items-center justify-between py-3 border-b border-surface-container-highest">
      <div className="flex flex-col">
      <span className="font-button-text text-button-text text-on-surface">Hard Drop</span>
      <span className="font-status-label text-status-label text-on-surface-variant opacity-70">Instant lock placement</span>
      </div>
      <div className="flex gap-2">
      <kbd className="kbd kbd-space">SPACE</kbd>
      </div>
      </div>
      {/* Utilities */}
      <div className="flex items-center justify-between py-3 border-b border-surface-container-highest">
      <div className="flex flex-col">
      <span className="font-button-text text-button-text text-on-surface">Hold Queue</span>
      <span className="font-status-label text-status-label text-on-surface-variant opacity-70">Swap current piece</span>
      </div>
      <div className="flex gap-2">
      <kbd className="kbd kbd-wide">SHIFT</kbd>
      <span className="text-on-surface-variant flex items-center px-1">or</span>
      <kbd className="kbd">C</kbd>
      </div>
      </div>
      <div className="flex items-center justify-between py-3">
      <div className="flex flex-col">
      <span className="font-button-text text-button-text text-on-surface">System Pause</span>
      <span className="font-status-label text-status-label text-on-surface-variant opacity-70">Suspend current session</span>
      </div>
      <div className="flex gap-2">
      <kbd className="kbd kbd-wide">ESC</kbd>
      <span className="text-on-surface-variant flex items-center px-1">or</span>
      <kbd className="kbd">P</kbd>
      </div>
      </div>
      </div>
      </section>
      {/* Touch Mapping */}
      <section className="bg-surface-container rounded border border-outline-variant p-6 flex flex-col">
      <h3 className="font-status-label text-status-label uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
      <MousePointerClick className="text-[16px]" aria-hidden={true} focusable="false" />
                              Touch Interface Mapping
                          </h3>
      <div className="flex-1 flex flex-col justify-center items-center py-8 relative">
      {/* Abstract Mobile Layout Representation */}
      <div className="w-full max-w-[400px] h-[240px] border border-surface-variant rounded-xl bg-surface relative overflow-hidden flex items-end p-4">
      {/* D-Pad (Left) */}
      <div className="absolute bottom-6 left-6 grid grid-cols-3 grid-rows-3 gap-1 opacity-80">
      <div className="col-start-2 bg-surface-variant border border-outline-variant w-12 h-12 flex items-center justify-center rounded">
      <Circle className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="row-start-2 col-start-1 bg-surface-variant border border-outline-variant w-12 h-12 flex items-center justify-center rounded">
      <ArrowLeft className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="row-start-2 col-start-3 bg-surface-variant border border-outline-variant w-12 h-12 flex items-center justify-center rounded">
      <ArrowRight className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="row-start-3 col-start-2 bg-surface-variant border border-outline-variant w-12 h-12 flex items-center justify-center rounded">
      <Circle className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Action Buttons (Right) */}
      <div className="absolute bottom-6 right-6 flex gap-3 opacity-80">
      <div className="bg-surface-variant border border-outline-variant w-14 h-14 rounded-full flex items-center justify-center relative -top-6">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="bg-surface-variant border border-outline-variant w-16 h-16 rounded-full flex items-center justify-center border-b-2 border-b-primary-container">
      <Circle className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Labels */}
      <div className="w-full grid grid-cols-2 mt-8 gap-4 text-center">
      <div>
      <div className="font-button-text text-button-text text-on-surface">Directional Pad</div>
      <div className="font-status-label text-status-label text-on-surface-variant mt-1">Move / Rotate / Soft Drop</div>
      </div>
      <div>
      <div className="font-button-text text-button-text text-on-surface">Action Cluster</div>
      <div className="font-status-label text-status-label text-on-surface-variant mt-1">Hold / Hard Drop</div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="flex justify-between items-center w-full px-gutter py-2 fixed bottom-0 z-30 bg-surface-container-lowest border-t border-outline-variant dark:border-outline-variant">
      <div className="font-button-text text-button-text text-on-surface flex gap-4">
      <span className="text-primary font-bold cursor-pointer hover:text-primary transition-colors">Manual</span>
      <span className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Protocol</span>
      <span className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Status</span>
      </div>
      <div className="font-status-label text-status-label opacity-60 text-secondary dark:text-secondary">
                  CORE SYSTEM v4.2.0 // COMMAND CENTER
              </div>
      </footer>
    </>
  );
}
