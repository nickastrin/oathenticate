import { motion } from "motion/react";
import { useLocation } from "react-router";

interface NavigationMotionWrapperProps {
  children: React.ReactNode;
}

export const NavigationMotionWrapper = ({
  children,
}: NavigationMotionWrapperProps) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      className="size-full flex place-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
