import faker from 'faker'
import randomColor from 'randomcolor'
import moment from 'moment'
import React from 'react';

export default function (groupCount = 30, itemCount = 30, daysInPast = 30) {
  let randomSeed = Math.floor(Math.random() * 1000)
  let groups = []
  for (let i = 0; i < groupCount; i++) {
    const name = faker.name.firstName();
    groups.push({
      id: `${i + 1}`,
      title:faker.name.title(),
      //rightTitle: faker.name.lastName(),
      bgColor: randomColor({ luminosity: 'light', seed: randomSeed + i }),
      icon:{
        title : name,
        toolTip : name,
        onClick : () => ("Items has been clicked")
      }
    })
  }

  let items = []
  for (let i = 0; i < itemCount; i++) {
    const startDate = faker.date.recent(daysInPast).valueOf()
    const startValue = moment(startDate).startOf('day').valueOf()
    const endValue = moment(moment(startDate).endOf('day')).valueOf()

    items.push({
      id: i + '',
      group: `${i+1}`,
      //title: faker.hacker.phrase(),
      start: startValue,
      end: endValue,
      status: "pending",
      style:{
        backgroundColor:  "#ffc16233",
        border: "1px solid #e9b15a33"
      },
      // canMove: startValue > new Date().getTime(),
      // canResize: startValue > new Date().getTime() ? (endValue > new Date().getTime() ? 'both' : 'left') : (endValue > new Date().getTime() ? 'right' : false),
      className: (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend gantt-chart-group-item' : 'gantt-chart-group-item',
      itemProps: {
        'data-tip': faker.hacker.phrase(),
        id: `item-${i}` 
      }
    })
  }

  items = items.sort((a, b) => b - a)

  return { groups, items }
}
