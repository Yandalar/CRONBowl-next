import { Flex, Text, Title } from "@mantine/core";
import classes from "./VSField.module.css";
import { MatchObject } from "@/types/types";

type Props = {
  round: MatchObject;
};

export const VSField = ({ round }: Props) => {
  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        className={classes.container}
        px={"xs"}
      >
        <Text size="9" fz={{ xl: "12px", lg: "12px", md: "10px", sm: "8px" }}>
          {round.score_away !== "" ? "Jugado" : "Programado"}
        </Text>
        <Flex justify={"space-between"} align="center">
          <Title fz={{ xl: "lg", md: "md", sm: "sm" }} ta="center" px="sm">
            {round.team_name_home}
          </Title>
          <Flex justify="center" align="center">
            <Title fz={{ xl: "xl", md: "lg", sm: "md" }} mr="xs">
              {round.score_away !== "" ? round.score_home : "?"}
            </Title>
            <span> - </span>
            <Title fz={{ xl: "xl", md: "lg", sm: "md" }} ml="xs">
              {round.score_away !== "" ? round.score_away : "?"}
            </Title>
          </Flex>
          <Title fz={{ xl: "lg", md: "md", sm: "sm" }} ta="center" px="sm">
            {round.team_name_away}
          </Title>
        </Flex>
      </Flex>
    </>
  );
};
