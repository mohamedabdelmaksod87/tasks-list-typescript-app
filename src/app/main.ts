import EventHandlers from "./UI-handlers/EventHandlers";

document.addEventListener("DOMContentLoaded", () => {
  EventHandlers.initialiseTasks();
  EventHandlers.handleNewTask();
  EventHandlers.handleClearTasks();
});
