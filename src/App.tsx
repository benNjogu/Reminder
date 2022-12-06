import "./App.css";
import Reminder from "./models/reminder";
import ReminderList from "./components/ReminderList";

const reminders: Reminder[] = [{ id: 1, title: "Reminder 1" }];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
