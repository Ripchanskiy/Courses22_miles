import { useLocation } from "react-router-dom"

export default function useQueryParams() {
  const query = new URLSearchParams(useLocation().search)
  return new Proxy(query, {
    get(target, prop) {
      return target.get(prop)
    },
  })
  // another approach
  // export default function useQueryParams(params) {
  // const query = new URLSearchParams(useLocation().search)
  // const requestedParams = params.map((param) => ({ [param]: query.get(param) }))
  // return Object.assign({}, ...requestedParams)
  // }
  // after then...
  //  const { scope, type } = useQueryParams(['scope', 'type']);
}
