import "./App.css";
import Reminder from "./models/reminder";
import ReminderList from "./components/ReminderList";
import { useState } from "react";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
  ]);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
