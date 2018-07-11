import React, { Component } from 'react'
import moment from 'moment'

import Timeline from 'react-calendar-timeline/lib'

import generateFakeData from './generate-fake-data'
import 'react-calendar-timeline/lib/Timeline.css'

var keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end'
}

const { groups, items } = generateFakeData()
    const defaultTimeStart = moment()
      .startOf('day')
      .toDate()
    const defaultTimeEnd = moment()
      .startOf('day')
      .add(1, 'day')
      .toDate()

    const state = {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd
    }

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd } = state

    return (
      <Timeline
        groups={groups}
        items={items}
        keys={keys}
        sidebarContent={<div>Above The Left</div>}
        itemsSorted
        itemTouchSendsClick={false}
        stackItems
        itemHeightRatio={0.75}
        showCursorLine
        canMove={false}
        canResize={false}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
      />
    )
  }
}
