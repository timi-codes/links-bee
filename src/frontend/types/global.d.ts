// types/global.d.ts

export {}

declare global {
    interface ILink {
        bee_id: string
        name: string
        original_url: string
        expires_at: string
        last_visited_at: string
        created_at: string
        updated_at: string
        owner: IUser | null
    }
    interface IUser {
        id: string
        email: string
        name: string
        last_login: string
        created_at: string
        updated_at: string
    }
  }