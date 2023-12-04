import { Card, Flex, Heading, Table } from "@radix-ui/themes";
import { IssueStatusBadge } from "./components";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

export default async function LatestIssues() {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <Card>
      <Heading size="4" mb="3" className="pl-3">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues?.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex direction="column" align="start" gap="2">
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                  <IssueStatusBadge status={issue.status} />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
