export type OpenCheckResult = {
  correct: boolean;
  message?: string;
};

function normalizeOpenInput(raw: string): string {
  return raw.trim().replace(/\s+/g, "").replace(/%/g, "").replace(",", ".");
}

function parseOpenNumber(raw: string): number | null {
  const n = normalizeOpenInput(raw);
  if (!n) return null;
  if (n.includes("/")) {
    const [a, b] = n.split("/");
    const x = Number(a);
    const y = Number(b);
    if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) return x / y;
    return null;
  }
  const v = Number(n);
  return Number.isFinite(v) ? v : null;
}

function nearlyEqual(a: number, b: number) {
  return Math.abs(a - b) < 1e-4;
}

function formatCz(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return String(n).replace(".", ",");
}

function isPercentQuestion(prompt?: string) {
  return Boolean(prompt && /procent/i.test(prompt));
}

/** Open numeric answers: 75, 75%, 12,5, 3/4 vs 75, 0,75 vs 75. */
export function checkOpenAnswer(raw: string, accept: string[], prompt?: string): OpenCheckResult {
  const normalized = normalizeOpenInput(raw);
  if (!normalized) return { correct: false };
  if (accept.map(normalizeOpenInput).includes(normalized)) return { correct: true };

  const given = parseOpenNumber(raw);
  const acceptedNums = accept.map(parseOpenNumber).filter((n): n is number => n != null);
  if (given != null && acceptedNums.some((n) => nearlyEqual(given, n))) {
    return { correct: true };
  }

  if (given != null && isPercentQuestion(prompt)) {
    const percentMatch = acceptedNums.find((n) => n > 0 && nearlyEqual(given * 100, n));
    if (percentMatch != null) {
      return {
        correct: false,
        message: `Zapsal(a) jsi desetinný podíl (${formatCz(given)}). Otázka chce procenta — vynásob stem: ${formatCz(percentMatch)}.`,
      };
    }

    const complement = acceptedNums.find((n) => n > 0 && n < 100 && nearlyEqual(given + n, 100) && !nearlyEqual(given, n));
    if (complement != null) {
      return {
        correct: false,
        message: `Zapsal(a) jsi doplněk do 100 % (${formatCz(given)}). Otázka se ptá na druhou část: ${formatCz(complement)}.`,
      };
    }
  }

  if (given != null && given >= 1) {
    const decimalMatch = acceptedNums.find((n) => n > 0 && n < 1 && nearlyEqual(given / 100, n));
    if (decimalMatch != null) {
      return {
        correct: false,
        message: `Zapsal(a) jsi procenta (${formatCz(given)}), ale tady se čeká desetinný podíl: ${formatCz(decimalMatch)}.`,
      };
    }
  }

  return { correct: false };
}
