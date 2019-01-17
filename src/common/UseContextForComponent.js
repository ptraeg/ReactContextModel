import React from 'react'
import { useContext, useState } from 'react'

export default function useContextForComponent(Component, ContextType, props) {
  const context = useContext(ContextType)
  const propsFromContext = { ...props, ...context }
  return Component(propsFromContext)
}
