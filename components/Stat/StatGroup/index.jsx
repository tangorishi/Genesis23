import { SimpleGrid } from "@chakra-ui/react";
 import useInView from "../../Anim/useInView";
 import StatBox from "../Statbox";

const stats = [
  {
    statistic_number: "2000+",
    statistic_subject: "Participants",
  },
  {
    statistic_number: "10+",
    statistic_subject: "Sponsors",
  },
  {
    statistic_number: "22nd-25th september",
    statistic_subject: "Dates",
  },
  {
    statistic_number: "300000+",
    statistic_subject: "Prize Pool",
  },
];

const StatGroup = () => {
  const [containerRef, vis] = useInView({ threshold: 0.75 });

 return (
   <SimpleGrid
     ref={containerRef}
     columns={["1", "2", "3", "4", "4"]}
     spacing="24px"
     spacingY="10rem"
     //   height={['280px', '280px', '280px', '300px', '310px', '350px']}
     //   width={['100%', '240px', '280px', '300px', '310px', '350px']}
     //   p={"2rem"}
     //   paddingBottom="0%"
   >
     {stats.map((stat) => (
       <StatBox
         key={stat.statistic_subject}
         numtext={stat.statistic_number}
         subtext={stat.statistic_subject}
         visible={vis}
       />
     ))}
   </SimpleGrid>
 );
};

 

 export default StatGroup;
