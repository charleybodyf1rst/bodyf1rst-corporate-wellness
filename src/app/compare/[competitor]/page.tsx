import { notFound } from "next/navigation";
import CompetitorCompareClient from "./client";
import { competitors, getCompetitor } from "@/data/competitors";

export function generateStaticParams() {
  return competitors.map((c) => ({
    competitor: c.id,
  }));
}

export default function CompetitorComparePage({
  params,
}: {
  params: { competitor: string };
}) {
  const competitor = getCompetitor(params.competitor);

  if (!competitor) {
    notFound();
  }

  return <CompetitorCompareClient competitorId={params.competitor} />;
}
