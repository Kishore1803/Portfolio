import { motion } from "motion/react";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="position-fixed top-0 start-0 w-100 vh-100 bg-black d-flex flex-column justify-content-center align-items-center"
      style={{ zIndex: 9999 }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="d-flex align-items-center justify-content-center rounded-circle bg-success text-dark fw-bold mb-3"
        style={{ width: "65px", height: "65px", fontSize: "30px" }}
      >
        K
      </motion.div>

      {/* Name */}
      <motion.h5
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white fw-semibold mb-4"
      >
        Kishore K
      </motion.h5>

      <div className="d-flex gap-2">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="bg-success rounded-circle"
            style={{ width: "7px", height: "7px" }}
            animate={{ y: [0, -7, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.15 }}
          />
        ))}
      </div>
      <motion.small
        className="text-secondary mt-3"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading portfolio...
      </motion.small>
    </motion.div>
  );
}

export default Loader;
