import { ListTasksController } from '@/application/controllers/ListTasksControllers'

export function makeListTasksController() {
  return new ListTasksController()
}
