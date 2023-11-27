import { useState } from "react";
import { Flex, Pagination } from "@mantine/core";
import { MatchObject } from "@/types/types";
import { VSField } from "./VSField";

type Props = {
  schedule: MatchObject[];
  runningRound: number;
};

export const ScheduleTable = ({ schedule, runningRound }: Props) => {
  const [activePage, setPage] = useState(runningRound);
  const selectedRound = schedule.filter(
    (match) => parseInt(match.round, 10) === activePage
  );

  return (
    <>
      {selectedRound.map((round) => {
        return (
          <VSField
            key={`${round.idmatch}${round.schedule_origin_uid}`}
            round={round}
          />
        );
      })}
      <Flex justify="center">
        <Pagination value={activePage} onChange={setPage} total={9} mt="md" />
      </Flex>
    </>
  );
};
