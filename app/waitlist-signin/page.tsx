'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function WaitlistPage() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const router = useRouter()

    const handleJoinWaitlist = async () => {
        setLoading(true)
        setError('')
        setSuccess(false)

        if (!email) {
            setError('Email is required')
            setLoading(false)
            return
        }

        if(!email.includes('@gmail.com')) {
            setError('Invalid email')
            setLoading(false)
            return
        }

        if(email.length > 60) {
            setError('Email is too long')
            setLoading(false)
            return
        }

        try {
            const res = await fetch('/api/save-waitlist-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            if (!res.ok) {
                const err = await res.json()
                throw new Error(err?.message || 'Something went wrong')
            }

            router.push("/waitlist")
            console.log('✅ Successfully saved to waitlist')
            setSuccess(true)
            setEmail('')
        } catch (err: any) {
            console.error('❌ Failed to save waitlist user:', err)
            setError(err.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-xl mx-auto bg-white h-60 flex item-center justify-center px-4">
            <div className="max-w-lg w-full bg-white border border-blue-100 shadow-md rounded-xl p-8 space-y-6 text-center">
                <h1 className="text-3xl font-bold text-neutral-900">
                    Join the <span className="text-blue-600">Waitlist</span>
                </h1>
                <p className="text-neutral-600 text-sm font-semibold">
                    Be the first to try <span className="font-bold">PingGenius</span> when we launch
                </p>

                <div className="flex items-center gap-2">
                    <Input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-blue-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Button
                        onClick={handleJoinWaitlist}
                        disabled={loading || !email}
                        className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer hover:shadow-lg"
                    >
                        {loading ? 'Joining...' : 'Join'}
                    </Button>
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}
                {success && <p className="text-green-600 text-base">✅ You’ve been added to the waitlist!</p>}
            </div>
        </div>
    )
}
