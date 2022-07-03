import { Task } from '../models/task.model';
import { Project } from './../models/project.model';
export const projects: Project[] = [
    new Project(1, 'project x', 'X Description', new Date(2022, 5, 1), 0.15, 1, [
        new Task(1, 'Task A - Project X', 'Task A Description', new Date(2022, 5, 7), 1, false),
        new Task(2, 'Task B - Project X', 'Task B Description', new Date(2022, 5, 12), 1, true),
        new Task(3, 'Task C - Project X', 'Task C Description', new Date(2022, 5, 15), 1, false)
    ]),

    new Project(2, 'PROJECT Y', 'Y Description', new Date(2022, 5, 1), 0.15, 2, [
        new Task(1, 'Task A - Project Y', 'Task A Description', new Date(2022, 5, 7), 2, false),
        new Task(2, 'Task B - Project Y', 'Task B Description', new Date(2022, 5, 12), 2, true),
        new Task(3, 'Task C - Project Y', 'Task C Description', new Date(2022, 5, 15), 2, false)
    ]),

    new Project(3, 'pRoJEcT z', 'Z Description', new Date(2022, 5, 1), 0.15, 1, [
        new Task(1, 'Task A - Project Z', 'Task A Description', new Date(2022, 5, 7), 3, false),
        new Task(2, 'Task B - Project Z', 'Task B Description', new Date(2022, 5, 12), 3, true),
        new Task(3, 'Task C - Project Z', 'Task C Description', new Date(2022, 5, 15), 3, false)
    ])

]