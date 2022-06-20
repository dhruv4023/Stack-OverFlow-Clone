import React from 'react'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import './RightSidebar.css'

export default function RightSidebar() {
  return (
        <aside className='rightSidebar'>
            <Widget />
            <WidgetTags />
        </aside>
  )
}


