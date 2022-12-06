import "./App.css";
import Reminder from "./models/reminder";
import ReminderList from "./components/ReminderList";
import reminderService from "./services/reminder";
import { useEffect, useState } from "react";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
