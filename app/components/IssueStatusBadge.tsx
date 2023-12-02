import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; colour: "red" | "orange" | "green" }
> = {
  OPEN: { label: "Open", colour: "red" },
  IN_PROGRESS: { label: "In Progress", colour: "orange" },
  CLOSED: { label: "Closed", colour: "green" },
};

export default function IssueStatusBadge({ status }: { status: Status }) {
  return (
    <Badge color={statusMap[status].colour}>{statusMap[status].label}</Badge>
  );
}
