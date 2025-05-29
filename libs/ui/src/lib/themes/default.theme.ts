import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

export const DEFAULT_PRESET = definePreset(Aura, {
  components: {
    inputgroup: {
      addon: {
        color: '#2c3e50',
        border: {
          radius: '25px',
        },
      },
    },
    inputtext: {},
  },
});
