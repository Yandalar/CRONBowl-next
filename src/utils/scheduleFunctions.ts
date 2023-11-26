import { MatchObject } from "@/types/types";

type ApiResponse = {
  result?: {
    cols?: Record<string, number>;
    rows?: any[][];
  };
};

export const matchRowsWithCols = (
  apiResponse: ApiResponse
): Record<string, any>[] => {
  const { cols, rows } = apiResponse?.result || {};

  if (!cols || !rows || rows.length === 0) {
    console.error("Invalid API response structure");
    return [];
  }

  return rows.map((row) => {
    const matchedRow: Record<string, any> = {};
    Object.keys(cols).forEach((colName, index) => {
      matchedRow[colName] = row[index];
    });
    return matchedRow;
  });
};

export const getRoundsWithResults = (
  matches: MatchObject[]
): [string[], string[]] => {
  const roundsWithResults: string[] = [];
  const roundsWithoutResults: string[] = [];

  matches.forEach((match) => {
    const { round, score_away } = match;

    if (round && score_away !== "") {
      if (!roundsWithResults.includes(round)) {
        roundsWithResults.push(round);
      }
    } else {
      if (!roundsWithoutResults.includes(round)) {
        roundsWithoutResults.push(round);
      }
    }
  });

  return [roundsWithResults, roundsWithoutResults];
};

export const findRunningRound = (matches: MatchObject[]): number => {
  const [roundsWithResults, roundsWithoutResults] =
    getRoundsWithResults(matches);

  const repeatingNumber = roundsWithResults.find((round) =>
    roundsWithoutResults.includes(round)
  );

  if (repeatingNumber !== undefined) {
    return Number(repeatingNumber);
  }
  // Find the highest number in roundsWithResults
  const highestNumber =
    roundsWithResults.length > 0
      ? Math.max(...roundsWithResults.map(Number))
      : 0; // Default to 0 if roundsWithResults is empty

  return highestNumber;
};
