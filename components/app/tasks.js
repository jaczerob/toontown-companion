import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Tasks({className, tasks}) {
    let gridFmt = '';
    if (tasks.length === 1)
        gridFmt = 'grid-flow-col';
    else
        gridFmt = 'grid-cols-2'

    return (
        <div className={className}>
            <div className={`grid sm:grid-cols-1 md:${gridFmt} lg:grid-flow-col gap-4 border-transparent`}>
                {tasks.map((task, i) =>
                    (
                        <Task
                            key={i}
                            className={`w-64 h-64 relative overflow-hidden border-transparent bg-[url(/resources/task_template.png)] bg-contain`}
                            taskName={task.objective.text}
                            taskLocation={task.objective.where}
                            taskProgress={task.objective.progress.text}
                            taskReceiver={task.from.name}
                            taskReceiverZone={task.from.zone}
                            taskReceiverNeighborhood={task.from.neighborhood}
                            taskReward={task.reward}
                        />
                    )
                )}
            </div>
        </div>
    )
}

function Task({
                  className,
                  taskName,
                  taskLocation,
                  taskProgress,
                  taskReceiver,
                  taskReceiverZone,
                  taskReceiverNeighborhood,
                  taskReward
              }) {
    let objective = ''
    if (taskProgress === 'Complete') {
        objective = `Return to ${taskReceiver} at ${taskReceiverZone} ${taskReceiverNeighborhood}`
    } else {
        objective = taskProgress
    }

    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className={`text-center`}>WANTED</CardTitle>
            </CardHeader>
            <CardContent className={`text-center`}>
                <span>{taskName}</span><br/>
                <span>{taskLocation}</span><br/>
                <span>{objective}</span><br/><br/>
                <span className={`text-red-500`}>Reward: {taskReward}</span>
            </CardContent>
        </Card>
    );
}