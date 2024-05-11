import { createContext, useContext } from "react"
import {PostType} from "../models/PostType";
export type DataPostContextType = {
  dataPost: PostType[]
  setDataPost:(c: PostType[]) => void
}
export const DataPostContext = createContext<DataPostContextType>({
dataPost: [], // set a default value
setDataPost: () => {},
})
export const useDataPostContext = () => useContext(DataPostContext)