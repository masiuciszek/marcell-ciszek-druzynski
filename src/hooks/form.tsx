import { setNestedObjectValues } from "@/util"
import { useEffect, useReducer, Reducer } from "react"

interface State {
  values: Record<string, string>
  errors: Record<string, string>
  submitErrors: Record<string, string>
  touched: Record<string, boolean>
  isSubmitting: boolean
}

const SET_FIELD_VALUE = "SET_FIELD_VALUE"
const SET_FIELD_TOUCHED = "SET_FIELD_TOUCHED"
const SET_FIELD_ERRORS = "SET_FIELD_ERRORS"
const SUBMIT_ATTEMPT = "SUBMIT_ATTEMPT"
const SUBMIT_SUCCESS = "SUBMIT_SUCCESS"
const SUBMIT_FAILURE = "SUBMIT_FAILURE"
const SET_ERRORS = "SET_ERRORS"

type Action =
  | { type: typeof SET_FIELD_VALUE; payload: Record<string, string> }
  | { type: typeof SET_FIELD_TOUCHED; payload: Record<string, boolean> }
  | { type: typeof SET_FIELD_ERRORS; payload: Record<string, string> }
  | { type: typeof SUBMIT_ATTEMPT }
  | { type: typeof SUBMIT_SUCCESS }
  | { type: typeof SUBMIT_FAILURE; payload: Record<string, string> }
  | { type: typeof SET_ERRORS; payload: Record<string, string> }

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      }
    case SET_FIELD_TOUCHED:
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload,
        },
      }
    case SET_FIELD_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }
    case SUBMIT_ATTEMPT:
      return {
        ...state,
        isSubmitting: true,
        touched: setNestedObjectValues(state.values, true),
      }
    case SUBMIT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
      }
    case SUBMIT_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        submitErrors: action.payload,
      }
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      throw new Error(`could not parse action.type`)
  }
}

interface InitialValues {
  values: {
    [key: string]: string
  }
  validate: (values: Record<string, string>) => Record<string, string>
  onSubmit: (values: Record<string, string>) => Promise<void>
}

const useForm = ({ values, validate, onSubmit }: InitialValues) => {
  if (!onSubmit) {
    throw new Error("you forgot to pass a onSubmit function")
  }
  const [state, dispatch] = useReducer(reducer, {
    values,
    errors: {},
    submitErrors: {},
    touched: {},
    isSubmitting: false,
  })

  useEffect(() => {
    if (validate) {
      const errors = validate(state.values)
      dispatch({ type: SET_FIELD_ERRORS, payload: errors })
    }
  }, [state.values, validate])

  const getPropField = (fieldName: string) => ({
    value: state.values[fieldName],
    onChange: handleChange(fieldName),
    onBlur: handleBlur(fieldName),
  })

  const handleChange =
    (fieldName: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch({ type: SET_FIELD_VALUE, payload: { [fieldName]: event.target.value } })
    }

  const handleBlur =
    (fieldName: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      event.persist()
      dispatch({ type: SET_FIELD_TOUCHED, payload: { [fieldName]: true } })
    }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch({ type: SUBMIT_ATTEMPT })
    const errors = validate(state.values)
    if (Object.keys(errors).length === 0) {
      try {
        await onSubmit(state.values)
        dispatch({ type: SUBMIT_SUCCESS })
      } catch (error) {
        dispatch({ type: SUBMIT_FAILURE, payload: error })
      }
    } else {
      dispatch({ type: SET_ERRORS, payload: errors })
      // dispatch({ type: SUBMIT_FAILURE, payload: errors })
    }
  }

  return { getPropField, handleSubmit, ...state }
}

export default useForm
