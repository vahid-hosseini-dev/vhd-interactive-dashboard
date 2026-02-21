import { Provider } from "@/src/components/ui/provider";
import { Header, Footer } from "../components/layout";
import { Container, Flex } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <AuthProvider>
            <Header />
            <Container
              w="full"
              maxW="1140px"
              mx="auto"
              bg="white"
              p="0"
              shadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
            >
              <Flex direction="column" minH="100vh" align="center">
                <Flex flex="1" alignItems="center" mt="20">
                  {children}
                </Flex>
              </Flex>
            </Container>
            <Footer />
          </AuthProvider>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
