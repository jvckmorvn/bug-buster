"use client";

import { Select } from "@radix-ui/themes";

export default function AssigneeSelect() {
  return (
    <Select.Root defaultValue="1">
      <Select.Trigger placeholder="Assign user" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">Jack Moran</Select.Item>
          <Select.Item value="2">Tim Cook</Select.Item>
          <Select.Item value="3">Elon Musk</Select.Item>
          <Select.Item value="4">William Gates</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
