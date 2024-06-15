# To-Do List Project

## Features

- **Filtering**: Users can filter tasks based on whether they are marked as done or not.

- **Sorting**: Tasks can be sorted to show the newest tasks first or the oldest tasks first.

- **Local Storage Integration**: Tasks are saved in the browser's local storage, so they persist between sessions.

## Testing Guidance

### Filtering

1. Add multiple tasks to your to-do list.
2. Mark some tasks as done and leave others unmarked.
3. Use the filtering feature to filter tasks by marked or unmarked status.
4. Verify that the tasks are filtered correctly, with either all marked tasks at the top or all unmarked tasks at the top, depending on your selection.

### Sorting

1. Ensure your tasks have different dates/times of creation or completion.
2. Use the sorting feature to arrange tasks from newest to oldest or oldest to newest.
3. Check that the tasks are displayed in the correct chronological order based on your selection.

### Local Storage

1. Add, mark tasks as described above.
2. Close the browser or refresh the page.
3. Reopen the browser or page and verify that all tasks are still present and in the same state (marked/unmarked) as before.

Remember to clear your local storage if you want to start testing from a clean slate.
