/*
 * @Author: saber2pr
 * @Date: 2019-05-22 16:57:38
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 16:57:38
 */
export interface Issue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
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
    type: string
    site_admin: false
  }
  labels: []
  state: string
  locked: false
  assignee: any
  assignees: []
  milestone: any
  comments: number
  created_at: string
  updated_at: string
  closed_at: any
  author_association: string
  body: string
}

export type Issues = Array<Issue>
