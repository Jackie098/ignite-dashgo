import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { useSidebarDrawer } from "@/context/SidebarDrawerContext";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawnerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawnerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={"gray.800"} p={4}>
            <DrawerCloseButton mt={6} />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w={"64"} mr="8">
      <SidebarNav />
    </Box>
  );
}
