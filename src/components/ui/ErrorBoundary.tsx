'use client'

import React from 'react'

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log to console in dev
    if (process.env.NODE_ENV === 'development') {
      console.error('[Origin Error Boundary]', error, info)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-32 h-32 rounded-full border border-purple-500/20 animate-pulse" />
          </div>
        )
      )
    }
    return this.props.children
  }
}
