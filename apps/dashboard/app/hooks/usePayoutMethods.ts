import { useReducer, useCallback, useEffect } from "react";
import { FormState, PayoutMethod } from "../types/common";

type Action =
  | { type: "INIT"; methods: PayoutMethod[] }
  | { type: "ADD_OR_UPDATE"; form: FormState; idx: number | null }
  | { type: "REMOVE"; idx: number }
  | { type: "SET_DEFAULT"; idx: number };

function reducer(state: PayoutMethod[], action: Action): PayoutMethod[] {
  let next: PayoutMethod[];

  switch (action.type) {
    case "INIT":
      next = action.methods;
      break;

    case "ADD_OR_UPDATE": {
      const { form, idx } = action;

      // Create the new entry based on type
      const entry =
        form.type === "Bank Transfer"
          ? {
              type: "Bank Transfer" as const,
              isDefault: idx !== null ? state[idx]?.isDefault || false : false,
              accountName: form.accountName,
              accountNumber: form.accountNumber,
              bank: form.bank,
            }
          : {
              type: "Mobile Money" as const,
              isDefault: idx !== null ? state[idx]?.isDefault || false : false,
              accountName: form.accountName,
              accountNumber: form.accountNumber,
              networkProvider: form.networkProvider,
            };

      // Update or add the entry
      if (idx === null) {
        // Adding new method
        next = [...state, entry as PayoutMethod];
      } else {
        // Editing existing method
        next = state.map((m, i) => (i === idx ? (entry as PayoutMethod) : m));
      }
      break;
    }

    case "REMOVE":
      next = state.filter((_, i) => i !== action.idx);
      break;

    case "SET_DEFAULT":
      next = state.map((m, i) => ({ ...m, isDefault: i === action.idx }));
      break;

    default:
      return state;
  }

  if (!next.some((m) => m.isDefault) && next.length > 0) {
    next[0] = { ...next[0], isDefault: true } as PayoutMethod;
  }

  return next;
}

export function usePayoutMethods(initialFromApi: PayoutMethod[]) {
  const [methods, dispatch] = useReducer(reducer, initialFromApi);

  // sync reducer whenever backend data changes
  useEffect(() => {
    dispatch({ type: "INIT", methods: initialFromApi });
  }, [initialFromApi]);

  const addOrUpdate = useCallback(
    (form: FormState, idx: number | null) =>
      dispatch({ type: "ADD_OR_UPDATE", form, idx }),
    [],
  );
  const remove = useCallback(
    (idx: number) => dispatch({ type: "REMOVE", idx }),
    [],
  );
  const setDefault = useCallback(
    (idx: number) => dispatch({ type: "SET_DEFAULT", idx }),
    [],
  );

  return { methods, addOrUpdate, remove, setDefault };
}
