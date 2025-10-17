export function parseCSV(csvText: string) {
	const lines = csvText.trim().split("\n");
	const headers = lines[0].split(",").map((h) => h.trim());

	const data = lines.slice(1).map((line) => {
		const values = line.split(",").map((v) => v.trim());
		const obj: Record<string, string | number> = {};

		headers.forEach((header, index) => {
			const value = values[index];
			// Try to parse as number
			const numValue = parseFloat(value);
			obj[header] = Number.isNaN(numValue) ? value : numValue;
		});

		return obj;
	});

	return { headers, data };
}

export async function loadCSV(path: string) {
	const response = await fetch(path);
	const text = await response.text();
	return parseCSV(text);
}
