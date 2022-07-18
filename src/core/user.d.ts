/*
 * @Author: saber2pr
 * @Date: 2019-05-20 23:10:49
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-24 13:15:45
 */
export type Users = Array<User>

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string | null
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: "User" | "Organization"
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}
