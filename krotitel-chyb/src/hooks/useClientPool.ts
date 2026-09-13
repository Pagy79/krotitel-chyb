"use client";

import { useEffect, useState } from "react";

/** Build a shuffled pool only on the client so SSR HTML cannot disagree with state. */
export function useClientPool<T>(factory: () => T[], deps: unknown[]): T[] | null {
  const [pool, setPool] = useState<T[] | null>(null);

  useEffect(() => {
    setPool(factory());
    // eslint-disable-next-line react-hooks/exhaustive-deps -- caller owns deps
  }, deps);

  return pool;
}
