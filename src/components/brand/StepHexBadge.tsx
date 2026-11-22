interface StepHexBadgeProps {
  num: string;
  stroke: string;
  fill: string;
  textCls: string;
}

export function StepHexBadge({ num, stroke, fill, textCls }: StepHexBadgeProps) {
  return (
    <div className="relative w-11 h-12 grid place-items-center shrink-0">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 44 48" fill="none" aria-hidden="true">
        <polygon points="22,2 41,13 41,35 22,46 3,35 3,13" fill={fill} stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
      <span className={`relative font-display font-black text-sm ${textCls}`}>{num}</span>
    </div>
  );
}
