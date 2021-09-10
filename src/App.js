import React from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search'

const items = [
    {
    title: 'question 1',
    content: 'Answer 1'
    },
    {
    title: 'question 2',
     content: 'Answer 2'
    },
    {
    title: 'question 3',
    content: 'Answer 3'
    }
]

export default () => {
    return (
        <div>
            {/* <Accordion items={items}/> */}
            <Search />
        </div>
    )
};