<template>
  <div class="chart-container" :style="{ width: width, height: height }" role="img" :aria-label="title || 'Line chart visualization'">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
// biome-ignore lint/correctness/noUnusedImports: Used in template
import { Line } from "vue-chartjs";

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
);

const props = defineProps<{
	data: {
		labels: string[] | number[];
		datasets: Array<{
			label: string;
			data: number[];
			borderColor?: string;
			backgroundColor?: string;
			borderWidth?: number;
			tension?: number;
		}>;
	};
	title?: string;
	width?: string;
	height?: string;
	yAxisLabel?: string;
	xAxisLabel?: string;
}>();

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const chartData = {
	labels: props.data.labels,
	datasets: props.data.datasets.map((dataset) => ({
		...dataset,
		borderColor: dataset.borderColor || "rgba(54, 162, 235, 1)",
		backgroundColor: dataset.backgroundColor || "rgba(54, 162, 235, 0.1)",
		borderWidth: dataset.borderWidth || 3,
		tension: dataset.tension || 0.3,
	})),
};

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
			position: "top" as const,
			labels: {
				font: {
					size: 14,
				},
			},
		},
		title: {
			display: !!props.title,
			text: props.title || "",
			font: {
				size: 18,
				weight: "bold" as const,
			},
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			title: {
				display: !!props.yAxisLabel,
				text: props.yAxisLabel || "",
				font: {
					size: 14,
				},
			},
			ticks: {
				font: {
					size: 12,
				},
			},
		},
		x: {
			title: {
				display: !!props.xAxisLabel,
				text: props.xAxisLabel || "",
				font: {
					size: 14,
				},
			},
			ticks: {
				font: {
					size: 12,
				},
			},
		},
	},
};
</script>

<style scoped>
.chart-container {
  position: relative;
}
</style>
