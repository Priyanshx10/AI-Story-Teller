"use client"

import React, { useState } from 'react'
import { Textarea } from './ui/textarea';
import { Select, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SelectContent } from './ui/select';
import { Button } from './ui/button';

function StoryWriter() {
    const [story , setStory] = useState<string>("")
    const [pages , setPages] = useState<number>()

  return (
    <div className=' flex flex-col container '>
        <section className='flex flex-1 flex-col border border-sky-400 rounded-md p-10 space-y-2'>
            <Textarea value={story}
            onChange={(e) => setStory(e.target.value)}
             placeholder='Write a Story about  a robot and human who become friends...' className='flex-1 text-black'/>

            <Select onValueChange={value => setPages(parseInt(value))}>
                <SelectTrigger>
                    <SelectValue placeholder="How many Pages Should be the Story be ?"></SelectValue>
                </SelectTrigger>

                <SelectContent>
                    {Array.from ({length: 10},(_, i) => (
                        <SelectItem key={i} value={String(i+1)}>
                            {i + 1}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </section>
        <section className='flex-1 pb-5 mt-5 flex justify-center'>
            <Button className='w-full' size='lg' disabled= {!story || !pages}> Generate Story </Button>
        </section>

        <section className='flex-1 pb-5 mt-5'>
            <div className=' flex flex-co-reverse w-full space-y-2 bg-gray-500 rounded-md text-white font-mono p-10 h-96 overflow-y-auto'>

            </div>
        </section>
    </div>
  )
}

export default StoryWriter