import React from 'react'
import { useContext, useState } from 'react'

export default function useContextForComponent(Component, ContextType, props) {
  // This hook simply obtains the desired context based on the context type
  // and then converts all the properties in the context object to props
  // which are then passed to the underlying component for rendering.  This
  // allows the component to be written based solely on props with no
  // underlying knowledge of the context thereby allowing tests to be written
  // without worrying about establishing a context before the component can
  // be tested.
  const context = useContext(ContextType)
  const propsFromContext = { ...context, ...props }
  return Component(propsFromContext)
}
