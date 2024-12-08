'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-8"
      />
    </div>
  )
}