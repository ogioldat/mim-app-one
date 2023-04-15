export interface IUser {
    displayName: string | null
    uid: string
    role: 'admin' | 'user'
    lastLogin: Date
}
