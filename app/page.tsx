import { PrismaClient } from "@prisma/client";
import IssuesChart from "./IssuesChart";
import { Flex, Grid } from "@radix-ui/themes";
import IssuesSummary from "./IssuesSummary";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const prisma = new PrismaClient();

  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  const issuesProps = {
    open: openIssues,
    inProgress: inProgressIssues,
    closed: closedIssues,
  };

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssuesSummary {...issuesProps} />
        <IssuesChart {...issuesProps} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}
