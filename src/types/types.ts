export type TAvatar = string | undefined

export type TChatItem = {
    id: number
    avatar: TAvatar
    name: string
    lastUpdate: Date | string
    isOnline: boolean
    isNewMessages: boolean
    messages: TMessage[]
}

export type TMessage = {
    text: string
    date: Date | string
    isOwner: boolean
}


export type TMessageResponse = {
    categories: any[]
    created_at: Date
    icon_url: string
    id: string
    updated_at: Date
    url: string
    value: string
}
