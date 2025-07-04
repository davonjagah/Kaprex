# Kaprex - Global Payment Orchestration Platform

Kaprex is a global payment orchestration platform that enables seamless conversion between fiat and stablecoins, borderless payments, and on-chain savings—powered by industry-leading infrastructure from Circle, Bridge, and LI.FI.

At its foundation, Kaprex abstracts complex blockchain and banking integrations into simple user and business experiences through direct integration with custodial-grade and compliant partners.

## 🔗 Powered by Trusted Infrastructure

### Circle Wallets
Every Kaprex user is provisioned with a Circle wallet—a secure, compliance-ready wallet infrastructure that supports USDC and EURC. This ensures institutional-grade custody, blockchain transparency, and seamless interoperability with partner ecosystems.

### Bridge
Kaprex leverages Bridge's stablecoin settlement rails to route cross-border payments efficiently. Inward and outward transactions are processed in USDC and EURC, with support for payment rails such as ACH, SEPA, SWIFT, and Wire, enabling local bank interactions globally.

### LI.FI
Cross-chain liquidity and routing are abstracted via LI.FI, enabling seamless asset movement across supported blockchains, ensuring the best rates and minimal slippage.

## 🧾 Core Capabilities

- **Fiat ↔ Stablecoin Onramp/Offramp**: Users can easily convert between their local currency and stablecoins like USDC, EURC, and sUSD, with settlements occurring via Circle wallets and Bridge payouts.

- **Cross-Border Payments**: Payments are executed over stablecoin rails, with local disbursements and global funding handled via regulated banking pathways—ideal for freelancers, businesses, and remote workers.

- **Merchant Payment Solutions**: Businesses can receive stablecoin payments globally and settle locally in fiat—without needing to manage custody, compliance, or FX.

- **Yield & Savings**: Kaprex enables earnings on idle balances via DeFi protocols, including stablecoin yields (USDC, USDT, sUSD) and liquid staking with KSOL, offering returns up to 8%.

## 🔐 Secure Wallet Experience
Kaprex offers a user experience on top of Circle's infrastructure:

## 🎯 Ideal Users
- Global freelancers, merchants, and businesses receiving international payments.
- Crypto-native users seeking regulated stablecoin access and compliant infrastructure.
- Platforms needing embedded stablecoin wallets and global payout capabilities.

## 💼 Business Model
- Spread on fiat ↔ stablecoin exchange
- API and orchestration fees for embedded services
- Yield from pooled DeFi participation
- Virtual account and wallet-as-a-service fees

Kaprex is bridging the gap between stablecoin infrastructure and global money movement—enabling programmable finance at scale, without the friction of legacy systems.

## 🚀 Progress During Hackathon

### ✅ Infrastructure & Integration

**Circle Wallets**
- Fully integrated programmable wallet infrastructure via Circle
- Supports USDC and EURC
- Wallets are provisioned programmatically within our backend, enabling secure orchestration of user balances and transactions

**Bridge**
- End-to-end integration for cross-border payments
- Fiat funding and disbursement via ACH, SEPA, SWIFT, and Wire
- All flows are settled in USDC and EURC

**LI.FI**
- Implemented to power cross-chain token routing and liquidity aggregation
- Enables users to onramp from other chains or multiple cryptocurrencies into their default Kaprex USDC wallet
- Also enables users to onramp directly into their Metamask wallet via Kaprex and spend with their Metamask card

---

## 🏗️ Project Structure

This monorepo contains both frontend applications and a comprehensive backend server:

### Frontend Apps (Next.js + TypeScript)

- **`dashboard`** – Next.js App Router app for Kaprex dashboard
- **`stake`** – Next.js App Router app for stake feature  
- **`landing`** – Next.js App Router app for unsigned users
- **`storybook`** – Component documentation and testing environment

### Backend Server (`/Server`)

A comprehensive NestJS backend that powers all Kaprex integrations:

#### 🔧 Core Modules
- **Authentication & Authorization** - JWT-based auth with Google OAuth support
- **User Management** - Complete user lifecycle with KYC integration
- **Wallet Management** - Circle wallet orchestration and management
- **Bridge Integration** - Cross-border payment processing
- **Email Services** - Transactional emails via SendGrid
- **Health Monitoring** - System health and monitoring endpoints

#### 🔗 Key Integrations

**Circle API Integration**
- Programmatic wallet creation and management
- Multi-blockchain support (Solana, Ethereum, Polygon, etc.)
- Real-time balance tracking and transaction monitoring
- Secure entity secret management with encryption

**Bridge API Integration**
- Virtual account creation and management
- Cross-border payment processing
- KYC link generation and status tracking
- Multi-currency support (USD, EUR, etc.)

**LI.FI Integration**
- Cross-chain token routing and liquidity aggregation
- Widget configuration for seamless frontend integration
- Support for 50+ blockchain networks
- Real-time rate optimization

#### 🛠️ Technical Stack
- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with TypeORM
- **Caching**: Redis for session management
- **Authentication**: JWT + Passport.js
- **Email**: SendGrid with Handlebars templates
- **Deployment**: AWS-ready with serverless support
- **Documentation**: Swagger/OpenAPI

### Shared Packages

- `ui`: shared React component library using Tailwind CSS
  - `atoms`: Basic building blocks (Button, Typography, IconButton)
  - `molecules`: Composed components (Header)
  - `widgets`: Complex UI sections
  - `icons`: SVG icon components
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: shared `tsconfig.json` setup
- `tailwind-config`: shared Tailwind v4 configuration

## 🚀 Development

### Frontend Development

```bash
# Install dependencies
yarn install

# Start all apps (if using Turborepo dev script)
yarn dev

# Start a single app
yarn workspace dashboard dev
yarn workspace stake dev
yarn workspace landing dev

# Start Storybook
yarn storybook

# Run tests
yarn test

# Build all apps and packages
yarn build
```

### Backend Development

```bash
# Navigate to server directory
cd Server

# Install dependencies
npm install

# Start development server
npm run start:dev

# Run migrations
npm run migration:run

# Generate new migration
npm run migration:generate

# Run tests
npm run test
```

## 📁 Folder Structure

```bash
.
├── apps/
│   ├── dashboard/          # Main dashboard application
│   ├── stake/             # Staking application
│   ├── landing/           # Landing page
│   └── storybook/         # Component documentation
├── packages/
│   ├── ui/               # Shared UI components
│   ├── eslint-config/    # ESLint configurations
│   ├── tailwind-config/  # Tailwind configuration
│   └── typescript-config/ # TypeScript configurations
├── Server/               # 🆕 Backend NestJS application
│   ├── src/
│   │   ├── auth/         # Authentication module
│   │   ├── users/        # User management
│   │   ├── wallet/       # Circle wallet integration
│   │   ├── bridge/       # Bridge payment integration
│   │   ├── config/       # Configuration management
│   │   └── migrations/   # Database migrations
│   └── package.json
├── turbo.json
└── package.json
```

## 🔐 Security & Compliance

- **Circle Integration**: Institutional-grade custody and compliance
- **Bridge Integration**: Regulated payment rails and KYC
- **Encryption**: Entity secrets encrypted with public key cryptography
- **Rate Limiting**: API protection with throttling
- **Session Management**: Secure Redis-based sessions
- **CORS Protection**: Configured for production security

## 📊 API Documentation

The backend includes comprehensive API documentation via Swagger:

- **Development**: `http://localhost:3000/api-docs`
- **Production**: Available at `/api-docs` endpoint

## 🧪 Testing

```bash
# Frontend tests
yarn test

# Backend tests
cd Server && npm run test

# Backend e2e tests
cd Server && npm run test:e2e
```

## 🚀 Deployment

### Frontend
- Vercel-ready with Next.js
- Turborepo optimized builds
- Environment-specific configurations

### Backend
- AWS Lambda ready with serverless framework
- Docker containerization support
- Environment-based configuration management
- Database migration automation

## 📈 Monitoring & Health

- Health check endpoints for all services
- Redis connection monitoring
- Database connection status
- Circle API integration status
- Bridge API integration status

---

Kaprex represents the future of global payments—where traditional banking meets blockchain innovation, powered by the most trusted infrastructure providers in the space.
