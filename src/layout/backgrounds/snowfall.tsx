'use client'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

interface Snowflake {
	id: number
	type: 'dot' | 'image'
	imageIndex?: number
	size: number
	duration: number
	delay: number
	left: number
	rotate: number
}

const DOT_RATIO = 1

export default function SnowfallBackground({ zIndex, count = 125 }: { zIndex: number; count?: number }) {
	const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

	useEffect(() => {
		const generateSnowflakes = () => {
			const newSnowflakes: Snowflake[] = []
			for (let i = 0; i < count; i++) {
				const size = Math.random() * 10 + 5
				const duration = Math.random() * 20 + 20
				const delay = Math.random() * 40
				const left = Math.random() * 120

				newSnowflakes.push({
					id: i,
					type: 'dot',
					size,
					duration,
					delay,
					left,
					rotate: 0
				})
			}
			setSnowflakes(newSnowflakes)
		}

		generateSnowflakes()
	}, [count])

	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: 1 }}
			className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
			style={{ zIndex }}>
			{snowflakes.map(snowflake => (
				<motion.div
					key={snowflake.id}
					className='absolute'
					style={{
						top: -200,
						left: `${snowflake.left}%`,
						width: `${snowflake.size}px`,
						height: `${snowflake.size}px`
					}}
					initial={{ y: 0, x: 0 }}
					animate={{
						y: window.innerHeight + 200,
						x: `-${(Math.random() * window.innerWidth) / 5}px`,
						rotate: snowflake.type === 'image' ? snowflake.rotate : 0
					}}
					transition={{
						duration: snowflake.duration,
						delay: snowflake.delay,
						repeat: Infinity,
						ease: 'linear'
					}}>
				<div className='h-full w-full rounded-full bg-white' />
				</motion.div>
			))}
		</motion.div>
	)
}
