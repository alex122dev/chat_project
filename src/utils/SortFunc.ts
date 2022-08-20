import { TChatItem } from "../types/types"

export const sortLastMessageDate = (a: TChatItem, b: TChatItem) => {

    return +new Date(b.lastUpdate) - +new Date(a.lastUpdate)
}