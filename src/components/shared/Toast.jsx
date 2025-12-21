import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function Toast({ message, isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 4000) //

            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
                >
                    <div className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                        <span className="text-lg">✓</span>
                        <span className="font-medium">{message}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
