import prisma from "@/prisma/client";
import IssuesToolbar from "./IssuesToolbar";
import { Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssuesTable, { IssueQuery, columnNames } from "./IssuesTable";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: IssueQuery;
}

export default async function IssuesPage({ searchParams }: Props) {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const where = { status };
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where: where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issuesCount = await prisma.issue.count({ where: where });

  return (
    <Flex direction="column" gap="3">
      <IssuesToolbar />
      <IssuesTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issuesCount}
      />
    </Flex>
  );
}

export const dynamic = "force-dynamic";
