import { useSelector, TypedUseSelectorHook } from "react-redux";
import { ReduxStore } from "../redux/types";

export const useReduxSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
