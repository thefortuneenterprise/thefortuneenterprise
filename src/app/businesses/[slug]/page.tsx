import { BUSINESSES } from "@/lib/data";
import Link from "next/link";

type Props = { params: { slug: string } };

export default function BusinessPage({ params }: Props) {
  const slug = params.slug;
  const business = BUSINESSES.find((b) => b.id === slug);
  if (!business) {
    return (
      <div className="mx-auto max-w-4xl p-8">
        <h2 className="text-2xl font-semibold">Business not found</h2>
        <p className="mt-4">The requested business could not be located.</p>
        <Link href="/">Return home</Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-heading text-3xl font-semibold text-primary">{business.title}</h1>
        <Link href="/businesses" className="text-sm text-slate-600">Back</Link>
      </div>
      <p className="text-slate-700">{business.summary}</p>
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-accent p-6">Detailed information and capabilities for {business.title}.</div>
        <div className="rounded-lg border border-slate-200 bg-accent p-6">Contact the business division for partnerships and inquiries.</div>
      </section>
    </main>
  );
}
