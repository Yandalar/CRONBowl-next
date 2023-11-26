import { matchRowsWithCols } from "@/utils/scheduleFunctions";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fetchSchedule = async () => {
    const apiUrl =
      "https://www.mordrek.com:666/api/v1/queries?req={%22compSchedules%22:{%22id%22:%22compSchedules%22,%22idmap%22:{%22idcompetition%22:%22210433%22},%22filters%22:null,%22ordercol%22:%22schedule_origin_uid%22,%22order%22:%22asc%22,%22limit%22:null,%22from%22:0,%22group%22:null,%22aggr%22:null}}";

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // Handle the response data
      return data;
    } catch (error) {
      // Handle errors
      console.error("Fetch error:", error);
    }
  };

  const schedule = await fetchSchedule();

  const sortedSchedule = matchRowsWithCols(schedule.response.compSchedules);

  res.status(200).json(sortedSchedule);
}
