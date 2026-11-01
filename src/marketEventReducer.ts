/**
 * Public, standalone example: accept only newer synthetic market snapshots.
 * It has no external I/O and uses invented data only.
 */
type MarketEvent = {
  instrument: string;
  revision: number;
  observedAt: string;
  mid: number;
};

type QuoteBook = Record<string, MarketEvent>;

export function applyMarketEvent(book: QuoteBook, event: MarketEvent): QuoteBook {
  const current = book[event.instrument];
  if (current && event.revision <= current.revision) return book;
  return { ...book, [event.instrument]: event };
}

const events: MarketEvent[] = [
  { instrument: "DEMO/EUR", revision: 1, observedAt: "2026-01-01T09:00:00Z", mid: 1.2 },
  { instrument: "DEMO/EUR", revision: 1, observedAt: "2026-01-01T09:00:01Z", mid: 9.9 }, // duplicate
  { instrument: "DEMO/EUR", revision: 2, observedAt: "2026-01-01T09:00:02Z", mid: 1.21 },
];

const book = events.reduce(applyMarketEvent, {} as QuoteBook);
console.log(book["DEMO/EUR"]);
