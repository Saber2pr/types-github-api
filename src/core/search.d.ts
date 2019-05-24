/*
 * @Author: saber2pr 
 * @Date: 2019-05-24 13:15:01 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-05-24 13:15:01 
 */
export type Search<T> = {
  total_count: number
  incomplete_results: boolean
  items: Array<T>
}
