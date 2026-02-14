import { ChartOptions } from 'chart.js';
// import { ChartOptionsDoughnut } from './chart-doughnut';

const CHART_COLORS: { [x: string]: string } = {
  cyan: '#06b6d4',
  orange: '#f97316',
  yellow: '#eab308',
  emerald: '#10b981',
  sky: '#0ea5e9',
  indigo: '#6366f1',
  pink: '#ec4899',
  teal: '#14b8a6',
  red: '#ef4444',
  amber: '#f59e0b',
  blue: '#2563eb',
  fuchsia: '#d946ef',
  rose: '#f43f5e',
};

const CHART_COLORS_ORDER = Object.keys(CHART_COLORS);

const addColor = (index: number) => {
  const colorIndex = index % Object.keys(CHART_COLORS).length;
  return CHART_COLORS[CHART_COLORS_ORDER[colorIndex]];
};

// const pluginEmptyDoughnut = {
//   id: 'emptyDoughnut',
//   afterDraw(chart, args, options) {
//     const { datasets } = chart.data;
//     const { color, width, radiusDecrease } = options;
//     let hasData = false;

//     for (let i = 0; i < datasets.length; i += 1) {
//       const dataset = datasets[i];
//       hasData |= dataset.data.length > 0;
//     }

//     if (!hasData) {
//       const {
//         chartArea: { left, top, right, bottom },
//         ctx,
//       } = chart;
//       const centerX = (left + right) / 2;
//       const centerY = (top + bottom) / 2;
//       const r = Math.min(right - left, bottom - top) / 2;

//       ctx.beginPath();
//       ctx.lineWidth = width || 2;
//       ctx.strokeStyle = color || 'rgba(255, 128, 0, 0.5)';
//       ctx.arc(centerX, centerY, r - radiusDecrease || 0, 0, 2 * Math.PI);
//       ctx.stroke();
//     }
//   },
// };

const setDefaultOptionsDoughnut = (
  textColor: string
): ChartOptions<'doughnut'> => {
  return {
    responsive: true,
    cutout: '80%',
    circumference: 360,
    plugins: {
      legend: {
        align: 'center',
        position: 'right',
        display: true,
        fullSize: true,
        labels: {
          color: textColor,
        },
      },
      //   emptyDoughnut: {
      //     color: 'rgba(255, 128, 0, 0.5)',
      //     width: 2,
      //     radiusDecrease: 20,
      //   },
    },
  };
};

export const ChartUtils = {
  CHART_COLORS,
  addColor,
  setDefaultOptionsDoughnut,
};
