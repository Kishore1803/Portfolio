import { motion } from "motion/react";

const cyan = "#00D9FF";
const purple = "#A78BFA";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="position-fixed top-0 start-0 w-100 vh-100 d-flex flex-column justify-content-center align-items-center overflow-hidden"
      style={{
        zIndex: 9999,
        background: "rgba(3, 7, 20, 0.96)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Ambient neon glow */}
      <motion.div
        className="position-absolute rounded-circle pe-none"
        style={{
          width: "280px",
          height: "280px",
          background: "rgba(0, 217, 255, 0.12)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating neon rings */}
      <div
        className="position-relative d-flex justify-content-center align-items-center mb-4"
        style={{ width: "120px", height: "120px" }}
      >
        <motion.div
          className="position-absolute rounded-circle"
          style={{
            inset: 0,
            border: `2px solid transparent`,
            borderTopColor: cyan,
            borderRightColor: "rgba(0, 217, 255, 0.25)",
            filter: "drop-shadow(0 0 8px rgba(0,217,255,0.65))",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="position-absolute rounded-circle"
          style={{
            inset: "10px",
            border: "2px solid transparent",
            borderBottomColor: purple,
            borderLeftColor: "rgba(167, 139, 250, 0.3)",
            filter: "drop-shadow(0 0 8px rgba(167,139,250,0.6))",
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* K Logo */}
        <motion.div
          className="d-flex justify-content-center align-items-center rounded-4 fw-bold"
          style={{
            width: "65px",
            height: "65px",
            fontSize: "30px",
            color: "#06101F",
            background: `linear-gradient(135deg, ${cyan}, ${purple})`,
            boxShadow: "0 0 30px rgba(0, 217, 255, 0.35)",
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: 1,
          }}
          transition={{
            scale: {
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: { duration: 0.6 },
          }}
        >
          K
        </motion.div>
      </div>

      {/* Name */}
      <motion.h4
        className="fw-bold mb-2"
        style={{
          color: "#F1F5F9",
          letterSpacing: "1px",
          textShadow: "0 0 20px rgba(0,217,255,0.15)",
        }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Kishore K
      </motion.h4>

      {/* Subtitle */}
      <motion.p
        className="mb-4"
        style={{
          color: "#A8B6CC",
          fontSize: "12px",
          letterSpacing: "2px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        SOFTWARE DEVELOPER
      </motion.p>

      {/* Loading dots */}
      <div className="d-flex align-items-center gap-2">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="rounded-circle"
            style={{
              width: "7px",
              height: "7px",
              background: dot === 1 ? purple : cyan,
              boxShadow: `0 0 10px ${
                dot === 1 ? "rgba(167,139,250,0.7)" : "rgba(0,217,255,0.7)"
              }`,
            }}
            animate={{
              y: [0, -7, 0],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: dot * 0.15,
            }}
          />
        ))}
      </div>

      <motion.small
        className="mt-3"
        style={{
          color: "#94A3B8",
          fontSize: "11px",
          letterSpacing: "0.5px",
        }}
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Initializing portfolio...
      </motion.small>

      {/* Bottom loading line */}
      <div
        className="position-absolute overflow-hidden rounded-pill"
        style={{
          bottom: "35px",
          width: "160px",
          height: "3px",
          background: "rgba(148, 163, 184, 0.15)",
        }}
      >
        <motion.div
          className="h-100 rounded-pill"
          style={{
            width: "45%",
            background: `linear-gradient(90deg, ${cyan}, ${purple})`,
            boxShadow: "0 0 12px rgba(0, 217, 255, 0.5)",
          }}
          animate={{ x: [-80, 160] }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

export default Loader;
