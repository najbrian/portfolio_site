import { motion } from 'framer-motion'

const Transition = (OgComponent) => {
  return (props) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <OgComponent {...props} />
    </motion.div>
  );
}

export default Transition