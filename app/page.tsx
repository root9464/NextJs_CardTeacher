'use client'
import { Card } from "@/components/card"
import { LayoutGroup } from "framer-motion"
import { useState } from "react"

export default function Home() {
  interface User {
    name: string
    title: string
    image: string
  }
 
  // массивный метод передачи данных
  const image: string[] = [
    'https://i.imgur.com/Y2fru62.png',
  ]

  const [user, setUser] = useState<User[]>([
    {name: 'Червоный Егор', title:'Разработчик данных интерактивных карт, а еще самый лучший ваще в мире)', image: image[0]},
    {name: 'Егурнова Елена Николаевна', title:'none', image: image[0]}
  ])


  return (
   <section className="blockes">
      <h1 className="h1">Преподователи ОКЭИ</h1>
      <LayoutGroup>
        {user.map((e: User) => {
          return <Card props={e} key={e}/>
        })}
      </LayoutGroup>  
   </section>
  )
}
