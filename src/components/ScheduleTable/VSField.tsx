import { Flex, Text, Title } from "@mantine/core";
import classes from "./VSField.module.css";
import { MatchObject } from "@/types/types";
import { useViewportSize } from "@mantine/hooks";

type Props = {
  round: MatchObject;
};

export const VSField = ({ round }: Props) => {
  const { height, width } = useViewportSize();
  return (
    <>
      <Flex
        justify={width >= 760 ? "space-between" : "center"}
        align={"center"}
        className={classes.container}
        px={"xs"}
        py={"lg"}
      >
        {width >= 760 && (
          <Text
            w={"30%"}
            fz={{ xl: "12px", lg: "12px", md: "10px", sm: "8px" }}
          >
            {round.score_away !== "" ? "Jugado" : "Programado"}
          </Text>
        )}
        <Flex
          justify={width >= 760 ? "space-between" : "center"}
          align="center"
          direction={width >= 760 ? "row" : "column"}
          w={"70%"}
        >
          <Title
            ta={width >= 760 ? "right" : "center"}
            px="sm"
            className={classes.team}
            miw={"35%"}
          >
            {round.team_name_home}
          </Title>
          <Flex justify="center" align="center" className={classes.score}>
            <Title mr="xs">
              {round.score_away !== "" ? round.score_home : "?"}
            </Title>
            <span> - </span>
            <Title ml="xs">
              {round.score_away !== "" ? round.score_away : "?"}
            </Title>
          </Flex>
          <Title
            ta={width >= 760 ? "left" : "center"}
            miw={"35%"}
            className={classes.team}
          >
            {round.team_name_away}
          </Title>
        </Flex>
      </Flex>
    </>
  );
};
