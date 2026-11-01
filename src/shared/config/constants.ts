export const THRESHOLD = {
  warn: 0.8,
  hold: 0.9,
} as const

export const AI_POLICY = {
  model: "LAION-CLAP",
  embeddingDimensions: 512,
  metric: "Cosine Similarity",
  comparisonScope: "등록 음원 벡터 DB",
} as const
