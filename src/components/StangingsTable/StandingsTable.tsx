import { StandingObject } from "@/types/types";
import { Table } from "@mantine/core";
import classes from "./Standings.module.css";
import { useViewportSize } from "@mantine/hooks";

type Props = {
  standings: StandingObject[];
};

export default function StandingsTable({ standings }: Props) {
  const { height, width } = useViewportSize();
  const rows = standings.map((team) => (
    <Table.Tr key={team.idteam}>
      <Table.Td>{team.coach_name}</Table.Td>
      <Table.Td>{team.team_name}</Table.Td>
      <Table.Td>{team.points}</Table.Td>
      {width > 760 && (
        <>
          <Table.Td>{team.gp}</Table.Td>
          <Table.Td>{team.wins}</Table.Td>
          <Table.Td>{team.draws}</Table.Td>
          <Table.Td>{team.losses}</Table.Td>
          <Table.Td>{team.td}</Table.Td>
          <Table.Td>{team.td_diff}</Table.Td>
          <Table.Td>{team.cas}</Table.Td>
          <Table.Td>{team.cas_diff}</Table.Td>
        </>
      )}
    </Table.Tr>
  ));
  return (
    <Table
      striped
      withColumnBorders
      verticalSpacing={"1"}
      cellSpacing={1}
      className={classes.container}
      highlightOnHover
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Entrenador</Table.Th>
          <Table.Th>Nombre del Equipo</Table.Th>
          <Table.Th>Ptos</Table.Th>
          {width > 760 && (
            <>
              <Table.Th>PJ</Table.Th>
              <Table.Th>G</Table.Th>
              <Table.Th>E</Table.Th>
              <Table.Th>P</Table.Th>
              <Table.Th>TD</Table.Th>
              <Table.Th>TD+/-</Table.Th>
              <Table.Th>Les</Table.Th>
              <Table.Th>Les+/-</Table.Th>
            </>
          )}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
