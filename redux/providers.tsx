'use client'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { ReactNode } from 'react'

interface Props {
    children:ReactNode,
}
export function Providers({
    children,
  }: {
    children: React.ReactNode
  })
  {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}