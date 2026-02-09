import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DEMO_VIDEO_SRC = "/SangamDemo.mp4";

type DemoVideoDialogProps = {
  children: React.ReactNode;
};

export function DemoVideoDialog({ children }: DemoVideoDialogProps) {
  const [open, setOpen] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-[min(1024px,96vw)] p-0 overflow-hidden border border-border shadow-float rounded-2xl bg-card"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">Sangam — 3-Min Demo</DialogTitle>
        <div className="relative aspect-video bg-black/90 rounded-t-2xl">
          <video
            ref={videoRef}
            src={DEMO_VIDEO_SRC}
            controls
            playsInline
            className="w-full h-full object-contain rounded-t-2xl"
            preload="metadata"
          />
        </div>
        <div className="px-4 py-3 border-t border-border bg-muted/30">
          <p className="text-sm font-medium text-foreground">Sangam — 3-Min Demo</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            See how teachers use Sangam to turn classroom data into action.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
