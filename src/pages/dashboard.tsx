import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
/**
 * @description "Dynamic" is used when we need loading a module only client side.
 *
 * @description The next render your components firstly in the server side, but dynamic exists
 * only in client side, then, this throw a error that is resolved loading this module(dynamic)
 * in the client side.
 *
 * For this occur, the option 'ssr' must be setted 'false'
 */
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toobar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2023-03-18T00:00:00.000Z",
      "2023-03-19T00:00:00.000Z",
      "2023-03-20T00:00:00.000Z",
      "2023-03-21T00:00:00.000Z",
      "2023-03-22T00:00:00.000Z",
      "2023-03-23T00:00:00.000Z",
      "2023-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
} as ApexOptions;
const series = [
  { name: "series1", data: [21, 120, 10, 28, 61, 18, 109] },
] as ApexOptions["series"];

export default function Dashboard() {
  return (
    <Flex flexDirection={"column"} h={"100vh"}>
      <Header />

      <Flex w={"100%"} my="6" maxW={1480} mx={"auto"} px={"6"}>
        <Sidebar />

        <SimpleGrid
          flex={1}
          gap={4}
          minChildWidth={"320px"}
          alignContent="flex-start"
        >
          <Box p={["4", "8"]} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize={"lg"} mb={4}>
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize={"lg"} mb={4}>
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
