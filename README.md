# ScalpGuard 🛡️

ScalpGuard is an intelligent, anti-scalper behavioral firewall backend designed to protect high-demand checkout systems and inventories from malicious automated bots. Using inline machine learning, it evaluates traffic patterns at the network edge before requests can overstrain downstream application databases.

## 🚀 Core Features
* **Behavioral AI Classification:** Uses an integrated `TensorFlow.js` model to score incoming payload metrics (request velocity, dynamic intervals) in real-time.
* **Perimeter Defense Protection:** Drops bot traffic instantly with an `HTTP 403 Forbidden` status code, preventing automated high-frequency script attacks.
* **Persistent Transaction Ledger:** Integrates atomically with a cloud `Supabase` database to handle transaction stock checks and secure customer tracking logs.

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/ScalpGuard.git](https://github.com/your-username/ScalpGuard.git)
   cd ScalpGuard/backend