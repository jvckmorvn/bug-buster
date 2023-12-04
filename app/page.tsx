import { PrismaClient } from "@prisma/client";
import IssuesSummary from "./IssuesSummary";
import IssuesChart from "./IssuesChart";

export default async function Home() {
  const prisma = new PrismaClient();

  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <IssuesChart
      open={openIssues}
      inProgress={inProgressIssues}
      closed={closedIssues}
    />
  );
}
