/*
 * @Author: saber2pr
 * @Date: 2019-05-22 15:19:05
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-24 13:19:01
 */
export type Contents = Array<Content>

export interface Content {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  content: string
  encoding: string
  _links: {
    self: string
    git: string
    html: string
  }
}
