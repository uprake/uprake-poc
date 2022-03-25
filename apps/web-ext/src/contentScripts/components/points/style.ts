import { CSSProperties } from 'react';

const pointVariantConfig = {
  mpr: {
    bg: 'rgba(244, 63, 94, 1)',
    border: '#e11d48',
  },
};

function pointGen({
  variant,
}: {
  variant: keyof typeof pointVariantConfig;
}): CSSProperties {
  const styles: CSSProperties = {
    padding: 0,
    display: 'flex',
    border: '1.5px solid #e11d48',
    color: 'white',
    borderRadius: '5px',
  };

  styles.backgroundColor = pointVariantConfig[variant].bg;
  styles.borderColor = pointVariantConfig[variant].border;

  return styles;
}

export const style: Record<string, CSSProperties> = {
  mpr: pointGen({ variant: 'mpr' }),
  pointIcon: {
    width: '25px',
    padding: '15px 0px',
    paddingLeft: '10px',
  },
  pointEditor: {
    flexGrow: 1,
  },
};
