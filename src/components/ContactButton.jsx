import React from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Contact from './Contact'
  

const ContactButton = () => {
  return (
    <div>
        <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>
                <Contact />
            </PopoverContent>
        </Popover>

    </div>
  )
}

export default ContactButton