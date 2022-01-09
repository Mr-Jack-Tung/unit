import { Element } from '../../../../../Class/Element'
import { Pod } from '../../../../../pod'
import { System } from '../../../../../system'

export interface I {
  value: string
}

export interface O {}

export default class ColorInput<I, O> extends Element<I, O> {
  constructor(system: System, pod: Pod) {
    super(
      {
        i: ['value'],
        o: [],
      },
      {},
      system,
      pod
    )

    this._defaultState = {
      value: '#000000',
    }
  }
}
