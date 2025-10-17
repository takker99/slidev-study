# Component Documentation

This document describes the reusable components created for the research presentation.

## Slide Components

### TitleSlide

A full-screen title slide with gradient background for the presentation opening.

**Props:**
- `title` (string, required): Main title of the presentation
- `subtitle` (string, optional): Subtitle or secondary information
- `author` (string, optional): Author name
- `affiliation` (string, optional): Institution or affiliation
- `date` (string, optional): Presentation date

**Example:**
```vue
<TitleSlide 
  title="Research Title"
  subtitle="Subtitle Information"
  author="Author Name"
  affiliation="University Name"
  date="2024-10-17"
/>
```

### SectionSlide

A centered section divider slide with gradient background.

**Props:**
- `title` (string, required): Section title
- `sectionNumber` (number, optional): Section number to display

**Example:**
```vue
<SectionSlide 
  title="Research Background"
  :sectionNumber="1"
/>
```

### ContentSlide

A standard content slide with a header and content area.

**Props:**
- `title` (string, required): Slide title

**Example:**
```vue
<ContentSlide title="Research Objectives">
  <p>Your content here...</p>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
</ContentSlide>
```

### TwoColumnLayout

A two-column layout for organizing content side-by-side.

**Props:**
- `title` (string, optional): Slide title

**Slots:**
- `left`: Content for the left column
- `right`: Content for the right column

**Example:**
```vue
<TwoColumnLayout title="Comparison">
  <template #left>
    <h3>Method A</h3>
    <p>Details about method A...</p>
  </template>
  
  <template #right>
    <h3>Method B</h3>
    <p>Details about method B...</p>
  </template>
</TwoColumnLayout>
```

## Chart Components

All chart components use Chart.js for data visualization.

### BarChart

Displays data as vertical bars.

**Props:**
- `data` (object, required): Chart data
  - `labels` (string[]): X-axis labels
  - `datasets` (array): Array of dataset objects
    - `label` (string): Dataset label
    - `data` (number[]): Data values
    - `backgroundColor` (string | string[], optional): Bar colors
    - `borderColor` (string | string[], optional): Border colors
    - `borderWidth` (number, optional): Border width
- `title` (string, optional): Chart title
- `width` (string, optional): Chart width (default: "100%")
- `height` (string, optional): Chart height (default: "100%")
- `yAxisLabel` (string, optional): Y-axis label
- `xAxisLabel` (string, optional): X-axis label

**Example:**
```vue
<BarChart 
  :data="{
    labels: ['A', 'B', 'C'],
    datasets: [{
      label: 'Dataset 1',
      data: [10, 20, 30],
      backgroundColor: 'rgba(54, 162, 235, 0.7)'
    }]
  }"
  title="Sample Bar Chart"
  yAxisLabel="Value"
  width="100%"
  height="400px"
/>
```

### LineChart

Displays data as connected lines, ideal for showing trends over time.

**Props:**
- `data` (object, required): Chart data
  - `labels` (string[] | number[]): X-axis labels or values
  - `datasets` (array): Array of dataset objects
    - `label` (string): Dataset label
    - `data` (number[]): Data values
    - `borderColor` (string, optional): Line color
    - `backgroundColor` (string, optional): Fill color
    - `borderWidth` (number, optional): Line width
    - `tension` (number, optional): Line curve tension (0-1)
- `title` (string, optional): Chart title
- `width` (string, optional): Chart width
- `height` (string, optional): Chart height
- `yAxisLabel` (string, optional): Y-axis label
- `xAxisLabel` (string, optional): X-axis label

**Example:**
```vue
<LineChart 
  :data="{
    labels: [0, 7, 14, 28],
    datasets: [{
      label: 'Growth Over Time',
      data: [100, 150, 200, 280],
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.3
    }]
  }"
  title="Time Series Data"
  xAxisLabel="Days"
  yAxisLabel="Value"
/>
```

### ScatterChart

Displays data points on an X-Y coordinate system.

**Props:**
- `data` (object, required): Chart data
  - `datasets` (array): Array of dataset objects
    - `label` (string): Dataset label
    - `data` (array): Array of {x, y} objects
    - `backgroundColor` (string, optional): Point color
    - `borderColor` (string, optional): Point border color
    - `borderWidth` (number, optional): Border width
- `title` (string, optional): Chart title
- `width` (string, optional): Chart width
- `height` (string, optional): Chart height
- `yAxisLabel` (string, optional): Y-axis label
- `xAxisLabel` (string, optional): X-axis label

**Example:**
```vue
<ScatterChart 
  :data="{
    datasets: [{
      label: 'Sample Points',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
        { x: 20, y: 30 }
      ]
    }]
  }"
  xAxisLabel="X Variable"
  yAxisLabel="Y Variable"
/>
```

## Data Files

CSV data files are stored in the `data/` directory:

- `soil_properties.csv`: Physical properties of soil samples
- `strength_development.csv`: Strength measurements over curing period
- `quality_control.csv`: Quality control parameters
- `cost_environmental.csv`: Cost and environmental impact data

### Using CSV Data

You can load and parse CSV data using the utility functions:

```typescript
import { loadCSV } from './components/utils'

// In your component
const { data, headers } = await loadCSV('/data/soil_properties.csv')
```

## Styling Guidelines

### Colors

The presentation uses a consistent color scheme:

- **Primary Blue**: `#3B82F6` (titles, accents)
- **Teal**: `#14B8A6` (section slides)
- **Green**: `#10B981` (success, positive data)
- **Red/Pink**: `#EF4444` (warnings, contrast)
- **Purple**: `#8B5CF6` (highlights)

### Typography

- **Headings**: Bold, clear hierarchy
- **Body Text**: 18-20px for readability
- **Labels**: 14-16px
- **Code/Data**: Monospace font

### Spacing

- Use consistent padding: `p-4`, `p-6`, `p-8`, `p-12`
- Gap between elements: `gap-4`, `gap-6`, `gap-8`
- Margins: `mb-4`, `mb-6`, `mb-8`

## Best Practices

1. **Keep slides focused**: One main idea per slide
2. **Use visual hierarchy**: Larger for important, smaller for details
3. **Consistent colors**: Use the same colors for the same types of data
4. **Readable charts**: Ensure axis labels and legends are clear
5. **White space**: Don't overcrowd slides
6. **Animations**: Use sparingly with `v-click` for progressive reveal

## Examples

See `slides.md` for complete examples of how these components are used in the steel slag research presentation.
