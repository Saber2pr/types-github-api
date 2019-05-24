/*
 * @Author: saber2pr
 * @Date: 2019-05-24 11:22:13
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-24 11:23:29
 */
export interface Event {
  id: string
  type: string
  actor: {
    id: number
    login: string
    display_login: string
    gravatar_id: string
    url: string
    avatar_url: string
  }
  repo: {
    id: number
    name: string
    url: string
  }
  payload: {
    action: string
  }
  public: boolean
  created_at: string
  org?: {
    id: number
    login: string
    gravatar_id: string
    url: string
    avatar_url: string
  }
}

export type Events = Array<Event>
