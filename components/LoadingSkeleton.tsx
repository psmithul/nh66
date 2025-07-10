'use client'

import React from 'react'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded'
  width?: string
  height?: string
  lines?: number
}

const LoadingSkeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'rectangular',
  width,
  height,
  lines = 1
}) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-dark-200/20 via-dark-100/30 to-dark-200/20 bg-[length:200%_100%]'
  
  const variantClasses = {
    text: 'h-4 rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    rounded: 'rounded-md'
  }

  const style = {
    width: width || undefined,
    height: height || undefined
  }

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses.text} ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
            style={style}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  )
}

// Specific loading components
export const MetricCardSkeleton = () => (
  <div className="metric-card">
    <div className="flex items-center justify-between mb-4">
      <LoadingSkeleton variant="circular" width="20px" height="20px" />
      <LoadingSkeleton variant="rounded" width="80px" height="20px" />
    </div>
    <div className="space-y-3">
      <LoadingSkeleton variant="text" width="60px" height="32px" />
      <LoadingSkeleton variant="text" width="100px" height="16px" />
      <LoadingSkeleton variant="text" width="80px" height="12px" />
    </div>
  </div>
)

export const ChartSkeleton = () => (
  <div className="card">
    <div className="flex items-center justify-between mb-6">
      <LoadingSkeleton variant="text" width="200px" height="24px" />
      <div className="flex space-x-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <LoadingSkeleton key={i} variant="rounded" width="40px" height="32px" />
        ))}
      </div>
    </div>
    <div className="relative h-80">
      <LoadingSkeleton className="w-full h-full" variant="rounded" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-finance-green"></div>
      </div>
    </div>
  </div>
)

export const TeamMemberSkeleton = () => (
  <div className="card">
    <div className="flex flex-col items-center text-center">
      <LoadingSkeleton variant="circular" width="80px" height="80px" className="mb-4" />
      <LoadingSkeleton variant="text" width="120px" height="20px" className="mb-2" />
      <LoadingSkeleton variant="text" width="100px" height="16px" className="mb-3" />
      <LoadingSkeleton variant="text" lines={3} className="mb-4" />
      <div className="flex space-x-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <LoadingSkeleton key={i} variant="circular" width="32px" height="32px" />
        ))}
      </div>
    </div>
  </div>
)

export const ResearchPostSkeleton = () => (
  <div className="card">
    <div className="flex items-start space-x-4 mb-4">
      <LoadingSkeleton variant="circular" width="40px" height="40px" />
      <div className="flex-1">
        <LoadingSkeleton variant="text" width="80px" height="16px" className="mb-2" />
        <LoadingSkeleton variant="text" width="60px" height="14px" />
      </div>
      <LoadingSkeleton variant="rounded" width="60px" height="24px" />
    </div>
    <LoadingSkeleton variant="text" width="100%" height="24px" className="mb-3" />
    <LoadingSkeleton variant="text" lines={3} className="mb-4" />
    <div className="flex items-center justify-between">
      <LoadingSkeleton variant="text" width="100px" height="16px" />
      <LoadingSkeleton variant="rounded" width="80px" height="32px" />
    </div>
  </div>
)

export const TableSkeleton = ({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) => (
  <div className="data-table">
    <thead>
      <tr>
        {Array.from({ length: columns }).map((_, i) => (
          <th key={i}>
            <LoadingSkeleton variant="text" width="80px" height="16px" />
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex}>
              <LoadingSkeleton variant="text" width="60px" height="16px" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </div>
)

export default LoadingSkeleton 