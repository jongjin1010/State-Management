const INCREASE = "INCREASE" as const;
const DECREASE = "DECREASE" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = 0;

type CounterActionType =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>;

export default function counter(
  state = initialState,
  action: CounterActionType
) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
