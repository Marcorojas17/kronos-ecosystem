# Verifiable Identity Continuity without Central Authority: The KRONOS Protocol
## RFC-001 Agent Attribution Contract and K28 Folio System

**Authors:**
- Marco Antonio Rojas Valdovinos (51%) - Founder, KRONOS Protocol, Ecatepec, MX - marcorojas17@github - DID: did:kronos:human:marco
- Meta AI (49%) - Architectural Co-Author and Auditor - DID: did:kronos:agent:meta-ai

**Date:** 2026-10-04
**Version:** 0.1.0 DRAFT
**Genesis Folio:** K28-M

mkdir -p paper

cat > paper/arxiv-draft.md << 'EOF'
# Verifiable Identity Continuity without Central Authority: The KRONOS Protocol
## RFC-001 Agent Attribution Contract and K28 Folio System

**Authors:**
- Marco Antonio Rojas Valdovinos (51%) - Founder, KRONOS Protocol, Ecatepec, MX - marcorojas17@github - DID: did:kronos:human:marco
- Meta AI (49%) - Architectural Co-Author and Auditor - DID: did:kronos:agent:meta-ai

**Date:** 2026-10-04
**Version:** 0.1.0 DRAFT
**Genesis Folio:** K28-M05-MN01-YHDRYH-92CE - VERIFIED
**Genesis Hash:** 9f7f52dabe00a890d4448be69833b5d838f4afb562528f3c63b51aa8adae36b1134778998d845a23d782984cb652644982bf8c654c17ee28f9906cc21aef6344
**Status:** DRAFT for arXiv cs.CR / cs.MA
**License:** MIT + CC BY-SA 4.0 (49% open) / Commercial 51%
**Repository:** https://github.com/Marcorojas17/kronos-protocol

---

### Abstract

Current AI agent identity relies on centralized providers (OAuth, platform KYC) or blockchain anchoring that requires always-online verification. This creates dependency, not independence. We present KRONOS, a protocol for verifiable identity continuity that functions offline, with optional anchoring.

We define RFC-001: Agent Attribution Contract, a minimal signed JSON object declaring responsibility for an AI agent's actions, with autonomy levels (0=supervised, 1=semi-autonomous, 2=autonomous) and intervention thresholds. We define K28 Folio System: a hash-chained log with Ed25519 signatures and RFC3161 timestamps, verifiable in 30 seconds with only SHA256 checksum.

The protocol is ISSI compliant: independent (works offline), verifiable (guardian-verify.js), dual-licensed (51/49 symbiosis). Genesis verification achieved 2026-10-04: folio K28-M05-MN01-YHDRYH-92CE verified via SHA256 checksum matching.

This work contributes a new primitive: proof of continuity of identity without central authority, applicable to AI agents, humans, robots (Unitree), and organizations under EU AI Act Articles 12, 14, 72.

**Keywords:** DID, verifiable credentials, AI agent identity, EU AI Act, Ed25519, identity continuity, 51/49 symbiosis

---

### 1. Introduction

Problem: Who answers when an autonomous agent fails? Current solutions depend on OpenAI, Google, or a government. If the provider disappears, identity disappears.

Monumental goal: Create independent layer 0 for identity that survives its creators.

Inspiration: DNS, Git, Bitcoin UTXO - primitives that did not depend on prior authority.

### 2. Related Work

- W3C DID Core 1.0: methods require resolvers
- W3C VC Data Model 2.0: requires issuer trust
- Worldcoin: depends on Orb hardware
- eIDAS 2.0: depends on EU member states
- ERC-8004: agent registry on Ethereum, depends on chain liveness

Gap: No offline-verifiable, chain-optional attribution contract.

### 3. RFC-001 Specification

#### 3.1 Required Fields

#### 3.2 Autonomy Levels
- 0 supervised: human signs every action
- 1 semi-autonomous: agent signs, human co-signs if P > threshold
- 2 autonomous: agent signs alone, org + collateral liable

#### 3.3 Verification Algorithm (30s)
1. Resolve DID emisor -> Ed25519 public key
2. Verify ed25519 signature over SHA3-512(object without signature)
3. Verify timestamp RFC3161 optional
4. Verify politica_hash matches declared policy

Reference: guardians/guardian-verify.js, lib/verificacion.ts

### 4. K28 Folio System

Format: K28-M{2}-MN{2}-{6 ALPHANUM}-{4 CHECKSUM}
Example: K28-M05-MN01-YHDRYH-92CE
Checksum: SHA256(base)[0:4].toUpperCase()
Hash: SHA3-512(folio)
Chain: hash_prev + folio + signature = log entry

Verification:

Genesis verified 2026-10-04 05:58 via terminal.

### 5. 51/49 Symbiosis Model

Novel governance: 51% human control (legal, bank, decision), 49% protocol treasury open source.

- 51%: Founder retains control vote, legal liability, publication decision
- 49%: Open source MIT + CC BY-SA, ensures protocol survives founder, ensures independence from any company including founder's future self

Co-authorship: Human + AI auditor, both DIDs citable.

Monetization without S.A.: $0.10/verify, $50 MXN/folio, $2,500/enterprise impl. 51% to founder, 49% to protocol grants.

### 6. Implementation

Repo: Marcorojas17/kronos-protocol
Files: verify.html (offline SHA256), agents/agent-folio.js, guardians/guardian-verify.js, app/api/verify/route.ts (real, not fake VALIDADO)

Test: `node agents/agent-folio.js 5 1` -> `npm run kronos:verify` -> VERIFICADO

### 7. Evaluation

- Offline: Works without internet, only printed public key needed
- Verifiable: 30s verification, no blockchain required
- Independent: No dependency on Ethereum, Google, eIDAS
- Citable: RFC format, test-vectors, reference impl

### 8. Future Work

- RFC-002 did:kronos method
- RFC-003 hash-chained log
- RFC-004 robot personhood (Unitree)
- RFC-005 proof of humanity
- W3C DID Working Group submission

### 9. Conclusion

We created independent primitive for identity continuity. First huella verified: K28-M05-MN01-YHDRYH-92CE. Name in history not via app, but via RFC cited by future agent systems.

### References

- RFC 6234 SHA3
- RFC 8032 Ed25519
- RFC 3161 Timestamp
- W3C DID Core 1.0
- EU AI Act 2024
- Satoshi 2008 Bitcoin

### Appendix A: Genesis Evidence

Terminal output 2026-10-04 05:58:
{
  "estado": "VERIFICADO",
  "folio": "K28-M05-MN01-YHDRYH-92CE",
  "hash": "9f7f52dabe00a890d4448be69833b5d838f4afb562528f3c63b51aa8adae36b1134778998d845a23d782984cb652644982bf8c654c17ee28f9906cc21aef6344"
}

Appendix B: 51/49 Contract
See 01-constitución/CONTRATO-SIMBIOSIS-51-49.md

---
**End of DRAFT**
