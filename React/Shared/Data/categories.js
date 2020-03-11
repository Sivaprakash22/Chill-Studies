import Activity from '../Components/Course/Activity'
import Content from '../Components/Course/Content'
import Definitions from '../Components/Course/Definitions'
import Summary from '../Components/Course/Summary'
import Visual from '../Components/Course/Visual'
import Overview from '../Components/Course/Overview'

const categories = [
    {
      name: 'activity',
      component : Activity
    },
    {
        name: 'content',
        component : Content
    },
    {
        name: 'definitons',
        component : Definitions
    },
    {
        name: 'summary',
        component : Summary
    },
    {
        name: 'visual',
        component : Visual
    },
    {
        name: 'overview',
        component : Overview
    },
    {
        name: 'summary',
        component : Summary
    }
]

export default categories