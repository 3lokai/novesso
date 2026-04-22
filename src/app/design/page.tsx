import type { Metadata } from "next";

import {
  PageShell,
  Section,
  Container,
  Stack,
  Grid,
} from "@/components/primitives";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Design System",
  description: "Internal Novesso design language reference and component showcase.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function DesignPage() {
  return (
    <PageShell>
      {/* SECTION 1: BRAND FONTS */}
      <Section size="full" className="max-h-[800px] border-b border-border p-0">
        <Grid cols={3} gap="none" className="h-full">
          {/* PRIMARY / DISPLAY */}
          <div className="flex flex-col justify-between border-r border-border bg-background/50 p-12">
            <Stack gap="xl">
              <span className="label text-accent">01 — PRIMARY / DISPLAY</span>
              <h1 className="h-hero">
                Creare
                <br />
                Vita
                <br />
                Moderna
              </h1>
            </Stack>

            <Stack gap="md" className="border-t border-border pt-8">
              <h3 className="font-sans text-lg font-medium">Cormorant Garamond</h3>
              <p className="body text-muted-foreground">
                Weights: Light 300 · Regular 400 · Medium 500 · Semibold 600 · Bold
                700
              </p>
              <p className="body text-muted-foreground">
                Use: Hero headlines, campaign titles, editorial pull-quotes
              </p>
              <p className="accent text-lg text-accent">
                Pairs with Italian luxury sensibility — refined, classical, with
                just enough editorial drama in italics.
              </p>
            </Stack>
          </div>

          {/* SECONDARY / INTERFACE */}
          <div className="flex flex-col justify-between border-r border-border bg-card/30 p-12">
            <Stack gap="xl">
              <span className="label text-accent">02 — SECONDARY / INTERFACE</span>
              <p className="label text-[length:var(--text-h2)] leading-none text-foreground">
                MODERN
                <br />
                LIVING
              </p>
            </Stack>

            <Stack gap="md" className="border-t border-border pt-8">
              <h3 className="font-sans text-lg font-medium">Jost</h3>
              <p className="body text-muted-foreground">
                Weights: ExtraLight 200 · Light 300 · Regular 400 · Medium 500 ·
                SemiBold 600
              </p>
              <p className="body text-muted-foreground">
                Use: Navigation, body copy, UI labels, subheadings, captions, CTAs
              </p>
              <p className="body italic text-accent">
                Geometric sans with architectural precision. The `.label` style
                uses wide letter-spacing (0.35em) in uppercase for nav and UI.
              </p>
            </Stack>
          </div>

          {/* ACCENT / NARRATIVE */}
          <div className="flex flex-col justify-between p-12">
            <Stack gap="xl">
              <span className="label text-accent">03 — ACCENT / NARRATIVE</span>
              <p className="accent text-[length:var(--text-h2)] font-normal leading-tight text-primary">
                Every space tells a story of intention, craft, and beauty.
              </p>
            </Stack>

            <Stack gap="md" className="border-t border-border pt-8">
              <h3 className="font-sans text-lg font-medium">EB Garamond</h3>
              <p className="body text-muted-foreground">
                Weights: Regular 400 · Medium 500 · always italic for accent use
              </p>
              <p className="body text-muted-foreground">
                Use: Pull-quotes, testimonials, editorial captions, storytelling
                overlays
              </p>
              <p className="body text-muted-foreground">
                The `.accent` class uses EB Garamond (`--font-accent` from layout).
              </p>
              <p className="body text-accent">
                A warmer, softer editorial counterpart to the display weight.
                Excellent for intimate storytelling.
              </p>
            </Stack>
          </div>
        </Grid>
      </Section>

      {/* SECTION 2: TYPE SCALE */}
      <Section variant="default">
        <Container>
          <div className="rounded-none bg-card p-8 md:p-16">
            <Stack gap="xl">
              <span className="label text-foreground/40">
                TYPE SCALE — DIGITAL (TOKENS)
              </span>

              <div className="flex flex-wrap items-baseline gap-x-16 gap-y-12">
                <Stack gap="sm" className="items-center">
                  <span className="font-heading text-[length:var(--text-hero)] font-light leading-none">
                    Aa
                  </span>
                  <span className="label text-foreground/40">Hero / --text-hero</span>
                </Stack>
                <Stack gap="sm" className="items-center">
                  <span className="font-heading text-[length:var(--text-h1)] font-light leading-none">
                    Aa
                  </span>
                  <span className="label text-foreground/40">H1 / --text-h1</span>
                </Stack>
                <Stack gap="sm" className="items-center">
                  <span className="font-heading text-[length:var(--text-h2)] font-light leading-none">
                    Aa
                  </span>
                  <span className="label text-foreground/40">H2 / --text-h2</span>
                </Stack>
                <Stack gap="sm" className="items-center">
                  <span className="font-heading text-[length:var(--text-h3)] font-light leading-none">
                    Aa
                  </span>
                  <span className="label text-foreground/40">H3 / --text-h3</span>
                </Stack>
                <Stack gap="sm" className="items-center">
                  <span className="font-heading text-[length:var(--text-h4)] font-light leading-none">
                    Aa
                  </span>
                  <span className="label text-foreground/40">H4 / --text-h4</span>
                </Stack>
                <Stack gap="sm" className="items-center">
                  <span className="font-heading text-[length:var(--text-lead)] font-light leading-none">
                    Aa
                  </span>
                  <span className="label text-foreground/40">Lead / --text-lead</span>
                </Stack>
              </div>

              <div className="flex flex-wrap items-baseline gap-12">
                <Stack gap="sm" className="items-center">
                  <span className="font-sans text-[length:var(--text-body)] font-normal leading-none">
                    Aa
                  </span>
                  <span className="label text-foreground/40">Body / --text-body</span>
                </Stack>
                <Stack gap="sm" className="items-center">
                  <span className="label">AA</span>
                  <span className="label text-foreground/40">Label / --text-label</span>
                </Stack>
              </div>
            </Stack>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: CARDS & SURFACES */}
      <Section variant="muted">
        <Container>
          <Stack gap="xl">
            <span className="label text-accent">04 — CARDS & SURFACES</span>
            <Grid cols={2} gap="lg">
              {/* DEFAULT CARD */}
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Architecture of Intention</CardTitle>
                  <CardDescription>
                    Variant: Default — Clean surface with brand card background.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body text-muted-foreground/80">
                    A stripped-down container that prioritizes content. No heavy
                    shadows, no rounded corners. Just pure architectural logic.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="-ml-4">
                    Explore More
                  </Button>
                </CardFooter>
              </Card>

              {/* OUTLINE CARD */}
              <Card variant="outline">
                <CardHeader>
                  <CardTitle>The Linear Form</CardTitle>
                  <CardDescription>
                    Variant: Outline — Minimalist bordered block.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="body text-muted-foreground/80">
                    Ideal for secondary sections or grouping items on a clean white
                    background. The boundary exists, but it doesn't shout.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="-ml-4">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* SECTION 4: FORMS & DIALOG */}
      <Section>
        <Container>
          <Grid cols={2} gap="lg">
            <Stack gap="lg">
              <span className="label text-accent">05 — ENQUIRY FORM</span>
              <h2 className="h2">Let&apos;s build something beautiful.</h2>
              <Stack gap="md" className="max-w-md pt-8">
                <Stack gap="sm">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </Stack>
                <Stack gap="sm">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your space..." />
                </Stack>
                <div className="pt-4">
                  <Button className="w-full">Submit Enquiry</Button>
                </div>
              </Stack>
            </Stack>

            <Stack gap="lg" className="justify-center">
              <div className="border border-border p-12 text-center">
                <Stack gap="md">
                  <span className="label text-muted-foreground">MODAL OVERLAYS</span>
                  <p className="body italic">
                    Our dialogs are designed to be airy editorial overlays, moving
                    away from boxy UI widgets.
                  </p>
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">Open Editorial Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>The Novesso Philosophy</DialogTitle>
                          <DialogDescription>
                            Editorial transparency and architectural focus.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-12">
                          <p className="body">
                            Our dialogs prioritize whitespace (p-16) and content
                            clarity. By removing heavy padding and sharp borders, we
                            let the narrative breathe. Note the minimalist close
                            interaction.
                          </p>
                        </div>
                        <Stack gap="sm" className="items-center border-t border-border pt-8">
                          <p className="label">Creare Vita Moderna</p>
                        </Stack>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Stack>
              </div>
            </Stack>
          </Grid>
        </Container>
      </Section>
    </PageShell>
  );
}

