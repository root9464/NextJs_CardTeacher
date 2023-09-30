'use client'
import { Card } from "@/components/card"
import { LayoutGroup } from "framer-motion"
import { useState } from "react"
export default function Home() {
  interface User {
    name: string
    title: string
    content: string | number
  }

  const [user, setUser] = useState<User[]>([
    {name: 'Морозова Маргарита Вячеславовна', title:'none', content:'fffffff'},
    {name: 'Егурнова Елена Николаевна', title:'none', content:'z'}
  ])
  
  return (
   <section className="blockes">
      <h1>ffffff</h1>
      <LayoutGroup>
        {user.map((e: User) => {
          return <Card props={e} key={e}/>
        })}
      </LayoutGroup>  
   </section>
  )
}
