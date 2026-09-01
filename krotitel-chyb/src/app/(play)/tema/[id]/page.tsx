import { notFound } from "next/navigation";
import { TopicSession } from "@/components/TopicSession";
import { TOPICS } from "@/data/topics";
import type { TopicId } from "@/lib/types";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}

export default async function TemaPage({ params }: PageProps<"/tema/[id]">) {
  const { id } = await params;
  const topic = TOPICS.find((t) => t.id === id);
  if (!topic) notFound();
  return <TopicSession topicId={id as TopicId} />;
}
