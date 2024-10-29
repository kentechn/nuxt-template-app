interface AlertMsg {
  level: "error" | "warning" | "info" | "success"
  description?: string
  title: string
}

export const useAlertMsg = () => {
  const alertMsg = useState<AlertMsg | null>("alert-msg", () => null)
  const clearAlertMsg = () => {
    alertMsg.value = null
  }

  const setAlertMsg = (msg: AlertMsg) => {
    alertMsg.value = msg
  }

  return {
    alertMsg,
    setAlertMsg,
    clearAlertMsg,
  }
}
