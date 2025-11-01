import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { HamburgerIcon } from "./HumbergerIcon";

export const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          className="bg-transparent"
          aria-label="Open menu"
          whileHover={{
            backgroundColor: "hsl(var(--accent) / 0.1)",
            borderColor: "hsl(var(--accent))",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <HamburgerIcon />
        </motion.button>
      </SheetTrigger>
      <SheetContent side="right">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <SheetHeader>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <SheetTitle className="text-2xl font-bold">MBRK</SheetTitle>
            </motion.div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <SheetDescription>
                Explore MBRK — a showcase of innovation, technical expertise,
                and creative vision. Discover more about our journey,
                capabilities, featured projects, and insights.
              </SheetDescription>
            </motion.div>
          </SheetHeader>

          <nav className="flex flex-col gap-3 px-4 mt-6">
            {["About", "Skills", "Projects", "Blog", "Contact"].map(
              (item, index) => {
                const href =
                  item === "About" ? "#about" : `/${item.toLowerCase()}`;
                return (
                  <motion.a
                    key={item}
                    href={href}
                    className="py-3 text-xl sm:text-2xl md:text-4xl transition-colors duration-200 border-b-2 border-transparent hover:border-destructive hover:text-destructive"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.3,
                    }}
                    whileHover={{ x: 8 }}
                  >
                    {item}
                  </motion.a>
                );
              }
            )}
          </nav>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};
