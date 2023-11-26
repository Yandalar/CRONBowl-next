import { Grid } from "@mantine/core";
import classes from "./Running.module.css";
import { ScheduleTable } from "@/components/ScheduleTable/ScheduleTable";
import { MatchObject, StandingObject } from "@/types/types";
import StandingsTable from "@/components/StangingsTable/StandingsTable";

type Props = {
  schedule: MatchObject[];
  runningRound: number;
  standings: StandingObject[];
};

export const Running = ({ schedule, runningRound, standings }: Props) => {
  return (
    <Grid className={classes.container} mx="lg" p="md" gutter="xl">
      <Grid.Col span={{ xl: 6, lg: 12, md: 12 }} mt={{ xl: "2.5rem", md: 0 }}>
        <StandingsTable standings={standings} />
      </Grid.Col>
      <Grid.Col
        mt={{ xl: "1rem", md: "2rem" }}
        span={{ xl: 5, lg: 12, md: 12 }}
        p={{ xl: "sm", lg: "sm", md: "xs" }}
        offset={{ xl: 1, md: 0 }}
      >
        <ScheduleTable runningRound={runningRound} schedule={schedule} />
      </Grid.Col>
    </Grid>
  );
};
