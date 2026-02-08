import * as React from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type GetEarlyAccessDialogProps = {
  children: React.ReactNode;
};

export function GetEarlyAccessDialog({ children }: GetEarlyAccessDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      const to = "sshankar97@gatech.edu";
      const subject = "Sangam — Early Access Inquiry";
      const body = [
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        `Role/Organization: ${role || "-"}`,
        "",
        "Message:",
        message || "-",
      ].join("\n");

      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 overflow-hidden border-0 shadow-float">
        <div className="relative p-6 sm:p-7 bg-gradient-to-br from-indigo-600 via-indigo-600 to-teal-500">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white rounded-full blur-3xl" />
          </div>
          <DialogHeader className="relative text-left">
            <DialogTitle className="text-white text-2xl">Get Early Access</DialogTitle>
            <DialogDescription className="text-white/90">
              Built for students, by students — tell us what you’re teaching and we’ll follow up.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={onSubmit} className="p-6 sm:p-7 space-y-5 bg-background">
          <div className="grid gap-2">
            <Label htmlFor="gea-name">Full name</Label>
            <Input
              id="gea-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="Jane Doe"
              className="focus-visible:ring-indigo-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="gea-email">Email</Label>
            <Input
              id="gea-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="jane@school.edu"
              className="focus-visible:ring-indigo-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="gea-role">Role / Organization</Label>
            <Input
              id="gea-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Teacher, department, school, district…"
              className="focus-visible:ring-indigo-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="gea-message">What are you hoping to improve?</Label>
            <Textarea
              id="gea-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your goals, constraints, and what tools you use today…"
              className="min-h-[120px] focus-visible:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              className="sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600 text-white hover:bg-teal-500 border-0 sm:w-auto"
            >
              {isSubmitting ? "Opening email…" : "Send inquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}


