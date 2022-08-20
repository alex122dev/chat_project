import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TChatItem, TMessage } from '../../types/types'

type TChatsState = {
    chats: TChatItem[],
    activeChat: number
}

export const initialState: TChatsState = {
    chats: [
        {
            id: 1,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT448a42m-sUuBXnXcT1QEs1J_hebDTqJPZWA&usqp=CAU',
            name: 'Oleg Qwertyuiopasdfghjk',
            lastUpdate: '2022-08-14T08:22:44.570Z',
            isOnline: true,
            isNewMessages: false,
            messages: [
                { text: 'hello', date: '2022-08-14T07:55:44.570Z', isOwner: true },
                { text: 'hi', date: '2022-08-14T08:05:44.570Z', isOwner: false },
                { text: 'How are you?', date: '2022-08-14T08:10:44.570Z', isOwner: false },
                { text: 'I am testing users with long name', date: '2022-08-14T08:22:44.570Z', isOwner: true }
            ]
        },
        {
            id: 2,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEMnb8ecBsXM3ejAdKN_Q247upmy0X_D1tA&usqp=CAU',
            name: 'Stas',
            lastUpdate: '2022-08-16T11:19:44.570Z',
            isOnline: true,
            isNewMessages: false,
            messages: [
                { text: 'Hello', date: '2022-08-16T11:02:44.570Z', isOwner: true },
                { text: 'Give me long text, please', date: '2022-08-16T11:05:44.570Z', isOwner: true },
                { text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam sed asperiores maiores omnis earum, quas illum esse natus molestias quod quibusdam libero provident, quaerat suscipit sint unde eveniet. Accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam sed asperiores maiores omnis earum, quas illum esse natus molestias quod quibusdam libero provident, quaerat suscipit sint unde eveniet. Accusantium?', date: '2022-08-16T11:10:44.570Z', isOwner: false },
                { text: 'thanks', date: '2022-08-16T11:15:44.570Z', isOwner: true },
                { text: 'I give you too', date: '2022-08-16T11:17:44.570Z', isOwner: true },
                { text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam sed asperiores maiores omnis earum, quas illum esse natus molestias quod quibusdam libero provident, quaerat suscipit sint unde eveniet. Accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam sed asperiores maiores omnis earum, quas illum esse natus molestias quod quibusdam libero provident, quaerat suscipit sint unde eveniet. Accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam sed asperiores maiores omnis earum, quas illum esse natus molestias quod quibusdam libero provident, quaerat suscipit sint unde eveniet. Accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam sed asperiores maiores omnis earum, quas illum esse natus molestias quod quibusdam libero provident, quaerat suscipit sint unde eveniet. Accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam sed asperiores maiores omnis earum, quas illum esse natus molestias quod quibusdam libero provident, quaerat suscipit sint unde eveniet. Accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam sed asperiores maiores omnis earum, quas illum esse natus molestias quod quibusdam libero provident, quaerat suscipit sint unde eveniet. Accusantium?', date: '2022-08-16T11:19:44.570Z', isOwner: true },
            ]
        },
        {
            id: 3,
            avatar: undefined,
            name: 'Anna',
            lastUpdate: '2022-08-16T05:15:41.570Z',
            isOnline: true,
            isNewMessages: false,
            messages: [
                { text: 'Hi', date: '2022-08-16T05:13:41.570Z', isOwner: false },
                { text: 'What are you doing?', date: '2022-08-16T05:15:41.570Z', isOwner: false },
            ]
        },
        {
            id: 4,
            avatar: 'https://klike.net/uploads/posts/2020-04/1586073308_2.jpg',
            name: 'Jack',
            lastUpdate: '2022-08-17T19:45:23.607Z',
            isOnline: false,
            isNewMessages: false,
            messages: [
                { text: 'Hi', date: '2022-08-17T19:15:23.607Z', isOwner: true },
                { text: 'I need your help', date: '2022-08-17T19:17:23.607Z', isOwner: true },
                { text: 'Could you send many messages for me?', date: '2022-08-17T19:19:23.607Z', isOwner: true },
                { text: 'Hi)', date: '2022-08-17T19:22:23.607Z', isOwner: false },
                { text: 'no problem', date: '2022-08-17T19:24:23.607Z', isOwner: false },
                { text: 'Yes, of course', date: '2022-08-17T19:25:23.607Z', isOwner: false },
                { text: 'F', date: '2022-08-17T19:31:23.607Z', isOwner: false },
                { text: 'R', date: '2022-08-17T19:32:23.607Z', isOwner: false },
                { text: 'O', date: '2022-08-17T19:33:23.607Z', isOwner: false },
                { text: 'N', date: '2022-08-17T19:34:23.607Z', isOwner: false },
                { text: 'T', date: '2022-08-17T19:35:23.607Z', isOwner: false },
                { text: 'E', date: '2022-08-17T19:36:23.607Z', isOwner: false },
                { text: 'N', date: '2022-08-17T19:37:23.607Z', isOwner: false },
                { text: 'D', date: '2022-08-17T19:38:23.607Z', isOwner: false },
                { text: 'D', date: '2022-08-17T19:39:23.607Z', isOwner: false },
                { text: 'E', date: '2022-08-17T19:40:23.607Z', isOwner: false },
                { text: 'V', date: '2022-08-17T19:41:23.607Z', isOwner: false },
                { text: 'thanks', date: '2022-08-17T19:45:23.607Z', isOwner: true },
            ]
        },
        {
            id: 5,
            avatar: 'https://s.mind.ua/img/forall/a/202254/0.jpg?1619607499',
            name: 'Alex',
            lastUpdate: '2022-07-01T13:54:23.607Z',
            isOnline: true,
            isNewMessages: false,
            messages: [
                { text: 'Hello', date: '2022-07-01T13:45:23.607Z', isOwner: true },
                { text: 'When can you fix my car?', date: '2022-07-01T13:46:23.607Z', isOwner: true },
                { text: 'Hi', date: '2022-07-01T13:52:23.607Z', isOwner: false },
                { text: 'I think tomorrow after 5pm', date: '2022-07-01T13:54:23.607Z', isOwner: false },
            ]
        },
        {
            id: 6,
            avatar: 'https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg',
            name: 'Vika',
            lastUpdate: '2022-01-01T14:15:23.607Z',
            isOnline: true,
            isNewMessages: false,
            messages: [
                { text: 'Hello', date: '2022-01-01T13:54:23.607Z', isOwner: false },
                { text: 'How do you feel?', date: '2022-01-01T13:57:23.607Z', isOwner: false },
                { text: 'Hey', date: '2022-01-01T14:10:23.607Z', isOwner: true },
                { text: 'I sleep all day', date: '2022-01-01T14:12:23.607Z', isOwner: true },
                { text: 'It was a great party', date: '2022-01-01T14:15:23.607Z', isOwner: true },
            ]
        },
        {
            id: 7,
            avatar: 'https://images.pexels.com/photos/45208/world-earth-planet-globe-45208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Den',
            lastUpdate: '2022-06-10T22:18:23.607Z',
            isOnline: false,
            isNewMessages: false,
            messages: [
                { text: 'Hi', date: '2022-06-10T22:15:23.607Z', isOwner: true },
                { text: 'Why are you offline all time', date: '2022-06-10T22:16:23.607Z', isOwner: true },
                { text: 'I have a business with you', date: '2022-06-10T22:18:23.607Z', isOwner: true },
            ]
        },
        {
            id: 8,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0caSQxj3Q3bDaxKmrhMEJaQD6bXtdhx0iw&usqp=CAU',
            name: 'Viktor',
            lastUpdate: '',
            isOnline: false,
            isNewMessages: false,
            messages: [
            ]
        },
        {
            id: 9,
            avatar: 'https://mon.medikforum.ru/uploads/posts/2013-07/thumbs/1374841596_hyu-dzhekman2.jpg',
            name: 'Logan',
            lastUpdate: '',
            isOnline: true,
            isNewMessages: false,
            messages: [
            ]
        },
        {
            id: 10,
            avatar: 'https://www.meme-arsenal.com/memes/eb296dcea832f5205374df92cea90d27.jpg',
            name: 'The Rock',
            lastUpdate: '',
            isOnline: false,
            isNewMessages: false,
            messages: [
            ]
        },
    ],
    activeChat: 0
}

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setActiveChat: (state, action: PayloadAction<number>) => {
            state.activeChat = action.payload
        },
        setNewMessage: (state, action: PayloadAction<{ id: number, messageObj: TMessage }>) => {
            const findChat = state.chats.find(el => el.id === action.payload.id)
            if (findChat) {
                findChat.messages.push(action.payload.messageObj)
                findChat.lastUpdate = action.payload.messageObj.date
            }
        },
        initChats: (state, action: PayloadAction<TChatItem[]>) => {
            state.chats = action.payload
        },
        initActiveChat: (state, action: PayloadAction<number>) => {
            state.activeChat = action.payload
        },
        setIsNewMessages: (state, action: PayloadAction<{ chatId: number, IsNewMessages: boolean }>) => {
            const findChat = state.chats.find(el => el.id === action.payload.chatId)
            if (findChat) {
                findChat.isNewMessages = action.payload.IsNewMessages
            }
        },
    }
})

export const { setActiveChat, setNewMessage, initChats, initActiveChat, setIsNewMessages } = chatsSlice.actions

export const chatsReducer = chatsSlice.reducer