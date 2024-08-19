import React from 'react';
import { useState } from 'react'

export default function Home() {
  const [myState, setMyState] = useState("hello")
  return (
    <div>
      {myState}
    </div>
  )
}
