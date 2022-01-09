import { Element } from '../../../../../Class/Element'
import { Pod } from '../../../../../pod'
import { System } from '../../../../../system'
import { Dict } from '../../../../../types/Dict'

export interface I {
  style: Dict<string>
  key: string
}

export interface O {}

export default class PhoneKeyboardKey extends Element<I, O> {
  constructor(system: System, pod: Pod) {
    super(
      {
        i: ['style', 'key', 'altKey'],
        o: [],
      },
      {},
      system,
      pod
    )
  }
}
