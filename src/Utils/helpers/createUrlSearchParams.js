export default function createUrlSearchParams(data) {
  const urlParams = new URLSearchParams()
  const activeFilterKeys = Object.keys(data).filter((key) => data[key])

  activeFilterKeys.forEach((key) =>
    Array.isArray(data[key])
      ? urlParams.set(key, data[key].join(","))
      : urlParams.set(key, data[key])
  )
  return urlParams
}
