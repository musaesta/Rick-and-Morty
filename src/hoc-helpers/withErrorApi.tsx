import { useState } from "react"
import type { OwnProps, WithErrorApiProps } from "./types"
export const withErrorApi = <P extends OwnProps>(
  View: React.FC<P & WithErrorApiProps>,
) => {
  return (props: P) => {
    const [errorApi, setErrorApi] = useState<boolean>(false)

    return (
      <>
        {errorApi ? (
          <h1>Ошибка</h1>
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    )
  }
}
