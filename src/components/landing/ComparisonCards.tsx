import SectionWrapper from './SectionWrapper';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ComparisonRow {
  feature: string;
  programme: string;
  functional: string;
  gp: string;
  coaching: string;
  diy: string;
  tooltips: Record<string, string>;
}

const rows: ComparisonRow[] = [
  {
    feature: "Fixes the Biological Root Cause",
    programme: "Yes", functional: "Yes", gp: "Partial", coaching: "Partial", diy: "Partial",
    tooltips: {
      programme: "Targets autonomic dysregulation, HPA axis recovery, and circadian rhythm restoration at the physiological level.",
      functional: "Addresses root causes through lab testing, nutrition, and supplementation protocols.",
      gp: "Typically manages symptoms with medication; root-cause investigation is limited by time constraints.",
      coaching: "Focuses on mindset and behaviour change, which can indirectly influence biology but doesn't address it directly.",
      diy: "Hit-and-miss; without professional guidance, most people optimise the wrong variables.",
    },
  },
  {
    feature: "Low Cognitive Load",
    programme: "Yes", functional: "No", gp: "Yes", coaching: "No", diy: "No",
    tooltips: {
      programme: "Designed for executives who are already overwhelmed — minimal decisions, maximum impact.",
      functional: "Requires significant self-management: tracking supplements, diet changes, and multiple practitioner visits.",
      gp: "Simple: attend appointment, take prescription. Low effort required from the patient.",
      coaching: "Demands consistent journaling, reflection, and practice between sessions.",
      diy: "Requires extensive research, self-experimentation, and ongoing optimisation — a second job.",
    },
  },
  {
    feature: "Rapid Impact (4-8 Weeks)",
    programme: "Yes", functional: "No", gp: "Yes", coaching: "No", diy: "No",
    tooltips: {
      programme: "Most participants report measurable shifts in energy, sleep quality, and mental clarity within 4–8 weeks.",
      functional: "Typically requires 3–6 months for noticeable results due to iterative testing cycles.",
      gp: "Medication can provide rapid symptom relief, though underlying issues may persist.",
      coaching: "Meaningful behavioural change usually takes 3–6 months of consistent practice.",
      diy: "Results are unpredictable and often take months of trial and error.",
    },
  },
  {
    feature: "Zero Downtime Required",
    programme: "Yes", functional: "Yes", gp: "No", coaching: "Yes", diy: "Yes",
    tooltips: {
      programme: "Integrates into your existing schedule — no sabbaticals, no retreats, no time off work.",
      functional: "Appointments can be scheduled flexibly; no downtime required.",
      gp: "May require time off for appointments, procedures, or medication adjustment periods.",
      coaching: "Sessions are typically scheduled around your calendar with minimal disruption.",
      diy: "Self-directed, so you control the timing entirely.",
    },
  },
  {
    feature: "Managed Process",
    programme: "Partial", functional: "No", gp: "Yes", coaching: "No", diy: "No",
    tooltips: {
      programme: "Core protocol is managed for you; some elements require your active participation.",
      functional: "You are largely responsible for implementing recommendations between appointments.",
      gp: "The medical system manages your care pathway, referrals, and prescriptions.",
      coaching: "You drive the agenda; the coach facilitates but doesn't manage the process.",
      diy: "Entirely self-managed — you are researcher, practitioner, and patient.",
    },
  },
];

const columns = [
  { key: 'programme' as const, label: 'The Programme', highlighted: true },
  { key: 'functional' as const, label: 'Functional Medicine' },
  { key: 'gp' as const, label: 'Standard Medical (GP)' },
  { key: 'coaching' as const, label: 'Executive Coaching' },
  { key: 'diy' as const, label: 'DIY / Bio-Hacking' },
];

function CellValue({ value, highlighted, tooltip }: { value: string; highlighted?: boolean; tooltip: string }) {
  const base = "font-body text-sm cursor-help";
  let display: React.ReactNode;
  if (value === "Yes") display = <span className={cn(base, highlighted ? "text-foreground font-medium" : "text-foreground/70")}>✓</span>;
  else if (value === "No") display = <span className={cn(base, "text-muted-foreground")}>✗</span>;
  else display = <span className={cn(base, "text-muted-foreground")}>~</span>;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-muted/50 transition-colors">
          {display}
        </span>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-xs text-xs leading-relaxed">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

export default function ComparisonCards() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-sky mb-6">
          Comparison
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-16 leading-tight">
          How This Differs<br />
          <span className="text-gradient-sky">From Other Approaches</span>
        </h2>

        <TooltipProvider delayDuration={200}>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="font-body text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground pb-4 pr-6 w-48">
                    Feature / Outcome
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={cn(
                        "font-body text-xs font-medium uppercase tracking-[0.15em] pb-4 px-4 text-center",
                        col.highlighted ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="font-body text-sm text-foreground/80 py-5 pr-6">
                      {row.feature}
                    </td>
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={cn(
                          "text-center py-5 px-4",
                          col.highlighted && "bg-primary/5"
                        )}
                      >
                        <CellValue value={row[col.key]} highlighted={col.highlighted} tooltip={row.tooltips[col.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-6">
            {rows.map((row, i) => (
              <div key={i} className="border border-border p-6 rounded-[3px]">
                <p className="font-body text-sm font-medium text-foreground mb-4">{row.feature}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {columns.map((col) => (
                    <div key={col.key} className="flex items-center gap-2">
                      <CellValue value={row[col.key]} highlighted={col.highlighted} tooltip={row.tooltips[col.key]} />
                      <span className={cn(
                        "font-body text-xs",
                        col.highlighted ? "text-primary" : "text-muted-foreground"
                      )}>
                        {col.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </SectionWrapper>
  );
}
