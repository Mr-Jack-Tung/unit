import { Graph } from '../../../Class/Graph'
import { $Graph } from './$Graph'
import { AsyncComponent } from './AsyncComponent'
import { AsyncG } from './AsyncG'

export const AsyncGraph = (graph: Graph): $Graph => {
  return {
    ...AsyncComponent(graph),
    ...AsyncG(graph),
  }
}
