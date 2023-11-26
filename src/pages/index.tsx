import { MatchObject, StandingObject } from "@/types/types";
import { findRunningRound } from "@/utils/scheduleFunctions";
import { Running } from "@/views/Home/Running";
import { GetServerSideProps } from "next";
import Head from "next/head";

type Props = {
  schedule: MatchObject[];
  runningRound: number;
  standings: StandingObject[];
};

export default function Home({ schedule, runningRound, standings }: Props) {
  return (
    <>
      <Head>
        <title>CRONBowl</title>
        <meta name="description" content="Sitio oficial de la Liga CRONBowl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Running
          runningRound={runningRound}
          schedule={schedule}
          standings={standings}
        />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const scheduleData = await fetch(`${process.env.SITE_URL}/api/schedule`);
  const standingsData = await fetch(`${process.env.SITE_URL}/api/standings`);

  // Display the result
  const schedule = await scheduleData.json();
  const standings = await standingsData.json();
  const runningRound = findRunningRound(schedule);

  return {
    props: {
      schedule,
      runningRound,
      standings,
    },
  };
};
