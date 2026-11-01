export type AIStatus =
  | "NOT_ANALYZED"
  | "ANALYZING"
  | "PASS"
  | "WARN"
  | "HOLD"
  | "BLOCK"
  | "ERROR"

export type Eip712Status =
  | "NOT_REQUESTED"
  | "RECEIVED"
  | "VERIFIED"
  | "FAILED"

export type TxPhase = "PRE_SUBMISSION" | "POST_SUBMISSION"

export type TransactionStatus =
  | "NOT_SENT"
  | "AWAITING_APPROVAL"
  | "SUBMITTED"
  | "CONFIRMING"
  | "SUCCESS"
  | "USER_CANCELLED"
  | "CONTRACT_REJECTED"
  | "ERROR"

export type FailureReason =
  | "USER_CANCELLED"
  | "AI_SIGNATURE_MISMATCH"
  | "SIGNATURE_EXPIRED"
  | "HOLD_PURCHASE_RESTRICTED"
  | "PAYMENT_AMOUNT_MISMATCH"
  | "DUPLICATE_FINGERPRINT"
  | "CONTRACT_REVERT"
  | "SERVER_ERROR"

export interface ChainResult {
  aiStatus: AIStatus
  eip712Status: Eip712Status
  txPhase: TxPhase
  transactionStatus: TransactionStatus
  failureReason?: FailureReason
  failureDetail?: string
  registrationTxHash?: string
  purchaseTxHash?: string
  onchainTrackId?: number
  tokenId?: number
  similarityScore?: number
}

export type Screen = "marketplace" | "upload" | "detail" | "dashboard" | "checkout" | "certificate"
export type LicenseType = "standard" | "exclusive"
