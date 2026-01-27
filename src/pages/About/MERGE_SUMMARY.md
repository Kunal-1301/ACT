# People and About Page Merge - Summary

## Overview
The **People** page has been successfully merged into the **About** page. All people-related content (Directory and People & Roles sections) are now part of the About page.

## Changes Made

### 1. **About.jsx** (`d:\ACT\src\pages\About\About.jsx`)
   - **Added**: People data array (imported from People page)
   - **Added**: Import for `People.css` to use existing people styles
   - **Added**: Two new reveal hooks for people sections (`rolesRef`, `directoryRef`)
   - **Added**: "People & Roles" section with role descriptions
   - **Added**: "Directory" section with all team members
   - **Updated**: Core Leadership link to point to `#directory` instead of `/people`
   - **Added**: `id="directory"` to the directory section for anchor linking

### 2. **App.jsx** (`d:\ACT\src\App.jsx`)
   - **Removed**: Import for `People` component
   - **Added**: `Navigate` import from react-router-dom
   - **Updated**: `/people` route now redirects to `/about` page
   - This ensures backward compatibility - any old links to `/people` will automatically redirect

### 3. **People.jsx** (Status: Deprecated)
   - The file still exists but is no longer used in the application
   - Can be safely deleted in the future if desired

## What Happens Now

- **About Page** (`/about`): Contains all content including:
  - Mission, Vision & Values
  - Governance & Structure
  - How ACT Projects Work
  - **People & Roles** (newly added)
  - **Directory** (newly added with all team member profiles)

- **People Page** (`/people`): 
  - Automatically redirects to `/about`
  - Users won't notice any difference
  - All existing links continue to work

## Navigation

Users can access the people information by:
1. Going to `/about` directly
2. Going to `/people` (auto-redirects to `/about`)
3. Clicking "View ACT directory" link in the Core Leadership section
4. The directory section appears at the bottom of the About page

## Visual Structure on About Page

```
About the ACT Centre
├── Mission, Vision & Values
├── Governance & Structure
├── How ACT Projects Work
├── People & Roles ← NEW
│   ├── Core Leadership & Faculty
│   ├── Research Faculty
│   ├── Research Scholars & Associates
│   └── Operations & Support
└── Directory ← NEW
    ├── Dr. Efthymios Constantinides
    ├── Dr. Vinay Kumar
    ├── Dr. Rahul Upadhyay
    ├── Dr. T. Brandon Evans
    ├── Dr. Tanvi Dovedi
    ├── Dr. Manvir Kaur
    ├── Ms. Himanshi Upadhyay
    └── Mr. Kunal Gupta
```

## Benefits

1. **Single Source of Truth**: All institutional information in one place
2. **Better User Experience**: Users don't need to navigate between multiple pages
3. **Backward Compatible**: Old `/people` links still work via redirect
4. **Maintains Styling**: Uses existing People.css for consistent styling
5. **SEO Friendly**: Consolidated content on one page

## Future Cleanup (Optional)

If desired, you can:
1. Delete `d:\ACT\src\pages\People\People.jsx` (no longer in use)
2. Keep `d:\ACT\src\pages\People\People.css` (still used by About page)
OR move People.css into the About folder and update the import

## Testing

✅ Visit `/about` - should show all sections including people
✅ Visit `/people` - should redirect to `/about`
✅ Click "View ACT directory" link - should scroll to directory section
✅ All team member profiles should display correctly
