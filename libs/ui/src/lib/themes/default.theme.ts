import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

export const DEFAULT_PRESET = definePreset(Aura, {
  primitive: {
    borderRadius: {
      xl: '25px',
    },
  },
  components: {
    button: {
      root: {
        primary: {
          background: '#143157',
        },
      },
    },
    divider: {
      content: {
        background: 'transparent',
      },
    },
    inputtext: {},
  },
});
