import { notFound } from "next/navigation";
import { Tahak } from "@/components/Tahak";
import { TOPICS } from "@/data/topics";
import type { TopicId } from "@/lib/types";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}

export default async function TahakPage({ params }: PageProps<"/tema/[id]/tahak">) {
  const { id } = await params;
  const topic = TOPICS.find((t) => t.id === id);
  if (!topic) notFound();
  return <Tahak topicId={id as TopicId} />;
}
