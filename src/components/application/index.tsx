import { ReactNode, useEffect } from "react"
import { Roboto } from "next/font/google"
import { useDispatch, useSelector } from "react-redux"

import { getInitialData } from "@/state/reducers/global"
import { RootState } from "@/state/store"

import { Header } from "../header"

const inter = Roboto({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
})

export function Application({ children }: { children?: ReactNode }) {
  const dispatch = useDispatch()
  const ready = useSelector((state: RootState) => state.global.ready)

  useEffect(() => {
    if (!ready) {
      dispatch(getInitialData())
    }
  }, [dispatch, ready])

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Header />
      <main className={inter.className}>{children}</main>
    </div>
  )
}
