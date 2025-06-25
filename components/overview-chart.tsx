"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function OverviewChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create new chart
    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Income",
            data: [3200, 3500, 3700, 3900, 4100, 4395],
            backgroundColor: "rgba(16, 185, 129, 0.8)",
            borderRadius: 4,
          },
          {
            label: "Expenses",
            data: [2100, 2300, 2200, 2400, 2000, 2150],
            backgroundColor: "rgba(244, 63, 94, 0.8)",
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              borderDash: [2, 4],
              color: "rgba(156, 163, 175, 0.2)",
            },
            ticks: {
              callback: (value) => `₹${value}`,
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
            align: "end",
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ₹${context.parsed.y}`,
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="h-[350px] w-full">
      <canvas ref={chartRef} />
    </div>
  )
}
