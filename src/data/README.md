# Strategic Projects Data Management

## Overview
Strategic projects are now centrally managed in a single data file that automatically synchronizes across both the **Home** and **Research** pages.

## File Location
```
d:\ACT\src\data\strategicProjects.js
```

## How It Works
- **Single Source of Truth**: All strategic project data is stored in `strategicProjects.js`
- **Automatic Sync**: Changes automatically appear on both Home and Research pages
- **Home Page**: Shows brief summary without "View details" button
- **Research Page**: Shows full details with "View details" button for more information

## Adding a New Strategic Project

1. Open `d:\ACT\src\data\strategicProjects.js`
2. Add a new project object to the `strategicProjects` array:

```javascript
{
  id: "unique-project-id",  // Must be unique, use lowercase-with-dashes
  title: "Full Project Title",
  shortTitle: "Short Title",  // Used for image alt text
  faculty: "Dr. Name, Dr. Name",
  shortDescription: "Brief one-liner for Home page.",
  description: "Full detailed description shown in Research page modal.",
  image: "/media/project-image.png",  // Path to project image
  status: "Strategic Flagship",  // Or your preferred status
  type: "strategic"
}
```

3. Save the file - changes will automatically appear on both pages

## Editing an Existing Project

1. Open `d:\ACT\src\data\strategicProjects.js`
2. Find the project by its `id`
3. Edit any field you want to update
4. Save the file - changes sync automatically

## Removing a Project

1. Open `d:\ACT\src\data\strategicProjects.js`
2. Delete the entire project object
3. Save the file - it will be removed from both pages

## Example

```javascript
export const strategicProjects = [
  {
    id: "thapar-brain",
    title: "Thapar Brain: Neuromarketing for Everyone",
    shortTitle: "Thapar Brain",
    faculty: "ACT Centre interdisciplinary team",
    shortDescription: "Privacy-first neuromarketing platform for attention and engagement analysis.",
    description: "This strategic flagship project aims to democratize neuromarketing...",
    image: "/media/ThaparBrain.png",
    status: "Strategic Flagship",
    type: "strategic"
  },
  {
    id: "new-project",
    title: "Your New Project Title",
    shortTitle: "New Project",
    faculty: "Dr. John Doe, Dr. Jane Smith",
    shortDescription: "A brief summary of what this project does.",
    description: "A comprehensive description of the project goals, methods, and impact...",
    image: "/media/new-project.png",
    status: "Strategic Flagship",
    type: "strategic"
  }
];
```

## Fields Explanation

- **id**: Unique identifier (required for React rendering)
- **title**: Full project title shown on both pages
- **shortTitle**: Abbreviated title for image alt text
- **faculty**: Names of faculty members involved
- **shortDescription**: Brief summary shown on Home page
- **description**: Detailed description shown in Research page modal
- **image**: Path to project image (place image in `public/media/`)
- **status**: Project status badge text
- **type**: Category (keep as "strategic")

## Important Notes

- Always use unique `id` values
- Image paths should start with `/media/`
- The `shortDescription` appears on the Home page
- The full `description` appears in the Research page modal
- No "View details" button appears on the Home page (as per requirements)
