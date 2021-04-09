function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: (taskIndex) => {
      task.complete = true;
    },
    logState: (taskIndex) => {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed


