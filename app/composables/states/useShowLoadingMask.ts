export const useShowLoadingMask = () => {
  const isShowLoadingMask = useState("isShowLoadingMask", () => false)

  const showLoadingMask = () => {
    isShowLoadingMask.value = true
  }

  const hideLoadingMask = () => {
    isShowLoadingMask.value = false
  }
  return {
    isShowLoadingMask,
    showLoadingMask,
    hideLoadingMask,
  }
}
