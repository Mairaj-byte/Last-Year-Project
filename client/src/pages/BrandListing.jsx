import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const BrandListing = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Brand Listing</h1>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <p>Please sign in to access this page.</p>
      </SignedOut>
    </div>
  )
}

export default BrandListing
